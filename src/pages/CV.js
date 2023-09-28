import photo from "../images/photo.svg";
import graduation from "../images/graduation-cap.svg";
import earth from "../images/earth-americas.svg";
import gears from "../images/gears.svg";
import person from "../images/person-circle-question.svg";
import gitHub from "../images/github.svg";
import codeWars from "../images/hand-holding-skull.svg";
import vk from "../images/vk.svg";
import phone from "../images/smartphone.svg";

function CV() {
  return (
    <div className="main">
      <header className="header">
        <div className="headerTitles">
          <div className="myName">Viktor</div>
          <div className="mySurname">Borodulin</div>
          <div className="specialization">Frontend Developer</div>
        </div>
        <div className="photoDiv">
          <img className="photo" src={photo} alt="myPhoto"></img>
        </div>
      </header>
      <body className="body">
        <div className="aboutMeDiv">
          <h1 className="leftHeading">RESUME INTRODUCTION</h1>
          <p className="aboutMeText">
            Hi, my name is Victor, I position myself as a frontend developer.
          </p>
          <h1 className="leftHeading">SKILLS</h1>
          <ul className="skillsText">
            <li>HTML</li>
            <li>CSS</li>
            <li>JAVASCRIPT</li>
            <li>REACT + REDUX</li>
            <li>GIT</li>
            <li>SQL</li>
          </ul>
        </div>
        <div className="rightContentDiv">
          <div className="rightContainer">
            <div className="iconsDiv">
              <img
                className="rightIcons"
                src={graduation}
                alt="graduation"
              ></img>
              <h1 className="rightHeading">EDUCATION</h1>
            </div>
            <h2 className="universityHeading">
              VITEBSK STATE TECHNOLOGICAL UNIVERSITY
            </h2>
            <ul className="rightListUl">
              2017-2021
              <li className="rightListLi">
                Information systems and technologies (in design and production)
              </li>
              2021-2023
              <li className="rightListLi">
                System analysis, management and information processing
              </li>
            </ul>
          </div>
          <div className="rightContainer">
            <div className="iconsDiv">
              <img className="rightIcons" src={gears} alt="gears"></img>
              <h1 className="rightHeading">EXPERIENCE</h1>
            </div>
            <h2 className="universityHeading">
              VITEBSK STATE TECHNOLOGICAL UNIVERSITY
            </h2>
            <ul className="rightListUl">
              December 2021 - present
              <li className="rightListLi">Software Developer</li>
            </ul>
          </div>
          <div className="rightContainer">
            <div className="iconsDiv">
              <img className="rightIcons" src={earth} alt="earth"></img>
              <h1 className="rightHeading">LANGUAGES</h1>
            </div>
            <ul className="rightListUl">
              <li className="rightListLi">Russian</li>
              <li className="rightListLi">English</li>
            </ul>
          </div>
          <div className="rightContainer">
            <div className="iconsDiv">
              <img className="rightIcons" src={person} alt="person"></img>
              <h1 className="rightHeading">LOOKING FOR</h1>
            </div>
            <ul className="rightListUl">
              <li className="rightListLi">
                Junior React.js Developer Position
              </li>
            </ul>
          </div>
        </div>
      </body>
      <footer className="footer">
        <div className="footerDiv">
          <img
            className="iconsFooter"
            src={gitHub}
            alt="gitHub"
            onClick={() => {
              document.getElementById("gitHub").click();
            }}
          ></img>
          <a
            id="gitHub"
            href="https://github.com/KVirB"
            target="blank"
            className="footerText"
          >
            GitHub
          </a>
        </div>
        <div className="footerDiv">
          <img
            className="iconsFooter"
            src={codeWars}
            alt="codeWars"
            onClick={() => {
              document.getElementById("codeWars").click();
            }}
          ></img>
          <a
            id="codeWars"
            href="https://www.codewars.com/users/KVirB"
            target="blank"
            className="footerText"
          >
            CodeWars
          </a>
        </div>
        <div className="footerDiv">
          <img
            className="iconsFooter"
            src={vk}
            alt="vk"
            onClick={() => {
              document.getElementById("vk").click();
            }}
          ></img>
          <a
            id="vk"
            href="https://vk.com/kvirb"
            target="blank"
            className="footerText"
          >
            VKontakte
          </a>
        </div>
        <div className="footerDiv">
          <img
            className="iconsFooter"
            src={phone}
            alt="phone"
            onClick={() => {
              document.getElementById("phone").click();
            }}
          ></img>
          <a
            id="phone"
            href="tel:+375292955897"
            target="blank"
            className="footerText"
          >
            +375 (29) 295-58-97
          </a>
        </div>
      </footer>
    </div>
  );
}

export default CV;
