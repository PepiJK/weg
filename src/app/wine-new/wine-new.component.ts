import {Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {WineRepository} from "../services/wine-repository.service";
import {Wine} from "../models/wine";

declare var M;

@Component({
  selector: 'app-wine-new',
  templateUrl: './wine-new.component.html',
  styleUrls: ['./wine-new.component.scss']
})

export class WineNewComponent implements OnInit {
  @ViewChildren("input") inputs: QueryList<any>;
  wine: Wine = new Wine();

  constructor(private wineRepository: WineRepository) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    // add wine
    this.wineRepository.addToBegin(this.wine);

    // reset materialize form inputs
    this.inputs.toArray().forEach(input => {
      input.nativeElement.value = '';
      input.nativeElement.classList.remove('valid', 'ng-untouched,', 'ng-pristine', 'ng-invalid', 'ng-valid', 'ng-touched', 'ng-dirty');
      if (input.nativeElement.id !== 'harvest') input.nativeElement.nextElementSibling.classList.remove('active');
      if (input.nativeElement.id === 'description') input.nativeElement.style.height = '44px';
    });

    // show success message
    M.toast({html: 'Wein hinzugefügt!'})
  }

}
