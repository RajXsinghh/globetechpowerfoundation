import { Component } from '@angular/core';

import { NavComponent } from './component/nav/nav.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './component/home/home.component';
import { PageComponent } from './component/page/page.component';
import { BlogComponent } from './component/blog/blog.component';
import { ContactusComponent } from './component/contactus/contactus.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SliderComponent } from './component/slider/slider.component';
import { ResonComponent } from './component/reson/reson.component';
import { ActivityComponent } from './component/activity/activity.component';
import { CausesComponent } from './component/causes/causes.component';
import { CounterComponent } from './component/counter/counter.component';
import { VolunteerComponent } from './component/volunteer/volunteer.component';
import { NewsComponent } from './component/news/news.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,NavComponent,
    AppComponent,FooterComponent,HeaderComponent,VolunteerComponent,NewsComponent,
    HomeComponent,PageComponent,BlogComponent,ContactusComponent,SliderComponent,ResonComponent,
    ActivityComponent,CausesComponent,CounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'globetechpowerfoundation';
}
