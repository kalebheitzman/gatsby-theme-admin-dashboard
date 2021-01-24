// import libs
import React, { useState, useEffect } from "react"

// import components
import Context, { initialState } from "./Context"

export default ({ children }) => {

  const [darkMode, setDarkMode] = useState(initialState.darkMode)
  const [toggle, setToggle] = useState(initialState.toggle)
  const [navigation, setNavigation] = useState(initialState.navigation)
  const [token, setToken] = useState(null)

  // get initial dark mode
  useEffect(() => {
    const dm: string = localStorage.getItem("dark-mode")

    if (dm === null && typeof window !== `undefined`) {
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        return setDarkMode(true)
      } else {
        return setDarkMode(false)
      }
    }

    const isDarkMode: boolean = dm === "true"
    return setDarkMode(isDarkMode)
  }, [])

  // update local storage
  useEffect(() => {
    localStorage.setItem("dark-mode", darkMode ? "true" : "false")
  }, [darkMode])

  return (
    <Context.Provider
      value={{
        darkMode, setDarkMode,
        toggle, setToggle,
        navigation, setNavigation,
        token, setToken
      }}
    >
      {children}
    </Context.Provider>
  )
}
