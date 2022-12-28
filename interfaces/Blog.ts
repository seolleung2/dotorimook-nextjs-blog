import { MarkdownItem } from "@Interfaces/Markdown";

export interface Blog extends MarkdownItem {
  author: string;
  authorImage: string;
  coverImage: string;
  categories: string[];
}
