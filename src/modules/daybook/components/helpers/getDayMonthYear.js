
const meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']
const dias  = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado']

const getDayMonthYear = ( dateString ) => {
    const date = new Date( dateString ) 
    return {
        day: date.getDate(),
        month: meses [ date.getMonth() ],
        yearDay: `${ date.getFullYear()} ${ dias[date.getDay()]}`,
 
    }

}

export default getDayMonthYear