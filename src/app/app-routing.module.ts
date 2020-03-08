import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {
    path: 'patient',
    loadChildren: () => import('./create-patient/create-patient.module').then(m => m.CreatePatientModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'patient'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
