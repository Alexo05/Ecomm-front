import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MailService } from 'src/app/services/mail.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit{
  contactForm! : FormGroup;

  constructor(private fb: FormBuilder, private mailService: MailService) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    name : this.contactForm.value.name;
    email : this.contactForm.value.email;
    subject : this.contactForm.value.subject;
    message : this.contactForm.value.message;
    if (this.contactForm.valid) {
      const { name, email, subject, message } = this.contactForm.value;
      this.mailService.send(name, email.toLocaleLowerCase, subject, message)
        .then(response => {
          alert("Message has been sent successfully!");
          this.contactForm.reset();
        })
        .catch(error => {
          console.error("Error sending message", error);
          alert("Failed to send the message. Please try again later.");
        });
    } else {
      alert("Please fill out the form correctly.");
    }
  }


}
