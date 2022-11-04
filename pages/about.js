//import next.js link api
import Link from "next/link";
//import react icons
import {
    FaTwitterSquare,
    FaGithubSquare,
    FaLinkedin,
    FaFacebookSquare,
} from "react-icons/fa";
import image from "../static/assests/code.svg"
// import image from next
import Image from 'next/image'

// About component describes my passion and some of my favourite resources for learning web development 
const About = () => {

    const aboutIcon = {
        color: '#1d2c2e',
        fontSize: '3rem',
        margin: '0.8rem',
    }

    const imgContainer = {
        maxWidth: '555px',
        display: 'flex',
        position: 'relative',
        right: '800px',
        bottom: '519px'
    }

    const img = {
        paddingRight: '0',
        border: '0',
        maxWidth: '100%',
        verticalAlign: 'middle',
        display: 'inline-block',
        maxHeight: '500px',
    }

    return (
        <>
            <div className='cover'>
                <h1 className="about-title">About Me</h1>
                <div className="underline"></div>
                <div className='column'>
                    <div className='textWrapper'>
                        <p className="subtitle">
                            I have a passion for solving problems using technology and creating
                            different complex web applications. Some of my favourite resources
                            for learning are HyperionDev, MDN Web Docs and freeCodeCamp.
                        </p>

                        <div className="btn-container">
                            <div className="btn-wrapper">
                                <Link href="/contact">
                                    <button className="btn-contact">Contact</button>
                                </Link>

                                <div className="resume-btn">
                                    <a href="../static/assests/Aphile's-CV.pdf" download="Aphile's.CV.pdf">
                                        <button className="btn-resume">Resume</button>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="icons-container">
                            <Link href="https://github.com/willtech-1">
                                <FaGithubSquare style={aboutIcon} />
                            </Link>

                            <div>
                                <Link href="https://www.linkedin.com/in/aphilentando">
                                    <FaLinkedin style={aboutIcon} />
                                </Link>
                            </div>

                            <div>
                                <Link href="https://twitter.com">
                                    <FaTwitterSquare style={aboutIcon} />
                                </Link>
                            </div>

                            <div>
                                <Link href="https://facebook.com/">
                                    <FaFacebookSquare style={aboutIcon} />
                                </Link>
                            </div>
                        </div>

                        <div className="text-wrapper">
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>JAVASCRIPT</p>
                            <p>REACTJS</p>
                        </div>

                        <div className="text-wrapper2">
                            <p>NEXTJS</p>
                            <p>NODEJS</p>
                            <p>EXPRESSJS</p>
                            <p>MONGODB</p>
                        </div>

                        <div style={imgContainer}>
                            <Image style={img} src={image} alt="web developer" />
                        </div>

                    </div>
                </div>
            </div>

            {/* jsx style */}
            <style jsx>
                {`
                    .cover{
                        padding: 70px 0px;
                        display: flex;
                        align-items: center;
                        justify-content: flex-end;
                    }

                    .about-title{
                        position: relative;
                        bottom: 500px;
                        left: 600px;
                        letter-spacing: 1px;
                        color: #01060F;
                    }

                    .underline{
                        width: 4.2rem;
                        height: 0.25rem;
                        background: #32606e;
                        margin-top: 0.75rem;
                        margin-left: auto;
                        margin-right: auto;
                        position: relative;
                        bottom: 470px;
                        left: 190px;
                    }

                    .textWrapper {
                        max-width: 540px;
                        padding-top: 0px;
                        padding-bottom: 60px;
                        position: relative;
                        top: 100px;
                    }

                    .subtitle{
                        max-width: 440px;
                        margin-bottom: 35px;
                        font-size: 18px;
                        line-height: 24px;
                        color: #5E5E5E"
                    }

                    .btn-container{
                        display: flex;
                        margin-top: 1rem;
                        position: relative;
                        right: 24px;
                    } 

                    .btn-wrapper{
                      display: flex;
                    } 

                    .btn-contact{
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

                    .btn-contact:hover{
                        transition: all 0.3s ease-out;
                        background: #0a1516;
                        color: #7febf7;
                      }

                    .resume-btn{
                        display: flex;
                        display: block;
                    }

                    .btn-resume{
                        border-radius: 4px;
                        background: #0a1516;
                        white-space: nowrap;
                        padding: 12px 64px;
                        color: #7febf7;
                        font-size: 20px;
                        border: none;
                        outline: none;
                        cursor: pointer;
                        margin: 0.5rem;
                    }

                    .btn-resume:hover{
                        transition: all 0.3s ease-out;
                        background: #2BB0BF;
                        color: #e7eaea;
                      }
    

                    .icons-container{
                        display: flex;
                        margin-top: 1rem;
                    }
                    .text-wrapper{
                        display: flex;
                    }

                    .text-wrapper > p{
                        padding: 6px;
                        font-size: 1rem;
                        background: #e6e6e6;
                        margin: 1rem;
                        border-radius: 4px;
                    }
                  
                    .text-wrapper2{
                        display: flex;
                    }

                    .text-wrapper2 > p{
                        padding: 6px;
                        font-size: 1rem;
                        background: #e6e6e6;
                        margin: 1rem;
                        border-radius: 4px;
                        position: relative;
                        right: 20px;
                    }   

                    .img{
                        width: 500px
                    }
                `}
            </style>;

        </>
    )
}

export default About