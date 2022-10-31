import { gql, useQuery } from "@apollo/client";

/* interface AboutSection {
  about: string;
} */

const GET_ABOUT_CONTENT = gql`
  query {
    aboutMes {
      aboutUs
      sectionName
    }
  }
`;

export function useAboutQuery() {
  return useQuery(GET_ABOUT_CONTENT);
}
