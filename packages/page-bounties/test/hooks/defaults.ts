// Copyright 2017-2021 @polkadot/app-bounties authors & contributors
// SPDX-License-Identifier: Apache-2.0

import BN from 'bn.js';

import { DeriveBounties } from '@polkadot/api-derive/types';
import { BountyApi } from '@polkadot/app-bounties/hooks';
import { balanceOf } from '@polkadot/test-support/creation/balance';
import { BlockNumber } from '@polkadot/types/interfaces';

const defaultBountyApi: BountyApi = {
  acceptCurator: jest.fn(),
  approveBounty: jest.fn(),
  awardBounty: jest.fn().mockReturnValue('mockAwardExtrinsic'),
  bestNumber: new BN(1) as BlockNumber,
  bounties: [] as DeriveBounties,
  bountyDepositBase: new BN(1),
  bountyValueMinimum: new BN(1),
  claimBounty: jest.fn(),
  closeBounty: jest.fn().mockReturnValue({ length: 4 }),
  dataDepositPerByte: new BN(1),
  extendBountyExpiry: jest.fn().mockReturnValue('mockExtendExtrinsic'),
  maximumReasonLength: 100,
  proposeBounty: jest.fn(),
  proposeCurator: jest.fn(),
  unassignCurator: jest.fn().mockReturnValue('mockUnassignExtrinsic')
};

const defaultBalance = balanceOf(1);

export const mockBountyHooks = {
  balance: defaultBalance,
  bountyApi: defaultBountyApi
};
