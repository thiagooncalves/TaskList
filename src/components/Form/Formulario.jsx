import { Button } from "../Button/button.style.js";
import { Input } from "../Input/input.style.js";
import { useFormik } from "formik";
import * as Yup from "yup";

export const schema = Yup.object().shape({
  titulo: Yup.string().required(),
  descricao: Yup.string().required(),
  filtro: Yup.string(),
});

export const Formulario = () => {
  const formik = useFormik({
    initialValues: {
      titulo: "",
      descricao: "",
      filtro: "",
    },
    validationSchema: Yup.object({
      titulo: Yup.string().required("ERROR"),
      descricao: Yup.string().required("ERROR"),
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
        <label htmlFor="criarTarefa">
          Criar tarefa
        </label>
        <Input id="titulo" type={"text"} name={"titulo"} placeholder="Título" />
        {formik.touched.titulo && formik.errors.titulo ? (
          <div>{formik.errors.titulo}</div>
        ) : null}

        <Input
          id="descricao"
          type={"text"}
          name={"descricao"}
          placeholder="Descrição"
        />
        {formik.touched.descricao && formik.errors.descricao ? (
          <div>{formik.errors.descricao}</div>
        ) : null}

        <Button>Adicionar</Button>

        <h4>Minhas tarefas</h4>
        <label htmlFor="filtro">Filtre:</label>
        <Input
          id="filtro"
          type={"text"}
          name={"filtro"}
          placeholder="Digite o nome da tarefa"
        />
        {formik.touched.filtro && formik.errors.filtro ? (
          <div>{formik.errors.filtro}</div>
        ) : null}
      </form>
    </div>
  );
};
