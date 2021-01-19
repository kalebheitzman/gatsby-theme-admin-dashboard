// import libs
import { createContext } from "react"

// types
type InitialState = {
  darkMode: boolean
  setDarkMode: any
  toggle: boolean
  setToggle: any,
  navigation: any,
  setNavigation: any
}

// initial state
const initialState: InitialState = {
  darkMode: false,
  setDarkMode: null,
  toggle: false,
  setToggle: null,
  navigation: [
    {
      title: "Home",
      to: "/",
      icon: ["fas", "home"],
      partiallyActive: false,
    },
  ],
  setNavigation: null
}

export const Context = createContext(initialState)

export default Context
