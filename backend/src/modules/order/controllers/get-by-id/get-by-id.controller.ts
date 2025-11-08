import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

import { DefaultHeaders } from '../../../shared/decorator/default-headers.decorator';
import { AppControllers } from '../../../shared/enums/app-controllers';
import { SwaggerTags } from '../../../shared/enums/swagger-tags';
import { EventType } from '../../../shared/services/dispatch-event/interface/event-type.enum';

import { OrderEntity } from '../../entities/order.entity';
import { OrderIdDTO } from '../dtos/order-id.dto';
import { GetOrderByIdCommand } from './get-by-id.command';

@ApiTags(SwaggerTags.order)
@Controller(AppControllers.order)
export class GetOrderByIdController {
  constructor(private readonly command: GetOrderByIdCommand) {}

  @ApiOperation({ summary: 'Get client address by id' })
  @Get(':orderId')
  handle(
    @Param() params: OrderIdDTO,
    @DefaultHeaders() headers,
  ): Promise<OrderEntity> {
    return this.command.execute({
      input: params,
      eventData: { type: EventType.http, params, headers },
    });
  }
}
