# cwv-token code
ERC-20 TOKEN


https://etherscan.io/address/0xb7241656AC4f4D26dd17520dfA36Fc95417C0f8d


:)


test:
Main: 0x46c4b62bcf34a9227844b61f1f97cfc1e4f17750

1: 0xda9634d67ae6036eeac3186015eb331bb123314c
2: 0xebcfe4b9164a9fe423821d4084f0f9475a637599
3: 0xe06f7d332f5d75ad0d29202f4929e60190aa11bf
4: 0x3c283b0598b47b537bae3aea53ef6c7e69825123
5: 0xeae682e9ed19c2d4aa7b53cb11660a3f30313bd9
6: 0x22c7df95ec0762f26dedb4f749e7f75ec9a89558
7: 0x62b026657d8d11fd08357bb566940bb022a082c5
8: 0x871d2c3de7000171676b064fc2d20c767302aa35
T: 0xbbd816032cb49f6945c5bb09666974e2969df2bd



test:


 ./geth --dev --datadir="/tmp/eth/60/03" -verbosity 6 --ipcpath ~/Library/Ethereum/geth.ipc --mine --minerthreads=1 --etherbase=0x0000000000000000000000000000000000000000


1) init data


eth.sendTransaction({from: eth.accounts[0], to: eth.accounts[1], value: web3.toWei(1, 'ether')})
eth.sendTransaction({from: eth.accounts[0], to: eth.accounts[2], value: web3.toWei(1, 'ether')})
eth.sendTransaction({from: eth.accounts[0], to: eth.accounts[3], value: web3.toWei(1, 'ether')})
eth.sendTransaction({from: eth.accounts[0], to: eth.accounts[4], value: web3.toWei(1, 'ether')})
eth.sendTransaction({from: eth.accounts[0], to: eth.accounts[5], value: web3.toWei(1, 'ether')})
eth.sendTransaction({from: eth.accounts[0], to: eth.accounts[6], value: web3.toWei(1, 'ether')})
eth.sendTransaction({from: eth.accounts[0], to: eth.accounts[7], value: web3.toWei(1, 'ether')})
eth.sendTransaction({from: eth.accounts[0], to: eth.accounts[8], value: web3.toWei(1, 'ether')})
eth.sendTransaction({from: eth.accounts[0], to: eth.accounts[9], value: web3.toWei(1, 'ether')})




2) deploy contract

 params:
 total supply : 10000000000

_angels_lock: 90

_team_total_lock_: 720 //360*2

_team_release_epoch: 90



3) froze_team
	OK


4) earlyAngelSales : to 1
	OK

5) address 1 send cwv token to  other
   should FAILED: locked!

 
