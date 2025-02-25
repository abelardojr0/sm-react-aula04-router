import { Link } from "react-router-dom";
import { cursosDeProgramacao } from "../../mocks/cursos";

export const Cursos = () => {
  return (
    <>
      <h2>Cursos</h2>
      <ul>
        {cursosDeProgramacao &&
          cursosDeProgramacao.map((element) => (
            <li>
              <Link to={`/curso/${element.id}`}>{element.nome}</Link>
            </li>
          ))}
      </ul>
    </>
  );
};
