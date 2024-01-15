import './App.css'
import Intro from "./components/intro/Intro.jsx";
import BookList01 from "./components/reading/book/bookList01.jsx";
import SkillCard from "./components/SkillCard/SkillCard.jsx";

function App() {
  return (
    <>
        <Intro />
        <SkillCard/>
        <BookList01 />
    </>
  )
}

export default App
