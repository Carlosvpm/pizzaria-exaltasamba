import {
  PizzaContainer,
  PizzaiItemDesc,
  PizzaItem,
  PizzaItemAdd,
  PizzaItemIMG,
  PizzaItemName,
  PizzaItemPrice,
} from "./food-card.styles";

export const FoodCard = () => {
  return (
    <PizzaContainer>
      <PizzaItem>
        <a href="">
          <PizzaItemIMG>
            <img src="" />
          </PizzaItemIMG>
          <PizzaItemAdd>+</PizzaItemAdd>
        </a>
        <PizzaItemPrice>R$ --</PizzaItemPrice>
        <PizzaItemName>--</PizzaItemName>
        <PizzaiItemDesc>--</PizzaiItemDesc>
      </PizzaItem>
    </PizzaContainer>
  );
};
