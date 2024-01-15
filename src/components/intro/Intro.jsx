import './Intro.css'
import BigSpace from "../BigSpace/BigSpace.jsx";

function App() {
    return (
        <>
            <div id="intro">
                <div id="content">
                    <h1 id="nombre">Jaylen Foo</h1>
                    <br/><br/>
                    <div id="logo">
                        <img className="xhr"
                             src="https://xiaoharen.github.io/blog/_media/logo.svg"
                             alt="logo"/>
                    </div>
                </div>
                <h2>
                    Hi! Welcome to my personal space.
                </h2>
                <h2>
                    I'm Jaylen. A student who enjoys programming.
                </h2>
                <h2>
                    I created this website to integrate the web technologies I have learned.
                </h2>
            </div>
            <BigSpace />
        </>
    )
}

export default App
