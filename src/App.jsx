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
  return (
    <div>

      <div>
        <Header div="DEV" div1="AIR" />
      </div>

      <Divmain>
        <Sidebar button="Home" button1="Ofertas e Destinos" button2="Minhas viagens" button3="Fale conosco" button4="Login" />
        <Div>
          <Formulario label="Criar Tarefa" button="Adicionar" h4="Minhas tarefas" label1="Filtre:" />
          <Table th="Tarefa" th1="Descrição" th2="Configurações" />
        </Div>
      </Divmain>

    </div>
  );
}

export default App;
