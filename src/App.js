import './App.css';
import Banner from './Components/Banner';
import Bar from './Components/Bar';
import Row from './Components/Row';
import requests from './requests';

function App() {
  return (
   
    <div className="App">
    <Bar/>
    <Banner FetchUrl={requests.fetchNetflixOriginals} />
    <Row isPoster={true} title="Netflix Originals" FetchUrl={requests.fetchNetflixOriginals} />
    <Row title="Trending in Movies" FetchUrl={requests.fetchTrending} />
    <Row title="TopRated " FetchUrl={requests.fetchTopRated} />
    <Row title="Action Movies" FetchUrl={requests.fetchActionMovies} />
    <Row title="Comedy Movies" FetchUrl={requests.fetchComedyMovies} />
    <Row title="Horror Movies" FetchUrl={requests.fetchHorrorMovies} />
    <Row title="Romance Movies" FetchUrl={requests.fetchRomanceMovies} />
    <Row title="Documentaries" FetchUrl={requests.fetchDocumentaries} />



    </div>
  );
}

export default App;
