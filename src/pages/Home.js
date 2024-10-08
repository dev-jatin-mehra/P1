import React from "react";
import GithubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, I am Jatin Singh Mehra</h2>
        <div className="prompt" > 
          <p>
            A Data Science Enthusiast with a passion for data driven solutions and insights
          </p>
          <a href="mailto:dev.jatin.singh@gmail.com"><EmailIcon/></a>
          <a href="https://github.com/dev-jatin-mehra"><GithubIcon/></a>
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Data Wrangling</h2>
            <span>Data Visualization, Data Preprocessing, 
              Data Extraction, Data Cleaning, 
              Data Profiling</span>
          </li>
          <li className="item">
            <h2>Tools&Technologies</h2>
            <span>Pandas, NumPy, Scikit-Learn, 
              Flask, HTML, CSS, Jinja, Tensorflow, 
              Matplotlib, Seaborn, Power BI</span>
          </li>
          <li className="item">
            <h2>ProgrammingLanguages</h2>
            <span>Python, C++, C, Java, JavaScript, SQL</span>
          </li>
          <li className="item">
            <h2>Platforms</h2>
            <span>PyCharm, Jupyter Notebooks, Google Collab,Git/GitHub</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
