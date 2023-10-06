import { Container, Row } from "react-bootstrap";
import SubTitle from "../../utility/SubTitle";
import MovieWatchCard from "../../components/Movies/MovieWatchCard";
import { useValue } from "../../context/ContextApi";

const WatchListpage = () => {
  const movieContext = useValue();
  return (
    <div>
      <Container>
        <SubTitle title={`قائمة افلامي`} length={movieContext.watchList.length} />
        <Row>
          {movieContext.watchList.map((m) => <MovieWatchCard type={`watchList`} key={m.id} movie={m} />)}
        </Row>
      </Container>
    </div>
  );
};

export default WatchListpage;
