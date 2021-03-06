// Imports
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ResourcesComponent} from "./resources/resources.component";
import {ReportsComponent} from "./reports/reports.component";
import {GoalsComponent} from "./goals/goals.component";
import {CrisisButtonComponent} from "./resources/crisis-button.component";
import {JournalListComponent} from "./journals/journal-list.component";
import {ChartsComponent} from "./charts/charts.component";

// Route Configuration
export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'journals', component: JournalListComponent},
    {path: 'resources', component: ResourcesComponent },
    {path: 'reports', component: ReportsComponent },
    {path: 'goals', component: GoalsComponent },
    {path: 'crisis button', component: CrisisButtonComponent},
    {path: 'charts', component: ChartsComponent },
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(routes);
