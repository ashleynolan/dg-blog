const fs = require('fs');
const Handlebars = require('handlebars');
const ltx = require('ltx');
const resolve = require('resolve');

/**
 * @param  {String} `path` The path to the SVG file to inline
 * @param  {Object} `options`
 * @return {String}
 */

const nameToModule = {};
const cache = {};

function parse (xml) {
    const svg = ltx.parse(xml);
    if (svg.name !== 'svg') {
        throw new TypeError('{{inlineSVG}} helper: File specified must be an SVG');
    }

    delete svg.attrs.xmlns;
    delete svg.attrs['xmlns:xlink'];

    return svg;
}

module.exports = (path, options = {}) => {
	console.log(path, process.cwd());
    if (typeof path !== 'string') {
        throw new Error('{{inlineSVG}} helper: invalid path. Path must be formatted as a string.');
    }

    let modulePath;
    try {
		modulePath = nameToModule[path] || (nameToModule[path] = resolve.sync(path, {
			basedir: process.cwd(),
            extensions: ['.svg']
        }));
    } catch (err) {
        throw new Error(`{{inlineSVG}} helper: . ${err}`);
    }

    const content = cache[path] || (cache[path] = fs.readFileSync(modulePath, 'utf-8'));

    const svg = parse(content);

    Object.assign(svg.attrs, options.hash);

    return new Handlebars.SafeString(svg.root().toString());
};
