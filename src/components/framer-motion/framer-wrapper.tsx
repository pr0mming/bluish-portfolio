'use client'

import { LazyMotion } from 'framer-motion'

const loadFeatures = () => import('./features').then((res) => res.default)

export interface IFramerWrapperProps {
  children: React.ReactNode
}

// This approach is just for loading the necessary animations from Framer Motion and reduce the bundle size
const FramerWrapper = ({ children }: IFramerWrapperProps) => {
  return <LazyMotion features={loadFeatures}>{children}</LazyMotion>
}

export default FramerWrapper
