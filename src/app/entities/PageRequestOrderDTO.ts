import { Order } from "./Order";

export interface PageRequestOrderDTO {
    elements : Order[];
    currentPage : number;
    totalPages : number;
    totalElements : number;
}