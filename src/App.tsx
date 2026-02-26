import './App.css'
import { UserContextProvider } from './UserContext';
import { UserInfoPane } from './UserInfoPane';
import { VendingAdministration } from './VendingAdministration';
import { VendingMachine } from './VendingMachine';

function App() {
  return <UserContextProvider>
    <UserInfoPane />

    <VendingAdministration />

    <VendingMachine />

  </UserContextProvider>
}

export default App
