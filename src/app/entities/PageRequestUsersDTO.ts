import { user } from "./user";
export interface PageRequestUsersDTO {
 elements : user[];
 currentPage : number;
 totalPages : number;
 totalElements : number;
}