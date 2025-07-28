import './About.css';

function About() {
  return (
    <div className="about-container">
      <div className="about-text">
        <h1>Um Pequeno Projeto para Aprender e Ajudar</h1>
        <p>
            Desde sempre que ouço <i>"Ah, não sei o que fazer para o jantar"</i> e é verdade, perde-se muito tempo a decidir o que cozinhar num universo com tantas opções.
            Este website nasceu para resolver isso de forma simples e rápida.
        </p>

        <p>
            A aplicação utiliza uma base de dados <strong>MongoDB</strong> (anteriormente era através de um JSON file) com várias refeições, permitindo escolher uma delas aleatóriamente através do <strong>"Modo Surpresa"</strong>.
            Caso o utilizador queira personalizar mais a escolha, pode usar o <strong>"Modo Lista"</strong> para introduzir as suas próprias opções e escolher uma delas.
            Por fim, temos o <strong>"Modo Lista"</strong>, onde o utilizador pode aplicar filtros (tipo de refeição, tempo, categoria, etc.) para encontrar a refeição ideal.
        </p>

        <p>
            O site ainda tem muito espaço para crescer! Planeio integrar <strong>receitas detalhadas</strong> para cada prato, permitir a <strong>criação de utilizadores</strong> com a 
            opção de submeterem novas refeições, e até adicionar <strong>novos modos</strong>, como uma roleta interativa.
        </p>

        <p>  
            Este projeto foi criado não só para ajudar no dia a dia, mas também para aproveitar o verão e <strong>evoluir as competências</strong> adquiridas na universidade, 
            além de aprender novas tecnologias, como o <strong>React</strong>, que utilizei pela primeira vez aqui.
        </p>
      </div>
    </div>
  );
}

export default About;
