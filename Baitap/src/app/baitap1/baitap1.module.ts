import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Baitap1Component } from './baitap1.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OwlComponent } from './owl/owl.component';
import { PhoneContentComponent } from './phone-content/phone-content.component';
import { ItemSanphamComponent } from './item-sanpham/item-sanpham.component';
import { LaptapContentComponent } from './laptap-content/laptap-content.component';
import { FooterComponent } from './footer/footer.component';
import { FooterItemComponent } from './footer/footer-item/footer-item.component';

@NgModule({
  declarations: [Baitap1Component, NavbarComponent, OwlComponent, PhoneContentComponent, ItemSanphamComponent, LaptapContentComponent, FooterComponent, FooterItemComponent],
  imports: [
    CommonModule
  ],
  exports: [
    Baitap1Component,NavbarComponent,OwlComponent,PhoneContentComponent,ItemSanphamComponent,LaptapContentComponent,FooterComponent,FooterItemComponent
  ]
})
export class Baitap1Module { }
