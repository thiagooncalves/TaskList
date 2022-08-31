import * as S from "./table.style.js";

export const Table = ({ titleHeadTable }) => {
  const rows = 1;
  const cols = 3;
  const linhas = Array.from(Array(rows).keys());
  const colunas = Array.from(Array(cols).keys());

  return (
    <S.Table>
      <div>
        <table>
          <tbody>
            {linhas.map((linha) => (
              <tr key={linha}>
                {colunas.map((coluna) => (
                  <td key={coluna}>{titleHeadTable}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </S.Table>
  );
};
