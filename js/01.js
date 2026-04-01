const auto = {
    color: 'plata',
    marca: 'BMW',
    modelo: 'BMW M2',
    estaEncendido: false,
    
    encender(){
        this.estaEncendido = true;
        alert('El auto está encendido')
    },

        apagar(){
        this.estaEncendido = false;
        alert('El auto está apagado')
    }
};
/*Los console.log() son solo para probar que funciona.*/
console.log(auto.estaEncendido); // false

auto.encender();
console.log(auto.estaEncendido); // true

auto.apagar();
console.log(auto.estaEncendido); // false