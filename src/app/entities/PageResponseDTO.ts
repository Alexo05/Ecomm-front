import { ProductInfDTO } from "./ProductInfDTO";

export interface PageResponseDTO {
    productInfDTOS: ProductInfDTO[];
    currentPage: number;
    totalPages: number;
    totalElements: number;
  }