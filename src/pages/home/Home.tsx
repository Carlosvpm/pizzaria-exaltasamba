import { FoodCard } from "../../components/food-card/Food-card";
import { NavBar } from "../../components/navbar/Navbar";
import { PizzaInterface } from "../../models/Pizza.interface";
import { carrinho } from "../../services/carrinho";
import { pizzas } from "../../services/pizzas";
import { Container } from "./home.styles";

export const Home = () => {
  const Arraycarrinho: PizzaInterface[] = carrinho;
  const pizzasArray: PizzaInterface[] = pizzas;
  return (
    <>
      <NavBar carrinho={Arraycarrinho}></NavBar>
      <Container>
        <FoodCard pizzas={pizzasArray}></FoodCard>
      </Container>
    </>
  );
};
