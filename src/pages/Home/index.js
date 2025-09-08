import { useEffect, useState } from "react"; // ciclo de vida
import api from "../../services/api";
import { Link } from "react-router-dom";
import "./home.css"
// Base da URL: https://api.themoviedb.org/3/
// URL DA API: /movie/now_playing?api_key=...&language=pt-BR

function Home() {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadFilms() {
      const response = await api.get("movie/now_playing", {
        params: {
          api_key: "3e840a290175b3e1a43aab9d69e93710",
          language: "pt-BR",
          page: 1,
        },
      });

      //console.log(response.data.results);
      setFilmes(response.data.results.slice(0, 10)); // só 10 filmes
      setLoading(false)
    }

    loadFilms();
  }, []); // executa apenas a ação apenas uma vez



  if(loading){
    return(
      <div className="loading">
        <h2>Carregando Filmes.........</h2>
      </div>
    )
  }


  return(
    <div className="container">
      <div className="lista-filmes">
        {filmes.map((filme) => {
          return(
            <article key={filme.id}>
              <strong>{filme.title}</strong>
              <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
              <Link to={`/filme/${filme.id}`}>Acessar</Link>
            </article>
          )
        })}
      </div>
    </div>
  )
}

export default Home;
