import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import NabBar from "./components/ui/NabBar";

const App = () => {
  return (
    <div className="relative box-border">
      <NabBar />
      <Home />
      <Projects />
      <About/>
    </div>
  );
}

export default App;
