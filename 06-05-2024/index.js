const axios = require("axios");
const cheerio = require("cheerio");
const xlsx = require("xlsx");

const fs = require("node:fs");

const pageUrl =
  "https://www.amazon.in/s?k=mobile+phones&crid=3P3KGSJE5GDO6&sprefix=mobile+phones%2Caps%2C377&ref=nb_sb_noss_1";

const headers = {
  "content-type": "text/html",
};

const getWebPageData = async (url) => {
  try {
    const response = await axios.get(url, {
      headers,
    });
    const strData = JSON.stringify(response.data);
    fs.writeFileSync("webpagedata.txt", strData);
    // console.log(JSON.stringify(response.data));
  } catch (err) {
    console.log("ERROR_OCCURED", err);
  }
};

// getWebPageData(pageUrl);

const getDataFromFile = () => {
  return fs.readFileSync("webpagedata.txt", { encoding: "utf-8" });
};

const pageHtmlString = getDataFromFile();

const $ = cheerio.load(pageHtmlString);
const titles = [];
const productCards = $("div[data-asin]")
  .find("span.a-size-medium.a-color-base.a-text-normal")
  .each((index, element) => {
    titles.push($(element).text());
    // console.log($(element).text());
  });

console.log(titles);
// const array = $("div[data-asin]").each((i, el) => {
//   const title = $(el).find(`div a[target="_blank"]`).length;
//   console.log(title);
// });
// console.log(array);

//   .forEach((product) => {
//     console.log(product.text());
//   });

console.log("Loop ended");
// productDivs;

// console.log(productDivs);
// Object.values(productDivs).forEach((productDiv) => {
//   const productName = $(productDiv).find(
//     ".a-size-medium a-color-base a-text-normal"
//   );
//   console.log(productName);
// });
// console.log(productDivs);

const products = [
  {
    name: "IPhone",
    price: "99999",
  },
  {
    name: "Samsung galaxy s24",
    price: "79999",
  },
  {
    name: "Samsung galaxy s24",
    price: "79999",
  },
  {
    name: "Samsung galaxy s24",
    price: "79999",
  },
  {
    name: "Samsung galaxy s24",
    price: "79999",
  },
  {
    name: "Samsung galaxy s24",
    price: "79999",
  },
  {
    name: "Samsung galaxy s24",
    price: "79999",
  },
  {
    name: "Samsung galaxy s24",
    price: "79999",
  },
  {
    name: "Samsung galaxy s24",
    price: "79999",
  },
  {
    name: "Samsung galaxy s24",
    price: "79999",
  },
];

const workbook = xlsx.utils.book_new();
const worksheet = xlsx.utils.json_to_sheet(products);

xlsx.utils.book_append_sheet(workbook, worksheet, "Sheet1");
xlsx.writeFile(workbook, "products.xlsx");
