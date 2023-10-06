import { Button, Card } from "react-bootstrap";
import { noImg, pathImg } from "../../utility/Variables";
import { useValue } from "../../context/ContextApi";
import * as actions from '../../context/ActionTypes';
const MovieWatchCard = ({ type, movie }) => {
  const movieContext = useValue();

  return (
      <Card className="bg-dark text-white watchCard m-2 p-0" style={{ width: "15rem" }}>
        {movie.poster_path ? (
        <Card.Img
          src={`${pathImg}${movie.poster_path}`}
        />
      ) : (
        <img src={noImg} alt="No Img" />
      )}
        <Card.ImgOverlay className="watchCardContent">
          <div className="d-flex justify-content-between flex-wrap h-100 align-items-end">
            {type === "watchList" ? (
              <>
                <Button onClick={() => movieContext.movieDispatch({
                  type: actions.ADD_MOVIE_TO_WATCHED,
                  payload: movie
                })} variant="primary">{`شاهدته`}</Button>
                <Button onClick={() => movieContext.movieDispatch({
                  type: actions.REMOVE_MOVIE_FROM_WATCHLIST,
                  payload: movie
                })} variant="primary">{`مسح`}</Button>
              </>
            ) : (
              <>
                <Button onClick={() => movieContext.movieDispatch({
                  type: actions.MOVE_TO_WATCHLIST,
                  payload: movie
                })} variant="primary">{`لم اشاهده`}</Button>
                <Button onClick={() => movieContext.movieDispatch({
                  type: actions.REMOVE_MOVIE_FROM_WATCHED,
                  payload: movie
                })} variant="primary">{`مسح`}</Button>
              </>
            )}
          </div>
        </Card.ImgOverlay>
      </Card>
  );
};

export default MovieWatchCard;
