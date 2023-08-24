const Handlebars = require('handlebars');
var util = require('handlebars-utils');
var utils =  {
    get: require('get-value')
};
const inlineSVG = require('./inlineSVG');


function ifCond (v1, v2, options) {
    if (v2 === 'null') {
        v2 = null;
    }
    if(v1 === v2) {
        return options.fn(this);
    }
    return options.inverse(this);
}

function contains (needle, haystack, options) {
    needle = Handlebars.escapeExpression(needle);
    haystack = Handlebars.escapeExpression(haystack);
    return (haystack.indexOf(needle) > -1) ? options.fn(this) : options.inverse(this);
}

function eachUpTo (ary, max, options) {
    if(!ary || ary.length == 0)
        return options.inverse(this);

    var result = [ ];
    for(var i = 0; i < max && i < ary.length; ++i)
        result.push(options.fn(ary[i]));
    return result.join('');
}

function printJson(context) {
    return JSON.stringify(context);
}

// function replaceStr (haystack, needle, replacement) {
//     return haystack.replace(needle, replacement);
// }

/**
 * Block helper that sorts a collection and exposes the sorted
 * collection as context inside the block.
 *
 * ```handlebars
 * <!-- array: ['b', 'a', 'c'] -->
 * {{#withSort array}}{{this}}{{/withSort}}
 * <!-- results in: 'abc' -->
 * ```
 * @param {Array} `array`
 * @param {String} `prop`
 * @param {Object} `options`
 *                  Specify `reverse="true"` to reverse the array.
*                   Specify `limit="x"` to limit the number of results.
 * @return {String}
 * @block
 * @api public
 */
function withSort (array, prop, options) {
    let limit = utils.get(options, 'hash.limit');

    if (util.isUndefined(array)) return '';
    var result = '';

    if (util.isUndefined(prop)) {
        options = prop;

        array = array.sort();
        if (utils.get(options, 'hash.reverse')) {
            array = array.reverse();
        }

        for (var i = 0, len = limit || array.length; i < len; i++) {
            result += options.fn(array[i]);
        }
        return result;
    }

    array.sort(function(a, b) {
        a = utils.get(a, prop);
        b = utils.get(b, prop);
        return a > b ? 1 : (a < b ? -1 : 0);
    });

    if (utils.get(options, 'hash.reverse')) {
        array = array.reverse();
    }

    var alen = limit || array.length, j = -1;
    while (++j < alen) {
        result += options.fn(array[j]);
    }
    return result;
}

function typeOfInput (input) {
    // console.log('================================');
    // console.log(input);
    // console.log('================================');
    return typeof(input);
}

module.exports = {
    contains,
    eachUpTo,
	ifCond,
	inlineSVG,
    printJson,
    typeOfInput,
    withSort
}



