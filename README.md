<<<<<<< HEAD
# MyResume

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.7.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
=======
[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/fY98wA5j)
## Your Info:

Matric Number:  299300
Name:ERIC LEE SHEN YI

## Objective

Create a resume website as a single-page application (SPA) using Angular and publish it on GitHub Pages.


## Learning Outcomes
By the end of this tutorial, students should be able to:
1. Install and use Angular CLI to create a basic Angular project.
1. Configure Angular routing to navigate between pages.
1. Apply CSS styles using styles.css and/or component styles.
1. Upload an Angular project to GitHub and deploy it to GitHub Pages.

## Prerequisites
Before starting, make sure you already have:
1. Node.js and npm installed:
```
node -v
npm -v
```
2. VS Code or WebStorm

## PART A: Create a New Angular Project
### 1. Install Angular CLI (if not installed):
```
npm install -g @angular/cli
```

### 2. Create a new Angular project (you can choose your own name):
```
ng new my-resume
```
When asked:
- Add Angular routing? → Yes
- Stylesheet format? → CSS
  
### 3. Go into the project folder:
```
cd my-resume
```

### 4. Test the project:
```
ng serve --open
```
Your app should open at `http://localhost:4200/`

## Part B: Create Pages as Angular Components
You must have six pages. Each page will be one Angular component: 
1. Personal Information
2. Education
3. Work Experience
4. Skills
5. Projects
6. Certifications

### 1. Generate components:
```
ng g c pages/home
ng g c pages/personal
ng g c pages/education
ng g c pages/work
ng g c pages/skill
ng g c pages/project
ng g c pages/certification
```

## Part C: Set Up Routing and Navigation
### 1. Open `src/app/app.routes.ts` and define your routes:
```ts
import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Personal } from './pages/personal/personal';
import { Education } from './pages/education/education';
import { Work } from './pages/work/work';
import { Skill } from './pages/skill/skill';
import { Project } from './pages/project/project';
import { Certification } from './pages/certification/certification';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'personal', component: Personal },
  { path: 'education', component: Education },
  { path: 'work', component: Work },
  { path: 'skill', component: Skill },
  { path: 'project', component: Project },
  { path: 'certification', component: Certification },
  { path: '**', redirectTo: '' } // unknown path → Home
];
```

### 2. Update `src/app/app.ts`
```ts
import { Component, signal } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-resume');
}
```

### 3. Open `src/app/app.html` and create a simple menu:
```html
<nav>
  <a routerLink="">Home</a> |
  <a routerLink="personal">Personal</a> |
  <a routerLink="education">Education</a> |
  <a routerLink="work">Work</a> |
  <a routerLink="skill">Skills</a> |
  <a routerLink="project">Projects</a> |
  <a routerLink="certification">Certifications</a>
</nav>
<hr>

<router-outlet></router-outlet>
```

### 3. Test again:
```
ng serve --open
```
Click the links to make sure you can navigate between them.


## Part D: Styling with CSS
### 1. You can put common styles in src/styles.css (global styles).
### 2. You can also style each page using the component CSS files:
- home.css
- personal.css
- education.css
- work.css
- skill.css
- project.css
- certification.css

### 3. Reuse styles from your old style.css:
   - Copy relevant rules into styles.css or split them into component CSS files.
  

## Part E: Upload Angular Project to GitHub
1. On GitHub, create a new empty repository, for example: `my-resume`
2. In your Angular project folder (my-resume), run:
```
git init
git add .
git commit -m "Initial Angular resume site"
git branch -M main
git remote add origin https://github.com/<yourusername>/my-resume-angular.git
git push -u origin main
```
Important: Replace `<yourusername>` with your actual GitHub username.


## Part F: Build & Deploy to GitHub Pages
### Step 1: Build the Angular App

1. In the project folder, run:
```
ng build --configuration=production --base-href "https://<yourusername>.github.io/my-resume/"
```
- Replace <yourusername> with your GitHub username.
- After build, the output will be in `dist/my-resume/` (or `dist/my-resume/browser` depending on Angular version).

### Step 2: Deploy Using angular-cli-ghpages (Simple Method)
1. Install the deploy tool:
```
npm install -g angular-cli-ghpages
```

2. Deploy to GitHub Pages (if your build output folder is `dist/my-resume/browser`):
```
npx angular-cli-ghpages --dir=dist/my-resume/browser
```

or (if output folder is `dist/my-resume`):
```
npx angular-cli-ghpages --dir=dist/my-resume
```

3. This command will:
   - Create a gh-pages branch,
   - Push the built files there.
###### Output example:
```bash
404.html file created
.nojekyll file created
🚀 Uploading via git, please wait...
Cloning https://github.com/zhamri/my-resume.git into /Users/zhamri/ZhamriProjects/AngularProjects/my-resume/node_modules/.cache/gh-pages/https!github.com!zhamri!my-resume.git
Cleaning
Fetching origin
Checking out origin/gh-pages 
Removing files
Copying files
Adding all
Committing
Pushing
Username for 'https://github.com': zhamri
Password for 'https://zhamri@github.com': <paste your token>
🌟 Successfully published via angular-cli-ghpages! Have a nice day!
```  


### Step 3: Enable GitHub Pages
1. Go to your repo on GitHub → Settings → Pages.
2. Under Source, choose `Deploy from a branch`.
3. Select:
   - Branch: gh-pages
   - Folder: / (root)

4. Click Save.  
After a short while, your site will be available at:
```
https://<yourusername>.github.io/my-resume/
```
5. Example: https://zhamri.github.io/my-resume-angular/


## Submission

1. Add your Matric Number and Name.
2. Add your GitHub Repository Link for your Angular project
   ```
   - Example: https://github.com/<yourusername>/my-resume
   ```
3. Add your Live Angular Resume URL (GitHub Pages)
   ```
   - Example: https://<yourusername>.github.io/my-resume/
   ```
4. Write the mistake in the git or GitHub instructions.
5. At least five (5) YouTube tutorials you watched to help you complete this task (Angular basics, Angular routing, GitHub Pages deployment, etc.).
6. Paste your resume at the link below:
   - https://github.com/STTPK3123-A252/class-activity-sqm/issues/2

## What is the mistake?

## GitHub Repository Link
https://github.com/ZoffyD/my-resume
## Live Angular Resume URL (GitHub Pages)
https://zoffyd.github.io/my-resume/
## Link of YouTube References (at least five references)
* 1. Angular Routing & Navigation - "Angular Router Tutorial" by Codevolution
https://www.youtube.com/watch?v=Np3ULAMqwNo

* 2. Angular for Beginners (Full Course) - by Programming with Mosh
https://www.youtube.com/watch?v=k5E2AVpwsko

* 3. CSS Flexbox & Grid - "Learn CSS Grid in 20 Minutes" by Web Dev Simplified
https://www.youtube.com/watch?v=9zBsdzdE4sM

* 4. CSS Animations - "CSS Animation Tutorial" by The Net Ninja
https://www.youtube.com/watch?v=jgw82b5Y2MU

* 5. Build a Professional Angular Resume Using Bootstrap & CSS by SP2 Edutech
https://www.youtube.com/watch?v=la5vqnIRMFI





