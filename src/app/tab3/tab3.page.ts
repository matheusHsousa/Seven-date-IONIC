import { Component, ViewChild } from '@angular/core';
import { Tab2Page } from '../tab2/tab2.page';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';


interface Profile {
  names: string;
  subtitles: string;
  details: string;
  slides: string[]; 
}

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  @ViewChild(IonModal)
  modal!: IonModal;
  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  userMessage: string = '';
  messageList: string[] = [];
  previewMessages: string[] = [];
  currentProfile: any;
  private tab2Page: Tab2Page;
  database: Profile[] = [];

  constructor() {
    this.tab2Page = new Tab2Page();
    this.getSavedProfiles();
    console.log(this.database)

  }

  getSavedProfiles() {
    const savedProfiles = this.tab2Page.getSavedProfilesFromLocalStorage();
    this.database = savedProfiles;
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  sendMessage(){
    if (this.userMessage.trim() !== '') {
      this.messageList.push(this.userMessage);
      this.previewMessages.push(this.userMessage);
      this.userMessage = '';
    }
  }

  confirm() {
    this.modal.dismiss();
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }
}
