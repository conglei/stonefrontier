"use client"

import { motion } from 'framer-motion'
import LightRays from './components/LightRay'
import { Section } from './components/Section'
import { StaggerContainer, StaggerItem, SectionHeading, BodyText, Label, Heading, ProductCard, EmailLink } from './components'

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
      <section className="hero relative mx-auto flex min-h-[calc(100vh-80px)] max-w-5xl flex-col justify-center px-6 sm:px-10 lg:px-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col gap-8"
        >
          <Label>STONEFRONTIER</Label>
          <Heading level={1} className="max-w-3xl leading-tight" style={{ letterSpacing: '-0.5px' }}>
            Human intention. AI expansion.
          </Heading>
          <div className="max-w-2xl text-base leading-loose text-[#d0d0d0] space-y-1">
            <p>You define meaning and direction.</p>
            <p>AI expands context, recall, and possibility.</p>
          </div>
        </motion.div>
      </section>

      <Section id="philosophy">
        <SectionHeading level={2}>Philosophy</SectionHeading>
        <StaggerContainer staggerDelay={0.08} className="space-y-5 sm:space-y-6 mt-4 sm:mt-6">
          <StaggerItem direction="up" distance={20}>
            <BodyText>
              StoneFrontier builds systems where humans and AI work together in a balanced, stable way.
            </BodyText>
          </StaggerItem>
          <div className="space-y-4">
            <StaggerItem direction="up" distance={20}>
              <BodyText>
                The human brings interpretation, judgment, and meaning.
              </BodyText>
            </StaggerItem>
            <StaggerItem direction="up" distance={20}>
              <BodyText>
                The AI expands what can be seen by surfacing context and connecting information across different places and moments.
              </BodyText>
            </StaggerItem>
          </div>
          <StaggerItem direction="up" distance={20}>
            <BodyText>
              The value comes from this interaction. Each side strengthens the other.
            </BodyText>
          </StaggerItem>
          <StaggerItem direction="up" distance={20}>
            <BodyText>
              When the system is shaped this way, complexity becomes easier to move through.
              Information that once felt scattered begins to form clarity.
              There is more space to think, compare, and understand without feeling overwhelmed or replaced.
            </BodyText>
          </StaggerItem>
          <div className="space-y-4 pt-2 sm:pt-4">
            <StaggerItem direction="up" distance={20}>
              <BodyText>
                The human remains at the center.
              </BodyText>
            </StaggerItem>
            <StaggerItem direction="up" distance={20}>
              <BodyText>
                The system extends the range of what can be understood at once.
              </BodyText>
            </StaggerItem>
          </div>
        </StaggerContainer>
      </Section>

      <Section id="products">
        <SectionHeading level={3}>Our Work</SectionHeading>
        
        <StaggerContainer staggerDelay={0.1} className="mt-6">
          <StaggerItem direction="up" distance={20}>
            <ProductCard
              label="Current release"
              title="Suminos"
              description="StoneFrontier's vision applied to job search. You define your direction; AI expands context and possibility."
              details="Suminos helps you revise your resume, discover roles that fit, speed up applications with a browser companion under your control, track progress, and prep for interviews. The system surfaces relevant opportunities and connects information across your search while you make the decisions that matter — all in one place."
              features={[]}
              link={{
                href: 'https://suminos.ai',
                text: 'Visit Suminos.ai'
              }}
            />
          </StaggerItem>
          <StaggerItem direction="up" distance={20} className="mt-6">
            <Label variant="normal">
              More systems are in development.
            </Label>
          </StaggerItem>
        </StaggerContainer>
      </Section>

      <Section id="contact">
        <SectionHeading level={3}>Contact</SectionHeading>
        <StaggerContainer staggerDelay={0.1} className="space-y-6 mt-6">
          <StaggerItem direction="up" distance={20}>
            <BodyText size="base">
            We’re interested in connecting with people who are exploring similar questions about how humans and AI can work together in a grounded and intentional way. If you are building, investing, researching, or simply thinking deeply in this space, we’d be glad to talk. We’re open to collaboration, early partnerships, and shared exploration with people who value clarity, context, and thoughtful design.

            </BodyText>
          </StaggerItem>
          <StaggerItem direction="up" distance={20}>
            <EmailLink email="contact@stonefrontier.co" />
          </StaggerItem>
        </StaggerContainer>
      </Section>
      </div>
    </div>
  )
}
