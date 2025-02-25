import { useNavigate } from "react-router-dom";

export const Inicio = () => {
  const navegacao = useNavigate();
  return (
    <>
      <h1>Início</h1>
      <button
        onClick={() => {
          const senha = prompt("Digite a senha: ");
          if (senha === "123456") {
            navegacao("/secreta");
          } else {
            alert("Senha errada");
          }
        }}
      >
        Clique em mim
      </button>
    </>
  );
};
