import { Component, OnInit } from '@angular/core';
import { ResultatAtm } from '../common/resultat-atm.model';
import { WeatherAtmService } from '../common/weather-atm.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
  public resultat: ResultatAtm;
  userChoice: string;
  conditionsLogo: string;
  isDisplayed = false;
  logo: string = '../../assets/img/logo.png';

  constructor(private service: WeatherAtmService) { }
  ngOnInit(): void { }
  onSubmit() {
    if (this.userChoice !== undefined) {
      this.service.getWeather(this.userChoice).subscribe((data) => {
        this.isDisplayed = true;
        this.resultat = new ResultatAtm(
          Math.floor(data.main.temp - 273),
          data.weather[0].icon,
          data.weather[0].description,
          data.name

        );
        this.conditionsLogo = `../../assets/img/OneDark/${this.resultat.iconId}.png`;
      },
        (error) => {
          alert('Merci de renseigner une ville valide')
          return (error)
        });
    } else alert('Merci de remplir le champ')
  }
}
