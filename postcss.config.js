import autoprefixer from 'autoprefixer'
import postcss from 'postcss'
import fs from 'fs/promises'
import path from 'path'
import {compile} from 'tailwindcss'

const scanExtensions = new Set(['.html', '.js', '.jsx', '.ts', '.tsx'])

async function collectContent() {
  const files = []

  async function walk(dir) {
    const entries = await fs.readdir(dir, { withFileTypes: true })
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name)
      if (entry.isDirectory()) {
        await walk(fullPath)
      } else if (scanExtensions.has(path.extname(entry.name))) {
        files.push(fullPath)
      }
    }
  }

  try {
    files.push(path.resolve('index.html'))
  } catch {}
  await walk(path.resolve('src'))

  const content = []
  for (const filePath of files) {
    try {
      content.push(await fs.readFile(filePath, 'utf8'))
    } catch {
      // ignore unreadable files
    }
  }

  return content.join('\n')
}

function collectCandidates(content) {
  const candidates = new Set()
  const pattern = /[A-Za-z0-9_\-/.:\[\]]+(?=[\s"'`])/g
  for (const match of content.matchAll(pattern)) {
    if (match[0]) {
      candidates.add(match[0])
    }
  }
  return candidates
}

async function createTailwindPlugin() {
  const content = await collectContent()
  const candidates = collectCandidates(content)

  return {
    postcssPlugin: 'tailwindcss',
    async Once(root, { result }) {
      const css = root.toString()
      const tw = await compile(css, { from: result.opts.from || undefined })
      const built = tw.build(candidates)
      const ast = postcss.parse(built, { from: result.opts.from })
      root.removeAll()
      root.append(ast.nodes)
    },
  }
}

export default {
  plugins: [await createTailwindPlugin(), autoprefixer()],
}
