import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../PageDefault';
import useForm from '../../../../hooks/useForm';
import FormField from '../../../FormField';
import videosRepository from '../../../../repositories/videos';
import categoriasRepository from '../../../../repositories/categorias';

function CadastroVideo () {
    const history = useHistory();
    
    const [categorias, setCategorias] = useState([]);

    const categoryTitles = categorias.map(({ titulo }) => titulo);

    const { handleChange, values } = useForm({
        titulo: 'Video padrão',
        url: 'https://www.youtube.com/watch?v=-nYNd6EuZHU&feature=youtu.be',
        categoria: 'Front End',
    });

    useEffect(() => {
        categoriasRepository.getAll()
        .then((categorias) => {
            setCategorias(categorias);
        });
    }, []);

    console.log(categoryTitles);
    
    return (
        <PageDefault>
            <h1>Cadastro de vídeo</h1>

            <form onSubmit={(event) => {
                 event.preventDefault();

                 const categoriaEscolhida = categorias.find((categoria) => {
                     return categoria.titulo === values.categoria;
                 });

                 videosRepository.create({
                     titulo: values.titulo,
                     url: values.url,
                     categoriaId: 1,
                })
                .then(() => {
                    console.log('Cadastrou com sucesso');
                    history.push('/');
                });

            }}>  

                <FormField 
                    label="Titulo do Vídeo"
                    type="text"
                    name="titulo"
                    value={values.titulo}
                    onChange={handleChange}
                />
                <FormField 
                    label="URL"
                    type="text"
                    name="url"
                    value={values.url}
                    onChange={handleChange}
                />
                <FormField 
                    label="Categoria"
                    type="text"
                    name="categoria"
                    value={values.categoria}
                    onChange={handleChange}
                    suggestions={categoryTitles}
                />
                <button>
                    Cadastrar
                </button>
            </form>

            <Link to="/cadastro/categoria">
                Cadastrar Categoria
            </Link>
        </PageDefault>
    );
}

export default CadastroVideo;