import { PaginationResponseDTO } from '../../../shared/dtos/pagination-response.dto';

import { OrderEntity } from '../../entities/order.entity';

export class ListOrderResponseDTO extends PaginationResponseDTO<OrderEntity> {
  content: OrderEntity[];
}
