import "@fortawesome/fontawesome-free/css/all.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Listarticles from "./components/articles/Listarticles";
import Listcategories from "./components/categories/Listcategories";
import Insertarticles from "./components/articles/Insertarticles";
import Editarticle from "./components/articles/Editarticle";
import Viewarticle from "./components/articles/Viewarticle";
import Insertcategorie from "./components/categories/Insertcategorie";
import Editcategorie from "./components/categories/Editcategorie";
import Viewcategorie from "./components/categories/Viewcategorie";
import Listscategorie from "./components/scategories/Listscategorie";
import Insertscategorie from "./components/scategories/Insertscategorie";
import Editscategorie from "./components/scategories/Editscategorie";
import Viewscategorie from "./components/scategories/Viewscategorie";
import Menu from "./components/Menu";
import Listarticlecard from "./components/articles/Listarticlecard";
import Listcategoriecard from "./components/categories/Listcategoriecard";
import Listscategoriecard from "./components/scategories/Listscategoriecard";

function App() {


  return (
    <>
      <Router>
      <Menu/>
      <Routes>
        <Route path="/articles" exact element={<Listarticles/>}/>
        <Route path="/articles/add" element={<Insertarticles/>}/>
        <Route path="/articles/edit/:id" element={<Editarticle/>}/>
        <Route path="/article/view/:id" element={<Viewarticle/>}/>
        <Route path="/categories" exact element={<Listcategories/>}/>
        <Route path="/categories/add" element={<Insertcategorie/>}/>
        <Route path="/categories/edit/:id" element={<Editcategorie/>}/>
        <Route path="/categories/view/:id" element={<Viewcategorie/>}/>
        <Route path="/scategories" exact element={<Listscategorie/>}/>
        <Route path="/scategories/add" element={<Insertscategorie/>}/>
        <Route path="/scategories/edit/:id" element={<Editscategorie/>}/>
        <Route path="/scategories/view/:id" element={<Viewscategorie/>}/>

        <Route path="/" element={<Listarticlecard/>}/>
        <Route path="/cat" element={<Listcategoriecard/>}/>
        <Route path="/scat" element={<Listscategoriecard/>}/>
      </Routes>
      </Router>
    </>
  )
}
export default App
  