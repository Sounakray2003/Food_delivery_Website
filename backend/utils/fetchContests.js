// utils/fetchContests.js
const axios = require("axios");

// Fetch Codeforces contests
const fetchCodeforcesContests = async () => {
  const response = await axios.get("https://codeforces.com/api/contest.list");
  return response.data.result.filter((contest) => contest.phase === "BEFORE");
};

// Fetch CodeChef contests (web scraping)
const fetchCodeChefContests = async () => {
  // Use a library like Cheerio or Puppeteer for scraping
};

// Fetch Leetcode contests (web scraping or GraphQL)
const fetchLeetcodeContests = async () => {
  // Implement scraping or GraphQL query
};

module.exports = { fetchCodeforcesContests, fetchCodeChefContests, fetchLeetcodeContests };