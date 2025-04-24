// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
// import { VideoCV } from "./components/VideoCV";
import { Certificates } from "./components/Certificates";
// import { Education } from "./components/Education";

// Inside your return statement:

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Certificates />
      {/* <Education /> */}
      {/* <VideoCV /> */}
      <Contact />
      <Footer />


    </div>
  );
}

export default App;
