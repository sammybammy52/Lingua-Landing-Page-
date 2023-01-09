import './App.css'
import Details from './components/Details';
import Header from './components/Header';
import Teachers from './components/Teachers';
import Testimonials from './components/Testimonials';

function App() {


  return (
    <div className='app max-w-[1440px] mx-auto'>
      <Header/>
      <Details/>
      <Teachers/>
      <Testimonials/>
    </div>
  )
}

export default App
