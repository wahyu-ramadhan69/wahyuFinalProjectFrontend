import { Barang } from './barang';

export interface Supplier {
  _id?: string;
  alamat: string;
  nama: string;
  listBarang: Barang[];
}
