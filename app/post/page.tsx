import { allPosts } from "@/.contentlayer/generated";
import TagList from "@/app/_components/TagList";
import {
  Heading,
  Text,
  Container,
  Stack,
  Badge,
  Image,
  Grid,
  GridItem,
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
    <Container maxW={"container.lg"} py={8}>
      {/* <TagList tags={uniqTags} /> */}

      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={6}
      >
        {posts.map((post) => (
          <GridItem key={post._id} borderRadius={5}>
            <Link href={`post/${encodeURIComponent(post.title)}`}>
              <Stack spacing={2}>
                <Image
                  src={post.thumbnailURL}
                  height={"180px"}
                  objectFit={"cover"}
                  borderRadius={10}
                />

                <Stack direction={"row"}>
                  {post.tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </Stack>

                <Heading as={"h2"} size={"md"}>
                  {post.title}
                </Heading>

                <Text
                  fontSize={"sm"}
                  overflow={"hidden"}
                  textOverflow={"ellipsis"}
                  noOfLines={3}
                >
                  {post.description}
                </Text>

                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Stack>
                    <Text fontSize={"sm"}>{post.date}</Text>
                  </Stack>
                </Stack>
              </Stack>
            </Link>
          </GridItem>
        ))}
      </Grid>
    </Container>
  );
}
