import { HeadingNode, QuoteNode } from '@lexical/rich-text';
import { ListItemNode, ListNode } from '@lexical/list';
import { HashtagNode } from "@lexical/hashtag"

import {
	Klass,
	LexicalNode,
	LexicalNodeReplacement,
	ParagraphNode,
	TextNode,
} from 'lexical';

export const nodes: ReadonlyArray<Klass<LexicalNode> | LexicalNodeReplacement> =
	[HeadingNode, ParagraphNode, TextNode, QuoteNode,ListNode,ListItemNode, HashtagNode];
