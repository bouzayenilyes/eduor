const work = {
    name: "work",
    title: "Work",
    type: "document",
    fields: [
        {
        name: "imgSrc",
        title: "Image Source",
        type: "image",
        description: "Upload a work picture",
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
        name: "task",
        title: "Task Name",
        type: "string"
        },
        {
        name: "color",
        title: "Color",
        type: "string"
        },
        {
        name: "desc",
        title: "Description",
        type: "string"
        },
    ]
}

export default work