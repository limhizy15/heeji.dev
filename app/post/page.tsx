import { allPosts } from "@/.contentlayer/generated";
import Image from "next/image";
import Link from "next/link";
import { NotionAPI } from "notion-client";

function getPosts() {
  const posts = allPosts.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  );

  return posts;
}

export default function PostPage() {
  const posts = getPosts();

  return (
    <section>
      {posts.map((post) => (
        <div key={post._id}>
          <Link href={`post/${post.title}`}>{post.title}</Link>
        </div>
      ))}
    </section>
  );
}
