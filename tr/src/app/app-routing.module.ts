import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatPage } from './pages/ai-chat-page/chat-page/chat-page.component';
import { LoginPage } from './pages/login-page/login-page.component';
import { MessageTemplate } from './pages/ai-chat-page/message-template/message-template/message-template.component';
import { TopToolbar } from './components/toolbar/toolbar.component';

const routes: Routes = [
  {path:'login',component: LoginPage},
  {path:'ai',component: ChatPage},
  {path:'s', component: TopToolbar},
  {path:'**',component: MessageTemplate}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
