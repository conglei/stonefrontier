'use client';

interface LandingTagProps {
  children: React.ReactNode;
}

export function LandingTag({ children }: LandingTagProps) {
  return (
    <span className="rounded-[20px] bg-[#eff6ff] px-4 py-2 font-['Roboto_Mono',monospace] text-[13px] font-medium text-[#2563eb]">
      {children}
    </span>
  );
}

