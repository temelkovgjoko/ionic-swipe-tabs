import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";

import { NewsDetailsPage } from "./news-details.page";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations: [NewsDetailsPage],
  entryComponents: [NewsDetailsPage]
})
export class NewsDetailsPageModule {}
