import { Product } from "./Product";
import { ProductInfDTO } from "./ProductInfDTO";
export class PageRequestProductDTO {
    productInfDTOS!: ProductInfDTO[];
    currentPage! : number;
    totalPages! : number;
    totalElements! : number;
}