import { allPosts } from "@/.contentlayer/generated";
import MdxRenderer from "@/app/_components/NdxRenderer";
import { Container, Divider, Heading, Text } from "@chakra-ui/react";
import { Metadata, ResolvingMetadata } from "next";
import Head from "next/head";

export async function generateMetadata(
  { params }: { params: { slug: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const foundPost = allPosts.find(
    (post) => post.title === decodeURIComponent(params.slug)
  );

  return {
    title: foundPost?.title,
    description: foundPost?.description,
    openGraph: {
      url: `https://heeji.dev/posts/${foundPost?.title}`,
      type: "website",
      siteName: `${foundPost?.title} | HEEJI.DEV`,
      title: `${foundPost?.title} | HEEJI.DEV`,
      description: foundPost?.description,
      images: [foundPost?.thumbnailURL ?? ""],
    },
  };
}

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
      <Heading>{data?.title}</Heading>

      <Text color={"gray.400"}>{data?.date}</Text>

      <Divider my={4} colorScheme={"blackAlpha"} />
      {/* <Text>HEEJI</Text> */}

      <MdxRenderer data={data} />
    </Container>
  );
}
