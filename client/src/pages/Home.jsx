import './Home.css';
import { Link } from 'react-router-dom';
import ImageCarousel from '../components/ImageCarousel';

function Home() {
  return (
    <div className="home-container">
      <div className="home-image">
        <ImageCarousel />
      </div>
      <div className="home-text">
        <h1>Bem-vindo ao Meal Randomizer</h1>
        <p>Não sabes o que cozinhar? Clica abaixo para sortear uma refeição.</p>
        <Link to="/randomizer">
          <button>Sortear Refeição</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
