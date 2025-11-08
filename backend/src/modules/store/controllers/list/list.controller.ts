import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

import { DefaultHeaders } from '../../../shared/decorator/default-headers.decorator';
import { AppControllers } from '../../../shared/enums/app-controllers';
import { SwaggerTags } from '../../../shared/enums/swagger-tags';
import { EventType } from '../../../shared/services/dispatch-event/interface/event-type.enum';

import { ListStoreResponseDTO } from '../dtos/list-store-response.dto';
import { ListStoreDTO } from '../dtos/list-store.dto';
import { ListStoreCommand } from './list.command';

@ApiTags(SwaggerTags.store)
@Controller(AppControllers.store)
export class ListStoreController {
  constructor(private readonly command: ListStoreCommand) {}

  @ApiOperation({ summary: 'List cupcakes' })
  @Get()
  handle(
    @Query() query: ListStoreDTO,
    @DefaultHeaders() headers,
  ): Promise<ListStoreResponseDTO> {
    return this.command.execute({
      input: {
        servedZipcode: query.servedZipcode,
        name: query.name,
        address: query.address,
        city: query.city,
        neighborhood: query.neighborhood,
        state: query.state,
        zipcode: query.zipcode,
        page: query.page,
        size: query.size,
      },
      eventData: { type: EventType.http, query, headers },
    });
  }
}
