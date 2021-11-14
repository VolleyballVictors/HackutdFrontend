var ghpages = require("gh-pages");

ghpages.publish(
  "public", // path to public directory
  {
    branch: "gh-pages",
    repo: "https://github.com/VolleyballVictors/HackutdFrontend.git", // Update to point to your repository
    user: {
      name: "VolleyballVictors", // update to use your name
      email: "54827653+dmbeta@users.noreply.github.com", // Update to use your email
    },
  },
  () => {
    console.log("Deploy Complete!");
  }
);
