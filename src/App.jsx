import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import BottomNavigation from './Components/BottomNavigation'
import Header from './Components/Header'
import Home from './pages/Home'
import Products from './pages/Products'
import My from './pages/My'
import ChatBot from './Components/ChatBot'
import ChatbotPopup from './Components/ChatbotPopup'
import Transaction from './pages/Transaction'

function App() {

  const routes = createBrowserRouter([
    {
      element:<Home/>,
      path:'/'
    },
    {
      element:<Products/>,
      path:'/products'
    },
    {
      element:<My/>,
      path:'/my'
    },
    {
      element:<Transaction/>,
      path:'/transaction'
    },

  ])

  return (
    <>
    <div className='bg-slate-50 relative scrollable-container'>
      <RouterProvider router={routes}/>
    </div>
    <ChatbotPopup/>
    </>

  )
}

export default App
