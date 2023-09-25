import {
  Component,
  ElementRef,
  Input as In,
  OnInit,
  ViewChild,
  Output,
  EventEmitter,
} from '@angular/core';
import { Ripple, Input, initTE } from 'tw-elements';
import { DataService, TambahBarangService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formbarang',
  templateUrl: './formbarang.component.html',
  styleUrls: ['./formbarang.component.css'],
})
export class FormbarangComponent implements OnInit {
  @In() isClassForm: boolean = true;
  @Output() barangAdded: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
    initTE({ Ripple, Input });
  }

  barang: any = {
    nama: '',
    harga: null,
    stok: null,
    deskripsi: '',
    gambar: null, // Gunakan null untuk file input
  };

  gambarPreview: string | ArrayBuffer | null = null;

  @ViewChild('gambarInput') gambarInput!: ElementRef;

  constructor(
    private tambahBarangService: TambahBarangService,
    private router: Router
  ) {}

  // Fungsi untuk menambahkan barang
  tambahBarang() {
    const gambarInput = this.gambarInput.nativeElement;
    if (gambarInput.files.length === 0) {
      console.error('Silakan pilih gambar terlebih dahulu.');
      return;
    }

    const file = gambarInput.files[0];
    this.barang.gambar = file;

    this.tambahBarangService.tambahBarang(this.barang).subscribe(
      () => {
        this.barangAdded.emit();
      },
      (error) => {
        console.error('Gagal menambah data barang: ', error);
      }
    );
  }

  previewGambar(event: any) {
    const fileInput = event.target;
    if (fileInput.files.length === 0) {
      console.error('Silakan pilih gambar terlebih dahulu.');
      return;
    }

    const file = fileInput.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target && e.target.result) {
          this.gambarPreview = e.target.result as string;
        } else {
          console.error('Gagal membaca gambar.');
        }
      };
      reader.readAsDataURL(file);
    } else {
      this.gambarPreview = null;
    }
  }
}
