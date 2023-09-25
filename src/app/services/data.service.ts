import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'http://localhost:8080/barang/semua'; // Ganti dengan URL API yang sesuai

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}

@Injectable({
  providedIn: 'root',
})
export class TambahBarangService {
  constructor(private http: HttpClient) {}

  tambahBarang(barang: any) {
    const formData = new FormData();
    formData.append('nama', barang.nama);
    formData.append('harga', barang.harga.toString());
    formData.append('stok', barang.stok.toString());
    formData.append('deskripsi', barang.deskripsi);
    formData.append('gambar', barang.gambar);

    return this.http.post('http://localhost:8080/barang/simpan', formData);
  }
}
