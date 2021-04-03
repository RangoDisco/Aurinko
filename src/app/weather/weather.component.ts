import { Component, OnInit } from '@angular/core';
import { ResultatAtm } from '../common/resultat-atm.model';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
  public resultat: ResultatAtm;
  userVille: string;
  conditionsLogo: string;
  key: string = 'e8c1cab47ba2897cac83882e320124d2';
  isDisplayed = false;
  logo: string = '../../assets/img/logo.png';

  constructor() {}
  ngOnInit(): void {}
  onSubmit() {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=
        ${this.userVille}
        &lang=fr&appid=${this.key}`
    )
      .then((response) => response.json())
      .then((data) => {
        try {
          this.isDisplayed = true;
          this.resultat = new ResultatAtm(
            Math.floor(data.main.temp - 273),
            data.weather[0].icon,
            data.weather[0].description,
            data.name
          );
          this.conditionsLogo = `../../assets/img/OneDark/${this.resultat.iconId}.png`;
        } catch (error) {
          alert('Merci de rensigner une ville valide');
        }
      });
  }
}
