import { StaggerItem } from './animations';
import { StepNumber } from './StepNumber';
import { StepContent } from './StepContent';
import { StepIllustration } from './StepIllustration';

interface StepItemProps {
  number: number;
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  illustrationLabel: string;
}

export function StepItem({ 
  number, 
  title, 
  description, 
  features, 
  icon, 
  illustrationLabel 
}: StepItemProps) {
  return (
    <StaggerItem>
      <div className="relative">
        <div className="flex flex-col lg:flex-row items-center lg:items-start w-full">
          <div className="flex items-center lg:items-start w-full max-w-[600px] lg:w-[600px]">
            <StepNumber number={number} />
            <StepContent 
              title={title}
              description={description}
              features={features}
            />
          </div>
          <StepIllustration 
            icon={icon}
            label={illustrationLabel}
            stepNumber={number}
          />
        </div>
      </div>
    </StaggerItem>
  );
}
