import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-cards',
  templateUrl: './small-cards.component.html',
  styleUrls: ['./small-cards.component.css']
})
export class SmallCardsComponent implements OnInit {

  @Input()
  photoCover:string="https://disneyplusbrasil.com.br/wp-content/uploads/2021/07/Series-Marvel-Disney-Plus-1024x576.jpg"
  
  @Input()
  cardTitle:string = "NOVA SÉRIE ANUNCIADA"
  constructor () {}

  ngOnInit(): void {
    
  }
}
