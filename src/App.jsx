import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./layout";
import { Inicio } from "./pages/Inicio";
import { Sobre } from "./pages/Sobre";
import { Cursos } from "./pages/Cursos";
import { Linguagens } from "./pages/Linguagens";
import { Projetos } from "./pages/Projetos";
import { Page404 } from "./pages/Page404";
import { Curso } from "./pages/Curso";
import { PaginaSecreta } from "./pages/PaginaSecreta";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Inicio />} />
          <Route path="sobre" element={<Sobre />} />
          <Route path="cursos" element={<Cursos />} />
          <Route path="curso/:id?" element={<Curso />} />
          <Route path="linguagens" element={<Linguagens />} />
          <Route path="projetos" element={<Projetos />} />
          <Route path="secreta" element={<PaginaSecreta />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
