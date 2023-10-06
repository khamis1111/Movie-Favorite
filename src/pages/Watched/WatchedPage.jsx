import { Container, Row } from "react-bootstrap";
import SubTitle from "../../utility/SubTitle";
import MovieWatchCard from "../../components/Movies/MovieWatchCard";
import { useValue } from "../../context/ContextApi";

const WatchedPage = () => {
  const movieContext = useValue();

  return (
    <Container>
      <SubTitle title={`قائمة مشاهدتي`} length={movieContext.watched.length} />
      <Row>
        {movieContext.watched.map((m) => <MovieWatchCard type={`watched`} key={m.id} movie={m} />)}
      </Row>
    </Container>
  );
};

export default WatchedPage;
