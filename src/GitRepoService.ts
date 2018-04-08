import * as request from 'request';
import {User} from './User';
import {Repository} from './Repository'
import * as _ from 'lodash';

const options = {
  headers: {
    "User-agent": "request"
  },
  json: true

};
const gitUrl: string = "https://api.github.com/users/";

export class GitRepoService {


  constructor() {

  }

  getUserInfo(userName, callback: (user: User) => any) {
    let gitUserInfoUrl: string = gitUrl + userName;
    let getRepoUrl: string = gitUserInfoUrl + "/repos";
    let repos: Repository[];
    console.log(`gitUrl-> ${gitUserInfoUrl}`);
    request.get(gitUserInfoUrl, options, (response: any, error: any, body: any) => {
      let userInfo = body;
      request.get(getRepoUrl, options, (response: any, error: any, body: any) => {
        console.log(`getRepoUrl-> ${getRepoUrl}`);
        if (body instanceof Array) {
          repos = body.map((x) => new Repository(x));
        } else {
          repos = null;
        }
        let user = new User(userInfo, repos);
        callback(user);
      }
      );

    });


  }



}