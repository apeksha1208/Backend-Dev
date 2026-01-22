const fs = require("fs");
const path = require("path");

function explore(dir, space = "") {
  let total = 0;
  fs.readdirSync(dir).forEach(item => {
    const full = path.join(dir, item);
    const stat = fs.statSync(full);

    if (stat.isFile()) {
      console.log(`${space}📄 ${item} - ${(stat.size/1024).toFixed(2)} KB`);
      total += stat.size;
    } else {
      console.log(`${space}📁 ${item}/`);
      total += explore(full, space + "  ");
    }
  });
  return total;
}

const size = explore("./test-folder");
console.log(`Total Size: ${(size/1024).toFixed(2)} KB`);

