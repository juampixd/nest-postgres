export class ResponseCustom {
  private status: number;
  private error: boolean;
  private data: any;

  constructor(status: number, data: any) {
    this.status = status;
    this.error = false;
    this.data = data;
  }
}
