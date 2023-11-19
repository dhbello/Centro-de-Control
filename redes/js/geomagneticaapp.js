const first = document.getElementById('firstChart');
const second = document.getElementById('secondChart');
const third = document.getElementById('thirdChart');



const cargarPrimerChart = (datosChartUno) => {
    // Destruye el gráfico existente si hay uno
    if (window.chart1) {
        window.chart1.destroy();
    }

    chart1 = new Chart(first, {
        type: 'line',
        data: {
            labels: datosChartUno.datosUnoLabels,
            datasets: [{
                label: 'DECLINACIÓN',
                data: datosChartUno.datosUnoData,
                borderWidth: 1,
                borderColor: '#FF6384',
                backgroundColor: '#FFB1C1',
                pointBackgroundColor: '#FFB1C1',

            }]
        },
        options: {
            scales: {
                y: {
                    // beginAtZero: true,
                    // grid: {
                    //     color: 'rgb(54, 54, 121)' // Color de las líneas verticales
                    // },
                    // ticks: {
                    //     color: 'whitesmoke' // Color del texto en el eje x
                    // }
                },
                x: {
                    // grid: {
                    //     color: 'rgb(54, 54, 121)' // Color de las líneas verticales
                    // },
                    // ticks: {
                    //     color: 'whitesmoke' // Color del texto en el eje x
                    // }
                }
            }
        }
    });
}


const datosChartUno = {
    datosUnoLabels: [1945, 1955, 1965, 1975, 1985, 1995, 2005, 2015, 2025],
    datosUnoData: [2, 0, -1, -3, -4, -5, -6, -7, -7.5, -8, -8.2, -8.3, -10]
}




// ============= segunda grafica ============

const cargarSegundoChart = () => {
    // Destruye el gráfico existente si hay uno
    if (window.chart2) {
        window.chart2.destroy();
    }
    chart2 = new Chart(second, {
        type: 'line',
        data: {
            labels: [1945, 1955, 1965, 1975],
            datasets: [{
                label: 'INCLINACIÓN',
                data: [2, 0, -1, -3, -4, -5, -6, -7, -7.5, -8, -8.2, -8.3, -10],
                borderWidth: 1,
            }]
        },
        options: {
            scales: {
                y: {
                    // beginAtZero: true,
                    // grid: {
                    //     color: 'rgb(54, 54, 121)' // Color de las líneas verticales
                    // },
                    // ticks: {
                    //     color: 'whitesmoke' // Color del texto en el eje x
                    // }
                },
                x: {
                    // grid: {
                    //     color: 'rgb(54, 54, 121)' // Color de las líneas verticales
                    // },
                    // ticks: {
                    //     color: 'whitesmoke' // Color del texto en el eje x
                    // }
                }
            }
        }
    });
}
// ============= tercera grafica ============
const cargarTerceroChart = () => {
    if (window.chart3) {
        window.chart3.destroy();
    }
    chart3 = new Chart(third, {
        type: 'line',
        data: {
            labels: [1945, 1955, 1965, 1975],
            datasets: [{
                label: 'INTENSIDAD TOTAL',
                data: [2, 0, -1, -3, -4, -5, -6, -7, -7.5, -8, -8.2, -8.3, -10],
                borderWidth: 1,
                borderColor: 'aqua',
                backgroundColor: 'rgb(28, 197, 197)',
                pointBackgroundColor: 'rgb(28, 197, 197)'

            }]
        },
        options: {
            scales: {
                y: {
                    // beginAtZero: true,
                    // grid: {
                    //     color: 'rgb(54, 54, 121)' // Color de las líneas verticales
                    // },
                    // ticks: {
                    //     color: 'whitesmoke' // Color del texto en el eje x
                    // }
                },
                x: {
                    // grid: {
                    //     color: 'rgb(54, 54, 121)' // Color de las líneas verticales
                    // },
                    // ticks: {
                    //     color: 'whitesmoke' // Color del texto en el eje x
                    // }
                }
            }
        }
    });
}

document.querySelector('#anoDesde').addEventListener('change', (e) => {
    console.log(document.getElementById('anoDesde').value)
    console.log(document.getElementById('anoHasta').value)
    //console.log(e.target.value);

    cargarPrimerChart(datosChartUno);
    cargarSegundoChart();
    cargarTerceroChart();
});

document.querySelector('#anoHasta').addEventListener('change', (e) => {
    console.log(document.getElementById('anoDesde').value)
    console.log(document.getElementById('anoHasta').value)
    //console.log(e.target.value);

    cargarPrimerChart(datosChartUno);
    cargarSegundoChart();
    cargarTerceroChart();
});








// ========== ONDAS ==================

const container = document.querySelector('.container-fluid');

// const createRipple = (e) => {
//     let ripple = document.createElement('span');
//     let x = e.clientX;
//     let y = e.clientY;

//     ripple.style.left = x + 'px';
//     ripple.style.top = y + 'px';

//     container.appendChild(ripple);

//     setTimeout(() => {
//         ripple.remove();
//     }, 5000);

//     console.log(x, y)

// }

//  container.addEventListener('click', createRipple);


const createRippleAuto = () => {
    let ripple = document.createElement('span');
    let x = Math.floor(Math.random() * (1000 - 100) + 100);
    let y = Math.floor(Math.random() * (1000 - 100) + 100);

    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';

    container.appendChild(ripple);

    setTimeout(() => {
        ripple.remove();
    }, 8000);

    //console.log(x, y)

}

setInterval(() => {
    createRippleAuto();
}, 8000);



document.addEventListener('DOMContentLoaded', function () {
    // Texto que deseas mostrar
    const textoCompleto = document.getElementById('maquinaTexto').textContent;
    document.getElementById('maquinaTexto').textContent = '';
    let index = 0;
    let intervalo = 100; // Intervalo de tiempo entre cada caracter (en milisegundos)

    function agregarCaracter() {
        document.getElementById('maquinaTexto').textContent += textoCompleto[index];
        index++;

        if (index < textoCompleto.length) {
            setTimeout(agregarCaracter, intervalo);
        } else {
            // Cuando se completa el texto, quitar el pseudoelemento ::after
            document.getElementById('maquinaTexto').classList.add('texto-completo');
        }
    }

    // Iniciar la animación al cargar la página
    agregarCaracter();
});

