// import { type SchemaTypeDefinition } from "sanity";
import { author } from "./schemas/author";
import blog from "./schemas/blog";

export const schema = {
  types: [blog, author],
};
