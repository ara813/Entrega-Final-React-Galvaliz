import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Destacados from './components/Destacados';
import Error404 from './components/Error404';

function App(){
    return (
        <div>
            <BrowserRouter>
            <NavBar/>
            <Header />
            <Routes>
            <Route path={"/"} element={ <ItemListContainer />}/>
            <Route path={"/category/:id"} element={<ItemListContainer/>}/>
            <Route path={"/item/:id"} element={<ItemDetailContainer/>} />
            <Route path={"/destacados"} element={<Destacados/>}/>
            <Route path={"/*"} element={<Error404/>}/>
            </Routes>
            <Footer />
            </BrowserRouter>
            
        </div>
    )
}

 export default App;
