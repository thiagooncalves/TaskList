import * as S from "./input.style.js";
import { useFormik } from "formik";

export const Input = ({ input }) => {
    const formik = useFormik({
        initialValues: {
            input: '',
        },
    })
    return (
    <S.Input
      type={"text"}
      name={"input"}
      id={"input"}
      value={""}
      onChange={formik.handleChange}
      onClick={input}
    >
    </S.Input>
  );
};
