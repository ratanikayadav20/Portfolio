import React from "react";
import { Link } from "react-router-dom";

import "./project.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";

const Project = () => {
  const data = [
    {
      id: 1,
      image: IMG1,
      title: "TO-DO-List",
      github: "https://github.com/ratanikayadav20/todolist.",
    },
    {
      id: 2,
      image: IMG2,
      title: "Fruits",
      github: "https://github.com/ratanikayadav20/fruits",
    },
    {
      id: 3,
      image: IMG3,
      title: "NewsLetter",
      github: "https://github.com/ratanikayadav20/Newsletter",
    },
  ];
  return (
    <section id="projects">
      <h5>My Recent Projects</h5>
      <h2>Projects</h2>

      <div className="container project__container">
        {data.map(({ id, image, title, github }) => {
          return (
            <article className="project__item">
              <div className="project__image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="project__CTA">
                <Link to={github} className="btn" target="_blank">
                  Gitub
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Project;
