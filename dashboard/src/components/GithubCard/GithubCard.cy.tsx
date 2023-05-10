import React from "react";
import GithubCard from "./GithubCard";
import { githubData } from "../../testData/testData";

describe("<GithubCard />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<GithubCard item={githubData} />);
  });
});
