export default class Crear
{
    constructor(nombre, telefono, correo, puesto, salario , cuenta_bancaria)
    {
        this._nombre = nombre;
        this._telefono = telefono;
        this._correo = correo;
        this._puesto = puesto;
        this._salario = salario;
        this._cuenta_bancaria = cuenta_bancaria;
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
    organizar()
    {
        console.log(`El nombre es ${this._nombre} con telefono:  ${this._telefono} con el correo ${this._correo} con el puesto ${this._puesto} con un salario de :  ${this._salario} con la cuenta  ${this._cuenta_bancaria}  `);
    }

}