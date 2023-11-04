import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { Atm } from './atm';
import { AtmController } from './atm.controller';
import { AtmRepository } from './atm.repository.interface';
import { CommandHandlers } from './commands/handlers';
import { QueryHandlers } from './queries/handlers';

@Module({
  imports: [CqrsModule],
  controllers: [AtmController],
  providers: [
    ...CommandHandlers,
    ...QueryHandlers,
    {
      provide: Atm,
      useFactory: async (atmRepository: AtmRepository) => await atmRepository.findOne(),
      inject: [AtmRepository],
    },
  ],
})
export class AtmModule {}