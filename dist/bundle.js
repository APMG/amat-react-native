'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var reactNative = require('react-native');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Inner = function (child, props) {
    var Dispatcher = props.components[child.type];
    switch (child.type) {
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
    return React__default['default'].createElement(reactNative.Text, null, '\n');
};

var Paragraph = function (props) {
    return React__default['default'].createElement(reactNative.Text, { style: styles.paragraph }, NativeTraverse(props));
};
var styles = reactNative.StyleSheet.create({
    paragraph: {
        fontSize: 14,
        marginVertical: 5,
        marginHorizontal: 10
    }
});

var Heading = function (props) {
    var id = findText(props);
    var level = "h" + props.nodeData.attrs.level;
    return (React__default['default'].createElement(reactNative.Text, { "data-id": id, style: [styles$1.heading, styles$1[level]] }, NativeTraverse(props)));
};
var findText = function (props) {
    if (props.nodeData.attrs.anchor)
        return props.nodeData.attrs.anchor;
    if (!props.nodeData.content)
        return null;
    var txtEle = props.nodeData.content.find(function (ele) { return ele.type === 'text'; });
    var txt = txtEle.text.replace(/\s/g, '_').replace(/['"]/g, '');
    return "h" + props.nodeData.attrs.level + "_" + txt.toLowerCase();
};
var styles$1 = reactNative.StyleSheet.create({
    heading: {
        fontWeight: 'bold',
        marginVertical: 5,
        marginHorizontal: 10
    },
    h1: {
        fontSize: 32
    },
    h2: {
        fontSize: 28
    },
    h3: {
        fontSize: 24
    },
    h4: {
        fontSize: 22
    },
    h5: {
        fontSize: 18
    },
    h6: {
        fontSize: 16
    }
});

var HorizontalRule = function () {
    return React__default['default'].createElement(reactNative.View, { style: styles$2.horizontalRule });
};
var styles$2 = reactNative.StyleSheet.create({
    horizontalRule: {
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        paddingHorizontal: 3,
        alignSelf: 'stretch'
    }
});

function EscapeSpecialCharacters(text) {
    // React will automatically escape ampersands and less than and greater than signs  but not quotes and double quotes.
    // See https://shripadk.github.io/react/docs/jsx-gotchas.html which for some reason is no longer on the main react site
    // # https://github.com/facebook/react/issues/8998
    var retText = text
        .replace(/'/g, String.fromCharCode(39))
        .replace(/"/g, String.fromCharCode(34));
    return retText;
}
var determineNodeType = function (node) {
    if (Array.isArray(node)) {
        return 'content';
    }
    else if (typeof node === 'object' && node !== null) {
        return 'attrs';
    }
    else {
        return 'type';
    }
};

var Text = function (_a) {
    var nodeData = _a.nodeData;
    var text = EscapeSpecialCharacters(nodeData['text']);
    return React__default['default'].createElement(reactNative.Text, null, text);
};

var CustomHtml = function () {
    return React__default['default'].createElement(reactNative.Text, { style: styles$3.todo }, "CustomHtml");
};
var styles$3 = reactNative.StyleSheet.create({
    todo: {
        fontSize: 18,
        fontStyle: 'italic',
        color: 'crimson'
    }
});

var Blockquote = function (props) {
    return React__default['default'].createElement(reactNative.Text, { style: styles$4.blockquote }, NativeTraverse(props));
};
var styles$4 = reactNative.StyleSheet.create({
    blockquote: {
        fontSize: 14,
        backgroundColor: 'gainsboro',
        fontStyle: 'italic',
        padding: 5,
        margin: 5,
        marginLeft: 15
    }
});

var AspectRatioSlug;
(function (AspectRatioSlug) {
    AspectRatioSlug["normal"] = "normal";
    AspectRatioSlug["portrait"] = "portrait";
    AspectRatioSlug["square"] = "square";
    AspectRatioSlug["thumbnail"] = "thumbnail";
    AspectRatioSlug["uncropped"] = "uncropped";
    AspectRatioSlug["widescreen"] = "widescreen";
})(AspectRatioSlug || (AspectRatioSlug = {}));
var NodeType = typeof Node;

var UnorderedList = function (props) {
    var listItems = [];
    var process = function (content) {
        for (var i in content) {
            if (typeof content[i] === NodeType) {
                process(content[i]);
            }
            else {
                var type = determineNodeType(content[i]);
                if (type === 'content') {
                    content[i].forEach(function (node) {
                        node.content.forEach(function (textNode) {
                            listItems.push(React__default['default'].createElement(reactNative.Text, { key: Math.random() }, " \u2022 " + textNode.text + "\n"));
                        });
                    });
                }
            }
        }
    };
    props.nodeData.content.forEach(function (node, i) {
        process(node);
    });
    return React__default['default'].createElement(reactNative.View, { style: styles$5.list }, listItems);
};
var styles$5 = reactNative.StyleSheet.create({
    list: {
        fontSize: 14,
        marginVertical: 5,
        marginHorizontal: 10
    }
});

var OrderedList = function (props) {
    var listItems = [];
    var process = function (content, index) {
        for (var i in content) {
            if (typeof content[i] === NodeType) {
                process(content[i], index);
            }
            else {
                var type = determineNodeType(content[i]);
                if (type === 'content') {
                    content[i].forEach(function (node) {
                        node.content.forEach(function (textNode) {
                            listItems.push(React__default['default'].createElement(reactNative.Text, { key: Math.random() }, " " + index + ". " + textNode.text + "\n"));
                        });
                    });
                }
            }
        }
    };
    props.nodeData.content.forEach(function (node, i) {
        process(node, i);
    });
    return React__default['default'].createElement(reactNative.View, { style: styles$6.list }, listItems);
};
var styles$6 = reactNative.StyleSheet.create({
    list: {
        fontSize: 14,
        marginVertical: 5,
        marginHorizontal: 10
    }
});

// This is here to avoid crashes, but information about which markers to use cannot be found at this level. As such, OrderedList and UnorderedList will not be calling Traverse, and therefore should not run into this instance.
var ListItem = function (props) {
    return (React__default['default'].createElement(reactNative.View, { style: styles$7.list },
        React__default['default'].createElement(reactNative.Text, { style: styles$7.text }, "\u2022 " + NativeTraverse(props) + "\n")));
};
var styles$7 = reactNative.StyleSheet.create({
    list: {
        fontSize: 14,
        marginVertical: 5,
        marginHorizontal: 10
    },
    text: {
        marginVertical: 2
    }
});

var ApmOembed = function () {
    return React__default['default'].createElement(reactNative.Text, { style: styles$8.todo }, "ApmOembed");
};
var styles$8 = reactNative.StyleSheet.create({
    todo: {
        fontSize: 18,
        fontStyle: 'italic',
        color: 'crimson'
    }
});

var ApmVideo = function () {
    return React__default['default'].createElement(reactNative.Text, { style: styles$9.todo }, "ApmVideo");
};
var styles$9 = reactNative.StyleSheet.create({
    todo: {
        fontSize: 18,
        fontStyle: 'italic',
        color: 'crimson'
    }
});

// TODO: Figure out how we want to handle the "hyperlinking" aspect, given
// that Native navigation works so differently. I have a vague notion of
// getting each component's position and using a scrollTo function, but I
// haven't worked that out yet.
var ApmTableOfContents = function (props) {
    console.log('toc props', props);
    // TODO: size those TOC entries based on header level
    return (React__default['default'].createElement(reactNative.View, { style: styles$a.toc }, props.nodeData.attrs.anchors.map(function (anchor) {
        return (React__default['default'].createElement(reactNative.Text, { key: anchor.anchor, style: [styles$a.link, styles$a["h" + anchor.level]], onPress: function () { return reactNative.Linking.openURL(anchor.anchor); } }, "" + anchor.linkText));
    })));
};
var styles$a = reactNative.StyleSheet.create({
    toc: {
        marginVertical: 5,
        marginHorizontal: 10
    },
    link: {
        color: 'blue'
    },
    h1: {
        fontSize: 28
    },
    h2: {
        fontSize: 24
    },
    h3: {
        fontSize: 22
    },
    h4: {
        fontSize: 20
    },
    h5: {
        fontSize: 16
    },
    h6: {
        fontSize: 14
    }
});

var enlistify = function (props) {
    var _a;
    if ((_a = props === null || props === void 0 ? void 0 : props.nodeData) === null || _a === void 0 ? void 0 : _a.content) {
        for (var i = 0; i < props.nodeData.content.length; ++i) {
            props.nodeData.content[i].type = props.nodeData.content[i].type + "_list_item";
        }
    }
    return props;
};
var ApmRelatedList = function (props) {
    var title = props.nodeData.attrs.title;
    return (React__default['default'].createElement(reactNative.View, { style: styles$b.relatedList },
        React__default['default'].createElement(reactNative.Text, { style: styles$b.title }, title),
        React__default['default'].createElement(reactNative.Text, null, NativeTraverse(enlistify(props)))));
};
var styles$b = reactNative.StyleSheet.create({
    relatedList: {
        marginVertical: 5,
        marginHorizontal: 10
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24
    }
});

var ApmRelatedLink = function (props) {
    var _a = props.nodeData.attrs, prefix = _a.prefix, title = _a.title, url = _a.url;
    return (React__default['default'].createElement(reactNative.TouchableOpacity, { style: styles$c.relatedLink, onPress: function () { return reactNative.Linking.openURL(url); } },
        React__default['default'].createElement(reactNative.Text, { style: styles$c.strong }, title),
        React__default['default'].createElement(reactNative.Text, null, prefix)));
};
var styles$c = reactNative.StyleSheet.create({
    relatedLink: {
        marginVertical: 5,
        marginHorizontal: 10
    },
    strong: {
        fontWeight: 'bold'
    }
});

var ApmRelatedLinkListItem = function (props) {
    var _a = props.nodeData.attrs, prefix = _a.prefix, title = _a.title, url = _a.url;
    return (React__default['default'].createElement(reactNative.Text, null,
        React__default['default'].createElement(reactNative.Text, null, prefix + " | "),
        React__default['default'].createElement(reactNative.Text, { style: styles$d.link, onPress: function () { return reactNative.Linking.openURL(url); } }, title)));
};
var styles$d = reactNative.StyleSheet.create({
    link: {
        color: 'blue',
        fontWeight: 'bold'
    }
});

var ApmAudio = function () {
    return React__default['default'].createElement(reactNative.Text, null, "ApmAudio");
};
var styles$e = reactNative.StyleSheet.create({
    todo: {
        fontSize: 18,
        fontStyle: 'italic',
        color: 'crimson'
    }
});

var ApmGallery = function () {
    return React__default['default'].createElement(reactNative.Text, { style: styles$f.todo }, "ApmGallery");
};
var styles$f = reactNative.StyleSheet.create({
    todo: {
        fontSize: 18,
        fontStyle: 'italic',
        color: 'crimson'
    }
});

// Since classes only work on Next.js, whatever styles you attach to the class you shove in here will only show up in the Next.js version of your app.
var ApmStyleBox = function (props) {
    var custom_class = props.nodeData.attrs.custom_class;
    return (React__default['default'].createElement(reactNative.Text, { "data-class": "apm-style-box " + custom_class + "-box", "data-custom-class": custom_class }, NativeTraverse(props)));
};

var ApmAttachment = function () {
    return React__default['default'].createElement(reactNative.Text, { style: styles$g.todo }, "ApmAttachment");
};
var styles$g = reactNative.StyleSheet.create({
    todo: {
        fontSize: 18,
        fontStyle: 'italic',
        color: 'crimson'
    }
});

var ApmImage = function () {
    return React__default['default'].createElement(reactNative.Text, { style: styles$h.todo }, "ApmImage");
};
var styles$h = reactNative.StyleSheet.create({
    todo: {
        fontSize: 18,
        fontStyle: 'italic',
        color: 'crimson'
    }
});

var ApmVerse = function (props) {
    return React__default['default'].createElement(reactNative.Text, { style: styles$i.verse }, NativeTraverse(props));
};
var styles$i = reactNative.StyleSheet.create({
    verse: __assign({ color: 'indigo', marginVertical: 5, marginHorizontal: 10 }, reactNative.Platform.select({
        ios: {
            fontFamily: 'Georgia'
        },
        android: {
            fontFamily: 'notoserif'
        },
        default: {
            fontFamily: 'serif'
        }
    }))
});

var Aside = function (props) {
    return React__default['default'].createElement(reactNative.Text, { style: styles$j.aside }, NativeTraverse(props));
};
var styles$j = reactNative.StyleSheet.create({
    aside: {
        fontSize: 14,
        fontStyle: 'italic',
        borderWidth: 1,
        borderColor: 'lightgrey',
        padding: 5,
        margin: 5
    }
});

var componentMapper = function (defaultComponents) {
    return __assign(__assign({}, defaultComponents), { apm_footnote: defaultComponents.apm_footnote_list_item });
};
var ApmFootnoteList = function (props) {
    var componentMap = componentMapper(props.components);
    return (React__default['default'].createElement(reactNative.View, null,
        React__default['default'].createElement(reactNative.Text, { style: styles$k.title }, "Footnotes"),
        React__default['default'].createElement(NativeTraverse, __assign({}, props, { components: componentMap }))));
};
var styles$k = reactNative.StyleSheet.create({
    title: {
        fontWeight: 'bold',
        marginVertical: 5,
        marginHorizontal: 10,
        fontSize: 24
    }
});

// TODO: Figure out how we want to handle the "hyperlinking" aspect, given
// that Native navigation works so differently. I have a vague notion of
// getting each component's position and using a scrollTo function, but I
// haven't worked that out yet.
var ApmFootnote = function (props) {
    var number = props.nodeData.attrs.number;
    return (React__default['default'].createElement(reactNative.Text, { "data-id": "footnote-link-" + number, style: styles$l.link, onPress: function () { return reactNative.Linking.openURL("#footnote-content-" + number); } }, " " + number));
};
var styles$l = reactNative.StyleSheet.create({
    link: {
        color: 'blue'
    }
});

// TODO: Figure out how we want to handle the "hyperlinking" aspect, given
// that Native navigation works so differently. I have a vague notion of
// getting each component's position and using a scrollTo function, but I
// haven't worked that out yet.
var ApmFootnoteListItem = function (props) {
    var nodeData = props.nodeData;
    var number = nodeData.attrs.number;
    return (React__default['default'].createElement(reactNative.View, null,
        React__default['default'].createElement(reactNative.Text, null, number + "."),
        React__default['default'].createElement(reactNative.Text, { "data-id": "footnote-content-" + number }, NativeTraverse(props)),
        React__default['default'].createElement(reactNative.Text, { onPress: function () { return reactNative.Linking.openURL("#footnote-link-" + number); } }, "\u21A9")));
};

var ApmCorrection = function (props) {
    var timestamp = props.nodeData.attrs.timestamp;
    return (React__default['default'].createElement(reactNative.View, { style: styles$m.correction },
        React__default['default'].createElement(reactNative.Text, { style: styles$m.title }, "Correction"),
        React__default['default'].createElement(reactNative.Text, { style: styles$m.timestamp }, timestamp),
        React__default['default'].createElement(reactNative.Text, null, NativeTraverse(props))));
};
var styles$m = reactNative.StyleSheet.create({
    correction: {
        backgroundColor: 'gainsboro',
        padding: 5,
        margin: 5,
        marginLeft: 15
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    timestamp: {
        fontSize: 10,
        fontStyle: 'italic'
    }
});

var Link = function (_a) {
    var inner = _a.inner, href = _a.href;
    return (React__default['default'].createElement(reactNative.Text, { "data-mark": "link", style: styles$n.link, onPress: function () { return reactNative.Linking.openURL(href); } }, inner));
};
var styles$n = reactNative.StyleSheet.create({
    link: {
        color: 'blue'
    }
});

var Strong = function (_a) {
    var inner = _a.inner;
    return (React__default['default'].createElement(reactNative.Text, { "data-mark": "strong", style: styles$o.strong }, inner));
};
var styles$o = reactNative.StyleSheet.create({
    strong: {
        fontWeight: 'bold'
    }
});

var Em = function (_a) {
    var inner = _a.inner;
    return (React__default['default'].createElement(reactNative.Text, { "data-mark": "em", style: styles$p.em }, inner));
};
var styles$p = reactNative.StyleSheet.create({
    em: {
        fontStyle: 'italic'
    }
});

var Code = function (_a) {
    var inner = _a.inner;
    return (React__default['default'].createElement(reactNative.Text, { "data-mark": "code", style: styles$q.code }, inner));
};
var styles$q = reactNative.StyleSheet.create({
    code: __assign({ color: 'magenta' }, reactNative.Platform.select({
        ios: {
            fontFamily: 'Menlo'
        },
        android: {
            fontFamily: 'monospace'
        },
        default: {
            fontFamily: 'monospace'
        }
    }))
});

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
