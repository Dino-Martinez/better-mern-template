import React, { useContext, useState } from 'react'
import { AuthContext } from './AuthProvider'
function LoginForm () {
  const { signup, login, logout } = useContext(AuthContext)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  return (
    <div className='App'>
      <input type='text' value={username} onChange={e => setUsername(e.target.value)} placeholder='Username' />
      <input type='password' value={password} onChange={e => setPassword(e.target.value)} placeholder='Password' />
      <button onClick={e => signup(username, password)}>Sign up</button>
      <button onClick={e => login(username, password)}>Log in</button>
      <button onClick={logout}>Log Out</button>
    </div>
  )
}

export default LoginForm
