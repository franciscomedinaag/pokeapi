import { Component, OnInit } from '@angular/core';
declare var require: any
const FileSaver = require('file-saver');

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  downloadPdf() {
    const pdfUrl = 'assets/Jose_Francisco_Medina_Aguayo_CV.pdf';
    const pdfName = 'Jose_Francisco_Medina_Aguayo_CV.pdf';
    FileSaver.saveAs(pdfUrl, pdfName);
  }

}
