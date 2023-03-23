import React, { useEffect, useState } from "react";
import { Button, Col, Container } from "react-bootstrap";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const params = useParams();
  const nav = useNavigate();
  const GetMovieDetails = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${params.id}?api_key=704e2fc65e0a6a2108352d2a56772002&language=ar`
    );
    setMovie(res.data);
  };
  useEffect(() => {
    GetMovieDetails();
  }, []);
  console.log(movie);
  return (
    <>
      {Object.keys(movie).length === 0 ? (
        <h1 className="text-center mt-5">لا يوجد تفاصيل للفيلم 😌</h1>
      ) : (
        <Container className="mt-4 d-flex justify-content-center align-items-center flex-column">
          <Col
            className="d-flex col-12 details-media "
            style={{
              backgroundColor: "#eee",
              // height: "200px",
              borderRadius: "15px",
            }}
          >
            <Col className="d-flex">
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt="ss"
                style={{ width: "300px", height: "100%", borderRadius: "15px" }}
              />
            </Col>
            <Col
              className="d-flex justify-content-center align-items-center m-4"
              style={{ flex: "2" }}
            >
              <div className="col-content w-100">
                <p>اسم الفيلم: {movie.original_title}</p>
                <p>تاريخ الاصدار: {movie.release_date}</p>
                <p>عدد المقيمون: {movie.vote_count}</p>
                <p>التقييم: {movie.vote_average}</p>
              </div>
            </Col>
          </Col>
          <Col
            className="col-12 mt-3"
            style={{
              backgroundColor: "#eee",
              minHeight: "200px",
              borderRadius: "15px",
            }}
          >
            <h2 className="m-3">القصة:</h2>
            {movie.overview !== "" ? (
              <h4 className="m-3 text-center" style={{ lineHeight: "1.5" }}>
                {movie.overview}
              </h4>
            ) : (
              <h2 className="m-3 text-center">لا يوجد قصة 😌</h2>
            )}
          </Col>
          <Col className="m-3">
            <Button
              className="ms-2 p-2"
              style={{
                fontSize: "20px",
                backgroundColor: "rgb(188, 97, 50)",
                color: "white",
                border: "0",
              }}
              onClick={() => nav("/")}
            >
              عوده الرئيسية
            </Button>
            {/* <a href={movie.homepage}> */}
            <Button
              className="ms-2 p-2"
              style={{
                fontSize: "20px",
                backgroundColor: "rgb(188, 97, 50)",
                color: "white",
                border: "0",
              }}
            >
              مشاهدة الفيلم
            </Button>
            {/* </a> */}
          </Col>
        </Container>
      )}
    </>
  );
};

export default MovieDetails;
