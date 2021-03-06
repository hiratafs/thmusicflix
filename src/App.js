import React, {useState, useEffect} from 'react';
import Menu from './components/Menu'
import BannerMain from './components/BannerMain'
import Carousel from './components/Carousel'
import Footer from './components/Footer'
import data from './data/dados_iniciais.json'

function App() {
  const [content] = useState(data);
  const [categories, setCategories] = useState([])


  useEffect(() => {
    const getresults = () =>{
      
      let result = content.categorias.map(category => {
        const {titulo, cor, link, link_extra, videos} = category;
        return {
          titulo,
          cor,
          link,
          link_extra,
          videos
        }
        
      })
      setCategories(result)
    }
    getresults()
  }, [])
  
 
  return (
    <div className="App">
      <Menu />
      <BannerMain url={'https://www.youtube.com/watch?v=wRMkOY9OrbU'} 
      videoDescription={"Written by Shiro Sagisu, Hideaki Anno & Mike Wyzgowski"}
      videoTitle={ "Platina Jazz - Come, Sweet Death [Komm, süsser Tod] (from ”Neon Genesis Evangelion”)"}/>
     {categories.map((category, id) => {
       return <Carousel key={id} category={category} /> 
     })}
     
      <Footer />
    </div>
  );
}

export default App;
