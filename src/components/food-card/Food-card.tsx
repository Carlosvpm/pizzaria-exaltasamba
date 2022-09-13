import { PizzaInterface } from "../../models/Pizza.interface";

import {
  PizzaContainer,
  PizzaiItemDesc,
  PizzaItem,
  PizzaItemAdd,
  PizzaItemIMG,
  PizzaItemName,
  PizzaItemPrice,
} from "./food-card.styles";
import pizzas from "../../data/pizzas-data";
import { useCart } from "react-use-cart";


export const FoodCard = () => {

  const { addItem } = useCart();
  return (
    <PizzaContainer>
      {pizzas.map((pizza: PizzaInterface) => (
        <PizzaItem>
          <button onClick={() => addItem(pizza)}>
            <PizzaItemIMG>
              <img src="#" />
            </PizzaItemIMG>
            <PizzaItemAdd>+</PizzaItemAdd>
          </button>

          <PizzaItemPrice>R$ {pizza.price}</PizzaItemPrice>
          <PizzaItemName>{pizza.name}</PizzaItemName>
          <PizzaiItemDesc>{pizza.description}</PizzaiItemDesc>
        </PizzaItem>
      ))}
    </PizzaContainer>
  );
};


