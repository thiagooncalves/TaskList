import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { useFormik } from "formik";
import * as Yup from "yup";

export const schema = Yup.object().shape({
  titulo: Yup.string().required(),
  descricao: Yup.string().required(),
  filtro: Yup.string(),
});

export const Formulario = ({ label, h4 }) => {
  const formik = useFormik({
    initialValues: {
      titulo: '',
      descricao: '',
      filtro: '',
    },
    validationSchema: Yup.object({
      titulo: Yup.string().required(""),
      descricao: Yup.string().required(""),
      filtro: Yup.string(),
      // faltam as condições de filtragem
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="titulo">{label}</label>
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

        <Button label={"Adicionar"} />

        <h4>{h4}</h4>
        <label htmlFor="filtro">{label}</label>
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
