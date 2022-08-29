import * as S from './header.style.js';

export const Header = ({ title1, title2 }) => {
  return (
  <S.Header>
          <div>
            <div>{title1}</div>
            <a href="//www.google.com">
              <img src="../src/assets/logoaviao-header.png" alt="Avião logo" />
            </a>
            <div>{title2}</div>
          </div>
  </S.Header>
  )
}

