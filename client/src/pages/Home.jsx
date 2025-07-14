import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <h1>Bem-vindo ao Meal Randomizer</h1>
      <p>Não sabes o que cozinhar? Clica abaixo para sortear uma refeição.</p>
      <Link to="/randomizer">
        <button>Sortear Refeição</button>
      </Link>
    </div>
  );
}

export default Home;
