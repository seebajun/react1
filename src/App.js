import './App.css';
import Header from './Components/Header/Header.jsx'
import Card from './Components/Card/Card.jsx'
import Footer from './Components/Footer/Footer.jsx'


function App() {
  return (
    <div class="flex-container" className="App">
      <Header></Header>
      <hr></hr>
      <div class="cardcontainer">
      <Card nombre="Ocarina de Madera" precio="$59.990.-" imagen="https://cdn.pixabay.com/photo/2019/04/21/08/51/ocarina-4143664_1280.jpg"></Card>
      <Card nombre="Ocarina de Cerámica" precio="$99.990.-" imagen="https://cdn.pixabay.com/photo/2015/09/20/14/17/ocarina-948369_1280.jpg"></Card>
      <Card nombre="Ocarina Artesanal" precio="$49.990.-" imagen="https://cdn.pixabay.com/photo/2015/09/20/14/16/ocarina-948368_1280.jpg"></Card>
      </div>
      <hr></hr>
      <Footer></Footer>
    </div>
  );
}

export default App;
