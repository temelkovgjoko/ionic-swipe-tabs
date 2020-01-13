import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { AboutPage } from './about.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, ],
  declarations: [AboutPage],
  entryComponents: [AboutPage]
})
export class AboutPageModule {}
