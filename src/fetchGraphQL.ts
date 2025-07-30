import { Variables } from "relay-runtime";
import { GraphQLResponse } from "relay-runtime";

const fetchGraphQL = async (text: string | null | undefined, variables: Variables): Promise<GraphQLResponse> => {
  const { VITE_GRAPHQL_ENDPOINT, VITE_GRAPHQL_API_KEY } = import.meta.env;
  if (!VITE_GRAPHQL_ENDPOINT || !VITE_GRAPHQL_API_KEY) throw new Error("Missing environment variables");

  // Fetch data from GitHub's GraphQL API:
  const response = await fetch(VITE_GRAPHQL_ENDPOINT, {
    method: "POST",
    headers: {
      "X-API-KEY": VITE_GRAPHQL_API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: text,
      variables,
    }),
  });

  // Get the response as JSON
  try {
    return await response.json();
  } catch {
    if (response.status >= 500) throw new Error(`Server error: ${response.status} ${response.statusText}`);
  }
  return {} as GraphQLResponse;
};

export default fetchGraphQL;
