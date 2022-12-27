import fs from "fs";
import { join } from "path";

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
const getItemInPath = (filePath: string): string => {
  const fileContent = fs.readFileSync(filePath, "utf8");
  return fileContent;
};

const getBlog = (fileName: string) => {
  // BLOG_DIR 과 개별 fileName 을 합친 경로를 getItemInPath 에 전달
  const blog = getItemInPath(join(BLOG_DIR, fileName));
  return blog;
};

export { getBlogFileNames, getBlog };
