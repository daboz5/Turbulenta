import { RPGroup } from "../types"

export default function RoleplayData() {

    const rpS1: RPGroup = {
        id: "Season 1",
        roleplays: [{
            title: "Test Play",
            shortDesc: "Here to test how dialog would look like",
            tags: ["blood"],
            chars: ["Remember Me", "Minamoto"],
            contents: [{
                char: { name: "Remember Me", token: 1 },
                content: <>{`Remember Me says something funny, something that would make old sailor blush.`}</>
            }, {
                char: { name: "Minamoto" },
                content: <>{`Minamoto laughs, it says something else.`}</>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <>{`Remember Me doesn't get it`}</>
            }]
        }]
    }

    const rpS2: RPGroup = {
        id: "Season 2",
        roleplays: [{
            title: "Inner Self",
            shortDesc: <>{`For the last 2 months Remember Me was a bit problematic. He was training to help guard the underground fortress, but was quickly designated as a `}<i>{`chaos bomb`}</i>{` or `}<i>{`berserker`}</i>{` type of an asset, it displayed power and violence, not towards anyone in particular, but it still made other soldiers– very uncomfortable and it did cause a lot of training dummies losses. Now, it is continuing to train, soon after it destroyed giant elemental dummy creature, more powerful than ever, more violent than ever, not doing anything wrong, but SOMETHING was clearly wrong, given the reports they had on it from before.`}</>,
            tags: ["blood"],
            chars: ["Remember Me", "Minamoto"],
            contents: [{
                char: { name: "Minamoto" },
                content: <>{`Another afternoon of bashing and raging passes by. While the soldiers stationed at the base have gotten a bit used to it, Remember me's rampage still causes a bit of a disturbance in the training area. Enough for commander Minamoto to finally take notice and investigate. As the tall elven warrior enters the sandy area, he is a witness to yet another dummy smashed to splinters by the raging feygol. Seeing as this little creature might need some guidance he walks over.`}<br />
                    {`"You posses a lot of strength Ishi no reikon. Demo, I sense much rage and wrath behind your blows. Bushido, a warrior's path is not just one of mindless violence. Tell what troubles you."`}</>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <>{`Remember Me stops, somewhat disturbed. It saw the man before, but where? Another soldier? Maybe a foreigner? It understood maybe half of what soldier was saying. Maybe if it ignores him, he will go away, like the rest of them? Honestly, it was kind of getting used to it. It slowly walked to another dummy, grabbed it, brought it back and fixed it on its place. There, perfect! It started growing thorns all over its arms again.`}</>
            }, {
                char: { name: "Minamoto" },
                content: <>{`Minamoto sighs, but does not shy away. Seeing how Remember me steps towards another dummy, he just steps in front of it blocking the way.`}<br />
                    {`"Enough, Ishi no reikon. No more mindless destruction on my training grounds. Tell me what is wrong so I can help. Or leave."`}</>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <>{`Remember Me stops. Soldier does not want to go away? Strange. It would even dare to step on its way. Stranger. But it liked his conviction. The one Oaksplit seems to lack. It thought to itself ... What is wrong with me? It scratched its head, looked away, and quietly mumbled.`}<br />
                    {`"I don't know."`}</>
            }, {
                char: { name: "Minamoto" },
                content: <>{`"Naruhodo, I see. If you do not know, then why are you smashing those dummies in such anger."`}<br />
                    {`Minamoto replies, a small smile on his face, seeing that the little golem replied.`}</>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <>{`Remember Me looks at the remains of its previous dummy. Indeed ... why is it smashing them? It wanted to smash them. It felt ... right. It felt ... GOOD ... at least it did for some time. Now ... it was not so sure anymore. But it needed to smash them. It seemed important. It didn't want to hurt anyone. It was attacked, but it did not want to hurt anyone. Oaksplit, Nobodies, Emily ... pieces of wood and straw were skatered across the floor ... itself.`}<br />
                    {`"I don't know."`}<br />
                    {`"It seems important."`}<br />
                    {`"They said I should do it."`}<br />
                    {`"To train."`}<br />
                    {`"To protect."`}<br />
                    {`"To become a soldier."`}<br />
                    {`"... to kill."`}<br />
                    {`It thought to itself again.`}<br />
                    {`"I am not sure what that means thou, but ... people say it a lot."`}<br />
                    {`"So ... I don't know."`}</>
            }, {
                char: { name: "Minamoto" },
                content: <>{`Minamoto kneels down into the sand.`}<br />
                    {`"Whoever said that was wrong. And partially right. Come sit, lets us speak."`}<br />
                    {`He invites the feygol to sit in front of him.`}<br />
                    {`"Being soldier is so much more than just killing. You offer your life for others. To protect, to help, to serve. It is a noble and honorable cause, one that should not be done in rage and anger."`}<br />
                    {`Minamoto exhales, his breathing slowing down.`}<br />
                    {`"I could help you. Breathe, think, meditate. Focus your will. Help you find reason within."`}<br />
                    {`Minamoto smiles.`}<br />
                    {`"What is your name, ishi no reikon, spirit of stone?"`}</>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <>{`Remember Me sits. It still did not understand what soldier was saying, probably nothing important, so it focused on the parts that it did.`}<br />
                    {`Remember Me, Sir. As I said, I do not know what killing is, but if you say it is not imporant, it is probably true, you seem like someone who would know a lot about it.`}<br />
                    {`It thinks about breathing. What should it do? It knew some creatures to breathe, it was when they ventilated their air-sacks inside of their bodies. Maybe ...`}<br />
                    {`It stands up. And sits. And stands up. And sits. And stands up. And sits. And stands up ... this does feel breezy, maybe this is why creatures like to do it so much?`}</>
            }, {
                char: { name: "Minamoto" },
                content: <>{`Minamoto looks over the little golem, standing and sitting, in a bit of a confusion.`}<br />
                    {`"Hmmm, why are doing that?"`}</>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <>{`"I am trying to breathe, Sir, I think it is working!"`}</>
            }, {
                char: { name: "Minamoto" },
                content: <>{`Minamoto laughs, a sound of joy escaping his lips, truly amused by the feygol.`}<br />
                    {`"Naruhodo, you are breathing, I see. I forgot to ask if you even need to breath. Hmmmm, truly amusing. You are a joy Remember me."`}<br />
                    {`With a smile on his lips Minamoto stops him.`}<br />
                    {`"Breathing is just a tool. Something we use to focus ourselves. We will find another one for you."`}<br />
                    {`He looks over the enthusiastic golem.`}<br />
                    {`"Although, if you like standing up, this might be a tool for you."`}</>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <>{`Remember Me stops. It doesn't exactly mind where or how its limbs are located and it is still on eye-to-eye level with the sitting soldier.`}</>
            }, {
                char: { name: "Minamoto" },
                content: <>{`They sit in quiet for a second, before Minamoto continues.`}<br />
                    {`"Why do you want to kill, Remember me?"`}</>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <>{`Remember Me thinks to itself`}<br />
                    {`"I don't. I don't even know what it means. But they do say problems go away when you do, so it is probably useful for getting rid of your problems."`}<br />
                    {`"Do you kill often, Sir?"`}</>
            }, {
                char: { name: "Minamoto" },
                content: <>{`Minamoto thinks, a good solid minute passes. Then he looks feygol in his eyes, saying quietly.`}<br />
                    {`"Killing is not just getting rid of your problems, Remember me. It is the taking of life. Bringing death to others. It is not something one should do lightly or with no conviction in his heart."`}<br />
                    {`He looks towards the small grains of sand on the ground, taking some and letting them slowly trickle between his fingers.`}<br />
                    {`"I do kill, hai. However, I kill when I need to, not when I want to. To kill is the last force one should resort to."`}</>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <>{`"... that word, death, I am not sure what it means. Things dream, things stop, things become other things. And sometimes they wake up. They return to us. And when they do, we are happy they are back again with us ... sometimes."`}<br />
                    {`"I hope that Emily will be happy to see me when she wakes up ... maybe ...`}<br />
                    {`It stops, switches topic`}<br />
                    {`"How does it feel to kill?"`}</>
            }, {
                char: { name: "Minamoto" },
                content: <>{`"Death means the end. Sleep with no dreams."`}<br />
                    {`Minamoto curiously looks at Remember me.`}<br />
                    {`"It is as you said, things become different things. But they rarely return. Almost never. Events like that, we call miracles. Waking up from death slumber... Its not something that is done."`}<br />
                    {`He lays his hands in his lap, his breathing slowing down.`}<br />
                    {`"Killing is not easy. It is not something you enjoy. It is not something you take pleasure in. Everytime you kill something, a part of your soul is tainted."`}<br />
                    {`His face changes, becoming hard.`}<br />
                    {`"Demo, sometimes is necessary. Killing sometimes is the only way. No matter how it feels."`}</>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <>{`"So, it is just another word for sleeping? If they do not return, they probably do not want to return. But Emily is strong, she will return, she aways stands up again, always tries again, always does what is required of her. She made me, and it took her more than hundred years to do it, but she did. She will return. And she is dreaming. She likes to dream. If someone doesn't wake up, they probably doesn't want to wake up, they ..."`}<br />
                    {`Remember Me freezes, light in its eyes for a moment fades, then resets and with a proper smile for the first time till now it says ...`}<br />
                    {`Do you want to hear about Emily? Emily Nightsong. She is an elf, just like you.`}</>
            }, {
                char: { name: "Minamoto" },
                content: <>{`Minamoto remains quiet, noticing the sudden change, interested, but does not press it.`}<br />
                    {`"Emily Nightsong. Never heard of her before. Demo if you want to tell me about it, I would like to hear it."`}</>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <>{`There is almost a sigh of relief coming from feygol as it happily starts telling the story of Emily`}<br />
                    {`"Gladly! Emily Nightsong was born blind, sickly and weak into a druid clan of Leshisel to the mother Natalija Nightsong. She was one of the top druids, so she expected a lot from her, but Emily wasn't exactly able to perform up to her expectations and her clan was very big on "everyone gets what is able to earn with its work", so /.../ but even so many other kids and clan servants hated her, so much attention was placed on her, even if she was failing at her best, while others were better from her /.../ especially Penelope, because she was better at druidcraft than her, so she /.../ and similarly less capable Turtil, who was envious of attention she was getting, or Orhida, who was mostly doing it for drama /.../ but she also had a friend, very capable girl Heliana, who sometimes defended her but she was older and very bussy with her studies, so /.../ and there was Timberly, who was always nice to her and Emily had a crush on him, but he was older and /.../ so she was most of the time left to herself. But she tried, even if she was blind she if need be went to the forest herself and often returned a few days later ... or was found, ragged and sickly, and then she went again, till she finished her task, for her family, that expected so much from her, she /.../ but many servants envied her, how she tried, how they had to worry about her getting sick, or hurt, how they had to take care of her, like she is better than them, because she doesn't give up /.../ everyone in clan had to make a feygol to grow up and become a proper adult or they had to serve, better druids they were, more valuable servant they were, but only a servant and not the adult, because feygols were valuable, they protected clan, the forest ... or were sold to the island court ... so it was very important for them to make them /.../ so she became mature, but not an adult, but she could if only she could make a feygol, any servant could at any time become an adult, valuable, so she kept trying and others hated her even more, she was not good at being a servant, but even worse when she was constantly trying and getting sick /…/ so she run away. Not to be a burden, to learn on her own, to learn from other people, people outside her clan, people outside her island, she explored, she learned, she traveled to elementals /…/ and she learned from gnome technicians on how to make /…/ or from wizards how to make a golem where she /…/ or from necromancers, that one was a scary one, because /…/ or when she was trying to learn from ghosts, it was really hard to get their attention, so she /…/ until she finally did it! Sort of. She made the first me. I can still remember me. Moving, speaking, even casting very simple spells, but something missing, so she started taking that something that was missing from her and giving it to me. And that is the last thing I remember from her, before I wake up and she goes to sleep, giving me final directions, to remember her, to remember Emily. I at first stayed with her, hoping she wakes up, but she didn't, so after some time I went on, to make sure people remember Emily. She is my mother, my creator, my model and my hero. And I want everyone to have someone like her. To remember someone like her. To keep them going. Like me. She keeps me going. And I remember her."`}<br />
                    {`"I also have druidic clothes that are just like hers, they don't fit me, but I remember. I also have her favorite incense, and everything that I remember, I record in my book of Emily, so I never forget. And even if I am not together anymore, world can still remember Emily. This is why I tried to create a place up in the city where I could tell people about Emily. Place about her. It could still be there even if I am not, telling a story of Emily. That funny guy with a boomstick taught me that."`}</>
            }, {
                char: { name: "Minamoto" },
                content: <>{`Minamoto listens to everything Remember me says, patiently and carefully, not missing any detail. After the little feygol finishes, he waits in silence, thinking.`}<br />
                    {`"Emily is a very important person to you. I understand. She is the reason you have come to train here, your reason to fight and remember. That is very noble and honorable"`}<br />
                    {`He once again falls silent, his hands folded, his chest moving slowly.`}<br />
                    {`"You wanted to build a shrine, correct? What happened? Why did your mind change and you came down here to fight?"`}</>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <>{`Remember Me is silent for a moment, as if contemplating something.`}<br />
                    {`"I tried."`}<br />
                    {`"I asked for a place."`}<br />
                    {`"People were nice to me."`}<br />
                    {`"I used their yellow and brown and white pieces. Like the ones we get when missions end."`}<br />
                    {`"I rebuilt a place. Small place next to the big big wall without roof."`}<br />
                    {`"I built a pond for kissy fish. made the place green, made a place for where people with nowhere could go, made a place where people without food could eat, made a place where people who would get hurt or sick could get healing. Made a place where there was a ... statement to Emily. Her shrine."`}<br />
                    {`"They said it is safe there. Oaksplit said it was safe there. Next to the doors, where guards would protect you."`}<br />
                    {`"It was not."`}<br />
                    {`"Nobodies attacked."`}<br />
                    {`"I did not know it at first and I tried to reason with them."`}<br />
                    {`"Then they did it again, making sure I know it was them. Nobodies."`}<br />
                    {`"I went to Oaksplit, warning him that city is under threat."`}<br />
                    {`"But he mocked me."`}<br />
                    {`"Telling me I should expect it. That I deserve it. Because I believe. That guards did nothing wrong."`}<br />
                    {`"That I should help those who attacked me. Who attacked Emily. Because of his problem. His memory of someone named Manuel."`}<br />
                    {`"So, I offered him solutions. I can help him with his job, his memory. For pieces I could spent on Emily, my memory."`}<br />
                    {`"Or he could return pieces to me, so I can rebuild her shrine somewhere else, away from bad people."`}<br />
                    {`"Then he said he doesn't want to be representative of People person, how hard it is. How he would stop if there was someone who could do a better job than him. How ungrateful I am. How I do not understand he is doing his best."`}<br />
                    {`"So, I offered him another solution. Make me a council member. I will take care of Manuel's memory. I will take care of Emily's memory. I will take care of anyone's memory. He might not be a hero or a savior as he said, but I could grow to be one. For the Emily."`}<br />
                    {`"And he said no."`}<br />
                    {`"So I left."`}<br />
                    {`"I tried to found a new place for Emily, somewhere safe. With people to tell about her."`}<br />
                    {`"... haven't found it yet."`}</>
            }, {
                char: { name: "Minamoto" },
                content: <>{`"Hmmm, naruhodo. Common people can sometimes be harsh, too harsh to things they do not know or understand. I can see now, why your rage and anger came to the surface. It was a very cruel thing that happened to you and for what its worth, I apologise, sumimasen. The guards afterall are in mine domain, but some in the city are harder to guide than others."`}<br />
                    {`He politely bows, an apology apparent. Then he smiles, a sad smile: "Demo it is true, others will have their own special persons, just like you have your Emily. They worship and remember different things, others. Me for example, my special person is an elven woman called Morwyn. I worship the platinum dragon Bahamut. These two have shaped who I am and who I must be, to be a better person. I could not just remember Emily Nightsong, for her story was not one connected to mine." He exhales, a warm smile now playing on his lips.`}<br />
                    {`"Everybody has their own special someone, their own memories. You cannot force those upon others. Demo, nobody should stop you from making a shrine in Emily's honour. That is wrong. If you want, I can speak to Oaksplit for you."`}<br />
                    {`He looks around the training field.`}<br />
                    {`"Now, I think you have calmed down a little. If you want I can train you now. No more blind rampage, but focused and precise. Teach you how to focus, to notice everything around you. Would you like that?"`}</>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <>{`Remember me thinks to itself. There sure is a lot of people with Emily-like person. Do all of them have that? I should inquire more about that later.`}<br />
                    {`It was already standing, as soldier said it should, so it just scratches its head, not knowing what to do.`}<br />
                    {`"I guess. I can try. You look like you know what you are talking about. But you look different than me. You don't have those."`}<br />
                    {`It shows its hand, encased with magical, acidic thorns.`}<br />
                    {`"Would you be able to teach someone like me, when our bodies and a way we fight to me seems to be so different?"`}</>
            }, {
                char: { name: "Minamoto" },
                content: <>{`Minamoto laughs.`}<br />
                    {`"Indeed we are different. But the same life energy flows through both of us. In Yamato we call it ki. When we fight, we release, channel, it flows in our bodies. When you fight you release you ki, without even knowing it. I will teach you how to channel it. How to properly focus."`}<br />
                    {`Minamoto thinks a little.`}<br />
                    {`"What did you feel, when you were striking those dummies earlier?"`}</>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <>{`Remember Me thinks. It wasn't really thinking much, it did  not need to, it was way too easy to smash them, but ...`}<br />
                    {`"Anger? Frustration? Relief? Disappointment?"`}</>
            }, {
                char: { name: "Minamoto" },
                content: <>{`Minamoto nods.`}<br />
                    {`"It was tension, it was turmoil. It was your ki, violently spinning around your body. You just did not know it yet."`}<br />
                    {`He stands up before the feygol.`}<br />
                    {`"That tension is something we all experience when fighting. For some that tension is anger and rage. For others sadness and grief. Some even seek the pleasure in it. No matter what it is, thag tension cannot stay in your body for long. It seeks release, to be free, to flow out. When that happens, we fight and as we fight, we slowly lose it and we calm down. Most do this unconsciously. Trained warriors can control it to some degree. Masters can use it at will."`}<br />
                    {`Minamoto squats down to feygol's size, grasping his shoulder.`}<br />
                    {`"This is what I will teach you. To focus that tension, use it, to sense the world around you better. Afterall, ki is everywhere and everything is ki. Life."`}<br />
                    {`He straightens up again.`}<br />
                    {`"Now, I would usually teach this by breathing exercises. Demo, you do not need to breathe. So we will skip to the next step. It should be a bit harder and yet, I think it will work. Focus on that feeling from before, when you fought. Try to bring it forth again. But this time do not move. Let it build up slowly."`}</>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <>{`Remember Me does so. It straightens up, relaxes, then seeks the feeling it felt when striking those dummies.`}<br />
                    {`Anger`}<br />
                    {`Anger`}<br />
                    {`Anger`}<br />
                    {`Disgust`}<br />
                    {`"Ok, I think I got it!"`}</>
            }, {
                char: { name: "Minamoto" },
                content: <>{`"Very good, feel the energy build up. Then when you can take no more, release it. But slowly. Controlled."`}<br />
                    {`Minamoto nods, instructing Remember me.`}</>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <>{`"Without moving?"`}</>
            }, {
                char: { name: "Minamoto" },
                content: <>{`"Correct, just the energy. No movement."`}</>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <>{`Remember Me gets back to its feeling. Ok ... how should it go about it? It carefully touches it.`}<br />
                    {`Pain`}<br />
                    {`Well, that is not good. Let's try breathing ... no, no movement. Hmmmm ... what about poking it. But with a really really long stick?`}<br />
                    {`It imagines a very long stick and starts poking it. It does not seem amused. In fact, it starts growing, gnarling, growling, it is not happy, not happy at all.`}<br />
                    {`"Ok, I think something is happening. What should I do now?"`}</>
            }, {
                char: { name: "Minamoto" },
                content: <>{`"Slowly release, bit  by bit. Let it go."`}<br />
                    {`Minamoto quietly instructs.`}<br />
                    {`"Focus and release it into your surroundings."`}</>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <>{`Remember Me looks at its anger. It is angry all right. And furious. Well, at least it got the releasing part right ...`}<br />
                    {`"Here, kitty, kitty, kitty! Let us take it slow, ok?"`}<br />
                    {`Anger makes a step towards Remember Me. It is a big one.`}<br />
                    {`Thorns starts growing on Remember Me's arm.`}<br />
                    {`Ok, this does not look good. I need Emily's smell, I need to relax ... wait, no movement ... maybe I can try and imagine it?`}<br />
                    {`It tries to remember, but memory shies away from anger as it is forming. Well, this sucks.`}<br />
                    {`"I think it is not going so well. I think releasing works, but my control might be on the week side."`}<br />
                    {`Another step, Remember Me starts to panic.`}</>
            }, {
                char: { name: "Minamoto" },
                content: <>{`Minamoto notices the struggle.`}<br />
                    {`"Focus Remember me. Focus on something important. Focus on Emily. Her voice, her image. Let her guide the tension out."`}</>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <>{`Remember Me tries, but anger is now right beside it, consuming it. As it tries to remember Emily, anger answers.`}<br />
                    {`"DON'T YOU EVEN DARE."`}<br />
                    {`Ok. So ... what?`}<br />
                    {`It starts loosing control over its body. There is a dummy right in front of it. This is bad.`}<br />
                    {`Could you please no? Please?`}<br />
                    {`No answer, fist clenches.`}<br />
                    {`No.`}<br />
                    {`...`}<br />
                    {`No.`}<br />
                    {`... ok.`}<br />
                    {`Its fist explodes. Anger disappears.`}<br />
                    {`Well, this is not good.`}<br />
                    {`Its body cracks.`}<br />
                    {`Its head cracks.`}<br />
                    {`It falls apart, losing consciousness. Its last thought ...`}<br />
                    {`Fuck.`}</>
            }, {
                char: { name: "Minamoto" },
                content: <>{`Minamoto sees this, immediately kneeling down`}<br />
                    {`"Remember me. Remember me! Are you alright?!"`}</>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <>{`Rocks move a bit, but no proper answer.`}</>
            }, {
                char: { name: "Minamoto" },
                content: <>{`Minamoto calls out in a strong voice, commander's voice.`}<br />
                    {`"CLERIC! I need a cleric here now! Or a medic. Move it men."`}<br />
                    {`Suddenly the entire field is buzzing with activity, soldiers running for the cleric or a medic. Very quickly a person in white robes sits down besides the fallen feygol, looking him over.`}</>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <>{`Alive, but in not so good state. Probably had better days.`}</>
            }, {
                char: { name: "Minamoto" },
                content: <>{`The cleric immediately starts casting, a couple of healing spells. In the process, Minamoto interject.`}<br />
                    {`"Calm him down as well. There are raging energies inside his body. His ki needs to stabilize."`}<br />
                    {`The cleric nods, casting another Calm emotions on the feygol, trying to subside the dangerous torrent of energies and emotions.`}</>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <>{`Remember Me is calm. There is no anger anymore, so this is good. It looks around. It feels lonely. Maybe it should go where it belongs. Where was it again? Feywild? Outer planes? Why is it here again? Something about ... Emily? Right?`}<br />
                    {`Rocks starts to form again and plants grow back together. It body is starting to get its former shape, but cracks remain. Rock does not heal. Rocks only fall apart with time. But there are strands of iron from its original form, still willing to connect back to its original long-lost shape. Cute.`}<br />
                    {`Light returns to Remember Me's eyeholes. It stands up, looks around.`}<br />
                    {`"Hi everybody. There is more of you than I seem to remember."`}<br />
                    {`It looks at soldier it was talking with.`}<br />
                    {`"I remember you. What were we talking about? Something about breathing, right?`}<br />
                    {`It starts to breathe. In its own way.`}</>
            }, {
                char: { name: "Minamoto" },
                content: <>{`As life returns to Remember me's eyes, Minamoto looks him over breathing out a sigh of relief.`}<br />
                    {`"Ahhh, you are back. The violent energies drove you apart. You exploded."`}<br />
                    {`With a wave he dismisses the rest of the soldiers and the cleric before kneeling down in front of the feygol, quiet and deep in thought. Silence strains for a good solid minute, before he continues.`}<br />
                    {`"Hmmmm, it seems, I will need to be careful. Your ki, your energies, they work much different. I will need to give it some thought, think how to properly train you."`}<br />
                    {`He looks closely, seeing his chest rise and fall, his eyes drawing closer in disbelief.`}<br />
                    {`"Shinjirarenai. Do you breathe now?"`}</>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <>{`Remember Me stops standing up and sitting down.`}<br />
                    {`"I believe so?"`}<br />
                    {`"It does feel quite breezy."`}<br />
                    {`"Relaxing even."`}</>
            }, {
                char: { name: "Minamoto" },
                content: <>{`"You are very interesting, ishi no reikon. You know what. Practice the new breathing. Feel it. Try controling it, make it faster, slow it down. Then find me after, when you discover all the secrets. And we shall continue with your training. Is that alright?"`}</>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <>{`"If you say so!"`}<br />
                    {`It salutes as it saw soldiers doing.`}</>
            }, {
                char: { name: "Minamoto" },
                content: <>{`Minamoto smiles, salutes back and returns back to his duties, his head still shaking from all the wonders he had seen and heard today.`}</>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <>{`Before he goes, question pops up in Remember Me's head.`}<br />
                    {`"Sir Soldier? May I ask you something, before you go?"`}</>
            }, {
                char: { name: "Minamoto" },
                content: <>{`Minamoto stops and turns, deep in though.`}<br />
                    {`"Hmmm, hai, yes of course. What is it?"`}</>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <>{`"I just remembered ... Morwyn, you mentioned. Would you ... stop things for her?"`}</>
            }, {
                char: { name: "Minamoto" },
                content: <>{`"I would yes, without hesitation."`}<br />
                    {`There is no doubt in his eyes, just conviction and absolution.`}</>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <>{`"Ok, thank you!"`}<br />
                    {`It waves the soldier goodbye.`}</>
            }, {
                char: { name: "Minamoto" },
                content: <>{`Minamoto nods and leaves.`}</>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <>{`That evening, when Remember Me goes to its evening rest, it puts Emily's garment aside, her Book of memories, lights its incenses and turns into a wolf. Now it can smell them. Sweet alyssum. Her favorite.`}<br />
                    {`It relaxes, stretches and starts to doze off.`}<br />
                    {`YOU KILLED HER!`}<br />
                    {`Wolf jumps back up, winces, traces the edge of the room, stops after some time, stops the smell, stops the ... going, and returns to its restless rest.`}<br />
                    {`Next day Remember Me was ... not itself. Its movements were so sluggish even beginners could dodge them. So undedicated even dummy might defend against them. And most strange of it all, it did not seem to notice. It was like it was not fully present and while it was, its presence was slipping, like a sand trapped in a sand hour, every now and then turned, only to start slipping away again.`}</>
            }, {
                char: { name: "Remember Me", token: 2 },
                content: <><iframe width="420" height="315" src="https://www.youtube.com/watch?v=81c9yXJlzmg"></iframe><br />
                    {`After Remember Me wakes up again ... he starts to change. Its posture is starting to become less animalistic and more humane, little less heavy as before, but it is almost as tall as an average elf now. Remember Me appears driven and at times almost ... playful? What is maybe even more striking is that ... it breathes. It is just an imitation of life, but its chest area does seem to mimic breathing. What is driving those changes? What is Remember Me becoming?`}</>
            }]
        }]
    }

    return { rpS1, rpS2 }
}