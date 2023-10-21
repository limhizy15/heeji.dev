import { allPosts } from "@/.contentlayer/generated";
import { Text, Container, Image, Grid, GridItem } from "@chakra-ui/react";
import Link from "next/link";
import styles from "./page.module.css";

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
    <Container maxW={"container.lg"}>
      <h1 className={styles.title}>POSTS</h1>

      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={6}
        py={2}
      >
        {posts.map((post) => (
          <GridItem
            className={styles.postGridItem}
            key={post._id}
            borderRadius={5}
          >
            <Link href={`post/${encodeURIComponent(post.title)}`}>
              <div>
                <Image
                  src={post.thumbnailURL}
                  alt={`${post.title}-thumbnail-image`}
                  width={"100%"}
                  height={"180px"}
                  objectFit={"cover"}
                  borderRadius={4}
                />

                <div className={styles.postInfoLayout}>
                  <h2
                    className={styles.postTitle}
                    style={{
                      fontSize: "20px",
                      fontWeight: "900",
                    }}
                  >
                    {post.title}
                  </h2>

                  <span
                    style={{
                      fontWeight: 500,
                      fontSize: "16px",
                    }}
                  >
                    {post.description}
                  </span>

                  <Text fontSize={"sm"}>{post.date}</Text>
                </div>
              </div>
            </Link>
          </GridItem>
        ))}
      </Grid>
    </Container>
  );
}
