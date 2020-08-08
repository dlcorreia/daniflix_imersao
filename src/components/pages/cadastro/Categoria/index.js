import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../PageDefault';
import FormField from '../../../FormField';
import useForm from '../../../../hooks/useForm';
import categoriasRepository from '../../../../repositories/categorias';


function CadastroCategoria () {
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '',
    }
    const { handleChange, values, clearForm } = useForm(valoresIniciais);
    
    const [categorias, setCategorias] = useState([]);
    
    useEffect(() => {
        categoriasRepository.getAll()
        .then((categoriasRetornadas) => {
            setCategorias([...categoriasRetornadas]);
        })
    }, 
    []);

    return (
        <PageDefault>
            <h1>Cadastro de categoria: 
                {values.titulo}
            </h1>

            <form onSubmit={(event) => {
                event.preventDefault();
                setCategorias([
                    ...categorias,
                    values
                ]);
                clearForm(valoresIniciais);
            }}>
                <FormField 
                    label="Nome da Categoria"
                    type="text"
                    name="titulo"
                    value={values.titulo}
                    onChange={handleChange}
                />

                <FormField 
                    label="Descrição"
                    type="textarea"
                    name="descricao"
                    value={values.descricao}
                    onChange={handleChange}
                />

                <FormField 
                    label="Cor"
                    type="color"
                    name="cor"
                    value={values.cor}
                    onChange={handleChange}
                />

                <button>
                    Cadastrar
                </button>
            </form>

            <ul>
                {categorias.map((categoria, indice) => {
                    return (
                        <li key={`${categoria.titulo}`}>
                            {categoria.titulo}
                        </li>
                    )
                })}
            </ul>

            <Link to="/">
                Voltar para home
            </Link>
        </PageDefault>
    )
}

export default CadastroCategoria;