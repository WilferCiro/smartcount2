/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.scss'],
})
export class CompanyFormComponent implements OnInit {
  
  countries = [
    { value: 1, label: 'Colombia' },
    { value: 2, label: 'Estados Unidos' },
  ];

  states = [
    { value: 1, label: 'Antioquia' },
    { value: 2, label: 'Cundinamarca' },
  ];

  cities = [
    { value: 1, label: 'Medellín' },
    { value: 2, label: 'Cundinamarca' },
  ];

  currencies = [
    { value: 'COP', label: 'Peso Colombiano (COP)' },
    { value: 'USD', label: 'Dólar Estadounidense (USD)' },
  ];

  thirdTypes = [
    { value: 'Empleado', label: 'Empleado' },
    { value: 'Vendedor', label: 'Vendedor' },
    { value: 'Cliente', label: 'Cliente' },
    { value: 'Proveedor', label: 'Proveedor' },
  ];

  identificationTypes = [
    { value: 11, label: 'Registro civil nacimiento' },
    { value: 12, label: 'Tarjeta de identidad' },
    { value: 13, label: 'Cédula de ciudadanía' },
    { value: 21, label: 'Tarjeta de extranjería' },
    { value: 22, label: 'Cédula de extranjería' },
    { value: 31, label: 'Nit' },
    { value: 41, label: 'Pasaporte' },
    { value: 42, label: 'Tipo documento extranjero' },
    { value: 43, label: 'Sin identificación del exterior' },
  ];

  statuses = [
    { value: 1, label: 'Activo' },
    { value: 2, label: 'Inactivo' },
  ];

  companyTypes = [
    { code: 'natural', label: 'Natural' },
    { code: 'juridica', label: 'Jurídica' },
  ];

  taxResponsibilities = [
    { code: 1, label: 'Aporte especial para la administración de justicia' },
    { code: 2, label: 'Gravamen a los movimientos financieros' },
    { code: 3, label: 'Impuesto al patrimonio' },
    { code: 4, label: 'Impuesto renta y complementario régimen especial' },
    { code: 5, label: 'Impuesto renta y complementario régimen ordinario' },
    { code: 6, label: 'Ingresos y patrimonio' },
    { code: 7, label: 'Retención en la fuente a título de renta' },
    { code: 8, label: 'Retención timbre nacional' },
    { code: 9, label: 'Retención en la fuente en el impuesto sobre las ventas' },
    { code: 10, label: 'Obligado aduanero' },
    { code: 13, label: 'Gran contribuyente' },
    { code: 14, label: 'Informante de exógena' },
    { code: 15, label: 'Autorretenedor' },
    { code: 16, label: 'Obligación facturar por ingresos bienes y/o servicios excluidos' },
    { code: 17, label: 'Profesionales de compra y venta de divisas' },
    { code: 18, label: 'Precios de transferencia' },
    { code: 19, label: 'Productor de bienes y/o servicios exentos' },
    { code: 20, label: 'Obtención NIT' },
    { code: 21, label: 'Declarar ingreso o salida del país de divisas o moneda' },
    { code: 22, label: 'Obligado a cumplir deberes formales a nombre de terceros' },
    { code: 23, label: 'Agente de retención en ventas' },
    { code: 24, label: 'Declaración consolidada precios de transferencia' },
    { code: 26, label: 'Declaración individual precios de transferencia' },
    { code: 32, label: 'Impuesto nacional a la gasolina y al ACPM' },
    { code: 33, label: 'Impuesto nacional al consumo' },
    { code: 36, label: 'Establecimiento Permanente' },
    { code: 37, label: 'Obligado a Facturar Electrónicamente' },
    { code: 38, label: 'Facturación Electrónica Voluntaria' },
    { code: 39, label: 'Proveedor de Servicios Tecnológicos PST' },
    { code: 41, label: 'Declaración anual de activos en el de rendimientos financieros' },
    { code: 46, label: 'IVA Prestadores de Servicios desde el Exterior' },
    { code: 47, label: 'Régimen Simple de Tributación – SIMPLE' },
    { code: 48, label: 'Impuesto sobre las ventas – IVA' },
    { code: 49, label: 'No responsable de IVA' },
    { code: 50, label: 'No responsable de Consumo restaurantes y bares' },
    { code: 51, label: 'Agente retención impoconsumo de bienes inmuebles' },
    { code: 52, label: 'Facturador electrónico' },
    { code: 53, label: 'Persona Jurídica No Responsable de IVA' },
  ];
  inventoryTypes = [
    { code: '0', label: 'Permanente' },
    { code: '1', label: 'Periódico' },
  ];

  yesNoOptions = [
    { code: '0', label: 'Sí' },
    { code: '1', label: 'No' },
  ];
  paymentMethods = [
    { code: 'cash', label: 'Efectivo' },
    { code: 'debit_credit_card', label: 'Tarjeta Débito/Crédito' },
    { code: 'check', label: 'Cheque' },
    { code: 'electronic_transfer', label: 'Transferencia Electrónica' },
  ];

  banks = {
    cash: [] as string[],
    debit_credit_card: [
      'Banco Av Villas', 
      'Banco Bbva', 
      'Banco Davivienda', 
      'Banco de Bogotá', 
      'Banco de Occidente', 
      'Banco Itaú', 
      'Banco Popular', 
      'Banco Sudameris', 
      'Bancolombia'
    ],
    check: [
      'Banco Agrario', 
      'Banco Av Villas', 
      'Banco Bbva', 
      'Banco Caja Social', 
      'Banco Citibank', 
      'Banco Scotiabank Colpatria', 
      'Banco Davivienda', 
      'Banco de Bogotá', 
      'Banco de Occidente', 
      'Banco Itaú', 
      'Banco Popular', 
      'Banco Sudameris', 
      'Bancolombia'
    ],
    electronic_transfer: [
      'Banco Agrario', 
      'Banco Av Villas', 
      'Banco Bbva', 
      'Banco Caja Social', 
      'Banco Citibank', 
      'Banco Scotiabank Colpatria', 
      'Banco Davivienda', 
      'Banco de Bogotá', 
      'Banco de Occidente', 
      'Banco Itaú', 
      'Banco Popular', 
      'Banco Sudameris', 
      'Bancolombia'
    ]
  };

  selectedPaymentMethod = '';
  availableBanks: string[] = [];
  tipoCuentaOptions = [
    { code: 1, label: 'Puc Comercial' },
    { code: 2, label: 'Puc Coperativo' },
    { code: 3, label: 'Puc Hospitalario' },
    { code: 4, label: 'Puc Oficial' },
    { code: 5, label: 'Puc Servicios Públicos' },
    { code: 6, label: 'Pux Niif' },
  ];
  
  tipoNivelOptions = [
    { code: 'D', label: 'Detalle' },
    { code: 'G', label: 'General' },
  ];
  
  controlTercerosOptions = [
    { code: 1, label: 'Anual' },
    { code: 2, label: 'Acumulado' },
    { code: 3, label: 'No maneja' },
  ];
  

  constructor(
  ) {
  }

  ngOnInit(): void {
    this.openAccordion()
  }
  openAccordion() {
    const accordionButtons = document.querySelectorAll('.accordion-button');
  
    accordionButtons.forEach(button => {
      button.addEventListener('click', () => {
        const collapseElement = document.querySelector(button.getAttribute('data-bs-target') as string);
        
        if (collapseElement?.classList.contains('show')) {
          collapseElement.classList.remove('show');
        } else {
          collapseElement?.classList.add('show');
        }
      });
    });
  }
  onPaymentMethodChange(event: any) {
    const selectedMethod = event.value as keyof typeof this.banks;
    this.availableBanks = this.banks[selectedMethod];
  }
  
}
