import { createContext, ReactNode, useEffect, useMemo, useState } from 'react'

const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: (_: 'light' | 'dark') => {},
})

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme')
    if (storedTheme) {
      setTheme(storedTheme)
      document.documentElement.classList.toggle('dark', storedTheme === 'dark')
    } else {
      setTheme('light')
      localStorage.setItem('theme', 'light')
    }
  }, [])

  const toggleTheme = (newTheme: 'light' | 'dark') => {
    const _newTheme = newTheme === 'light' ? 'dark' : 'light'
    setTheme(_newTheme)
    localStorage.setItem('theme', _newTheme)
    document.documentElement.classList.toggle('dark', _newTheme === 'dark')
  }

  const contextValue = useMemo(() => ({ theme, toggleTheme }), [theme])

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>
}
