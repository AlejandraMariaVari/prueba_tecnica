import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SetFormService } from '../../services/set-form.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
   title: string;
   name: string;
   email: string;
   cellphone_number: number;
   age: number;

   constructor(private route: ActivatedRoute, private router: Router, private _form: SetFormService) {
       this.title = this.route.snapshot.params['type'];
       //  Force reload if the url have changes
       this.router.routeReuseStrategy.shouldReuseRoute = () => false;
   }

   storeForm() {
		this._form.setData(
			this.name,
			this.email,
			this.cellphone_number,
			this.age)
		.subscribe(data => {
			let response = <any>data.body;
			if (data.status == 200) {
			   alert(response.response);
			}
		},
		error => {
			alert(error.error.response);
		});
	}

  ngOnInit() {
      this.route.params.subscribe(
        params => {
            const id = +params['type'];
        }
    );
  }

}
