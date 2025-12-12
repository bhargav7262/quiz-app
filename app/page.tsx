'use client'

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, PawPrint, Play, Sparkles } from 'lucide-react';

// --- DATA ---
const quizQuestions = [
  {
    id: 1,
    question: "What sound does a cat make?",
    options: ["Bhau-Bhau", "Meow-Meow", "Oink-Oink"],
    correctAnswer: "Meow-Meow"
  },
  {
    id: 2,
    question: "What would you probably find in your fridge?",
    options: ["Shoes", "Ice Cream", "Books"],
    correctAnswer: "Ice Cream"
  },
  {
    id: 3,
    question: "What color are bananas?",
    options: ["Blue", "Yellow", "Red"],
    correctAnswer: "Yellow"
  },
  {
    id: 4,
    question: "How many stars are in the sky?",
    options: ["Two", "Infinite", "One Hundred"],
    correctAnswer: "Infinite"
  }
];

type GameState = 'start' | 'quiz' | 'result';

export default function QuizApp() {
  const [gameState, setGameState] = useState<GameState>('start');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [direction, setDirection] = useState(0);

  const currentQuestion = quizQuestions[currentQuestionIndex];

  // --- LOGIC ---
  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    if (!selectedOption) return;
    if (selectedOption === currentQuestion.correctAnswer) setScore(score + 1);

    setDirection(1);
    setSelectedOption(null);

    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setGameState('result');
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setDirection(-1);
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleRestart = () => {
    setGameState('start');
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedOption(null);
  };

  return (
    <main className="flex items-center justify-center min-h-screen p-4 font-sans text-gray-800">
      
      <AnimatePresence mode="wait">
        
        {/* ============================================================
            1. START SCREEN
           ============================================================ */}
        {gameState === 'start' && (
          <motion.div
            key="start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="w-full max-w-lg bg-white rounded-[40px] shadow-xl p-12 text-center relative overflow-hidden"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-500 shadow-sm rotate-6">
                <Sparkles size={36} />
              </div>
            </div>

            <h1 className="text-5xl font-serif font-bold mb-4 bg-gradient-to-r from-blue-800 to-teal-500 bg-clip-text text-transparent">
              Quiz Time!
            </h1>
            <p className="text-gray-500 mb-10 text-lg">
              "Every expert was once a beginner."
            </p>

            <button
              onClick={() => setGameState('quiz')}
              className="px-10 py-4 bg-[#1e3a8a] text-white text-lg font-semibold rounded-2xl shadow-lg hover:bg-blue-800 hover:scale-105 transition-all flex items-center gap-2 mx-auto"
            >
              Let's Begin <Play size={18} fill="currentColor" />
            </button>
          </motion.div>
        )}

        {/* ============================================================
            2. QUIZ SCREEN
           ============================================================ */}
        {gameState === 'quiz' && (
          <motion.div
            key="quiz"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-4xl bg-white rounded-[40px] shadow-2xl p-8 md:p-12 relative min-h-[600px] flex flex-col"
          >
            {/* Title with Gradient: Blue -> Teal/Green */}
            <div className="text-center mb-10">
              <h2 className="text-5xl font-serif italic font-bold mb-3 bg-gradient-to-r from-[#0f4c81] to-[#0d9488] bg-clip-text text-transparent pb-1">
                Test Your Knowledge
              </h2>
              <p className="text-gray-400 text-sm font-medium tracking-wide">
                Answer all questions to see your results
              </p>
            </div>

            {/* Segmented Progress Bar */}
            <div className="flex gap-3 mb-12 px-8 max-w-3xl mx-auto w-full">
              {quizQuestions.map((_, idx) => (
                <div 
                  key={idx}
                  className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                    idx <= currentQuestionIndex ? 'bg-[#1f3b5e]' : 'bg-gray-200'
                  }`}
                />
              ))}
            </div>

            {/* Question Box & Options */}
            <div className="flex-1 max-w-2xl mx-auto w-full">
              <AnimatePresence mode='wait' custom={direction}>
                <motion.div
                  key={currentQuestionIndex}
                  custom={direction}
                  initial={{ x: direction * 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: direction * -50, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  
                  {/* The Thick Border Question Box */}
                  <div className="bg-[#E0F2FE] border-2 border-[#60A5FA] p-6 rounded-xl text-center mb-8 shadow-sm">
                     <h3 className="text-xl font-semibold text-[#1e3a8a]">
                       {currentQuestion.id}. {currentQuestion.question}
                     </h3>
                  </div>

                  {/* Options */}
                  <div className="flex flex-col gap-4">
                    {currentQuestion.options.map((option) => {
                      const isSelected = selectedOption === option;
                      return (
                        <button
                          key={option}
                          onClick={() => handleOptionSelect(option)}
                          className={`w-full py-4 px-6 rounded-xl text-lg font-medium transition-all duration-200 border-2 ${
                            isSelected 
                              ? 'border-green-500 bg-green-50 text-green-800 shadow-md' 
                              : 'border-transparent bg-gray-50 text-gray-600 hover:bg-gray-100'
                          }`}
                        >
                          {option}
                        </button>
                      );
                    })}
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>

            {/* Footer */}
            <div className="flex justify-between items-end mt-12 px-4">
              <div className="relative group">
                 <div className="absolute bottom-full left-0 mb-3 bg-white border-2 border-yellow-400 px-4 py-1.5 rounded-lg rounded-bl-none shadow-[2px_2px_0px_rgba(250,204,21,1)] text-sm font-bold -rotate-6 transform origin-bottom-left text-gray-700 whitespace-nowrap">
                    Best of Luck!
                 </div>
                 <div className="w-16 h-16 bg-pink-100 rounded-2xl border-2 border-pink-200 flex items-center justify-center text-pink-400">
                    <PawPrint size={32} strokeWidth={2.5} />
                 </div>
              </div>

              <div className="flex gap-3">
                 <button 
                   onClick={handlePrev}
                   disabled={currentQuestionIndex === 0}
                   className="p-3.5 rounded-xl bg-blue-50 text-[#1e3a8a] disabled:opacity-30 hover:bg-blue-100 transition-colors"
                 >
                   <ChevronLeft size={24} />
                 </button>
                 
                 <button 
                   onClick={handleNext}
                   disabled={!selectedOption} 
                   className="p-3.5 rounded-xl bg-[#E0F2FE] text-[#1e3a8a] disabled:opacity-50 hover:bg-blue-200 transition-colors"
                 >
                   <ChevronRight size={24} />
                 </button>
              </div>
            </div>

          </motion.div>
        )}

        {/* ============================================================
            3. RESULT SCREEN
           ============================================================ */}
        {gameState === 'result' && (
          <motion.div
            key="result"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-full max-w-2xl bg-white rounded-[40px] shadow-2xl p-16 text-center"
          >
            <div className="inline-block px-5 py-2 mb-8 text-sm font-bold text-green-700 uppercase bg-green-100 rounded-full tracking-wider">
              Keep Learning!
            </div>
            
            <h2 className="text-4xl font-serif font-bold text-[#1e3a8a] mb-4">
              Your Final score is
            </h2>
            
            <div className="text-[100px] leading-none font-serif text-[#1e3a8a] mb-10">
              {Math.round((score / quizQuestions.length) * 100)}<span className="text-4xl">%</span>
            </div>
            
            <button 
              onClick={handleRestart}
              className="px-12 py-4 bg-[#E0F2FE] text-[#1e3a8a] font-bold text-lg rounded-xl hover:bg-blue-100 transition-colors"
            >
              Start Again
            </button>
          </motion.div>
        )}

      </AnimatePresence>
    </main>
  );
}