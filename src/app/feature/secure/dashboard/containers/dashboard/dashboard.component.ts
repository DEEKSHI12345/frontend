import { Component, OnInit } from "@angular/core";
import { ComponentBase } from "@shared/abstracts/component-base";
import { DashboardService } from "../../services/dashboard.service";
import { Employee } from "../../model/employee";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent extends ComponentBase implements OnInit {
  allEmployees: Employee[] = []; 
  employees: Employee[] = [];
  totalRecords: number = 0;
  rows: number = 10;
  currentPage: number = 0;
  
  constructor(private dataService: DashboardService) {
    super();
  }

  override ngOnInit(): void {
    this.initVariables();
    this.subscribeEvents();
  }

  override initVariables(): void {
  }

  override subscribeEvents(): void {
    this.dataService.get().subscribe((data: Employee[]) => {
      this.allEmployees = data;
      this.totalRecords = this.allEmployees.length;
      this.loadPage(0); 
    });
  }

  loadPage(page: number) {
    const startIndex = page * this.rows;
    this.currentPage = page;
    this.employees = this.allEmployees.slice(startIndex, startIndex + this.rows);
    console.log(this.employees);
  }

  paginate(event: any) {
    console.log(event.page);
    this.loadPage(event.page);
  }

  override load(): void {
  }

  override unload(): void {
  }
}
