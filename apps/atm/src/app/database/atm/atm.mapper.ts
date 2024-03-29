import { RequiredEntityData } from '@mikro-orm/core';
import { Money } from '@vending-machines/shared';
import Currency from 'currency.js';
import { Atm } from '../../atm/atm';
import AtmEntity from './atm.entity';

export class AtmMapper {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() {}

  static toDomain(entity: AtmEntity): Atm {
    const atm = new Atm();
    return Object.assign(atm, {
      id: entity.id,
      moneyInside: new Money(
        entity.money.oneCentCount,
        entity.money.tenCentCount,
        entity.money.quarterCount,
        entity.money.oneDollarCount,
        entity.money.fiveDollarCount,
        entity.money.twentyDollarCount,
      ),
      moneyCharged: new Currency(entity.moneyCharged),
    });
  }

  static toPersistence(atm: Atm): RequiredEntityData<AtmEntity> {
    return {
      id: atm.id,
      money: { ...atm.moneyInside },
      moneyCharged: atm.moneyCharged.format({ symbol: '' }),
    };
  }
}
