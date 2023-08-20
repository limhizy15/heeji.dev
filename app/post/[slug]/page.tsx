import { allPosts } from "@/.contentlayer/generated";
import MdxRenderer from "@/components/mdxRenderer";

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

  // TODO: 컴포넌트화
  return (
    <section className="flex flex-col items-center lg:pt-8">
      <div className="card w-full md:w-176">
        <div className="card-body">
          <h1 className="card-title text-3xl md:text-4xl font-semibold text-neutral-content">
            {data?.title}
          </h1>
          <p className="text-gray-500 ">{data?.date}</p>

          <MdxRenderer data={data} />
        </div>
      </div>
    </section>
  );
}
