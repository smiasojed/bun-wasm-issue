const solc = require("./soljson.js");

// Define a simple Solidity contract
const source = `
pragma solidity ^0.8.0;
contract Test {
	function hello() public pure returns (string memory) {
		return "Hello, world!";
	}
}
`;

const input = {
	language: "Solidity",
	sources: {
		"Test.sol": { content: source },
	},
	settings: { outputSelection: { "*": { "*": ["evm.bytecode"] } } },
};
try {
	const output = solc.cwrap('solidity_compile', 'string', ['string'])(JSON.stringify(input));
	console.log("TEST PASSED");
}
catch (e) {
	console.log("TEST FAILED " + e)
}


