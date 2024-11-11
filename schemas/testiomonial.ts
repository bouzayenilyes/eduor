const testimonial = {
    name: "testimonial",
    title: "Testimonial",
    type: "document",
    fields: [
        {
        name: "imgSrc",
        title: "Image Source",
        type: "image",
        description: "Upload a testimonial picture",
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
        name: "desc",
        title: "Description",
        type: "string"
        },
        {
        name: "name",
        title: "Client/User Name",
        type: "string"
        },
        {
        name: "designation",
        title: "Designation",
        type: "string"
        },
        
    ]
}

export default testimonial