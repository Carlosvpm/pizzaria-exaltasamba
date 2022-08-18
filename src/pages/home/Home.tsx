import { FoodCard } from "../../components/food-card/Food-card";
import { Header } from "../../components/header/Header";
import { Container, PizzaContainer } from "./home.styles";

export const Home = () => {
  return (
    <Container>
      <Header></Header>
      <PizzaContainer>
        <FoodCard></FoodCard>
      </PizzaContainer>
    </Container>
  );
};
