const bundle = require("bundle-js");

// one pass
bundle("index.js").then((result) => {
  result.code;
  result.map;
});
