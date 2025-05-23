import About from "./components/About/about";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/navbar";
import Projects from "./components/Projects/projects";

function App() {
  return (
    <div className="bg-gradient-to-r from-blue-400 to-purple-600 h-auto w-full overflow-hidden">
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}
export default App;