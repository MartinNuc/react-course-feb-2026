import { RouterProvider } from 'react-router-dom';
import './App.css'
import { UserContextProvider } from './UserContext';
import { router } from './router/router';

function App() {
  return <UserContextProvider>
    <RouterProvider router={router} />
  </UserContextProvider>
}

export default App
