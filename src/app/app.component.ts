import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConvertPipe } from './convert.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ConvertPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name!: string;
  date!: string;
  amount!: number;
  height!: number;
  miles!: number;

  onMilesChange(target: EventTarget){
    const value = (<HTMLInputElement>target).value;
    this.miles = parseFloat(value);
  }

  onHeightChange(target: EventTarget){
    const value = (<HTMLInputElement>target).value;
    this.height = parseFloat(value);
  }

  onNameChange(target: EventTarget){
    const value = (<HTMLInputElement>target).value;
    this.name = value;
  }

  onDateChange(target: EventTarget){
    const value = (<HTMLInputElement>target).value;
    this.date = value;
  }

  onAmountChange(target: EventTarget){
    const value = (<HTMLInputElement>target).value;
    this.amount = parseFloat(value);
  }
}
