import JSBI from 'jsbi';
export declare type BigintIsh = JSBI | bigint | string;
export declare enum ChainId {
    MAINNET = 1,
    ROPSTEN = 3,
    RINKEBY = 4,
    GÖRLI = 5,
    KOVAN = 42,
    BSC = 56,
    MATIC = 137,
    BSC_TSET = 97,
    OKEXCHAIN = 66,
    HUOBI = 128,
    OPTIMISM = 10,
    ARBITRUM = 42161,
    GNOSIS = 100,
    AVALANCHE = 43114,
    FANTOM = 250,
    KLAYTN = 8217,
    AURORA = 1313161554
}
export declare enum TradeType {
    EXACT_INPUT = 0,
    EXACT_OUTPUT = 1
}
export declare enum Rounding {
    ROUND_DOWN = 0,
    ROUND_HALF_UP = 1,
    ROUND_UP = 2
}
export declare const FACTORY_ADDRESS = "0x73857Fa9a849Cd6DC8387C37f54Ad0F56B575eA2";
export declare const INIT_CODE_HASH = "0xa9fbfced95fed0f4cbe56a6f056f7f895c31bee594b6a273f043d2ae917102e3";
export declare const CONTRACT: {
    PANCAKE: {
        FACTORY: string;
        ROUTER: string;
        INIT_CODE_HASH: string;
    };
    SUHSI: {
        FACTORY: string;
        ROUTER: string;
        INIT_CODE_HASH: string;
    };
};
export declare const MINIMUM_LIQUIDITY: JSBI;
export declare const ZERO: JSBI;
export declare const ONE: JSBI;
export declare const TWO: JSBI;
export declare const THREE: JSBI;
export declare const FIVE: JSBI;
export declare const TEN: JSBI;
export declare const _100: JSBI;
export declare const _997: JSBI;
export declare const _1000: JSBI;
export declare enum SolidityType {
    uint8 = "uint8",
    uint256 = "uint256"
}
export declare const SOLIDITY_TYPE_MAXIMA: {
    uint8: JSBI;
    uint256: JSBI;
};
