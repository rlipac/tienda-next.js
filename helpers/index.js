
// funcion para formatear fecha
export const formatearFecha = fecha => { // fecha como paranetro de la funcion
    const fechaNueva = new Date(fecha)

    const opciones = {
        year: 'numeric',
        month: 'logn',
        day: '2-digit'
    }
    return fechaNueva.toLocaleDateString('es-ES', opciones) // develve la nueva fecha formateada con la opciones brindadas arriba
}