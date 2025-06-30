import { Address } from "./Address";
import { OrderItem } from "./OrderItem";


export interface Order {
     id: string;
     userId: number;
     deliveryAddress: Address;
     items: OrderItem[];
     date: Date;
     totalPrice: number;
}