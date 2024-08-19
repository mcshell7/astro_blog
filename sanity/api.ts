import {client} from "./client";

export async function getPosts() {

    const posts = await client.fetch(
        `*[_type == "post"] | order(publishedAt desc){
      title,
      publishedAt,
      "slug": slug.current,
      blockContent2,
      "image": mainImage.asset -> url,
      description,
      "categories": categories[]->{
        title,
        slug
      },
    }`,
    );
    return posts;
}

export async function getProjects() {
    const projects = await client.fetch(
        `*[_type == "projects"]{
      title,
      publishedAt,
      "slug": slug.current,
      blockContent2,
      "image": mainImage.asset -> url,
      description,
      tags
    }`,
    );
    return projects;
}

export async function getCategories() {
    const categories = await client.fetch(
        `*[_type == "categories"]{
      title,
      publishedAt,
      "slug": slug.current,
      "image": mainImage.asset -> url,
    }`,
    );
    return categories;
}