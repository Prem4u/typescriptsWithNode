import {Repository} from "./Repository";
export class User {
  private name: string;
  private followers: number;
  private repoUrl: string;
  private repos?: Repository[];

  constructor(res: any, repos?: Repository[]) {
    this.name = res.login;
    this.followers = res.followers;
    this.repoUrl = res.repos_url;
    this.repos = repos;
  }
  test(): void {
    console.log("Test successfull !!")
  }


}
