# React Native Amat

A fork of `@apmg/amat` that turns Prosemirror docs into valid React Native endpoints.

## Usage

Install the `amat-native` package from NPM using your package manager of choice. Then, import the `<Body>` component from it and feed it both `nodeData` and `embedded` props from Prosemirror.

```jsx
  <Body nodeData={data.nodeData} embedded={data.embeddedAssets} />
```

- [x] Confirm that the dummy Body component can be used
- [x] Set up ESLint, Prettier and Jest and confirm that all works
- [x] Confirm that the dummy Body will take in the props I want

## Components

- [x] Code.tsx
- [x] Em.tsx
- [x] Link.tsx
- [x] Strong.tsx
- [ ] ApmAttachment.tsx
- [ ] ApmAudio.tsx
- [x] ApmCorrection.tsx
- [-] ApmFootnote.tsx
- [-] ApmFootnoteList.tsx
- [-] ApmFootnoteListItem.tsx
- [ ] ApmGallery.tsx
- [ ] ApmImage.tsx
- [ ] ApmOembed.tsx
- [-] ApmRelatedLink.tsx
- [-] ApmRelatedLinkListItem.tsx
- [-] ApmRelatedList.tsx
- [x] ApmStyleBox.tsx
- [-] ApmTableOfContents.tsx
- [x] ApmVerse.tsx
- [ ] ApmVideo.tsx
- [x] Aside.tsx
- [x] Blockquote.tsx
- [x] Break.tsx
- [ ] CustomHtml.tsx
- [x] Doc.tsx
- [x] Heading.tsx
- [x] HorizontalRule.tsx
- [x] ListItem.tsx
- [x] OrderedList.tsx
- [x] Paragraph.tsx
- [x] Text.tsx
- [x] UnorderedList.tsx
