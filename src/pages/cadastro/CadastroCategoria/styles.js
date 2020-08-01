import styled from 'styled-components';

export const Form = styled.form`
    margin-top: 0px;
`

export const LabelsCadastro = styled.label`
    font-style: normal;
    font-size: 0.75em;
    padding: 5px;
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
    
`
export const TextArea = styled.textarea`
    rows: 10;
    padding: 5px;
    border-radius: 5px;
    background-color: var(--grayMedium);
    resize: none
`

export const InputText = styled.input`
    display: flex;
    flex-direction: column;
    background-color: var(--grayMedium);
    padding: 10px;
    border-radius: 5px;
    border: none;
`
export const InputColor = styled(InputText)`
    padding: 15px;
    width: 100%;
`
export const Text = styled.p`
    margin-bottom: 10px;
`
export const ButtonSalvar = styled.button`
    background-color: green;
    color: var(--white);
    width: 100px;
    padding: 15px;
    border: none;
    border-radius: 5px;
    margin-right: 20px;
    margin-bottom: 94px;

`
export const LimparButton = styled(ButtonSalvar)`
    background-color: var(--blackLighter);
    color: black;
        
`
export const ButtonHome = styled(ButtonSalvar)`
    width: 200px;
    padding: 10px;
    background-color: var(--backEnd);
    border-radius: 20px;
    color: white

`