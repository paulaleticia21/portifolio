import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InicioComponent } from './inicio/inicio.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InicioComponent,
    AboutComponent,
    ProjectsComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
