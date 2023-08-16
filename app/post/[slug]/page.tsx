import { allPosts } from "@/.contentlayer/generated";
import { MDXComponents } from "mdx/types";
import { useMDXComponent } from "next-contentlayer/hooks";

const mdxComponents: MDXComponents = {
  h2: (props) => <h2 className="border-2" {...props}></h2>,
};

function getPost(title: string) {
  const foundPost = allPosts.find((post) => post.title === decodeURI(title));
  return foundPost;
}

export default function PostDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const data = getPost(params.slug);
  const MDXComponent = useMDXComponent(data?.body.code ?? "");

  return (
    <div>
      <h1>Detail</h1>

      <MDXComponent components={mdxComponents} />
    </div>
  );
}
