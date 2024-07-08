import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId, useCdn } from "../env.local";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
  perspective: "published",
});
