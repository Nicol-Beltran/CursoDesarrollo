class CuentaBancaria{
    constructor(saldo){
        this.saldo = saldo;
    }

    depositar(Ingreso){
        this.saldo += Ingreso;
        console.log(`Usted transfirio ${this.saldo} pesos a su cuenta.`)
    }
    retirar(Egreso){
        if(this.saldo<Egreso){
            console.log("No tiene suficiente saldo para retirar esa cantidad.")
        }else{
            this.saldo -= Egreso;
            console.log(`Usted retiro ${Egreso} pesos de su cuenta.`)
            console.log(`Le queda un total: ${this.saldo} pesos.`)

        }
    }
}

class CuentaAhorros extends CuentaBancaria{
//No puede retirar mas del saldo disponible
}

class CuentaCorriente extends CuentaBancaria{
//puede retirar hasta -500
    retirar(Egreso){
        let valorMinimo=Egreso-500
        if(this.saldo<valorMinimo){
            console.log("No tiene suficiente saldo para retirar esa cantidad.")
        }else{
            this.saldo -= Egreso;
            console.log(`Usted retiro ${Egreso} pesos de su cuenta corriente.`)
            console.log(`Le queda un total: ${this.saldo} pesos.`)
        }

    }
}

const cuentaA1= new CuentaAhorros(0);
cuentaA1.depositar(500);
cuentaA1.retirar(300);

const cuentaC1= new CuentaCorriente(0);
cuentaC1.depositar(500);
cuentaC1.retirar(1001);

