import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatBotModule } from './chatbot/chatbot.module';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ChatBotModule,
    FormsModule
  ],
  providers: [  
    provideHttpClient(withInterceptorsFromDi()) // Use provideHttpClient instead of HttpClientModule
  ]
})
export class AppModuleModule { }
