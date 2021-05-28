import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from "./guards/auth.guard";
import { NoLoginGuard } from "./guards/nologin.guard";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  { path: 'sobre-mi', loadChildren: './sobre-mi/sobre-mi.module#SobreMiPageModule' },
  { path: 'sobre-mi-love', loadChildren: './sobre-mi-love/sobre-mi-love.module#SobreMiLovePageModule' },
  { path: 'sobre-mi-work', loadChildren: './sobre-mi-work/sobre-mi-work.module#SobreMiWorkPageModule' },
  { path: 'blog', loadChildren: './blog/blog.module#BlogPageModule' },
  { path: 'galeria', loadChildren: './galeria/galeria.module#GaleriaPageModule' },
  { path: 'contacto', loadChildren: './contacto/contacto.module#ContactoPageModule' },
  { path: 'login', loadChildren: './admin/login/login.module#LoginPageModule', canActivate : [NoLoginGuard] },
  { path: 'dashboard', loadChildren: './admin/dashboard/dashboard.module#DashboardPageModule', canActivate : [AuthGuard] },
  { path: 'details/:id', loadChildren: './admin/todo-details/todo-details.module#TodoDetailsPageModule', canActivate : [AuthGuard] },
  { path: 'details', loadChildren: './admin/todo-details/todo-details.module#TodoDetailsPageModule', canActivate : [AuthGuard] },
  { path: 'blog-vista/:id', loadChildren: './blog-vista/blog-vista.module#BlogVistaPageModule' },
  { path: 'blog-vista', loadChildren: './blog-vista/blog-vista.module#BlogVistaPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
