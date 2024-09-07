import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Products from './pages/Products'
import My from './pages/My'
import ChatbotPopup from './Components/ChatbotPopup'
import Transaction from './pages/Transaction'
import BankAccount from './pages/BankAccount'
import ForgotPassword from './pages/ForgotPassword'
import WithdrawPassword from './pages/WithdrawPassword'

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
    {
      element:<BankAccount/>,
      path:'/bank'
    },
    {
      element:<ForgotPassword/>,
      path:'/password'
    },
    {
      element:<WithdrawPassword/>,
      path:'/withdrawpassword'
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
