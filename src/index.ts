import  * as CryptoJS from "crypto-js";

class Block {
    public index: number;
    public hash: string;
    public previousHash: string;
    public data: string;
    public timestamp: number;

    static calculateBlockHash = (
        index: number, 
        previousHash: string, 
        timestamp: number, 
        data: string
    ): string => CryptoJS.SHA256(index + previousHash + timestamp + data).toString();
    
    static validateStructor = (aBlock: Block): boolean => 
        typeof aBlock.index === "number" && 
        typeof aBlock.hash === "string" && 
        typeof aBlock.previousHash === "string" &&
        typeof aBlock.timestamp === "number" &&
        typeof aBlock.data === "string";

    constructor(
        index: number,
        hash: string,
        previousHash: string,
        data: string,
        timestamp: number,
    ){
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}

const genesisBlock: Block = new Block(0, "2020202020202", "", "Hello", 123456);
const blockChain: [Block] = [genesisBlock];

const getBlockChain = (): Block[] => blockChain;

const getLatestBlock = (): Block => getBlockChain()[blockChain.length -1];

const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);

const getHashforBlock = (aBlock: Block) => Block.calculateBlockHash(aBlock.index, aBlock.previousHash, aBlock.timestamp, aBlock.data); 

const isBlockValid = (candidateBlock: Block, previousBlock: Block): boolean => {
    if (!Block.validateStructor(candidateBlock) ||
        previousBlock.index + 1 !== candidateBlock.index || 
        previousBlock.hash !== candidateBlock.previousHash || 
        getHashforBlock(candidateBlock) !== candidateBlock.hash
    ){
        return false;
    } 

    return true;
}

const createNewBlock = (data: string): Block => {
    const previousBlock: Block = getLatestBlock();
    const newIndex: number = previousBlock.index + 1;
    const newTimestamp : number = getNewTimeStamp();
    const newHash: string = Block.calculateBlockHash(newIndex, previousBlock.hash, newTimestamp, data);
    const newBlock: Block = new Block(newIndex, newHash, previousBlock.hash, data, newTimestamp);
    return newBlock;
}

const addBlock = (candidateBlock: Block): void => {
    isBlockValid(candidateBlock, getLatestBlock()) && blockChain.push(candidateBlock);
}

const newBlock: Block = createNewBlock("Hellllllo!");
addBlock(newBlock);

console.log(blockChain);

// if it's not, error occur.
export {};