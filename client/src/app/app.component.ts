import { Component, OnInit } from '@angular/core';

import Web3 from 'web3';
import { abi } from './app.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dapp';
  myWeb3: any;
  contract: any;
  retrieveResult = null;
  storeResult = null;

  constructor() {}

  public async ngOnInit(): Promise<void> {
    if (!await this._isEthEnabled()) {
      window.alert('Please install a Wallet (like Metamask)');
    } else {
      this.contract = this._initContract();
      console.log('contract', this.contract)
    }

  }

  public async retrieve(): Promise<void> {
    this.retrieveResult = await this.contract.methods.retrieve().call();
    console.log('retrieve', this.retrieveResult)
  }

  public async store(): Promise<void> {
    const account = (await this.myWeb3.eth.getAccounts())[0];
    this.storeResult = await this.contract.methods.store(17).send({
      from: account
    });
    console.log('store', this.storeResult)
  }

  private async _isEthEnabled(): Promise<boolean> {
    const myWindow = (window as any);
    if (myWindow.ethereum) {
      await myWindow.ethereum.send('eth_requestAccounts');
      
      myWindow.web3 = new Web3(myWindow.ethereum);
      this.myWeb3 = myWindow.web3 as Web3;
      return true;
    }

    return false;
  }

  private _initContract(): void {
    return new this.myWeb3.eth.Contract(abi, '0x1C0C292379f62c0bBeE251255d257CF957aE98dF');
  }
}
