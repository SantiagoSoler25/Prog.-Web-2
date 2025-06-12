$(document).ready(function() {
    const promos = [
        {
            tipo: "Cuenta de Ahorros",
            meses: 6,
            icon: "savings",
            desc: "Abre tu cuenta de ahorros y disfruta de 6 meses sin intereses en manejo de cuenta.",
            url: "./tarjetas.html"
        },
        {
            tipo: "Cuenta Corriente",
            meses: 4,
            icon: "account_balance",
            desc: "Apertura tu cuenta corriente y obtén 4 meses sin intereses en comisiones.",
            url: "./tarjetas.html"
        },
        {
            tipo: "Tarjeta de Crédito",
            meses: 12,
            icon: "credit_card",
            desc: "Solicita tu tarjeta de crédito y recibe 12 meses sin intereses en compras seleccionadas.",
            url: "./tarjetas.html"
        }
    ];

    promos.forEach((promo, i) => {
        $('#promos').append(`
            <div class="col s12 m4">
                <div class="card white z-depth-2">
                    <div class="card-content center-align">
                        <i class="material-icons large blue-text text-darken-4">${promo.icon}</i>
                        <span class="card-title">${promo.tipo}</span>
                        <p>${promo.desc}</p>
                        <div>
                            <span class="btn btn-top abrir-cuenta" data-url="${promo.url}">${promo.meses} meses sin intereses</span>
                        </div>
                    </div>
                </div>
            </div>
        `);
    });
    $('#promos').on('click', '.abrir-cuenta', function() {
        const url = $(this).data('url');
        window.location.href = url;
    });
});