import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  cards = [

    {
      "imgPath": "lizard.jpg",
      "title": "Henry",
      "desc": "He's a lizard",
      "favorited": false,
      "shared": false
    },
    {
      "imgPath": "dandelion.jpg",
      "title": "Flower",
      "desc": "Its a dandelion.",
      "favorited": false,
      "shared": false
    },
    {
      "imgPath": "panda.jpg",
      "title": "Jeffery",
      "desc": "He's a panda. He's the new Ted.",
      "favorited": false,
      "shared": false
    },
    {
      "imgPath": "railroad.jpg",
      "title": "Rail",
      "desc": "This is a railroad. It like a road for trains.",
      "favorited": false,
      "shared": false
    },
    {
      "imgPath": "canoe_water_nature_221611.jpg",
      "title": "Boat",
      "desc": "A canoe, for relaxing on the water.",
      "favorited": false,
      "shared": false
    },
    {
      "imgPath": "waterfall.jpg",
      "title": "Waterfall",
      "desc": "A majestic waterfall..",
      "favorited": false,
      "shared": false
    },
    {
      "imgPath": "path.jpg",
      "title": "A Path",
      "desc": "The path to righteousness. ",
      "favorited": false,
      "shared": false
    },
    {
      "imgPath": "bird.jpg",
      "title": "A little birdie",
      "desc": "A bird in its natural habitat.",
      "favorited": false,
      "shared": false
    },
    {
      "imgPath": "cat.jpg",
      "title": "A big cat",
      "desc": "Just a big housecat.",
      "favorited": false,
      "shared": false
    },
    {
      "imgPath": "party.jpg",
      "title": "Elephants",
      "desc": "Its an elephant party!",
      "favorited": false,
      "shared": false
    },





  ]

  constructor(public navCtrl: NavController) {

  }

  clickFav(card) {
    let index = this.cards.indexOf(card);

    if (index > -1) {
      if (card.favorited) {
        this.cards[index].favorited = false;
      } else {
        this.cards[index].favorited = true;
      }
    }
  }

  clickShared(card) {
    let index = this.cards.indexOf(card);

    if (index > -1) {
      if (card.shared) {
        this.cards[index].shared = false;
      } else {
        this.cards[index].shared = true;
      }
    }

  }

  deleteCard(card) {
    let index = this.cards.indexOf(card);

    this.cards.splice(index, 1);
  }

  cardCount() {
    let count = this.cards.length;
    return count;
  }

}
