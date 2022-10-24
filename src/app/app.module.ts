import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./core/components/navbar/navbar.component";
import { TableComponent } from "./core/components/table/table.component";
import { ContactorMgtComponent } from "./feature/contactor-mgt/contactor-mgt.component";
import { ChatPopupComponent } from "./core/components/chat-popup/chat-popup.component";
import { TableSatusPipe } from "./core/pipes/table.pipe";
import { FilterBarComponent } from "./core/components/filter-bar/filter-bar.component";
import { CardRowComponent } from "./core/components/card-row/card-row.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TableComponent,
    ContactorMgtComponent,
    ChatPopupComponent,
    TableSatusPipe,
    FilterBarComponent,
    CardRowComponent,
  ],
  imports: [BrowserModule, NgbModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
