import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Message } from '../../models/Message'; 


@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
newMessage : Message = {
  lastName: "",
  firstName: "",
  email: "",
  content: ""
}
onSubmit() :void{
alert("Message envoyé ! -->" + this.newMessage)

}
}
