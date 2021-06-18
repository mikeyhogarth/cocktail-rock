import sanityClient from "@sanity/client";
import sanityConfig from "../cms/sanity.json";

export default sanityClient({
  projectId: sanityConfig.api.projectId,
  dataset: sanityConfig.api.dataset,
  apiVersion: "2021-06-15",
  useCdn: false,
});
