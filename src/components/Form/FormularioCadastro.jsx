import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { useFormik } from "formik";
import * as Yup from "yup";

export const schema = Yup.object().shape({
  titulo: Yup.string().required(),
  descricao: Yup.string().required(),
});

export const FormularioCadastro = ({ labelTitle }) => {
  const formik = useFormik({
    initialValues: {
      titulo: '',
      descricao: '',
    },
    validationSchema: Yup.object({
      titulo: Yup.string().required(""),
      descricao: Yup.string().required(""),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="titulo">{labelTitle}</label>
        <Input
          type={"text"}
          name={"titulo"}
          placeholder={"Título"}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.titulo}
        />
        {formik.touched.titulo && formik.errors.titulo ? (
          <div>{formik.errors.titulo}</div>
        ) : null}

        <Input
          type={"text"}
          name={"descricao"}
          placeholder={"Descrição"}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.descricao}
        />
        {formik.touched.descricao && formik.errors.descricao ? (
          <div>{formik.errors.descricao}</div>
        ) : null}

        <Button buttonAdd={"Adicionar"} />
      </form>
    </div>
  );
};
