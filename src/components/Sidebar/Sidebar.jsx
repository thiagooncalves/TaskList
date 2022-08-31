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
        
        
        {/* <a href="//www.google.com">
          <button>{button1}</button>
        </a>
        <b />
        <a href="//www.google.com">
          <button>{button2}</button>
        </a>
        <b />
        <a href="//www.google.com">
          <button>{button3}</button>
        </a>
        <b />
        <a href="//www.google.com">
          <button>{button4}</button>
        </a>
        <b />
        <a href="//www.google.com">
          <button>{button5}</button>
        </a> */}
      </S.Sidebar>
  )
}