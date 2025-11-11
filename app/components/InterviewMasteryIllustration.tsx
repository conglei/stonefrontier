'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { 
  CheckCircle2,
  Building2,
  MessageSquare,
  Sparkles,
  Lightbulb,
  Target
} from 'lucide-react';

interface InterviewMasteryIllustrationProps {
  className?: string;
}

export function InterviewMasteryIllustration({ className = '' }: InterviewMasteryIllustrationProps) {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % 3);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const tabs = [
    {
      id: 0,
      label: 'Company',
      icon: Building2
    },
    {
      id: 1,
      label: 'Questions',
      icon: MessageSquare
    },
    {
      id: 2,
      label: 'Prep Tips',
      icon: Target
    }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 0: // Company Insights
        return (
          <motion.div
            key="company"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            <div className="mb-4">
              <div className="h-7 bg-slate-300 dark:bg-slate-600 rounded w-3/4 mb-3"></div>
              <div className="h-4 bg-slate-200 dark:bg-slate-600 rounded w-1/2"></div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-slate-400"></div>
                <div className="h-3 bg-slate-200 dark:bg-slate-600 rounded flex-1"></div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-slate-400"></div>
                <div className="h-3 bg-slate-200 dark:bg-slate-600 rounded w-4/5"></div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {['Excellence', 'Ownership', 'Impact'].map((value, idx) => (
                <motion.div
                  key={value}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-xs text-slate-700 dark:text-slate-300"
                >
                  {value}
                </motion.div>
              ))}
            </div>
          </motion.div>
        );

      case 1: // Practice Questions
        return (
          <motion.div
            key="questions"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="space-y-3"
          >
            <motion.div
              className="bg-white dark:bg-slate-700/60 rounded-lg p-4 border border-slate-200 dark:border-slate-600 shadow-sm"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="h-5 bg-slate-200 dark:bg-slate-600 rounded w-20"></div>
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Sparkles className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                </motion.div>
              </div>
              
              <div className="space-y-2 mb-3">
                <div className="h-4 bg-slate-300 dark:bg-slate-600 rounded w-full"></div>
                <div className="h-4 bg-slate-300 dark:bg-slate-600 rounded w-5/6"></div>
                <div className="h-4 bg-slate-300 dark:bg-slate-600 rounded w-4/6"></div>
              </div>

              <div className="bg-slate-50 dark:bg-slate-800/50 rounded px-3 py-2">
                <div className="flex items-center gap-2 mb-2">
                  <Lightbulb className="w-4 h-4 text-slate-500 dark:text-slate-400 flex-shrink-0" />
                  <div className="h-3 bg-slate-300 dark:bg-slate-600 rounded w-24"></div>
                </div>
                <div className="space-y-1.5 ml-6">
                  <div className="h-2.5 bg-slate-300 dark:bg-slate-600 rounded w-full"></div>
                  <div className="h-2.5 bg-slate-300 dark:bg-slate-600 rounded w-3/4"></div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        );

      case 2: // Prep Tips
        return (
          <motion.div
            key="prep"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="space-y-3"
          >
            {[1, 2, 3, 4].map((index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: index * 0.1 }}
                >
                  <CheckCircle2 className="w-5 h-5 text-slate-600 dark:text-slate-400 flex-shrink-0" />
                </motion.div>
                <div className="h-4 bg-slate-300 dark:bg-slate-600 rounded" style={{ width: `${70 + index * 5}%` }}></div>
              </motion.div>
            ))}
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div 
      className={`w-full rounded-2xl flex items-center justify-center relative overflow-visible ${className}`}
      style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
    >
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center w-full">
          <div className="relative w-full">
            <div className="bg-slate-100 dark:bg-slate-800/80 rounded-2xl p-4 shadow-lg">
              {/* Tabs */}
              <div className="flex items-center gap-2 mb-4 border-b border-slate-200 dark:border-slate-700 pb-2">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <motion.button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all relative ${
                        isActive
                          ? 'text-slate-900 dark:text-white'
                          : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-300'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span>{tab.label}</span>
                      {isActive && (
                        <motion.div
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-slate-900 dark:bg-slate-200 rounded-full"
                          layoutId="activeTab"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </motion.button>
                  );
                })}
              </div>

              {/* Tab Content */}
              <div className="bg-white dark:bg-slate-700/60 rounded-xl p-6 min-h-[280px]">
                <AnimatePresence mode="wait">
                  {renderTabContent()}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
