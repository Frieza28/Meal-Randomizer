import './About.css';

function About() {
  return (
    <div className="about-container">
      <div className="about-text">
        <h1>Um Pequeno Projeto para Aprender e Ajudar</h1>
        <p>
            Desde sempre que ouço "Ah, não sei o que fazer para o jantar" e é verdade, perde-se muito tempo a decidir o que cozinhar num universo com tantas opções.
            Este website nasceu para resolver isso de forma simples e rápida.
        </p>

        <p>
            A aplicação utiliza uma base de dados JSON com várias refeições, permitindo escolher uma delas aleatóriamente através do "Modo Surpresa".
            Caso o utilizador queira personalizar mais a escolha, pode usar o "Modo Lista" para introduzir as suas próprias opções e escolher uma delas.
            Por fim, temos o "Modo Lista", onde o utilizador pode aplicar filtros (tipo de refeição, tempo, categoria, etc.) para encontrar a refeição ideal.
        </p>

        <p>
            O site ainda tem muito espaço para crescer! Planeio integrar receitas detalhadas para cada prato, permitir a criação de utilizadores com a 
            opção de submeterem novas refeições, e até adicionar novos modos, como uma roleta interativa.
        </p>

        <p>  
            Este projeto foi criado não só para ajudar no dia a dia, mas também para aproveitar o verão e evoluir as competências adquiridas na universidade, 
            além de aprender novas tecnologias, como o React, que utilizei pela primeira vez aqui.
        </p>
      </div>
    </div>
  );
}

export default About;
