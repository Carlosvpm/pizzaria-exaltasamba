import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import AddIcon from "@mui/icons-material/Add";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Row } from "./navbar.styles";

export const NavBar = () => {
  return (
    <>
      <Navbar key="xxl" bg="light" expand="xxl" className="mb-3">
        <Container fluid>
          <Navbar.Brand href="#">ExaltaPizza</Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-xxl" />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-xxl`}
            aria-labelledby={`offcanvasNavbarLabel-expand-xxl`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-xxl`}>
                Carrinho
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav>
                <Row>
                  <div>
                    <p> pizza tal</p>
                  </div>
                  <AddIcon></AddIcon>
                  <RemoveOutlinedIcon></RemoveOutlinedIcon>
                  <div></div>
                </Row>
                <Row>
                  <div>
                    <p> Subtotal</p>
                  </div>

                  <div>
                    <p>valor</p>
                  </div>
                </Row>
                <Row>
                  <div>
                    <p> Desconto</p>
                  </div>

                  <div>
                    <p>valor</p>
                  </div>
                </Row>
                <Row>
                  <div>
                    <p>TOTAL</p>
                  </div>

                  <div>
                    <p>VALOR</p>
                  </div>
                </Row>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};
