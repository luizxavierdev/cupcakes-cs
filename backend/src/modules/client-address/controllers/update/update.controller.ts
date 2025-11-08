import { Body, Controller, Param, Patch } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

import { DefaultHeaders } from '../../../shared/decorator/default-headers.decorator';
import { AppControllers } from '../../../shared/enums/app-controllers';
import { SwaggerTags } from '../../../shared/enums/swagger-tags';
import { EventType } from '../../../shared/services/dispatch-event/interface/event-type.enum';

import { ClientAddressIdDTO } from '../dtos/client-address-id.dto';
import { ClientAddressResponseDTO } from '../dtos/client-address-response.dto';
import { UpdateClientAddressDTO } from '../dtos/update-client-address.dto';
import { UpdateClientAddressCommand } from './update.command';

@ApiTags(SwaggerTags.clientAddress)
@Controller(AppControllers.clientAddress)
export class UpdateClientAddressController {
  constructor(private readonly command: UpdateClientAddressCommand) {}

  @ApiOperation({ summary: 'Update client address' })
  @Patch(':clientAddressId')
  handle(
    @Param() params: ClientAddressIdDTO,
    @Body() body: UpdateClientAddressDTO,
    @DefaultHeaders() headers,
  ): Promise<ClientAddressResponseDTO> {
    return this.command.execute({
      input: { ...body, ...params },
      eventData: { type: EventType.http, params, body, headers },
    });
  }
}
