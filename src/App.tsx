import './App.css'
import { UserContextProvider } from './UserContext';
import { VendingAdministration } from './VendingAdministration';
import { VendingMachine } from './VendingMachine';

function App() {
  return <UserContextProvider>
    <VendingAdministration />

    <VendingMachine />

  </UserContextProvider>
}

export default App
