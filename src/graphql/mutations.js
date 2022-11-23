/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createHome = /* GraphQL */ `
  mutation CreateHome(
    $input: CreateHomeInput!
    $condition: ModelHomeConditionInput
  ) {
    createHome(input: $input, condition: $condition) {
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
export const updateHome = /* GraphQL */ `
  mutation UpdateHome(
    $input: UpdateHomeInput!
    $condition: ModelHomeConditionInput
  ) {
    updateHome(input: $input, condition: $condition) {
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
export const deleteHome = /* GraphQL */ `
  mutation DeleteHome(
    $input: DeleteHomeInput!
    $condition: ModelHomeConditionInput
  ) {
    deleteHome(input: $input, condition: $condition) {
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
