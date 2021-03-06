export default {
  "contract_name": "Broker",
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
      "constant": false,
      "inputs": [
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
        }
      ],
      "name": "createChannel",
      "outputs": [
        {
          "name": "",
          "type": "bytes32"
        }
      ],
      "payable": true,
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
      "inputs": [
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
          "name": "channelId",
          "type": "bytes32"
        }
      ],
      "name": "deposit",
      "outputs": [],
      "payable": true,
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
  "unlinked_binary": "0x6060604052341561000f57600080fd5b604051602080611001833981016040528080519150505b5b5b60008054600160a060020a03191633600160a060020a03161790555b5b6002805463ffffffff191663ffffffff83161767ffffffff00000000191690555b505b610f8a806100776000396000f300606060405236156100f65763ffffffff60e060020a60003504166309648a9d81146100fb578063129217581461013557806339c79e0c1461015c5780633c46f72f14610174578063513d144b146101aa57806368b45a2c146101d657806375f996801461020c57806379f48d4c1461022457806383197ef01461023f5780638da5cb5b146102545780639a85161614610283578063ab40428e146102d8578063b214faa5146102f3578063baa7774614610300578063d0fa96ba14610339578063e20bff5c146101d6578063e66eefc814610399578063f03cd5ca146103c1578063f2fde38b146103e9578063f5074f411461040a575b600080fd5b341561010657600080fd5b61011160043561042b565b6040518082600281111561012157fe5b60ff16815260200191505060405180910390f35b341561014057600080fd5b61015a60043560243560ff60443516606435608435610446565b005b341561016757600080fd5b61015a6004356104c6565b005b341561017f57600080fd5b610196600160a060020a03600435166024356105e8565b604051901515815260200160405180910390f35b6101c4600160a060020a0360043516602435604435610658565b60405190815260200160405180910390f35b34156101e157600080fd5b610196600160a060020a036004351660243561082c565b604051901515815260200160405180910390f35b341561021757600080fd5b61015a600435610872565b005b341561022f57600080fd5b61015a6004356024356108a8565b005b341561024a57600080fd5b61015a6109ec565b005b341561025f57600080fd5b610267610a18565b604051600160a060020a03909116815260200160405180910390f35b341561028e57600080fd5b610196600160a060020a0360043581169063ffffffff60243516906044351660643560843560ff60a4351660c43560e435610a27565b604051901515815260200160405180910390f35b34156102e357600080fd5b61015a600435602435610b34565b005b61015a600435610bbf565b005b341561030b57600080fd5b61019660043560243560ff60443516606435608435610c2e565b604051901515815260200160405180910390f35b341561034457600080fd5b610196600435610e12565b604051901515815260200160405180910390f35b34156101e157600080fd5b610196600160a060020a036004351660243561082c565b604051901515815260200160405180910390f35b34156103a457600080fd5b6101c4600435610e99565b60405190815260200160405180910390f35b34156103cc57600080fd5b6101c4600435610eb1565b60405190815260200160405180910390f35b34156103f457600080fd5b61015a600160a060020a0360043516610ec9565b005b341561041557600080fd5b61015a600160a060020a0360043516610f21565b005b60008181526001602052604090206004015460ff165b919050565b6104538585858585610c2e565b151561045e576104bf565b30600160a060020a03166379f48d4c868660405160e060020a63ffffffff851602815260048101929092526024820152604401600060405180830381600087803b15156104aa57600080fd5b6102c65a03f115156104bb57600080fd5b5050505b5050505050565b600081815260016020526040902060025b600482015460ff1660028111156104ea57fe5b148015610537575060005433600160a060020a039081169116148061051c5750805433600160a060020a039081169116145b806105375750600181015433600160a060020a039081169116145b5b156105e3576000816002015411156105845780546002820154600160a060020a039091169080156108fc0290604051600060405180830381858888f19350505050151561058457600080fd5b5b60008281526001602081905260408220805473ffffffffffffffffffffffffffffffffffffffff1990811682559181018054909216909155600281018290556003810182905560048101805460ff1916905560058101829055600601555b5b5050565b60008181526001602081905260408220905b600482015460ff16600281111561060d57fe5b14801561063d57508054600160a060020a038581169116148061063d5750600054600160a060020a038581169116145b5b801561064e575042816005015410155b91505b5092915050565b6002805467ffffffff000000001981166401000000009182900463ffffffff908116600181019091169092021790915560009081908190819060405163ffffffff9190911660e060020a0281526004016040518091039020925033915034905060e06040519081016040908152600160a060020a038085168352891660208301528101829052606081018690526080810160005b8152428801602080830191909152600060409283018190528681526001909152208151815473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0391909116178155602082015160018201805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03929092169190911790556040820151816002015560608201518160030155608082015160048201805460ff1916600183600281111561079c57fe5b021790555060a0820151816005015560c0820151816006015590505086600160a060020a031682600160a060020a03167f2168a0a10cb12f43941acf9cdef54ba002be7269f2b8b38d4ee9e54eb48a46628584898b4201604051938452602084019290925260408084019190915260608301919091526080909101905180910390a38293505b5050509392505050565b6000818152600160205260408120815b600482015460ff16600281111561084f57fe5b14801561064e57508054600160a060020a038581169116145b91505b5092915050565b61087c33826105e8565b151561088757600080fd5b6000818152600160205260409020600601546108a49082906108a8565b5b50565b60008281526001602052604081206002810154909183918211156109085760028301546001840154909250600160a060020a031682156108fc0283604051600060405180830381858888f19350505050151561090357600080fd5b610982565b6001830154600160a060020a031682156108fc0283604051600060405180830381858888f19350505050151561093d57600080fd5b50600282015482549082900390600160a060020a031681156108fc0282604051600060405180830381858888f19350505050151561097a57600080fd5b600060028401555b6000858152600160208190526040909120600401805460029260ff1990911690835b0217905550847fabfecb41642f4ef37a31c1721c2da0a771e03d530ea99bf54d900d29130f5125858360405191825260208201526040908101905180910390a25b5050505050565b60005433600160a060020a03908116911614610a0757600080fd5b600054600160a060020a0316ff5b5b565b600054600160a060020a031681565b60008060028989898960006040516020015260405163ffffffff9490941660e060020a028452600160a060020a03929092166c010000000000000000000000000260048401526018830152603882015260580160206040518083038160008661646e5a03f11515610a9757600080fd5b50506040518051905090506001818686866040516000815260200160405260006040516020015260405193845260ff90921660208085019190915260408085019290925260608401929092526080909201915160208103908084039060008661646e5a03f11515610b0757600080fd5b505060206040510351600160a060020a03168a600160a060020a03161491505b5098975050505050505050565b6000610b40338461082c565b1515610b4b57600080fd5b50600082815260016020819052604090912060048101805491929160ff191682805b021790555060038101544201600582015560068101829055827f673a31efff5b18f60225e513fd4f0f53c708661f184c1898f5c52e85bd95d5008360405190815260200160405180910390a25b505050565b6000610bcb338361082c565b1515610bd657600080fd5b506000818152600160205260409081902060028101805434908101909155909183917f6f850cda6d6b2f5cca622bc2d4739e4ed917c12d29f9a92b9e6c127abe398424915190815260200160405180910390a25b5050565b600080610c39610f4c565b6000888152600160205260408082209350819080519081016040908152601c82527f19457468657265756d205369676e6564204d6573736167653a0a33320000000060208301526002549194508b918b91309163ffffffff1690519384526020840192909252600160a060020a03166c010000000000000000000000000260408084019190915263ffffffff90911660e060020a026054830152605890910190518091039020915082826040518083805190602001908083835b60208310610d1357805182525b601f199092019160209182019101610cf3565b6001836020036101000a03801982511681845116179092525050509190910192835250506020019050604051908190039020905060005b600485015460ff166002811115610d5d57fe5b1480610d7c575060015b600485015460ff166002811115610d7a57fe5b145b8015610e0257506001818989896040516000815260200160405260006040516020015260405193845260ff90921660208085019190915260408085019290925260608401929092526080909201915160208103908084039060008661646e5a03f11515610de857600080fd5b5050602060405103518454600160a060020a039081169116145b94505b5050505095945050505050565b6000818152600160205260408120815b600482015460ff166002811115610e3557fe5b148015610e46575042816005015410155b91505b50919050565b60008181526001602052604081208161083c565b600482015460ff16600281111561084f57fe5b14801561064e57508054600160a060020a038581169116145b91505b5092915050565b6000818152600160205260409020600601545b919050565b6000818152600160205260409020600501545b919050565b60005433600160a060020a03908116911614610ee457600080fd5b600160a060020a038116156108a4576000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0383161790555b5b5b50565b60005433600160a060020a03908116911614610f3c57600080fd5b80600160a060020a0316ff5b5b50565b602060405190810160405260008152905600a165627a7a72305820519c85588f9e8639d5dc3aefb8b1d783b1637e92b1658ebdf5f3022130e004e40029",
  "networks": {
    "3": {
      "events": {
        "0x2168a0a10cb12f43941acf9cdef54ba002be7269f2b8b38d4ee9e54eb48a4662": {
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
        "0x6f850cda6d6b2f5cca622bc2d4739e4ed917c12d29f9a92b9e6c127abe398424": {
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
        "0x673a31efff5b18f60225e513fd4f0f53c708661f184c1898f5c52e85bd95d500": {
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
        "0xabfecb41642f4ef37a31c1721c2da0a771e03d530ea99bf54d900d29130f5125": {
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
      },
      "links": {},
      "address": "0x09d7c5d52b6bb808ad8e773a0c4f1f8fd9b63d51",
      "updated_at": 1509007554882
    },
    "999": {
      "events": {
        "0x2168a0a10cb12f43941acf9cdef54ba002be7269f2b8b38d4ee9e54eb48a4662": {
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
        "0x6f850cda6d6b2f5cca622bc2d4739e4ed917c12d29f9a92b9e6c127abe398424": {
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
        "0x673a31efff5b18f60225e513fd4f0f53c708661f184c1898f5c52e85bd95d500": {
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
        "0xabfecb41642f4ef37a31c1721c2da0a771e03d530ea99bf54d900d29130f5125": {
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
      },
      "links": {},
      "address": "0xece88c65fb4d46a9f7eebeedc2bfd8d62d0796ae",
      "updated_at": 1508952753685
    }
  },
  "schema_version": "0.0.5",
  "updated_at": 1509007554882
}