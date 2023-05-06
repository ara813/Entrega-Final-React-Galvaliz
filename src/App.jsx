import './App.css';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import Header from './components/Header';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App(){
    return (
        <div>
            <Header />
            <NavBar/>
            <ItemListContainer greeting={"Bienvenidos a Meren-dar delicias glutten free"}/>
            <Carousel/>
            <Footer />
        </div>
    )
}

 export default App;
