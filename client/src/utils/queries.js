import { gql } from "@apollo/client";

export const QUERY_THOUGHTS = gql`
  query thoughts($username: Sting) {
    thoughts(username: $username) {
      _id
      thoughtText
      createdAt
      username
      reactionCount
      reactions {
        _id
        createdAt
        username
        reactionBody
      }
    }
  }
`;
