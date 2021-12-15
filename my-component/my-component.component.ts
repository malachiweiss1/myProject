import { Component, Input, OnInit , Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit 
{
  text = "_";
  active = true;
  turn = 0;
  @Output() mess = new EventEmitter<{n:string}>();
  constructor()
  {
  }
  sendMess(name:string)
  {
    this.mess.emit({n: name });
  }
  data = [["_","_","_"],["_","_","_"],["_","_","_"]];
  equal(a:string , b:string , c:string)
    {
      if(a==b && b==c && a!= "_")
        return true;
      return false;
    }
  check(flag: boolean , i: string)
    {
      if(flag == true)
      {
        this.sendMess(i.toString());
        this.active = false;
      }
    }
  check_win()
    {
      let flag = false;
        for(let i = 0 ; i < 3 ; i++)
        {
          flag = this.equal(this.data[i][0],this.data[i][1],this.data[i][2]);
          this.check(flag , this.data[i][0]);
        }
        for(let i = 0 ; i < 3 ; i++)
        {
          flag = this.equal(this.data[0][i],this.data[1][i],this.data[2][i]);
          this.check(flag , this.data[0][i]);
        }
        flag = this.equal(this.data[0][0] ,this.data[1][1] ,this.data[2][2]) || this.equal(this.data[0][2] ,this.data[1][1] ,this.data[2][0]);
        this.check(flag , this.data[1][1]);
    }
  clicked($event: any , index: number) 
    {
      let temp = "X";
      if(this.data[Math.floor(index/3)][index%3] == "_")
      {
        if(this.turn % 2 != 0)
          temp = "O";
        this.data[Math.floor(index/3)][index%3] = temp;
        this.turn++;
      }
      this.check_win();
    }
  ngOnInit(): void { }
}