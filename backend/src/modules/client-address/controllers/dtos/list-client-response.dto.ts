import { PaginationResponseDTO } from '../../../shared/dtos/pagination-response.dto';

import { ClientAddressResponseDTO } from './client-address-response.dto';

export class ListClientAddressResponseDTO extends PaginationResponseDTO<ClientAddressResponseDTO> {
  content: ClientAddressResponseDTO[];
}
