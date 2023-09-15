import { allPosts } from "@/.contentlayer/generated";
import TagList from "@/app/_components/TagList";
import {
  Card,
  Heading,
  ListItem,
  UnorderedList,
  Text,
  Tag,
  Container,
  List,
  Stack,
  Badge,
  theme,
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
    <Container maxW={"container.md"} pb={8}>
      <TagList tags={uniqTags} />

      <List spacing={8}>
        {posts.map((post) => (
          <ListItem
            key={post._id}
            p={4}
            borderBottom={`1px solid ${theme.colors.facebook[200]}`}
          >
            <Link href={`post/${encodeURIComponent(post.title)}`}>
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Stack>
                  <Text fontSize={"sm"}>{post.date}</Text>
                </Stack>

                <Stack direction={"row"}>
                  {post.tags.map((tag) => (
                    <Badge key={tag} colorScheme={"facebook"}>
                      {tag}
                    </Badge>
                  ))}
                </Stack>
              </Stack>

              <Heading as={"h2"} size={"md"} paddingBlock={2}>
                {post.title}
              </Heading>

              <Text maxH={12} overflow={"hidden"} textOverflow={"ellipsis"}>
                {post.description}
              </Text>
            </Link>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}
