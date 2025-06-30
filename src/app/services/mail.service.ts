import { Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser'; 


@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor() {
    emailjs.init("SsWSsV98dZAxoSWsi"); // Initialize EmailJS with your user ID
  }

    async send(to_name : string ,email : string,subject : string,message : string){
      let response = await emailjs.send("service_sko0hw3","template_re69wfs",{
        from_name: "Admin",
        to_name: to_name,
        name: "lk",
        email: email.toLocaleLowerCase,
        subject: subject,
        message: message
      });
    alert("Message has been sended Suceffully ! ")
  }
}


