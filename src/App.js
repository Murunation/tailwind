import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Offcanvas from "./components/subcomp/Offcanvas";

function App() {
  return (
    <div className="App">
      <Header />
      <p className="main-p">Lorem </p>
      <Offcanvas />
      <Footer />
    </div>
  );
}

export default App;
