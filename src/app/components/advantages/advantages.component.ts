import {Component, Input} from '@angular/core';
import {AdvantageType} from '../../types/advantage.type';
import {TruncateTextPipe} from '../../pipes/truncate-text.pipe';

@Component({
  selector: 'advantages',
  standalone: true,
  templateUrl: './advantages.component.html',
  imports: [
    TruncateTextPipe
  ],
  styleUrl: './advantages.component.less'
})
export class AdvantagesComponent {


  @Input() advantage:AdvantageType;
  @Input() index:number = 0;

  constructor() {
    this.advantage = {
      advantageTitle: '',
      advantageDescription: '',
    }
  }



}
