import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Student } from '../../module/Student';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent {
  students:Student[] =[];
  message:string = '';
  colorClass:string = '';

  constructor(){
    let s1 = new Student(1,"Nivasan",2,87.5,["Java","Python"]);
    let s2 = new Student(2,"Jayes",1,90.5,["JavaScprit","C++"]);
    let s3 = new Student(3,"Navin",2,87.5,["Java","Python"]);
    let s4 = new Student(4,"Mano",2,87.5,["Java","Python"]);
    let s5 = new Student(5,"Mani",2,87.5,["Java","Python"]);
    this.students.push(s1);
    this.students.push(s2);
    this.students.push(s3);
    this.students.push(s4);
    this.students.push(s5);
  }

  showStudents(){
    
  }

  deleteStudent(rollNo:number){
    if(confirm("Delete the Student with Roll No:"+rollNo)){
      this.students = this.students.filter(s => s.rollNo != rollNo);
      this.message = 'Record Delete :)';
      this.colorClass = 'success';
    }
    else{
      this.message = 'Deletion Cancled !';
      this.colorClass = 'error';
    }
  }

  updateStudent(s:Student){
    console.log(s);
  }

}
