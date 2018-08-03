import { BrowserModule } from '@angular/platform-browser';
import { NgModule, PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { AppRoutingModule } from './modules/app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './containers/home/home.component';
import { ResultsComponent } from './containers/results/results.component';
import { DetailComponent } from './containers/detail/detail.component';
import { PrivacyComponent } from './containers/privacy/privacy.component';
import { TermsComponent } from './containers/terms/terms.component';
import { NotFoundComponent } from './containers/not-found/not-found.component';
import { AboutComponent } from './containers/about/about.component';
import { SearchComponent } from './containers/search/search.component';
import { GooglePlacesDirective } from './directives/google-places.directive';
import { SpecialtySelectComponent } from './components/specialty-select/specialty-select.component';
import { ToSlugPipe } from './pipes/to-slug.pipe';
import { FromSlugPipe } from './pipes/from-slug.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResultsComponent,
    DetailComponent,
    PrivacyComponent,
    TermsComponent,
    NotFoundComponent,
    AboutComponent,
    SearchComponent,
    GooglePlacesDirective,
    SpecialtySelectComponent,
    ToSlugPipe,
    FromSlugPipe
  ],
  imports: [
    AppRoutingModule,
    BrowserModule.withServerTransition({ appId: 'need-a-lawyer' }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string) {
    const platform = isPlatformBrowser(platformId) ?
      'in the browser' : 'on the server';
    console.log(`Running ${platform} with appId=${appId}`);
  }  
  
 }
