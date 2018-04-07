export class User{
    private name:string;
    private followers:number;
    private repoUrl:string;
    private repos:string[];
    
    constructor(res:any){
      this.name=res.login;
      this.followers=res.followers;
      this.repoUrl=res.repos_url;
      this.repos=res.public_repos;
      
    }
   test():void{
       console.log("Test successfull !!")
   }

    
}
