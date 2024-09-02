const express = require("express");
const {
  BedrockClient,
  InvokeModelCommand,
} = require("@aws-sdk/client-bedrock");
const bodyParser = require("body-parser");

// Create Express app
const app = express();
const port = 4000;
const cors = require("cors");
app.use(cors());

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// AWS SDK Bedrock Client Configuration
const client = new BedrockClient({ region: "us-east-1" });

async function callBedrock(answers) {
  const command = new InvokeModelCommand({
    modelId: "anthropic.claude-3-sonnet-20240229-v1:0",
    body: JSON.stringify({
      anthropic_version: "bedrock-2023-05-31",
      max_tokens: 1000,
      messages: [
        {
          role: "user",
          content: `Based on the following quiz answers: ${answers.join(", ")}`,
        },
      ],
    }),
  });

  try {
    const response = await client.send(command);
    console.log("Bedrock Response:", response);
    return response;
  } catch (error) {
    console.error("Error invoking model:", error);
    throw error;
  }
}

// Endpoint to handle quiz completion
app.post("/submit-quiz", async (req, res) => {
  const answers = req.body.answers; // Get answers from request body

  try {
    const bedrockResponse = await callBedrock(answers);
    res.json(bedrockResponse);
  } catch (error) {
    res.status(500).send("Error generating recommendations.");
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
