import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
    path: '',
  },
  {
    path: 'table',
    loadChildren: () =>
      import('./table-module/table-module.module').then((m) => m.TableModuleModule),
    
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
