import './App.css';
import Header from './components/header/header'
import Carousel from './components/main/carousel/carousel';
import Footer from './components/footer/footer';
function App() {
  return (
    <div>
    <Header/>
    <div className="App">
      <div id="developWeb" className="section">
        <div className="content">
          <h1>Desarrollo web</h1>
        </div>
        <div className="overlay"/>
      </div>
      <div id="developMobile" className="section">
        <div className="content">
          <h1>Desarrollo movil</h1>
        </div>
        <div className="overlay"/>
      </div>
      <div id="appsDesktop" className="section">
        <div className="content">
          <h1>Apps Desktop</h1>
        </div>
        <div className="overlay"/>
      </div>
      <div id="desing" className="section">
        <div className="content">
          <h1>Diseño</h1>
        </div>
        <div className="overlay"/>
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default App;
