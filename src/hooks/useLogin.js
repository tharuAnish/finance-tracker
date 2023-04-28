import { useAuthContext } from "./useAuthContext"
import { projectAuth } from "../firebase/config"
import { useEffect, useState } from "react"

export const useLogin = () => {
  const [isCancelled, setIsCancelled] = useState(false)
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const { dispatch } = useAuthContext()

  const login = async (email, password) => {
    setError(null)
    setIsPending(true)
    //sign the uer in
    try {
      const res = await projectAuth.signInWithEmailAndPassword(email, password)
      // dispatch login action
      dispatch({ type: "LOGIN", payload: res.user })

      // update state only before cancelled
      if (!isCancelled) {
        setError(null)
        setIsPending(false)
      }
    } catch (err) {
      if (!isCancelled) {
        console.log(err.message)
        setError(err.message)
        setIsPending(false)
      }
    }
  }
  useEffect(() => {
    return () => setIsCancelled(true)
  }, [])
  return { login, error, isPending }
}
