var Employee = /** @class */ (function () {
    /*constructor(){
         this.empno=101;
         this.ename="abc";
         this.sal=1000;
         this.attendence=25;
     }*/
    function Employee(empno, ename, sal, attendance) {
        this.empno = empno;
        this.ename = ename;
        this.sal = sal;
        this.attendence = attendance;
    }
    Employee.prototype.print = function () {
        console.log(this.empno, this.ename, this.sal, this.attendence);
    };
    return Employee;
}());
/*var emp=new Employee();
var emp1=new Employee();
emp1.empno=102;
var emp2=new Employee();
emp2.empno=103;
emp.print();
emp1.print();
emp2.print();*/
var emp = new Employee(101, "abc", 7000, 20);
var emp1 = new Employee(102, "def", 8000, 28);
var emp2 = new Employee(103, "ghi", 7500, 22);
var emp3 = new Employee(104, "klm", 9000, 30);
emp.print();
emp1.print();
emp2.print();
emp3.print();
