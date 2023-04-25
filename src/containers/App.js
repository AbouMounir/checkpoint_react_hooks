import { useState } from 'react';
import MovieCard from '../../../checkpoint_react_hooks/src/components/MovieCard';
import './App.css'

function App() {
  const [Films, setFilms] = useState(
    [
      {
        id : 1,
        title : "You Don't Have to Like It, Start Doing It" ,
        description : "This video and the content it features are for educational and informational purposes only.",
        postURL :"https://www.youtube.com/embed/A1cCfvWq818",
        logoURL : "https://yt3.googleusercontent.com/OUAgA0AKemwbWIhflZPf6STQg8g7TncYAjxmqQ7ms3j4FWCJi_76xYEMOsA8_WS79iSpXuu8hA=s176-c-k-c0x00ffffff-no-rj",
        rating : "",
      },
      {
        id : 2 ,
        title : "How to Become Financially independent" ,
        description : "if you keep doing it the next six years will be like the last six you don't want that to happen let's make the changes so learn from your personal experience and it's easy to become financially independent with a good plan. " ,
        postURL : "https://www.youtube.com/embed/KK7achegObc" ,
        logoURL : "https://yt3.ggpht.com/sF8W0LgXGHoRzQymSYeFufSD3iDLz5ibxUuGgv7_k7BoI_tbx9bsghBJevbuNxzk1ar8cHrAkZY=s48-c-k-c0x00ffffff-no-rj",
        rating : "",
      },
      {
        id : 3 ,
        title : "The Key Habits of High Achievers" ,
        description : "In this video, we explore the key habits of high achievers according to Jim Rohn's teachings.",
        postURL : "https://www.youtube.com/embed/vpDpH_Fjpxw" ,
        logoURL : "https://yt3.googleusercontent.com/XOwvyCNkgNCEHiPqFynXYOZydc_r7vWsY1udsCyI2J1jrl7tUGSU_TerOszggNGAjKgC583CbA=s176-c-k-c0x00ffffff-no-rj",
        rating : "",
      },
      {
        id : 4,
        title : "ARRÊTEZ LE TEMPS DE GASPILLAGE" ,
        description :"Arrêter de perdre du temps! Ceci est une puissante vidéo de motivation sur les raisons pour lesquelles vous devez cesser de tergiverser et commencer à utiliser votre temps à bon escient." ,
        postURL : "https://www.youtube.com/embed/z3FA2kALScU" ,
        logoURL : "https://yt3.googleusercontent.com/ytc/AGIKgqOsZ5tKm1_a5egrW3FbeGhJO3t9hw-xz8UiNCyc1A=s176-c-k-c0x00ffffff-no-rj",
        rating : "" ,
      },
      {
        id : 5,
        title : "FOCUS ON YOURSELF NOT OTHERS" ,
        description :"Starting early is the best way of getting ahead to build wealth. Most times, it amazes me greatly how I moved from an average lifestyle to earning over $83k per month." ,
        postURL : "https://www.youtube.com/embed/eBSeCp__xhI" ,
        logoURL : "https://yt3.ggpht.com/ytc/AGIKgqNwUPS4g_fI0S8G49F6t18Pquvc9NlJWFBaCgdd1w=s48-c-k-c0x00ffffff-no-rj",
        rating : "" ,
      }
    ]
  )

  const [filter, setFilter] = useState("")

  const handleFilter = (event) =>{
    setFilter(event.target.value)
  }
  return (
    <div className="App">
      <div className='box-from'>
        <input type="text" placeholder="Rechercher " className="from-control" onChange={handleFilter} />
      </div>
      <div className='boxMovies'>
        {Films.filter((film) => { return film.title.toLowerCase().includes(filter)}).map((filme) => {
          return (<MovieCard key={filme.id} film={filme} />)
        })}
      </div>
    </div>
  );
}

export default App;
