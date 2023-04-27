import { useState } from "react"
import { projectAuth } from "../firebase/config"

export const useSignup = () => {
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)

  const signup = async (displayName, email, password) => {
    setError(null)
    setIsPending(true)
    // now we are going to try do something, if fails catch the error
    try {
      //signup user
      const res = await projectAuth.createUserWithEmailAndPassword(
        email,
        password
      )
      console.log(res.user)
      // if dosent sends valid response throw error
      if (!res) {
        throw new Error("could not complete signup")
      }

      // update the display name to user
      await res.user.updateProfile({ displayName: displayName })

      setIsPending(false)
      setError(null)
    } catch (err) {
      console.log(err.message)
      setError(err.mesage)
      setIsPending(false)
    }
  }
  // return whichever thing we need to use from this
  return { error, isPending, signup }
}
