$(document).ready(function(){
	var pontos = 0;
	var numero;
	var palavras = ['aclsu','inradod','nfeo','oesum','eatm','ailph','ecdo','alisp','adruqo','eaactn'];
	var respostas = ['lucas','android','fone','mouse','mate','pilha','code','lapis','quadro','caneta'];
	var respostaUsuario;

	GerarPalavra();

	$('#pontosUsuario').html(pontos);

	$('#btnVerificar').click(function(){
		VerificarPalavra();
	});

	$('#inputPalavra').on('keydown',function(e){
		if(e.keyCode === 13){
			VerificarPalavra();
		}
	});

	$('#btnSaibaMais').click(function(){
		$('#saibaMaisConteudo').css('display', 'block');
		$(this).css('display', 'none');
	});

	$('#fechar').click(function(){
		$('#saibaMaisConteudo').css('display', 'none');
		$('#btnSaibaMais').css('display', 'block');
	});

	function VerificarPalavra(){
		respostaUsuario = $('#inputPalavra').val();
		if(respostaUsuario == ''){
			alert('Digite alguma coisa');
			return false;
		}

		if(respostaUsuario == respostas[numero]){
			$('#inputPalavra').val('');
			respostas.splice(numero,1);
			GerarPalavra();
			pontos += 10;
			$('#pontosUsuario').html(pontos);
		}else{
			alert('Resposta errada');
			console.log(respostas[numero]);
		}
	}

	function GerarPalavra(){
		numero = Math.floor(Math.random() * palavras.length);
		if(palavras[numero] != null){
			$('#palavraExibida').html(palavras[numero]);
			$('#inputPalavra').attr('maxlength', palavras[numero].length);
			palavras.splice(numero, 1);
		}else{
			$('#palavraExibida').html('Jogo acabou ');
			console.log(palavras);
		}
	}
});