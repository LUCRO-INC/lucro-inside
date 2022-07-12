import { Component, OnInit } from '@angular/core';
import { Solucion } from 'src/app/@core/models/solucionesModel/solucion';
import { SolutionsService } from 'src/app/@core/services/solutions.service';

@Component({
  selector: 'app-soluciones-test',
  templateUrl: './soluciones-test.component.html',
  styleUrls: ['./soluciones-test.component.scss'],
})
export class SolucionesTestComponent implements OnInit {
  public soluciones: Solucion[] = [];

  constructor(private solutions: SolutionsService) {}

  async ngOnInit() {
    const c = await this.solutions.get();
    this.soluciones = c.Soluciones;
  }
}
