import { BreadcrumbDTO } from "./BreadcrumbDTO";
import { Category } from "./category";
import { Product } from "./Product";

export class CategoryPageDTO {
    rootCategory!   : Category;
    subCategories!  : Category[];
    products!       : Product[];
    breadcrumbDTO  : BreadcrumbDTO[] = [];
}
