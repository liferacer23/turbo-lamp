import { gql } from "@apollo/client";

export const LOAD_CHARACTERS = gql`
  query {
    characters {
      info {
        count
      }
      results {
        id
        name
        species
        origin {
          id
          name
          type
        }
        image
        episode {
          id
          name
          air_date
        }
        created
      }
    }
  }
`;
