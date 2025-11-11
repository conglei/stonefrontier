'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Sparkles} from 'lucide-react';

interface ResumeOptimizationIllustrationProps {
  className?: string;
}

export function ResumeOptimizationIllustration({ className = '' }: ResumeOptimizationIllustrationProps) {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % 5);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const suggestions = [
    { text: "Add quantifiable metrics and achievements to demonstrate impact", position: { top: "25%", right: "-20px" } },
    { text: "Use strong action verbs to start each bullet point", position: { top: "40%", right: "-20px" } },
    { text: "Optimize keywords to match job requirements", position: { top: "55%", right: "-20px" } },
    { text: "Highlight relevant skills and technologies", position: { top: "70%", right: "-20px" } },
  ];

  return (
    <div 
      className={`w-full rounded-2xl flex items-center justify-center relative overflow-visible pb-0 ${className}`}
      style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
    >
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center w-full">
          {/* Single Resume with AI Suggestions */}
          <div className="relative w-full max-w-4xl">

            {/* Resume Container */}
            <motion.div 
              className="bg-slate-100 dark:bg-slate-800/80 rounded-xl p-3 sm:p-4 relative overflow-visible w-full shadow-lg"
              transition={{ duration: 0.5 }}
            >
              {/* Glowing edges when processing */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/3 via-purple-500/3 to-green-500/3 rounded-xl"
                animate={{ opacity: currentStep >= 1 ? [0.2, 0.4, 0.2] : 0 }}
                transition={{ duration: 2, repeat: Infinity }}
              />

              {/* Resume Content */}
              <div className="space-y-3 relative z-10">
                {/* Header Section - Name and Contact */}
                <div className="space-y-3 border-b border-slate-200 dark:border-slate-700 pb-4">
                  <motion.div 
                    className="h-6 bg-slate-300 dark:bg-slate-600 rounded w-2/3"
                    animate={{ 
                      backgroundColor: currentStep >= 1 ? "rgb(59, 130, 246)" : "rgb(203, 213, 225)",
                      opacity: currentStep >= 1 ? 0.3 : 0.6
                    }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="flex space-x-4">
                    <motion.div 
                      className="h-3 bg-slate-300 dark:bg-slate-600 rounded w-24"
                      animate={{ 
                        backgroundColor: currentStep >= 1 ? "rgb(59, 130, 246)" : "rgb(203, 213, 225)",
                        opacity: currentStep >= 1 ? 0.3 : 0.5
                      }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    />
                    <motion.div 
                      className="h-3 bg-slate-300 dark:bg-slate-600 rounded w-32"
                      animate={{ 
                        backgroundColor: currentStep >= 1 ? "rgb(59, 130, 246)" : "rgb(203, 213, 225)",
                        opacity: currentStep >= 1 ? 0.3 : 0.5
                      }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    />
                    <motion.div 
                      className="h-3 bg-slate-300 dark:bg-slate-600 rounded w-28"
                      animate={{ 
                        backgroundColor: currentStep >= 1 ? "rgb(59, 130, 246)" : "rgb(203, 213, 225)",
                        opacity: currentStep >= 1 ? 0.3 : 0.5
                      }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    />
                  </div>
                </div>

                {/* Professional Summary */}
                <div className="space-y-2">
                  <motion.div 
                    className="h-4 bg-slate-300 dark:bg-slate-600 rounded w-1/4"
                    animate={{ 
                      backgroundColor: currentStep >= 2 ? "rgb(59, 130, 246)" : "rgb(203, 213, 225)",
                      opacity: currentStep >= 2 ? 0.3 : 0.6
                    }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  />
                  <div className="space-y-1">
                    <motion.div 
                      className="h-3 bg-slate-300 dark:bg-slate-600 rounded w-full"
                      animate={{ 
                        backgroundColor: currentStep >= 2 ? "rgb(59, 130, 246)" : "rgb(203, 213, 225)",
                        opacity: currentStep >= 2 ? 0.3 : 0.4
                      }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    />
                    <motion.div 
                      className="h-3 bg-slate-300 dark:bg-slate-600 rounded w-4/5"
                      animate={{ 
                        backgroundColor: currentStep >= 2 ? "rgb(59, 130, 246)" : "rgb(203, 213, 225)",
                        opacity: currentStep >= 2 ? 0.3 : 0.4
                      }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                    />
                    <motion.div 
                      className="h-3 bg-slate-300 dark:bg-slate-600 rounded w-3/5"
                      animate={{ 
                        backgroundColor: currentStep >= 2 ? "rgb(59, 130, 246)" : "rgb(203, 213, 225)",
                        opacity: currentStep >= 2 ? 0.3 : 0.4
                      }}
                      transition={{ duration: 0.5, delay: 0.7 }}
                    />
                  </div>
                </div>

                {/* Work Experience */}
                <div className="space-y-3">
                  <motion.div 
                    className="h-4 bg-slate-300 dark:bg-slate-600 rounded w-1/3"
                    animate={{ 
                      backgroundColor: currentStep >= 3 ? "rgb(59, 130, 246)" : "rgb(203, 213, 225)",
                      opacity: currentStep >= 3 ? 0.3 : 0.6
                    }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  />
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <motion.div 
                        className="h-4 bg-slate-300 dark:bg-slate-600 rounded w-1/2"
                        animate={{ 
                          backgroundColor: currentStep >= 3 ? "rgb(59, 130, 246)" : "rgb(203, 213, 225)",
                          opacity: currentStep >= 3 ? 0.3 : 0.4
                        }}
                        transition={{ duration: 0.5, delay: 0.9 }}
                      />
                      <motion.div 
                        className="h-3 bg-slate-300 dark:bg-slate-600 rounded w-20"
                        animate={{ 
                          backgroundColor: currentStep >= 3 ? "rgb(59, 130, 246)" : "rgb(203, 213, 225)",
                          opacity: currentStep >= 3 ? 0.3 : 0.4
                        }}
                        transition={{ duration: 0.5, delay: 1.0 }}
                      />
                    </div>
                    <motion.div 
                      className="h-3 bg-slate-300 dark:bg-slate-600 rounded w-3/4"
                      animate={{ 
                        backgroundColor: currentStep >= 3 ? "rgb(59, 130, 246)" : "rgb(203, 213, 225)",
                        opacity: currentStep >= 3 ? 0.3 : 0.4
                      }}
                      transition={{ duration: 0.5, delay: 1.1 }}
                    />
                    <motion.div 
                      className="h-3 bg-slate-300 dark:bg-slate-600 rounded w-full"
                      animate={{ 
                        backgroundColor: currentStep >= 3 ? "rgb(59, 130, 246)" : "rgb(203, 213, 225)",
                        opacity: currentStep >= 3 ? 0.3 : 0.4
                      }}
                      transition={{ duration: 0.5, delay: 1.2 }}
                    />
                    <motion.div 
                      className="h-3 bg-slate-300 dark:bg-slate-600 rounded w-5/6"
                      animate={{ 
                        backgroundColor: currentStep >= 3 ? "rgb(59, 130, 246)" : "rgb(203, 213, 225)",
                        opacity: currentStep >= 3 ? 0.3 : 0.4
                      }}
                      transition={{ duration: 0.5, delay: 1.3 }}
                    />
                  </div>
                </div>

                {/* Skills Section */}
                <div className="space-y-2">
                  <motion.div 
                    className="h-4 bg-slate-300 dark:bg-slate-600 rounded w-1/4"
                    animate={{ 
                      backgroundColor: currentStep >= 4 ? "rgb(59, 130, 246)" : "rgb(203, 213, 225)",
                      opacity: currentStep >= 4 ? 0.3 : 0.6
                    }}
                    transition={{ duration: 0.5, delay: 1.4 }}
                  />
                  <div className="flex flex-wrap gap-2">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <motion.div 
                        key={i}
                        className="h-4 bg-slate-300 dark:bg-slate-600 rounded-full"
                        style={{ width: `${50 + i * 8}px` }}
                        animate={{ 
                          backgroundColor: currentStep >= 4 ? "rgb(59, 130, 246)" : "rgb(203, 213, 225)",
                          opacity: currentStep >= 4 ? 0.3 : 0.4
                        }}
                        transition={{ duration: 0.5, delay: 1.5 + i * 0.1 }}
                      />
                    ))}
                  </div>
                </div>

              </div>

              {/* AI Suggestions - Single animated bubble */}
              {currentStep >= 1 && currentStep <= 4 && (
                <motion.div
                  className="absolute z-20 px-4 py-2 rounded-md font-light text-xs tracking-wide backdrop-blur-sm hidden sm:block max-w-xs bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 dark:from-blue-200 dark:via-indigo-200 dark:to-purple-200 shadow-lg border border-slate-200/40 dark:border-slate-300/40"
                  initial={{
                    top: suggestions[currentStep - 1].position.top,
                    right: suggestions[currentStep - 1].position.right,
                    opacity: currentStep === 1 ? 0 : 1,
                    scale: currentStep === 1 ? 0 : 1
                  }}
                  animate={{
                    top: suggestions[currentStep - 1].position.top,
                    right: suggestions[currentStep - 1].position.right,
                    opacity: 1,
                    scale: [1, 1.02, 1],
                    y: [0, -2, 0]
                  }}
                  transition={{ 
                    duration: currentStep === 1 ? 0.4 : 0.6,
                    ease: "easeInOut"
                  }}
                >
                    <motion.div 
                      className="flex items-center gap-3 w-56"
                      key={currentStep}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {/* AI Icon */}
                      <motion.div
                        animate={{ 
                          rotate: [0, 10, -10, 0],
                          scale: [1, 1.1, 1]
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <Sparkles className="w-3.5 h-3.5 shrink-0" style={{ background: 'linear-gradient(135deg, #1e40af, #7c3aed, #be185d)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }} />
                      </motion.div>
                      <span className="leading-relaxed font-medium" style={{ background: 'linear-gradient(135deg, #1e40af, #7c3aed, #be185d)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{suggestions[currentStep - 1].text}</span>
                    </motion.div>
                  {/* Arrow pointing to resume */}
                  <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-r-4 border-transparent border-r-blue-100 dark:border-r-blue-200"></div>
                </motion.div>
              )}

              {/* Mobile AI Suggestions - Single animated bubble */}
              {currentStep >= 1 && currentStep <= 4 && (
                <motion.div
                  className="absolute z-20 px-4 py-3 rounded-full text-sm font-semibold shadow-xl backdrop-blur-sm border border-slate-200/40 dark:border-slate-300/40 block sm:hidden max-w-xs bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 dark:from-blue-200 dark:via-indigo-200 dark:to-purple-200"
                  initial={{
                    top: suggestions[currentStep - 1].position.top,
                    right: suggestions[currentStep - 1].position.right,
                    opacity: currentStep === 1 ? 0 : 1,
                    scale: currentStep === 1 ? 0 : 1
                  }}
                  animate={{
                    top: suggestions[currentStep - 1].position.top,
                    right: suggestions[currentStep - 1].position.right,
                    opacity: 1,
                    scale: [1, 1.02, 1],
                    y: [0, -2, 0]
                  }}
                  transition={{ 
                    duration: currentStep === 1 ? 0.4 : 0.6,
                    ease: "easeInOut"
                  }}
                >
                  <motion.div 
                    className="flex items-center gap-3 w-48"
                    key={currentStep}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* AI Icon */}
                    <motion.div
                      animate={{ 
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <Sparkles className="w-3.5 h-3.5 shrink-0" style={{ background: 'linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }} />
                    </motion.div>
                    <span className="leading-relaxed font-medium" style={{ background: 'linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{suggestions[currentStep - 1].text}</span>
                  </motion.div>
                  {/* Arrow pointing up to resume */}
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-blue-100 dark:border-b-blue-200"></div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
