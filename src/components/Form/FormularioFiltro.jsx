import { Input } from "../Input/Input";
import { useFormik } from "formik";
import * as Yup from "yup";

export const schema = Yup.object().shape({
    filtro: Yup.string(),
  });

  export const FormularioFiltro = ({ labelFilter, titleTable }) => {
    const formik = useFormik({
      initialValues: {
        filtro: '',
      },
      validationSchema: Yup.object({
        filtro: Yup.string(),
        // faltam as condições de filtragem
      }),
      onSubmit: values => {
        alert(JSON.stringify(values, null, 2));
      },
    });
    return (
        <div>
            <form>
            <h4>{titleTable}</h4>
        <label htmlFor="filtro">{labelFilter}</label>
        <Input
          type={"text"}
          name={"filtro"}
          placeholder={"Digite o nome da tarefa"}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.filtro}
        />
        {formik.touched.filtro && formik.errors.filtro ? (
          <div>{formik.errors.filtro}</div>
        ) : null}
            </form>
        </div>
    );
};