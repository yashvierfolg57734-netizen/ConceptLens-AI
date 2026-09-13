import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json({ limit: "2mb" }));

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  console.error("❌ GEMINI_API_KEY is missing from .env");
  process.exit(1);
}

const ai = new GoogleGenAI({
  apiKey: apiKey
});

app.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "ConceptLens AI backend is running",
    ai: "Gemini"
  });
});

app.post("/api/analyze", async (req, res) => {
  try {
    const {
      mode,
      branch,
      subject,
      concept,
      question,
      studentResponse,
      language
    } = req.body;

    if (!question || !studentResponse) {
      return res.status(400).json({
        error: "Question and student response are required."
      });
    }

    const prompt = `
You are the AI learning assistant for ConceptLens AI.

Your purpose is to help an engineering student understand concepts,
not simply give them an answer.

Student context:
Branch: ${branch || "Engineering"}
Subject: ${subject || "Not specified"}
Concept: ${concept || "Not specified"}
Practice mode: ${mode || "General"}
Programming language: ${language || "Not applicable"}

Question:
${question}

Student's response:
${studentResponse}

Analyze the student's response carefully.

If this is code:
- Identify the exact error if there is one.
- Check logic and correctness.
- Explain what the student understood correctly.
- Identify the missing concept.
- Discuss time and space complexity when applicable.

If this is a theory/pseudocode/algorithm answer:
- Check conceptual correctness.
- Identify missing or incorrect reasoning.
- Explain how to improve the answer.

Return ONLY valid JSON in this exact structure:

{
  "status": "Correct / Partially Correct / Needs Improvement",
  "whatYouUnderstood": "What the student understood correctly.",
  "exactError": "The exact error or issue. If none, say No major error.",
  "missingConcept": "The concept the student needs to understand better.",
  "hint1": "A small hint without giving the answer.",
  "hint2": "A stronger hint.",
  "hint3": "A final helpful hint.",
  "howToImprove": "Specific advice for improvement.",
  "correctSolution": "A correct solution or explanation.",
  "complexity": "Time and space complexity when applicable.",
  "nextFocus": "What the student should practice next."
}

Do not be judgmental.
Be encouraging.
Use simple language suitable for an engineering student.
`;

    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json"
      }
    });

    const text = response.text;

    let result;

    try {
      result = JSON.parse(text);
    } catch (parseError) {
      console.error("Gemini returned invalid JSON:", text);

      return res.status(500).json({
        error: "Gemini returned an unexpected response."
      });
    }

    res.json(result);

  } catch (error) {
    console.error("Gemini API error:", error);

    res.status(500).json({
      error: "AI analysis failed.",
      details: error.message
    });
  }
});

app.listen(PORT, () => {
  console.log("");
  console.log("====================================");
  console.log("       CONCEPTLENS AI BACKEND");
  console.log("====================================");
  console.log(`🚀 Running: http://localhost:${PORT}`);
  console.log("🧠 Model: gemini-3.8-flash");
  console.log("====================================");
  console.log("");
});
