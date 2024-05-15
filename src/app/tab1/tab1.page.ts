import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  Myprofiles = {
  names: "Jorgin da manga",
  subtitles: "São Paulo - SP",
  details: "Sou desocupado e gostode chupar manga",
  slides: [
    'https://th.bing.com/th/id/OIP.lWYpzdix9xO6TzrfGqi30QHaEK?pid=ImgDet&rs=1',
    'https://i.pinimg.com/originals/92/83/65/9283650af670ee1ccd918089957a4b58.jpg',
    'https://i.pinimg.com/originals/aa/42/f4/aa42f43e10ee9392a4901051bbeb0541.jpg',
  ],
  };
  

  isEditingName = false;
  isEditingSubtitle = false;
  isEditingDetails = false;

  editedName: any;
  editedSubtitle: any;
  editedDetails: any;

  toggleEdit(field: string) {
    switch (field) {
      case 'name':
        if (this.isEditingName) {
          this.Myprofiles.names = this.editedName;
        }
        this.isEditingName = !this.isEditingName;
        break;
      case 'subtitle':
        if (this.isEditingSubtitle) {
          this.Myprofiles.subtitles = this.editedSubtitle;
        }
        this.isEditingSubtitle = !this.isEditingSubtitle;
        break;
      case 'details':
        if (this.isEditingDetails) {
          this.Myprofiles.details = this.editedDetails;
        }
        this.isEditingDetails = !this.isEditingDetails;
        break;
      default:
        break;
    }
  }
}
