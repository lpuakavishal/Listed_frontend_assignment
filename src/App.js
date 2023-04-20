import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import { Dashboard } from '@mui/icons-material';
import { Dashboardview } from './components/Dashboardview';
import Main from './components/Main';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './components/Login.js';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login/>,

    },
    {
      path:"/home",
      element:
    <>
     <div className="flex">
       <div className='basis-[22%] h-[100vh] border box1'> 
       <Sidebar/>

       </div>
       <div className='basis-[78%] border '>
         <Dashboardview/>
         <Main/>
       </div>
       </div>
    </>,
    }
  ]);
  return (
      

      
    // 
    
      // <Login/>
      <RouterProvider router={router} />
     
  );
}

export default App;
