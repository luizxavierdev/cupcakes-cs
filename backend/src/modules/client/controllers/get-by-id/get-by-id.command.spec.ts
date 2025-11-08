import { Test, TestingModule } from '@nestjs/testing';

import { Client } from '@prisma/client';

import { DispatchEventService } from '../../../shared/services/dispatch-event/dispatch-event.service';
import { DispatchEventServiceProvider } from '../../../shared/__mocks__/services/dispatch-event.provider';

import { ClientNotFoundException } from '../../exceptions/client-not-found.exception';
import { ClientRepository } from '../../gateways/client-repository.gateway';
import { ClientIdDTO } from '../dtos/client-id.dto';
import { GetClientByIdCommand } from './get-by-id.command';

describe('GetClientByIdCommand', () => {
  let sut: GetClientByIdCommand;
  let repository: jest.Mocked<ClientRepository>;
  let eventService: jest.Mocked<DispatchEventService>;

  const mockClient: Client = {
    id: 1,
    email: 'test@example.com',
    firstName: 'John',
    lastName: 'Doe',
    phone: '11987654321',
    favoriteAddressId: null,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  const mockClientIdDTO: ClientIdDTO = {
    clientId: 1,
  };

  beforeEach(async () => {
    const mockRepository = {
      getOrThrow: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GetClientByIdCommand,
        {
          provide: ClientRepository,
          useValue: mockRepository,
        },
        DispatchEventServiceProvider,
      ],
    }).compile();

    sut = module.get<GetClientByIdCommand>(GetClientByIdCommand);
    repository = module.get(ClientRepository);
    eventService = module.get(DispatchEventService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(sut).toBeDefined();
  });

  describe('execute', () => {
    it('should get client by id successfully', async () => {
      // Arrange
      repository.getOrThrow.mockResolvedValue(mockClient);

      // Act
      const result = await sut.execute({
        input: mockClientIdDTO,
        eventData: { type: 'http' as any, params: mockClientIdDTO, headers: {} },
      });

      // Assert
      expect(result).toEqual(mockClient);
      expect(repository.getOrThrow).toHaveBeenCalledWith({ id: 1 });
      expect(repository.getOrThrow).toHaveBeenCalledTimes(1);
      expect(eventService.log).toHaveBeenCalled();
    });

    it('should throw ClientNotFoundException when client not found', async () => {
      // Arrange
      const error = new ClientNotFoundException();
      repository.getOrThrow.mockRejectedValue(error);

      // Act & Assert
      await expect(
        sut.execute({
          input: mockClientIdDTO,
          eventData: { type: 'http' as any, params: mockClientIdDTO, headers: {} },
        }),
      ).rejects.toThrow(ClientNotFoundException);

      expect(repository.getOrThrow).toHaveBeenCalledWith({ id: 1 });
      expect(eventService.error).toHaveBeenCalled();
    });

    it('should handle repository errors', async () => {
      // Arrange
      const error = new Error('Database error');
      repository.getOrThrow.mockRejectedValue(error);

      // Act & Assert
      await expect(
        sut.execute({
          input: mockClientIdDTO,
          eventData: { type: 'http' as any, params: mockClientIdDTO, headers: {} },
        }),
      ).rejects.toThrow('Database error');

      expect(repository.getOrThrow).toHaveBeenCalledWith({ id: 1 });
      expect(eventService.error).toHaveBeenCalled();
    });
  });
});

