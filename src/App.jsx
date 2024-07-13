import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import IndividualPage from './pages/IndividualPage';
import Nav from './components/Nav';
import Footer from './sections/Footer';


const App =  () => (
  <BrowserRouter>
  <Nav></Nav>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/:id" element={<IndividualPage/>}/>
    </Routes>
    <section className="padding-x bg-black padding-t pb-8">
      <Footer/>
    </section>
  </BrowserRouter>
);

export default App;