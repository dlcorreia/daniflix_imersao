import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../PageDefault';
import FormField from '../../../FormField';

function CadastroCategoria () {
    const [categorias, setCategorias] = useState(['Teste']);

    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '',
    }
    const [values, setValues] = useState(valoresIniciais);

    function setValue(key, value) {
        setValues({
            ...values,
            [key]: value,
        })
    }

    function handleChange(event) {
        setValue(
            event.target.getAttribute('name'), 
            event.target.value);
    }

    useEffect(() => {
        const URL = 'http://localhost:8080/categorias/';
        fetch(URL)
        .then((response) => {
            return response.json();
        })
        .then((convertedResponse) => {
            console.log(convertedResponse);
        })
    }, 
    []);

    return (
        <PageDefault>
            <h1>Cadastro de categoria: {values.nome}</h1>

            <form onSubmit={(event) => {
                event.preventDefault();
                setCategorias([
                    ...categorias,
                    values.nome
                ]);
                setValues(valoresIniciais);
            }}>
                <FormField 
                    label="Nome da Categoria"
                    type="text"
                    name="nome"
                    value={values.nome}
                    onChange={handleChange}
                />

                <FormField 
                    label="Descrição"
                    type="textarea"
                    name="descricao"
                    value={values.descricao}
                    onChange={handleChange}
                />
                {/* <div>
                    <label>
                        Descrição:
                        <textarea 
                        type="text"
                        name="descricao"
                        value={values.descricao}
                        onChange={handleChange} 
                        />
                    </label>
                </div> */}

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
                        <li key={`${categoria}${indice}`}>
                            {categoria}
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