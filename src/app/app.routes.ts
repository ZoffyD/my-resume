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
  { path: '**', redirectTo: '' }
];