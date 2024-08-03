import {NgModule, Provider} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import ruLocale from '@angular/common/locales/ru';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi} from "@angular/common/http";
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {FormsModule} from "@angular/forms";
import {MainLayoutComponent} from './shared/components/main-layout/main-layout.component';
import {HomePageComponent} from './home-page/home-page.component';
import {PostPageComponent} from './post-page/post-page.component';
import {PostComponent} from './shared/components/post/post.component';
import {QuillModule} from "ngx-quill";
import {registerLocaleData} from "@angular/common";
import {AuthInterceptor} from "./shared/auth.interceptor";
import { ThreeDPostComponent } from './shared/components/three-d-post/three-d-post.component';
import { NewHomePageComponent } from './new-home-page/new-home-page.component';

registerLocaleData(ruLocale, 'ru');


const INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true,
};

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HomePageComponent,
    PostPageComponent,
    PostComponent,
    ThreeDPostComponent,
    NewHomePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    QuillModule.forRoot(),
  ],
  providers: [
    provideHttpClient(
      // DI-based interceptors must be explicitly enabled.
      withInterceptorsFromDi(),
      ),
    INTERCEPTOR_PROVIDER,
    provideAnimationsAsync(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
