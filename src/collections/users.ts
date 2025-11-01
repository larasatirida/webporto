import type {CollectionConfig} from "payload";
export const Users: CollectionConfig = {
  slug: "users",
  auth: true,
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "nama",
      type: "text",
      required: true,
    },
    { 
      name: "pesan",
      type: "text",
      required: true,
    },
  ],
};