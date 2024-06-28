import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommunicationService } from '@core/services/communication.service';
import { UserAPI } from '@shared/constants/api-endpoints/user-api.const';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private communicationService:CommunicationService) { }

  get(size:number,num:number) {
    
      return this.communicationService.get<any>(UserAPI.get(size,num), null, null, false, false);
  }

}
