export default {
  "contract_name": "BrokerToken",
  "abi": [
    {
      "constant": true,
      "inputs": [
        {
          "name": "channelId",
          "type": "bytes32"
        }
      ],
      "name": "getState",
      "outputs": [
        {
          "name": "",
          "type": "uint8"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "erc20Contract",
          "type": "address"
        },
        {
          "name": "receiver",
          "type": "address"
        },
        {
          "name": "duration",
          "type": "uint256"
        },
        {
          "name": "settlementPeriod",
          "type": "uint256"
        },
        {
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "createChannel",
      "outputs": [
        {
          "name": "",
          "type": "bytes32"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "erc20Contract",
          "type": "address"
        },
        {
          "name": "channelId",
          "type": "bytes32"
        },
        {
          "name": "payment",
          "type": "uint256"
        }
      ],
      "name": "settle",
      "outputs": [],
      "payable": false,
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "channelId",
          "type": "bytes32"
        }
      ],
      "name": "close",
      "outputs": [],
      "payable": false,
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "sender",
          "type": "address"
        },
        {
          "name": "channelId",
          "type": "bytes32"
        }
      ],
      "name": "canFinishSettle",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "sender",
          "type": "address"
        },
        {
          "name": "channelId",
          "type": "bytes32"
        }
      ],
      "name": "canStartSettle",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "destroy",
      "outputs": [],
      "payable": false,
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "sender",
          "type": "address"
        },
        {
          "name": "_chainId",
          "type": "uint32"
        },
        {
          "name": "contractId",
          "type": "address"
        },
        {
          "name": "channelId",
          "type": "bytes32"
        },
        {
          "name": "payment",
          "type": "uint256"
        },
        {
          "name": "sigV",
          "type": "uint8"
        },
        {
          "name": "sigR",
          "type": "bytes32"
        },
        {
          "name": "sigS",
          "type": "bytes32"
        }
      ],
      "name": "isStateUpdateSigValid",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "channelId",
          "type": "bytes32"
        },
        {
          "name": "payment",
          "type": "uint256"
        }
      ],
      "name": "startSettle",
      "outputs": [],
      "payable": false,
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "erc20Contract",
          "type": "address"
        },
        {
          "name": "channelId",
          "type": "bytes32"
        },
        {
          "name": "payment",
          "type": "uint256"
        },
        {
          "name": "v",
          "type": "uint8"
        },
        {
          "name": "r",
          "type": "bytes32"
        },
        {
          "name": "s",
          "type": "bytes32"
        }
      ],
      "name": "claim",
      "outputs": [],
      "payable": false,
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "channelId",
          "type": "bytes32"
        },
        {
          "name": "value",
          "type": "uint256"
        },
        {
          "name": "v",
          "type": "uint8"
        },
        {
          "name": "r",
          "type": "bytes32"
        },
        {
          "name": "s",
          "type": "bytes32"
        }
      ],
      "name": "canClaim",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "channelId",
          "type": "bytes32"
        }
      ],
      "name": "isOpenChannel",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "sender",
          "type": "address"
        },
        {
          "name": "channelId",
          "type": "bytes32"
        }
      ],
      "name": "canDeposit",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "channelId",
          "type": "bytes32"
        }
      ],
      "name": "getPayment",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "erc20Contract",
          "type": "address"
        },
        {
          "name": "channelId",
          "type": "bytes32"
        },
        {
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "deposit",
      "outputs": [],
      "payable": false,
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "channelId",
          "type": "bytes32"
        }
      ],
      "name": "getUntil",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "erc20Contract",
          "type": "address"
        },
        {
          "name": "channelId",
          "type": "bytes32"
        }
      ],
      "name": "finishSettle",
      "outputs": [],
      "payable": false,
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "payable": false,
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_recipient",
          "type": "address"
        }
      ],
      "name": "destroyAndSend",
      "outputs": [],
      "payable": false,
      "type": "function"
    },
    {
      "inputs": [
        {
          "name": "_chainId",
          "type": "uint32"
        }
      ],
      "payable": false,
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "channelId",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "name": "sender",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "receiver",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "settlementPeriod",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "until",
          "type": "uint256"
        }
      ],
      "name": "DidCreateChannel",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "channelId",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "DidDeposit",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "channelId",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "name": "payment",
          "type": "uint256"
        }
      ],
      "name": "DidStartSettle",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "channelId",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "name": "payment",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "oddValue",
          "type": "uint256"
        }
      ],
      "name": "DidSettle",
      "type": "event"
    }
  ],
  "unlinked_binary": "0x6060604052341561000f57600080fd5b604051602080611233833981016040528080519150505b5b5b60008054600160a060020a03191633600160a060020a03161790555b5b6002805463ffffffff191663ffffffff83161767ffffffff00000000191690555b505b6111bc806100776000396000f300606060405236156100f65763ffffffff60e060020a60003504166309648a9d81146100fb5780632b0109be146101355780632d219b761461017557806339c79e0c1461019c5780633c46f72f146101b457806368b45a2c146101ea57806383197ef0146102205780638da5cb5b146102355780639a85161614610264578063ab40428e146102b9578063aeb0b4da146102d4578063baa7774614610307578063d0fa96ba14610340578063e20bff5c146101ea578063e66eefc8146103a0578063eb2243f8146103c8578063f03cd5ca146103ef578063f29f7d5514610417578063f2fde38b1461043b578063f5074f411461045c575b600080fd5b341561010657600080fd5b61011160043561047d565b6040518082600281111561012157fe5b60ff16815260200191505060405180910390f35b341561014057600080fd5b610163600160a060020a0360043581169060243516604435606435608435610498565b60405190815260200160405180910390f35b341561018057600080fd5b61019a600160a060020a03600435166024356044356106fe565b005b34156101a757600080fd5b61019a600435610948565b005b34156101bf57600080fd5b6101d6600160a060020a0360043516602435610a6a565b604051901515815260200160405180910390f35b34156101f557600080fd5b6101d6600160a060020a0360043516602435610ada565b604051901515815260200160405180910390f35b341561022b57600080fd5b61019a610b20565b005b341561024057600080fd5b610248610b4c565b604051600160a060020a03909116815260200160405180910390f35b341561026f57600080fd5b6101d6600160a060020a0360043581169063ffffffff60243516906044351660643560843560ff60a4351660c43560e435610b5b565b604051901515815260200160405180910390f35b34156102c457600080fd5b61019a600435602435610c68565b005b34156102df57600080fd5b61019a600160a060020a036004351660243560443560ff6064351660843560a435610cf3565b005b341561031257600080fd5b6101d660043560243560ff60443516606435608435610d1f565b604051901515815260200160405180910390f35b341561034b57600080fd5b6101d6600435610f03565b604051901515815260200160405180910390f35b34156101f557600080fd5b6101d6600160a060020a0360043516602435610ada565b604051901515815260200160405180910390f35b34156103ab57600080fd5b610163600435610f8a565b60405190815260200160405180910390f35b34156103d357600080fd5b61019a600160a060020a0360043516602435604435610fa2565b005b34156103fa57600080fd5b6101636004356110aa565b60405190815260200160405180910390f35b341561042257600080fd5b61019a600160a060020a03600435166024356110c2565b005b341561044657600080fd5b61019a600160a060020a03600435166110fb565b005b341561046757600080fd5b61019a600160a060020a0360043516611153565b005b60008181526001602052604090206004015460ff165b919050565b6002805467ffffffff000000001981166401000000009182900463ffffffff908116600181019091169092021790915560009081908190819060405163ffffffff9190911660e060020a0281526004016040518091039020925033915088905080600160a060020a03166323b872dd83308860006040516020015260405160e060020a63ffffffff8616028152600160a060020a0393841660048201529190921660248201526044810191909152606401602060405180830381600087803b151561056257600080fd5b6102c65a03f1151561057357600080fd5b50505060405180519050151561058857600080fd5b60e06040519081016040908152600160a060020a0380851683528a1660208301528101869052606081018790526080810160005b8152428901602080830191909152600060409283018190528681526001909152208151815473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0391909116178155602082015160018201805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03929092169190911790556040820151816002015560608201518160030155608082015160048201805460ff1916600183600281111561066c57fe5b021790555060a0820151816005015560c0820151816006015590505087600160a060020a031682600160a060020a03167f2168a0a10cb12f43941acf9cdef54ba002be7269f2b8b38d4ee9e54eb48a466285888a8c4201604051938452602084019290925260408084019190915260608301919091526080909101905180910390a38293505b50505095945050505050565b600082815260016020526040812060028101549091839186908311156107b65760028401546001850154909350600160a060020a038083169163a9059cbb91168560006040516020015260405160e060020a63ffffffff8516028152600160a060020a0390921660048301526024820152604401602060405180830381600087803b151561078b57600080fd5b6102c65a03f1151561079c57600080fd5b5050506040518051905015156107b157600080fd5b6108dc565b6001840154600160a060020a038083169163a9059cbb91168560006040516020015260405160e060020a63ffffffff8516028152600160a060020a0390921660048301526024820152604401602060405180830381600087803b151561081b57600080fd5b6102c65a03f1151561082c57600080fd5b50505060405180519050151561084157600080fd5b60028401548454908490039250600160a060020a038083169163a9059cbb91168460006040516020015260405160e060020a63ffffffff8516028152600160a060020a0390921660048301526024820152604401602060405180830381600087803b15156108ae57600080fd5b6102c65a03f115156108bf57600080fd5b5050506040518051905015156108d457600080fd5b600060028501555b6000868152600160208190526040909120600401805460029260ff1990911690835b0217905550857fabfecb41642f4ef37a31c1721c2da0a771e03d530ea99bf54d900d29130f5125868460405191825260208201526040908101905180910390a25b50505050505050565b600081815260016020526040902060025b600482015460ff16600281111561096c57fe5b1480156109b9575060005433600160a060020a039081169116148061099e5750805433600160a060020a039081169116145b806109b95750600181015433600160a060020a039081169116145b5b15610a6557600081600201541115610a065780546002820154600160a060020a039091169080156108fc0290604051600060405180830381858888f193505050501515610a0657600080fd5b5b60008281526001602081905260408220805473ffffffffffffffffffffffffffffffffffffffff1990811682559181018054909216909155600281018290556003810182905560048101805460ff1916905560058101829055600601555b5b5050565b60008181526001602081905260408220905b600482015460ff166002811115610a8f57fe5b148015610abf57508054600160a060020a0385811691161480610abf5750600054600160a060020a038581169116145b5b8015610ad0575042816005015410155b91505b5092915050565b6000818152600160205260408120815b600482015460ff166002811115610afd57fe5b148015610ad057508054600160a060020a038581169116145b91505b5092915050565b60005433600160a060020a03908116911614610b3b57600080fd5b600054600160a060020a0316ff5b5b565b600054600160a060020a031681565b60008060028989898960006040516020015260405163ffffffff9490941660e060020a028452600160a060020a03929092166c010000000000000000000000000260048401526018830152603882015260580160206040518083038160008661646e5a03f11515610bcb57600080fd5b50506040518051905090506001818686866040516000815260200160405260006040516020015260405193845260ff90921660208085019190915260408085019290925260608401929092526080909201915160208103908084039060008661646e5a03f11515610c3b57600080fd5b505060206040510351600160a060020a03168a600160a060020a03161491505b5098975050505050505050565b6000610c743384610ada565b1515610c7f57600080fd5b50600082815260016020819052604090912060048101805491929160ff191682805b021790555060038101544201600582015560068101829055827f673a31efff5b18f60225e513fd4f0f53c708661f184c1898f5c52e85bd95d5008360405190815260200160405180910390a25b505050565b610d008585858585610d1f565b1515610d0b57610d16565b610d168686866106fe565b5b505050505050565b600080610d2a61117e565b6000888152600160205260408082209350819080519081016040908152601c82527f19457468657265756d205369676e6564204d6573736167653a0a33320000000060208301526002549194508b918b91309163ffffffff1690519384526020840192909252600160a060020a03166c010000000000000000000000000260408084019190915263ffffffff90911660e060020a026054830152605890910190518091039020915082826040518083805190602001908083835b60208310610e0457805182525b601f199092019160209182019101610de4565b6001836020036101000a03801982511681845116179092525050509190910192835250506020019050604051908190039020905060005b600485015460ff166002811115610e4e57fe5b1480610e6d575060015b600485015460ff166002811115610e6b57fe5b145b8015610ef357506001818989896040516000815260200160405260006040516020015260405193845260ff90921660208085019190915260408085019290925260608401929092526080909201915160208103908084039060008661646e5a03f11515610ed957600080fd5b5050602060405103518454600160a060020a039081169116145b94505b5050505095945050505050565b6000818152600160205260408120815b600482015460ff166002811115610f2657fe5b148015610f37575042816005015410155b91505b50919050565b600081815260016020526040812081610aea565b600482015460ff166002811115610afd57fe5b148015610ad057508054600160a060020a038581169116145b91505b5092915050565b6000818152600160205260409020600601545b919050565b600080610faf3385610ada565b1515610fba57600080fd5b5050600082815260016020526040808220805490928692600160a060020a03808516936323b872dd9391169130918891516020015260405160e060020a63ffffffff8616028152600160a060020a0393841660048201529190921660248201526044810191909152606401602060405180830381600087803b151561103e57600080fd5b6102c65a03f1151561104f57600080fd5b50505060405180519050151561106457600080fd5b60028201805484019055837f6f850cda6d6b2f5cca622bc2d4739e4ed917c12d29f9a92b9e6c127abe3984248460405190815260200160405180910390a25b5050505050565b6000818152600160205260409020600501545b919050565b6110cc3382610a6a565b15156110d757600080fd5b600081815260016020526040902060060154610a6590839083906106fe565b5b5050565b60005433600160a060020a0390811691161461111657600080fd5b600160a060020a0381161561114e576000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0383161790555b5b5b50565b60005433600160a060020a0390811691161461116e57600080fd5b80600160a060020a0316ff5b5b50565b602060405190810160405260008152905600a165627a7a72305820ec9073a68bc7cbdea9cb166fc4b916529f823f83d5aff97e21f4eb49a37650540029",
  "networks": {},
  "schema_version": "0.0.5",
  "updated_at": 1508949842040
}