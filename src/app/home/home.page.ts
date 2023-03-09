import { Component } from '@angular/core';
import { ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  radioSelecionada:string='';
  valorInicial:number=0;
  resultado:number=0;

  constructor() {}

  verificar() {
    if(this.radioSelecionada == 'option-1'){
      this.resultado = this.valorInicial - (this.valorInicial/10);
    } else if (this.radioSelecionada == 'option-2') {
      this.resultado = this.valorInicial;
    } else {
      this.resultado = this.valorInicial + (this.valorInicial/10);
    }
  }
/*
    this.exibirToast();
    this.exibirAlerta();
  }

  async exibirToast() {
    const toast = await this.toastController.create({
      message: this.radioSelecionada,
      duration: 2000,
      color: "danger",
      position: 'top',
    });
    toast.present();
  }

  async exibirAlerta() {
    const alert = await this.alertController.create({
      header: 'Esta é uma mensagem de exemplo.',
      message: this.radioSelecionada,
      buttons: ['OK']
    });
    alert.present();
  }
  */

}
