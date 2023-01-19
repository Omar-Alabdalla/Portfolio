/* eslint-disable jsx-a11y/alt-text */
import Col from "react-bootstrap/Col";

import "./Card.scss";

export const ProjectCard = ({ title, description, imgUrl, imgLink }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <a href={imgLink} target="_blank" rel="noreferrer">
        <div className="proj-imgbx">
          <img src={imgUrl} />

          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </a>
    </Col>
  );
};
