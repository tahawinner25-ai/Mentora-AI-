"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  BrainCircuit,
  Send,
  Sparkles,
  User,
} from "lucide-react";


type Message = {
  role: "user" | "assistant";
  content: string;
};


export default function ChatPage() {

  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hello 👋 I am Mentora AI. I am your personal AI tutor. What would you like to learn today?"
    }
  ]);


  const [input, setInput] = useState("");

  const [loading, setLoading] = useState(false);



  async function sendMessage() {

    if (!input.trim() || loading)
      return;


    const userMessage: Message = {
      role: "user",
      content: input
    };


    setMessages((prev)=>[
      ...prev,
      userMessage
    ]);


    setInput("");

    setLoading(true);



    try {

      const response = await fetch(
        "/api/chat",
        {
          method:"POST",

          headers:{
            "Content-Type":"application/json"
          },

          body:JSON.stringify({
            message: input,
            level:"Intermediate"
          })
        }
      );


      const data = await response.json();



      setMessages((prev)=>[
        ...prev,
        {
          role:"assistant",
          content:data.message
        }
      ]);


    } catch(error){

      setMessages((prev)=>[
        ...prev,
        {
          role:"assistant",
          content:
          "Something went wrong. Please try again."
        }
      ]);

    }


    setLoading(false);

  }




  return (

    <main className="
      min-h-screen
      bg-gradient-to-b
      from-black
      via-[#111827]
      to-black
      text-white
      p-6
    ">


      <div className="
        mx-auto
        flex
        max-w-5xl
        flex-col
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        overflow-hidden
        h-[85vh]
      ">


        {/* Header */}

        <div className="
          flex
          items-center
          gap-3
          border-b
          border-white/10
          p-6
        ">

          <div className="
            rounded-xl
            bg-violet-600
            p-3
          ">

            <BrainCircuit/>

          </div>


          <div>

            <h1 className="
              text-2xl
              font-black
            ">
              Mentora AI Tutor
            </h1>

            <p className="
              text-sm
              text-gray-400
            ">
              Powered by GPT-5.6
            </p>

          </div>


        </div>




        {/* Messages */}

        <div className="
          flex-1
          space-y-5
          overflow-y-auto
          p-6
        ">


          {
            messages.map((message,index)=>(


              <motion.div

                key={index}

                initial={{
                  opacity:0,
                  y:15
                }}

                animate={{
                  opacity:1,
                  y:0
                }}

                className={`
                  flex
                  gap-3
                  ${
                    message.role==="user"
                    ? "justify-end"
                    :"justify-start"
                  }
                `}

              >


                {
                  message.role==="assistant" &&
                  <div className="
                    rounded-full
                    bg-violet-600
                    p-2
                    h-fit
                  ">

                    <Sparkles size={18}/>

                  </div>
                }



                <div className={`
                  max-w-[75%]
                  rounded-2xl
                  px-5
                  py-4
                  ${
                    message.role==="user"
                    ?
                    "bg-violet-600"
                    :
                    "bg-white/10"
                  }
                `}>

                  {message.content}

                </div>



                {
                  message.role==="user" &&
                  <div className="
                    rounded-full
                    bg-white/10
                    p-2
                    h-fit
                  ">

                    <User size={18}/>

                  </div>
                }



              </motion.div>


            ))
          }



          {
            loading &&

            <div className="
              flex
              gap-3
              items-center
              text-gray-400
            ">

              <Sparkles size={18}/>

              Mentora AI is thinking...

            </div>

          }



        </div>




        {/* Input */}

        <div className="
          border-t
          border-white/10
          p-5
        ">


          <div className="
            flex
            gap-3
          ">


            <input

              value={input}

              onChange={(e)=>
                setInput(e.target.value)
              }

              onKeyDown={(e)=>{
                if(e.key==="Enter")
                  sendMessage();
              }}

              placeholder="
              Ask Mentora AI anything...
              "

              className="
                flex-1
                rounded-xl
                border
                border-white/10
                bg-black/40
                px-5
                py-4
                outline-none
                focus:border-violet-500
              "

            />



            <button

              onClick={sendMessage}

              className="
                rounded-xl
                bg-violet-600
                px-6
                transition
                hover:bg-violet-500
              "

            >

              <Send/>

            </button>


          </div>


        </div>


      </div>


    </main>

  );
}
