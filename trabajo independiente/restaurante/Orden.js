import Crear from "./Restaurante.js";
let contacto1 = new Crear( "jose", 3121212922,  "jramirez36@ucol.mx", "mesa vip 1", "18/02/2019", "8:00", "16:00", "15000" );
let contacto2 = new Crear( "edgar", 3121352942,  "Ezamora2@ucol.mx","mesa lujo 1", "18/02/2019", "8:00", "16:00", "10000");
let contacto3 = new Crear( "jorge", 3121245575,  "jramos33@ucol.mx","mesa 1", "18/02/2019", "9:00", "16:00", "5000");
contacto1.organizar();
contacto2.organizar();
contacto3.organizar();