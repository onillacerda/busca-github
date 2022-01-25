import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
	private userName = 'onillacerda';
	private clientId = 'e32f823e0316bd241a53';
	private clientSecret= '9a60fcb6810ae6d959718cba246d2a86edee206f';
  
  constructor(private _http:Http) {
    
    
   }
   getUser(){
   	return this._http.get('https://api.github.com/users/' + this.userName + '?client_id='
   + this.clientId + '&client_secret=' + this.clientSecret)
   .map(res => res.json());
   }
 
   getRepos(){
   	return this._http.get('https://api.github.com/users/' + this.userName + '/repos?client_id='
   + this.clientId + '&client_secret=' + this.clientSecret)
   .map(res => res.json());
	}

   getStarred(){
   	return this._http.get('https://api.github.com/users/' + this.userName + '/starred?client_id='
   + this.clientId + '&client_secret=' + this.clientSecret)
   .map(res => res.json());
	}

	updateUser(userName:string){
		this.userName = userName;

   }

}
