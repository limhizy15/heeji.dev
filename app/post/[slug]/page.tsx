import { allPosts } from "@/.contentlayer/generated";
import { MDXComponents } from "mdx/types";
import { useMDXComponent } from "next-contentlayer/hooks";

const mdxComponents: MDXComponents = {
  h2: (props) => <h2 className="text-2xl pt-12 font-bold" {...props}></h2>,
  h3: (props) => <h3 className="text-xl pt-8 font-bold" {...props}></h3>,
  ul: (props) => (
    <ul
      className="marker:text-violet-700 list-disc pl-5 space-y-3 text-slate-400"
      {...props}
    ></ul>
  ),
};

function getPost(title: string) {
  const foundPost = allPosts.find(
    (post) => post.title === decodeURIComponent(title)
  );
  return foundPost;
}

export default function PostDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const data = getPost(params.slug);
  const MDXComponent = useMDXComponent(data?.body?.code ?? "");

  // TODO: 컴포넌트화
  return (
    <section className="flex flex-col items-center">
      <div className="card bg-neutral w-11/12 shadow-2xl">
        <div className="card-body">
          <h1 className="card-title text-3xl font-semibold">{data?.title}</h1>
          <p>{data?.date}</p>

          <MDXComponent components={mdxComponents} />
        </div>
      </div>
    </section>
  );
}
