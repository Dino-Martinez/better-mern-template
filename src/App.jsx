import './App.css'
import Provider from './AuthProvider'
import LoginForm from './LoginForm'
function App () {
  return (
    <Provider>
      <LoginForm />
    </Provider>
  )
}

export default App
