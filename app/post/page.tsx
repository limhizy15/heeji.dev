import { allPosts } from "@/.contentlayer/generated";
import TagList from "@/app/_components/TagList";
import {
  Card,
  Heading,
  ListItem,
  UnorderedList,
  Text,
  Tag,
} from "@chakra-ui/react";
import Link from "next/link";

function getPosts() {
  const posts = allPosts.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  );

  return posts;
}

export default function PostPage() {
  const posts = getPosts();

  const tags = posts.flatMap((post) => post.tags);
  const uniqTags = Array.from(new Set(tags));

  // TODO: 컴포넌트로 분리
  return (
    <section className="flex flex-col flex-1 items-center justify-center align-middle md:w-176 pb-10">
      <TagList tags={uniqTags} />

      <UnorderedList spacing={4}>
        {posts.map((post) => (
          <ListItem key={post._id} className="card w-full md:w-176">
            <Link href={`post/${encodeURIComponent(post.title)}`}>
              <Card size={"lg"} variant={"outline"} p={4}>
                <Heading as={"h2"} size={"md"}>
                  {post.title}
                </Heading>

                <Text maxH={12} overflow={"hidden"} textOverflow={"ellipsis"}>
                  {post.description}
                </Text>
                <span className="text-ellipsis overflow-hidden h-12 text-gray-500">
                  {post.date}
                </span>

                <div className="card-actions justify-start">
                  {post.tags.map((tag) => (
                    <Tag key={tag} variant={"outline"} colorScheme={"blue"}>
                      {tag}
                    </Tag>
                  ))}
                </div>
              </Card>
            </Link>
          </ListItem>
        ))}
      </UnorderedList>
    </section>
  );
}
