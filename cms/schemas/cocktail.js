const cocktail = {
  name: "cocktail",
  title: "Cocktail",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    },
    {
      name: "strapline",
      title: "Strapline",
      type: "string",
    },
    {
      name: "album",
      title: "Album",
      type: "album",
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "ingredients",
      title: "Ingredients",
      type: "blockContent",
    },
    {
      name: "method",
      title: "Method",
      type: "blockContent",
    },
  ],
};

export default cocktail;
