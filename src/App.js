// import logo from './i-logo.svg';
import './App.css';
// import MainPage from './pages/main.js';
import Navbar from './components/Navbar';
import TabsBar from './components/TabsBar';
import DisplayPage from './pages';

function App() {
  return(
    <div>
      <Navbar />
      <TabsBar />
      <DisplayPage />
    </div>
  )
}

export default App;
