import { Injectable } from '@nestjs/common';

import { Category } from '@prisma/client';

import { Command, CommandInput } from '../../../shared/abstractions/command';
import { ResultWithPagination } from '../../../shared/abstractions/repository-pagination';
import { CommandEventHandler } from '../../../shared/decorator/command-event-handler.decorator';
import { PaginationDTO } from '../../../shared/dtos/pagination.dto';
import { DispatchEventService } from '../../../shared/services/dispatch-event/dispatch-event.service';

import { CategoryRepository } from '../../gateways/category-repository.gateway';

@Injectable()
export class ListCategoryCommand extends Command {
  constructor(
    event: DispatchEventService,
    private readonly repository: CategoryRepository,
  ) {
    super(event);
  }

  @CommandEventHandler('')
  async execute({
    input,
  }: CommandInput<PaginationDTO>): Promise<ResultWithPagination<Category>> {
    return await this.repository.list(input);
  }
}
