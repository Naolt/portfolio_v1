import { type SchemaTypeDefinition } from "sanity";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    {
      type: "document",
      name: "project",
      title: "Project",
      fields: [
        {
          type: "string",
          name: "title",
          title: "Title",
        },
        {
          type: "string",
          name: "role",
          title: "Role",
        },
        {
          type: "text",
          name: "description",
          title: "Description",
        },
        {
          type: "array",
          name: "skills",
          title: "Skills",
          of: [{ type: "string" }],
        },
        {
          type: "url",
          name: "deployedSiteLink",
          title: "Deployed Site Link",
        },
        {
          type: "url",
          name: "githubLink",
          title: "Github Link",
        },
        {
          type: "array",
          name: "images",
          title: "Images",
          of: [{ type: "image" }],
        },
        {
          type: "string",
          name: "color",
          title: "Color",
        },
      ],
    },
    {
      type: "document",
      name: "personalInfo",
      title: "Personal Information",
      fields: [
        {
          type: "string",
          name: "name",
          title: "Full Name",
        },
        {
          type: "email",
          name: "email",
          title: "Email",
        },
        {
          type: "string",
          name: "role",
          title: "Role",
        },
        {
          type: "text",
          name: "about",
          title: "About Section",
        },
        {
          type: "text",
          name: "introExcerpt",
          title: "Introduction Excerpt",
        },
        {
          type: "array",
          name: "socialUrls",
          title: "Social URLs",
          of: [
            {
              type: "object",
              fields: [
                { type: "string", name: "platform", title: "Platform" },
                { type: "url", name: "url", title: "URL" },
              ],
            },
          ],
        },
        {
          type: "array",
          name: "skills",
          title: "Skills",
          of: [{ type: "string" }],
        },
        {
          type: "url",
          name: "resumeLink",
          title: "Resume Link",
        },
      ],
    },
  ],
};
