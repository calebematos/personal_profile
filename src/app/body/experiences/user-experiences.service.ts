import { Injectable } from '@angular/core';

@Injectable()
export class UserExperiencesService {
  private experiencesInfo = {
    myExperiences: "",
    educations: [
      {
        schoolName: "Faculty of Technology and Sciences",
        startDate: "Feb/2006",
        endDate: "12/2009",
        degreeTitle: "Bachelor Degree in Systems Information",
        certificationDescription: "",
        location: "Jequié-Ba"
      }
    ],
    careers: [
      {
        companyName: "Avenue Code",
        startDate: "Oct/2020",
        endDate: "actual",
        jobType: " Senior Software Engineer",
        jobTitle: "[Your job's title here]",
        jobDuty: "",
        location: "Work remotely",
        companyLink: "www.avenuecode.com/"
      },
      {
        companyName: "Integritas",
        startDate: "Feb/2019",
        endDate: "Oct/2020",
        jobType: "Full Stack Developer",
        jobTitle: "[Your job's title here]",
        jobDuty: "",
        location: "Work remotely",
        companyLink: "www.integritas.net/"
      },
      {
        companyName: "T-Systems",
        startDate: "Nov/2018",
        endDate: "Feb/2019",
        jobType: "Full Stack Developer",
        jobTitle: "[Your job's title here]",
        jobDudty: "Develop software",
        location: "Blumenau-SC",
        companyLink: "www.t-systems.com"
      },
      {
        companyName: "HBSIS - (AMBEV)",
        startDate: "May/2017",
        endDate: "Nov/2018",
        jobType: "Full Stack Developer",
        jobTitle: "[Your job's title here]",
        jobDudty: "[Your job's duty here]",
        location: "Blumenau-SC",
        companyLink: "www.t-systems.com"
      },
      {
        companyName: "Philips",
        startDate: "Oct/2015",
        endDate: "May/2017",
        jobType: "Java Developer",
        jobTitle: "[Your job's title here]",
        jobDudty: "[Your job's duty here]",
        location: "Blumenau-SC",
        companyLink: "www.philips.com.br"
      },
      {
        companyName: "Capgemini",
        startDate: "Feb/2014",
        endDate: "Oct/2015",
        jobType: "Java Developer",
        jobTitle: "[Your job's title here]",
        jobDudty: "[Your job's duty here]",
        location: "Salvador-BA",
        companyLink: "www.capgemini.com/"
      }
    ],
    certificates: [
      {
        certificateTitle: "Bachelor Degree",
        imageUrl: "./assets/Degree.png",
        url: "#certificates",
        target: ""
      },
      {
        certificateTitle: "Fullstack Angular and Spring",
        imageUrl: "./assets/fullstack.png",
        url: "https://www.algaworks.com/certs/YNV2GH4C73",
        target: "#"
      },
      {
        certificateTitle: "Spring REST Specialist",
        imageUrl: "/assets/springRestSpecialist.png",
        url: "https://www.algaworks.com/certs/0722AZY7JQ",
        target: ""
      }
    ]
  };

  getExperiencesInfo() {
    return this.experiencesInfo;
  }

}
