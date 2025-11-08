import { Test, TestingModule } from '@nestjs/testing';

import { Client } from '@prisma/client';

import { DispatchEventService } from '../../../shared/services/dispatch-event/dispatch-event.service';
import { DispatchEventServiceProvider } from '../../../shared/__mocks__/services/dispatch-event.provider';

import { EmailAlreadyInUseException } from '../../exceptions/email-already-in-use.exception';
import { ClientRepository } from '../../gateways/client-repository.gateway';
import { CreateClientDTO } from '../dtos/create-client.dto';
import { CreateClientCommand } from './create.command';

describe('CreateClientCommand', () => {
  let sut: CreateClientCommand;
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

  const mockCreateClientDTO: CreateClientDTO = {
    email: 'test@example.com',
    firstName: 'John',
    lastName: 'Doe',
    phone: '11987654321',
  };

  beforeEach(async () => {
    const mockRepository = {
      create: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CreateClientCommand,
        {
          provide: ClientRepository,
          useValue: mockRepository,
        },
        DispatchEventServiceProvider,
      ],
    }).compile();

    sut = module.get<CreateClientCommand>(CreateClientCommand);
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
    it('should create a client successfully', async () => {
      // Arrange
      repository.create.mockResolvedValue(mockClient);

      // Act
      const result = await sut.execute({
        input: mockCreateClientDTO,
        eventData: { type: 'http' as any, body: mockCreateClientDTO, headers: {} },
      });

      // Assert
      expect(result).toEqual(mockClient);
      expect(repository.create).toHaveBeenCalledWith(mockCreateClientDTO);
      expect(repository.create).toHaveBeenCalledTimes(1);
      expect(eventService.log).toHaveBeenCalled();
    });

    it('should throw EmailAlreadyInUseException when email already exists', async () => {
      // Arrange
      const error = new EmailAlreadyInUseException();
      repository.create.mockRejectedValue(error);

      // Act & Assert
      await expect(
        sut.execute({
          input: mockCreateClientDTO,
          eventData: { type: 'http' as any, body: mockCreateClientDTO, headers: {} },
        }),
      ).rejects.toThrow(EmailAlreadyInUseException);

      expect(repository.create).toHaveBeenCalledWith(mockCreateClientDTO);
      expect(eventService.error).toHaveBeenCalled();
    });

    it('should handle repository errors', async () => {
      // Arrange
      const error = new Error('Database error');
      repository.create.mockRejectedValue(error);

      // Act & Assert
      await expect(
        sut.execute({
          input: mockCreateClientDTO,
          eventData: { type: 'http' as any, body: mockCreateClientDTO, headers: {} },
        }),
      ).rejects.toThrow('Database error');

      expect(repository.create).toHaveBeenCalledWith(mockCreateClientDTO);
      expect(eventService.error).toHaveBeenCalled();
    });
  });
});

