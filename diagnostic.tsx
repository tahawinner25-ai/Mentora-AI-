"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  BrainCircuit,
  CheckCircle,
  ArrowRight,
  Sparkles
} from "lucide-react";

const questions = [
  {
    question: "What is the capital of France?",
    options: [
      "London",
      "Paris",
      "Madrid",
      "Berlin"
    ],
    answer: "Paris"
  },

  {
    question: "What does AI stand for?",
    options: [
      "Automatic Internet",
      "Artificial Intelligence",
      "Advanced Information",
      "Applied Innovation"
    ],
    answer: "Artificial Intelligence"
  },

  {
    question: "What is 12 × 8?",
    options: [
      "86",
      "96",
      "108",
      "120"
    ],
    answer: "96"
  },

  {
    question: "Which language is used for web development?",
    options: [
      "HTML",
      "CSS",
      "JavaScript",
      "All of them"
    ],
    answer: "All of them"
  },

  {
    question: "What is the purpose of an algorithm?",
    options: [
      "A step-by-step solution",
      "A computer screen",
      "A database",
      "A programming language"
    ],
    answer: "A step-by-step solution"
  }
];


export default function DiagnosticPage() {

  const [current, setCurrent] = useState(0);

  const [score, setScore] = useState(0);

  const [finished, setFinished] = useState(false);

  const [selected, setSelected] = useState<string | null>(null);


  function answer(option:string){

    setSelected(option);


    if(option === questions[current].answer){
      setScore(score + 1);
    }


    setTimeout(()=>{

      if(current + 1 < questions.length){

        setCurrent(current + 1);
        setSelected(null);

      }else{

        setFinished(true);

      }

    },700);

  }



  function getLevel(){

    const percentage =
      (score / questions.length) * 100;


    if(percentage >= 80)
      return "Advanced 🚀";


    if(percentage >= 50)
      return "Intermediate ⚡";


    return "Beginner 🌱";
  }



  if(finished){

    return (

      <main className="
        min-h-screen
        bg-gradient-to-b
        from-black
        via-[#111827]
        to-black
        flex
        items-center
        justify-center
        p-6
        text-white
      ">


        <motion.div

          initial={{
            opacity:0,
            scale:.8
          }}

          animate={{
            opacity:1,
            scale:1
          }}

          className="
            max-w-xl
            rounded-3xl
            border
            border-white/10
            bg-white/5
            p-10
            text-center
            backdrop-blur-xl
          "

        >

          <Sparkles
            className="
              mx-auto
              h-14
              w-14
              text-violet-400
            "
          />


          <h1 className="
            mt-6
            text-4xl
            font-black
          ">
            Diagnostic Complete
          </h1>


          <p className="
            mt-4
            text-gray-400
          ">
            Mentora AI analyzed your answers.
          </p>


          <div className="
            mt-8
            rounded-2xl
            bg-black/40
            p-6
          ">

            <p className="text-gray-400">
              Your AI Learning Level
            </p>


            <h2 className="
              mt-3
              text-4xl
              font-black
              text-violet-400
            ">
              {getLevel()}
            </h2>


            <p className="
              mt-3
              text-gray-300
            ">
              Score: {score}/{questions.length}
            </p>


          </div>


          <button
            className="
              mt-8
              flex
              w-full
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-violet-600
              py-4
              font-bold
              hover:bg-violet-500
            "
          >

            Build My Learning Path

            <ArrowRight/>

          </button>


        </motion.div>


      </main>

    );
  }



  const progress =
    ((current) / questions.length) * 100;



  return (

    <main className="
      min-h-screen
      bg-gradient-to-b
      from-black
      via-[#111827]
      to-black
      p-6
      text-white
    ">


      <div className="
        mx-auto
        max-w-3xl
      ">


        <div className="
          flex
          items-center
          gap-3
        ">

          <BrainCircuit
            className="
              text-violet-400
            "
          />

          <h1 className="
            text-4xl
            font-black
          ">
            AI Diagnostic
          </h1>

        </div>



        <p className="
          mt-3
          text-gray-400
        ">
          Let Mentora AI understand how you learn.
        </p>



        <div className="
          mt-8
          h-3
          rounded-full
          bg-white/10
        ">

          <div
            style={{
              width:`${progress}%`
            }}

            className="
              h-full
              rounded-full
              bg-violet-600
            "
          />

        </div>



        <motion.div

          key={current}

          initial={{
            opacity:0,
            x:50
          }}

          animate={{
            opacity:1,
            x:0
          }}

          className="
            mt-10
            rounded-3xl
            border
            border-white/10
            bg-white/5
            p-8
            backdrop-blur-xl
          "

        >

          <h2 className="
            text-2xl
            font-bold
          ">

            {questions[current].question}

          </h2>


          <div className="
            mt-8
            space-y-4
          ">

            {
              questions[current].options.map((option)=>(

                <button

                  key={option}

                  onClick={()=>answer(option)}

                  className={`
                    flex
                    w-full
                    items-center
                    justify-between
                    rounded-xl
                    border
                    p-4
                    text-left
                    transition
                    ${
                      selected === option
                      ? "border-violet-500 bg-violet-500/20"
                      : "border-white/10 hover:bg-white/5"
                    }
                  `}

                >

                  {option}


                  {
                    selected === option &&
                    <CheckCircle
                      className="
                        text-violet-400
                      "
                    />
                  }


                </button>

              ))
            }

          </div>


        </motion.div>


      </div>


    </main>

  );
}
