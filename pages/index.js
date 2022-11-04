import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link";
//import react icons
import {
  FaTwitterSquare,
  FaGithubSquare,
  FaLinkedin,
  FaFacebookSquare,
} from "react-icons/fa";
import img from "../static/assests/app.svg";

export default function Home() {
  const imgContainer = {
    maxWidth: '555px',
    display: 'flex',
    justifyContent: "flex-start",
    position: 'relative',
    left: '750px',
    bottom: '680px'
  }

  const image = {
    maxWidth: '100%',
    verticalAlign: 'middle',
    display: 'inline-block',
    maxHeight: '500px',
  }

  const faIcon = {
    fontSize: '2rem'
  }
  return (
    <div>
      <Head>
        <title>Portfolio</title>
      </Head>

      <div className='cover'>
        <div className='row'>
          <div className='column'>
            <div className='textWrapper'>
              <span className="topLine-text">Hi,</span>
              <h1 className='heading'>I'm Aphile</h1>
             
                <p className="subtitle">
                  I am Full-stack developer with experience in front-end development using
                  technologies such as HTML, CSS, Bootstrap, Javascript and React. Backend technologies I have experience working with are NodeJS, ExpressJS and MongoDB. I enjoy
                  designing and building different web applications from scratch using
                  different web technologies.
                </p>
             

              <div className="btn-container">
                <span className="btn-wrapper">
                  <Link href="/contact">
                    <button className="btn-contact">Contact</button>
                  </Link>
                </span>
              </div>

              <div className="icons-container">
                <Link href="https://github.com/willtech-1">
                  <FaGithubSquare style={faIcon} />
                </Link>

                <Link href="https://www.linkedin.com/in/aphilentando">
                  <FaLinkedin style={faIcon} />
                </Link>

                <Link href="https://twitter.com">
                  <FaTwitterSquare style={faIcon} />
                </Link>

                <Link href="https://facebook.com/">
                  <FaFacebookSquare style={faIcon} />
                </Link>

              </div>

              <div className="text-container">
                <p>HTML</p>
                <p>CSS</p>
                <p>JAVASCRIPT</p>
                <p>REACTJS</p>
              </div>

              <div className="text-container2">
                <p>NEXTJS</p>
                <p>NODEJS</p>
                <p>EXPRESSJS</p>
                <p>MONGODB</p>
              </div>

              <div style={imgContainer}>
                <Image style={image} src={img} alt="full stack developer" />
              </div>

            </div>
          </div>
        </div>
      </div>


      {/* style */}
      <style jsx>
        {`

        .cover{
          padding: 70px 0px;
          overflow-x: hidden;
        };

        .heading{
          color: #01060F;
        }
        
        .row {
          display: flex;
          margin: 0px -15px -15px --15px;
          flex-wrap: wrap;
          align-items: center;
          flex-direction: row;
        };
        
        .column {
          margin-bottom: 15px;
          padding-right: 15px;
          padding-left: 15px;
          flex: 1,
          max-width: 50%;
          flex-basis: 50%;
        };
        
        .textWrapper{
          max-width: 540px;
          padding-top:0px;
          padding-bottom: 60px;
        }

          .topLine-text {
            color: #5E5E5E;
            font-size: 24px;
            line-height: 16px;
            letter-spacing: 1.4px;
            margin-bottom: 16px;
            position: relative;
            left: 10px;
          }
            
            .subtitle{
            max-width: 440px;
            margin-bottom: 35px;
            font-size: 18px;
            line-height: 24px;
            margin-left: 10px
            }

            .btn-container {
            display: flex;
            margin-top: 1rem;
            }  
            

            .btn-contact {
              border-radius: 4px;
              background: #2BB0BF;
              white-space: nowrap;
              padding: 12px 64px;
              color: #fff;
              font-size: 20px;
              border: none;
              outline: none;
              cursor: pointer;
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

            .icons-container{
              display: flex;
              margin-top: 2rem;
            }

            .heading{
              font-size: 3rem;
              position: relative;
              left: 10px;
            }

            .text-container{
            display: flex;
            padding: 12px
          }

          .text-container > p{
              padding: 6px;
              font-size: 1rem;
              background: #e6e6e6;
              margin: 1rem;
              border-radius: 4px;
              position: relative;
              right: 20px;
              
          }
            .text-container2{
            display: flex;
            padding: 12px
            
          }

          .text-container2 > p{
              padding: 6px;
              font-size: 1rem;
              background: #e6e6e6;
              margin: 1rem;
              border-radius: 4px;
              position: relative;
              right: 20px;
          }
        `}
      </style>;
    </div>
  )
}
