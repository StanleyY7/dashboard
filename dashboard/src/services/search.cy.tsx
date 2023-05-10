import React from "react";

import { fetchData, fetchGithubData } from "./search";
import { githubData, codewarsData, user } from "../testData/testData";

describe("search tests", () => {
  it("should fetchData from codewars", () => {
    cy.intercept("GET", `https://www.codewars.com/api/v1/users/${user}`, {
      statusCode: 200,
      body: codewarsData,
    }).as("fetchData");

    fetchData(user).then((data) => {
      expect(data).to.deep.equal(codewarsData);
    });
  });

  it("should fetchGithubData from github", () => {
    cy.intercept("GET", `https://api.github.com/users/${user}/repos`, {
      statusCode: 200,
      body: githubData,
    }).as("fetchGithubData");

    fetchGithubData(user).then((data) => {
      expect(data).to.deep.equal(githubData);
    });
  });
});
