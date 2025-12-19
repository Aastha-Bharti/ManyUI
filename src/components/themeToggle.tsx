'use client'

import { Moon, Sun } from 'lucide-react'
import { useModeAnimation } from 'react-theme-switch-animation'
import { useEffect, useState } from 'react'
import { motion } from 'motion/react'


const ThemeToggle = ({ className }: { className?: string }) => {
  const [mounted, setMounted] = useState(false)

  // ✅ ALWAYS call hooks unconditionally
  const { ref, toggleSwitchTheme, isDarkMode } = useModeAnimation()

  useEffect(() => {
    setMounted(true)
  }, [])

  // ✅ Only gate rendering, NOT hooks
  if (!mounted) return null

  return (
    <motion.button
      ref={ref}
      onClick={() => {
        console.log("ThemeToggle: Button clicked");
        toggleSwitchTheme();
      }}
      className={className}
      aria-label="Toggle theme"
      style={{ zIndex: 9999, position: 'relative' }} // Force z-index for debugging
    >
      {isDarkMode ? (
        <Sun className="size-5" />
      ) : (
        <Moon className="size-5" />
      )}
    </motion.button>
  )
}

export default ThemeToggle
