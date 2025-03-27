const express = require("express")
const app= express()
const ejs= require("ejs")
app.use(express.static("public"));
const axios = require("axios");
app.set("view engine", "ejs");

const GITHUB_TOKEN = "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";
app.get("/", async (req, res) => {
    const query = `
    {
      user(login: "SaxenaVaibhav80") {
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                date
                contributionCount
              }
            }
          }
        }
      }
    }`;

    try {
    
        const response = await axios.post(
            "https://api.github.com/graphql",
            { query },
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${GITHUB_TOKEN}`
                },
                timeout: 10000 
            }
        );
        res.render("mainpage", { data: JSON.stringify(response.data, null, 2) });

    } catch (error) {
        console.error("Error Fetching GitHub Data:", error.message);
        res.render("mainpage", { data: "Error fetching GitHub data!" });
    }
});

app.listen(3000)