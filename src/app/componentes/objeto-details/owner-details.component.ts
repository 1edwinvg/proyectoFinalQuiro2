import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../_interface/Empleado.model';
import { Router, ActivatedRoute } from '@angular/router';
import { RepositoryService } from './../../shared/repository.service';
import { ErrorHandlerService } from './../../shared/error-handler.service';

@Component({
  selector: 'app-owner-details',
  templateUrl: './owner-details.component.html',
  styleUrls: ['./owner-details.component.css']
})
export class OwnerDetailsComponent implements OnInit {
  public owner: Empleado;
  public showAccounts;

  constructor(private repository: RepositoryService, private router: Router, 
    private activeRoute: ActivatedRoute, private errorHandler: ErrorHandlerService) { }

  ngOnInit() {
    this.getOwnerDetails();
  }

  private getOwnerDetails = () =>{
    let id: string = this.activeRoute.snapshot.params['id'];
    let apiUrl: string = `app/Empleado/${id}/account`;
 
    this.repository.getData(apiUrl)
    .subscribe(res => {
      this.owner = res as Empleado;
    },
    (error) =>{
      this.errorHandler.handleError(error);
    })
  }
}
