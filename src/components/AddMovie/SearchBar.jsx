import { Form, InputGroup } from "react-bootstrap";

const SearchBar = ({getSearch}) => {
  return (
    <div>
      <InputGroup className="mb-3">
        <InputGroup.Text className="rounded" id="basic-addon1">ابحث</InputGroup.Text>
        <Form.Control
          placeholder="اسم الفيلم"
          aria-label="Movie Name"
          aria-describedby="basic-addon1"
          onChange={e => getSearch(e.target.value)}
        />
      </InputGroup>
    </div>
  );
};

export default SearchBar;
