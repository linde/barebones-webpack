
// jest-puppeteer.config.js

STATIC=process.env.npm_package_config_dir || "docroot";
PORT=process.env.npm_package_config_e2e_port || 8080;

// TODO tell jest that e2e tests involve any bundle changes
module.exports = {
    server: {
        command: `npx webpack serve --static=${STATIC} --port=${PORT}`,
        usedPortAction: 'kill',
    },
}
