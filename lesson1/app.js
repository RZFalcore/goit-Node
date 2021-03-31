import fs from "fs/promises";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

import program from "./utils/commander.js";
import SortFiles from './module/sort.js'
import { isAccessible } from "./utils/accessible.js";
import { handleError } from "./utils/handleError.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

program.parse(process.argv);
const options = program.opts()

if (!(await isAccessible(options.output))) {
    console.log(options)
  await fs.mkdir(options.output);
}

try {
    const sorting = new SortFiles(options.output)
    await sorting.readFolders(resolve(__dirname, options.folder))
} catch (e) {
    handleError(e)
}

console.log("Can delete source folder.")