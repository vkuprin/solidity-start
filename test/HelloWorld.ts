import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";
import { expect } from "chai";

describe("hello world", function() {
    it("should say hi", async function() {
        const HelloWorld = await ethers.getContractFactory("HelloWorld");
        const hello = await HelloWorld.deploy()
        await hello.deployed();

        // Adjust the expected string to match what your contract returns
        expect(await hello.hello()).to.equal("Hello, World!");
    });
});
