import React, { useState } from "react";
import SearchBar from "../../components/AddMovie/SearchBar";
import { Col, Container, Row } from "react-bootstrap";
import MovieCard from "../../components/Movies/MovieCard";
import axios from "axios";

const AddMoviePage = () => {
  const [movie, setMovie] = useState([]);
  const getSearch = (word) => {
    if (word !== "") {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?query=${word}&language=ar&page=1&api_key=31be55e0e9f07cfbdaa40102bf2d6e62`
        )
        .then((res) => {
          setMovie(res.data.results);
        });
    } else {
      setMovie([]);
    }
  };
  return (
    <Container>
      <Row className="d-flex justify-content-center mt-3">
        <Col sm="6">
          <SearchBar getSearch={getSearch} />
          {movie.length > 0 ? (
            movie.map((m) => <MovieCard key={m.id} movie={m} />)
          ) : (
            <h2 className="text-muted text-center">
              <b>{`لا يوجد افلام !`}</b>
            </h2>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default AddMoviePage;
