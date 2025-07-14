import { fetchGraphQL } from "./fetchGraphQL";

export async function getPosts() {
  const query = `
    query NewQuery {
        posts {
                nodes {
                id
                excerpt
                content
                date
                }
            }
        }
    `;

  const data = await fetchGraphQL(query);
  return data.posts.nodes;
}
