const puppeteer = require("puppeteer");

const devServerPort = process.env.PORT;

describe("App.js", () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();    
  });

  // TODO assert that we have a valid port

  it("has a valid qualification server port", () => {
    expect(parseInt(devServerPort)).toBeDefined();
    expect(parseInt(devServerPort)).toBeGreaterThan(0);
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