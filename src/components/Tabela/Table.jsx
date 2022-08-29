import * as S from "./table.style.js";

export const Table = ({ head, body }) => {
  return (
    <S.Table>
      <thead>
        <tr>
          {head.map((item) => {
            return <th>{item}</th>;
          })}
        </tr>
      </thead>
      
      <tbody>
        {body.map((item) => {
          return (
            <tr>
              
            </tr>
          );
        })}
      </tbody>
    </S.Table>
  );
};
