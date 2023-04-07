class Employee{
    private readonly empno:number;//it can assign value only in constructor beacuz of keyword readonly.
                                //it will treat similsr as finally
    private ename:string;
    private sal:number;
    private attendence:number;
    
     public getEmpno():number{
       return this.empno;
     }
     public getEname():string{
        return this.ename;
      }
      public getSal():number{
        return this.sal;
      }
      public getAttendance():any{
        return this.attendence;
      }
      
      
      

   /*constructor(){//constructor overloading is not possible 
        this.empno=101;
        this.ename="abc";
        this.sal=1000;
        this.attendence=25;
    }*/
    constructor(empno:number,ename:string,sal:number,attendance:any){
        this.empno=empno;
        this.ename=ename;
        this.sal=sal;
        this.attendence=attendance;
    }

    print():void{
   console.log(this.empno,this.ename,this.sal,this.attendence);

    }
}
/*var emp=new Employee();
var emp1=new Employee();
emp1.empno=102;
var emp2=new Employee();
emp2.empno=103;
emp.print();
emp1.print();
emp2.print();*/
let emp=new Employee(101,"abc",7000,20);
let emp1=new Employee(102,"def",8000,28);
let emp2=new Employee(103,"ghi",7500,22);
let emp3=new Employee(104,"klm",9000,30);
emp.print();
emp1.print();
emp2.print();
emp3.print();

class Employee1{
    private  fempno:number;
    private fname !:string;
    private fsal:number;
    private fattendence:number;
    
    constructor(fempno:number,fname:string,fsal:number,fattendance:number){
        this.fempno=fempno;
        this.fname=fname;
        this,fsal=fsal;
        this.fattendence=fattendance;
    }
      getFname():string{
        return this.fname;
      }
    }
   let e1=new Employee1(101,"a",1000,3);
  console.log(e1.getFname());

  var emparray:Employee[]=[emp,emp1,emp2,emp3];
  emparray.forEach(function (empa) {
    console.log(empa);
});