import type { CollectionConfig } from "payload";

export const AboutMe: CollectionConfig = {
  slug: "aboutme",
  access: {
    read: () => true, 
  },
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      defaultValue: "About Me",
    },
    {
      name: "bio",
      type: "textarea",
      required: false,
      defaultValue: "Tulis bio kamu di sini...",
    },
    {
      name: "profileImage",
      type: "upload",
      relationTo: "media", 
      required: false,
    },
    {
      name: "socialLinks",
      type: "array",
      fields: [
        { name: "platform", type: "text" }, 
        { name: "url", type: "text" },
      ],
      required: false,
    },
  ],
};
