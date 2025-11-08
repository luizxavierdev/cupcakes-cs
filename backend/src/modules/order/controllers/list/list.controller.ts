import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

import { DefaultHeaders } from '../../../shared/decorator/default-headers.decorator';
import { AppControllers } from '../../../shared/enums/app-controllers';
import { SwaggerTags } from '../../../shared/enums/swagger-tags';
import { EventType } from '../../../shared/services/dispatch-event/interface/event-type.enum';

import { ListOrderResponseDTO } from '../dtos/list-order-response.dto';
import { ListOrderDTO } from '../dtos/list-order.dto';
import { ListOrderCommand } from './list.command';

@ApiTags(SwaggerTags.order)
@Controller(AppControllers.order)
export class ListOrderController {
  constructor(private readonly command: ListOrderCommand) {}

  @ApiOperation({ summary: 'List orders' })
  @Get('')
  handle(
    @Query() query: ListOrderDTO,
    @DefaultHeaders() headers,
  ): Promise<ListOrderResponseDTO> {
    return this.command.execute({
      input: {
        clientId: query.clientId,
        addressId: query.addressId,
        storeId: query.storeId,
        page: query.page,
        size: query.size,
      },
      eventData: { type: EventType.http, query, headers },
    });
  }
}
