// import libs
import React, { createContext } from "react"

interface InitialState {
  darkMode: boolean
  setDarkMode: any
  toggle: boolean
  setToggle: any
}

const initialState: InitialState = {
  darkMode: false,
  setDarkMode: null,
  toggle: false,
  setToggle: null,
}

export default createContext(initialState)
