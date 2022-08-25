import * as S from './table.style.js';

export const Table = (props) => {
    return (
        <S.Table>
                <thead>
                    <tr>
                        <th>{props.th}</th>
                        <th>{props.th1}</th>
                        <th>{props.th2}</th>
                    </tr>
                </thead>    
        </S.Table>
    )
};