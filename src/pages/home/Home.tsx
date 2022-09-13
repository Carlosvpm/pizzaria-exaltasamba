import { FoodCard } from "../../components/food-card/Food-card";
import { NavBar } from "../../components/navbar/Navbar";
import { Container } from "./home.styles";
import pizzas from "../../data/pizzas-data";
import { CartProvider } from "react-use-cart";

export const Home = () => {
  console.warn(pizzas);
  const desconto = 0.0;
  return (
    <CartProvider>
      <NavBar desconto={desconto}></NavBar>
      <Container>
        <FoodCard></FoodCard>
      </Container>
    </CartProvider>
  );
};
