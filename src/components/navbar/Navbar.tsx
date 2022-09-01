import Container from "react-bootstrap/Container";
import AddIcon from "@mui/icons-material/Add";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavContainer, Row } from "./navbar.styles";
import { carrinho } from "../../services/carrinho";
import { PizzaInterface } from "../../models/Pizza.interface";

export const NavBar = () => {

  const arrayPizzas: PizzaInterface[] = carrinho
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
              <>
                {arrayPizzas.map((pizza: PizzaInterface) => {
                  <Row>
                    <div>
                      <p>
                        {pizza.name}({pizza.size})
                      </p>
                    </div>
                    <AddIcon></AddIcon>
                    <RemoveOutlinedIcon></RemoveOutlinedIcon>
                    <div></div>
                  </Row>;
                })}

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
              </>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </NavContainer>
  );
};
