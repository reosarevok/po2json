import fs from 'fs';

import parse from './parse.js';

/**
 * Synchronously parse a PO file to JSON
 *
 * @param {String} fileName - File name
 * @param {Object} [options]
 * @return {Object|String} Translation JSON
 */

export default function(fileName, options) {
  var data = fs.readFileSync(fs.realpathSync(fileName));

  return parse( data, options );
};
