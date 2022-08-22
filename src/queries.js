import { gql } from '@apollo/client';

export const GET_PROFILE = gql`
  query profile {
    user(login: "gaearon") {
      id
      avatarUrl
      company
      followers {
        totalCount
      }
      following {
        totalCount
      }
      login
      name
      email
      repositories(
        orderBy: {direction: DESC, field: UPDATED_AT}
        first: 10
        ownerAffiliations: OWNER
      ) {
        totalCount
        nodes {
          id
          name
          description
          primaryLanguage {
            color
            id
            name
          }
          stargazerCount
          mentionableUsers {
            totalCount
          }
          issues(first: 10, orderBy: {field: CREATED_AT, direction: ASC}) {
            edges {
              node {
                id
                author {
                  login
                }
                body
                number
                publishedAt
                title
                stateReason
                state
                updatedAt
                url
              }
            }
          }
        }
        pageInfo {
          hasNextPage
          hasPreviousPage
        }
      }
    }
  }
`;
