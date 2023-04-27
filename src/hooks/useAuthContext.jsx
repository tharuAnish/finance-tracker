import { AuthContext } from "../context/AuthContext"
import { useContext } from "react"

export const useAuthContext = () => {
  const context = useContext(AuthContext)

  //if we dont have the value of context
  if (!context) {
    throw Error("useAuthCOntext must be inside an AuthContextProvider")
  }

  // if we use this hook then we can use it from the returned context
  return context
}
