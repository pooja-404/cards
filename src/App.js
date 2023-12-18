import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Cardsection from './components/Cardsection';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Nav />
      <Cardsection />
      <Footer/>

    </div>
  );
}

export default App;
