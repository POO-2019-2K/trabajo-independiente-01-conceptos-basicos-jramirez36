import Crear from "./Cita.js";
let contacto1 = new Crear( "jose", 3121212922, "-O", "insulina", "12/03/2019", "17:05", "450");
let contacto2 = new Crear( "edgar", 3121352942, "AB", "penisilina", "13/03/2019", "17:05", "450");
let contacto3 = new Crear( "jorge", 3121245575, "+O", "sulfamidas", "14/03/2019", "17:05", "450");
contacto1.organizar();
contacto2.organizar();
contacto3.organizar();