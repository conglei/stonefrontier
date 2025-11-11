'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Bell, Calendar, CheckCircle, Mail, TrendingUp, CheckCircle2, AlertCircle } from 'lucide-react';

interface SmartJobDiscoveryIllustrationProps {
  className?: string;
}

export function SmartJobDiscoveryIllustration({ className = '' }: SmartJobDiscoveryIllustrationProps) {
  const [showSetup, setShowSetup] = useState(true);
  const [setupComplete, setSetupComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSetup(false);
      setSetupComplete(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className={`w-full flex items-center justify-center ${className}`}
      style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
    >
      <div className="w-full max-w-4xl">
        <div className="bg-slate-100 dark:bg-slate-800/80 rounded-lg p-5 shadow-lg">
          <div className="space-y-5">
            {/* Alert Setup Section */}
            {showSetup && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-white dark:bg-slate-700/60 rounded-lg p-3 border-2 border-slate-200 dark:border-slate-600"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Bell className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                  <h3 className="font-semibold text-sm text-slate-900 dark:text-white">
                    Set up Job Alert
                  </h3>
                </div>
                
                <div className="space-y-2">
                  <div>
                    <div className="h-2 bg-slate-200 dark:bg-slate-600 rounded w-full mb-1"></div>
                    <div className="h-2 bg-slate-200 dark:bg-slate-600 rounded w-3/4"></div>
                  </div>
                  
                  <div>
                    <div className="h-2 bg-slate-200 dark:bg-slate-600 rounded w-full mb-1"></div>
                    <div className="h-2 bg-slate-200 dark:bg-slate-600 rounded w-2/3"></div>
                  </div>

                  <div className="flex items-center gap-2 pt-1">
                    <CheckCircle className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
                    <span className="text-xs text-slate-600 dark:text-slate-400">
                      Daily email notifications enabled
                    </span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Daily Recommendations Header */}
            {setupComplete && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center justify-between bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4 border border-slate-200 dark:border-slate-600"
              >
                <div className="flex items-center gap-2">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Mail className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-xs text-slate-900 dark:text-white">
                      Daily Job Recommendations
                    </h3>
                    <p className="text-[10px] text-slate-600 dark:text-slate-400">
                      New matches delivered every day
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-700 px-2 py-0.5 rounded-full">
                  <Calendar className="w-3 h-3" />
                  <span>Today</span>
                </div>
              </motion.div>
            )}

            {/* Job Recommendations with Match Scores */}
            {setupComplete && (
              <div className="space-y-4">
                {/* Job Card 1 - High Match */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="rounded-lg p-4 bg-white dark:bg-slate-700/60 border border-slate-200 dark:border-slate-600"
                >
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 space-y-1.5">
                        <div className="h-2.5 bg-slate-300 dark:bg-slate-600 rounded w-2/3"></div>
                        <div className="h-2 bg-slate-200 dark:bg-slate-600 rounded w-1/2"></div>
                        <div className="h-2 bg-slate-200 dark:bg-slate-600 rounded w-1/3"></div>
                      </div>
                      {/* Match Score */}
                      <div className="flex flex-col items-end gap-0.5">
                        <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800">
                          <TrendingUp className="w-3 h-3 text-slate-600 dark:text-slate-400" />
                          <span className="text-[11px] font-semibold text-slate-700 dark:text-slate-300">95%</span>
                        </div>
                        <span className="text-[9px] text-slate-500 dark:text-slate-400">Match</span>
                      </div>
                    </div>

                    {/* Strengths and Weaknesses - Two Columns */}
                    <div className="pt-3 border-t border-slate-200 dark:border-slate-600">
                      <div className="grid grid-cols-2 gap-3">
                        {/* Strengths Column */}
                        <div className="space-y-1.5">
                          <div className="flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3 text-slate-500 dark:text-slate-400" />
                            <span className="text-[10px] font-medium text-slate-700 dark:text-slate-300">Strengths</span>
                          </div>
                          <div className="space-y-1 ml-4">
                            <div className="flex items-center gap-1.5">
                              <div className="w-1 h-1 rounded-full bg-slate-400"></div>
                              <div className="h-1 bg-slate-200 dark:bg-slate-700 rounded flex-1"></div>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <div className="w-1 h-1 rounded-full bg-slate-400"></div>
                              <div className="h-1 bg-slate-200 dark:bg-slate-700 rounded w-4/5"></div>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <div className="w-1 h-1 rounded-full bg-slate-400"></div>
                              <div className="h-1 bg-slate-200 dark:bg-slate-700 rounded w-3/5"></div>
                            </div>
                          </div>
                        </div>

                        {/* Areas to Improve Column */}
                        <div className="space-y-1.5">
                          <div className="flex items-center gap-1">
                            <AlertCircle className="w-3 h-3 text-slate-500 dark:text-slate-400" />
                            <span className="text-[10px] font-medium text-slate-700 dark:text-slate-300">Areas to Improve</span>
                          </div>
                          <div className="space-y-1 ml-4">
                            <div className="flex items-center gap-1.5">
                              <div className="w-1 h-1 rounded-full bg-slate-400"></div>
                              <div className="h-1 bg-slate-200 dark:bg-slate-700 rounded w-1/3"></div>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <div className="w-1 h-1 rounded-full bg-slate-400"></div>
                              <div className="h-1 bg-slate-200 dark:bg-slate-700 rounded w-1/4"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Job Card 2 - Medium Match */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="rounded-lg p-4 bg-white dark:bg-slate-700/60 border border-slate-200 dark:border-slate-600"
                >
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 space-y-1.5">
                        <div className="h-2.5 bg-slate-300 dark:bg-slate-600 rounded w-2/3"></div>
                        <div className="h-2 bg-slate-200 dark:bg-slate-600 rounded w-1/2"></div>
                        <div className="h-2 bg-slate-200 dark:bg-slate-600 rounded w-1/3"></div>
                      </div>
                      {/* Match Score */}
                      <div className="flex flex-col items-end gap-0.5">
                        <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800">
                          <TrendingUp className="w-3 h-3 text-slate-600 dark:text-slate-400" />
                          <span className="text-[11px] font-semibold text-slate-700 dark:text-slate-300">88%</span>
                        </div>
                        <span className="text-[9px] text-slate-500 dark:text-slate-400">Match</span>
                      </div>
                    </div>

                    {/* Strengths and Weaknesses - Two Columns */}
                    <div className="pt-3 border-t border-slate-200 dark:border-slate-600">
                      <div className="grid grid-cols-2 gap-3">
                        {/* Strengths Column */}
                        <div className="space-y-1.5">
                          <div className="flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3 text-slate-500 dark:text-slate-400" />
                            <span className="text-[10px] font-medium text-slate-700 dark:text-slate-300">Strengths</span>
                          </div>
                          <div className="space-y-1 ml-4">
                            <div className="flex items-center gap-1.5">
                              <div className="w-1 h-1 rounded-full bg-slate-400"></div>
                              <div className="h-1 bg-slate-200 dark:bg-slate-700 rounded w-4/5"></div>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <div className="w-1 h-1 rounded-full bg-slate-400"></div>
                              <div className="h-1 bg-slate-200 dark:bg-slate-700 rounded w-3/5"></div>
                            </div>
                          </div>
                        </div>

                        {/* Areas to Improve Column */}
                        <div className="space-y-1.5">
                          <div className="flex items-center gap-1">
                            <AlertCircle className="w-3 h-3 text-slate-500 dark:text-slate-400" />
                            <span className="text-[10px] font-medium text-slate-700 dark:text-slate-300">Areas to Improve</span>
                          </div>
                          <div className="space-y-1 ml-4">
                            <div className="flex items-center gap-1.5">
                              <div className="w-1 h-1 rounded-full bg-slate-400"></div>
                              <div className="h-1 bg-slate-200 dark:bg-slate-700 rounded w-2/5"></div>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <div className="w-1 h-1 rounded-full bg-slate-400"></div>
                              <div className="h-1 bg-slate-200 dark:bg-slate-700 rounded w-1/3"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}

            {/* Footer */}
            {setupComplete && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="pt-4 border-t border-slate-200 dark:border-slate-600"
              >
                <div className="flex items-center justify-between">
                  <div className="h-2 bg-slate-200 dark:bg-slate-600 rounded w-1/3"></div>
                  <div className="flex items-center gap-1">
                    <Bell className="w-3 h-3 text-slate-500 dark:text-slate-400" />
                    <div className="h-2 bg-slate-200 dark:bg-slate-600 rounded w-16"></div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
