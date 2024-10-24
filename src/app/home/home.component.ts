import { Component } from '@angular/core';
import { CardComponent } from "../components/card/card.component";
import { FooterComponent } from "../components/footer/footer.component";
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent, FooterComponent,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

