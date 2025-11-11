"use client"

import LightRays from '../components/LightRay'
import { EmailLink } from '../components'
import { ExternalLink, Linkedin } from 'lucide-react'

export default function AboutPage() {
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
        <section className="px-6 py-24 sm:px-10 lg:px-0" style={{ paddingTop: '96px' }}>
          <div className="mx-auto" style={{ maxWidth: '60ch' }}>
            <h1 className="text-4xl sm:text-5xl font-normal text-white mb-8" style={{ letterSpacing: '-0.02em' }}>
              About
            </h1>
            
            <div className="space-y-8">
              <p 
                className="text-base sm:text-lg font-normal text-[#d0d0d0]"
                style={{ lineHeight: '1.65' }}
              >
                StoneFrontier explores how humans and AI can work together in a stable and grounded way. The work begins with the belief that understanding is not something to automate away. It is something to support, expand, and deepen.
              </p>
              
              <p 
                className="text-base sm:text-lg font-normal text-[#d0d0d0]"
                style={{ lineHeight: '1.65' }}
              >
                There is a focus on systems that help people see more of the context around their decisions, connect knowledge across time, and move through complexity without losing clarity or agency.
              </p>
              
              <p 
                className="text-base sm:text-lg font-normal text-[#d0d0d0]"
                style={{ lineHeight: '1.65' }}
              >
                StoneFrontier is founded by Conglei Shi. The company grows directly out of a long path of working across research and product environments, with a consistent interest in how people make sense of information and how tools can help.
              </p>
              
              <p 
                className="text-base sm:text-lg font-normal text-[#d0d0d0]"
                style={{ lineHeight: '1.65' }}
              >
                If this direction resonates, we're open to conversation and collaboration.
              </p>
              
              <div className="mt-8 space-y-6">
                <div>
                  <p 
                    className="text-sm sm:text-base font-medium text-white opacity-80 mb-4"
                    style={{ lineHeight: '1.65' }}
                  >
                    Conglei
                  </p>
                  <div className="flex flex-wrap items-center gap-6">
                    <a 
                      href="https://conglei.ai" 
                      target="_blank" 
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-[#8a8a8a] transition-colors hover:text-[#4E7DFF] no-underline group"
                    >
                      <ExternalLink size={16} className="flex-shrink-0 opacity-70 group-hover:opacity-100" />
                      <span>Website</span>
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/conglei-shi" 
                      target="_blank" 
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-[#8a8a8a] transition-colors hover:text-[#4E7DFF] no-underline group"
                    >
                      <Linkedin size={16} className="flex-shrink-0 opacity-70 group-hover:opacity-100" />
                      <span>LinkedIn</span>
                    </a>
                  </div>
                </div>
                <div className="pt-2">
                  <EmailLink email="contact@stonefrontier.co" />
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}

