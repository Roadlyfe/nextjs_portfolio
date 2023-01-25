import skill from './skill'
import project from './project'
import pageInfo from './pageInfo'
import experience from './experience'
import social from './social'
import { createClient } from "next-sanity";

export const schemaTypes = [pageInfo, experience, project, skill, social]

export const clientInfo = {
    projectId: "h1ireiav",
    dataset: "production",
    apiVersion: "2023-01-19",
    useCdn: false
};

export async function getStaticProps() {
    const pets = [
      /* {
        _createdAt: "2022-03-08T09:28:00Z",
        _id: "1f69c53d-418a-452f-849a-e92466bb9c75",
        _rev: "xnBg0xhUDzo561jnWODd5e",
        _type: "pet",
        _updatedAt: "2022-03-08T09:28:00Z",
        name: "Capybara"
      } */
    ];
  
    return {
    //   props: {
        types: schemaTypes
    //   }
    };
  }