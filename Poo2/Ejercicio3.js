//Sistema para calcular los salarios de los empleados de una empresa, 
// los empleados deben tener distintos cargos, y cada uno tiene una forma diferente de
//  calcular su salario total. ademas se debe llevar un conteo de cuandos empleados hay en total
class Empleado{
    constructor(nombre, salarioBase){
        this.nombre=nombre
        this.salarioBase= salarioBase
    }

    mensaje(){
        console.log(`${this.nombre} esta ganando ${this.salarioBase} pesos.`)
    }

    calcularSalario(salarioBase){
        return salarioBase;
    }
     static Contar(empleados){
        let totalEmpleados=empleados.length
        return `Total empleados = ${totalEmpleados}`;
     }
}


class Gerente extends Empleado{

    constructor(nombre, salarioBase ,salario){
        super(nombre, salarioBase)
        this.salario=this.calcularSalario(salarioBase)
    }

    mensaje(){
        return `Gerente = ${this.nombre} tiene un salario de ${this.salario} pesos.`
    }

    calcularSalario(salarioBase){
        //suma bono de 1000
        let bono= 1000
        return (salarioBase+bono);
    }
}

class Desarrollador extends Empleado{
    constructor(nombre, salarioBase, salario){
        super(nombre, salarioBase)
        this.salario= this.calcularSalario(salarioBase)
    }
    
    mensaje(){
        return `Desarrollador(a) = ${this.nombre} tiene un salario de ${this.salario} pesos.`
    }

     calcularSalario(salarioBase){
        //suma bono de 1000
        let bono= 500
        return salarioBase+bono ;
    }
}

//Definicion salario base
const salarioBase=5000

//crear varias instancias 
const gerente1= new Gerente("Miguel Angel Escobar", salarioBase)
console.log(gerente1.mensaje())

const desarrollador1 = new Desarrollador("Sonia Murillo", salarioBase)
console.log(desarrollador1.mensaje())

const empleados=[gerente1, desarrollador1]
console.log(Empleado.Contar(empleados))

