document.getElementById('botaoComprar1').addEventListener('click', function () {
    Swal.fire('Pedido efetuado com sucesso!',
        'Seu pedido foi efetuado com sucesso! aproveite sua leitura 📚',
        'success');
});
document.getElementById('botaoComprar2').addEventListener('click', function () {
    Swal.fire('Pedido efetuado com sucesso!',
        'Seu pedido foi efetuado com sucesso! aproveite sua leitura 📚',
        'success');
});
document.getElementById('botaoComprar3').addEventListener('click', function () {
    Swal.fire('Pedido efetuado com sucesso!',
        'Seu pedido foi efetuado com sucesso! aproveite sua leitura 📚',
        'success');
});
document.getElementById('botaoComprar4').addEventListener('click', function () {
    Swal.fire('Pedido efetuado com sucesso!',
        'Seu pedido foi efetuado com sucesso! aproveite sua leitura 📚',
        'success');
});
document.getElementById('botaoComprar5').addEventListener('click', function () {
    Swal.fire('Pedido efetuado com sucesso!',
        'Seu pedido foi efetuado com sucesso! aproveite sua leitura 📚',
        'success');
});
document.getElementById('botaoComprar6').addEventListener('click', function () {
    Swal.fire('Pedido efetuado com sucesso!',
        'Seu pedido foi efetuado com sucesso! aproveite sua leitura 📚',
        'success');
});



document.getElementById('btnForm').addEventListener('click', function () {
    Swal.fire({
        title: "Tem certeza de que quer enviar?",
        text: "Essa ação não pode ser revertida.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sim, enviar!"
    }).then((result) => {
        if (result.isConfirmed) Swal.fire({
            title: "Enviado!",
            text: "Seu formulário foi enviado com sucesso!",
            icon: "success"
        });
    });
}); 