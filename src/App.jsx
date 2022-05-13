import './App.css'
import Provider from './AuthProvider'
import ProtectedExample from './ProtectedExample'
import Protector from './Protector'
function App () {
  return (
    <Provider>
      <Protector>
        <ProtectedExample />
      </Protector>
    </Provider>
  )
}

export default App
