interface StepNumberProps {
  number: number;
}

export function StepNumber({ number }: StepNumberProps) {
  return (
    <div className="hidden lg:flex w-16 flex-shrink-0 justify-center">
      <div className="step-number w-6 h-6 rounded-full bg-gradient-to-r from-blue-900 to-blue-700 flex items-center justify-center text-white font-bold text-xs relative z-10">
        {number}
      </div>
    </div>
  );
}
