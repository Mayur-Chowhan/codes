import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpRequestService } from '../http-request.service';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {


  devicesList:any;
  employeeList:any;
  deviceId:any;

  constructor(private router :Router,private http:HttpRequestService) { }

  ngOnInit(): void {
    this.getAllDevices();
  }

  searchMethod(){
    console.log("search bar");
  }
  getAllDevices(){
    this.http.getDevices().subscribe((res)=>{
    this.devicesList=res;
    console.log(res);
    })
  }
  getEmployeesToAssign(dId:any){
      this.router.navigate(['/admin/admin/devices/employeePopUp'])
    }
  addDevice(){
    this.router.navigate(['/admin/admin/devices/add-device'])
    this.getAllDevices();
  }


}
