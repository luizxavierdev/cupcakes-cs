import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

import { DefaultHeaders } from '../../../shared/decorator/default-headers.decorator';
import { AppControllers } from '../../../shared/enums/app-controllers';
import { SwaggerTags } from '../../../shared/enums/swagger-tags';
import { EventType } from '../../../shared/services/dispatch-event/interface/event-type.enum';

import { ClientResponseDTO } from '../dtos/client-response.dto';
import { CreateClientDTO } from '../dtos/create-client.dto';
import { CreateClientCommand } from './create.command';

@ApiTags(SwaggerTags.client)
@Controller(AppControllers.client)
export class CreateClientController {
  constructor(private readonly command: CreateClientCommand) {}

  @ApiOperation({ summary: 'Client create' })
  @Post()
  handle(
    @Body() body: CreateClientDTO,
    @DefaultHeaders() headers,
  ): Promise<ClientResponseDTO> {
    return this.command.execute({
      input: {
        email: body.email,
        firstName: body.firstName,
        lastName: body.lastName,
        phone: body.phone,
      },
      eventData: { type: EventType.http, body, headers },
    });
  }
}
