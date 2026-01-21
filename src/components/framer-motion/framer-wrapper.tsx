'use client'

import { LazyMotion, MotionConfig } from "motion/react"

const loadFeatures = () => import('./features').then((res) => res.default)

export interface IFramerWrapperProps {
  children: React.ReactNode
}

// This approach is just for loading the necessary animations from Framer Motion and reduce the bundle size
const FramerWrapper = ({ children }: IFramerWrapperProps) => {
  return <MotionConfig reducedMotion={process.env.NODE_ENV === "production" ? "user" : "never"}>
    <LazyMotion features={loadFeatures}>{children}</LazyMotion>
  </MotionConfig>
}

export default FramerWrapper
