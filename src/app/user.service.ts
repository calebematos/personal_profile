import { Injectable } from "@angular/core";

@Injectable()
export class UserService {
  private userInfo = {
    name: "Lucas Calebe Matos Lopes",
    jobTitle: "Full Stack Developer",
    aboutMe: `
    Senior Java Engineer with 12+ years of experience building scalable, high-quality backend systems — currently at Avenue Code (a US-based software consulting firm) for nearly 6 years.
    I specialize in Java, Spring Boot, and microservices architecture, with hands-on experience in REST API design, message queues (RabbitMQ), automated testing (JUnit, Cucumber), and cross-system integrations (SharePoint, OAuth2, SOAP).
    My background spans healthcare (Philips), fintech, education, and enterprise systems — giving me a broad perspective on how software decisions translate into real business outcomes.
    I'm fluent in English and comfortable working with international teams in distributed, agile environments.
    📌 Currently: Senior Software Engineer @ Avenue Code
    🛠️ Stack: Java · Spring Boot · Microservices · RabbitMQ · JUnit · Cucumber · SQL · Oracle · REST APIs
   `,
    profilePicture: "./assets/profile.jpeg",
    location: "Blumenau, SC",
    email: "calebematos@gmail.com",
    devpostAccount: "",
    facebookAccount: "facebook.com/calebe.matos.5",
    facebookAddress: "http://facebook.com/calebe.matos.5",
    githubAccount: "github.com/calebematos",
    githubAddress: "http://www.github.com/calebematos",
    googleAccount: "",
    linkedinAccount: "linkedin.com/in/lucascalebematos",
    linkedinAddress: "http://linkedin.com/in/lucascalebematos",
    twitterAccount: "twitter.com/calebematos",
    twitterAddress: "http://twitter.com/calebematos",
    otherAccount: "",
  };

  getUserInfo() {
    return this.userInfo;
  }
}
