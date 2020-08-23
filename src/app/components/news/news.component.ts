import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  public title = "我是新聞組件";

  msg="我是一個新聞組件的msg";

  //定義數據時指定類型
  username:string="張三";

  //推薦使用以下方式定義數據
  public student:string='我是一個學生的屬性(數據)'

  public userinfo:any={
    username: '張三',
    age:'20'
  }

  public message:any;

  public content="<h2>我是一個html標籤</h2>"

  //定義陣列

  public arr=['1111','22222','33333']

  //推薦
  public list:any[]=['我是一個新聞','222222222','我是第三個新聞']

  public items:Array<any>=['我是一個新聞','222222222','我是第三個新聞']

  public userlist:any[]=[{
    username:'張三',
    age:20
  },{
    username: '李四',
    age:22
  },{
    username: '王五',
    age:25
  }]
  
  public cars:any[]=[{
    cate:"寶馬",
    list:[{
      title: '寶馬X1',
      price:'30w'
    },{
      title: '寶馬X2',
      price:'40w'
    },{
      title: '寶馬X3',
      price:'50w'
    }]
  },{
    cate:"奧迪",
    list:[{
      title: '奧迪X1',
      price:'30w'
    },{
      title: '奧迪X2',
      price:'40w'
    },{
      title: '奧迪X3',
      price:'50w'
    }]
  }]
  /*
    聲明屬性的幾種方式:

    public : 公有           在類裡面 子類 類外面都可以訪問
    protected : 保護類型    在類裡面、子類裡面可以訪問，在類外部沒法訪問
    private : 私有          在類裡面可以訪問，子類、類外部都沒法訪問
  */
  constructor() { 
    
    this.message="這是給屬性賦值 (改變屬性的值)"
  
    //獲取屬性的值
    console.log(this.msg);

    //改變後的值
    this.msg="我是改變後的值"
  }

  ngOnInit(): void {
  }

}
