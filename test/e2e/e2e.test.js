const puppeteer = require("puppeteer");


describe("index.js", () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();    
  });

  const devServerPort = process.env.npm_package_config_e2e_port;

  it("has a valid qualification server port", () => {
    const portInt = parseInt(devServerPort);
    expect(portInt).toBeDefined();
    expect(portInt).not.toBeNaN();
    expect(portInt).toBeGreaterThan(0);
  });

  it("contains welcome text", async () => {
    const startUrl = `http://localhost:${devServerPort}`;
    await page.goto(startUrl);
    await page.waitForSelector(".compClass");
    const text = await page.$eval(".compClass", (e) => e.textContent);
    expect(text.toLowerCase()).toContain("hi");
  });

  it("has a friendly title", async () => {
    const text = await page.title();
    expect(text.toLowerCase()).toContain("hello");
  });

  afterAll(() => browser.close());
});