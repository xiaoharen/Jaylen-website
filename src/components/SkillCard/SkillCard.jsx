import './SkillCard.css'
import BigSpace from "../BigSpace/BigSpace.jsx";
import Title from "./title.jsx";

function App() {
    return (
        <>
            <Title />
            <div className="xhr-card-01">
                <div className="cols">
                    <div className="col">
                        <div className="container">
                            <div className="front">
                                <div className="inner">
                                    <p>Java</p>
                                    <div className="progress-bar black stripes">
                                        <span style={{width: "70%"}}></span>
                                    </div>
                                </div>
                            </div>
                            <div className="back">
                                <div className="inner">
                                    <p>I developed some websites backend with Java(Springboot,MyBatis etc).</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="container">
                            <div className="front">
                                <div className="inner">
                                    <p>Python</p>
                                    <div className="progress-bar black stripes">
                                        <span style={{width: "70%"}}></span>
                                    </div>
                                </div>
                            </div>
                            <div className="back">
                                <div className="inner">
                                    <p>
                                        I have been conducting a year of scientific research and studying,
                                        engaged in research related to data mining and link prediction.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="container">
                            <div className="front">
                                <div className="inner">
                                    <p>Front-end</p>
                                    <div className="progress-bar black stripes">
                                        <span style={{width: "60%"}}></span>
                                    </div>
                                </div>
                            </div>
                            <div className="back">
                                <div className="inner">
                                    <p>I learned a little of HTML,CSS,JS,React etc.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="container">
                            <div className="front">
                                <div className="inner">
                                    <p>408</p>
                                    <div className="progress-bar black stripes">
                                        <span style={{width: "60%"}}></span>
                                    </div>
                                </div>
                            </div>
                            <div className="back">
                                <div className="inner">
                                    <p>Data structure,OS,CO,Computer network</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="container">
                            <div className="front">
                                <div className="inner">
                                    <p>C/C++</p>
                                    <div className="progress-bar black stripes">
                                        <span style={{width: "60%"}}></span>
                                    </div>
                                </div>
                            </div>
                            <div className="back">
                                <div className="inner">
                                    <p>For the graduate entrance examination,I uses C/C++ to do exercises on leetcode.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="container">
                            <div className="front">
                                <div className="inner">
                                    <p>PHP</p>
                                    <div className="progress-bar black stripes">
                                        <span style={{width: "40%"}}></span>
                                    </div>
                                </div>
                            </div>
                            <div className="back">
                                <div className="inner">
                                    <p>I developed the backend of Jaylen's Reading Wall by PHP.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="container">
                            <div className="front">
                                <div className="inner">
                                    <p>MySQL</p>
                                    <div className="progress-bar black stripes">
                                        <span style={{width: "40%"}}></span>
                                    </div>
                                </div>
                            </div>
                            <div className="back">
                                <div className="inner">
                                    <p>Usually,I used MySQL as the database of my websites.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="container">
                            <div className="front">
                                <div className="inner">
                                    <p>ElasticSearch</p>
                                    <div className="progress-bar black stripes">
                                        <span style={{width: "20%"}}></span>
                                    </div>
                                </div>
                            </div>
                            <div className="back">
                                <div className="inner">
                                    <p>I developed a integrated search api that using ElasticSearch by Java.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <BigSpace />
        </>
    )
}

export default App
