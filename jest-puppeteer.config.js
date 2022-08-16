
// jest-puppeteer.config.js

STATIC=process.env.npm_package_config_dir || "docroot";
PORT=process.env.npm_package_config_e2e_port || 8080;


module.exports = {
    server: {
        command: `http-server ${STATIC} -p ${PORT}`,
        usedPortAction: 'kill',
    },
}