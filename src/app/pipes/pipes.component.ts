import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
  name="Marvellous Infosystems";
  today=new Date();
  value=39.885;
  institue={"name":"Pune university","location":"Pune"};
}
