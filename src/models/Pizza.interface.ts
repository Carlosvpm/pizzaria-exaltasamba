import { Item } from "react-use-cart";

export interface PizzaInterface extends Item{
    id: string;
    price: number;
    description: string;
    name: string;
    size: string;
}