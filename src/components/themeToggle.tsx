'use client'

import { Moon, Sun } from 'lucide-react'
import { useModeAnimation } from 'react-theme-switch-animation'

const ThemeToggle = ({className}:{
  className:string
}) => {
  const { ref, toggleSwitchTheme, isDarkMode } = useModeAnimation()

  return (
    <button ref={ref} onClick={toggleSwitchTheme}>
        {isDarkMode ? 
        <Sun className='size-5' /> : <Moon className='size-5' />}
    </button>
  )
}

export default ThemeToggle