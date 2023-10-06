const SubTitle = ({ title, length }) => {
  return (
    <div className="d-flex justify-content-between mt-3 mx-2">
      <h4>{title}</h4>
      <p className="movieTitle px-2 py-1">{`${length} ${length === 1 ? `فيلم` : `افلام`} `}</p>
    </div>
  );
};

export default SubTitle;
