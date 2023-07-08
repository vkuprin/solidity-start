import "@nomiclabs/hardhat-ethers";
import {ethers} from "hardhat";

async function extracted() {
    const HelloWorld = await ethers.getContractFactory("HelloWorld");
    const hello = await HelloWorld.deploy()
    await hello.deployed();
    return hello;
}

async function deploy() {
    return await extracted();
}

async function sayHello(hello) {
    console.log("Say Hello:", await hello.hello());
}

deploy().then(sayHello);