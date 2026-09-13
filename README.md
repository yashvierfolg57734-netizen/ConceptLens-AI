# ConceptLens AI

### Understand the concept, not just the answer.

ConceptLens AI is an AI-powered adaptive learning platform designed to help engineering students understand concepts deeply instead of simply checking whether an answer is correct.

It analyzes a student's actual answer or code, identifies mistakes and concept gaps, provides progressive hints, explains how to improve, and recommends what the student should focus on next.

## Problem

Engineering students often practice by solving questions and checking whether their final answer is correct. A wrong answer does not always explain *why* the student made the mistake or which underlying concept they need to improve.

ConceptLens AI focuses on the learning process behind the answer.

## Solution

ConceptLens AI creates a personalized learning flow:

**Branch → Subject → Concept → Learn → Practice → AI Analysis → Personalized Next Focus**

Students can select their engineering branch, subject, and concept, study the concept, and then practice through coding, algorithms, pseudocode, debugging, theory, and problem-solving questions.

The AI analyzes the student's response and provides personalized feedback.

## Key Features

- Engineering branch selection
- Subject and concept selection
- Concept-based learning
- Subtopic-based learning
- Coding and problem-solving practice
- Code and answer analysis
- AI-powered mistake detection
- Identification of missing concepts
- Progressive hints
- Correct solution and explanation
- Time and space complexity analysis
- Personalized "Next Focus" recommendation
- Simple and student-friendly interface

## AI-Powered Learning

ConceptLens AI uses the Gemini API to analyze student responses.

Instead of only returning:

> Correct / Incorrect

the system provides deeper feedback such as:

- What the student understood
- The exact error
- The missing concept
- Progressive hints
- How to improve
- A correct solution
- Complexity analysis
- Recommended next learning focus

This makes the AI a learning assistant rather than just an answer checker.

## Technology Stack

### Frontend
- HTML
- CSS
- JavaScript

### Backend
- Node.js
- Express.js
- CORS
- dotenv

### AI
- Google Gemini API
- Google GenAI SDK

## Project Structure

```text
ConceptLens-AI/
│
├── index.html
├── login.html
├── dashboard.html
├── learn.html
├── practice.html
├── assessment.html
├── script.js
├── style.css
├── package.json
├── package-lock.json
│
└── backend/
    ├── server.js
    ├── package.json
    └── .env
