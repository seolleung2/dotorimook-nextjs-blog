import type { NextPage, GetStaticProps } from "next";
import { BaseLayout } from "@Components/layout";
import { Utterances } from "@Components/common";
import { getBlogBySlug, getBlogs, getBlogsSlugs } from "@Libraries/blogs";
import { Blog } from "@Interfaces/Blog";

type Props = {
  blog: Blog;
};

const BlogDetail: NextPage<Props> = ({ blog }) => {
  const utterancesRepo = "seolleung2/dotorimook-nextjs-blog";
  console.log("blog", blog);
  return (
    <>
      <BaseLayout>
        <div className="m-auto w-2/3 border border-blue-500 py-16 px-8">
          {/* Blog Header Starts */}
          <div className="blog-detail-header">
            <div className="mb-2 flex flex-row justify-between">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <a href="#">
                    <span className="sr-only">Dotori Jung</span>
                    <div className="relative !mb-0 h-10 w-10">
                      {/* <Image 
                        priority
                        layout="fill"
                        objectFit="cover"
                        className="rounded-full"
                        src={authorImage} alt="" 
                      /> */}
                    </div>
                  </a>
                </div>
                <div className="ml-3">
                  <p className="!mb-0 text-sm font-medium text-gray-900">
                    <a href="#" className="hover:underline">
                      Dotori Jung
                    </a>
                  </p>
                  <div className="flex space-x-1 text-sm text-gray-500">
                    <time dateTime="{date}">2022-10-10</time>
                  </div>
                </div>
              </div>
              <div className="flex self-end">{/* Social Links Here */}</div>
            </div>
            <h1 className="mb-1 text-4xl font-bold">블로그 제목 입니다.</h1>
            <h2 className="blog-detail-header-subtitle mb-2 text-xl text-gray-600">
              블로그 요약 설명 (description)
            </h2>
            <div className="relative mx-auto h-96 w-full bg-black">
              {/* <Image
                priority
                layout="fill"
                objectFit="cover"
                src={coverImage} alt=""/> */}
            </div>
          </div>
          {/* Blog Header Ends */}
          <article className="lg:prose-lg markdown-image-50 prose my-6">
            {/* {blog.content} */}
          </article>
          <Utterances repo={utterancesRepo} path={blog.slug} />
        </div>
      </BaseLayout>
    </>
  );
};

export default BlogDetail;

export const getStaticProps: GetStaticProps = async (context: any) => {
  const { slug } = context.params;

  const blog = getBlogBySlug(slug);

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
