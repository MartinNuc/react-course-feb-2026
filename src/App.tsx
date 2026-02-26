import './App.css'
import { MyErrorBoundary } from './MyErrorBoundary';
import { ThrowComponent } from './ThrowingComponent';
import { UserContextProvider } from './UserContext';
import { UserInfoPane } from './UserInfoPane';
import { VendingAdministration } from './VendingAdministration';
import { VendingMachine } from './VendingMachine';

function App() {
  return <UserContextProvider>

    <MyErrorBoundary>
      <ThrowComponent />
    </MyErrorBoundary>

    <UserInfoPane />

    <VendingAdministration />

    <VendingMachine />

  </UserContextProvider>
}

export default App
