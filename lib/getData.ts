import { client } from "@/sanity/lib/client";

export async function getData(type: string) {
  try {
    const query = `*[_type == "${type}"]`;
    const data = await client.fetch(query);
    console.log(`Data for ${type}:`, data);
    return data;
  } catch (error) {
    console.error(`Error fetching ${type} data:`, error);
    throw error;
  }
}
