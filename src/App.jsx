import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Table } from "./components/Tabela/Table";
import { FormularioCadastro } from "./components/Form/FormularioCadastro";
import { FormularioFiltro } from "./components/Form/FormularioFiltro";
import { Div, Divmain } from "../src/App.style";

function App() {
  const tableData = {
    head: [
      { titleHead: "Tarefa" },
      { titleHead: "Descrição" },
      { titleHead: "Configurações" },
    ],
    body: [{}],
  };

  const addTask = () => {
    return <></>;
  };

  const filterTask = () => {
    return <></>;
  };

  return (
    <div>
      <div>
        <Header title="DEV" subtitle="AIR" />
      </div>

      <Divmain>
        <Sidebar />
        <Div>
          <FormularioCadastro
            labelTitle="Criar Tarefa"
            buttonAdd="Adicionar"
            submit={addTask}
          />
          <FormularioFiltro
            labelFilter="Filtre"
            titleTable="Minhas tarefas"
            submit={filterTask}
          />
          <Table head={tableData.head} body={tableData.body} />
        </Div>
      </Divmain>
    </div>
  );
}

export default App;
