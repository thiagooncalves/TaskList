import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Table } from "./components/Tabela/Table";
import { styled } from "./stitches.config"; // referente a <Div> que encapsula o <form> e <Table />.
import { Formulario } from "./components/Form/Formulario";

const Div = styled("div", {
  display: 'flex',
  flexDirection: 'column',
  marginLeft: 100,
  fontFamily: 'Exo',
});

function App() {
  return (
    <div>
        
      <div>
        <Header />
      </div>
        
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <Div>
          <Formulario />
          <Table />
        </Div> 
      </div>
        
    </div>
    );
}

export default App;