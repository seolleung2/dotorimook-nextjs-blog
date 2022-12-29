import type { NextPage, GetStaticProps } from "next";
import { BaseLayout } from "@Components/layout";
import { Utterances } from "@Components/common";
import { getBlogBySlugWithMarkdown, getBlogsSlugs } from "@Libraries/blogs";
import { Blog } from "@Interfaces/Blog";
import { ParsedUrlQuery } from "querystring";
import { BlogHeader } from "@Components/blogs";

type Props = {
  blog: Blog;
};

const BlogDetail: NextPage<Props> = ({ blog }) => {
  const utterancesRepo = "seolleung2/dotorimook-nextjs-blog";

  return (
    <>
      <BaseLayout pageTitle={blog.title}>
        <div className="w-full py-16 px-6 sm:m-auto sm:w-3/4 sm:px-8 lg:w-1/2">
          <BlogHeader blog={blog} />
          <article className="markdown-image-50 prose my-6 block min-w-full lg:prose-lg">
            <div dangerouslySetInnerHTML={{ __html: blog.content }} />
          </article>
          <Utterances repo={utterancesRepo} path={blog.slug} />
        </div>
      </BaseLayout>
    </>
  );
};

export default BlogDetail;

interface Params extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps<Props, Params> = async (
  context
) => {
  const { slug } = context.params!;

  const blog = await getBlogBySlugWithMarkdown(slug);

  return {
    props: {
      blog,
    },
  };
};

export const getStaticPaths = async () => {
  const slugs = getBlogsSlugs();

  const paths = slugs.map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
