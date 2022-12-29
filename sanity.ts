// import { createClient } from "next-sanity";
import { useClient } from 'sanity';
import createImageUrlBuilder from "@sanity/image-url";

export const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    apiVersion: "2021-03-25",
    useCdn: process.env.NODE_ENV === "production",
};

// // setup client for fetching data in the getProps page functions 
// export const sanityClient = createClient(config);

// export function MyComponent {
//     const client = useClient().withConfig({apiVersion: '2021-10-21'})
//     // use client as needed in, for instance in an useEffect
  
//     return <div>JSX</div>
//   }

export const urlFor = (source: any) => 
    createImageUrlBuilder(config).image(source); 

    // just a quick note so I can make a new commit