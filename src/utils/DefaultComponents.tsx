import Doc from '../nodes/Doc';
import Break from '../nodes/Break';
import Paragraph from '../nodes/Paragraph';
import Heading from '../nodes/Heading';
import HorizontalRule from '../nodes/HorizontalRule';
import Text from '../nodes/Text';
import CustomHtml from '../nodes/CustomHtml';
import Blockquote from '../nodes/Blockquote';
import UnorderedList from '../nodes/UnorderedList';
import OrderedList from '../nodes/OrderedList';
import ListItem from '../nodes/ListItem';
import ApmOembed from '../nodes/ApmOembed';
import ApmVideo from '../nodes/ApmVideo';
import ApmTableOfContents from '../nodes/ApmTableOfContents';
import ApmRelatedList from '../nodes/ApmRelatedList';
import ApmRelatedLink from '../nodes/ApmRelatedLink';
import ApmRelatedLinkListItem from '../nodes/ApmRelatedLinkListItem';
import ApmAudio from '../nodes/ApmAudio';
import ApmGallery from '../nodes/ApmGallery';
import ApmStyleBox from '../nodes/ApmStyleBox';
import ApmAttachment from '../nodes/ApmAttachment';
import ApmImage from '../nodes/ApmImage';
import ApmVerse from '../nodes/ApmVerse';
import Aside from '../nodes/Aside';
import ApmFootnoteList from '../nodes/ApmFootnoteList';
import ApmFootnote from '../nodes/ApmFootnote';
import ApmFootnoteListItem from '../nodes/ApmFootnoteListItem';
import ApmCorrection from '../nodes/ApmCorrection';
import Link from '../marks/Link';
import Strong from '../marks/Strong';
import Em from '../marks/Em';
import Code from '../marks/Code';

const DefaultComponents = () => {
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

export default DefaultComponents;
