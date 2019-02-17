export default class Crear
{
    constructor(nombre, telefono, correo, mesa, dia_reserva, hora_entrada, hora_salida, costo)
    {
        this._nombre = nombre;
        this._telefono = telefono;
        this._correo = correo;
        this._mesa = mesa;
        this._dia_reserva = dia_reserva;
        this._hora_entrada = hora_entrada;
        this._hora_salida = hora_salida;
        this._costo = costo;
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
    set mesa(mesa)
    {
        this._mesa= mesa;
    }
    set dia_reserva(dia_reserva)
    {
        this._dia_reserva = dia_reserva;
    }
    set hora_entrada(hora_entrada)
    {
        this._hora_entrada = hora_entrada;
    }
    set hora_salida(hora_salida)
    {
        this._hora_salida= hora_salida;
    }
    set costo(costo)
    {
        this._costo= costo;
    }
    organizar()
    {
        console.log(`El nombre es ${this._nombre} con telefono:  ${this._telefono} con el correo ${this._correo} con la mesa ${this._dia_reserva} reserva el dia${this._dia} de esta hora ${this._hora_entrada} su reservacion acaba : ${this._hora_salida} con un costo de :  ${this._costo} `);
    }

}