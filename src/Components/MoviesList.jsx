import React from "react";
import { Container } from "react-bootstrap";
import CardMovie from "./CardMovie";
import Paginate from "./Paginate";

const MoviesList = (props) => {
  return (
    <>
      <Container className="mt-4 d-flex align-items-center justify-content-center flex-wrap flex-column">
        <Container className="d-flex align-items-center justify-content-center flex-wrap mb-3">
          {props.movies.length === 0 ? (
            <h1 className="text-center fs-1">لا يوجد أفلام 🥱</h1>
          ) : (
            props.movies.map((mov) => <CardMovie mov={mov} key={mov.id} />)
          )}
        </Container>
        {props.movies.length > 1 ? (
          <Paginate
            GetPageData={props.GetPageData}
            pageCount={props.pageCount}
          />
        ) : null}
      </Container>
    </>
  );
};

export default MoviesList;
