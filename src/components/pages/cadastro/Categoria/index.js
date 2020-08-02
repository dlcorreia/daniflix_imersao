import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../PageDefault';

function CadastroCategoria () {
    return (
        <PageDefault>
            <h1>Cadastro de categoria</h1>

            <Link to="/">
                Voltar para home
            </Link>
        </PageDefault>
    )
}

export default CadastroCategoria;