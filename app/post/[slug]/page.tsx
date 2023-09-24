import { allPosts } from "@/.contentlayer/generated";
import MdxRenderer from "@/app/_components/NdxRenderer";
import { Container, Divider, Heading, Text } from "@chakra-ui/react";
import Head from "next/head";

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
    <Container maxW={"container.md"} paddingBlock={8}>
      <Head>
        <title>{data?.title} | HEEJI.DEV</title>
        <meta
          property="og:url"
          content={`https://heeji.dev/posts/${data?.title}`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={`${data?.title} | HEEJI.DEV`} />
        <meta property="og:title" content={`${data?.title} | HEEJI.DEV`} />
        <meta property="og:description" content={data?.description} />
        <meta property="og:image" content={data?.thumbnailURL} />
      </Head>
      <Heading>{data?.title}</Heading>

      <Text color={"gray.400"}>{data?.date}</Text>

      <Divider my={4} colorScheme={"blackAlpha"} />
      {/* <Text>HEEJI</Text> */}

      <MdxRenderer data={data} />
    </Container>
  );
}
