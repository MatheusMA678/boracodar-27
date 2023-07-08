import { useState } from "react";
import { motion, Variants } from "framer-motion";

import Planet from './assets/planet.gif'

const containerVariants: Variants = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
      delayChildren: 0.5
    }
  }
}

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    translateY: 50
  },
  show: {
    opacity: 1,
    translateY: 0,
    transition: {
      type: 'spring'
    }
  }
}

export default function App() {
  const [animationEnd, setAnimationEnd] = useState(false)

  return (
    <div className="bg-app bg-cover bg-no-repeat overflow-hidden text-app-gray h-screen flex items-center justify-center gap-8 md:gap-32">
      {animationEnd && (
        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate='show'
          className='flex flex-col gap-14 items-start justify-center max-w-sm'>

          <motion.div
            variants={itemVariants}
            className='flex flex-col gap-6'>
            <h2 className='font-bold text-4.5xl'>Ops, esta página não foi encontrada</h2>
            <p className='text-xl font-light'>Parece que você se perdeu... Tente voltar para a página anterior ou acessar a home.</p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className='flex gap-4 items-center'>
            <button className='px-6 py-3 bg-app-blue rounded-full font-medium text-sm hover:bg-app-blueLight duration-200'>VOLTAR</button>
            <button className='px-6 py-3 bg-app-blue rounded-full font-medium text-sm hover:bg-app-blueLight duration-200'>IR PARA A HOME</button>
          </motion.div>
        </motion.div>
      )}

      <motion.div
        initial={{
          opacity: 0,
          translateY: 100,
        }}
        animate={{
          opacity: 1,
          translateY: 0,
          transition: {
            duration: 1,
            type: 'spring',
          }
        }}
        layout
        onAnimationComplete={() => {
          setAnimationEnd(true)
        }}
        className="flex gap-2 items-center justify-center z-10">
        <span className='text-[8rem] font-bold text-purple-500 select-none'>4</span>
        <img src={Planet} alt="not found 404" width={256} height={256} />
        <span className='text-[8rem] font-bold text-purple-500 select-none'>4</span>
      </motion.div>
    </div>
  )
}
