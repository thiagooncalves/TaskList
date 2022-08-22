import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Table } from "./components/Tabela/Table";
import { styled } from "./stitches.config"; // referente a <Div> que encapsula o <form> e <Table />.
import { Input } from "./components/Input/Input";
// import { Button } from "./components/Button/Button";

const Div = styled("div", {
  display: 'flex',
})

function App() {
  return (
    <div>
        
      <div>
        <Header />
      </div>
        
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <Div>
          <Input />
          <Table />
        </Div> 
      </div>
        
    </div>
    );
}

export default App;