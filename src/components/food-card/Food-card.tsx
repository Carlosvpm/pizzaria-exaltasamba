import { PizzaInterface } from "../../models/Pizza.interface";
import { carrinho } from "../../services/carrinho";
import {
  PizzaContainer,
  PizzaiItemDesc,
  PizzaItem,
  PizzaItemAdd,
  PizzaItemIMG,
  PizzaItemName,
  PizzaItemPrice,
} from "./food-card.styles";

type FoodProps = {
  pizzas: PizzaInterface[];
};

export const FoodCard = (props: FoodProps) => {
  if (!props.pizzas) return null;

  const addOnCart = (pizza: PizzaInterface) => {
    carrinho.push(pizza)
    console.log(carrinho)
  }
  return (
    <PizzaContainer>
      {props.pizzas.map((pizza: PizzaInterface) => (
        <PizzaItem>
          <button onClick={()=>addOnCart(pizza)}>
            <PizzaItemIMG>
              <img src="#" />
            </PizzaItemIMG>
            <PizzaItemAdd >+</PizzaItemAdd>
          </button>

          <PizzaItemPrice>R$ {pizza.price}</PizzaItemPrice>
          <PizzaItemName>{pizza.name}</PizzaItemName>
          <PizzaiItemDesc>{pizza.description}</PizzaiItemDesc>
        </PizzaItem>
      ))}
    </PizzaContainer>
  );
};
