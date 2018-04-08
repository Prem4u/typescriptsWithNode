import {GitRepoService} from "./GitRepoService";
import {User} from './User';

let svc: GitRepoService = new GitRepoService();
let args: string[] = process.argv;
if (args.length < 3) {
console.log("Please pass the username and run again !!")
}
else {
  console.log("Passed arguments =>" + args);
  let username=args[2];
  svc.getUserInfo(username, (user: User) => {
    console.log(user);
  });
}
