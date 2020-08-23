import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  
  public picUrl='http://wordpress.bestdaylong.com/wp-content/uploads/2019/07/%E7%8E%89%E5%85%8D%E5%90%83%E6%9C%88%E9%A4%85.jpg';
  
  public list:any[]=[
    {
      "title":"我是新聞1"
    },
    {
      "title":"我是新聞1"
    },
    {
      "title":"我是新聞1"
    },
  ]

  public flag:boolean=true;

  public orderStatus:number=1 /* 1表示以支付 2支付並確認訂單 3表示已經發貨 4表示已經收貨 5表示無效 */
  
  public attr:string='red'

  public today:any=new Date();

  constructor() {
    console.log(this.today)
  }

  ngOnInit(): void {
  }

  run(){
    alert('執行方法')
  }
  getData() {
    alert(this.list[0].title)
  }
  setData() {
    alert(this.list[0].title = "我是改變後的新聞")
  }
  keyDown() {
    console.log('1111')
  }
}
