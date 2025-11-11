"use client"
import { useEffect } from 'react'
import { LandingHero } from './components/LandingHero'
import { LandingFeatureItem } from './components/LandingFeatureItem'
import { ResumeOptimizationIllustration } from './components/ResumeOptimizationIllustration'
import { SmartJobDiscoveryIllustration } from './components/SmartJobDiscoveryIllustration'
import { JobApplicationIllustration } from './components/JobApplicationIllustration'
import { ProgressTrackingIllustration } from './components/ProgressTrackingIllustration'
import { InterviewMasteryIllustration } from './components/InterviewMasteryIllustration'

export default function Page() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px',
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, observerOptions)

    document.querySelectorAll('.feature-item-transition').forEach((item) => {
      observer.observe(item)
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  const features = [
    {
      number: 1,
      title: 'AI-Powered Resume Revision',
      description:
        'Turn your resume into a story that stands out. Your AI career partner reviews every detail, highlights exactly what recruiters look for, and helps you customize it for the roles you want. You receive practical, human sounding feedback that actually helps.',
      tags: ['Resume Review', 'Tailored for Roles', 'Job-Title Optimization', 'Actionable Feedback'],
      illustration: <ResumeOptimizationIllustration />,
    },
    {
      number: 2,
      title: 'Smart Job Discovery',
      description:
        'Stop scrolling forever. Let AI find the opportunities that truly fit you. It understands your experience, goals, and preferences deeply. Get fresh job recommendations tailored just for you every day, so you can focus on applying, not searching.',
      tags: ['Personalized Job Matches', 'Daily Alerts', 'AI-Powered Recommendations', 'Relevant Openings'],
      illustration: <SmartJobDiscoveryIllustration />,
    },
    {
      number: 3,
      title: 'Browser Companion',
      description:
        'Tired of filling out the same forms over and over? Your AI companion helps you apply faster. It auto fills applications quickly, but you always stay in control, saving you valuable hours every week.',
      tags: ['Auto-Fill Applications', 'Workflow Automation', 'AI Under Your Control', 'Time Saver'],
      illustration: <JobApplicationIllustration />,
    },
    {
      number: 4,
      title: 'Application Management',
      description:
        'Keep track of everything in one easy spot. Track the resumes you have sent, the interviews you have scheduled, and monitor your progress. Set gentle reminders and stay perfectly organized throughout your job hunt with a clear, stress free dashboard.',
      tags: ['Centralized Tracker', 'Status Updates', 'Reminders & Follow-Ups', 'Stay Organized'],
      illustration: <ProgressTrackingIllustration />,
    },
    {
      number: 5,
      title: 'Interview Preparation',
      description:
        'Walk into every interview feeling completely ready. Practice with realistic AI generated questions, get deep insights on each company, and receive personalized prep tips. This ensures you feel confident and make your best possible impression.',
      tags: ['Practice Questions', 'Company Insights', 'Personalized Prep', 'Confidence Builder'],
      illustration: <InterviewMasteryIllustration />,
    },
  ];

  return (
    <div className="min-h-screen bg-[#FBFAFB] dark:bg-[#0f172a]">
      <LandingHero
        headline={
          <>
            Let's figure out <br /> your next move together
          </>
        }
        subheadline="The AI that helps you see what's next — when old paths no longer lead anywhere."
        ctaText="Start your journey"
        onCtaClick={() => {
          window.open('https://app.suminos.ai', '_blank');
        }}
      />

      <section className="features px-[60px] pt-[100px] max-md:px-[30px] flex flex-col gap-[120px]">
        {features.map((feature, index) => (
          <LandingFeatureItem
            key={feature.number}
            number={feature.number}
            title={feature.title}
            description={feature.description}
            tags={feature.tags}
            illustration={feature.illustration}
            isReversed={index % 2 === 1}
          />
        ))}
      </section>

      {/* CTA Section */}
      <section className="px-[60px] pb-[80px] max-md:px-[30px] flex items-center justify-center bg-[#FBFAFB] dark:bg-[#0f172a]">
        <div className="text-center max-w-[600px]">
          <h2 className="mb-4 text-[32px] font-semibold text-[#1a1a1a] dark:text-white max-md:text-2xl" style={{ fontFamily: "'BIZ UDP Mincho', serif" }}>
            Ready to get started?
          </h2>
          <button
            onClick={() => {
              window.open('https://app.suminos.ai', '_blank');
            }}
            className="rounded-lg border-none cursor-pointer bg-[#0060F3] px-10 py-4 text-base text-white font-medium transition-all duration-300 hover:bg-[#1d4ed8] hover:translate-y-[-2px] hover:shadow-[0_10px_25px_rgba(37,99,235,0.2)]"
          >
            Start your journey
          </button>
        </div>
      </section>
    </div>
  )
}
