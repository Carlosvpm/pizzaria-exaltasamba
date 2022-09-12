import Container from "react-bootstrap/Container";
import AddIcon from "@mui/icons-material/Add";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Column, NavContainer, Row } from "./navbar.styles";
import { PizzaInterface } from "../../models/Pizza.interface";

type NavBarProps = {
  carrinho: PizzaInterface[];
};

export const NavBar = (props: NavBarProps) => {
  return (
    <NavContainer>
      <Navbar bg="light" expand="true" className="mb-3">
        <Container fluid>
          <Navbar.Brand href="#">ExaltaPizza</Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-xxl" />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-xxl"
            aria-labelledby="offcanvasNavbarLabel-expand-xxl"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-xxl">
                Carrinho
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav>
                <Column>
                  {props.carrinho.map((pizza: PizzaInterface) => {
                    <Row>
                      <div>
                        <p>
                          {pizza.name}({pizza.size})
                        </p>
                      </div>
                      <AddIcon></AddIcon>
                      <RemoveOutlinedIcon></RemoveOutlinedIcon>
                    </Row>;
                  })}
                  <Row>
                    <div>
                      <p>Subtotal</p>
                    </div>
                    <div>
                      <p>R$ 0.00</p>
                    </div>
                  </Row>
                  <Row>
                    <div>
                      <p>Desconto</p>
                    </div>
                    <div>
                      <p>R$ 0.00</p>
                    </div>
                  </Row>
                  <Row>
                    <div>
                      <p>TOTAL</p>
                    </div>
                    <div>
                      <p>R$ 0.00</p>
                    </div>
                  </Row>
                </Column>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </NavContainer>
  );
};
