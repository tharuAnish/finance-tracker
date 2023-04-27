import { useState } from "react"
import styles from "./Signup.module.css"
import { useSignup } from "../../hooks/useSignup"

export default function Signup() {
  const [displayName, setDisplayName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  //usesignup
  const { signup, isPending, error } = useSignup()

  const handleSubmit = (e) => {
    e.preventDefault()
    // prev we were logging now use signup function
    signup(displayName, email, password)
  }

  return (
    <form onSubmit={handleSubmit} className={styles["signup-form"]}>
      <label>
        <span>Name:</span>
        <input
          type="text"
          onChange={(e) => setDisplayName(e.target.value)}
          value={displayName}
        />
      </label>
      <label>
        <span>Email:</span>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label>
        <span>Password:</span>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>
      {/* show only one button if loading this will not show */}
      {!isPending && <button className="btn">Signup</button>}
      {/* make the button disabled while the pending is true */}
      {isPending && (
        <button className="btn" disabled>
          Loading...
        </button>
      )}
      {/* check for error */}
      {error && <p>{error}</p>}
    </form>
  )
}
