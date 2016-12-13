var ponto = 0;
var pergunta = 1;
var progress = 0;

function check_alternativa(){
    var radios = document.getElementsByName('radio');

    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            // do whatever you want with the checked radio
            var alternativa= 'alt'+(i+1);
            var resposta = document.getElementById(alternativa).innerHTML;
            //alert(ponto);

            progress = (pergunta*100) / 10;
            if(progress < 100) $('.progress-bar').css('width', progress+'%').attr('aria-valuenow', progress);
            else $('.progress-bar').css('width', progress+'%').attr('aria-valuenow', progress).addClass('progress-bar-success');
            document.getElementById('progresso').innerHTML = [progress+'%'];

            if (pergunta == 1){
                if(i == 0) ponto += 1;
                document.getElementById('n').innerHTML = [pergunta+1];
                document.getElementById('alt1').innerHTML = ['ddd'];
                document.getElementById('alt2').innerHTML = ['eee'];
                document.getElementById('alt3').innerHTML = ['fff'];
            }else if (pergunta == 2){
                if(i == 1) ponto += 1;
                document.getElementById('n').innerHTML = [pergunta+1];
                document.getElementById('alt1').innerHTML = ['ggg'];
                document.getElementById('alt2').innerHTML = ['hhh'];
                document.getElementById('alt3').innerHTML = ['iii'];
            }else if (pergunta == 3){
                if(i == 2) ponto += 1;
                document.getElementById('n').innerHTML = [pergunta+1];
                document.getElementById('alt1').innerHTML = ['jjj'];
                document.getElementById('alt2').innerHTML = ['kkk'];
                document.getElementById('alt3').innerHTML = ['lll'];
            }else if (pergunta == 4){
                if(i == 0) ponto += 1;
                document.getElementById('n').innerHTML = [pergunta+1];
                document.getElementById('alt1').innerHTML = ['mmm'];
                document.getElementById('alt2').innerHTML = ['nnn'];
                document.getElementById('alt3').innerHTML = ['ooo'];
            }else if (pergunta == 5){
                if(i == 1) ponto += 1;
                document.getElementById('n').innerHTML = [pergunta+1];
                document.getElementById('alt1').innerHTML = ['ppp'];
                document.getElementById('alt2').innerHTML = ['qqq'];
                document.getElementById('alt3').innerHTML = ['rrr'];
            }else if (pergunta == 6){
                if(i == 2) ponto += 1;
                document.getElementById('n').innerHTML = [pergunta+1];
                document.getElementById('alt1').innerHTML = ['sss'];
                document.getElementById('alt2').innerHTML = ['ttt'];
                document.getElementById('alt3').innerHTML = ['uuu'];
            }else if (pergunta == 7){
                if(i == 0) ponto += 1;
                document.getElementById('n').innerHTML = [pergunta+1];
                document.getElementById('alt1').innerHTML = ['vvv'];
                document.getElementById('alt2').innerHTML = ['www'];
                document.getElementById('alt3').innerHTML = ['xxx'];
            }else if (pergunta == 8){
                if(i == 1) ponto += 1;
                document.getElementById('n').innerHTML = [pergunta+1];
                document.getElementById('alt1').innerHTML = ['yyy'];
                document.getElementById('alt2').innerHTML = ['zzz'];
                document.getElementById('alt3').innerHTML = ['111'];
            }else if (pergunta == 9){
                if(i == 2) ponto += 1;
                document.getElementById('n').innerHTML = [pergunta+1];
                document.getElementById('alt1').innerHTML = ['222'];
                document.getElementById('alt2').innerHTML = ['333'];
                document.getElementById('alt3').innerHTML = ['444'];
            }else{
                if(i == 0) ponto += 1;
                var resultado = (ponto*100)/pergunta;
                $('#quest').addClass('hidden');
                $('#confirmar').addClass('hidden');
                document.getElementById('resultado').innerHTML = [resultado+'%'];
                $('#result').removeClass('hidden');
            }
            pergunta += 1;
            radios[i].checked = false;
            // only one radio can be logically checked, don't check the rest
            break;
        }
    }
}
