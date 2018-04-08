export class Repository {
  private name: string;
  private description: string;
  private url: string;
  private noOfForks: string;


  constructor(res: any) {
    this.name = res.name;
    this.description = res.description;
    this.url = res.html_url;
    this.noOfForks = res.forks;
 

  }

  test(): void {
    console.log("Test Successfull !!");
  }

}