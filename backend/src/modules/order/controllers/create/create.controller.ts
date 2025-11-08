import { Body, Controller, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

import { DefaultHeaders } from '../../../shared/decorator/default-headers.decorator';
import { AppControllers } from '../../../shared/enums/app-controllers';
import { SwaggerTags } from '../../../shared/enums/swagger-tags';
import { EventType } from '../../../shared/services/dispatch-event/interface/event-type.enum';

import { ClientIdDTO } from '../../../client/controllers/dtos/client-id.dto';

import { OrderEntity } from '../../entities/order.entity';
import { CreateOrderDTO } from '../dtos/create-order.dto';
import { CreateOrderCommand } from './create.command';

@ApiTags(SwaggerTags.order)
@Controller(AppControllers.client)
export class CreateOrderController {
  constructor(private readonly command: CreateOrderCommand) {}

  @ApiOperation({ summary: 'Create client address' })
  @Post(':clientId/order')
  handle(
    @Param() params: ClientIdDTO,
    @Body() body: CreateOrderDTO,
    @DefaultHeaders() headers,
  ): Promise<OrderEntity> {
    return this.command.execute({
      input: { ...body, ...params },
      eventData: { type: EventType.http, params, body, headers },
    });
  }
}
