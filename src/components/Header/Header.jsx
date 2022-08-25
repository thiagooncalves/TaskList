import * as S from './header.style.js';

export const Header = (props) => {
  return (
  <S.Header>
          <div>
            <div>{props.div}</div>
            <a href="//www.google.com">
              <img src="../src/assets/logoaviao-header.png" alt="Avião logo" />
            </a>
            <div>{props.div1}</div>
          </div>
  </S.Header>
  )
}

