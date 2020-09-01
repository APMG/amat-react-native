'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var reactNative = require('react-native');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Inner = function (child, props) {
    var Dispatcher = props.components[child.type];
    switch (child.type) {
        case 'apm_image':
            return (React__default['default'].createElement(Dispatcher, { key: Math.random(), embedded: props.embedded, image: child.attrs, aspectRatio: child.attrs.preferred_aspect_ratio_slug, components: props.components }));
        default:
            return (React__default['default'].createElement(Dispatcher, { key: Math.random(), nodeData: child, embedded: props.embedded, components: props.components }));
    }
};

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var Mark = function (mark, InnerComponent, attrs, props) {
    if (attrs === void 0) { attrs = {}; }
    var Dispatcher = props.components[mark.type];
    return React__default['default'].createElement(Dispatcher, __assign({ key: Math.random(), inner: InnerComponent }, attrs));
};

var NativeTraverse = function (props) {
    // Checks if the legacy Table of Contents is anywhere in this nodeData and delivers the old version if so. Not necessary for React Native sites, which shouldn't have any instances of the old TOCs left.
    var content = getContent(props);
    return content === null || content === void 0 ? void 0 : content.map(function (item) {
        var InnerComponent = Inner(item, props);
        if (item.marks) {
            item.marks.reverse().forEach(function (mark) {
                var attrs = mark.attrs || {};
                InnerComponent = Mark(mark, InnerComponent, attrs, props);
            });
        }
        return InnerComponent; // We are returning a React Element here, so it should be capitalized to cut down on confusion
    });
};
var getContent = function (props) {
    var _a, _b, _c, _d;
    var content = null;
    // Footnotes store their content in a different location from most nodes
    if ((_a = props.nodeData) === null || _a === void 0 ? void 0 : _a.content) {
        content = props.nodeData.content;
    }
    else if ((_d = (_c = (_b = props.nodeData) === null || _b === void 0 ? void 0 : _b.attrs) === null || _c === void 0 ? void 0 : _c.footnoteContent) === null || _d === void 0 ? void 0 : _d.content) {
        content = props.nodeData.attrs.footnoteContent.content;
    }
    return content;
};

var Doc = function (props) {
    return React__default['default'].createElement(React__default['default'].Fragment, null, NativeTraverse(props));
};

var Break = function () {
    return React__default['default'].createElement(reactNative.Text, null, "Break");
};

var Paragraph = function (props) {
    return React__default['default'].createElement(reactNative.Text, null, NativeTraverse(props));
};

var Heading = function () {
    return React__default['default'].createElement(reactNative.Text, null, "Heading");
};

var HorizontalRule = function () {
    return React__default['default'].createElement(reactNative.Text, null, "HorizontalRule");
};

function EscapeSpecialCharacters(text) {
    // React will automatically escape ampersands and less than and greater than signs  but not quotes and double quotes.
    // See https://shripadk.github.io/react/docs/jsx-gotchas.html which for some reason is no longer on the main react site
    // # https://github.com/facebook/react/issues/8998
    var retText = text
        .replace(/'/g, String.fromCharCode(39))
        .replace(/"/g, String.fromCharCode(34));
    return retText;
}

var Text = function (_a) {
    var nodeData = _a.nodeData;
    var text = EscapeSpecialCharacters(nodeData['text']);
    return React__default['default'].createElement(reactNative.Text, null, text);
};

var CustomHtml = function () {
    return React__default['default'].createElement(reactNative.Text, null, "CustomHtml");
};

var Blockquote = function () {
    return React__default['default'].createElement(reactNative.Text, null, "Blockquote");
};

var UnorderedList = function () {
    return React__default['default'].createElement(reactNative.Text, null, "UnorderedList");
};

var OrderedList = function () {
    return React__default['default'].createElement(reactNative.Text, null, "OrderedList");
};

var ListItem = function () {
    return React__default['default'].createElement(reactNative.Text, null, "ListItem");
};

var ApmOembed = function () {
    return React__default['default'].createElement(reactNative.Text, null, "ApmOembed");
};

var ApmVideo = function () {
    return React__default['default'].createElement(reactNative.Text, null, "ApmVideo");
};

var ApmTableOfContents = function () {
    return React__default['default'].createElement(reactNative.Text, null, "ApmTableOfContents");
};

var ApmRelatedList = function () {
    return React__default['default'].createElement(reactNative.Text, null, "ApmRelatedList");
};

var ApmRelatedLink = function () {
    return React__default['default'].createElement(reactNative.Text, null, "ApmRelatedLink");
};

var ApmRelatedLinkListItem = function () {
    return React__default['default'].createElement(reactNative.Text, null, "ApmRelatedLinkListItem");
};

var ApmAudio = function () {
    return React__default['default'].createElement(reactNative.Text, null, "ApmAudio");
};

var ApmGallery = function () {
    return React__default['default'].createElement(reactNative.Text, null, "ApmGallery");
};

var ApmStyleBox = function () {
    return React__default['default'].createElement(reactNative.Text, null, "ApmStyleBox");
};

var ApmAttachment = function () {
    return React__default['default'].createElement(reactNative.Text, null, "ApmAttachment");
};

var ApmImage = function () {
    return React__default['default'].createElement(reactNative.Text, null, "ApmImage");
};

var ApmVerse = function () {
    return React__default['default'].createElement(reactNative.Text, null, "ApmVerse");
};

var Aside = function () {
    return React__default['default'].createElement(reactNative.Text, null, "Aside");
};

var ApmFootnoteList = function () {
    return React__default['default'].createElement(reactNative.Text, null, "ApmFootnoteList");
};

var ApmFootnote = function () {
    return React__default['default'].createElement(reactNative.Text, null, "ApmFootnote");
};

var ApmFootnoteListItem = function () {
    return React__default['default'].createElement(reactNative.Text, null, "ApmFootnoteListItem");
};

var ApmCorrection = function () {
    return React__default['default'].createElement(reactNative.Text, null, "ApmCorrection");
};

var Link = function (_a) {
    var inner = _a.inner;
    console.log('link inner', inner);
    // TODO: make it href
    return React__default['default'].createElement(reactNative.Text, { style: { color: 'blue' } }, inner);
};

var Strong = function (_a) {
    var inner = _a.inner;
    console.log('strong inner', inner);
    return React__default['default'].createElement(reactNative.Text, { style: { fontWeight: 'bold' } }, inner);
};

var Em = function (_a) {
    var inner = _a.inner;
    console.log('em inner', inner);
    return React__default['default'].createElement(reactNative.Text, { style: { fontStyle: 'italic' } }, inner);
};

var Code = function (_a) {
    var inner = _a.inner;
    console.log('code inner', inner);
    // TODO: make it font family mono
    return React__default['default'].createElement(reactNative.Text, { style: { color: 'pink' } }, inner);
};

var DefaultComponents = function () {
    return {
        apm_attachment: ApmAttachment,
        apm_audio: ApmAudio,
        apm_correction: ApmCorrection,
        apm_custom_html: CustomHtml,
        apm_gallery: ApmGallery,
        apm_oembed: ApmOembed,
        apm_footnote: ApmFootnote,
        apm_footnote_list: ApmFootnoteList,
        apm_footnote_list_item: ApmFootnoteListItem,
        apm_image: ApmImage,
        apm_related_link: ApmRelatedLink,
        apm_related_link_list_item: ApmRelatedLinkListItem,
        apm_related_list: ApmRelatedList,
        apm_style_box: ApmStyleBox,
        apm_table_of_contents: ApmTableOfContents,
        apm_verse: ApmVerse,
        apm_video: ApmVideo,
        aside: Aside,
        blockquote: Blockquote,
        bullet_list: UnorderedList,
        code: Code,
        doc: Doc,
        em: Em,
        hard_break: Break,
        heading: Heading,
        horizontal_rule: HorizontalRule,
        link: Link,
        list_item: ListItem,
        ordered_list: OrderedList,
        paragraph: Paragraph,
        strong: Strong,
        text: Text
    };
};

var Body = function (_a) {
    var nodeData = _a.nodeData, embedded = _a.embedded, _b = _a.overrides, overrides = _b === void 0 ? {} : _b;
    var components = DefaultComponents();
    var mergedComponents = Object.keys(overrides).length > 0
        ? Object.assign(components, overrides)
        : components;
    return (React__default['default'].createElement(NativeTraverse, { nodeData: nodeData, embedded: embedded ? embedded : {}, components: mergedComponents }));
};

exports.Body = Body;
exports.Traverse = NativeTraverse;
