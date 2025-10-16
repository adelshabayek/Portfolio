import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
];

@NgModule({
imports: [
    RouterModule.forChild(routes), // ✅ Correct for feature module
  ],
   exports: [RouterModule],
})
export class AdminRoutingModule {}
