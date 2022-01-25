import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github-services/github.service';


@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css'],
  providers:[GithubService]

})
export class GithubComponent implements OnInit {
	user:any[];
	repos:any[];
	starred: any[];
	userName:string;

	repositorio=false;
	acessados=false;

  constructor(private githubService:GithubService) {
  	this.githubService.getUser().subscribe(user => {
  		
  		this.user = user;
  	});

  	this.githubService.getRepos().subscribe(repos => {
  		
  		this.repos = repos;
  	});

	this.githubService.getStarred().subscribe(starred => {
  		
  		this.starred = starred;
  	});

  }
  	
  findProfile(){

  	this.githubService.updateUser(this.userName);

  	this.githubService.getUser().subscribe(user => {
  		
  		this.user = user;
  	});

  	this.githubService.getRepos().subscribe(repos => {
  		
  		this.repos = repos;
  	});

	this.githubService.getStarred().subscribe(starred => {
  		
  		this.starred = starred;
  	});

  }


  ngOnInit() {
  }

}
