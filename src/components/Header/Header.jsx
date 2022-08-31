import * as S from './header.style.js';

export const Header = ({ title, subtitle }) => {
  return (
  <S.Header>
          <div>
            <div>{title}</div>
            <a href="//www.google.com">
              <img src="../src/assets/logoaviao-header.png" alt="Avião logo" />
            </a>
            <div>{subtitle}</div>
          </div>
  </S.Header>
  )
}

