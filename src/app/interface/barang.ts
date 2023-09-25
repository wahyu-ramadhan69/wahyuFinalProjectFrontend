export interface Barang {
  _id: string;
  deskripsi: string;
  namaBarang: string;
  harga: number;
}

export interface ItemBarang extends Barang {
  qty: number;
  subtotal: number;
}
