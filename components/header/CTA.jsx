import React from "react";
import Resume from "../../assets/resume_ratanika.pdf";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <div className="cta">
      <a href={Resume} className="btn" download>
        Download Resume
      </a>
      <Link to="/contact" className="btn btn-primary">
        Lets Talk
      </Link>
    </div>
  );
};

export default CTA;
