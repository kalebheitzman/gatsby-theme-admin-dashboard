// import libs
import { createContext } from "react"

// types
type InitialState = {
  darkMode: boolean
  setDarkMode?: any
  toggle: boolean
  setToggle?: any,
  navigation: any,
  setNavigation?: any,
  token?: any,
  setToken?: any,
  user?: any,
  setUser?: any
}

// initial state
export const initialState: InitialState = {
  darkMode: false,
  toggle: false,
  user: null,
  navigation: [
    {
      title: "Home",
      to: "/",
      icon: ["fas", "home"],
      partiallyActive: false,
    },
  ],
}

export const Context = createContext(initialState)

export default Context
