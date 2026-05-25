# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Rules

- Never create git commits. The user handles all commits manually.

## Commands

```bash
npm start          # dev server at http://localhost:4200 (live reload)
npm run build      # build to dist/
npm run build -- --prod  # production build with optimizations
npm test           # unit tests (Karma + Jasmine, watch mode)
npm run lint       # TSLint + Codelyzer
npm run e2e        # end-to-end tests (Protractor)
```

## Architecture

Angular 4 personal portfolio site. Data is entirely static — no backend. All displayed content lives in two services:

- **UserService** (`src/app/user.service.ts`) — single source of truth for profile data: name, job title, about me text, social links, experiences, education, skills, certificates, awards.
- **PageService** (`src/app/page.service.ts`) — controls layout: section visibility flags, background colors, sidebar styling.

**Component tree:**

```
AppComponent
└── HeaderComponent
└── BodyComponent
    ├── SidebarComponent
    ├── ProfileComponent (AboutMe, ProfilePicture, Details)
    ├── ExperiencesComponent (Educations, Careers, Certificates)
    ├── AbilitiesComponent (Skills)
    ├── ProjectsComponent (ProjectList → ProjectItem)
    ├── ContactComponent (SocialAccounts)
    └── AwardsComponent
```

All components live under `src/app/body/`. To update displayed content, edit the service objects in `UserService`. To show/hide sections or change colors, edit `PageService`.

`ProjectsService` (`src/app/projects.service.ts`) makes an HTTP call to an external Heroku API on load — its only purpose is to wake up that service; it has no effect on the portfolio content itself.
