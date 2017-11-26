import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnotherComponent } from './another-component/another.component'

const routes: Routes = [
    {
        // not lazy loaded
        path: 'another-module',
        component: AnotherComponent
    }
];

const routerConfig = RouterModule.forChild(routes);

@NgModule({
    imports: [routerConfig],
    exports: [RouterModule]
})
export class AnotherRoutingModule {}
