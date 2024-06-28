import { Component, OnInit } from "@angular/core";
import { ComponentBase } from "@shared/abstracts/component-base";
import { DashboardService } from "../../services/dashboard.service";
import { Employee } from "../../model/employee";
import { Table } from "primeng/table";
import * as FileSaver from 'file-saver';
import { LazyLoadEvent } from "primeng/api";
import { Subscription } from "rxjs";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent extends ComponentBase implements OnInit {
  allEmployees: Employee[] = []; 
  employees: Employee[] = [];
  totalRecords: number = 0;
  rows: number = 1000;
  currentPage: number = 0;
  sortField: string = '';
  sortOrder: number = 1;
  unsub!:Subscription;
  
  constructor(private dataService: DashboardService) {
    super();
  }

  loadCarsLazy(event: LazyLoadEvent) {
    setTimeout(() => {
      let loadedEmployees = this.allEmployees.slice(event.first ?? 0, ((event.first ?? 0) + (event.rows ?? 0)));
        Array.prototype.splice.apply(this.employees,[(event.first ?? 0), (event.rows ?? 0),...loadedEmployees]);
        this.employees = [...this.employees];
    }, 1000);
}

  override ngOnInit(): void {
    this.initVariables();
    this.subscribeEvents();
  }

  override initVariables(): void {
  }

  override subscribeEvents(): void {
    this.dataService.get(this.rows,this.currentPage).subscribe((data: Employee[]) => {
      this.allEmployees = data;
      console.log(this.allEmployees)
      //this.totalRecords = this.allEmployees.length;
      
    });
  }

  exportExcel(){
    import("xlsx").then(xlsx => {
      const worksheet = xlsx.utils.json_to_sheet(this.allEmployees);
      const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
      this.saveAsExcelFile(excelBuffer, "employees");
      //xlsx.writeFile(workbook, 'employees.xlsx');
    });
  }
 
  saveAsExcelFile(buffer:any,fileName:string):void{
    let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    let EXCEL_EXTENSION = '.xlsx';
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
  }

  
  clear(table: Table) {
    table.clear();
}

  loadPage(rows:number,page: number) {
    // const startIndex = page * rows;
    // const row=rows;
    // this.currentPage = page;
    // this.employees = this.allEmployees.slice(startIndex, startIndex + row);
    // console.log(this.employees);

    // this.dataService.get(rows,page).subscribe((data: Employee[]) => {
    //   this.allEmployees = data;
    //   this.totalRecords = this.allEmployees.length;
      
    // });
    this.currentPage=page;
    this.subscribeEvents();
  }

  paginate(event: any) {
    console.log(event.page);
    this.loadPage(event.rows,event.page);
  }

  override load(): void {
  }

  override unload(): void {
    //this.unsub.unsubscribe();
  }
}
