import React, { useEffect, useState } from 'react';
import PageDefault from '../../PageDefault';
import BannerMain from '../../BannerMain';
import Carousel from '../../Carousel';

// import dadosIniciais from '../../../data/dados_iniciais.json';
import categoriasRepository from '../../../repositories/categorias';


function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((categoriasComVideos) => {
        console.log(categoriasComVideos);
        setDadosIniciais(categoriasComVideos);
      })
      .catch((err) => {
        console.log(err.message)
      });
  }, []);

  return (
    <PageDefault paddingAll={0}>

      {dadosIniciais.length === 0 && (
        <div>Loading...</div>
      )}

      {dadosIniciais.map((categoria, indice) => {
        if (indice === 0 ) { 
          return (
            <div key={categoria.id}>
              <BannerMain 
                videoTitle={dadosIniciais[0].videos[0].titulo}
                url={dadosIniciais[0].videos[0].url}
                videoDescription={"O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"}
              />

              <Carousel 
                ignoreFirstVideo 
                category={dadosIniciais[0]}
              />
            </div>
          );
        }
        return (
          <Carousel 
            key={categoria.id}
            category={categoria}
          />
        );
      }) 
      }

    </PageDefault>
  );
}

export default Home;
