import * as S from './sidebar.style.js';

export const Sidebar = () => {
  const links = ['Ofertas e Destinos', 'Home', 'Minhas Viagens', 'Fale Conosco', 'Login'];
  return (
    <S.Sidebar>
        <div>
          <ul>
            { links.map( (link) => <button key = { link.toString() }>{ link }</button> )}
          </ul>
        </div>
      </S.Sidebar>
  )
}