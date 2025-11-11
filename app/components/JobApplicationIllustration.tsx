'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Zap, CheckCircle2 } from 'lucide-react';

interface JobApplicationIllustrationProps {
  className?: string;
}

export function JobApplicationIllustration({ className = '' }: JobApplicationIllustrationProps) {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % 5);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const formFields = [
    { 
      id: 'cover-letter', 
      label: 'Cover Letter', 
      filled: currentStep >= 1,
      isTextarea: true
    },
    { 
      id: 'why-role', 
      label: 'Why this role?', 
      filled: currentStep >= 2,
      isTextarea: true
    },
    { 
      id: 'relevant-experience', 
      label: 'Relevant experience', 
      filled: currentStep >= 3,
      isTextarea: true
    },
    { 
      id: 'unique-value', 
      label: 'Why you?', 
      filled: currentStep >= 4,
      isTextarea: true
    },
  ];

  const filledCount = formFields.filter(f => f.filled).length;
  const progress = (filledCount / formFields.length) * 100;

  return (
    <div 
      className={`w-full flex items-center justify-center ${className}`}
      style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
    >
      <div className="w-full max-w-4xl">
        <div className="bg-slate-100 dark:bg-slate-800/80 rounded-lg shadow-lg overflow-hidden">
          {/* Browser Header */}
          <div className="bg-slate-200 dark:bg-slate-700 px-4 py-2.5 flex items-center space-x-2">
            <div className="flex space-x-1.5">
              <div className="w-2.5 h-2.5 bg-red-400 rounded-full"></div>
              <div className="w-2.5 h-2.5 bg-yellow-400 rounded-full"></div>
              <div className="w-2.5 h-2.5 bg-green-400 rounded-full"></div>
            </div>
            <div className="flex-1 bg-white dark:bg-slate-600 rounded px-3 py-1.5 mx-3">
              <div className="text-xs text-slate-600 dark:text-slate-300">
                https://company.com/careers/apply
              </div>
            </div>
          </div>

          {/* Browser Content */}
          <div className="flex">
            {/* Main Form */}
            <div className="flex-1 p-5 space-y-4">
              <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-2/5 mb-5"></div>
              
              <div className="space-y-3">
                {formFields.map((field, index) => (
                  <motion.div 
                    key={field.id}
                    className="space-y-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <label className="block text-[10px] text-slate-500 dark:text-slate-400">
                      {field.label}
                    </label>
                    <div 
                      className={`w-full px-3 py-1.5 text-xs rounded border transition-all duration-500 ${
                        field.filled 
                          ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-300 dark:border-blue-700' 
                          : 'bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600'
                      }`}
                    >
                      {field.filled ? (
                        <div className="space-y-1">
                          <div className="h-1.5 bg-blue-200 dark:bg-blue-800 rounded w-full"></div>
                          <div className="h-1.5 bg-blue-200 dark:bg-blue-800 rounded w-10/12"></div>
                        </div>
                      ) : (
                        <div className="space-y-1 opacity-40">
                          <div className="h-1.5 bg-slate-300 dark:bg-slate-600 rounded w-full"></div>
                          <div className="h-1.5 bg-slate-300 dark:bg-slate-600 rounded w-3/4"></div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Submit Button */}
              <motion.button
                className={`mt-5 py-2 px-4 text-xs rounded font-medium transition-all duration-500 ${
                  filledCount === formFields.length
                    ? 'bg-blue-500 text-white shadow-md' 
                    : 'bg-slate-200 dark:bg-slate-600 text-slate-500 dark:text-slate-400'
                }`}
                animate={{
                  scale: filledCount === formFields.length ? [1, 1.02, 1] : 1
                }}
                transition={{ duration: 0.5, repeat: filledCount === formFields.length ? Infinity : 0, repeatDelay: 1 }}
              >
                Submit Application
              </motion.button>
            </div>

            {/* Suminos Extension Sidebar */}
            <div className="w-56 bg-white dark:bg-slate-800 border-l border-slate-300 dark:border-slate-600">
              {/* Extension Header */}
              <div className="bg-slate-50 dark:bg-slate-900/50 px-4 py-3 border-b border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-2">
                  <div>
                    <div className="text-xs font-semibold text-slate-900 dark:text-white">Suminos</div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400">Generating from resume</div>
                  </div>
                </div>
              </div>

              {/* Extension Content */}
              <div className="p-4 space-y-4">
                {/* Progress */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-slate-700 dark:text-slate-300">Progress</span>
                    <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">{filledCount}/{formFields.length}</span>
                  </div>
                  <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-blue-500 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </div>

                {/* Field Status */}
                <div className="space-y-3">
                  {formFields.map((field) => (
                    <motion.div 
                      key={field.id}
                      className="flex items-center gap-2 text-xs"
                      animate={{
                        opacity: field.filled ? 1 : 0.6
                      }}
                    >
                      {field.filled ? (
                        <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0" />
                      ) : (
                        <motion.div
                          className="w-4 h-4 rounded-full border-2 border-blue-300 dark:border-blue-600 flex-shrink-0"
                          animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.5, 1, 0.5]
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                      )}
                      <span className={`${field.filled ? 'text-slate-900 dark:text-white font-medium' : 'text-slate-600 dark:text-slate-400'}`}>
                        {field.label}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Status Message */}
                <motion.div
                  className="pt-4 border-t border-slate-200 dark:border-slate-700"
                  animate={{
                    opacity: filledCount > 0 ? 1 : 0.7
                  }}
                >
                  <div className="flex items-center gap-2">
                    <Zap className="w-3.5 h-3.5 text-blue-500" />
                    <span className="text-[10px] text-slate-700 dark:text-slate-300">
                      {filledCount === formFields.length 
                        ? 'All fields completed!' 
                        : (() => {
                            const currentField = formFields.find(f => !f.filled);
                            return currentField ? `Generating ${currentField.label.toLowerCase()}...` : 'Analyzing resume...';
                          })()}
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
