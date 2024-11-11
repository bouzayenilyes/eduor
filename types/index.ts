export type EventType = {
    _id: string,
    imgSrc: {
        alt: string,
        image: string
    },
    category: string,
    location: string,
    time: string,
    title: string,
    longTitle: string,
    slug: string,
    desc: string,
    organizer: string,
    price: number,
    color: string,
}

export type CourseType = {
    _id: string,
    imgSrc: {
        alt: string,
        image: string
    },
    category: string,
    price: number,
    color: string,
    date: string,
    title: string,
    slug: string,
    description: string,
    instructor: string,
    lessons: number,
    rating: number,
    students: number,
    review: number,
    instructorImg: {
        alt: string,
        image: string
    }
}
export type BlogType = {
    _id: string,
    imgSrc: {
        alt: string,
        image: string
    },
    category: string,
    color: string,
    date: string,
    title: string,
    longTitle: string,
    slug: string,
    desc: string,
    author: string,
}
export type TeamType = {
    _id: string,
    imgSrc: {
        alt: string,
        image: string
    },
    name: string,
    designation: string,
    slug: string,
    about: string,
    phone: number,
}

export type ActivityType = {
    _id: string,
    iClassName: string,
    title: string,
    color: string,
}

export type FaqType = {
    _id: string,
    color: string,
    question: string,
    answer: string,
}

export type ServiceType = {
    _id: string,
    iClassName: string,
    title: string,
    desc: string,
    color: string,
}

export type TestimonialType = {
    _id: string,
    imgSrc: {
        alt: string,
        image: string
    },
    desc: string,
    name: string,
    designation: string,
}

export type WorkType = {
    _id: string,
    imgSrc: {
        alt: string,
        image: string
    },
    task: string,
    color: string,
    desc: string,
}

export type CategoryType = {
    _id: string,
    icon: string,
    desc: string,
    title: string,
    color: string,
}