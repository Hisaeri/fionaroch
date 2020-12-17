import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: 'about', loadChildren: () => import('./modules/about/about.module')
      .then((mod) => mod.AboutModule),
  },
  {
    path: 'contact', loadChildren: () => import('./modules/contact/contact.module')
      .then((mod) => mod.ContactModule),
  },
  {
    path: 'projects', loadChildren: () => import('./modules/projects/projects.module')
      .then((mod) => mod.ProjectsModule),
  },
  {
    path: '', loadChildren: () => import('./modules/home/home.module')
      .then((mod) => mod.HomeModule),
  },
  {
    path: '**', redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
