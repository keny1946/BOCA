import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-problems',
  templateUrl: './problems.component.html',
  styleUrls: ['./problems.component.css']
})
export class ProblemsComponent implements OnInit {
  problem: string;
  full: string;
  base: string;
  desc: string;
  package: string;
  color: string;
  datos: any;
  constructor() {
    this.problem = '',
      this.full = '',
      this.base = '',
      this.desc = '',
      this.package = '',
      this.color = '',
      this.datos = []
  }

  ngOnInit(): void {
  }
  problems() {
    const datosProblemas = {
      problem: this.problem,
      full: this.full,
      base: this.base,
      desc: this.desc,
      package: this.package,
      color: this.color
    };
    this.datos.push(datosProblemas);
  }
  delete(index) {
    this.datos.splice(index, 1);
  }

}
