import React, {useState } from 'react'
import PageDefault from '../../../PageDefault'
import { Link } from 'react-router-dom'
import { Form, LabelsCadastro, InputText, ButtonSalvar, LimparButton, InputColor, TextArea, ButtonHome } from './styles.js'

export default function CadastroCategoria({children}) {
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '#000'
    }
    
    const [categorias, setCategorias] = useState(['Teste']);
    const [values, setValues] = useState(valoresIniciais)
    
    const setValue = (chave, valor) => {
        setValues({
            ...values, 
            [chave]: valor
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setCategorias([...categorias, values])
    }

    const handleChange = (e) => {
        setValue(e.target.getAttribute('name'), e.target.value)
    }

    return (
        <PageDefault>
            <h1>Nova Categoria</h1>
            <Link to="/">
                <ButtonHome>Voltar para Home</ButtonHome>
            </Link>
            <Form onSubmit={(e) => {handleSubmit(e)}}>
                <LabelsCadastro>
                    <p>Nome da categoria: {values.nome}</p>
                    <InputText type='text' name="nome" onChange={handleChange} value={values.nome}></InputText>
                </LabelsCadastro>

                <LabelsCadastro>
                    <p>Descreva a categoria</p>
                    <TextArea type="text" name="descricao" value={values.descricao} onChange={handleChange}></TextArea>
                </LabelsCadastro>
                <LabelsCadastro>
                    <p>Cor</p>
                    <InputColor type="color" name="cor" value="#000000" onChange={handleChange}></InputColor>
                </LabelsCadastro>
                <LabelsCadastro>
                    <p>Código de segurança</p>
                    <InputText type="password"></InputText>
                </LabelsCadastro>
                <ButtonSalvar>
                    Salvar
                </ButtonSalvar>
                <LimparButton>
                    Limpar
                </LimparButton>
            </Form>
        </PageDefault>
    )
}
