'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { CheckCircle, Clock, Calendar, Mail, Bell, Filter, FileText, CheckSquare, Layers } from 'lucide-react';

interface ProgressTrackingIllustrationProps {
  className?: string;
}

export function ProgressTrackingIllustration({ className = '' }: ProgressTrackingIllustrationProps) {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % 6);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const getStatusInfo = (status: string) => {
    switch (status) {
      case 'applied':
        return { color: 'bg-slate-300 dark:bg-slate-600', text: 'Applied', icon: Mail };
      case 'review':
        return { color: 'bg-blue-300 dark:bg-blue-600', text: 'Under Review', icon: Clock };
      case 'interview':
        return { color: 'bg-amber-300 dark:bg-amber-600', text: 'Interview', icon: Calendar };
      case 'offer':
        return { color: 'bg-green-300 dark:bg-green-600', text: 'Offer', icon: CheckCircle };
      default:
        return { color: 'bg-slate-300 dark:bg-slate-600', text: 'Applied', icon: Mail };
    }
  };

  const applications = [
    { 
      id: 1, 
      company: 'Tech Corp',
      position: 'Senior Engineer',
      status: currentStep >= 1 ? (currentStep >= 3 ? 'interview' : 'review') : 'applied',
      hasReminder: currentStep >= 4,
      hasNotes: true,
    },
    { 
      id: 2, 
      company: 'Design Studio',
      position: 'Full Stack Developer',
      status: currentStep >= 2 ? (currentStep >= 4 ? 'offer' : 'interview') : 'applied',
      hasReminder: true,
      hasNotes: false,
    },
    { 
      id: 3, 
      company: 'Startup Co',
      position: 'Software Engineer',
      status: currentStep >= 5 ? 'review' : 'applied',
      hasReminder: false,
      hasNotes: true,
    },
  ];

  const applicationsWithReminders = applications.filter(app => app.hasReminder).length;

  return (
    <div 
      className={`w-full rounded-2xl flex items-center justify-center relative overflow-visible ${className}`}
      style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
    >
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center w-full">
          {/* Dashboard */}
          <div className="relative w-full max-w-4xl">
            <div className="bg-slate-100 dark:bg-slate-800/80 rounded-2xl p-4 shadow-lg">
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-700">
                  <div className="flex items-center space-x-2">
                    <Layers className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Application Dashboard</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    {applicationsWithReminders > 0 && (
                      <motion.div
                        className="relative"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Bell className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                        <motion.div
                          className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full"
                          animate={{ scale: [1, 1.2, 1], opacity: [1, 0.8, 1] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        />
                      </motion.div>
                    )}
                    <Filter className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-3">
                  <motion.div
                    className="bg-white dark:bg-slate-700/60 rounded-lg p-3"
                    whileHover={{ scale: 1.02, y: -1 }}
                  >
                    <div className="flex items-center space-x-2 mb-2">
                      <CheckSquare className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                      <span className="text-xs font-medium text-slate-600 dark:text-slate-400">Total</span>
                    </div>
                    <div className="text-lg font-semibold text-slate-900 dark:text-white">{applications.length}</div>
                  </motion.div>
                  <motion.div
                    className="bg-white dark:bg-slate-700/60 rounded-lg p-3"
                    whileHover={{ scale: 1.02, y: -1 }}
                  >
                    <div className="flex items-center space-x-2 mb-2">
                      <Bell className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                      <span className="text-xs font-medium text-slate-600 dark:text-slate-400">Reminders</span>
                    </div>
                    <div className="text-lg font-semibold text-slate-900 dark:text-white">{applicationsWithReminders}</div>
                  </motion.div>
                  <motion.div
                    className="bg-white dark:bg-slate-700/60 rounded-lg p-3"
                    whileHover={{ scale: 1.02, y: -1 }}
                  >
                    <div className="flex items-center space-x-2 mb-2">
                      <FileText className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                      <span className="text-xs font-medium text-slate-600 dark:text-slate-400">With Notes</span>
                    </div>
                    <div className="text-lg font-semibold text-slate-900 dark:text-white">{applications.filter(a => a.hasNotes).length}</div>
                  </motion.div>
                </div>

                {/* Application Cards */}
                <div className="space-y-2">
                  {applications.map((app, index) => {
                    const statusInfo = getStatusInfo(app.status);
                    const StatusIcon = statusInfo.icon;
                    
                    return (
                      <motion.div
                        key={app.id}
                        className="bg-white dark:bg-slate-700/60 rounded-lg p-3 relative overflow-hidden"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        whileHover={{ scale: 1.01 }}
                      >
                        {/* Status indicator bar */}
                        <div className="absolute left-0 top-0 bottom-0 w-1">
                          <motion.div
                            className={`w-full ${statusInfo.color}`}
                            initial={{ height: 0 }}
                            animate={{ height: '100%' }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                          />
                        </div>

                        <div className="ml-4 space-y-2">
                          {/* Job info */}
                          <div className="space-y-1">
                            <div className="text-sm font-medium text-slate-900 dark:text-white">{app.position}</div>
                            <div className="text-xs text-slate-500 dark:text-slate-400">{app.company}</div>
                          </div>

                          {/* Status and actions */}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <div className={`px-2 py-0.5 rounded text-xs flex items-center space-x-1 ${statusInfo.color}`}>
                                <StatusIcon className="w-3 h-3" />
                                <span>{statusInfo.text}</span>
                              </div>
                              
                              {app.hasReminder && (
                                <motion.div
                                  className="flex items-center space-x-1 text-xs text-slate-600 dark:text-slate-400"
                                  animate={{ opacity: [0.7, 1, 0.7] }}
                                  transition={{ duration: 1.5, repeat: Infinity }}
                                >
                                  <Bell className="w-3 h-3" />
                                </motion.div>
                              )}
                              
                              {app.hasNotes && (
                                <div className="flex items-center space-x-1 text-xs text-slate-600 dark:text-slate-400">
                                  <FileText className="w-3 h-3" />
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
