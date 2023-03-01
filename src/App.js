import Navbar from "./component/navbar"
import Home from "./component/home"
import About from "./component/about"
import Qualification from "./component/qualification/Index"
import Project from "./component/project"
import Contact from "./component/contact"
import Footer from "./component/footer"

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Qualification />
      <Project />
      <Contact />
      <Footer />
    </>
  )
}