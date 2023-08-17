import { allPosts } from "@/.contentlayer/generated";
import Link from "next/link";

function getPosts() {
  const posts = allPosts.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  );

  return posts;
}

export default function PostPage() {
  const posts = getPosts();

  // TODO: 컴포넌트로 분리
  return (
    <section className="flex flex-col flex-1 items-center gap-4">
      {posts.map((post) => (
        <div key={post._id} className="card w-11/12 bg-neutral shadow-xl">
          <Link href={`post/${post.title}`}>
            <div className="card-body">
              <h2 className="card-title">{post.title}</h2>
              <p className="text-ellipsis overflow-hidden h-12">
                {post.description}
              </p>
              <div className="card-actions justify-start">
                {post.tags.map((tag) => (
                  <div key={tag} className="badge badge-outline">
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </Link>
        </div>
      ))}
    </section>
  );
}
