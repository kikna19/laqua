import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule,} from './app-routing.module';
import {AppComponent} from './app.component';
import {LaquaNavComponent} from './laqua-nav/laqua-nav.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {LaquaHomeComponent} from './laqua-home/laqua-home.component';
import {MatTabsModule} from "@angular/material/tabs";
import {MatStepperModule} from "@angular/material/stepper";
import {MatListModule} from "@angular/material/list";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LaquaFooterComponent} from './laqua-footer/laqua-footer.component';
import {LaquaAquariumComponent} from './laqua-routing/laqua-aquarium/laqua-aquarium.component';
import {AquariumDemoComponent} from './laqua-routing/aquarium-demo/aquarium-demo.component';
import {MatIconModule} from "@angular/material/icon";
import {LaquaTerrariumComponent} from './laqua-routing/laqua-terrarium/laqua-terrarium.component';
import {TerrariumDemoComponent} from './laqua-routing/terrarium-demo/terrarium-demo.component';
import {LaquaFeedingComponent} from './laqua-routing/laqua-feeding/laqua-feeding.component';
import {FeedingDemoComponent} from './laqua-routing/feeding-demo/feeding-demo.component';
import {LaquaEmailComponent} from "./laqua-routing/laqua-email/laqua-email.component";
import {CommonModule} from "@angular/common";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MarineComponent} from './laqua-routing/marine/marine.component';
import {MatCardModule} from "@angular/material/card";
import {MatBadgeModule} from "@angular/material/badge";
import {ProductListComponent} from './laqua-routing/product-list/product-list.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {RouterModule} from "@angular/router";
import {MatDialogModule} from "@angular/material/dialog";
import {MatGridListModule} from "@angular/material/grid-list";
import { CartAlertComponent } from './laqua-routing/cart-alert/cart-alert.component';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";



@NgModule({
  declarations: [
    AppComponent,
    LaquaNavComponent,
    LaquaHomeComponent,
    LaquaFooterComponent,
    LaquaAquariumComponent,
    AquariumDemoComponent,
    LaquaTerrariumComponent,
    TerrariumDemoComponent,
    LaquaFeedingComponent,
    FeedingDemoComponent,
    LaquaEmailComponent,
    MarineComponent,
    ProductListComponent,
    CartAlertComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatTabsModule,
        MatStepperModule,
        MatListModule,
        FontAwesomeModule,
        MatInputModule,
        MatButtonModule,
        ReactiveFormsModule,
        MatIconModule,
        CommonModule,
        FormsModule,
        MatOptionModule,
        MatSelectModule,
        MatCardModule,
        MatBadgeModule,
        MatSidenavModule,
        RouterModule,
        MatDialogModule,
        MatGridListModule,
        MatProgressBarModule,
        MatProgressSpinnerModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
