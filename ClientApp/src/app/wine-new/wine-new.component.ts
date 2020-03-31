import {Component, OnDestroy, OnInit} from '@angular/core';
import {WineRepository} from "../services/wine-repository.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {OAuthService} from "angular-oauth2-oidc";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-wine-new',
  templateUrl: './wine-new.component.html',
  styleUrls: ['./wine-new.component.scss']
})

export class WineNewComponent implements OnInit, OnDestroy {
  wineForm: FormGroup;
  public isLoggedIn: boolean;
  private authSubscription: Subscription;

  constructor(private wineRepository: WineRepository, private fb: FormBuilder, private oAuthService: OAuthService) {
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
    this.authSubscription = this.oAuthService.events.subscribe(_ => this.updateStatus());
    this.updateStatus();
  }

  ngOnDestroy(): void {
    if(this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }

  private updateStatus() {
    this.isLoggedIn = this.oAuthService.hasValidAccessToken();
  }

  onSubmit() {
    this.wineRepository.add(this.wineForm.value).subscribe();
  }

}
