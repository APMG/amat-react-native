'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var NodeType = typeof Node;

var process = function (content) {
    for (var i in content) {
        if (typeof content[i] === NodeType) {
            process(content[i]);
        }
        else {
            if (Array.isArray(content[i])) {
                console.log('content', content[i]);
            }
            else if (typeof content[i] === 'object' && content[i] !== null) {
                console.log('attrs', content[i]);
            }
            else {
                console.log('type', content[i]);
            }
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
