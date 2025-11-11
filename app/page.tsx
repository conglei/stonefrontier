"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import LightRays from './components/LightRay'
import { Section } from './components/Section'
import { FadeInUp, StaggerContainer, StaggerItem } from './components/animations'

const textColor = '#0C0C0C'

export default function Page() {
  return (
    <div className="min-h-screen text-white relative">
      <div className="fixed inset-0 z-[1000] w-full h-full pointer-events-none">
        <LightRays
          raysOrigin="right"
          raysColor="#ffffff"
          raysSpeed={1}
          lightSpread={0.5}
          rayLength={3}
          fadeDistance={2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0}
          className="custom-rays"
        />
      </div>
      <div className="relative z-10 pointer-events-auto">
      <section className="hero relative mx-auto flex min-h-screen max-w-5xl flex-col justify-start px-6 sm:px-10 lg:px-0 pt-52">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col gap-8"
        >
          <p className="text-xs font-medium uppercase tracking-[0.4em] text-[#8a8a8a]">STONEFRONTIER</p>
          <h1 className="max-w-3xl text-4xl font-medium leading-tight sm:text-5xl text-white" style={{ letterSpacing: '-0.5px' }}>
            Human intention. AI expansion.
          </h1>
          <div className="max-w-2xl text-base leading-loose text-[#d0d0d0] space-y-1">
            <p>You define meaning and direction.</p>
            <p>AI expands context, recall, and possibility.</p>
          </div>
        </motion.div>
      </section>

      <Section id="philosophy">
        <FadeInUp delay={0.1}>
          <h2 className="text-3xl font-medium text-white mb-6" style={{ letterSpacing: '-0.02em' }}>Philosophy</h2>
        </FadeInUp>
        <StaggerContainer staggerDelay={0.08} className="space-y-6 mt-6">
          <StaggerItem direction="up" distance={20}>
            <p className="text-lg leading-relaxed text-[#d0d0d0]">
              StoneFrontier builds systems where humans and AI work together in a balanced, stable way.
            </p>
          </StaggerItem>
          <div className="space-y-4">
            <StaggerItem direction="up" distance={20}>
              <p className="text-lg leading-relaxed text-[#d0d0d0]">
                The human brings interpretation, judgment, and meaning.
              </p>
            </StaggerItem>
            <StaggerItem direction="up" distance={20}>
              <p className="text-lg leading-relaxed text-[#d0d0d0]">
                The AI expands what can be seen by surfacing context and connecting information across different places and moments.
              </p>
            </StaggerItem>
          </div>
          <StaggerItem direction="up" distance={20}>
            <p className="text-lg leading-relaxed text-[#d0d0d0]">
              The value comes from this interaction. Each side strengthens the other.
            </p>
          </StaggerItem>
          <StaggerItem direction="up" distance={20}>
            <p className="text-lg leading-relaxed text-[#d0d0d0]">
              When the system is shaped this way, complexity becomes easier to move through.
              Information that once felt scattered begins to form clarity.
              There is more space to think, compare, and understand without feeling overwhelmed or replaced.
            </p>
          </StaggerItem>
          <div className="space-y-4 pt-4">
            <StaggerItem direction="up" distance={20}>
              <p className="text-lg leading-relaxed text-[#d0d0d0]">
                The human remains at the center.
              </p>
            </StaggerItem>
            <StaggerItem direction="up" distance={20}>
              <p className="text-lg leading-relaxed text-[#d0d0d0]">
                The system extends the range of what can be understood at once.
              </p>
            </StaggerItem>
          </div>
        </StaggerContainer>
      </Section>

      <Section id="products">
        <FadeInUp delay={0.1}>
          <h2 className="text-3xl font-medium text-white mb-6" style={{ letterSpacing: '-0.02em' }}>Our Work</h2>
        </FadeInUp>
        
        <StaggerContainer staggerDelay={0.1} className="mt-6">
          <StaggerItem direction="up" distance={20}>
            <div 
              className="border rounded-[6px] p-10 backdrop-blur-[6px] transition-all duration-300 focus-within:outline-none"
              style={{
                borderColor: 'rgba(255, 255, 255, 0.07)',
                backgroundColor: 'rgba(255, 255, 255, 0.02)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.07)';
              }}
              tabIndex={0}
            >
              <div className="text-white mb-3 text-xs uppercase tracking-wider opacity-70">
                Current release
              </div>
              <h3 className="text-white mb-1 text-[28px] font-[450] tracking-[-0.02em]">
                Suminos
              </h3>
              <p className="text-white mb-7 text-[17px]  opacity-[0.88]">
                Your AI companion for job search and career moves.
              </p>
              <p className="text-white mb-7 text-[17px] leading-[1.55] opacity-[0.88]">
                Suminos helps you revise your resume, discover roles that fit, speed up applications with a browser companion under your control, track progress, and prep for interviews — all in one place.
              </p>
              <ul className="text-white mb-7 space-y-3 text-[15px] leading-none opacity-[0.88] list-none pl-0">
                <li className="flex items-start">
                  <span className="mr-3 opacity-[0.6]">•</span>
                  <span>Resume revision with role-specific feedback and human-sounding suggestions.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 opacity-[0.6]">•</span>
                  <span>Smart discovery that learns your background and delivers daily matches.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 opacity-[0.6]">•</span>
                  <span>Browser companion to auto-fill forms while you stay in the loop.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 opacity-[0.6]">•</span>
                  <span>Application tracking with reminders and notes.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 opacity-[0.6]">•</span>
                  <span>Interview prep with company insights and practice questions.</span>
                </li>
              </ul>
              <div className="flex items-center gap-6">
                <a
                  href="https://suminos.ai"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white underline transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-30 focus:ring-offset-2 focus:ring-offset-transparent rounded-sm text-[15px] opacity-90"
                  onFocus={(e) => {
                    e.currentTarget.style.boxShadow = '0 0 8px rgba(255, 255, 255, 0.3)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  Visit Suminos.ai
                </a>
              
              </div>
            </div>
          </StaggerItem>
          <StaggerItem direction="up" distance={20} className="mt-6">
            <p className="text-xs text-[#8a8a8a]" style={{ opacity: 0.6 }}>
              More systems are in development.
            </p>
          </StaggerItem>
        </StaggerContainer>
      </Section>

      <Section id="contact">
        <FadeInUp delay={0.1}>
          <h2 className="text-3xl font-medium text-white mb-6" style={{ letterSpacing: '-0.02em' }}>Contact</h2>
        </FadeInUp>
        <StaggerContainer staggerDelay={0.1} className="space-y-6 mt-6">
          <StaggerItem direction="up" distance={20}>
            <p className="text-lg leading-relaxed text-[#d0d0d0]">
              We welcome thoughtful conversation and collaboration.
            </p>
          </StaggerItem>
          <StaggerItem direction="up" distance={20}>
            <a
              href="mailto:contact@stonefrontier.co"
              className="mt-6 inline-flex text-base font-medium text-white underline decoration-2 decoration-[#4E7DFF] underline-offset-4 transition-all duration-300 hover:text-[#4E7DFF] hover:underline-offset-6"
            >
              contact@stonefrontier.co
            </a>
          </StaggerItem>
        </StaggerContainer>
      </Section>
      </div>
    </div>
  )
}
