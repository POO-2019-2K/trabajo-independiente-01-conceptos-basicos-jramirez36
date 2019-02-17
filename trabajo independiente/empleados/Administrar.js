export default class Crear
{
    constructor(nombre, telefono, correo, puesto, hora_entrada, hora_salida, salario)
    {
        this._nombre = nombre;
        this._telefono = telefono;
        this._correo = correo;
        this._puesto = puesto;
        this._hora_entrada = hora_entrada;
        this._hora_salida = hora_salida;
        this._salario = salario;
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
    set hora_entrada(hora_entrada)
    {
        this._hora_entrada = hora_entrada;
    }
    set hora_salida(hora_salida)
    {
        this._hora_salida= hora_salida;
    }
    set salario(salario)
    {
        this._salario= salario;
    }
    organizar()
    {
        console.log(`El nombre es ${this._nombre} con telefono:  ${this._telefono} con el correo ${this._correo} con el puesto ${this._puesto} llegara ala hora ${this._hora_entrada} sale ala hora ${this._hora_salida} con un salario de :  ${this._salario} `);
    }

}