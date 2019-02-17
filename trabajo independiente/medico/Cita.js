export default class Crear
{
    constructor(nombre, telefono, sangre, alergias, dia_cita, hora_cita, costo)
    {
        this._nombre = nombre;
        this._telefono = telefono;
        this._sangre = sangre;
        this._alergias = alergias;
        this._dia_cita = dia_cita;
        this._hora_cita = hora_cita;
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
    set alergias(alergias)
    {
        this._alergias = alergias;
    }
    set sangre(sangre)
    {
        this._sangre = sangre;
    }
    set hora_entrada(dia_cita)
    {
        this._dia_cita = dia_cita;
    }
    set hora_cita(hora_cita)
    {
        this._hora_cita= hora_cita;
    }
    set costo(costo)
    {
        this._costo= costo;
    }
    organizar()
    {
        console.log(`El nombre es ${this._nombre} con telefono:  ${this._telefono} tiene estas alergias ${this._alergias} con la sangre ${this._sangre} esta citado el dia ${this._dia_cita} la cita sera ala hora ${this._hora_cita} con un costo de :  ${this._costo} `);
    }

}