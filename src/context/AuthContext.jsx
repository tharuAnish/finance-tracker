import { createContext, useReducer } from "react"

export const AuthContext = createContext()

//reducer function, inside this function we update state
export const authReducer = (state, action) => {
  switch (
    action.type // to know action type ,eill have diff case
  ) {
    default:
      return state
  }
}

//custom auth context provider components
export const AuthContextProvider = ({ children }) => {
  // making a reducer
  const [state, dispatch] = useReducer(authReducer, {
    // authReducer function which is responsible for updating our state
    user: null,
  })

  //dispatch action
  // dispatch({type: 'LOG_IN'})

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  )
}
