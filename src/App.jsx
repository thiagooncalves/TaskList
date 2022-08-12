import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Button } from "./components/Sidebar/Button";

function App() {
  return (
    <>
    <Header>
      <div>
        <a href="//www.google.com">
          <img
            src="../src/assets/logoaviao-header.png"
            alt="Avião logo"
          />
        </a>
      </div>
    </Header>
      
    <Sidebar>
        <a href='//www.google.com'><Button>Home</Button></a><b />
        <a href='//www.google.com'><Button>Ofertas e Destinos</Button></a><b />
        <a href='//www.google.com'><Button>Minhas viagens</Button></a><b />
        <a href='//www.google.com'><Button>Fale conosco</Button></a><b />
        <a href='//www.google.com'><Button>Fazer login</Button></a>
    </Sidebar>
    </>
  );
}

export default App;