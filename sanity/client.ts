import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
    apiVersion: "2023-05-03", // use current date (YYYY-MM-DD) to target the latest API version

    projectId: "y8lqy1fu", // can aslo be found in your Sanity Studio config file
    dataset: "production", // can aslo be found in your Sanity Studio config file

    // if you use environment varibales, you can use below instead:
    // projectId: import.meta.env.SANITY_PROJECT_ID,
    // dataset: import.meta.env.SANITY_DATASET
};



export const client = createClient(config);