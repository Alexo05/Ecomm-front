import { BreadcrumbDTO } from "./BreadcrumbDTO";
import { Category } from "./category";
import { Product } from "./Product";

export class ProductDetailsDTO {
    rootCategory!   : Category;
    subCategory!    : Category;
    product!        : Product;
    breadcrumbDTO: BreadcrumbDTO[] = [];
}
