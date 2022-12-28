import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { MarkdownItem } from "@Interfaces/Markdown";
import { Blog } from "@Interfaces/Blog";

// * /Users/dotorijung/projects/dotorimook-nextjs-blog/content/blogs
const getDir = (path: string) => join(process.cwd(), path);

const BLOG_DIR = getDir("/content/blogs");

console.log(BLOG_DIR);

const getFileNames = (dir: string): string[] => {
  return fs.readdirSync(dir);
};

const getBlogFileNames = () => {
  return getFileNames(BLOG_DIR);
};

// file 하나를 읽어들이기. fs.readFileSync(filePath, "utf8")
const getItemInPath = (filePath: string): MarkdownItem => {
  const fileContent = fs.readFileSync(filePath, "utf8");

  const { data, content } = matter(fileContent);
  return {
    ...data,
    content,
  } as MarkdownItem;
};

const getBlog = (fileName: string): Blog => {
  // BLOG_DIR 과 개별 fileName 을 합친 경로를 getItemInPath 에 전달
  const blog = getItemInPath(join(BLOG_DIR, fileName)) as Blog;
  return blog;
};

// * 모든 블로그 항목의 정보를 가져오도록 수정
const getAllItems = (fileNames: string[]) => {
  const items = fileNames.map((name) => getBlog(name));
  return items;
};

const getBlogs = (): Blog[] => {
  const names = getBlogFileNames();
  return getAllItems(names);
};

export { getBlogFileNames, getBlogs };
