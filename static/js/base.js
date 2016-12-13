var done = false, correct = false, show = false, img = '', searched = false;

//(function(){
//	$('.footer').css('position', $(document).height() > $(window).height() ? 'inherit' : 'fixed');
//	console.log($(document).height() +'    '+$(window).height());
//})();



$('.icone').hover(function(){
		$(this).css("opacity", "1");
		$(this).css("cursor", "pointer");
	}, function(){
		$(this).css("opacity", "0.85");
		$(this).css("cursor", "auto");
	}
);

$('.icone-btn').hover(function(){
		$(this).css("opacity", "1");
		$(this).css("cursor", "pointer");
	}, function(){
		$(this).css("opacity", "0.85");
		$(this).css("cursor", "auto");
	}
);


//var myElement = document.getElementById('page');

// create a simple instance
// by default, it only adds horizontal recognizers
//var mc = new Hammer(myElement);

// listen to events...
//mc.on("dragleft dragright", function(ev) {
//	var active = parseInt($('#active').val());
//	var countpage = parseInt($('#countpage').val());
//	if (countpage > 1){
//		if(ev.type == 'dragleft' && active < countpage){
//			window.location = $('#url').val() + '/' + (active+1);
//		}else if (ev.type == 'dragright' && active > 1){
//			window.location = $('#url').val() + '/' + (active-1);
//		}
//	}
//});

function month(){
	mm = parseInt($('#month').val());
	yy = parseInt($('#year').val());
	window.location.href = '/payments/month/'+mm+'/'+yy;
}


function href(link){
	window.location.href = link;
}

function conversation_lesson(){
	window.location.href = '/conversations/lesson/'+$('#lesson').val();
}

function bio_stage(student){
	window.location.href = '/bio/student/'+student+'/stage/'+$('#stage').val();
}

function bio_lesson(student, stage){
	window.location.href = '/bio/student/'+student+'/lesson/'+$('#lesson').val()+'/'+stage;
}


function search_conversation(){
	if (searched == false){
		$('#search_user').removeClass('hidden');
		$('#search_lesson').removeClass('hidden');
		searched = true;
	}else{
		$('#search_user').addClass('hidden');
		$('#search_lesson').addClass('hidden');
		searched = false;
	}
}


function show_img(){
	if (String($('#img').val()) != img) img = String($('#img').val());

	if(img != '') {
		imagem = '<img src=" ' + img + ' " class="image" height="200px" width="200px" class="img-responsive" alt=""/>';
		$('.image').remove();
		$('#show_image').append(imagem);
		$('#show_image').removeClass('hidden');
	}else{
		$('#show_image').addClass('hidden');
		$('.image').remove();
	}
}

function show_avatar(){
	document.getElementById("avatar").src = "/static/img/icon/"+$("#select_avatar").val()+".png";
}


function review(id){
	$('#delete'+id).addClass('hidden');
	$('#confirm'+id).removeClass('hidden');
	$('#cancel'+id).removeClass('hidden');
}

function confirm(message){
	window.location.href = message;
}

function cancel(id){
	$('#delete'+id).removeClass('hidden');
	$('#confirm'+id).addClass('hidden');
	$('#cancel'+id).addClass('hidden');
}

function cancel_voice(){
	responsiveVoice.cancel();
}

function listen(exercise, s){
	responsiveVoice.speak(exercise, "US English Female", {rate: s});
}


function checkup(answers, type, id, click){
	var a = answers.split('*');
	if(event.keyCode == 13 && done == false || click == true && done == false){
		ans = String($('#answer_check').val()).toLowerCase();
		ans = ans.trim();
		ans = ans.replace(/[?.,]/g, '');
		for (var x = 0; x < (a.length-1); x++){
			right = a[x].toLowerCase();
			right = right.trim();
			right = right.replace(/[?.,]/g, '');
			if (ans == right) correct = true;
		}
		if (correct == true){
			$("#showCorrect").removeClass('hidden');
			for (var x = 0; x < (a.length-1); x++){
				$('#correct_answers').append('<p>' + a[x] + '</p>');
			}
		}else{
			$("#showWrong").removeClass('hidden');
			for (var x = 0; x < (a.length-1); x++){
				$('#wrong_answers').append('<p>' + a[x] + '</p>');
			}
		}
		done = true;
		var btn = document.getElementById("btn-check");
		btn.innerHTML = "Continue";
	}else if (done == true && correct == true){
		window.location.href = '/save_exercisedone/'+id+'/'+type;
	}else if (done == true && correct == false){
		window.location.href = '/exercises/'+type;
	}
}


function startDictation(answers){
	if (done == false){
		if (window.hasOwnProperty('webkitSpeechRecognition')) {

			var recognition = new webkitSpeechRecognition();

			recognition.continuous = false;
			recognition.interimResults = false;

			recognition.lang = "en-US";
			recognition.start();

			recognition.onresult = function(e) {
				document.getElementById('answer_check').value = e.results[0][0].transcript;
				recognition.stop();
				//document.getElementById('labnol').submit();
				var a = answers.split('*');
				ans = String($('#answer_check').val()).toLowerCase();
				ans = ans.trim();
				ans = ans.replace(/[?.,]/g, '');
				for (var x = 0; x < (a.length-1); x++){
					right = a[x].toLowerCase();
					right = right.trim();
					right = right.replace(/[?.,]/g, '');
					if (ans == right) correct = true;
				}
				if (correct == true){
					$("#showCorrect").removeClass('hidden');
					for (var x = 0; x < (a.length-1); x++){
						$('#correct_answers').append('<p>' + a[x] + '</p>');
					}
				}else{
					$("#showWrong").removeClass('hidden');
					for (var x = 0; x < (a.length-1); x++){
						$('#wrong_answers').append('<p>' + a[x] + '</p>');
					}
				}
				var btn = document.getElementById('btn-check');
				btn.innerHTML = 'Continue';
			};
			recognition.onerror = function(e) {
				recognition.stop();
			}
		}
		done = true;
	}
}

function check_speaking(id) {
	if((correct == true && done == true) || (event.keyCode == 13 && done == true && correct == true)){
		window.location.href = '/save_exercisedone/'+id+'/speaking';
	}else if ((correct == false && done == true) || (event.keyCode == 13 && done == true && correct == false)){
		window.location.href = '/exercises/speaking';
	}
}


function skip(type){
	window.location.href="/exercises/"+type;
}