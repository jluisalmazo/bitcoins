import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BitcoinsListComponent } from './bitcoins-list/bitcoins-list.component';
import { BitcoinDetailComponent } from './bitcoin-detail/bitcoin-detail.component';

const routes: Routes = [
  { path: '', component: BitcoinsListComponent },
  { path: 'bitcoinDetail/:id', component: BitcoinDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
