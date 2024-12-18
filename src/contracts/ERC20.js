export const contractAbi = [
  { type: "impl", name: "IERC20Impl", interface_name: "erc20::erc20::IERC20" },
  {
    type: "struct",
    name: "core::integer::u256",
    members: [
      { name: "low", type: "core::integer::u128" },
      { name: "high", type: "core::integer::u128" },
    ],
  },
  {
    type: "interface",
    name: "erc20::erc20::IERC20",
    items: [
      {
        type: "function",
        name: "get_name",
        inputs: [],
        outputs: [{ type: "core::felt252" }],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "get_symbol",
        inputs: [],
        outputs: [{ type: "core::felt252" }],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "get_decimals",
        inputs: [],
        outputs: [{ type: "core::integer::u8" }],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "get_total_supply",
        inputs: [],
        outputs: [{ type: "core::integer::u256" }],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "balance_of",
        inputs: [
          {
            name: "account",
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        outputs: [{ type: "core::integer::u256" }],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "allowance",
        inputs: [
          {
            name: "owner",
            type: "core::starknet::contract_address::ContractAddress",
          },
          {
            name: "spender",
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        outputs: [{ type: "core::integer::u256" }],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "transfer",
        inputs: [
          {
            name: "recipient",
            type: "core::starknet::contract_address::ContractAddress",
          },
          { name: "amount", type: "core::integer::u256" },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "transfer_from",
        inputs: [
          {
            name: "sender",
            type: "core::starknet::contract_address::ContractAddress",
          },
          {
            name: "recipient",
            type: "core::starknet::contract_address::ContractAddress",
          },
          { name: "amount", type: "core::integer::u256" },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "approve",
        inputs: [
          {
            name: "spender",
            type: "core::starknet::contract_address::ContractAddress",
          },
          { name: "amount", type: "core::integer::u256" },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "increase_allowance",
        inputs: [
          {
            name: "spender",
            type: "core::starknet::contract_address::ContractAddress",
          },
          { name: "added_value", type: "core::integer::u256" },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "decrease_allowance",
        inputs: [
          {
            name: "spender",
            type: "core::starknet::contract_address::ContractAddress",
          },
          { name: "subtracted_value", type: "core::integer::u256" },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "mint",
        inputs: [
          {
            name: "recipient",
            type: "core::starknet::contract_address::ContractAddress",
          },
          { name: "amount", type: "core::integer::u256" },
        ],
        outputs: [],
        state_mutability: "external",
      },
    ],
  },
  {
    type: "constructor",
    name: "constructor",
    inputs: [
      { name: "name_", type: "core::felt252" },
      { name: "symbol_", type: "core::felt252" },
      { name: "decimals_", type: "core::integer::u8" },
    ],
  },
  {
    type: "event",
    name: "erc20::erc20::ERC20::Transfer",
    kind: "struct",
    members: [
      {
        name: "from",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "data",
      },
      {
        name: "to",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "data",
      },
      { name: "value", type: "core::integer::u256", kind: "data" },
    ],
  },
  {
    type: "event",
    name: "erc20::erc20::ERC20::Approval",
    kind: "struct",
    members: [
      {
        name: "owner",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "data",
      },
      {
        name: "spender",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "data",
      },
      { name: "value", type: "core::integer::u256", kind: "data" },
    ],
  },
  {
    type: "event",
    name: "erc20::erc20::ERC20::Event",
    kind: "enum",
    variants: [
      {
        name: "Transfer",
        type: "erc20::erc20::ERC20::Transfer",
        kind: "nested",
      },
      {
        name: "Approval",
        type: "erc20::erc20::ERC20::Approval",
        kind: "nested",
      },
    ],
  },
];
