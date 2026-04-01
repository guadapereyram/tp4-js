const cuenta = {
    titular: 'Alex',
    saldo: 0,

    /*Creo tres métodos: */
    ingresar(cantidad){

        /*Valido que no se pueda ingresar 0, ni un número negativo*/
        if (cantidad <= 0 ){
            alert('Ingresá un monto válido.')
        } else{
            this.saldo = this.saldo + cantidad
        }        
    },

    extraer(cantidad){
        /*Valido que el monto no sea inválido, <=0*/
        if (cantidad <= 0){
            alert('Ingresá un monto válido.')
        } else if (cantidad > this.saldo){ /*Valido que el monto no sea mayor al saldo*/
            alert('Fondos insuficientes. Intentá con un monto menor.')
        } else{
            this.saldo = this.saldo - cantidad; /*Si pasa ambas validaciones, recién resto*/
        }
    },

    informar(){
        return(`El saldo de la cuenta ${this.titular} es: ${this.saldo}`)
    }
}

console.log(cuenta.informar());

cuenta.ingresar(3500);
cuenta.extraer(2000);

console.log(cuenta.informar());