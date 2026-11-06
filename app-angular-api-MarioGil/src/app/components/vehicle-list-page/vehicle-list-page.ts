import { Component, inject, Input, output, TemplateRef, signal } from '@angular/core';
import { NgbActiveModal,NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { VehicleItemComponent } from '../vehicle-item-component/vehicle-item-component';
import { VehicleDetailResponse } from '../../interfaces/vehicle-detail-response';
import { VehicleListResponse } from '../../interfaces/vehicle-list-response';
import { VehicleService } from '../../services/vehicle-service'
import { VehicleModal } from '../vehicle-modal/vehicle-modal'

@Component({
  imports: [VehicleItemComponent],
  selector: 'app-vehicle-list-page',
  styleUrl: './vehicle-list-page.css',
  templateUrl: './vehicle-list-page.html',
})
export class VehicleListPage {


  vehicleService = inject(VehicleService);
  vehicleList = signal<Vehicle[]>([]);
  private modalService = inject(NgbModal);
  


  ngOnInit() : void  {

    this.vehicleService.getAll().subscribe(resp => {
      this.vehicleList.set(resp.results);
    }
    );
  }


  openVehicleModal(id: string) {
    
    this.vehicleService.getOne(id).subscribe(resp => {

      const modalRef = this.vehicleService.open(VehicleModal);
        modalRef.componentInstance.vehicleDetail = resp;

      



    })

    



  }










}
