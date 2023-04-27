import { useState } from "react"
import { projectAuth } from "../firebase/config"
import { useAuthContext } from "./useAuthContext"

export const useSignup = () => {
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  //desturucture dispatch
  const { dispatch } = useAuthContext()
  const signup = async (displayName, email, password) => {
    setError(null)
    setIsPending(true)
    try {
      //signup user
      const res = await projectAuth.createUserWithEmailAndPassword(
        email,
        password
      )
      if (!res) {
        throw new Error("could not complete signup")
      }
      // update the display name to user
      await res.user.updateProfile({ displayName: displayName })
      //dispatch login action
      dispatch({ type: "LOGIN", payload: res.user })

      setIsPending(false)
      setError(null)
    } catch (err) {
      console.log(err.message)
      setError(err.message)
      setIsPending(false)
    }
  }
  return { error, isPending, signup }
}
