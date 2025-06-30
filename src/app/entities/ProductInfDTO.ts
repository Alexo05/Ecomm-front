import { Product } from "./Product";

export interface ProductInfDTO {
    rootCategorySlug: string;
    subCategorySlug: string;
    product: Product;
  }