/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getHome = /* GraphQL */ `
  query GetHome($id: ID!) {
    getHome(id: $id) {
      id
      address
      price
      description
      sellerAgentLicense
      createdAt
      updatedAt
    }
  }
`;
export const listHomes = /* GraphQL */ `
  query ListHomes(
    $filter: ModelHomeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHomes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        address
        price
        description
        sellerAgentLicense
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
