import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatPage } from './pages/ai-chat-page/chat-page/chat-page.component';
import { LoginPage } from './pages/login-page/login-page.component';
import { AuthGuard } from './guards/authentication-guard';
import { SubscriptionPage } from './pages/subscription-page/subscription-page/subscription-page.component';
import { FeedbackPage } from './pages/feedback-page/feedback-page/feedback-page.component';

const routes: Routes = [
  {path:'',component: ChatPage, canActivate: [AuthGuard]},
  {path:'login',component: LoginPage},
  {path:'subscription', component: SubscriptionPage, canActivate: [AuthGuard]},
  {path:'feedback', component: FeedbackPage, canActivate: [AuthGuard]},
  {path:'**',component: ChatPage, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
