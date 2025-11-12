 let yourName = prompt("What is your name?");
 let weapon = prompt("What is your weapon of choice?");
 let villain = prompt("What is the name of your villain?");
 let animal = prompt("Choose an animal?");
 let setting = prompt("Where do you want the story to take place?");
 let adjective = prompt("Choose a adjective?"); 
 let superpower = prompt("Pick a superpower.");
 let object = prompt("Choose an object.");
 let person = prompt("Pick a person.");
 let pronoun = prompt("Choose one pronoun.");
 let number = prompt("Choose a number greater than 0.");
 let verb = prompt("Choose a verb with the ending -ed.");
 let adverb = prompt("Pick an adverb.");

let story = `<p> 
<b>${yourName}</b> was <b>${adjective}</b> in the <b>${setting}</b>. Suddenly, <b>${villain}</b> came out of a(n) <b>${object}</b> holding a <b>${weapon}</b>.
 <b>${yourName}</b> soon realized that the person in front of <b>${pronoun}</b> was a part of the mafia gang that had killed <b>${person}</b>. Just as 
 <b>${pronoun}</b> tried to back away, lightning struck <b>${yourName}</b>. As <b>${pronoun}</b> tried sprinting away, <b>${superpower}</b> was released from 
 <b>${pronoun}</b> hand and struck down <b>${villain}</b>. Just as <b>${pronoun}</b> thought <b>${pronoun}</b> had won, <b>${villain}</b> stood up again and 
 <b>${verb}</b> over, causing a(n) <b>${animal}</b> to come out from behind a(n) <b>${object}</b>. The ferocious <b>${animal}</b> smelled <b>${object}</b> dust 
 on <b>${yourName}</b> and <b>${villain}</b>, causing the <b>${animal}</b> to go berserk and <b>${verb}</b> around the two of them. As <b>${villain}</b> was distracted, 
 the clouds suddenly darkened and a great wave of <b>${superpower}</b> was unleashed from <b>${yourName}</b>'s soul. This sent shock waves <b>${verb}</b> through the 
 <b>${setting}</b>. As a bystander was witnessing this, he started to record the events unfolding in front of him and also called the police to help arrest <b>${villain}</b>. 
 While the police were being dispatched, <b>${yourName}</b> and <b>${villain}</b> were battling in the distance. <b>${yourName}</b> thought that this was the greatest battle 
 of the century, as <b>${pronoun}</b> started to wield the power of <b>${superpower}</b> and went head-to-head against <b>${villain}</b>, who also raised his <b>${weapon}</b>.
 However, little did <b>${yourName}</b> know the <b>${weapon}</b> was magical and could inflict <b>${number}</b>% more damage than an original <b>${weapon}</b>. <b>${yourName}</b> 
 was severely wounded by the <b>${adjective}</b> <b>${weapon}</b>. Watching this, the bystander channeled all his energy into becoming an alpha sigma male. Using this gusto,
 <b>${adverb}</b> attacked the <b>${villain}</b>, even though <b>${villain}</b> lay helplessly on the ground. The bystander decided to show some mercy and save <b>${yourName}</b>.
 By the time the cops arrived at the scene, <b>${villain}</b> had fled to another <b>${setting}</b>.
 </p>`;

document.getElementById("madlib-output").innerHTML = story;
