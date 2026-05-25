import { Injectable } from '@angular/core';

@Injectable()
export class PageService {
  private pageInfo = {
    backgroundImage: "./assets/cover.jpg",
    showHeader: true,
    showProfile: true,
    profileBackgroundColor: "white",
    showExperiences: true,
    experiencesBackgroundColor: "rgb(245, 245, 245, 1)",
    showAbilities: true,
    abilitiesBackgroundColor: "white",
    showProjects: true,
    projectsBackgroundColor: "rgb(245, 245, 245, 1)",
    showAwards: false,
    awardsBackgroundColor: "white",
    showContact: true,
    contactBackgroundColor: "rgb(66, 73, 73)",
    resumeTitle: "Senior Java Engineer | Spring Boot · Microservices · Cloud",
    projectLink: "https://github.com/calebematos/personal_profile_angular4"
  };

  getPageInfo() {
    return this.pageInfo;
  }

}
