// routes/contestRoutes.js
const express = require("express");
const { fetchCodeforcesContests, fetchCodeChefContests, fetchLeetcodeContests } = require("../utils/fetchContests");

const router = express.Router();

// Get all contests
router.get("/contests", async (req, res) => {
  const { platform } = req.query;
  const contests = [];

  if (!platform || platform.includes("codeforces")) {
    const codeforcesContests = await fetchCodeforcesContests();
    contests.push(...codeforcesContests);
  }
  if (!platform || platform.includes("codechef")) {
    const codechefContests = await fetchCodeChefContests();
    contests.push(...codechefContests);
  }
  if (!platform || platform.includes("leetcode")) {
    const leetcodeContests = await fetchLeetcodeContests();
    contests.push(...leetcodeContests);
  }

  res.json(contests);
});

module.exports = router;