import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute, 
    private router:Router) { }

  ngOnInit(): void {
  }
  paymentConfirmation(){
    this.router.navigateByUrl('/payment')
  }

}
