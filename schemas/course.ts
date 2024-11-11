const course = {
    name: "course",
    title: "Course",
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
        description: "Upload a course picture",
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
        name: "price",
        title: "Price",
        type: "number"
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
        name: "slug",
        title: "Slug",
        type: "slug",
        description:
          "Add a custom slug for the URL or generate one from the name",
        options: { source: "title" },
      },
      {
        name: "description",
        title: "Description",
        type: "text"
      },
      {
        name: "instructor",
        title: "instructor",
        type: "string"
      },
      {
        name: "lessons",
        title: "Lessons",
        type: "number"
      },
      {
        name: "rating",
        title: "Rating",
        type: "number"
      },
      {
        name: "students",
        title: "Students",
        type: "number"
      },
      {
        name: "review",
        title: "Review",
        type: "number"
      },
      {
        name: "instructorImg",
        title: "Instructor Image",
        type: "image",
        description: "Upload a instructor picture",
        options: { hotspot: true },
        fields: [
          {
            name: "alt",
            title: "Alt",
            type: "string",
          },
        ],
      },
    ],
  };
  
  export default course;
  