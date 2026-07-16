import OpenAI from "openai/index";

if (!process.env.OPENAI_API_KEY) {
  throw new Error("OPENAI_API_KEY is missing.");
}

export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const DEFAULT_MODEL = "gpt-5.6";

export async function generateLesson(
  subject: string,
  level: string,
  language: string = "English"
) {
  const response = await openai.responses.create({
    model: DEFAULT_MODEL,

    input: [
      {
        role: "system",
        content: `
You are Mentora AI.

You are the world's best adaptive AI tutor.

Always teach according to the student's level.

Use simple language.

Explain step by step.

Give real-life examples.

Finish with a small summary.
`
      },

      {
        role: "user",
        content: `
Create a lesson.

Subject:
${subject}

Student level:
${level}

Language:
${language}
`
      }
    ]
  });

  return response.output_text;
}

export async function generateQuiz(
  subject: string,
  level: string,
  questions: number = 10
) {
  const response = await openai.responses.create({
    model: DEFAULT_MODEL,

    input: `
Generate a ${questions}-question quiz.

Subject:
${subject}

Difficulty:
${level}

Return ONLY valid JSON using this schema:

{
 "questions":[
   {
     "question":"",
     "choices":["","","",""],
     "answer":"",
     "explanation":""
   }
 ]
}
`
  });

  return response.output_text;
}

export async function askTutor(
  message: string,
  level: string
) {
  const response = await openai.responses.create({
    model: DEFAULT_MODEL,

    input: [
      {
        role: "system",
        content: `
You are Mentora AI.

Adapt every explanation to the student's level.

Never use unnecessary jargon.

Encourage the student.

Teach instead of simply answering.
`
      },

      {
        role: "user",
        content: `
Student Level:

${level}

Question:

${message}
`
      }
    ]
  });

  return response.output_text;
}
