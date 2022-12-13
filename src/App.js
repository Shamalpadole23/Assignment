import logo from './logo.svg';
import './App.css';
import Header from './pages/Header';
import Candidate from './pages/Candidate';
import Componies from './pages/Componies';
import Jobs from './pages/Jobs';
import Notification from './pages/Notification';
import UserName from './pages/UserName';
import {BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  return (
    <>
    <BrowserRouter>
    <Header></Header>
    <Routes> 
    <Route path="/" exact component={Candidate}></Route>
    <Route path="componies" exact component={Componies}></Route>
    <Route path="jobs" exact component={Jobs}></Route>
    <Route path="notificatioon" exact component={Notification}></Route>
    <Route path="username" exact component={UserName}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
