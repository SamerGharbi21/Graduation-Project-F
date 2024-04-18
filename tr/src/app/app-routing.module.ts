import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordDialog } from './components/forgot-password-dialog/forgot-password-dialog.component';
import { ChatPage } from './pages/ai-chat-page/chat-page/chat-page.component';
import { LoginPage } from './pages/login-page/login-page.component';
import { LeftSidebar } from './components/sidebar/sidebar.component';

const routes: Routes = [
  {path:'login',component: LoginPage},
  {path: 'f',component: ForgotPasswordDialog},
  {path:'ai',component: ChatPage},
  {path:'s', component: LeftSidebar},
  {path:'**',component: ChatPage}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
