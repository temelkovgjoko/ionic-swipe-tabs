import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";

import { NewsDetailsPageModule } from "../news-details/news-details.module";
import { NewsPage } from "./news.page";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, NewsDetailsPageModule],
  declarations: [NewsPage],
  entryComponents: [NewsPage]
})
export class NewsPageModule {}
