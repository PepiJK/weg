import {Component, OnInit} from '@angular/core';
import {WineRepository} from "../services/wine-repository.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-wine-new',
  templateUrl: './wine-new.component.html',
  styleUrls: ['./wine-new.component.scss']
})

export class WineNewComponent implements OnInit {
  wineForm: FormGroup;

  constructor(private wineRepository: WineRepository, private fb: FormBuilder) {
    this.wineForm = this.fb.group({
      title: ['', Validators.required],
      producer: ['', Validators.required],
      type: ['', Validators.required],
      harvest: ['', Validators.required],
      price: ['', Validators.required],
      description: ['']
    });

  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.wineRepository.add(this.wineForm.value).subscribe();
  }

}
