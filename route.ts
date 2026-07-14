import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";


const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});


export async function POST(
  request: NextRequest
) {

  try {

    const body = await request.json();


    const {
      message,
      level = "Beginner",
    } = body;



    if (!message) {

      return NextResponse.json(
        {
          error:"Message is required"
        },
        {
          status:400
        }
      );

    }



    const response = await openai.responses.create({

      model: "gpt-5.6",

      instructions: `
You are Mentora AI, an advanced personal AI tutor.

Your mission:
- Teach students clearly.
- Adapt explanations to the student's level.
- Detect misunderstandings.
- Give examples.
- Encourage learning.

Student level:
${level}

Rules:
- Never just give the answer.
- Explain the reasoning.
- Ask questions when useful.
- Be patient and motivating.

You are not a simple chatbot.
You are a personalized AI teacher.
      `,


      input: message,

    });



    const answer =
      response.output_text ||
      "I couldn't generate an answer.";



    return NextResponse.json({

      message: answer

    });



  } catch(error) {


    console.error(
      "OpenAI error:",
      error
    );


    return NextResponse.json(

      {
        message:
        "Mentora AI is temporarily unavailable."
      },

      {
        status:500
      }

    );

  }

}
