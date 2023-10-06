import { Button, Card } from "react-bootstrap";
import { noImg, pathImg } from "../../utility/Variables";
import { useValue } from "../../context/ContextApi";
import * as actions from "../../context/ActionTypes";

const MovieCard = ({ movie }) => {
  const movieContext = useValue();

  const storeWatchList = movieContext.watchList.find((m) => m.id === movie.id);
  const storeWatched = movieContext.watched.find((m) => m.id === movie.id);

  const watchListDisable = storeWatchList ? true : storeWatched ? true : false;
  const watchedDisable = storeWatched ? true : false;

  return (
    <Card className="d-flex flex-row my-2">
      {movie.poster_path ? (
        <Card.Img
          style={{ width: "10rem" }}
          src={`${pathImg}${movie.poster_path}`}
        />
      ) : (
        <img src={noImg} width={200} alt="No Img" />
      )}

      <Card.Body>
        {movie.original_title !== movie.title && (
          <Card.Title>{movie.original_title}</Card.Title>
        )}
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.release_date}</Card.Text>
        <Card.Text>{`${movie.overview.slice(0, 250)}...`}</Card.Text>
        <div className="d-flex justify-content-between flex-wrap">
          <Button
            className="mb-2"
            onClick={() =>
              movieContext.movieDispatch({
                type: actions.ADD_MOVIE_TO_WATCHLIST,
                payload: movie,
              })
            }
            variant="primary"
            disabled={watchListDisable}
          >{`اضافة لقائمة الافلام`}</Button>
          <Button
            className="mb-2"
            onClick={() =>
              movieContext.movieDispatch({
                type: actions.ADD_MOVIE_TO_WATCHED,
                payload: movie,
              })
            }
            variant="primary"
            disabled={watchedDisable}
          >{`اضافة لقائمة المشاهدة`}</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
