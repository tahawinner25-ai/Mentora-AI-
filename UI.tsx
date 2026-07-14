"use client";

import { motion } from "framer-motion";
import React from "react";


// =========================
// Button
// =========================

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
}


export function Button({
  children,
  variant="primary",
  className="",
  ...props
}: ButtonProps) {


  const styles = {

    primary:
    "bg-violet-600 hover:bg-violet-500 text-white",

    secondary:
    "border border-white/10 bg-white/5 hover:bg-white/10",

    ghost:
    "hover:bg-white/5 text-gray-300"

  };


  return (

    <motion.button

      whileHover={{
        scale:1.03
      }}

      whileTap={{
        scale:.97
      }}

      className={`
        rounded-xl
        px-6
        py-3
        font-semibold
        transition
        ${styles[variant]}
        ${className}
      `}

      {...props}

    >

      {children}

    </motion.button>

  );

}





// =========================
// Card
// =========================

interface CardProps {
  children: React.ReactNode;
  className?: string;
}


export function Card({
  children,
  className=""
}:CardProps){

  return (

    <motion.div

      whileHover={{
        y:-5
      }}

      className={`
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        p-6
        ${className}
      `}

    >

      {children}

    </motion.div>

  );

}





// =========================
// Badge
// =========================

export function Badge({
  children
}:{
  children:React.ReactNode
}){


  return (

    <span className="
      inline-flex
      items-center
      rounded-full
      border
      border-violet-500/30
      bg-violet-500/10
      px-4
      py-1
      text-sm
      font-medium
      text-violet-300
    ">

      {children}

    </span>

  );

}





// =========================
// Progress Bar
// =========================

export function Progress({
  value
}:{
  value:number
}){


  return (

    <div className="
      h-3
      w-full
      overflow-hidden
      rounded-full
      bg-white/10
    ">

      <motion.div

        initial={{
          width:0
        }}

        animate={{
          width:`${value}%`
        }}

        transition={{
          duration:1
        }}

        className="
          h-full
          rounded-full
          bg-violet-600
        "

      />

    </div>

  );

}





// =========================
// Avatar
// =========================

export function Avatar({
  name="AI"
}:{
  name?:string
}){


  return (

    <div className="
      flex
      h-12
      w-12
      items-center
      justify-center
      rounded-full
      bg-gradient-to-br
      from-violet-600
      to-indigo-600
      font-black
    ">

      {name.slice(0,2).toUpperCase()}

    </div>

  );

}





// =========================
// Loading
// =========================

export function Loading(){

  return (

    <div className="
      flex
      items-center
      gap-3
      text-gray-400
    ">

      <div className="
        h-5
        w-5
        animate-spin
        rounded-full
        border-2
        border-violet-400
        border-t-transparent
      "/>

      Mentora AI is thinking...

    </div>

  );

}
