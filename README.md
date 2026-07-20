# 🧠 Mentora AI 

## 🚀 The AI Tutor That Learns How YOU Learn

**Mentora AI** is an adaptive education platform powered by artificial intelligence.

Unlike traditional learning platforms, Mentora AI does not provide the same content to everyone. It understands each student, analyzes their level, detects weaknesses, and creates a personalized learning journey.

The goal:

> Give every student their own AI mentor.

---

# ✨ Features

## 🧠 Adaptive AI Tutor

Mentora AI creates a unique learning profile for every student.

It adapts:

- explanations
- difficulty
- exercises
- learning speed
- revision sessions

based on the student's progress.

---

## 📊 AI Diagnostic Assessment

Before learning, students complete an AI-powered evaluation.

The system analyzes:

- knowledge level
- strengths
- weaknesses
- learning style

and creates a personalized roadmap.

---

## 📚 AI Generated Lessons

Lessons are dynamically generated using advanced AI.

The same concept can be explained differently:

Beginner:
> Simple explanations and examples.

Intermediate:
> Practice exercises and applications.

Advanced:
> Deep technical explanations.

---

## 💬 AI Tutor Chat

Students can ask questions anytime.

Mentora AI:

- explains concepts
- guides problem solving
- adapts answers
- remembers learning preferences

---

## 📝 Adaptive Exams & Quizzes

The platform generates personalized assessments.

The difficulty changes automatically depending on:

- previous answers
- mistakes
- improvement speed

---

## 🎮 Educational Mini Games

Learning becomes engaging through:

- challenges
- rewards
- achievements
- interactive exercises

---

## 📈 Progress Tracking

Students can monitor:

- XP
- learning streaks
- completed lessons
- weak areas
- improvement

---

# 🏗️ Tech Stack

## Frontend

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide Icons

## Backend

- Next.js API Routes / Server Actions
- Firebase Authentication (Durable Sign-In, Email & Guest Session support)
- Cloud Firestore (Durable persistent lesson tracking & historical Socratic dialogues)

## Artificial Intelligence & Audio Engineering

- **GPT-5.6 Integration**: Guides Socratic dialogue, customized concept mappings, diagnostic profiling, and dynamically alters conversational tone.
- **Codex Synthesis**: Utilized Codex to engineer complex browser-native Web Audio APIs, including:
  - **Interactive Sound FX Engine**: Audio signals triggering haptic-like cues on success/failure to boost dopamine and reinforce positive learning loops.
  - **Socratic Text-to-Speech (TTS) Reader**: Synthesizes custom explanations into highly natural voice guidebooks, allowing vocal lesson study.
  - **Speech-to-Text (STT) Voice Dictation**: Integrated Web Speech recognition models (multilingual and local locale auto-detection) so users can answer questions naturally using their voice.

---

# 🎙️ Advanced Audio & Settings Architecture (Implementation Details)

To elevate user immersion, **Codex** and **GPT-5.6** were employed to orchestrate a high-fidelity, hands-free auditory learning playground:

### 1. Hands-Free Speech-to-Text (STT) Dictation
Using Codex code-generation patterns, we implemented an instant-on microphone capture interface in the **Socratic Dialogue Center**. 
* **Seamless Speech Pipeline**: Students click the vocal mic button to trigger native browser dictation (`webkitSpeechRecognition` / `SpeechRecognition`), translating their vocal thoughts into typed responses inside the chat bar.
* **Locale Auto-Tuning**: Configured with standard French (`fr-FR`) and generic fallbacks to capture pronunciation subtleties and deliver Socratic context directly to GPT-5.6.

### 2. Socratic Text-to-Speech (TTS) Narrator
Every Socratic lesson, explanation card, and dialogue response is fully voice-enabled. 
* **Granular Controls**: Students can activate auto-narrations, manually trigger voice guidance for specific segments, or halt playbacks mid-sentence.
* **Intelligent Pitch Adjustment**: Audio settings synthesize high-clarity pronunciation to make complex educational subjects highly digestible.

### 3. Haptic Auditory Feedback Loops
To drive behavioral gamification, custom synthesized tone oscillators (Web Audio API) provide instant feedback for user actions.
* **Success Cue**: A cheerful, harmonic ascending frequency sequence fires when scoring high in diagnostic test quizzes.
* **Correction Cue**: A minor, comforting low-frequency tone alerts users to retry questions without feeling penalized.

### 4. Conversational History & Session Persistence
Dialogue histories are tracked with full database backups. Users can instantly switch between past dialogues, start fresh sessions, or resume previous learning streams where they left off—all synchronized in real-time with Firebase.

---

# 📂 Project Structure
