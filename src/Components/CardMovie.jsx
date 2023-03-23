import React from "react";
import { Card, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const CardMovie = ({ mov }) => {
  return (
    <>
      <Col md={4} lg={3} className="p-2 col-6">
        <NavLink to={`movie/${mov.id}`}>
          <Card
            style={{
              borderRadius: "15px",
              height: "375px",
            }}
            className="col-card"
          >
            <img
              src={`https://image.tmdb.org/t/p/original/${mov.poster_path}`}
              alt={mov.original_title}
              style={{ height: "100%", width: "100%", borderRadius: "15px" }}
            />
            <Card.ImgOverlay className="card-hover">
              <p>اسم الفيلم: {mov.original_title}</p>
              <p>تاريخ الاصدار: {mov.release_date}</p>
              <p>عدد المقيمون: {mov.vote_count}</p>
              <p>التقييم: {mov.vote_average}</p>
            </Card.ImgOverlay>
          </Card>
        </NavLink>
      </Col>
    </>
  );
};

export default CardMovie;
