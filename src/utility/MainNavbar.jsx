import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const MainNavbar = () => {
  return (
    <Navbar expand="lg" className="bg-dark" variant="dark m-0">
      <Container>
        <Navbar.Brand><Link to='/' className="links">افلامي</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <Link to='/' className="links mx-2">قائمة الافلام</Link>
          <Link to='/watched' className="links mx-2">قائمة المشاهدة</Link>
          <Link to='/add' className="links mx-2 mainBtn">اضافة</Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavbar;
