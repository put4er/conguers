import { Component, OnInit } from '@angular/core';
import {Bot} from '../ts_files/bot';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  name: string;
  email: string;
  subject: string;
  bot: Bot = new Bot(this.name, this.email, this.subject);
  addBot() {
    console.log(this.bot);
  }
  constructor() { }

  ngOnInit() {
  }
}
