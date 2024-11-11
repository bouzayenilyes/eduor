const activity = {
    name: "activity",
    title: "Activity",
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
        name: "color",
        title: "Color",
        type: "string",
        description: "if colour is above single word separate them by '_'",
      }
    ],
  };
  
  export default activity;
  