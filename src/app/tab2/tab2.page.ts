import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  currentIndex = 0;  
  profiles = [
    {
      names: 'Julieta Andrade',
      subtitles: 'São Paulo - SP',
      details: 'Amo Feijoada vegetariana e bla bla bla',
      slides: [
        'https://i.pinimg.com/originals/d0/79/44/d07944c1150831f67c50c293add5a75d.jpg',
        'https://i.pinimg.com/originals/92/83/65/9283650af670ee1ccd918089957a4b58.jpg',
        'https://i.pinimg.com/originals/aa/42/f4/aa42f43e10ee9392a4901051bbeb0541.jpg',
      ],
    },
    {
      names: 'Isabela Silva',
      subtitles: 'Rio de Janeiro - RJ',
      details: 'Apaixonada por praia e esportes ao ar livre.',
      slides: [
        'https://i.pinimg.com/originals/ef/e1/ce/efe1ce4b41bc837a6e22afb273cd3236.jpg',
        'https://i.pinimg.com/236x/1d/81/31/1d8131e7631b62b961bacd9d5595988a.jpg',
      ],
    },    
    {
      names: 'Beatriz Oliveira',
      subtitles: 'Belo Horizonte - MG',
      details: 'Adoro cozinhar e experimentar novos pratos.',
      slides: [
        'https://i.pinimg.com/originals/be/6d/7c/be6d7c68fdb0268d20d8b0b2cb483f8c.jpg',
        'https://i.pinimg.com/236x/aa/c5/e4/aac5e4018dbc80cd7aebebc3f006d773.jpg',
        'https://i.pinimg.com/236x/01/e2/87/01e2874cd9f94c3ffa29b49556fda40b.jpg',
        'https://i.pinimg.com/236x/97/72/fd/9772fd25bffe07321cd4db5d596c802c.jpg',
        'https://i.pinimg.com/236x/fb/5f/5f/fb5f5f5bd6f7491419081d45abc9592d.jpg'
      ],
    },
    {
      names: 'Camila Santos',
      subtitles: 'Curitiba - PR',
      details: 'Sou apaixonada por música e toco guitarra nas horas vagas.',
      slides: [
        'https://i.pinimg.com/originals/97/74/1a/97741a8c14539636ed38ef69ca8eacb1.jpg',
        'https://i.pinimg.com/236x/4b/ea/9f/4bea9fc28f7e8df35e4deb5f18e0dad2.jpg',
        'https://i.pinimg.com/236x/aa/ac/77/aaac777e14e816a6be884d6785dd489b.jpg',
      ],
    }
        
    
  ];

  Infos = this.profiles[this.currentIndex];
  currentSlide: string = '';
  savedProfiles: any;
  constructor() {
    this.savedProfiles = this.getSavedProfilesFromLocalStorage() || [];
  }

  ngOnInit(){
    this.setCurrentSlide
  }

  setCurrentSlide(slide: string) {
    this.currentSlide = slide;
    console.log(this.currentSlide)
  }

  swiperSlideChanged(e: any) {
  }

  nextProfile() {
    if (this.currentIndex < this.profiles.length - 1) {
      this.saveCurrentProfileInLocalStorage();
      this.currentIndex++;
      this.Infos = this.profiles[this.currentIndex];
    }
  }

  previousProfile() {
    if (this.currentIndex < this.profiles.length - 1) {
      this.currentIndex++;
      this.Infos = this.profiles[this.currentIndex];
    }
  }

  saveCurrentProfileInLocalStorage() {
    const currentProfile = this.Infos;
    if (currentProfile) {
      this.savedProfiles.push(currentProfile);
      localStorage.setItem('savedProfiles', JSON.stringify(this.savedProfiles)); 
    }
  }

  getSavedProfilesFromLocalStorage() {
    const savedProfiles = localStorage.getItem('savedProfiles');
    return savedProfiles ? JSON.parse(savedProfiles) : null;
  }
}
