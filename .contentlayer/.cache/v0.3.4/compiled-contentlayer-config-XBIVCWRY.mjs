// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import highlight from "rehype-highlight";
import remarkGfm from "remark-gfm";
var Post = defineDocumentType(() => ({
  name: "Post",
  contentType: "mdx",
  filePathPattern: `**/*.mdx`,
  fields: {
    title: { type: "string", required: true },
    date: { type: "string", required: true },
    description: { type: "string", required: true },
    thumbnailURL: { type: "string", required: false },
    tags: { type: "list", required: true, of: { type: "string" } }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "posts",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [highlight]
  }
});
export {
  Post,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-XBIVCWRY.mjs.map
