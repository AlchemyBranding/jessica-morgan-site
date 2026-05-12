import sharp from 'sharp'
import { stat, unlink, rename } from 'fs/promises'
import { join } from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const publicDir = join(__dirname, '..', 'public')

console.log('Public dir:', publicDir)

// Images to compress with target widths
const targets = [
  { file: 'hero.jpg',              width: 1920, quality: 82, format: 'jpeg' },
  { file: 'services-header.png',   width: 1920, quality: 82, format: 'jpeg', outFile: 'services-header.jpg' },
  { file: "Let's talk.png",        width: 1200, quality: 82, format: 'jpeg', outFile: "Let's talk.jpg" },
  { file: 'contact-header.png',    width: 1920, quality: 82, format: 'jpeg', outFile: 'contact-header.jpg' },
  { file: 'jessica.jpg',           width: 800,  quality: 85, format: 'jpeg' },
  { file: 'alchemy__master_dusk.png', width: 400, format: 'png', compressionLevel: 9 },
  { file: 'Favicon.png',           width: 512,  format: 'png', compressionLevel: 9 },
]

// Duplicate files to delete
const toDelete = [
  'testimonial-dave.jpg.jpg',
  'testimonial-gavin.jpg.jpg',
  'testimonial-lee.jpg.jpg',
]

async function getSize(filePath) {
  try { return (await stat(filePath)).size } catch { return 0 }
}

function kb(bytes) { return (bytes / 1024).toFixed(1) + ' KB' }

console.log('\n=== Deleting duplicates ===')
for (const f of toDelete) {
  try { await unlink(join(publicDir, f)); console.log(`🗑  Deleted: ${f}`) }
  catch { console.log(`   (not found: ${f})`) }
}

console.log('\n=== Compressing images ===\n')

for (const { file, width, quality, format, compressionLevel, outFile } of targets) {
  const inputPath = join(publicDir, file)
  const outputFile = outFile || file
  const outputPath = join(publicDir, outputFile)
  const tempPath = outputPath + '.tmp'

  const before = await getSize(inputPath)
  if (before === 0) { console.log(`SKIP (not found): ${file}`); continue }

  try {
    let pipeline = sharp(inputPath).resize({ width, withoutEnlargement: true })

    if (format === 'jpeg') {
      pipeline = pipeline.jpeg({ quality: quality || 82, mozjpeg: true })
    } else {
      pipeline = pipeline.png({ compressionLevel: compressionLevel || 9 })
    }

    await pipeline.toFile(tempPath)

    // If renaming (png→jpg), remove old file
    if (inputPath !== outputPath) await unlink(inputPath).catch(() => {})

    await rename(tempPath, outputPath)

    const after = await getSize(outputPath)
    const saving = ((1 - after / before) * 100).toFixed(0)
    const label = outFile ? `${file} → ${outFile}` : file
    console.log(`✅ ${label}`)
    console.log(`   ${kb(before)} → ${kb(after)} (${saving}% smaller)\n`)
  } catch (err) {
    console.error(`❌ ${file}:`, err.message)
  }
}

console.log('All done.')
