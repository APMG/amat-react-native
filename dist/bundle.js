'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var NodeType = typeof Node;

var determineNodeType = function (node) {
    if (Array.isArray(node)) {
        console.log('content', node);
    }
    else if (typeof node === 'object' && node !== null) {
        console.log('attrs', node);
    }
    else {
        console.log('type', node);
    }
};
var process = function (content) {
    for (var i in content) {
        if (typeof content[i] === NodeType) {
            process(content[i]);
        }
        else {
            determineNodeType(content[i]);
        }
    }
};
var Body = function (_a) {
    var nodeData = _a.nodeData, embedded = _a.embedded, overrides = _a.overrides;
    nodeData.content.forEach(function (node, i) {
        console.log(i + "\n------");
        process(node);
    });
    return React__default['default'].createElement("h1", null, "Bodyyy ody ody ody");
};

exports.Body = Body;
