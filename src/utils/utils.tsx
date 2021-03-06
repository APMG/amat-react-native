export function singleLineString(str) {
  var newstr = str.replace(/\s{2,}/g, '').replace(/>\s</, '><');
  return newstr;
}

export function EscapeSpecialCharacters(text) {
  // React will automatically escape ampersands and less than and greater than signs  but not quotes and double quotes.
  // See https://shripadk.github.io/react/docs/jsx-gotchas.html which for some reason is no longer on the main react site
  // # https://github.com/facebook/react/issues/8998
  const retText = text
    .replace(/'/g, String.fromCharCode(39))
    .replace(/"/g, String.fromCharCode(34));
  return retText;
}

export const determineNodeType = (node: Node) => {
  if (Array.isArray(node)) {
    return 'content';
  } else if (typeof node === 'object' && node !== null) {
    return 'attrs';
  } else {
    return 'type';
  }
};
