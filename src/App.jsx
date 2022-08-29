import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Table } from "./components/Tabela/Table";
import { styled } from "./stitches.config"; // referente as <Div> e <Divmain>.
import { Formulario } from "./components/Form/Formulario";

const Divmain = styled("div", {
  display: "flex",
});

const Div = styled("div", {
  display: "flex",
  flexDirection: "column",
  marginLeft: 100,
  fontFamily: "Exo",
});

function App() {
  const tableData = {
    head: [
      { label: "Tarefa" },
      { label: "Descrição" },
      { label: "Configurações" },
    ],
    body: [{}]
  };

  const addTask = () => {
    return <></>
  };

  const filterTask = () => {
    return <></>
  };

  return (
    <div>
      <div>
        <Header
        title1="DEV"
        title2="AIR" 
        />
      </div>

      <Divmain>
        <Sidebar
          button1="Ofertas e Destinos"
          button2="Home"
          button3="Minhas viagens"
          button4="Fale conosco"
          button5="Login"
        />
        <Div>
        <Formulario
            label="Criar Tarefa"
            button="Adicionar"
            submit={addTask}
          />
          <Formulario
            label="Filtre"
            h4="Minhas tarefas"
            submit={filterTask}
          />
          <Table head={tableData.head} body={tableData.body} />
        </Div>
      </Divmain>
    </div>
  );
}

export default App;
