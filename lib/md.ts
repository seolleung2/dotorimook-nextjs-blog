import fs from "fs";
import { join } from "path";

// * /Users/dotorijung/projects/dotorimook-nextjs-blog/content/blogs
const getDir = (path: string) => join(process.cwd(), path);

const getFileNames = (dir: string): string[] => {
  return fs.readdirSync(dir);
};
/* 

fileNames : [
  'markdown-full-example.md',
  'nft-marketplace-in-react-js-next-typescript-full-guide.md',
  'rust-webassembly-with-js-ts-the-practical-guide.md',
  'unity-2d-with-c-complete-game-dev-course.md',
  'web-development-and-coding-full-course.md'
]

**/
export { getDir, getFileNames };
