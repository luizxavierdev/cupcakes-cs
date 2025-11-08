import { PaginationResponseDTO } from '../../../shared/dtos/pagination-response.dto';

import { CategoryResponseDTO } from './category-response.dto';

export class ListCategoryResponseDTO extends PaginationResponseDTO<CategoryResponseDTO> {
  content: CategoryResponseDTO[];
}
