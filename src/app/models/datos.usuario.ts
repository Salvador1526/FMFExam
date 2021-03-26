/**
 * Creacion del modelo de datos para
 * hacer uso de ellos dentro del formulario
 */

export class DatosUsuario{
     /**
      * Crearemos el constructor con sus propiedades
      */
     constructor(
        public Nombre: string,               /**Mandar a llamar desde Data */
        public Apellido_Paterno: string,     /**Mandar a llamar desde Data */
        public Apellido_Materno: string,     /**Mandar a llamar desde Data */
        public Fecha_de_Nacimiento: string,  /**Debemos cargar el Chechbox Listo */
        public Genero: string,               /**Mandar a llamar desde Data */
        public Nacionalidad: string,         /**Mandar a llamar desde Data */
        public Club_de_Futbol: string,       /**Mandar a llamar desde Data */
        public R_F_C: string,                /**Este es un condicional con ngIF */
        public Ocupacion: string,            /**Mandar a llamar la ocupacion */
        public boton_para_enviar: string     /**Listo esta */
     ){}
}