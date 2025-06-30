import { Category } from "./category";
export interface PageRequestCategoryDTO {
    elements : Category[];
    currentPage : number;
    totalPages : number;
    totalElements : number;
}

