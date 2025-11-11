export type Category = 
  | 'Resume & Profile'
  | 'Job Discovery'
  | 'Application Management'
  | 'Interview Prep'
  | 'Career Insights'

export type FunnelStage = 
  | 'Awareness'
  | 'Consideration'
  | 'Mid Funnel'
  | 'Thought Leadership'

export const CATEGORY_DESCRIPTIONS: Record<Category, { description: string; linkTarget: string }> = {
  'Resume & Profile': {
    description: 'Tips and strategies for crafting resumes that stand out',
    linkTarget: 'https://app.suminos.ai/resume-revision'
  },
  'Job Discovery': {
    description: 'Find your perfect role with AI-powered job search strategies',
    linkTarget: 'https://app.suminos.ai/job-discovery'
  },
  'Application Management': {
    description: 'Streamline and organize your job application process',
    linkTarget: 'https://app.suminos.ai/app-tracker'
  },
  'Interview Prep': {
    description: 'Prepare for interviews with confidence and practice',
    linkTarget: 'https://app.suminos.ai/interview-prep'
  },
  'Career Insights': {
    description: 'Industry trends and insights for career development',
    linkTarget: 'https://app.suminos.ai'
  }
}

