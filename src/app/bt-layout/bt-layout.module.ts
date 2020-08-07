import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtLayoutComponent } from './bt-layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ContentComponent } from './content/content.component';
import { ContactComponent } from './contact/contact.component';
import { InfoComponent } from './info/info.component';
import { CardItemComponent } from './card-item/card-item.component';



@NgModule({
  declarations: [BtLayoutComponent, HeaderComponent, FooterComponent, CarouselComponent, ContentComponent, ContactComponent, InfoComponent, CardItemComponent],
  imports: [
    CommonModule
  ],
  exports: [BtLayoutComponent]
})
export class BtLayoutModule { }
