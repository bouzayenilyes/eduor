const category = {
    name: "category",
    title: "Category",
    type: "document",
    fields: [
      {
        name: "icon",
        title: "icon",
        type: "string",
        description: 'font awesome class name'
      },
      {
        name: "title",
        title: "Title",
        type: "string"
      },
      {
        name: "desc",
        title: "Description",
        type: "text"
      },
      {
        name: "color",
        title: "Color",
        type: "string",
        description: "if colour is above single word separate them by '_'",
      }
    ],
  };
  
  export default category;
  