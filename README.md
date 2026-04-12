# My Resume - Tutorial 1

Welcome to my personal portfolio project! I built this website using **Angular 21** as a core part of Software Quality Management course. 
It’s designed to be more than just a list of my experiences; it’s a showcase of my journey in software engineering, wrapped in a warm, Italian Brunello-inspired design.

**🔗 [View Live Site](https://zoffyd.github.io/my-resume/)**

---
## What I Learned
- Setting up an Angular project from scratch using `ng new`

- Component-based architecture — each page (Home, Personal, Education, etc.) is its own component with separate `.html`, `.css`, and `.ts` files

- Client-side routing using `RouterLink`, `RouterOutlet`, and `routerLinkActive`

- CSS layout techniques, including Flexbox, CSS Grid, and positioning

- Deploying an Angular app to GitHub Pages using `angular-cli-ghpages.`

## Challenges Faced

### 1. First time with Angular, HTML, and CSS
This was my first time working with a frontend framework. 
I had to learn how Angular components work — each page is broken into three files (`.html` for structure, `.css` for styling, `.ts` for logic) and how they connect through selectors and the routing system.

### 2. Understanding CSS layouts (Flexbox & Grid)
Coming from no CSS background, understanding `display: flex` and `display: grid` was the biggest learning curve. 
I had to learn how properties like `justify-content`, `align-items`, `flex-direction`, and `grid-template-columns` control the positioning of elements on the page.

### 3. GitHub Pages deployment — blank page
After deploying to GitHub Pages, the site showed a completely blank page. 
The issue was that Git Bash on Windows automatically converted the `--base-href /my-resume/` flag into a Windows file path (`C:/Program Files/Git/my-resume/`), so the browser could not find the JavaScript files. 
I fixed this by setting `baseHref` directly in `angular.json` instead of passing it as a CLI flag.

### 4. Git merge conflicts
When trying to push my code to GitHub, I ran into a merge conflict because the local and remote branches had diverged. 
I had to learn how to resolve the conflict and force push my local version to the remote repository.

## How to Run Locally
```bash

npm install

ng serve

```
Then open `http://localhost:4200` in your browser.
## How to Deploy

```bash

ng build

npx angular-cli-ghpages --dir=dist/my-resume/browser

```
Make sure GitHub Pages is set to deploy from the `gh-pages` branch in the repository settings.
