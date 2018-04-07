import * as request from 'request';
import {User} from './User';

const options={
        headers:{
            "User-agent":"request"
        },
      json:true
        
    };
const gitUrl:string="https://api.github.com/users/";

export class GitRepoService{
  
  
     constructor(){
       
     }
     
    getUserInfo(userName){
        let gitFullUrl:string=gitUrl+userName;
        console.log(`gitUrl-> ${gitFullUrl}`);
        request.get(gitFullUrl, options, (response:any,error:any,body:any)=>{
            let user=new User(body);
            console.log(user);
            
        })
        
        
    }
    
} 