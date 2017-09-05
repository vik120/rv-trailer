import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'rv-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

   public rvList: any[] = [
    {
      rvimage: 'rv-2.jpg',
      rvName: 'Abella Airstream',
      rvPrice: '150/hour',
      location: 'nanaimo, Columbia',
      rating: 3,
      year: 2016,
      guest: 5,
      ownerName: 'Rezmi Bell',
      ownerImage: 'owner-1.png'
    },
    {
      rvimage: 'rv-3.jpg',
      rvName: 'Abella Airstream',
      rvPrice: '150/hour',
      location: 'nanaimo, Columbia',
      rating: 3,
      year: 2016,
      guest: 5,
      ownerName: 'Rezmi Bell',
      ownerImage: 'owner-1.png'
    },
    {
      rvimage: 'rv-4.jpg',
      rvName: 'Abella Airstream',
      rvPrice: '150/hour',
      location: 'nanaimo, Columbia',
      rating: 3,
      year: 2016,
      guest: 5,
      ownerName: 'Rezmi Bell',
      ownerImage: 'owner-1.png'
    },
    {
      rvimage: 'rv-5.jpg',
      rvName: 'Abella Airstream',
      rvPrice: '150/hour',
      location: 'nanaimo, Columbia',
      rating: 3,
      year: 2016,
      guest: 5,
      ownerName: 'Rezmi Bell',
      ownerImage: 'owner-1.png'
    },
    {
      rvimage: 'rv-6.jpg',
      rvName: 'Abella Airstream',
      rvPrice: '150/hour',
      location: 'nanaimo, Columbia',
      rating: 3,
      year: 2016,
      guest: 5,
      ownerName: 'Rezmi Bell',
      ownerImage: 'owner-1.png'
    },
    {
      rvimage: 'rv-7.jpg',
      rvName: 'Abella Airstream',
      rvPrice: '150/hour',
      location: 'nanaimo, Columbia',
      rating: 3,
      year: 2016,
      guest: 5,
      ownerName: 'Rezmi Bell',
      ownerImage: 'owner-1.png'
    }
  ]

  testimonials: any[] = [
    {
      userPic: 'user-1.png',
      userName: 'Anne Doe',
      userWords: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    },
    {
      userPic: 'user-2.png',
      userName: 'Jhon Doe',
      userWords: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    },
    {
      userPic: 'user-3.png',
      userName: 'Mark Leo',
      userWords: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    },
    {
      userPic: 'user-2.png',
      userName: 'Johnny Aston',
      userWords: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
