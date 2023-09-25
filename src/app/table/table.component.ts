import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {
  Datetimepicker,
  Modal,
  Ripple,
  initTE,
  Input as In,
  Datepicker,
} from 'tw-elements';
import { DataService } from '../services/data.service';
import { Supplier } from '../interface/supplier';
import { SupplierService } from '../services/supplier.service';
import { cart } from '../interface/cart';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  @Input() data: any;
  @Input() isClassForm: boolean = true;
  @Output() toggleClassForm = new EventEmitter<void>();
  carts: Supplier[] = [];
  constructor(
    private transaksiService: DataService,
    private supplierService: SupplierService
  ) {}
  suppliers: Supplier[] = [];

  formatCurrency(price: number): string {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(price);
  }

  addCart(cart: any) {
    let productCart: Supplier = {
      ...cart.listBarang,
      qty: 1,
    };
    this.carts.push(productCart);
  }

  loadSuppliers() {
    this.supplierService.getSuppliers().subscribe((data) => {
      this.suppliers = data;
    });
  }

  ngOnInit(): void {
    initTE({ Ripple, Modal, Datetimepicker, Datepicker, In, initTE });
    this.loadSuppliers();
  }

  toggleClass() {
    this.toggleClassForm.emit();
  }
}
