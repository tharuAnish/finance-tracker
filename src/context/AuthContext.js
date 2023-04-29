import { createContext, useReducer, useEffect } from "react"
import { projectAuth } from "../firebase/config"

export const AuthContext = createContext()

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload }
    case "LOGOUT":
      return { ...state, user: null }
    case "AUTH_IS_READY":
      return { user: action.payload, authIsReady: true }
    default:
      return state
  }
}

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    // auth state change
    authIsReady: false,
  })

  useEffect(() => {
    // this function whenever any change in auth state, fire this fn
    const unsub = projectAuth.onAuthStateChanged((user) => {
      dispatch({ type: "AUTH_IS_READY", payload: user })
      // once the auth is ready unsubscribe and now its never gona fire again
      unsub()
    })
  }, [])

  console.log("AuthContext state:", state)

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  )
}
