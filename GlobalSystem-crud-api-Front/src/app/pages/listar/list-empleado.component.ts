import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/model/empleado';
import { EmpleadoService } from 'src/app/service/empleado.service';

@Component({
  selector: 'app-list-empleado',
  templateUrl: './list-empleado.component.html',
  styleUrls: ['./list-empleado.component.css']
})
export class ListEmpleadoComponent implements OnInit {
  empleados: Empleado[] = [];
  filteredEmpleados: Empleado[] = [];
  paginatedEmpleados: Empleado[] = [];
  searchQuery: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 10;
  totalItems: number = 0;

  constructor(private empleadoService: EmpleadoService) {}

  ngOnInit(): void {
    this.listEmpleados();
  }

  listEmpleados(): void {
    this.empleadoService.getEmpleados().subscribe(data => {
      this.empleados = data;
      this.totalItems = this.empleados.length;
      this.filterEmpleados();
    });
  }

  filterEmpleados(): void {
    const query = this.searchQuery.toLowerCase();
    this.filteredEmpleados = this.empleados.filter(empleado => 
      empleado.primer_nombre.toLowerCase().includes(query) ||
      (empleado.otros_nombre && empleado.otros_nombre.toLowerCase().includes(query)) ||
      empleado.primer_apellido.toLowerCase().includes(query) ||
      empleado.segundo_apellido.toLowerCase().includes(query) ||
      empleado.identificacion_tipo.nombre.toLowerCase().includes(query) ||
      empleado.numero_identificacion.toLowerCase().includes(query) ||
      empleado.pais.nombre.toLowerCase().includes(query) ||
      empleado.email.toLowerCase().includes(query)
    );
    this.totalItems = this.filteredEmpleados.length;
    this.paginateEmpleados();
  }

  deleteEmpleado(id: number): void {
    if (confirm('¿Está seguro de que desea eliminar el empleado?')) {
      this.empleadoService.deleteEmpleado(id).subscribe(() => {
        this.listEmpleados();
      });
    }
  }

  paginateEmpleados(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedEmpleados = this.filteredEmpleados.slice(startIndex, endIndex);
  }

  nextPage(): void {
    if (this.currentPage * this.itemsPerPage < this.totalItems) {
      this.currentPage++;
      this.paginateEmpleados();
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.paginateEmpleados();
    }
  }

  goToFirstPage(): void {
    this.currentPage = 1;
    this.paginateEmpleados();
  }

  goToLastPage(): void {
    this.currentPage = Math.ceil(this.totalItems / this.itemsPerPage);
    this.paginateEmpleados();
  }

  getStartIndex(): number {
    return (this.currentPage - 1) * this.itemsPerPage + 1;
  }

  getEndIndex(): number {
    return Math.min(this.currentPage * this.itemsPerPage, this.totalItems);
  }
}