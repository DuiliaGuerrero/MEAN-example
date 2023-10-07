import { Component, OnInit } from '@angular/core';
import { GoalsService } from '../../service/goals.service'; // Reemplaza 'path-to-goals-service' con la ubicación real de tu servicio GoalsService

@Component({
  selector: 'app-savings',
  templateUrl: './savings.component.html',
  styleUrls: ['./savings.component.css']
})

export class SavingsComponent implements OnInit {
  goals: any[] = []; // Suponemos que tienes una interfaz o tipo para representar la estructura de una meta
  selectedGoalId: string | null = null;

  constructor(private goalsService: GoalsService) {}

  ngOnInit() {
    this.goalsService.getAll().subscribe((data) => {
      this.goals = data;
    });
  }

  onGoalSelect() {
    // En este método, puedes obtener el ID de la meta seleccionada desde this.selectedGoalId
    console.log('ID de la meta seleccionada:', this.selectedGoalId);
  }
}