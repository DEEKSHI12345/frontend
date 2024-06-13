import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommunicationService } from '@core/services/communication.service';
import { UserAPI } from '@shared/constants/api-endpoints/user-api.const';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private communicationService:CommunicationService) { }

  get() {
    
      return this.communicationService.get<any>(UserAPI.get(), null, null, false, false);
  }

}
