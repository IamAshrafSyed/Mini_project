const abi = [
	{
		inputs: [
			{
				internalType: "string",
				name: "_letter",
				type: "string",
			},
		],
		name: "names",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_value",
				type: "uint256",
			},
		],
		name: "Value",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "eval",
		outputs: [
			{
				internalType: "uint256",
				name: "a",
				type: "uint256",
			},
			{
				internalType: "string",
				name: "c",
				type: "string",
			},
		],
		stateMutability: "view",
		type: "function",
	},
];

export default abi;
