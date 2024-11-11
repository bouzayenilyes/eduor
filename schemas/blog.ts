const blog = {
    name: "blog",
    title: "Blog",
    type: "document",
    fields: [
      {
        name: "id",
        title: "ID",
        type: "number",
        hidden: true,
        readOnly: true
      },
      {
        name: "imgSrc",
        title: "Image Source",
        type: "image",
        description: "Upload a blog picture",
        options: { hotspot: true },
        fields: [
          {
            name: "alt",
            title: "Alt",
            type: "string",
          },
        ],
      },
      {
        name: "category",
        title: "Category",
        type: "string"
      },
      {
        name: "color",
        title: "Color",
        type: "string",
        description: "if colour is above single word separate them by '_'",
      },
      {
        name: "date",
        title: "Date",
        type: "string"
      },
      {
        name: "title",
        title: "Title",
        type: "string"
      },
      {
        name: "longTitle",
        title: "Long Title",
        type: "string"
      },
      {
        name: "slug",
        title: "Slug",
        type: "slug",
        description:
          "Add a custom slug for the URL or generate one from the name",
        options: { source: "title" },
      },
      {
        name: "desc",
        title: "Description",
        type: "text"
      },
      {
        name: "author",
        title: "Author",
        type: "string"
      },
     
    ],
  };
  
  export default blog;
  