import { styled } from "@stitches/react";
import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Table } from "./components/Tabela/Table";

const Div = styled("div", {
  display: 'flex',
})

function App() {
  return (
    <div>
        
      <div>
        <Header />
      </div>
        
      <div>
        <Div>
          <Sidebar />
          <Table />
        </Div>
      </div>
        
    </div>
    );
}

export default App;