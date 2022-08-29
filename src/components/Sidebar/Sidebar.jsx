import * as S from './sidebar.style.js';

export const Sidebar = ({ button1, button2, button3, button4, button5 }) => {
  return (
    <S.Sidebar>
        <a href="//www.google.com">
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
        </a>
      </S.Sidebar>
  )
}