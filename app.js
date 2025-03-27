const express = require("express")
const app= express()
const ejs= require("ejs")
const dotenv = require("dotenv")
dotenv.config()
app.use(express.static("public"));
const axios = require("axios");
app.set("view engine", "ejs");

const GITHUB_TOKEN= process.env.KEY

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
        res.render("mainpage", { 
          githubData: response.data, 
          error: null
      });

    } catch (error) {
        console.error("Error Fetching GitHub Data:", error.message);
        res.render("mainpage", { githubData: null,
          error: "Failed to fetch GitHub data: " + error.message });
    }
});

app.listen(3000)