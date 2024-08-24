import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Current from './components/pages/Current';
import Currentstudents from './components/pages/Currentstudents';
import Mainpage from './components/pages/Mainpage';
import StudentDetails from './components/pages/StudentDetails';
import Profileattribute from './components/pages/Profileattribute';
import Subscription from './components/pages/Subscription';
import Navbar from './components/pages/Navbar';

const App = () => {

  return (
  <div>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/CrntStudents/:id' element={<Currentstudents />}/>
        <Route path='CrntStudents/Current' element={<Current />}/>
        <Route path='/Mainpage' element={<Mainpage />}/>
        <Route path='/StudentDetails' element={<StudentDetails />}/>
        <Route path='/Profileattribute' element={<Profileattribute />}/>
        <Route path='/Subscription' element={<Subscription />}/>
      </Routes>
    </BrowserRouter>
  </div>  
  );
};

export default App;