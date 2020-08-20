import { FunctionComponent } from 'react';
import { EmbeddedAssets } from '../types';
import { Doc } from '../types/prosemirror';
interface Props {
    nodeData: Doc;
    embedded?: EmbeddedAssets;
    overrides?: object;
}
declare const Body: FunctionComponent<Props>;
export default Body;
