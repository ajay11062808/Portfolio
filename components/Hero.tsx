'use client'
import { motion, useScroll, useTransform } from 'framer-motion';


export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -50]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="text-center">
        <motion.h1 
          className="text-4xl font-bold mb-4 text-white"
          style={{ y: y1 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Ajay Jagarlamudi
        </motion.h1>
        <motion.h2 
          className="text-2xl mb-6 text-white"
          style={{ y: y2 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Full Stack Developer
        </motion.h2>
        <motion.p 
          className="text-xl max-w-2xl mx-auto text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Passionate about creating robust and scalable web applications. 
          Experienced in both frontend and backend technologies. With DevOps experience too.
          Designed Scalable applications with Docker and Kubernetes.
        </motion.p>
      </div>
    </section>
  )
}