// Add ready listener to the document.
// I.e., JavaScript, wait until the DOM is fully loaded before proceeding to this code
$(document).ready(function(){
	// console.log("Sanity Check!!")

	const cards = [
		'<img src="images/monsters-01.png">',
		'<img src="images/monsters-02.png">',
		'<img src="images/monsters-03.png">',
		'<img src="images/monsters-04.png">',
		'<img src="images/monsters-05.png">',
		'<img src="images/monsters-06.png">',
		'<img src="images/monsters-07.png">',
		'<img src="images/monsters-08.png">',
		'<img src="images/monsters-09.png">',
		'<img src="images/monsters-11.png">',
		'<img src="images/monsters-13.png">',
		'<img src="images/monsters-14.png">',
		'<img src="images/monsters-15.png">',
		'<img src="images/monsters-16.png">',
	];
	var gridSize = 4;
	var cardsToUse = [];

	$('button').click(function(){
		// console.log('user clicked on a button')
		// var userAnswer = $(this).html();
		var gridSize = $(this).attr("diff");
		// console.log(userAnswer);
		// if(userAnswer === "Easy"){
		// 	gridSize = 4;
		// }else if(userAnswer === "Medium"){
		// 	gridSize = 12;
		// }else if(userAnswer == "Hard"){
		// 	gridSize = 28;
		// }

		cards.map((card, index)=>{
			cardsToUse.push(card,card);
		})

		var memoryHTML = "";
		for(let i = 0; i < gridSize; i++){
			memoryHTML += '<div class="card col-sm-3">';
				memoryHTML += '<div class="card-holder">';
					memoryHTML += `<div class="card-front">${cardsToUse[i]}</div>`;
					memoryHTML += `<div class="card-back"></div>`;
				memoryHTML += '</div>';
			memoryHTML += `</div>`;
		}
		console.log(memoryHTML);
		console.log(typeof(memoryHTML))
		$('.mg-stuff').html(memoryHTML);

		// Add a click listener to all card-holders
		$('.card-holder').click(function(){
			// $(this) will target teh card-holder that was clicked
			$(this).addClass('flip');
			console.log(new Date().getTime())
			// A card just flipped over. 
			// Is there another one turned over already?
			// - if not, do nothing.
			// - if so, check and see if they match.

			// Go get all elements with a class of flip.
			var cardsUp = $('.flip');
			if(cardsUp.length === 2){
				// two cards up. Check. The only way the length can be 2
				// is if two elements ahve a class of flip
				var card1 = cardsUp[0];
				var card2 = cardsUp[1];
				// console.dir(card1);
				if(card1.innerHTML === card2.innerHTML){
					// these are a match. THe html is exactly the same.
					cardsUp.addClass('matched');
					cardsUp.removeClass('flip');
					// cardsUp.each(function(){
					// 	$(this).addClass('matched');
					// });
					// cardsUp.map((card)=>{
					// 	$(card).addClass()...
					// })
				}else{
					// these are not a match, because the HTML is dif
					cardsUp.removeClass('flip');
					cardsUp.addClass('temp-flip')
					setTimeout(()=>{
						cardsUp.removeClass('temp-flip');
					},2000);
					console.log(new Date().getTime())
				}
			}else{
				// one card up. Do nothing.
			}

		});

	});

	// $('h1').click(()=>{
	// 	console.log("H1 clicked")
	// })


});