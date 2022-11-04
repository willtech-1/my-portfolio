//react icons
import { FaProjectDiagram, FaCodeBranch } from "react-icons/fa";
import { VscGitCompare } from "react-icons/vsc";

// skills page with a list of my technical skills
const Skills = () => {
  return (
    <>
      <div className="skills-section">
        <h1 className="skills-heading">
          Skills
        </h1>
        <div className="underline"></div>
        <div className="skills-container">
          <div className="skills-wrapper">
            <div className="technical-skills">
              {/* add an icon from react icons to show its an icons section */}
              <FaProjectDiagram className="skills-icon-1" />
              <header className="header">
                Frontend Skills
              </header>
              {/* underline header */}
              <p>HTML5</p>
              <p>CSS3</p>
              <p>JAVASCRIPT</p>
              <p>REACTJS</p>
              <p>NextJS</p>
            </div>

            <div className="skills">
              {/* add an icon from react icons to show its an icons section */}
              <FaCodeBranch className="skills-icon-1" />
              <header className="header">
                Backend Skills
              </header>
              {/* underline header */}

              <p>NODEJS</p>
              <p>EXPRESS</p>
              <p>MONGODB</p>
            </div>

            <div className="skills">
              {/* add an icon from react icons to show its an icons section */}
              <VscGitCompare className="skills-icon-1" />
              <header className="header">
                Other Skills and Tools
              </header>
              {/* underline header */}
              <p>STYLED COMPONENTS</p>
              <p>MATERIAL UI</p>
              <p>GITHUB</p>
              <p>VS CODE</p>

            </div>

          </div>
        </div>
      </div>

      {/* style jsx */}
      <style jsx>
        {`
                  .skills-section{
                    padding: 70px 0;   
                  }

                  .skills-heading{
                    text-align: center;
                    letter-spacing: 1.5px;
                    color: #01060F;
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


                  .skills-container{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                  }

                  .skills-wrapper{
                    display: flex;
                    justify-content: space-between;
                    padding: 2rem;
                    margin-top: 2.5rem;
                  }

                  .technical-skills{
                    margin: 1rem;
                    border-radius: 6px;
                    padding: 20px;
                    background-color: #fff;
                    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
                    width: 380px;
                  }
                  .technical-skills:hover{
                    transition: all 0.3s ease-out;
                    background: #7febf7;
                  }

                  .skills-icon-1{
                    font-size: 1.5rem;
                    text-align: center;
                    color: #1f494c;
                    margin-bottom: 1rem;
                  }

                  .header{
                    font-family: "Quicksand", sans-serif;
                    font-size: 1.15rem;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    font-weight: 600;
                    color: #1f494c;
                    text-align: center;
                  }

                  p{
                    margin-top: 1.25rem;
                    margin: 1rem;
                    font-size: 1rem;
                    font-weight: 600;
                    color: #32606e;
                  }

                  .skills{
                    margin: 1rem;
                    border-radius: 6px;
                    padding: 20px;
                    background-color: #fff;
                    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
                    width: 380px;
                  }

                  .skills:hover{
                    transition: all 0.3s ease-out;
                    background: #7febf7;
                  }
                  
            `}
      </style>
    </>

  )
}

export default Skills
