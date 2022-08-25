import * as S from './sidebar.style.js';

export const Sidebar = (props) => {
  return (
    <S.Sidebar>
        <a href="//www.google.com">
          <button>{props.button}</button>
        </a>
        <b />
        <a href="//www.google.com">
          <button>{props.button1}</button>
        </a>
        <b />
        <a href="//www.google.com">
          <button>{props.button2}</button>
        </a>
        <b />
        <a href="//www.google.com">
          <button>{props.button3}</button>
        </a>
        <b />
        <a href="//www.google.com">
          <button>{props.button4}</button>
        </a>
      </S.Sidebar>
  )
}