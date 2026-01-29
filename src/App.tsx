import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import NavBar from "./components/ui/NavBar";

const App = () => {
  return (
    <div className="relative box-border transition-colors duration-800 ">
      <NavBar />
      <Home />
      <Projects />
      <About />
    </div>
  );
}

export default App;
