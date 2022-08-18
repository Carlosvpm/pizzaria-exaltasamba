import {
  CartItem,
  CartItemNome,
  CartItemQt,
  CartItemQtarea,
  PizzaiItemDesc,
  PizzaItem,
  PizzaItemAdd,
  PizzaItemIMG,
  PizzaItemName,
  PizzaItemPrice,
} from "./food-card.styles";

export const FoodCard = () => {
  return (
    <>
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
      <CartItem>
        <img src="" />
        <CartItemNome>--</CartItemNome>
        <CartItemQtarea>
          <button className="cart--item-qtmenos">-</button>
          <CartItemQt>1</CartItemQt>
          <button className="cart--item-qtmais">+</button>
        </CartItemQtarea>
      </CartItem>
    </>
  );
};
