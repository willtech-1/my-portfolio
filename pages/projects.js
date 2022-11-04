import { AiFillEye } from "react-icons/ai";
import { VscLiveShare } from "react-icons/vsc";
import Link from "next/link";
// import image from next
import Image from 'next/image';
// images from static folder
import image1 from "../static/assests/auto-setters.png";
import image2 from "../static/assests/itunes1.jpg";
import image3 from "../static/assests/memory-game.png";
import image4 from "../static/assests/shopping-cart.png";

// projects component you can view linked projects live and view github code
const Projects = () => {
    return (
        <>
            <div className="project-section">
                <h1 className="projects-heading">Featured Projects</h1>
                <div className="underline"></div>
                <div className="project-container">
                    <div className="project-wrapper">
                        <div className="first-project">
                            <Link href="https://mighty-coast-92790.herokuapp.com/" target="_blank">
                                <Image className="project-img" src={image2} alt="itunes" />
                            </Link>

                            <p className="desc">
                                Search for Songs, Music videos, Audio books, Podcast etc.
                            </p>
                            <div className="tech-stack">
                                <p>HTML5</p>
                                <p>CSS3</p>
                                <p>JAVASCRIPT</p>
                                <p>REACT</p>
                                <p>iTUNES SEARCH API</p>
                            </div>
                            <div className="project-buttons">
                                <Link
                                    className="live"
                                    href="https://mighty-coast-92790.herokuapp.com/"
                                    target="_blank"
                                >
                                    <div className="project-live">
                                        <AiFillEye /> LIVE
                                    </div>
                                </Link>
                                <Link
                                    className="code"
                                    href="https://github.com/willtech-1/iTunes"
                                    target="_blank"
                                >
                                    <div className="project-code">
                                        <VscLiveShare /> CODE
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div className="second-project">
                            <Link href="https://auto-setters.netlify.app/" target="_blank" >
                                <Image className="project-img" src={image1} alt="auto setters" />
                            </Link>
                            <header>Auto-Setters Dealership</header>
                            <p className="desc">
                                Filter using car prices, brands, and model.
                            </p>
                            <div className="tech-stack">
                                <p>HTML5</p>
                                <p>CSS3</p>
                                <p>JAVASCRIPT</p>
                                <p>REACT</p>
                                <p>CONTENTFUL HEADLESS CMS</p>
                            </div>
                            <div className="project-buttons">
                                <Link
                                    className="live"
                                    href="https://auto-setters.netlify.app/"
                                    target="_blank"
                                >
                                    <div className="project-live">
                                        <AiFillEye /> LIVE
                                    </div>
                                </Link>
                                <Link
                                    className="code"
                                    href="https://github.com/willtech-1/auto-setters"
                                    target="_blank"
                                >
                                    <div className="project-code">
                                        <VscLiveShare /> CODE
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div className="third-project">
                            <Link href="https://boiling-wave-51166.herokuapp.com/" target="_blank">
                                <Image className="project-img" src={image3} alt="game" />
                            </Link>
                            <header>Memory Game</header>
                            <p className="desc">
                                Find eight matching images under 20 seconds.
                            </p>
                            <div className="tech-stack">
                                <p>HTML5</p>
                                <p>CSS3</p>
                                <p>JAVASCRIPT</p>
                                <p>REACT</p>
                            </div>
                            <div className="project-buttons">
                                <Link
                                    className="live"
                                    href="https://boiling-wave-51166.herokuapp.com/"
                                    target="_blank"
                                >
                                    <div className="project-live">
                                        <AiFillEye /> LIVE
                                    </div>
                                </Link>
                                <Link
                                    className="code"
                                    href="https://github.com/willtech-1/memory-game"
                                    target="_blank"
                                >
                                    <div className="project-code">
                                        <VscLiveShare /> CODE
                                    </div>
                                </Link>
                            </div>
                        </div>


                        <div className="fourth-project">
                            <Link href="https://willtech-cart.netlify.app/" target="_blank">
                                <Image className="project-img" src={image4} alt="shopping cart" />
                            </Link>
                            <header>Shopping Cart</header>
                            <p className="desc">
                                Online store made easy for users to buy products at their own time and comfort.
                            </p>
                            <div className="tech-stack">
                                <p>HTML5</p>
                                <p>CSS3</p>
                                <p>JAVASCRIPT</p>
                            </div>
                            <div className="project-buttons">
                                <Link
                                    className="live"
                                    href="https://willtech-cart.netlify.app/"
                                    target="_blank"
                                >
                                    <div className="project-live">
                                        <AiFillEye /> LIVE
                                    </div>
                                </Link>
                                <Link
                                    className="code"
                                    href="https://github.com/willtech-1/online-store"
                                    target="_blank"
                                >
                                    <div className="project-code">
                                        <VscLiveShare /> CODE
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* style jsx */}
            <style>
                {`
                  .project-section{
                    padding: 70px 0;
                    overflow-x: hidden;
                  }

                  .projects-heading{
                    text-align: center
                    letter-spacing: 1px;
                    position: relative;
                    left: 550px;
                  }

                  .underline{
                    width: 3.5rem;
                    height: 0.25rem;
                    background: #32606e;
                    margin-top: 0.75rem;
                    margin-left: auto;
                    margin-right: auto;
                    position: relative;
                    bottom: 10px;
                  }

                  .project-container{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                  }

                  .project-wrapper{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    flex-direction: column;
                    padding: 2rem;
                    margin-top: 2.5rem;
                  }

                  header{
                    text-align: center;
                    margin-bottom: 2rem;
                    color: #1d2c2e;
                    margin-bottom: 24px;
                    margin-top: 1rem;
                    font-size: 1.25rem;
                    letter-spacing: 0.5px;
                    line-height: 1.1;
                  }

                  .desc{
                    text-align: center;
                    margin-bottom: 2rem;
                    color: #1d2c2e;
                    margin-bottom: 24px;
                    margin-top: 1rem;
                    font-size: 1.25rem;
                    letter-spacing: 0.5px;
                    line-height: 1.1;
                  }

                  .tech-stack{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-top: 1rem;
                  }

                  p{
                    padding: 6px 6px;
                    font-size: 1rem;
                    color: #32606e;
                    background: #fff;
                    border-radius: 4px;
                    max-width: 100%;
                    margin: 0.5rem;
                  }

                  .project-buttons{
                    margin-top: 1rem;
                    padding: 6px 6px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                  }
                  
                  .live{
                    border-radius: 4px;
                    background: #2BB0BF;
                    white-space: nowrap;
                    padding: 12px 64px;
                    color: #e7eaea;
                    font-size: 20px;
                    border: none;
                    outline: none;
                    cursor: pointer;
                    margin: 0.5rem;
                  }

                  .live:hover{
                    transition: all 0.3s ease-out;
                    background: #0a1516;
                    color: #7febf7;
                  }

                  .code {
                    border-radius: 4px;
                    background: #7febf7;
                    white-space: nowrap;
                    padding: 12px 64px;
                    color: #0a1516;
                    font-size: 20px;
                    border: none;
                    outline: none;
                    cursor: pointer;
                    margin: 0.5rem;
                  }

                  .code:hover{
                    transition: all 0.3s ease-out;
                    background: #0a1516;
                    color: #7febf7;
                  }

                  .project-live{
                    color: #fff;
                    font-size: 1.25rem;
                  }
                  .code-live{
                    color: #32606e;
                    font-size: 1.25rem;
                  }

                  .project-img{
                    width: 800px;
                    height: 400px;
                    object-fit: cover;
                    border-radius: 4px;
                  }

                `}
            </style>
        </>
    )
}

export default Projects