const fs = require('fs')
const path = require('path')

// Ejecuta la misma suite de Jasmine en Microsoft Edge (Chromium).
// Karma usa el launcher de Chrome, apuntándolo al binario de Edge.
const candidates = [
  process.env.EDGE_BIN,
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  'C:/Program Files/Microsoft/Edge/Application/msedge.exe',
].filter(Boolean)

const edgeBinary = candidates.find((candidate) => fs.existsSync(candidate))

if (!edgeBinary) {
  console.error(
    'No se encontró Microsoft Edge. Define la variable EDGE_BIN con la ruta al ejecutable.',
  )
  process.exit(1)
}

process.env.CHROME_BIN = edgeBinary

const karma = require('karma')

const server = new karma.Server(
  {
    configFile: path.join(__dirname, '..', 'karma.conf.cjs'),
    singleRun: true,
    browsers: ['ChromeHeadlessCI'],
  },
  (exitCode) => {
    process.exit(exitCode)
  },
)

server.start()
