import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  registerform!:FormGroup
  ishoww=false
  dataArray:any[]=[]
  iseditbut:boolean=false
  i:number=0

  constructor(){}
  ngOnInit(): void {
    this.registerform= new FormGroup({
      name: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required,Validators.email]),
      phone: new FormControl('',[Validators.required,Validators.pattern(/^\d{10}$/)]),
      address: new FormControl('',[Validators.required]),
      gender: new FormControl('',[Validators.required]),
    })
  }

  submit(){
    const user= this.registerform.getRawValue()
    this.dataArray.push(user)
    this.registerform.reset()
    this.ishoww=false
  }

  removepopup(){
    this.ishoww=false
    this.registerform.reset()
  }
  editset(i:number){
    this.ishoww=true
    this.iseditbut=true
    const editdata= this.dataArray[i]
    this.i=i
    this.registerform= new FormGroup({
      name: new FormControl(editdata.name,[Validators.required]),
      email: new FormControl(editdata.email,[Validators.required,Validators.email]),
      phone: new FormControl(editdata.phone,[Validators.required,Validators.pattern(/^\d{10}$/)]),
      address: new FormControl(editdata.address,[Validators.required]),
      gender: new FormControl(editdata.gender,[Validators.required]),
    })
  }

  get email(){
    return this.registerform.get('email')
  }
  get name(){
    return this.registerform.get('name')
  }
  get phone(){
    return this.registerform.get('phone')
  }
  get address(){
    return this.registerform.get('address')
  }

  showpopup(){
    this.ishoww=true
  }

  editconfirm(){
    const edituser= this.registerform.getRawValue()
    this.dataArray[this.i]=edituser
    this.registerform.reset()
    this.iseditbut=false
    this.ishoww=false
  }

 
}
