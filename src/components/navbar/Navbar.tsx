import { PizzaInterface } from "../../models/Pizza.interface";
import { NavbarItems } from "./navbar.styles";

interface NavbarProps {
  pizzas: PizzaInterface[];
}
export const Navbar = (props: NavbarProps) => {
  return (
    <NavbarItems>
      <h1>Carrinho</h1>
      <ul>
        {props.pizzas.map((pizza) => {
          return (
            <li>
              <p>{pizza.name}</p>
              <p>{pizza.price}</p>
            </li>
          );
        })}
      </ul>
    </NavbarItems>
  );
};
