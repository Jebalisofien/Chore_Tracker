import './App.css';
import { useState, useEffect } from "react";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import HomePage from './pages/HomePage';
import RequireAuth from './middelware/RequireAuth';
import userController from './controllers/userController';
import LogoutPage from './pages/LogoutPage';


import AccountPage from './pages/AccountPage';

import 'bootstrap/dist/css/bootstrap.min.css';
import AddJobPage from './pages/AddJobPage';
import MyJob from './components/order/MyJob';
import Job from './components/order/Job';
import EditJob from './components/order/EditJob';

function App() {
const controller = userController();



useEffect(() => {

  if (controller.loggedIn === null) {
      controller.checkAuth();
      
      
  }
  
}, [])
              

      
  return (
    <div className="App">
      



      
      <BrowserRouter>
        {controller.loggedIn ?
          ( 
            <nav className="nav justify-content-center">
              
              <ul  className="list navbar-expand-lg navbar-light bg-light d-flex " >
                <h4 className=" navbar-brand mb-0 h1 m-3">Welcome {controller.userName} !</h4>
                  <li className=" navbar-brand mb-0 h1 m-3"> <Link to="/">Home</Link> </li>
                  
                  <li className="navbar-brand mb-0 h1 m-3"> <Link to="/job">Add Job </Link> </li>
                  <li className="navbar-brand mb-0 h1 m-3"> <Link to="/account">Account </Link> </li>
                  
                  <li className="navbar-brand mb-0 h1 m-3"><Link to="/logout">Logout</Link></li>
                  </ul>
              </nav>
            ): (
            <nav className="nav justify-content-center">
              
              
            <ul className="list navbar navbar-expand-lg navbar-light bg-light">
                <li className="navbar-brand mb-0 h1 m-3"><Link className="nav-link" to="/signin">SignIn</Link></li>
                <li className="navbar-brand mb-0 h1 m-3"><Link className="nav-link" to="/signup">SignUp</Link></li>
            </ul>
            </nav>
          )
        }
      
      
        <Routes>
          <Route index element={<RequireAuth><HomePage /></RequireAuth>}/>
          <Route path='/signin' element={<SignInPage />} />
          <Route path='/signup' element={<SignUpPage />} />
          <Route path='/Logout' element={<LogoutPage />} />

          
          <Route path='/job' element={<RequireAuth><AddJobPage /></RequireAuth>} />
          <Route path='/account' element={<RequireAuth><AccountPage /></RequireAuth>} />
          <Route path='/job/:jobId' element={<Job />}/>
          <Route path='/job/:jobId/edit' element={<EditJob />}/>
          

        </Routes>
      </BrowserRouter>
      
    </div>
  );
}


export default App;
