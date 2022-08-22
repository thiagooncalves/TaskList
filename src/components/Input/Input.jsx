import * as S from './input.style.js';

export const Input = () => {
    return (
        <S.Input>
            <div>
                <form>
                    <label>Criar Tarefa</label>
                    <input type="text" placeholder='Título'></input>
                    <input type="text" placeholder='Descrição'></input>
                    <input type="submit"></input>
                </form>
                <h4>Minhas tarefas</h4>
                <label>Filtre:</label>
                <input type="text" placeholder="Digite o nome da tarefa"></input>
            </div>
        </S.Input>
    )
}