import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatPage } from './pages/ai-chat-page/chat-page/chat-page.component';
import { LoginPage } from './pages/login-page/login-page.component';
import { TopToolbar } from './components/toolbar/toolbar.component';
import { AuthGuard } from './guards/authentication-guard';

const routes: Routes = [
  {path:'',component: ChatPage, canActivate: [AuthGuard]},
  {path:'login',component: LoginPage},
  {path:'s', component: TopToolbar},
  {path:'**',component: ChatPage}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
