import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/basic/Homepage/Homepage.js';
import dashboradMain from './components/Dashboard/Main/dashboradMain.js';
import studentRegister from './components/StudentRegister/StudentRegisterPage/studentRegister.js';
import AddTeacher from './components/Dashboard/AddTeacher/AddTeacher.js';
import AddSubject from './components/Dashboard/AddSubject/AddSubject.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Homepage/>}/>
        <Route exact path='/home' element={<dashboradMain/>} />
        <Route exact path='/register' element={<studentRegister/>} />
        <Route exact path='/addTeacher' element={<AddTeacher/>}/>
        <Route exact path='/addSubject' element={<AddSubject/>}/>
      </Routes>
    </Router>
  );
}

export default App;
