import React, { useContext, useEffect, useState } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false)

  const openMenu = () => {
    setShowMenu(true)
  }

  const closeMenu = () => {
    if (window.innerWidth < 1024) {
      setShowMenu(false)
    } else {
      setShowMenu(true)
    }
  }

  const currentYear = new Date().getFullYear()

  useEffect(() => {
    if (window.innerWidth < 1024) {
      setShowMenu(false)
    } else {
      setShowMenu(true)
    }
  }, [])

  useEffect(() => {
    document.addEventListener('scroll', () => {
      if (window.innerWidth < 1024) {
        setShowMenu(false)
      } else {
        setShowMenu(true)
      }
    })
  }, [])

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 1024) {
        setShowMenu(true)
      } else {
        setShowMenu(false)
      }
    })
  })

  return (
    <AppContext.Provider value={{ showMenu, currentYear, openMenu, closeMenu }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
