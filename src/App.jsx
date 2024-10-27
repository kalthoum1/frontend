import React from 'react'
import InsertArticle from './component/articles/InsertArticle'
import ListeArticle from './component/articles/ListeArticle'
import EditArticle from './component/articles/EditArticle'
import ViewArticle from './component/articles/ViewArticle'
import ListeCategorie from './component/categories/ListeCategorie'
import InsertCategorie from './component/categories/InsertCategorie'
import EditCategorie from './component/categories/EditCategorie'
import ViewCategorie from './component/categories/ViewCategorie'
import ListeScategorie from './component/sCategories/ListeScategorie'
import InsertScategorie from './component/sCategories/InsertScategorie'
import EditScategorie from './component/sCategories/EditScategorie'
import ViewScategorie from './component/sCategories/ViewScategorie'
import Menu from './component/Menu'
import "@fortawesome/fontawesome-free/css/all.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      Bienvenue dans notre site
      <Router>
        <Menu></Menu>
        <Routes>
          <Route path="/articles" element={<ListeArticle/>} />
          <Route path="/articles/add" element={<InsertArticle />} />
          <Route path="/article/edit/:id" element={<EditArticle />} />
          <Route path="/article/view/:id" element={<ViewArticle />} />
          <Route path="/categories" element={<ListeCategorie />} />
          <Route path="/categories/add" element={<InsertCategorie />} />
          <Route path="/categories/edit/:id" element={<EditCategorie />} />
          <Route path="/categories/view/:id" element={<ViewCategorie />} />
          <Route path="/scategories" element={<ListeScategorie />} />
          <Route path="/scategories/add" element={<InsertScategorie />} />
          <Route path="/scategories/edit/:id" element={<EditScategorie />} />
          <Route path="/scategories/view/:id" element={<ViewScategorie />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
