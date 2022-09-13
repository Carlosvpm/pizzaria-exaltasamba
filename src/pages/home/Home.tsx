import { FoodCard } from "../../components/food-card/Food-card";
import { NavBar } from "../../components/navbar/Navbar";
import { PizzaInterface } from "../../models/Pizza.interface";
import { Container } from "./home.styles";
import pizzas from "../../data/pizzas-data";
import carrinho from "../../data/carrinho-data";
import { CartProvider } from "react-use-cart";

export const Home = () => {
  console.warn(pizzas);
  return (
    <CartProvider>
      <NavBar carrinho={carrinho}></NavBar>
      <Container>
        <FoodCard></FoodCard>
      </Container>
    </CartProvider>
  );
};
