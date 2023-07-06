import {createClient} from "@sanity/client";

const  sanityClient = createClient({
  projectId: "cqscn1gj",
  dataset: "production",
  apiVersion: "2021-10-21",
  useCdn: false
});

export default sanityClient