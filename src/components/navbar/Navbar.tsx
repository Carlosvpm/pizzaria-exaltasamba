import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import {
  Column,
  ContainerFinalizeButton,
  NavContainer,
  Row,
} from "./navbar.styles";
import { FinalizeorderButton } from "../finalize-order-button/finalize-order-button";
import { useCart } from "react-use-cart";
import { Button, Stack } from "react-bootstrap";

type NavBarProps = {
  desconto: number;
};

export const NavBar = (props: NavBarProps) => {
  const {
    isEmpty,
    totalItems,
    items,
    updateItemQuantity,
    removeItem,
    emptyCart,
    totalUniqueItems,
    cartTotal,
  } = useCart();

  const desconto = props.desconto ? props.desconto : 0.0;

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
                  <>
                    <div className="w-100 pb-3">
                      <Button
                        className="w-100 "
                        variant="danger"
                        onClick={() => emptyCart()}
                      >
                        Limpar carrinho
                      </Button>
                    </div>

                    {items.map((pizza, index) => {
                      return (
                        <Card body className="m-1">
                          {pizza.name} - {pizza.size}
                          <Stack direction="horizontal" gap={4}>
                            <div className="bg-light">
                              <Button
                                variant="secondary"
                                onClick={() =>
                                  updateItemQuantity(
                                    pizza.id,
                                    Number(pizza.quantity) + 1
                                  )
                                }
                                size="sm"
                              >
                                +
                              </Button>
                            </div>
                            <div className="bg-light border ">
                              {pizza.quantity}
                            </div>
                            <div className="bg-light">
                              <Button
                                variant="secondary"
                                onClick={() => {
                                  updateItemQuantity(
                                    pizza.id,
                                    Number(pizza.quantity) - 1
                                  );
                                }}
                                size="sm"
                              >
                                -
                              </Button>
                            </div>
                            <div className="bg-light">R$ {pizza.price}</div>
                          </Stack>
                        </Card>
                      );
                    })}
                    <Row>
                      <div>
                        <p>Total de pizzas</p>
                      </div>
                      <div>
                        <p>{totalItems}</p>
                      </div>
                    </Row>
                    <Row>
                      <div>
                        <p>Subtotal</p>
                      </div>
                      <div>
                        <p>R$ {cartTotal}</p>
                      </div>
                    </Row>
                    <Row>
                      <div>
                        <p>Desconto</p>
                      </div>
                      <div>
                        <p>R$ {desconto}</p>
                      </div>
                    </Row>
                    <Row>
                      <div>
                        <p>TOTAL</p>
                      </div>
                      <div>
                        <p>R$ {cartTotal - desconto}</p>
                      </div>
                    </Row>
                    <ContainerFinalizeButton>
                      <FinalizeorderButton></FinalizeorderButton>
                    </ContainerFinalizeButton>
                  </>
                </Column>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </NavContainer>
  );
};
