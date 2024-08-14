import { client } from "./client";

export async function getPosts() {
    const posts = await client.fetch(
        `*[_type == "post"]{
      title,
      publishedAt,
      "slug": slug.current,
      blockContent2,
      "image": mainImage.asset -> url,
      description,
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