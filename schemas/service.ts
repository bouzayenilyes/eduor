const service = {
    name: "service",
    title: "Service",
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
        name: "iClassName",
        title: "iClassName",
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
  
  export default service;
  