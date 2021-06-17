import { cleanup } from "@testing-library/react";

import { getGlobalData, getCountries, getGlobalHistory } from "../utils";

afterEach(() => {
  cleanup();
});

it("Should get countries and not be null", async () => {
  let data = null;
  await getCountries().then((info) => (data = info));

  expect(data).not.toBe(null);
});

it("Should get global data and not be null", async () => {
  let data = null;
  await getGlobalData().then((info) => (data = info));

  expect(data).not.toBe(null);
});

it("Should get global history and not be null", async () => {
  let data = null;
  await getGlobalHistory().then((info) => (data = info));

  expect(data).not.toBe(null);
});
