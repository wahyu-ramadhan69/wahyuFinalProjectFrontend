import { Component, Input, OnInit } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  data: any;
  title = 'tokoOnline';
  isClassAdded: boolean = true;
  isClassForm: boolean = true;

  constructor(private dataService: DataService) {}

  async ngOnInit() {
    await this.loadDataBarang();
  }

  async loadDataBarang() {
    try {
      const result = await this.dataService.getData().toPromise();
      this.data = result;
    } catch (error) {
      console.error('Gagal memuat data barang: ', error);
    }
  }

  toggleClass() {
    this.isClassAdded = !this.isClassAdded;
  }

  toggleClassForm() {
    this.isClassForm = !this.isClassForm;
  }

  onBarangAdded() {
    this.loadDataBarang();
  }
}
