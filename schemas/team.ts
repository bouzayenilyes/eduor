const team = {
    name: "team",
    title: "Team",
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
        description: "Upload a team picture",
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
        name: "name",
        title: "Name",
        type: "string"
      },
      {
        name: "designation",
        title: "Designation",
        type: "string",
      },
      {
        name: "slug",
        title: "Slug",
        type: "slug",
        description:
          "Add a custom slug for the URL or generate one from the name",
        options: { source: "name" },
      },
      {
        name: "about",
        title: "About",
        type: "text"
      },
      {
        name: "phone",
        title: "Phone",
        type: "number"
      },
     
    ],
  };
  
  export default team;
  