#!/usr/bin/env node
const notificator = require("../../lib/notificatorSingleton");

async function main() {
  let iterator = 0;
  await notificator.init();

  setInterval(() => {
    notificator.notify({ text: `iteration ${iterator}` });
    ++iterator;
  }, 5000);
}

main();
