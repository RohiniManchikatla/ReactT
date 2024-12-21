class Student{
    constructor(){
        this.id=111;
        this.name="Rohini";
    }
    displayInfo(){
        console.log(this.id+" "+this.name)
    }
}
let s=new Student();
s.displayInfo();