import logo from './logo.svg';
import './App.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {GithubProvider} from  './context/github/GithubContext'
import {AlertProvider} from  './context/alert/AlertContext'
import Alert from './components/layout/Alert';
import User from './pages/User';

function App() {
  return (
    <GithubProvider>
    <AlertProvider>
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <Navbar/>
        <Alert/>
        <main>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/user/:login' element={<User/>}/>
            <Route path='/notFound' element={<NotFound/>}/>
            <Route path='/*' element={<NotFound/>}/>
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
    </AlertProvider>
    </GithubProvider>

  //   <>
  //   <h1 className="text-3xl font-bold underline">
  //     Hello world!
  //   </h1>
  //   <div class="navbar bg-base-100">
  //   <a class="btn btn-ghost normal-case text-xl">daisyUI</a>
  // </div>
  // </>
  );
}

export default App;
