import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Table } from "./components/Tabela/Table";

function App() {
  return (
    <div>
        
      <div>
        <Header />
      </div>
        
      <div style={{display: "flex"}}>
        <Sidebar />
        <Table />
      </div>
        
    </div>
    );
}

export default App;