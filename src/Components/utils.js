import NovelCovid from "novelcovid";

async function getGlobalData() {
  return new NovelCovid().all();
}

async function getCountries() {
  return await new NovelCovid().countries(null, { sort: "cases" });
}

async function getGlobalHistory() {
  return new NovelCovid().historical(true);
}

export { getGlobalData, getCountries, getGlobalHistory };
