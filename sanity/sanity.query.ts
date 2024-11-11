import { groq } from "next-sanity";
import client from "./sanity.client";

export async function getEvent() {
  return client.fetch(
    groq`*[_type == "event"]{
      _id,
      category,
      color,
      desc,
      imgSrc {alt, "image": asset->url},
      location,
      longTitle,
      organizer,
      price,
      "slug": slug.current,
      time,
      title,
    }`
  );
}

export async function getCourse() {
  return client.fetch(
    groq`*[_type == "course"]{
      _id,
      category,
      color,
      desc,
      imgSrc {alt, "image": asset->url},
      lessons,
      title,
      instructor,
      price,
      "slug": slug.current,
      description,
      date,
      rating,
      students,
      review,
      instructorImg {alt, "image": asset->url},
    }`
  );
}

export async function getBlog() {
  return client.fetch(
    groq`*[_type == "blog"]{
      _id,
      imgSrc {alt, "image": asset->url},
      category,
      color,
      date,
      title,
      longTitle,
      "slug": slug.current,
      desc,
      author
    }`
  );
}

export async function getTeam() {
  return client.fetch(
    groq`*[_type == "team"]{
      _id,
      imgSrc {alt, "image": asset->url},
      name,
      designation,
      "slug": slug.current,
      about,
      phone
    }`
  );
}

export async function getActivity() {
  return client.fetch(
    groq`*[_type == "activity"]{
      _id,
      iClassName,
      title,
      color,
    }`
  );
}

export async function getFaq() {
  return client.fetch(
    groq`*[_type == "faq"]{
      _id,
      color,
      question,
      answer
    }`
  );
}

export async function getService() {
  return client.fetch(
    groq`*[_type == "service"]{
      _id,
      iClassName,
      title,
      desc,
      color,
    }`
  );
}

export async function getTestimonial() {
  return client.fetch(
    groq`*[_type == "testimonial"]{
      _id,
      imgSrc {alt, "image": asset->url},
      desc,
      name,
      designation,
    }`
  );
}

export async function getWork() {
  return client.fetch(
    groq`*[_type == "work"]{
      _id,
      imgSrc {alt, "image": asset->url},
      task,
      color,
      desc,
    }`
  );
}

export async function getCategory() {
  return client.fetch(
    groq`*[_type == "category"]{
      _id,
      icon,
      desc,
      title,
      color,
    }`
  );
}