import React from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

export default function Hero() {
  const { ref, useRef } = useInView({
    triggerOnce: true,
    threshold: 0.3
  })

  return (
    <>
      
    </>
  )
}