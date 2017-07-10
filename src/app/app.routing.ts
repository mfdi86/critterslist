import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { JobsComponent } from './jobs/jobs.component';
import { HousingComponent } from './housing/housing.component';
import { CommunityComponent } from './community/community.component';
import { C4cComponent } from './c4c/c4c.component';
import { WorkersComponent } from './workers/workers.component';
import { PostDetailComponent }   from './post-detail/post-detail.component';

const appRoutes: Routes = [
  {
  path: '',
  component: WelcomeComponent
  },
  {
    path: 'jobs',
    component: JobsComponent
  },
  {
  path: 'housing',
  component: HousingComponent
  },
  {
  path: 'community',
  component: CommunityComponent
  },
  {
  path: 'c4c',
  component: C4cComponent
  },
  {
  path: 'workers',
  component: WorkersComponent
  },
  {
    path: 'posts/:id',
    component: PostDetailComponent
  }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
