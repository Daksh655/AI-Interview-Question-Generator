const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const API_KEY = "sk-or-v1-*********"; // enter the API_key this will give access to the AI for searching or using

app.post("/generate", async (req, res) => {
  try {
    const role = req.body.role;

    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "openai/gpt-3.5-turbo",
          messages: [
            {
              role: "user",
              content: `Generate 10 technical interview questions for ${role}`,
            },
          ],
          temperature: 0.7,
          max_tokens: 500,
        }),
      },
    );

    const data = await response.json();

    console.log("OPENROUTER RESPONSE:", data);

    const text = data.choices[0].message.content;

    res.json({ result: text });
  } catch (error) {
    console.error("OpenRouter error:", error);
    res.json({ result: "Error generating questions" });
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
