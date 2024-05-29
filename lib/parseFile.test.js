import Jed from 'jed';
import MessageFormat from 'messageformat';
import {parseFile} from '../index';
import fs from 'fs';
import {promisify} from 'util';
import {fileURLToPath} from 'url';
import {dirname} from 'path';

const readFile = promisify(fs.readFile);
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

describe("parseFile", () => {
  it("parseFile", async () => {
    const json = await JSON.parse(await readFile(__dirname + "/../test/fixtures/pl.json", "utf-8"));
    await parseFile(__dirname + "/../test/fixtures/pl.po", null, function (_, parsed) {
      expect(parsed).toEqual(json);
    });
  });
});
