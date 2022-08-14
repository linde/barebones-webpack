
// jest-puppeteer.config.js
module.exports = {
    server: {
        command: `node e2e/static-server.js`,
        usedPortAction: 'kill',
    },
}