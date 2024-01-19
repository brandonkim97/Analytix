import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import Message from './pages/Message';
import SocialMedia from './pages/SocialMedia';
import Schedule from './pages/Schedule';
import Setting from './pages/Setting';
import Posts from './pages/Posts';
import Statistic from './pages/Statistic';
import Navbar from './components/navbar/Navbar';
import Container from './components/Container';
import Plan from './pages/Plan';
import { ToastContainer } from 'react-toastify';

const App = () => {

  return (
    <div className="flex flex-row">
      <Router>
        <Navbar classes="hidden xl:block xl:sticky xl:top-0 xl:h-screen"/>
        <Container>
          <Routes>
            <Route path="/" exact element={<Home />} />
            {/* <Route path="/social" exact element={<SocialMedia />} /> */}
            <Route path="/posts" exact element={<Posts />} />
            <Route path="/statistic" exact element={<Statistic />} />
            <Route path="/message" exact element={<Message />} />
            <Route path="/schedule" exact element={<Schedule />} />
            <Route path="/plan" exact element={<Plan />} />
            {/* <Route path="/setting" exact element={<Setting />} /> */}
          </Routes>
        </Container>
      </Router>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="dark"
      />
    </div>
  )
}

export default App
