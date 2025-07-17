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
        <h1>Perdes muito tempo a pensar no que fazer para o almoço ou jantar?</h1>
        <p>
          Carne ou Peixe? Algo rápido? Tantas opções para escolher!
          Clica no botão abaixo!
        </p>
        
       <Link to="/randomizer" className="btn-sortear">
          Sortear Refeição
        </Link>
       
      </div>
    </div>
  );
}

export default Home;
