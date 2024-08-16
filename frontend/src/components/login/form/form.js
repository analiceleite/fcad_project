import React, { useState } from "react";
import { NavbarTraining, NavbarTrainingItem, Underline } from "../../../containers/trainings/trainingList/styles.js";
import * as S from './styles.js';

const Form = () => {
    const [itemActive, setItemActive] = useState(0)

    return (
        <S.FormContainer>
            <NavbarTraining>
                <ul>
                    <NavbarTrainingItem
                        onClick={() => { setItemActive(0) }}
                    >
                        Entrar
                    </NavbarTrainingItem>
                    <NavbarTrainingItem
                        onClick={() => { setItemActive(1) }}
                    >
                        Cadastrar-se
                    </NavbarTrainingItem>
                    <Underline active={itemActive} scenario="login"></Underline>
                </ul>
            </NavbarTraining>
            <S.Form>
                <S.FormGroup>
                    <S.Label>Email:</S.Label>
                    <S.Input type="email" required />
                </S.FormGroup>
                <S.FormGroup>
                    <S.Label>Senha:</S.Label>
                    <S.Input type="password" required />
                </S.FormGroup>
                <S.Button type="submit">Entrar</S.Button>
            </S.Form>
        </S.FormContainer>
    );
};

export default Form;
