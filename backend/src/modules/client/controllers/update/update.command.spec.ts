import { Test, TestingModule } from '@nestjs/testing';

import { Client } from '@prisma/client';

import { DispatchEventService } from '../../../shared/services/dispatch-event/dispatch-event.service';
import { DispatchEventServiceProvider } from '../../../shared/__mocks__/services/dispatch-event.provider';

import { ValidateClientAddressService } from '../../../client-address/services/validate-client-address.service';
import { ClientNotFoundException } from '../../exceptions/client-not-found.exception';
import { EmailAlreadyInUseException } from '../../exceptions/email-already-in-use.exception';
import { ClientRepository } from '../../gateways/client-repository.gateway';
import { UpdateClientDTO } from '../dtos/update-client.dto';
import { UpdateClientCommand } from './update.command';

describe('UpdateClientCommand', () => {
  let sut: UpdateClientCommand;
  let repository: jest.Mocked<ClientRepository>;
  let validateAddress: jest.Mocked<ValidateClientAddressService>;
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

  const updatedClient: Client = {
    ...mockClient,
    firstName: 'Jane',
    lastName: 'Smith',
    updatedAt: new Date(),
  };

  const mockUpdateClientDTO: UpdateClientDTO = {
    email: 'test@example.com',
    firstName: 'Jane',
    lastName: 'Smith',
    phone: '11987654321',
    favoriteAddressId: null,
  };

  beforeEach(async () => {
    const mockRepository = {
      update: jest.fn(),
    };

    const mockValidateAddress = {
      execute: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UpdateClientCommand,
        {
          provide: ClientRepository,
          useValue: mockRepository,
        },
        {
          provide: ValidateClientAddressService,
          useValue: mockValidateAddress,
        },
        DispatchEventServiceProvider,
      ],
    }).compile();

    sut = module.get<UpdateClientCommand>(UpdateClientCommand);
    repository = module.get(ClientRepository);
    validateAddress = module.get(ValidateClientAddressService);
    eventService = module.get(DispatchEventService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(sut).toBeDefined();
  });

  describe('execute', () => {
    it('should update client successfully', async () => {
      // Arrange
      validateAddress.execute.mockResolvedValue(undefined);
      repository.update.mockResolvedValue(updatedClient);

      // Act
      const result = await sut.execute({
        input: {
          clientId: 1,
          ...mockUpdateClientDTO,
        },
        eventData: { type: 'http' as any, body: mockUpdateClientDTO, headers: {} },
      });

      // Assert
      expect(result).toEqual(updatedClient);
      expect(repository.update).toHaveBeenCalledWith({
        where: { id: 1 },
        data: mockUpdateClientDTO,
      });
      expect(repository.update).toHaveBeenCalledTimes(1);
      expect(eventService.log).toHaveBeenCalled();
    });

    it('should validate address when favoriteAddressId is provided', async () => {
      // Arrange
      const updateWithAddress: UpdateClientDTO = {
        ...mockUpdateClientDTO,
        favoriteAddressId: 5,
      };
      validateAddress.execute.mockResolvedValue(undefined);
      repository.update.mockResolvedValue(updatedClient);

      // Act
      await sut.execute({
        input: {
          clientId: 1,
          ...updateWithAddress,
        },
        eventData: { type: 'http' as any, body: updateWithAddress, headers: {} },
      });

      // Assert
      expect(validateAddress.execute).toHaveBeenCalledWith({
        id: 5,
        clientId: 1,
      });
      expect(validateAddress.execute).toHaveBeenCalledTimes(1);
    });

    it('should not validate address when favoriteAddressId is not provided', async () => {
      // Arrange
      const updateWithoutAddress: UpdateClientDTO = {
        ...mockUpdateClientDTO,
        favoriteAddressId: null,
      };
      repository.update.mockResolvedValue(updatedClient);

      // Act
      await sut.execute({
        input: {
          clientId: 1,
          ...updateWithoutAddress,
        },
        eventData: { type: 'http' as any, body: updateWithoutAddress, headers: {} },
      });

      // Assert
      expect(validateAddress.execute).not.toHaveBeenCalled();
    });

    it('should throw ClientNotFoundException when client not found', async () => {
      // Arrange
      const error = new ClientNotFoundException();
      repository.update.mockRejectedValue(error);

      // Act & Assert
      await expect(
        sut.execute({
          input: {
            clientId: 1,
            ...mockUpdateClientDTO,
          },
          eventData: { type: 'http' as any, body: mockUpdateClientDTO, headers: {} },
        }),
      ).rejects.toThrow(ClientNotFoundException);

      expect(repository.update).toHaveBeenCalled();
      expect(eventService.error).toHaveBeenCalled();
    });

    it('should throw EmailAlreadyInUseException when email already exists', async () => {
      // Arrange
      const error = new EmailAlreadyInUseException();
      repository.update.mockRejectedValue(error);

      // Act & Assert
      await expect(
        sut.execute({
          input: {
            clientId: 1,
            ...mockUpdateClientDTO,
          },
          eventData: { type: 'http' as any, body: mockUpdateClientDTO, headers: {} },
        }),
      ).rejects.toThrow(EmailAlreadyInUseException);

      expect(repository.update).toHaveBeenCalled();
      expect(eventService.error).toHaveBeenCalled();
    });

    it('should handle partial updates', async () => {
      // Arrange
      const partialUpdate: Partial<UpdateClientDTO> = {
        firstName: 'Jane',
      };
      repository.update.mockResolvedValue(updatedClient);

      // Act
      const result = await sut.execute({
        input: {
          clientId: 1,
          ...partialUpdate,
        } as any,
        eventData: { type: 'http' as any, body: partialUpdate, headers: {} },
      });

      // Assert
      expect(result).toBeDefined();
      expect(repository.update).toHaveBeenCalled();
    });
  });
});

