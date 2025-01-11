import { FormEvent, useState } from "react"
import styles from "./app.module.scss"
function App() {
  const [username, setUsername] = useState<string>()
  const [password, setPassword] = useState<string>()
  const handleSubmit = async (e: FormEvent<HTMLElement>) => {
    e.preventDefault()

    const response = await fetch("http://localhost:4444/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, password })
    })
    const data = await response.json()
    console.log(data.token)
  }

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <p className={styles.title}>Sign in to your account</p>
        <form onSubmit={(e) => handleSubmit(e)}>
          <p>Username</p>
          <input type="text" name="username" onChange={(e) => { setUsername(e.target.value) }} />
          <p>Password</p>
          <input type="password" name="password" onChange={(e) => { setPassword(e.target.value) }} />
          <input type="submit" value="Sign in" />
        </form>
      </div>
    </div>
  )
}

export default App
