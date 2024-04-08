
document.addEventListener('DOMContentLoaded', function() {
    const botão = document.querySelectorAll('.botão');
    
    botão.forEach(function(button) { 
        button.addEventListener('click', function() {
            const cardAnimados = button.closest('.card').querySelector('.card-animado');
            const todosOsCardAnimados = document.querySelectorAll('.card-animado');

        
            todosOsCardAnimados.forEach(function(animation) {
                animation.classList.remove('subir');
            });

            cardAnimados.classList.add('subir');
        });
    });

    const cardAnimação = document.querySelectorAll('.card-animado'); 

    cardAnimação.forEach(function(cardAnimação) { 

        cardAnimação.addEventListener('click', function(event) {
            if (cardAnimação.classList.contains('subir')) {
                event.stopPropagation(); 

                const url = cardAnimação.getAttribute('data-url');
                window.location.href = url;
            }
        });
    });
});

function som() {
var audio = document.getElementById("efeito-sonoro");
audio.currentTime = 0;
audio.play();
}
