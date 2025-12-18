'use client'

import { Moon, Sun } from 'lucide-react'
import { useModeAnimation } from 'react-theme-switch-animation'
import { useEffect, useState } from 'react'

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
    <button
      ref={ref}
      onClick={toggleSwitchTheme}
      className={className}
      aria-label="Toggle theme"
    >
      {isDarkMode ? (
        <Sun className="size-5" />
      ) : (
        <Moon className="size-5" />
      )}
    </button>
  )
}

export default ThemeToggle
