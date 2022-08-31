import { BrowserRouter,Routes, Route} from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import Home from './page/Home';
import Works from './page/Works';
import About from './page/About';

// import Bganimate from './component/Bganimate';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/works" element={<Works/>}/>
      </Routes>
      {/* <Bganimate/> */}
    </BrowserRouter>
  );
}

export default App;
