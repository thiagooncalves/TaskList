import { Button } from "../Button/button.style.js";
import { Input } from "../Input/input.style.js";
import { useFormik } from "formik";
import * as Yup from "yup";

export const schema = Yup.object().shape({
  titulo: Yup.string().required(),
  descricao: Yup.string().required(),
  filtro: Yup.string(),
});

export const Formulario = (props) => {
  const formik = useFormik({
    initialValues: {
      titulo: "",
      descricao: "",
      filtro: "",
    },
    validationSchema: Yup.object({
      titulo: Yup.string().required(""),
      descricao: Yup.string().required(""),
      filtro: Yup.string(),
      // faltam as condições de filtragem
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="criarTarefa">{props.label}</label>
        <Input
          type={"text"}
          name={"titulo"}
          placeholder={"Título"}
        />
        {formik.touched.titulo && formik.errors.titulo ? (
          <div>{formik.errors.titulo}</div>
        ) : null}

        <Input
          type={"text"}
          name={"descricao"}
          placeholder={"Descrição"}
        />
        {formik.touched.descricao && formik.errors.descricao ? (
          <div>{formik.errors.descricao}</div>
        ) : null}

        <Button>{props.button}</Button>

        <h4>{props.h4}</h4>
        <label htmlFor="filtro">{props.label1}</label>
        <Input
          type={"text"}
          name={"filtro"}
          placeholder={"Digite o nome da tarefa"}
        />
        {formik.touched.filtro && formik.errors.filtro ? (
          <div>{formik.errors.filtro}</div>
        ) : null}
      </form>
    </div>
  );
};
