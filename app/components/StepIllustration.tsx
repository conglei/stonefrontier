import { ResumeOptimizationIllustration } from './ResumeOptimizationIllustration';
import { JobApplicationIllustration } from './JobApplicationIllustration';
import { ProgressTrackingIllustration } from './ProgressTrackingIllustration';
import { InterviewMasteryIllustration } from './InterviewMasteryIllustration';

interface StepIllustrationProps {
  icon: React.ReactNode;
  label: string;
  stepNumber?: number;
}

export function StepIllustration({ icon, label, stepNumber }: StepIllustrationProps) {
  // Use animated illustration for step 1 (Resume Optimization)
  if (stepNumber === 1) {
    return (
      <div className="w-full max-w-[600px] lg:min-w-[500px] flex-shrink-0 mt-8 lg:mt-0 lg:w-[600px] mx-auto lg:mx-0">
        <ResumeOptimizationIllustration />
      </div>
    );
  }

  // Use animated illustration for step 2 (Job Application Companion)
  if (stepNumber === 2) {
    return (
      <div className="w-full max-w-[600px] lg:min-w-[500px] flex-shrink-0 mt-8 lg:mt-0 lg:w-[600px] mx-auto lg:mx-0">
        <JobApplicationIllustration />
      </div>
    );
  }

  // Use animated illustration for step 3 (Track Your Progress)
  if (stepNumber === 3) {
    return (
      <div className="w-full max-w-[600px] lg:min-w-[500px] flex-shrink-0 mt-8 lg:mt-0 lg:w-[600px] mx-auto lg:mx-0">
        <ProgressTrackingIllustration />
      </div>
    );
  }

  // Use animated illustration for step 4 (Master Your Interview Game)
  if (stepNumber === 4) {
    return (
      <div className="w-full max-w-[600px] lg:min-w-[500px] flex-shrink-0 mt-8 lg:mt-0 lg:w-[600px] mx-auto lg:mx-0">
        <InterviewMasteryIllustration />
      </div>
    );
  }

  // Default illustration for other steps
  return (
    <div className="w-full max-w-[600px] flex-shrink-0 mt-8 lg:mt-0 lg:min-w-[500px] lg:w-[600px] mx-auto lg:mx-0">
      <div className="step-illustration w-full h-96 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-slate-800 dark:to-slate-700 rounded-2xl flex items-center justify-center">
        <div className="text-center space-y-3">
          <div className="w-12 h-12 mx-auto bg-gradient-to-r from-blue-900 to-blue-700 rounded-xl flex items-center justify-center">
            {icon}
          </div>
          <p className="text-slate-600 dark:text-slate-300 font-medium text-sm">{label}</p>
        </div>
      </div>
    </div>
  );
}
