import * as S from './form.style.js';
import { Button } from '../Button/button.style.js';
import { Formik, Field, Form } from 'formik';

export const Formulario = () => {
    return (
            <Formik
        initialValues={{
            titulo: '',
            descricao: '',
            filtro: '',
        }}
        >
            <S.Formulario>
                <Form>
                    <label htmlFor='criarTarefa'>Criar tarefa</label>
                    <Field id='titulo' type={'text'} name={'titulo'} placeholder='Título' />
                    <Field id='descricao' type={'text'} name={'descricao'} placeholder='Descrição' />
                    <Button>Adicionar</Button>
                </Form>

                <h4>Minhas tarefas</h4>
                <Form>
                    <label htmlFor='filtro'>Filtre:</label>
                    <Field id='filtro' type={'text'} name={'filtro'} placeholder='Digite o nome da tarefa' />
                </Form>
            </S.Formulario>                  
            </Formik>
        )
    };