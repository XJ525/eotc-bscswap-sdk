import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  MAINNET = 1,
  ROPSTEN = 3,
  RINKEBY = 4,
  GÖRLI = 5,
  KOVAN = 42,
  BSC = 56,
  MATIC = 137,
  BSC_TSET = 97,
  OKExChain = 66
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

//swap的工厂合约地址
export const FACTORY_ADDRESS = '0x73857Fa9a849Cd6DC8387C37f54Ad0F56B575eA2'
//初始化代码哈希
export const INIT_CODE_HASH = '0xa9fbfced95fed0f4cbe56a6f056f7f895c31bee594b6a273f043d2ae917102e3'
export const CONTRACT = {
  PANCAKE: {
    FACTORY: '0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73',
    ROUTER: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    INIT_CODE_HASH: '0x00fb7f630766e6a796048ea87d01acd3068e8ff67d078148a3fa3f4a84f69bd5'
  },
  SUHSI: {
    FACTORY: '0xc35dadb65012ec5796536bd9864ed8773abc74c4',
    ROUTER: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
    INIT_CODE_HASH: '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303'
  }
}

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
