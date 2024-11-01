import createImageUrlBuilder from "@sanity/image-url";

import { dataset, projectId } from "../env.local";

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || "",
  dataset: dataset || "",
});

export const urlForImage = (source) => {
  return imageBuilder?.image(source).auto("format").fit("max").url();
};
