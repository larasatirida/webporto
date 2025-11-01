import type { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
  slug: "media",
  admin: {
    useAsTitle: "filename", 
  },
  access: {
    read: () => true, 
  },
  upload: {
    staticDir: "media", 
    mimeTypes: ["image/*", "video/*", "audio/*", "application/pdf"], 
  },
  fields: [
    {
      name: "caption",
      type: "text",
      required: false,
    },
    {
      name: "altText",
      type: "text",
      required: false,
    },
  ],
};
