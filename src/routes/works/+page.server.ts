import type { PageServerLoad } from './$types';
import sanityClient from '$lib/sanity'
// export const ssr = true;


// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const load = (async ({ params }) => {
  const data = await sanityClient.fetch(`*[_type == "project"]|order(orderRank) {
    _id,
    name,
    "imageUrl": img.asset->url,
    sandboxUrl, 
    loomDemoUrl,
    designUrl,
    liveUrl,
    company,
    description,
    subText,
    techTags
    
  }`);

  return {
    title: "Works or samples",
    subTitle: "codebases I've created or worked with",
    projects: data
  };
}) satisfies PageServerLoad;