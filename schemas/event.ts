const event = {
  name: "event",
  title: "Event",
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
      description: "Upload a event picture",
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
      name: "location",
      title: "Location",
      type: "string"
    },
    {
      name: "time",
      title: "Time",
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
      name: "organizer",
      title: "Organizer",
      type: "string"
    },
    {
      name: "price",
      title: "Price",
      type: "number"
    },
    {
      name: "color",
      title: "Color",
      type: "string"
    }
  ],
};

export default event;
