import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  	$('.carousel.carousel-slider').carousel({fullWidth: true},setTimeout(autoplay));
  
  	function autoplay() {
  		$('.carousel').carousel('next');
  		setTimeout(autoplay, 5000);
  	}
	
  }

}
