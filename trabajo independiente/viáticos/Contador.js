export default class Crear
{
    constructor(nombre, telefono, correo, puesto, salario , cuenta_bancaria, lugar_viaje,tiempo_viaje,transporte)
    {
        this._nombre = nombre;
        this._telefono = telefono;
        this._correo = correo;
        this._puesto = puesto;
        this._salario = salario;
        this._cuenta_bancaria = cuenta_bancaria;
        this._lugar_viaje = lugar_viaje;
        this._tiempo_viaje = tiempo_viaje;
        this._transporte = transporte;
    } 
    set nombre(nombre)
    {
        this._nombre = nombre;
    }
    set telefono(telefono)
    {
        if (this.telefono.length < 10 )
        {
        this._telefono = "numero incompleto";
        }
        else
        {
        this._telefono =  telefono;
        }
    }
    set correo(correo)
    {
        this._correo = correo;
    }
    set puesto(puesto)
    {
        this._puesto = puesto;
    }
    set salario(salario)
    {
        this._salario= salario;
    }
    set cuenta_bancaria(cuenta_bancaria)
    {
        if (this.cuenta_bancaria.length < 16 )
        {
        this._cuenta_bancaria = "numero incompleto";
        }
        else
        {
        this._cuenta_bancaria =  cuenta_bancaria;
        }
    }
    set lugar_viaje(lugar_viaje)
    {
        this._lugar_viaje = lugar_viaje;
    }
    set tiempo_viaje(tiempo_viaje)
    {
        this._tiempo_viaje = tiempo_viaje;
    }
    set transporte(transporte)
    {
        this._transporte = transporte;
    }
    organizar()
    {
        console.log(`El nombre es ${this._nombre} con telefono:  ${this._telefono} con el correo ${this._correo} con el puesto ${this._puesto} con un salario de :  ${this._salario} con la cuenta  ${this._cuenta_bancaria} ira de viaje a ${this._lugar_viaje} con una cantidad de dias ${this._tiempo_viaje} se ira en ${this._transporte}  `);
    }

}