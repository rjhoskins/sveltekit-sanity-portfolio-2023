import type { PageServerLoad } from './$types';
import sanityClient from '$lib/sanity'
import { error } from '@sveltejs/kit';
// export const ssr = true;


// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const load = (async ({ params }) => {
  if (params.project_id) {

    const data = await sanityClient.fetch(`*[_type == "project" && _id == "${params.project_id}"] {
      _id,
      name,
      "imageUrl": img.asset->url,
      sandboxUrl, 
      loomDemoUrl,
      designUrl,
      liveUrl,
      shortDescription,
      content,
      techTags
      
    }[0]`);
    
    return {
      hello: "Sanityio waz here",
      project: data
    };
  }
  else  throw error(404, 'Not found');
}) satisfies PageServerLoad;