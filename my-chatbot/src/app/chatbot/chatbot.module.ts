import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatbotComponent } from './chatbot.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ChatbotComponent  // Declare the component here
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ChatBotModule { }
