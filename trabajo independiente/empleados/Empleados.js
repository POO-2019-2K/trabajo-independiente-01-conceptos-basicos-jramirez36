import Crear from "./Empleados.js";
let contacto1 = new Crear( "jose", 3121212922, "director", "jramirez36@ucol.mx", "8:00", "16:00", "15000" );
let contacto2 = new Crear( "edgar", 3121352942, "programador", "Ezamora2@ucol.mx", "8:00", "16:00", "10000");
let contacto3 = new Crear( "jorge", 3121245575, "testerr", "jramos33@ucol.mx", "9:00", "16:00", "5000");
contacto1.organizar();
contacto2.organizar();
contacto3.organizar();