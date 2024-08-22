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

export async function getMenu() {
    const menu = await client.fetch(
        `*[_type == "menu"]{
      title,
      "slug": slug.current,
    }`,
    );
    return menu;
}
export async function getTech() {
    const tech = await client.fetch(
        `*[_type == "tech"] | order(publishedAt desc){
      title,
      "image": mainImage.asset -> url,
    }`,
    );
    return tech;
}