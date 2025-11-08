import { Body, Controller, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

import { DefaultHeaders } from '../../../shared/decorator/default-headers.decorator';
import { AppControllers } from '../../../shared/enums/app-controllers';
import { SwaggerTags } from '../../../shared/enums/swagger-tags';
import { EventType } from '../../../shared/services/dispatch-event/interface/event-type.enum';

import { ClientIdDTO } from '../../../client/controllers/dtos/client-id.dto';

import { ClientAddressResponseDTO } from '../dtos/client-address-response.dto';
import { CreateClientAddressDTO } from '../dtos/create-client-address.dto';
import { CreateClientAddressCommand } from './create.command';

@ApiTags(SwaggerTags.clientAddress)
@Controller(AppControllers.client)
export class CreateClientAddressController {
  constructor(private readonly command: CreateClientAddressCommand) {}

  @ApiOperation({ summary: 'Create client address' })
  @Post(':clientId/address')
  handle(
    @Param() params: ClientIdDTO,
    @Body() body: CreateClientAddressDTO,
    @DefaultHeaders() headers,
  ): Promise<ClientAddressResponseDTO> {
    return this.command.execute({
      input: { ...body, ...params },
      eventData: { type: EventType.http, params, body, headers },
    });
  }
}
