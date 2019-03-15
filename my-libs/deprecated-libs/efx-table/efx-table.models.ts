export class EquifaxTableConfig {
  columns: string[];
  rows: { [name: string]: string | number | Date | boolean }[];

  constructor(rowData: { [name: string]: string | number | Date | boolean }[]) {
    if (rowData[0]) this.columns = Object.keys(rowData[0]);
    this.rows = rowData;
  }
}
