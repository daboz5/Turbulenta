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
            title: "Inner Self 2",
            shortDesc: "Minamoto tries to help Remember Me understand what is wrong with him.",
            tags: ["depression", "guilt"],
            chars: ["Remember Me", "Minamoto"],
            contents: [{
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`For the last 2 months Remember Me was a bit problematic. He was training to help guard the underground fortress, but was quickly designated as a `}<i>{`chaos bomb`}</i>{` or `}<i>{`berserker`}</i>{` type of an asset, it displayed power and violence, not towards anyone in particular, but it still made other soldiers– very uncomfortable and it did cause a lot of training dummies losses. Now, it is continuing to train, soon after it destroyed giant elemental dummy creature, more powerful than ever, more violent than ever, not doing anything wrong, but SOMETHING was clearly wrong, given the reports they had on it from before.`}</p></>
            }, {
                char: { name: "Minamoto" },
                content: <><p>{`Another afternoon of bashing and raging passes by. While the soldiers stationed at the base have gotten a bit used to it, Remember me's rampage still causes a bit of a disturbance in the training area. Enough for commander Minamoto to finally take notice and investigate. As the tall elven warrior enters the sandy area, he is a witness to yet another dummy smashed to splinters by the raging feygol. Seeing as this little creature might need some guidance he walks over.`}</p>
                    <p>{`"You posses a lot of strength Ishi no reikon. Demo, I sense much rage and wrath behind your blows. Bushido, a warrior's path is not just one of mindless violence. Tell what troubles you."`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`Remember Me stops, somewhat disturbed. It saw the man before, but where? Another soldier? Maybe a foreigner? It understood maybe half of what soldier was saying. Maybe if it ignores him, he will go away, like the rest of them? Honestly, it was kind of getting used to it. It slowly walked to another dummy, grabbed it, brought it back and fixed it on its place. There, perfect! It started growing thorns all over its arms again.`}</p></>
            }, {
                char: { name: "Minamoto" },
                content: <><p>{`Minamoto sighs, but does not shy away. Seeing how Remember me steps towards another dummy, he just steps in front of it blocking the way.`}</p>
                    <p>{`"Enough, Ishi no reikon. No more mindless destruction on my training grounds. Tell me what is wrong so I can help. Or leave."`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`Remember Me stops. Soldier does not want to go away? Strange. It would even dare to step on its way. Stranger. But it liked his conviction. The one Oaksplit seems to lack. It thought to itself ... What is wrong with me? It scratched its head, looked away, and quietly mumbled.`}</p>
                    <p>{`"I don't know."`}</p></>
            }, {
                char: { name: "Minamoto" },
                content: <><p>{`"Naruhodo, I see. If you do not know, then why are you smashing those dummies in such anger."`}</p>
                    <p>{`Minamoto replies, a small smile on his face, seeing that the little golem replied.`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`Remember Me looks at the remains of its previous dummy. Indeed ... why is it smashing them? It wanted to smash them. It felt ... right. It felt ... GOOD ... at least it did for some time. Now ... it was not so sure anymore. But it needed to smash them. It seemed important. It didn't want to hurt anyone. It was attacked, but it did not want to hurt anyone. Oaksplit, Nobodies, Emily ... pieces of wood and straw were skatered across the floor ... itself.`}</p>
                    <p>{`"I don't know."`}</p>
                    <p>{`"It seems important."`}</p>
                    <p>{`"They said I should do it."`}</p>
                    <p>{`"To train."`}</p>
                    <p>{`"To protect."`}</p>
                    <p>{`"To become a soldier."`}</p>
                    <p>{`"... to kill."`}</p>
                    <p>{`It thought to itself again.`}</p>
                    <p>{`"I am not sure what that means thou, but ... people say it a lot."`}</p>
                    <p>{`"So ... I don't know."`}</p></>
            }, {
                char: { name: "Minamoto" },
                content: <><p>{`Minamoto kneels down into the sand.`}</p>
                    <p>{`"Whoever said that was wrong. And partially right. Come sit, lets us speak."`}</p>
                    <p>{`He invites the feygol to sit in front of him.`}</p>
                    <p>{`"Being soldier is so much more than just killing. You offer your life for others. To protect, to help, to serve. It is a noble and honorable cause, one that should not be done in rage and anger."`}</p>
                    <p>{`Minamoto exhales, his breathing slowing down.`}</p>
                    <p>{`"I could help you. Breathe, think, meditate. Focus your will. Help you find reason within."`}</p>
                    <p>{`Minamoto smiles.`}</p>
                    <p>{`"What is your name, ishi no reikon, spirit of stone?"`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`Remember Me sits. It still did not understand what soldier was saying, probably nothing important, so it focused on the parts that it did.`}</p>
                    <p>{`Remember Me, Sir. As I said, I do not know what killing is, but if you say it is not imporant, it is probably true, you seem like someone who would know a lot about it.`}</p>
                    <p>{`It thinks about breathing. What should it do? It knew some creatures to breathe, it was when they ventilated their air-sacks inside of their bodies. Maybe ...`}</p>
                    <p>{`It stands up. And sits. And stands up. And sits. And stands up. And sits. And stands up ... this does feel breezy, maybe this is why creatures like to do it so much?`}</p></>
            }, {
                char: { name: "Minamoto" },
                content: <><p>{`Minamoto looks over the little golem, standing and sitting, in a bit of a confusion.`}</p>
                    <p>{`"Hmmm, why are doing that?"`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"I am trying to breathe, Sir, I think it is working!"`}</p></>
            }, {
                char: { name: "Minamoto" },
                content: <><p>{`Minamoto laughs, a sound of joy escaping his lips, truly amused by the feygol.`}</p>
                    <p>{`"Naruhodo, you are breathing, I see. I forgot to ask if you even need to breath. Hmmmm, truly amusing. You are a joy Remember me."`}</p>
                    <p>{`With a smile on his lips Minamoto stops him.`}</p>
                    <p>{`"Breathing is just a tool. Something we use to focus ourselves. We will find another one for you."`}</p>
                    <p>{`He looks over the enthusiastic golem.`}</p>
                    <p>{`"Although, if you like standing up, this might be a tool for you."`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`Remember Me stops. It doesn't exactly mind where or how its limbs are located and it is still on eye-to-eye level with the sitting soldier.`}</p></>
            }, {
                char: { name: "Minamoto" },
                content: <><p>{`They sit in quiet for a second, before Minamoto continues.`}</p>
                    <p>{`"Why do you want to kill, Remember me?"`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`Remember Me thinks to itself`}</p>
                    <p>{`"I don't. I don't even know what it means. But they do say problems go away when you do, so it is probably useful for getting rid of your problems."`}</p>
                    <p>{`"Do you kill often, Sir?"`}</p></>
            }, {
                char: { name: "Minamoto" },
                content: <><p>{`Minamoto thinks, a good solid minute passes. Then he looks feygol in his eyes, saying quietly.`}</p>
                    <p>{`"Killing is not just getting rid of your problems, Remember me. It is the taking of life. Bringing death to others. It is not something one should do lightly or with no conviction in his heart."`}</p>
                    <p>{`He looks towards the small grains of sand on the ground, taking some and letting them slowly trickle between his fingers.`}</p>
                    <p>{`"I do kill, hai. However, I kill when I need to, not when I want to. To kill is the last force one should resort to."`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"... that word, death, I am not sure what it means. Things dream, things stop, things become other things. And sometimes they wake up. They return to us. And when they do, we are happy they are back again with us ... sometimes."`}</p>
                    <p>{`"I hope that Emily will be happy to see me when she wakes up ... maybe ...`}</p>
                    <p>{`It stops, switches topic`}</p>
                    <p>{`"How does it feel to kill?"`}</p></>
            }, {
                char: { name: "Minamoto" },
                content: <><p>{`"Death means the end. Sleep with no dreams."`}</p>
                    <p>{`Minamoto curiously looks at Remember me.`}</p>
                    <p>{`"It is as you said, things become different things. But they rarely return. Almost never. Events like that, we call miracles. Waking up from death slumber... Its not something that is done."`}</p>
                    <p>{`He lays his hands in his lap, his breathing slowing down.`}</p>
                    <p>{`"Killing is not easy. It is not something you enjoy. It is not something you take pleasure in. Everytime you kill something, a part of your soul is tainted."`}</p>
                    <p>{`His face changes, becoming hard.`}</p>
                    <p>{`"Demo, sometimes is necessary. Killing sometimes is the only way. No matter how it feels."`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"So, it is just another word for sleeping? If they do not return, they probably do not want to return. But Emily is strong, she will return, she aways stands up again, always tries again, always does what is required of her. She made me, and it took her more than hundred years to do it, but she did. She will return. And she is dreaming. She likes to dream. If someone doesn't wake up, they probably doesn't want to wake up, they ..."`}</p>
                    <p>{`Remember Me freezes, light in its eyes for a moment fades, then resets and with a proper smile for the first time till now it says ...`}</p>
                    <p>{`Do you want to hear about Emily? Emily Nightsong. She is an elf, just like you.`}</p></>
            }, {
                char: { name: "Minamoto" },
                content: <><p>{`Minamoto remains quiet, noticing the sudden change, interested, but does not press it.`}</p>
                    <p>{`"Emily Nightsong. Never heard of her before. Demo if you want to tell me about it, I would like to hear it."`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`There is almost a sigh of relief coming from feygol as it happily starts telling the story of Emily`}</p>
                    <p>{`"Gladly! Emily Nightsong was born blind, sickly and weak into a druid clan of Leshisel to the mother Natalija Nightsong. She was one of the top druids, so she expected a lot from her, but Emily wasn't exactly able to perform up to her expectations and her clan was very big on "everyone gets what is able to earn with its work", so /.../ but even so many other kids and clan servants hated her, so much attention was placed on her, even if she was failing at her best, while others were better from her /.../ especially Penelope, because she was better at druidcraft than her, so she /.../ and similarly less capable Turtil, who was envious of attention she was getting, or Orhida, who was mostly doing it for drama /.../ but she also had a friend, very capable girl Heliana, who sometimes defended her but she was older and very bussy with her studies, so /.../ and there was Timberly, who was always nice to her and Emily had a crush on him, but he was older and /.../ so she was most of the time left to herself. But she tried, even if she was blind she if need be went to the forest herself and often returned a few days later ... or was found, ragged and sickly, and then she went again, till she finished her task, for her family, that expected so much from her, she /.../ but many servants envied her, how she tried, how they had to worry about her getting sick, or hurt, how they had to take care of her, like she is better than them, because she doesn't give up /.../ everyone in clan had to make a feygol to grow up and become a proper adult or they had to serve, better druids they were, more valuable servant they were, but only a servant and not the adult, because feygols were valuable, they protected clan, the forest ... or were sold to the island court ... so it was very important for them to make them /.../ so she became mature, but not an adult, but she could if only she could make a feygol, any servant could at any time become an adult, valuable, so she kept trying and others hated her even more, she was not good at being a servant, but even worse when she was constantly trying and getting sick /…/ so she run away. Not to be a burden, to learn on her own, to learn from other people, people outside her clan, people outside her island, she explored, she learned, she traveled to elementals /…/ and she learned from gnome technicians on how to make /…/ or from wizards how to make a golem where she /…/ or from necromancers, that one was a scary one, because /…/ or when she was trying to learn from ghosts, it was really hard to get their attention, so she /…/ until she finally did it! Sort of. She made the first me. I can still remember me. Moving, speaking, even casting very simple spells, but something missing, so she started taking that something that was missing from her and giving it to me. And that is the last thing I remember from her, before I wake up and she goes to sleep, giving me final directions, to remember her, to remember Emily. I at first stayed with her, hoping she wakes up, but she didn't, so after some time I went on, to make sure people remember Emily. She is my mother, my creator, my model and my hero. And I want everyone to have someone like her. To remember someone like her. To keep them going. Like me. She keeps me going. And I remember her."`}</p>
                    <p>{`"I also have druidic clothes that are just like hers, they don't fit me, but I remember. I also have her favorite incense, and everything that I remember, I record in my book of Emily, so I never forget. And even if I am not together anymore, world can still remember Emily. This is why I tried to create a place up in the city where I could tell people about Emily. Place about her. It could still be there even if I am not, telling a story of Emily. That funny guy with a boomstick taught me that."`}</p></>
            }, {
                char: { name: "Minamoto" },
                content: <><p>{`Minamoto listens to everything Remember me says, patiently and carefully, not missing any detail. After the little feygol finishes, he waits in silence, thinking.`}</p>
                    <p>{`"Emily is a very important person to you. I understand. She is the reason you have come to train here, your reason to fight and remember. That is very noble and honorable"`}</p>
                    <p>{`He once again falls silent, his hands folded, his chest moving slowly.`}</p>
                    <p>{`"You wanted to build a shrine, correct? What happened? Why did your mind change and you came down here to fight?"`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`Remember Me is silent for a moment, as if contemplating something.`}</p>
                    <p>{`"I tried."`}</p>
                    <p>{`"I asked for a place."`}</p>
                    <p>{`"People were nice to me."`}</p>
                    <p>{`"I used their yellow and brown and white pieces. Like the ones we get when missions end."`}</p>
                    <p>{`"I rebuilt a place. Small place next to the big big wall without roof."`}</p>
                    <p>{`"I built a pond for kissy fish. made the place green, made a place for where people with nowhere could go, made a place where people without food could eat, made a place where people who would get hurt or sick could get healing. Made a place where there was a ... statement to Emily. Her shrine."`}</p>
                    <p>{`"They said it is safe there. Oaksplit said it was safe there. Next to the doors, where guards would protect you."`}</p>
                    <p>{`"It was not."`}</p>
                    <p>{`"Nobodies attacked."`}</p>
                    <p>{`"I did not know it at first and I tried to reason with them."`}</p>
                    <p>{`"Then they did it again, making sure I know it was them. Nobodies."`}</p>
                    <p>{`"I went to Oaksplit, warning him that city is under threat."`}</p>
                    <p>{`"But he mocked me."`}</p>
                    <p>{`"Telling me I should expect it. That I deserve it. Because I believe. That guards did nothing wrong."`}</p>
                    <p>{`"That I should help those who attacked me. Who attacked Emily. Because of his problem. His memory of someone named Manuel."`}</p>
                    <p>{`"So, I offered him solutions. I can help him with his job, his memory. For pieces I could spent on Emily, my memory."`}</p>
                    <p>{`"Or he could return pieces to me, so I can rebuild her shrine somewhere else, away from bad people."`}</p>
                    <p>{`"Then he said he doesn't want to be representative of People person, how hard it is. How he would stop if there was someone who could do a better job than him. How ungrateful I am. How I do not understand he is doing his best."`}</p>
                    <p>{`"So, I offered him another solution. Make me a council member. I will take care of Manuel's memory. I will take care of Emily's memory. I will take care of anyone's memory. He might not be a hero or a savior as he said, but I could grow to be one. For the Emily."`}</p>
                    <p>{`"And he said no."`}</p>
                    <p>{`"So I left."`}</p>
                    <p>{`"I tried to found a new place for Emily, somewhere safe. With people to tell about her."`}</p>
                    <p>{`"... haven't found it yet."`}</p></>
            }, {
                char: { name: "Minamoto" },
                content: <><p>{`"Hmmm, naruhodo. Common people can sometimes be harsh, too harsh to things they do not know or understand. I can see now, why your rage and anger came to the surface. It was a very cruel thing that happened to you and for what its worth, I apologise, sumimasen. The guards afterall are in mine domain, but some in the city are harder to guide than others."`}</p>
                    <p>{`He politely bows, an apology apparent. Then he smiles, a sad smile: "Demo it is true, others will have their own special persons, just like you have your Emily. They worship and remember different things, others. Me for example, my special person is an elven woman called Morwyn. I worship the platinum dragon Bahamut. These two have shaped who I am and who I must be, to be a better person. I could not just remember Emily Nightsong, for her story was not one connected to mine." He exhales, a warm smile now playing on his lips.`}</p>
                    <p>{`"Everybody has their own special someone, their own memories. You cannot force those upon others. Demo, nobody should stop you from making a shrine in Emily's honour. That is wrong. If you want, I can speak to Oaksplit for you."`}</p>
                    <p>{`He looks around the training field.`}</p>
                    <p>{`"Now, I think you have calmed down a little. If you want I can train you now. No more blind rampage, but focused and precise. Teach you how to focus, to notice everything around you. Would you like that?"`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`Remember me thinks to itself. There sure is a lot of people with Emily-like person. Do all of them have that? I should inquire more about that later.`}</p>
                    <p>{`It was already standing, as soldier said it should, so it just scratches its head, not knowing what to do.`}</p>
                    <p>{`"I guess. I can try. You look like you know what you are talking about. But you look different than me. You don't have those."`}</p>
                    <p>{`It shows its hand, encased with magical, acidic thorns.`}</p>
                    <p>{`"Would you be able to teach someone like me, when our bodies and a way we fight to me seems to be so different?"`}</p></>
            }, {
                char: { name: "Minamoto" },
                content: <><p>{`Minamoto laughs.`}</p>
                    <p>{`"Indeed we are different. But the same life energy flows through both of us. In Yamato we call it ki. When we fight, we release, channel, it flows in our bodies. When you fight you release you ki, without even knowing it. I will teach you how to channel it. How to properly focus."`}</p>
                    <p>{`Minamoto thinks a little.`}</p>
                    <p>{`"What did you feel, when you were striking those dummies earlier?"`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`Remember Me thinks. It wasn't really thinking much, it did  not need to, it was way too easy to smash them, but ...`}</p>
                    <p>{`"Anger? Frustration? Relief? Disappointment?"`}</p></>
            }, {
                char: { name: "Minamoto" },
                content: <><p>{`Minamoto nods.`}</p>
                    <p>{`"It was tension, it was turmoil. It was your ki, violently spinning around your body. You just did not know it yet."`}</p>
                    <p>{`He stands up before the feygol.`}</p>
                    <p>{`"That tension is something we all experience when fighting. For some that tension is anger and rage. For others sadness and grief. Some even seek the pleasure in it. No matter what it is, thag tension cannot stay in your body for long. It seeks release, to be free, to flow out. When that happens, we fight and as we fight, we slowly lose it and we calm down. Most do this unconsciously. Trained warriors can control it to some degree. Masters can use it at will."`}</p>
                    <p>{`Minamoto squats down to feygol's size, grasping his shoulder.`}</p>
                    <p>{`"This is what I will teach you. To focus that tension, use it, to sense the world around you better. Afterall, ki is everywhere and everything is ki. Life."`}</p>
                    <p>{`He straightens up again.`}</p>
                    <p>{`"Now, I would usually teach this by breathing exercises. Demo, you do not need to breathe. So we will skip to the next step. It should be a bit harder and yet, I think it will work. Focus on that feeling from before, when you fought. Try to bring it forth again. But this time do not move. Let it build up slowly."`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`Remember Me does so. It straightens up, relaxes, then seeks the feeling it felt when striking those dummies.`}</p>
                    <p>{`Anger`}</p>
                    <p>{`Anger`}</p>
                    <p>{`Anger`}</p>
                    <p>{`Disgust`}</p>
                    <p>{`"Ok, I think I got it!"`}</p></>
            }, {
                char: { name: "Minamoto" },
                content: <><p>{`"Very good, feel the energy build up. Then when you can take no more, release it. But slowly. Controlled."`}</p>
                    <p>{`Minamoto nods, instructing Remember me.`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"Without moving?"`}</p></>
            }, {
                char: { name: "Minamoto" },
                content: <><p>{`"Correct, just the energy. No movement."`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`Remember Me gets back to its feeling. Ok ... how should it go about it? It carefully touches it.`}</p>
                    <p>{`Pain`}</p>
                    <p>{`Well, that is not good. Let's try breathing ... no, no movement. Hmmmm ... what about poking it. But with a really really long stick?`}</p>
                    <p>{`It imagines a very long stick and starts poking it. It does not seem amused. In fact, it starts growing, gnarling, growling, it is not happy, not happy at all.`}</p>
                    <p>{`"Ok, I think something is happening. What should I do now?"`}</p></>
            }, {
                char: { name: "Minamoto" },
                content: <><p>{`"Slowly release, bit  by bit. Let it go."`}</p>
                    <p>{`Minamoto quietly instructs.`}</p>
                    <p>{`"Focus and release it into your surroundings."`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`Remember Me looks at its anger. It is angry all right. And furious. Well, at least it got the releasing part right ...`}</p>
                    <p>{`"Here, kitty, kitty, kitty! Let us take it slow, ok?"`}</p>
                    <p>{`Anger makes a step towards Remember Me. It is a big one.`}</p>
                    <p>{`Thorns starts growing on Remember Me's arm.`}</p>
                    <p>{`Ok, this does not look good. I need Emily's smell, I need to relax ... wait, no movement ... maybe I can try and imagine it?`}</p>
                    <p>{`It tries to remember, but memory shies away from anger as it is forming. Well, this sucks.`}</p>
                    <p>{`"I think it is not going so well. I think releasing works, but my control might be on the week side."`}</p>
                    <p>{`Another step, Remember Me starts to panic.`}</p></>
            }, {
                char: { name: "Minamoto" },
                content: <><p>{`Minamoto notices the struggle.`}</p>
                    <p>{`"Focus Remember me. Focus on something important. Focus on Emily. Her voice, her image. Let her guide the tension out."`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`Remember Me tries, but anger is now right beside it, consuming it. As it tries to remember Emily, anger answers.`}</p>
                    <p>{`"DON'T YOU EVEN DARE."`}</p>
                    <p>{`Ok. So ... what?`}</p>
                    <p>{`It starts loosing control over its body. There is a dummy right in front of it. This is bad.`}</p>
                    <p>{`Could you please no? Please?`}</p>
                    <p>{`No answer, fist clenches.`}</p>
                    <p>{`No.`}</p>
                    <p>{`...`}</p>
                    <p>{`No.`}</p>
                    <p>{`... ok.`}</p>
                    <p>{`Its fist explodes. Anger disappears.`}</p>
                    <p>{`Well, this is not good.`}</p>
                    <p>{`Its body cracks.`}</p>
                    <p>{`Its head cracks.`}</p>
                    <p>{`It falls apart, losing consciousness. Its last thought ...`}</p>
                    <p>{`Fuck.`}</p></>
            }, {
                char: { name: "Minamoto" },
                content: <><p>{`Minamoto sees this, immediately kneeling down`}</p>
                    <p>{`"Remember me. Remember me! Are you alright?!"`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`Rocks move a bit, but no proper answer.`}</p></>
            }, {
                char: { name: "Minamoto" },
                content: <><p>{`Minamoto calls out in a strong voice, commander's voice.`}</p>
                    <p>{`"CLERIC! I need a cleric here now! Or a medic. Move it men."`}</p>
                    <p>{`Suddenly the entire field is buzzing with activity, soldiers running for the cleric or a medic. Very quickly a person in white robes sits down besides the fallen feygol, looking him over.`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`Alive, but in not so good state. Probably had better days.`}</p></>
            }, {
                char: { name: "Minamoto" },
                content: <><p>{`The cleric immediately starts casting, a couple of healing spells. In the process, Minamoto interject.`}</p>
                    <p>{`"Calm him down as well. There are raging energies inside his body. His ki needs to stabilize."`}</p>
                    <p>{`The cleric nods, casting another Calm emotions on the feygol, trying to subside the dangerous torrent of energies and emotions.`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`Remember Me is calm. There is no anger anymore, so this is good. It looks around. It feels lonely. Maybe it should go where it belongs. Where was it again? Feywild? Outer planes? Why is it here again? Something about ... Emily? Right?`}</p>
                    <p>{`Rocks starts to form again and plants grow back together. It body is starting to get its former shape, but cracks remain. Rock does not heal. Rocks only fall apart with time. But there are strands of iron from its original form, still willing to connect back to its original long-lost shape. Cute.`}</p>
                    <p>{`Light returns to Remember Me's eyeholes. It stands up, looks around.`}</p>
                    <p>{`"Hi everybody. There is more of you than I seem to remember."`}</p>
                    <p>{`It looks at soldier it was talking with.`}</p>
                    <p>{`"I remember you. What were we talking about? Something about breathing, right?`}</p>
                    <p>{`It starts to breathe. In its own way.`}</p></>
            }, {
                char: { name: "Minamoto" },
                content: <><p>{`As life returns to Remember me's eyes, Minamoto looks him over breathing out a sigh of relief.`}</p>
                    <p>{`"Ahhh, you are back. The violent energies drove you apart. You exploded."`}</p>
                    <p>{`With a wave he dismisses the rest of the soldiers and the cleric before kneeling down in front of the feygol, quiet and deep in thought. Silence strains for a good solid minute, before he continues.`}</p>
                    <p>{`"Hmmmm, it seems, I will need to be careful. Your ki, your energies, they work much different. I will need to give it some thought, think how to properly train you."`}</p>
                    <p>{`He looks closely, seeing his chest rise and fall, his eyes drawing closer in disbelief.`}</p>
                    <p>{`"Shinjirarenai. Do you breathe now?"`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`Remember Me stops standing up and sitting down.`}</p>
                    <p>{`"I believe so?"`}</p>
                    <p>{`"It does feel quite breezy."`}</p>
                    <p>{`"Relaxing even."`}</p></>
            }, {
                char: { name: "Minamoto" },
                content: <><p>{`"You are very interesting, ishi no reikon. You know what. Practice the new breathing. Feel it. Try controling it, make it faster, slow it down. Then find me after, when you discover all the secrets. And we shall continue with your training. Is that alright?"`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"If you say so!"`}</p>
                    <p>{`It salutes as it saw soldiers doing.`}</p></>
            }, {
                char: { name: "Minamoto" },
                content: <><p>{`Minamoto smiles, salutes back and returns back to his duties, his head still shaking from all the wonders he had seen and heard today.`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`Before he goes, question pops up in Remember Me's head.`}</p>
                    <p>{`"Sir Soldier? May I ask you something, before you go?"`}</p></>
            }, {
                char: { name: "Minamoto" },
                content: <><p>{`Minamoto stops and turns, deep in though.`}</p>
                    <p>{`"Hmmm, hai, yes of course. What is it?"`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"I just remembered ... Morwyn, you mentioned. Would you ... stop things for her?"`}</p></>
            }, {
                char: { name: "Minamoto" },
                content: <><p>{`"I would yes, without hesitation."`}</p>
                    <p>{`There is no doubt in his eyes, just conviction and absolution.`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"Ok, thank you!"`}</p>
                    <p>{`It waves the soldier goodbye.`}</p></>
            }, {
                char: { name: "Minamoto" },
                content: <><p>{`Minamoto nods and leaves.`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`That evening, when Remember Me goes to its evening rest, it puts Emily's garment aside, her Book of memories, lights its incenses and turns into a wolf. Now it can smell them. Sweet alyssum. Her favorite.`}</p>
                    <p>{`It relaxes, stretches and starts to doze off.`}</p>
                    <p>{`YOU KILLED HER!`}</p>
                    <p>{`Wolf jumps back up, winces, traces the edge of the room, stops after some time, stops the smell, stops the ... going, and returns to its restless rest.`}</p>
                    <p>{`Next day Remember Me was ... not itself. Its movements were so sluggish even beginners could dodge them. So undedicated even dummy might defend against them. And most strange of it all, it did not seem to notice. It was like it was not fully present and while it was, its presence was slipping, like a sand trapped in a sand hour, every now and then turned, only to start slipping away again.`}</p></>
            }, {
                char: { name: "Remember Me", token: 2 },
                content: <><iframe width="252" height="189" src="https://www.youtube.com/embed/81c9yXJlzmg"></iframe>
                    <p>{`After Remember Me wakes up again ... he starts to change. Its posture is starting to become less animalistic and more humane, little less heavy as before, but it is almost as tall as an average elf now. Remember Me appears driven and at times almost ... playful? What is maybe even more striking is that ... it breathes. It is just an imitation of life, but its chest area does seem to mimic breathing. What is driving those changes? What is Remember Me becoming?`}</p></>
            }]
        }, {
            title: "Inner Self 1",
            shortDesc: "Remember Me tries to train his problems away. He gains power, but becomes even less stable.",
            tags: ["depression", "guilt"],
            chars: ["Remember Me"],
            contents: [{
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`Remember me was furious. How could have Oaksplit claimed he cared about his friend and try to honor his memory, while sitting in his big chamber, crafting chairs and inking paper. How could it have trusted such a self-serving person. He was just like one of the council druids from Emily's village. The village that eventually killed her. She was trying so hard and all she got in return was ridicule. Maybe this is why she run away. Maybe this is the only way. Be alone. Do what you can with what you have. This is how it was created after all. Away from the village. Away from everyone else.`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`Remember Me came to the magic lake. Lake under the world above. Lake to the unknown. Lake where it found its new family. I mean, that exact place was a day away from here, but details weren't that important right now.`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`No, that ork was worse. Council member were at least capable. Everyone knew it. They were the most capable members of the entire village. No one could denied it. They each had to create a feygolem and even then, only the best of them ruled above everyone else. It made sense. But that ork ... as he said, woodwhisperer, seedwhisperer, but not a ... what was his role again? Representative of the People. That People person must have had a bad taste in people that represent it.`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`It finally found what it was looking for. A fortress at the lake side. A place that needed people. People who could fight. And at the moment, Remember Me was very willing to rip a head or two off any monster that would dare to cross its path. Maybe it was only an imagination, but cave's plants and fungi trembled and moved away as it made its way towards the fortress. This has to be the place. Place that will tell it who to kill.`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`To its surprise, this was not "exactly" what happened. First, they sounded an alarm. Monster approaching. Great, it was more than ready to fight one. But it soon found out the monster was Remember Me. Not the best time to humor it, but Remember Me tried its best to be civil and explain their misunderstanding. They didn't seem sure what to do, so they assigned it to some more training. Well, sure, it could probably use some of that, in its 33 years of wandering, there were only few occasions where it actually needed to fight, so its fighting stile relied more on ... instincts of its creation than any real fighting style, unlike most people around it. So ... training it is.`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`He became part of 30 men group that slowly started to shrink. Something about how it dispatches training dummies. Tearing them to pieces. One after another. Magic acidic thorns enveloping its arms, teeth of the beasts, claws, fangs ... everything had the same motive. It was primal, bestial, brutal. One of the soldiers vomited just from looking at the process of turning a training dummy into ... whatever remained. In time its "style" was recognized as "chaos bomb". Remember Me didn't know what it means, but as long as it could tear his enemies apart, it did not care. Some day, it will grow. And it will destroy enemies of Emily. It will return. And it will make them pay. Just as Emily would have wanted.`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`Back to its business, Remember Me was again at its job off smashing training dummies. It was not "meant" to smash them, but little overperformance never killed anyone ... and it was not its fault they were too weak to properly train on.`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`Oaksplit sent it a letter. He wants to meet. Why? They have nothing to talk about. His picture was cute thou. But he wrote they are sorry. Who is sorry? Remember Me couldn't remember anyone else that wanted to say sorry to it. And sorry about what? It did not seek apology, words, it sought action!`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`Primal Savagery and a wild swing with its thorny arm.`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`Oops. Another dummy, smashed.`}</p></>
            }]
        }, {
            title: "First Friend",
            shortDesc: "Ko Remember Me v Emily's Respite zgradi prvi bazen, ima končno nekaj časa, da se na samem pogovori s svojim novim prijateljem.",
            tags: ["depression", "guilt"],
            chars: ["Remember Me", "Mezolček"],
            contents: [{
                char: { name: "Remember Me", token: 0 },
                content: <><p>{`"Torej ... Gospod Riba. Kako naj te kličem? Imaš ime? Naziv? Družino?"`}</p></>
            }, {
                char: { name: "Mezolček" },
                content: <><p>{`"..ime?"`}</p>
                    <p>{`Riba te gleda iz gladine začasnega bazena, ki si ji ga našel.`}</p>
                    <p>{`Ko nadaljuje govoriti ji ponovno prične brbotati voda skozi škrge.`}</p>
                    <p>{`"Imam družino, če kaj pomaga odgovoriti. Ne vem kje je, sicer. Ko sem bila dovolj velika, da se spomnim, sem najverjetneje odplavala že daleč stran od njih."`}</p>
                    <p>{`"Mogoče kdaj koga srečam, me zanima kako so."`}</p></>
            }, {
                char: { name: "Remember Me", token: 0 },
                content: <><p>{`"Mar nimaš imena? Kako so te klicali ostali? Kako te je klical Gospod Lenivec, s katerim si potovala? Hmm..."`}</p>
                    <p>{`Remember Me se zroč v nebo globoko zamisli in za trenutek ali dva se že zdi, da je pozabil na pogovor z Ribo.`}</p>
                    <p>{`Nato nenadoma ploskne z rokami in se od vznemirjenja prekucne v vodo in razlije polovico bazena. Medtem ko hiti vodo vračati nazaj v bazen, razloži svojo veliko zamisel.`}</p>
                    <p>{`"V kolikor nimaš imena, ti ga bomo pa naredili! Tako kot ga je meni naredila moja stvarnica, Emily!"`}</p>
                    <p>{`"Hm ... zelo si asertiven, grd in mezoljav ... mislim da je idealno ime zate Mezolček! Kako ti je všeč ime Mezolček? Gospod Mezolček ... zelo lep prizvok ima, mar se ti ne zdi?"`}</p>
                    <p>{`"In glede družine nič ne skrbi ... tudi jaz sem zelo daleč od družine ... od najinega plemena, od Emily ... še vedno spi v daljni deželi ... dokler ne najdeva družine, morda bi bil moja družina? Najdena družina? Vsaj dokler ne najdeva svoje izgubljene družine?"`}</p></>
            }, {
                char: { name: "Mezolček" },
                content: <><p>{`"Ti si prvo bitje, s katerim se pogovarjam. Nisem niti vedela, da se moje misli prenašajo po zvokih, ki jih spuščam. Lahko me kličeš kakor si želiš, dokler lahko potujem z vami v vedno večje vode."`}</p></>
            }, {
                char: { name: "Remember Me", token: 0 },
                content: <><p>{`"Oh, ja, predstavljaj si šele, kako začudena so bila drevesa ko sem jim povedal vse o Emily ... o, ja, drevesa ... veš tiste reči ki so rastle iz stropa v jami? No, običajno rastejo v narobe smer in so zelene barve, vem čudno, vendar nikoli se nisem spomnil, da bi jih vprašal zakaj to počnejo, mislim da je zelena med drevesi dokaj v modi. Saj bi jim povedal da imajo kot kaže izbiro, samo se ne morejo več pogovarjati z menoj, zadnje mi je pojasnilo, da ima hudo vnetje grla in da je zelo nalezljivo, naj se ne približujem. Boga. Pa še grla nimajo, si lahko predstavljaš kako hudo bolan moraš biti, da se ti celo potem grlo vname? Res groza."`}</p>
                    <p>{`"... lahko te dam v morje, vendar nazadnje ko sem to naredil, ribi ni bilo preveč všeč. Veliko "Aaaaaaaaa, gori, celo telo mi gori, boli, boli, aaaaaaaa, škrge mi gorijo, umiram, umiram, umiram!!!", nakar me ni želela več obiskati ... bi te morje zanimalo? Predstavljaj si toliko vode kolikor si je lahko zamisliš, samo je takšnega okusa, kot da je nekdo vse življenje lulal vanjo. Je daleč največja voda kar jih poznam ..."`}</p>
                    <p>{`Zamisli se.`}</p>
                    <p>{`"... ... ... Gospod ali Gospa Mezoljček? Meni se zdiš dokaj Gospod, vendar nikoli se nisem spomnil pogledati."`}</p>
                    <p>{`Dvigne ribo za rep.`}</p>
                    <p>{`"Jaaaaa, še vedno ne vem kaj gledam. Mi morda poveš kaj naj bi bilo za videti? Kako ti veš s kom delaš male ribice? Ali je to bolj 50% 50%, včasih zadaneš, včasih zadaneš pravilneje?"`}</p></>
            }, {
                char: { name: "Mezolček" },
                content: <><p>{`Riba zafrustrirano opleta po zraku, ko jo dvigneš`}</p>
                    <p>{`"Ne vem o čem govoriš!"`}</p></>
            }, {
                char: { name: "Remember Me", token: 0 },
                content: <><p>{`"... hm, slišal sem za živali, ki lahko spremenijo spol, morda si ena od teh? Zgledaš zelo zmedeno ..."`}</p>
                    <p>{`Previdno položi ribo nazaj v vodo.`}</p>
                    <p>{`"Nič, Gospod Mezolček, od sedaj sva kot kaže družina."`}</p>
                    <p>{`"Veseli me, da sva se spoznala in upam, da se razumeva še naprej. Zanašam se nate in na tvoje nasvete!"`}</p></>
            }]
        }, {
            title: "Polite Inquiry",
            shortDesc: "Remember Me se poskuša izpogajati za ceno gradu.",
            tags: ["depression", "guilt"],
            chars: ["Remember Me", "Rosa Guard", "Rosa Clerk", "Oaksplit"],
            contents: [{
                char: { name: "Remember Me", token: 0 },
                content: <><p>{`"Hello. Hello? Sir? Yes, you, sir. I have a question. It this yours?"`}</p>
                    <p>{`Points at the Rosa Castle behind the soldier guarding the gate.`}</p></>
            }, {
                char: { name: "Rosa Guard" },
                content: <><p>{`The human guard looks down at the strange golem creature, before scratching his head.`}</p>
                    <p>{`"Eh, nay? It belongs to the council. The council of Rosa Riendo."`}</p>
                    <p>{`He tilts his head, clearly unsure how to handle this situation.`}</p>
                    <p>{`"Eh, can I help you?"`}</p></>
            }, {
                char: { name: "Remember Me", token: 0 },
                content: <><p>{`"I hope so? Tell me ... who is this `}<i>{`Council person`}</i>{`? Where can I find him? Or is he she? I hope this is not Mezolček all over again ..."`}</p>
                    <p>{`Starts talking to itself.`}</p></>
            }, {
                char: { name: "Rosa Guard" },
                content: <><p>{`"Eh, the council is actually a group of individuals. They govern and lead the city and Turbulenta."`}</p>
                    <p>{`He glances back towards the fort.`}</p>
                    <p>{`"I suppose you can make an appointment for an audience with them ..."`}</p></>
            }, {
                char: { name: "Remember Me", token: 0 },
                content: <><p>{`"What a great idea! I remember now, elders that everyone serves right? Emily had one of those. You must be really smart to know all that. Yes. I would like to talk to them. Or at least some of them? When Emily was awake, council members usually didn't want to talk to her, even her mother kept her distance, something about her aperance, but I do not understand, she looked great, beautiful even. You are smart! Would you know why Emily couldn't talk with her mother more? She really wished she could. Especially when she was bullied."`}</p>
                    <p>{`It looks at the soldier with sparkle in his empty-black-hole eyes.`}</p></>
            }, {
                char: { name: "Rosa Guard" },
                content: <><p>{`"I guess sometimes it is hard to talk about feelings..."`}</p>
                    <p>{`The soldiers replies having one of the weirdest experiences in a while.`}</p>
                    <p>{`"Emmm, if you wish to talk to the council maybe come with me, I can take you to the clerks desk, they can make an appointment there."`}</p>
                    <p>{`Choosing to help the small adorable creature, he gestures for it to follow him inside the castle.`}</p></>
            }, {
                char: { name: "Remember Me", token: 0 },
                content: <><p>{`"Right behind you!"`}</p>
                    <p>{`"So ... feelings are sometimes hard to talk about. While we are getting there, do you have feeling it is hard to talk about? Maybe something you have a hard time saying to your mother or daughter? Do you have a mother or a daughter? Would you want to talk more with them?"`}</p></>
            }, {
                char: { name: "Rosa Guard" },
                content: <><p>{`Soldiers thinks a little, to his mother he left back on the mainland.`}</p>
                    <p>{`"Sometimes I do wish I could speak with my mother again, aye. But she is far away now. Back in the Iron Rose. I left for Turbulenta, so I could earn some extra gold. So she could live better."`}</p>
                    <p>{`He smiles.`}</p>
                    <p>{`"I do sometimes write and send some gold back. Maybe I should do it again soon. Gracias, little golem. What is your name, by the way?"`}</p>
                    <p>{`He asks as they enter the main chamber, making way for one of the wooden clerk desks.`}</p></>
            }, {
                char: { name: "Remember Me", token: 0 },
                content: <><p>{`"Remember Me, Sir."`}</p>
                    <p>{`Grabs his hand with his tiny hand.`}</p>
                    <p>{`"I do hope you get to see your mother again. It sounds to me like you really miss her. Maybe tell her that the next time you exchange words with her. You remember her and she remembers you. This is what is important, no? That we remember. Me, Emily, and you, your mother."`}</p></>
            }, {
                char: { name: "Rosa Guard" },
                content: <><p>{`"Hmmm, I will do that, eh, Remember me. You give good advice, strange creature."`}</p>
                    <p>{`He stops with the little golemn before the desk, addressing the clerk behind it.`}</p>
                    <p>{`"Ahem, chief Malvias, this little, hm, well this is Remember me. He would like to speak to the council."`}</p></>
            }, {
                char: { name: "Remember Me", token: 0 },
                content: <><p>{`"Bye smart Sir, thanks for your help!"`}</p></>
            }, {
                char: { name: "Rosa Guard" },
                content: <><p>{`Guardsman waves...`}</p>
                    <p>{`"Adios, Remember Me."`}</p>
                    <p>{`...before walking back to his post at the front gate.`}</p></>
            }, {
                char: { name: "Rosa Clerk" },
                content: <><p>{`The clerk leaves for a few minutes and then comes back through the side door, gesturing Remember Me to folow.`}</p>
                    <p>{`"Master Oaksplit will hear you now."`}</p></>
            }, {
                char: { name: "Remember Me", token: 0 },
                content: <><p>{`Remember Me quietly follows, admiring its surroundings `}</p></>
            }, {
                char: { name: "Oaksplit" },
                content: <><p>{`Up the steep stairs and right brings you to a large wooden slab door. Massive as it is, the thin clerk gently pushes at it and they open without much resistance. A scent of pine and wood polish enters your nose, as the clerk lets you into a large chamber coated with wood. Two large windows look up at the vast jungle forests of Turbulenta, while a massive half-orc sits in a wooden chair beneath them, frown on his chiselled workers face, the wooden desk cluttered with papers and woodcarvings. The floor is not much better and you can barely avoid stepping on any official documents.`}</p>
                    <p>{`The council member Valmo Oaksplit looks up (or in fact down) at you and his face changes from a frown to an expression of puzzled amusement.`}</p>
                    <p>{`"Now what do we have here? Come sit down little fella."`}</p>
                    <p>{`He gestures at an empty wooden chair in front of the desk.`}</p>
                    <p>{`"Carved that one myself."`}</p></>
            }, {
                char: { name: "Remember Me", token: 0 },
                content: <><p>{`"Uuuu, I will ... no, wait, I almost forgot something!"`}</p>
                    <p>{`Remember Me takes but a moment to prestidigitate forest and caves from his rocky surface, smell of freshly minted herbs filling the room, a feeling of a secluded forest pool fills the air, but it doesn't stop there as he is already druidcrafting himself, moss on his head looking fresher and branches holding his limbs together feeling thicker and ... younger? Not stopping there there is a cry of an eagle that resonates through the room, maybe a glimpse of spectral wings that gave those who would observe the feeling of Eagle's Splendor. Satisfied with his work he somewhat awkwardly climbs on the large chair, standing on it in order to be able to extend his hand all over to the other side of probably also hand-crafted desk.`}</p>
                    <p>{`"Remember Me, Sir, nice to meet you! I was told you own this big stony house?"`}</p></>
            }, {
                char: { name: "Oaksplit" },
                content: <><p>{`Oaksplit looks at Remember Me with sof eyes and heavily breathes in the smell of the woods that the little creature brought with him. He smiles at you and answers with a deep voice.`}</p>
                    <p>{`"Me owning this castle? Ah, if only. Then I could renovate it with wood and raise some ceilings ..."`}</p>
                    <p>{`He rubs his head.`}</p>
                    <p>{`"But no, my little friend, I do not own this building. I have been placed here by people of this island. As their representative, or at least one of them. Why do you ask?"`}</p></>
            }, {
                char: { name: "Remember Me", token: 0 },
                content: <><p>{`"I am now sure if I know People of the Island person you are talking about, but if you represent it, you can probably help me."`}</p>
                    <p>{`It rumbles trough its pouch for a moment or two with its for the job not optimized fingers. Finally, it seems it found what it was looking for.`}</p>
                    <p>{`"I would like to buy this building ... would 47 brown pieces be enough? Those are all brown pieces I have on me, so I hope it is enough. Ou, no, wait! I also found a third of a brown piece! I hope this helps."`}</p>
                    <p>{`"It is broken, but maybe this is why it feels special."`}</p></>
            }, {
                char: { name: "Oaksplit" },
                content: <><p>{`Mr Oaksplit looks at you like with adoration and sadly shakes his head.`}</p>
                    <p>{`"Unfortunately that would just not be enough ... and in anyway, what would you do with such a big space, especially with such a small you? You would definitely need some friends to keep you company."`}</p></>
            }, {
                char: { name: "Remember Me", token: 0 },
                content: <><p>{`"Indeed Sir ... I think this thingie on your desk says ... Oaksplit? It is not for me. It is for Emily. A boomstick guy told me that there might be different ways to remember a person, like making a statue or dedicating a place to it, like those empty spaces between houses, so I thought to myself 'this stony building sure gets a lot of visitors and is the most noticeable building in this clan, so if I buy it and dedicate it to Emily, then surely everyone will know about Emily! Maybe I even hang paintings of her around and build sculptures and make books so people could learn about her even when I do not have time to talk with them about Emily. So this big stony building would probably be the best way to spread the word about Emily."`}</p>
                    <p>{`"Would you mind me telling you about Emily, Sir Oaksplit? She would surely be happy if someone like you would be thinking about her!"`}</p></>
            }, {
                char: { name: "Oaksplit" },
                content: <><p>{`The big half-orc nods his head and looks through the window and then back at Remember Me, formulating an answer in his head. He opens his mouth, closes it, and then opens it again.`}</p>
                    <p>{`"I think that the lady - Emily - as you said would best be remembered if she was ... how do I put it ... remembered not only by us people, but by nature itself? I you could roam the island and make statues of her from natural materials that are even too heavy to bring into this town. Then anybody that would roam the island, would also come in contact with her - and not just people, also animals!"`}</p>
                    <p>{`He leans back into his chair, happy with his own answer. And then he says one thing that he probably shouldn't have.`}</p>
                    <p>{`"Oh, and who is this lucky gal Emily?"`}</p></>
            }, {
                char: { name: "Remember Me", token: 0 },
                content: <><p>{`Remember Me's eyes, pitch-black-eyeholes, brighten up so fast that for a moment it probably already forgot anything else.`}</p>
                    <p>{`"Ou, yes, yes, Emily Nightsong, she is my creator who sleeps on the mainland and ..."`}</p>
                    <p>{`Little feygol starts narrating probably every event in Emily's life he can squeeze into his given time, from her blindness, unpresent mother, mean peers and clan servants to those few who helped her, her weak health, her will to create a feygol and become an adult, how others resented her for trying, being only a burden to them, many near-death experiences, will to never give up, how she run away from home to learn different ways to crate a feygol, her first creation, his first shell, how her druidic powers left her and how she finally managed to awake it, becoming an adult, her final words and how she is still resting, till she wakes again and his only and final mission to forever and ever make sure world remembers her.`}</p>
                    <p>{`"So I think that the Island already knows quite a lot about Emily. At least the last 30 years or so I was talking to trees and they seemed interested. Now I am trying to find new people to present her to them. Like people of this clan. If this stony building is not for sale, maybe a part of it? Or part of a clan? Maybe a street, maybe a building? Somewhere where I could tell people about Emily? I can also help them different ways. I can heal. I can provide food."`}</p>
                    <p>{`It produces 10 of its tiny screaming turnips, eating one, giving one to Oaksplit.`}</p>
                    <p>{`"And I can give them words of wisdom. I am not that smart, but Emily was. She created me. I am sure people can learn something from her elven years of life. And the jungle is so ... hungry. I almost immediately devours any trace of those who would dare to intrude. It is the was it is. Very alive. Very hungry."`}</p>
                    <p>{`It casually eats another one of its screaming tiny turnips.`}</p></>
            }, {
                char: { name: "Oaksplit" },
                content: <><p>{`The large half-orc scratches his head again and palms the turnip.`}</p>
                    <p>{`"Look little fella, I don't know if people in this city are ready to know who Emily is. They are mostly selfserving lot that is hungry for money, even to the point of hurting others. I would help you, but I think that would only push you into more trouble ..."`}</p>
                    <p>{`He stands up, walks to your chair and crouches to your eye level.`}</p>
                    <p>{`"If you wish you can stay here for a bit, but this building is not for someone as pure as you. And if you realy want to buy some land to make your ... em ... temple, then I can find you some nice corner, get you some wooden beams, but unfortunately that is all i can do."`}</p></>
            }, {
                char: { name: "Remember Me", token: 0 },
                content: <><p>{`Ok, great, thank you kind Sir!`}</p>
                    <p>{`Remember Me happily jumps off the chair and hugs one of big guy's legs.`}</p>
                    <p>{`"By the way sir, I know they are less valuable, but I also have more than 400 yellow pieces. Would that help?"`}</p></>
            }, {
                char: { name: "Oaksplit" },
                content: <><p>{`"Oh."`}</p>
                    <p>{`He says surprised.`}</p>
                    <p>{`"That could definitely get you a smaller warehouse by the Evergreen Gate. Just a small 6 by 6 meters space, but it's fairly safe with guards by the gate. Its one of my companies old places ... Do you want that? The front gates are a bit dented from a carriage incident, but otherwise its good. Not damp and with a decent sun protection."`}</p></>
            }, {
                char: { name: "Remember Me", token: 0 },
                content: <><p>{`Remember Me looks like it is contemplating something.`}</p>
                    <p>{`"Hm, sounds nice, but may I take a look at it before I commit?"`}</p>
                    <p>{`"I would also like to ask Mezolček what he thinks about it. He is smarter than me, so he would probably know the best. He is something like a family to me."`}</p></>
            }, {
                char: { name: "Oaksplit" },
                content: <><p>{`"Oh yes, ofcorse! It would be my pleasure to show it to you two, if you wish."`}</p>
                    <p>{`He beams up, smile on his face reveals two sharp tusks coming up from the lower jaw.`}</p></>
            }, {
                char: { name: "Remember Me", token: 0 },
                content: <><p>{`"Splendid! Shall we go?"`}</p>
                    <p>{`It offers its hand to the ork and starts leading the way, but then just before they exit remembers, climbs back up on the chair, takes its 47 brown pieces, places them into its pouch and hurries to the gate.`}</p>
                    <p>{`"So you will see, Mezolček is ugly but very charismatic fish ...`}</p>
                    <p>{`And they wander off.`}</p></>
            }]
        }, {
            title: "Warehouse",
            shortDesc: "Remember Me začne z gradnjo prvega svetišča / zavetišča.",
            tags: ["depression", "guilt"],
            chars: ["Remember Me", "Oaksplit", "Nobodies"],
            contents: [{
                char: { name: "Pripovedovalec" },
                content: <><p>{`The church of Emily has a... slow start. But it has a start nevertheless. You try talking to people about Emily, but most of them just shrug you away as they have more important things to do that talk to a 'fanatical' golem. But you find a way. One afternoon a group of kids approach your 'church', with curious looks and bad intentions. They never come close enough for you to interact with them, but there is something to their laughter that doesn't bode well.`}</p>
                    <p>{`This happens a few days in succession, untill you wake up one day to find the front gate of your 'church' defaced. Words written with white paint, saying 'Nobody cares about Emily!'`}</p></>
            }, {
                char: { name: "Rememebr Me", token: 0 },
                content: <><p>{`Remember Me borrows some of that white paint.`}</p>
                    <p>{`It uses Prestidigitation to clean it up a little bit, they weren't the best graffiti makers in town.`}</p>
                    <p>{`Under, Remember Me wrote "Remember Me cares about Emily" in even worse writing.`}</p>
                    <p>{`Then it uses Druidcraft to make everything look nicer and in proper contrast, where paint was, now there are little white flowers, surrounded with greenery.`}</p>
                    <p>{`Then Remember Me does the same on the other door, but on those it would wrote "Nobody's Hidden Respite".`}</p></>
            }, {
                char: { name: "Pripovedovalec" },
                content: <><p>{`As Remember Me is doing that, he notices a few sets of small eyes on his back. The kids are back to see the fruits of their mischief.`}</p></>
            }, {
                char: { name: "Remember Me", token: 0 },
                content: <><p>{`use Guidence, use Talk With Animals, use Enhance Ability - Owl's Wisdom`}</p>
                    <p>{`Hi, yea, I know, I did this, but that one right there is from someone else. Would you know who wrote it? He forgot about me, a simple mistake. Remember, never forget about yourself and what you believe in or care about. Sometimes we look around and see only others, so we overlook the one in center of it all, ourselves.`}</p></>
            }, {
                char: { name: "Nobodies" },
                content: <><p>{`They chuckle to the side and after a bit, the biggest of the kids, a boy about 12 of age, steps closer to you. He is a bit taller then you and stronger looking, but something in his eyes immediately piques your curiosity.`}</p>
                    <p>{`"We saw who did this. What are you gonna do to them, if you find them?"`}</p></>
            }, {
                char: { name: "Remember Me", token: 0 },
                content: <><p>{`"That is easy to answer, come in."`}</p>
                    <p>{`It gestures for them to come inside.`}</p></>
            }, {
                char: { name: "Nobodies" },
                content: <><p>{`"Nah, I am not going in, my mum told me its dangerous to go where wierdos want me to go. But I can tell you where the ones who did this stay."`}</p></>
            }, {
                char: { name: "Remember Me", token: 0 },
                content: <><p>{`Not really interested in Nobody, sorry.`}</p>
                    <p>{`They can visit me at any time thou if they wish to do so.`}</p></>
            }, {
                char: { name: "Nobodies", },
                content: <><p>{`The kid grows frustrated and walks of, shouting ...`}</p>
                    <p>{`"Fine, have it your way!"`}</p>
                    <p>{`... and the group of kids walk off with tempo.`}</p></>
            }, {
                char: { name: "Remember Me", token: 0 },
                content: <><p>{`"Bye! Do not forget to tell Nobody that it would be nice to meet them if they care about Emily! We also have soup and a kissing fish!"`}</p></>
            }, {
                char: { name: "Pripovedovalec" },
                content: <><p>{`They don't answer back and the night comes. What wakes up Remember Me is a loud bang on the door. As you move, all assailants are already gone, but the carnage left behind is immens - cracked facade, red paint covering most of the front  (including the ground), a small metal pipe lodged in the metal gate. On the side of the 'church' a writing with red says 'Nobodis will be back'.`}</p></>
            }, {
                char: { name: "Remember Me", token: 0 },
                content: <><p>{`(Hm, given that I am right in front of the Gate, it seems strange that Guards wouldn't be there?)`}</p></>
            }, {
                char: { name: "Pripovedovalec" },
                content: <><p>{`The Guards are not there ...`}</p></>
            }, {
                char: { name: "Remember Me", token: 0 },
                content: <><p>{`(Well, I guess that I will have to inform the ork about the danger to the city, this might be anyone (rogue), that time not just throwing paint ...)"`}</p>
                    <p>{`(Prestidigitation for the red paint, I use pipe as my new spatula.)`}</p></>
            }, {
                char: { name: "Pripovedovalec" },
                content: <><p>{`(Do you go to Oaksplit?)`}</p></>
            }, {
                char: { name: "Rememeber Me", token: 0 },
                content: <><p>{`(Sure, to warn him about lacking protections of the inner city.)`}</p></>
            }, {
                char: { name: "Oaksplit" },
                content: <><p>{`You get the audience almost immediately. The half orc is back behind his table, looking exhausted. He looks at you, smiles and then grunts as he streches his spine.`}</p>
                    <p>{`"Remember Me, if I remember correctly. How goes your, em, church?"`}</p>
                    <p>{`You can see behind his eyes, that he has already heard about your troubles.`}</p></>
            }, {
                char: { name: "Remember Me", token: 0 },
                content: <><p>{`"Well, I wanted to warn you about the lacking protection to the city. I came outside and there was no one at the gate, so I am guessing someone must have disposed of them and that someone is still inside of the city or someone could easily just walk into the city without any check. If that would be a person of power or an assassin, that would make it quite easier."`}</p>
                    <p>{`(Osebno mislim, da je to luknja, ki si si jo skopal, ker se nisi spomnil kam si mi warehouse postavil xD)`}</p></>
            }, {
                char: { name: "Oaksplit" },
                content: <><p>{`(Nop 🙂, it is intentional.)`}</p>
                    <p>{`"Ah ..."`}</p>
                    <p>{`Oaksplit makes an exhausted grunt and lays down his quilt.`}</p>
                    <p>{`"Look Remember Me, I have warned you about the ignorance of the people ... They are weary of you - an outsider. Especially with you trying to push yet another religion they have never heard of."`}</p>
                    <p>{`He shakes his head and sighs again.`}</p>
                    <p>{`"Do you have any idea who you have pissed off the most?"`}</p></>
            }, {
                char: { name: "Remember Me", token: 0 },
                content: <><p>{`(How much do you want me to kill those kids xD? I can track with magic anyone I know about, I can Pass Without Trace, I can Primal Savagery them.)`}</p>
                    <p>{`"No, not a clue."`}</p>
                    <p>{`(Next time he does it, he is dead.)`}</p>
                    <p>{`"I can try and look into it thou."`}</p></>
            }, {
                char: { name: "Oaksplit" },
                content: <><p>{`(Well that is completely up to you, but anything you do will have consequences, good or bad.)`}</p>
                    <p>{`"As much as I know about these things, you have fallen prey to children of Nueva Sorte - the children of late faction of Espina Rosa. Their fathers are excellent guards, but there is still some animosity left from 30 years ago. They are untrustworthy to anything new, what more to encroaching religions."`}</p>
                    <p>{`He taps his finger on the wooden table.`}</p>
                    <p>{`"I would advise you caution and reluctance to use force unless forced. These kids are also victims and are therefore in need of a liitle ..."`}</p>
                    <p>{`He smilingly gestures at you.`}</p>
                    <p>{`"... wisdom."`}</p></>
            }, {
                char: { name: "Remember Me", token: 0 },
                content: <><p>{`"Animosity?"`}</p></>
            }, {
                char: { name: "Oaksplit" },
                content: <><p>{`"Yes, animosity. 30 years ago we came to this island and challanged their rule, fought and won. Although we took them in when the dragons turned their city into dust, some anger is still felt through the suffering they have lived through. And what parents say, kids gobble up without waiting."`}</p></>
            }, {
                char: { name: "Remember Me", token: 0 },
                content: <><p>{`"It sounds to me like you know a lot about this issue. Even more, it sounds like you knew this might happen in advance."`}</p>
                    <p>{`"What if you pour some of this appreciation and understanding towards my `}<i>{`wisdom`}</i>{` and `}<i>{`understanding`}</i>{`."`}</p>
                    <p>{`"What if you help me help them if this is what you set me up for?"`}</p>
                    <p>{`"For the Emily 🙂"`}</p>
                    <p>{`Remember Me retracts savage thorns it didn't notice started growing on its arms.`}</p></>
            }, {
                char: { name: "Oaksplit" },
                content: <><p>{`"I knew something would happen if you tried your approach. I am even happy that the only trouble you have attracted are the kids. Dealing with them is not eazy, but it has been done before - with hands on approach. A late friend of mine has decided on learning of their young troubles and bonded with them through them." He sheds a single tear "Manuel truly knew his way about the people. Now that he is gone, I fear things will go back to... worse."`}</p></>
            }, {
                char: { name: "Remember Me", token: 0 },
                content: <><p>{`"I do not care about any of it, this is your wish, your problem you want me to deal with, not mine. You knew something would happen and never warned me before you took most of my money that I got by helping clan of People you represent. You do not get to be happy, you get to feel guilty."`}</p>
                    <p>{`"So, I will ask you again, maybe in terms in which you addressed me once before. How much is this unexpected mission you expect me to do worth it to you? If this is a wish of your dreaming friend, how much are you willing to do, to get your friend's wish fulfilled? How much are you willing to offer to my cause in order for me to be willing to help you with yours? Or ... if you understand I will be attacked again and more ... next time, I might fight back. This wouldn't sit well with your friend I believe? Instead of being enemies, we could help each other, do you not agree?"`}</p>
                    <p>{`Air in the room relaxes again for a bit ... did the room always feel so small and walls so ... cold?`}</p>
                    <p>{`"Or you could simply give my money back, maybe some extra so I do not make a fuss about it. Warehouse is in a way better shape than I got it. Your dreaming friend's wish will go unadressed, given that you will probably try to toss the responsibility for solving it on someone else, but it is the way you decided to handle dreaming man's memory. Some of us go into the world, making dreaming people's wishes a reality. And some of us ..."`}</p>
                    <p>{`There is a new emotion in those black black holes in Remember Me's face ... is it disgust? Hard to tell how a stony surface is feeling.`}</p>
                    <p>{`"... decide to toss their responsibility on someone else. I heard people use a word for me. Fanatic? I am not sure what it means, but from your words I believe it means someone who actually is prepared to do what he sets itself to do. Unlike some people ..."`}</p>
                    <p>{`Again, the look!`}</p>
                    <p>{`"... who would rather mock and shame them from doing what they were created to do ... while doing nothing themselves. A convenient fool perhaps? Look into the mirror. What do you see?"`}</p>
                    <p>{`"Because all is see are empty words. Whoever this Manuel person is ... I hope it doesn't get to see you as you are now."`}</p></>
            }, {
                char: { name: "Oaksplit" },
                content: <><p>{`Oaksplits face darkens as soon as you utter Manuels name. He stops pacing and turns to you, angry.`}</p>
                    <p>{`"I have told you before Remember Me, or do you not remember? Your quest, fanatical or not, is rooted in your belief being pushed onto others. Unless you do something monumental, the pople will ignore you, and since you are small and look defensless, people WILL and DO use you to relief their stress and frustration of the world upon!"`}</p>
                    <p>{`He crouches down and looks you in those deep black eyes, eyes reflecting his grief and anger.`}</p>
                    <p>{`"I am neither a hero nor a saviour! I am a lumberjack and a farmer! Never have I asked to be where I am now and if push came to shove, I would give it all up if it ment somebody else could do my job better! And now you think I set you up for failure and am trying to use you for my own gain!?"`}</p>
                    <p>{`He backs up looks through the window, watching the approaching storm. Turning back, his face is tired and sad.`}</p>
                    <p>{`"I am sorry that people dissapoint you. You have never met Manuel. He would not have dissapointed you. But I ... I have not set you up for failure, but I did not give you a fair warning. And I AM trying to use your wisdom and situation for my gain - no - city's and people's gain. I would do it myself if I even knew how, or had the time and means, but alas I do not."`}</p>
                    <p>{`He sits behind the desk and opens a drawer, puling out a sack of coins.`}</p>
                    <p>{`"You can have your money back, if you wish - it was never my intention of robbing you. I simply wished some of Emily's help with saving the drowning lives of this city ..."`}</p></>
            }, {
                char: { name: "Remember Me", token: 0 },
                content: <><p>{`"Do you truly believe that? Fine. Give it to me. I will take care for that Manuel you care so much about."`}</p>
                    <p>{`"Or again ... all you are, are even more empty words?"`}</p>
                    <p>{`"Go back carving chairs or whatever you are destined to do. Or what? Will you also tell me you became proficient in poker while in office?"`}</p>
                    <p>{`"I will show you how burning a memory into a face of the earth truly looks like."`}</p>
                    <p>{`(I never intended to became a council member, but if this is what it takes, oh well ...)`}</p></>
            }, {
                char: { name: "Oaksplit" },
                content: <><p>{`"If you cannot grasp that I am trying to help you, then you are not ready to become anything real. Not somebody that would replace me, nor somebody that could run a church of any kind. The money is here if you have given up on Emily, but I will not let you despair me."`}</p>
                    <p>{`(Ok, zdej stvar je taka, jest sm si mal sam zamislu kako bojo ljudje reagirali and this is where it led to ... nism mislu da bo Remember Me tako reagirov, tko da je to na men - če hočeš jt naprej s tem downtimeom, pol se lahko zmenva in greva naprej z roleplayom, lahko pa dobiš nazaj 500gp in 1DT za porabit kakor ga hočeš.)`}</p></>
            }, {
                char: { name: "Remember Me", token: 0 },
                content: <><p>{`"Empty words again I see, truly, you are a luberjack and a farmer, but not a leader or a believer."`}</p>
                    <p>{`"Keep the money, you will need it to bribe whoever else will do your job instead of you."`}</p>
                    <p>{`Before leaving, Remember Me grows a turnip and throws it on Oaksplit's desk.`}</p>
                    <p>{`"Goodbye, Sir."`}</p>
                    <p>{`It slams the door, leaving behind only the voice for his life screaming tiny turnip.`}</p>
                    <p>{`Next day, Warehouse is empty. Only thing left is scorched into the floor MANUEL WAS HERE.`}</p>
                    <p>{`(morda, vendar dejansko si igral na njegove šibke točke, nato pa zaporedoma uporabljal izgovore, ker nisi želel sprejeti izida kako bi se situacija logično razšla, ker si želel izsiliti določen razplet in upal da ne bom dejansko smiselno reagiral na okoliščine, vendar jaz sem bil pripravljen sprejeti ostale opcije, dobrohotni fanatik sem, kar me je sililo v stopnjevanje in vse situacije bi se potrudil uresničiti po najboljših močeh, vendar si znova in znova zavrnil izziv, ker je bilo "samo en DT" vrednosti. Če je RP, je RP, vsaj dokler ne zahtevaš novih metov, nisva več v realmu matematike, kar se dogovori je resnično, osebno sploh nisem pričakoval da bo vse skupaj RP, samo "you get this much or this one".)`}</p>
                    <p>{`(Svoj DT bom porabil, da grem na tisto misijo v podzemlju ... je še vedno na voljo?)`}</p></>
            }, {
                char: { name: "Pripovedovalec" },
                content: <><p>{`(Otroke sm hotru prikazat kot bullies that you could bring to your side if you talked to them. Oaksplita sm pa hotu prikazat kot good guy-a, ki je in it over his head, with most of dead Manuels work falling on to him. Ko si šel ti na ofenzivo je itak tud on šou, in pol je celo backov down cus he is sad and angry and tired. Tako da špilal sem ga kot pravo osebo, ki realno ne zna dobr komunicirat in se skriva za naučenimi besedami. Tko da ja, i guess nista bila dober fit. Bilo je pa več različnih razpletov katere sem predvidu. Tako da kar se pa tiče siljenja v eno smer, pa ja I am the DM and I am here to show you what can and cannot be done - stojim za tem, ker rabim svet obdržat v enem kosu za naslednjih 9 sessionov v katere je vpletenih nekje 20 ljudi. Upoštevam kreativne ideje in se mi tud zdi da s strani sveta tale razplet ni nekej uncommon.)`}</p>
                    <p>{`(Za DT pa misliš tisto v petek kar je blo razpisan? Tisto je sam še en mini session, tako da za to ne rabiš DT ponucat.)`}</p></>
            }, {
                char: { name: "Remember Me", token: 0 },
                content: <><p>{`(Z otroki sem se poskušal pogovarjati, zato sem jim tudi ponudil da grejo v stavbo, vendar so zavrnili, me je bilo da bi za njimi zavpil "chicken", to je bila priložnost za komunikacijo, vendar ko so me pustili samo s ponovnim vandalizmom in bolj jasnim sporočilom, so me vrgli v praktično edino situacijo, v kateri je zame bolj logičen pristop rampage, lahko govori kdo o Emily slabo dokler je resnično, to ohranja njen spomin, vendar ne prenašam da se kdo o njej namerno laže (tudi če so lepe laži) ali vede deluje proti njej, to je moj trigger, zato sem ponudil, da morda je nekaj narobe s to sceno, nočem napasti otroke, kaj počne ta "varna lokacija", tudi denar bi sprejel na koncu, če bi nato Oaksplit ne ponovno poskušal prevrniti stvari name in samo sklonil glavo, priznal da je deloval narobe in ponudil denar, ne bi bil srečen, vendar ne bi deloval proti mojemu temeljnemu prepričanju.)`}</p>
                    <p>{`(Če me Oaksplit želi ponovno najti, verjamem da bo o tem obstajajo poročila o mojih dejavnostih na otoku, to je njegova, to da mu pustim na mizi 500 Gp je statement, kako izgleda prepričanje ki ga on nima, če bi želel samo mojo pomoč, bi mi lahko stavbo podaril.)`}</p>
                    <p>{`(... jaz sem cca 10 AP manj od nekaterih igralcev, praktično igro AP za njimi sem, nimam nikakršne šanse tekmovati z njimi v moči (če je to sploh smiselno) in koliko bi ocenil da je to ... 5000 Gp?, RP je vse kar imam, tako da nisem pretirano razpoložen za "sorazmerje z ostalimi igralci", nisem v sorazmerju, zelo za večino sem in to mi je povsem ok ... ampak ok mi je ker mislim da point DnD ni v razmerju z ostalimi (dokler se razumemo), RP (zgodba) je bistven, če bi želel iztisniti več, bi izbral Moon Druida, ker so najmočnejši class, nisem, ker mi je zgodba pomembnejša, če bi želel maksimirati state, bi maksimiral Wisdom in ne imel lihih števil, nisem, ker zgodba. Počutim se obravnavanega kot da igram proti ostalim.)`}</p>
                    <p>{`(Mhm, tista reč jutri, sem se prijavil, mislim da je rekel v chatu, da se za to porabi 1 DT?) `}</p></>
            }, {
                char: { name: "Pripovedovalec" },
                content: <><p>{`(Session ju3 je namenjen samo kot inicijacija v militia, tako da ne porablja DT. Je pa mišljeno, da če spendaš svoj celoten downtime spodaj v cavernih, potem lahko do konca downtimea prislužiš 100gp)`}</p></>
            }, {
                char: { name: "Remember Me", token: 0 },
                content: <><p>{`(Timelapse - Po pogovoru z GM, ugotavljanju kaj je šlo narobe in treningu z Minamoto ...)`}</p></>
            }, {
                char: { name: "Oaksplit" },
                content: <><p>{`A small letter waits for you when you return from the Elemental Planes. The paper smells of freshly processed wood and the writing is small and cluttered.`}</p>
                    <p>{`'Dear Remember Me`}</p>
                    <p>{`I will be arriving to the Caverns in a weeks time. I wish to talk. No - we need to talk. You can designate a place where you will be most comfortable.`}</p>
                    <p>{`In hope of better talks`}</p>
                    <p>{`Mr Oaksplit'`}</p>
                    <p>{`Zraven pisma je priložena otroška risba z napisom 'We're sorri'`}</p></>
            }, {
                char: { name: "Remember Me", token: 0 },
                content: <><p>{`'Hi, Oaksplit.`}</p>
                    <p>{`I actually don't feel so well. In fact I feel quite a bit sick at the moment.`}</p>
                    <p>{`Maybe we schedule the thing you suggested at a later date, when I stop feeling like falling apart?`}</p>
                    <p>{`P.S.: Cute picture, I did not know you can also draw.`}</p>
                    <p>{`I hope we see each other again ... I think.`}</p>
                    <p>{`Remember Me'`}</p></>
            }, {
                char: { name: "Postal Worker" },
                content: <><p>{`It is morning when a postal office worker swings by Remember Me's place and knock on the wall.`}</p>
                    <p>{`"Shipment for a.... Mr. Me? Mr. Remember?"`}</p></>
            }, {
                char: { name: "Remember Me", token: 0 },
                content: <><p>{`Remember Me accepts the mail. It uses its less broken hand, not because broken one wouldn't work, it is more like it forgot it is there.`}</p></>
            }, {
                char: { name: "Postal Worker" },
                content: <><p>{`The mail is not just a letter - it is a large package in a wooden crate that the mailman slides off the cart in front of you abode.`}</p>
                    <p>{`"Sent to you from upside"`}</p>
                    <p>{`He says and wishes you good day.`}</p>
                    <p>{`The crate is large and heavy and as you open it it is full of rocks of different shapes, sizes and material. Sandstone, a geode, iron ore, a large salt crystal, a broken gravestone... all compleate with an assortment of finely cut woods.`}</p>
                    <p>{`In an envelope on the inner side of the crate is a letter addressed to Remember Me.`}</p>
                    <p>{`(Do you open it?)`}</p></>
            }, {
                char: { name: "Remember Me", token: 0 },
                content: <><p>{`Remember Me opens the envelope.`}</p></>
            }, {
                char: { name: "Oaksplit" },
                content: <><p>{`A very short letter lies inside. It says:`}</p>
                    <p>{`'Dear Remember Me`}</p>
                    <p>{`Heard you could need a little bit of pieces after the last adventure.`}</p>
                    <p>{`Oaksplit`}</p>
                    <p>{`PS: I will be in the Fisherman's Rest in a few days.'`}</p></>
            }, {
                char: { name: "Remember Me", token: 0 },
                content: <><p>{`Remember Me reads the letter, not knowing what to think. Gesture is probably in good faith, but its body mostly uses material infused with druid magic, so it carefully stashes the crate in its chambers and continues to train (kind of) till the day of the meeting.`}</p></>
            }, {
                char: { name: "Oaksplit" },
                content: <><p>{`A few days later, a new load of advanturers arrive via the shortway and with them comes the tall figure of Mr. Oaksplit. Immediately uppon arrival he seems to be swamped with talking with builders and assuring them of their positions. It takes him untill nighttime, after which he enquires about Remember Me's whereabouts. Tired, but headstrong, he approaches your abode and with a short and soft knock signals his presence.`}</p>
                    <p>{`"Remember Me, you in there? I ..."`}</p>
                    <p>{`He pauses.`}</p>
                    <p>{`"I understand if you don't want ta talk to me, but some people had said that you are a bit damaged. I just ..."`}</p>
                    <p>{`He pauses again and Remember Me can audibly hear him scratching his beard.`}</p>
                    <p>{`"I just wanna know that you are doing ok. Or at least not bad."`}</p></>
            }, {
                char: { name: "Remember Me", token: 0 },
                content: <><p>{`Remember Me opens the rusty doors of its cell it was designated as its sleeping quarters after no one wanted to stay near it due to its bestial displays of anger. It looks ... confused. Like someone just waking from a nap, but at the same time, not. Like its presence is hightened, for a moment, yet only a moment, and another moment, and another, constantly slipping, constantly returning, in short, confused. Its body bears a mark of events from a few days ago. Its head, split, yet grown back together with vegetation, its body, same, almost like something tried to force its way out from within, then broken pieces grew back together, healed, yet broken. But worst abuse seems to came to its right hand that looks even more shattered than it would be expected from an arm made out of small stones and minerals, now made almost entirely out of wood and greenery, holding said stones in place.`}</p>
                    <p>{`"Ou, hi. You are ... Sir Oaksplit, correct? You wanted something ... something about Manuel ... I ... I think he is not here ... not here ... you are looking for him, correct? He is not here. I do not know where he is. You ... you sent me a ... parts, sent me parts ... gravestone ... salt, wood ... I think, I think it is somewhere here, I remember, I, I think I placed it somewhere here."`}</p>
                    <p>{`It looks around, it is not hard to see it.`}</p>
                    <p>{`"Yes, I think it is there, I think it is still there ... are you here because you want it back? You look, tired ... You look tired. Do you want to sleep? Sleep ... are you tired? Do you want to sleep?"`}</p></>
            }, {
                char: { name: "Oaksplit" },
                content: <><p>{`"Oh ..."`}</p>
                    <p>{`Oaksplit looks down at Remember Me in a bit of a shock. He then softens his gaze, trying to hide his tiredness and crutches down, examining Remember Me's body.`}</p>
                    <p>{`"I am ok, Remember Me, and I am not here for the material. That is material left behind by builders."`}</p>
                    <p>{`He motions to the pile.`}</p>
                    <p>{`"I am ok, but you are not. You need help getting yourself back together. Let me help you."`}</p></>
            }, {
                char: { name: "Remember Me", token: 0 },
                content: <><p>{`"I ... I am not sure what are you talking about. I feel ok? You look more tired than I do."`}</p></>
            }, {
                char: { name: "Oaksplit" },
                content: <><p>{`"I am tired, but I am tired from working, and satisfied with it. Are you satisfied with your work here?"`}</p></>
            }, {
                char: { name: "Remember Me", token: 0 },
                content: <><p>{`"I, I think so. A soldier is training me. Strange soldier, keeps saying thing I do not understand. But he is kind, I think. I train. Breathe. He said breathing is important."`}</p></>
            }, {
                char: { name: "Oaksplit" },
                content: <><p>{`"Yes that is, but I don't think that applies to you here"`}</p>
                    <p>{`Oaksplit looks at Remember Me with a smile and sits on the floor.`}</p>
                    <p>{`"Breathing in human case means to concentrate on relaxation. You do not need to breathe the last time I checked, so that would not calm you. What do you do to calm you, Remember Me?"`}</p></>
            }, {
                char: { name: "Remember Me", token: 0 },
                content: <><p>{`"Ou, I can breathe, soldier taught me how to do it, here, let me show you."`}</p>
                    <p>{`Remember Me starts slowly sitting down and standing up, sitting down and standing up.`}</p>
                    <p>{`"See, I am breathing, just like you do, just not with my air sack."`}</p></>
            }, {
                char: { name: "Oaksplit" },
                content: <><p>{`"That is ... incredible. But does it relax you?"`}</p></>
            }, {
                char: { name: "Remember Me", token: 0 },
                content: <><p>{`... I am not sure. It did, but ... now I am not so sure. I did try to relax, but I stopped.`}</p></>
            }, {
                char: { name: "Oaksplit" },
                content: <><p>{`"Oh, you should definitely relax. I need to relax at least once a week - usually baths, strolling through the nice parts of jungle ... I need that to keep on functioning. To prevent me from ... crumbling under the pressure."`}</p>
                    <p>{`Oaksplit looks Remeber Me into his deep eyes.`}</p>
                    <p>{`"You need to relax too. You hold a much heavier burden on your little shoulders then any other here - you hold a life, life of Emily."`}</p></>
            }, {
                char: { name: "Remember Me", token: 0 },
                content: <><p>{`"... sorry, but who is Emily?"`}</p></>
            }, {
                char: { name: "Oaksplit" },
                content: <><p>{`Oaksplit twitches and looks confused for a second.`}</p>
                    <p>{`"Emily? But you ..."`}</p>
                    <p>{`He trails off and then gives Remeber Me a very sad look. He then smiles again.`}</p>
                    <p>{`"Do you have time? Because I have a story to tell you. About Emily."`}</p></>
            }, {
                char: { name: "Remember Me", token: 0 },
                content: <><p>{`Remember Me thinks for a bit. There is something almost scared about it. Like parts of its body are starting to panic. But it is as its voice does not share their concern.`}</p>
                    <p>{`"Sure, I think ... I think I have ... time. I am not training, and I am not resting, I do not rest, resting is bad, so I do have time.`}</p>
                    <p>{`"So you were saying something about a Emily person?"`}</p></>
            }, {
                char: { name: "Oaksplit" },
                content: <><p>{`Oaksplit unbuttons his shirt and starts telling the story of Emily, the story Remember Me has told him on their first meeting in his chambers. It is a happy story full of mistakes that Oaksplit tries to temember, but the details had slipped his mind a while ago. So he adds his own happier little details, some might be even coming from his own experiances.`}</p>
                    <p>{`It takes a while, but Oaksplit ends the story with their meeting and then silently stares at Remember Me.`}</p></>
            }, {
                char: { name: "Remember Me", token: 0 },
                content: <><p>{`Remember Me thinks to itself ... it all sounds familiar, but it is as if something is obstructing its thoughts, so nothing comes to mind. There are feelings, feelings, but they are far away, behind the wall, behind the fog. It recognizes them. They are the feeling that come when it is resting. Bad feelings. Dangerous feelings. Best to keep away feelings. And the worst of it all ... listening feelings. Observing feelings. Learning feelings.`}</p>
                    <p>{`"It all sounds familiar, but I do not remember any of that. I remember coming to this island. I remember ... before. Sort of. I remember trees. I was talking about something. Was it about Emily? I remember being happy. And angry. About something. I do not remember what was it all about. I remember coming down. Angry. I remember training. Angry. I can not remember the feeling, just that it was there. Then me and Sir Soldier were talking. He was telling me about a word. A special word. How it was bad. And how he would do it. Stop things. And while we were talking, something happened. I can not remember what, but I think it was bad."`}</p>
                    <p>{`It touches its scar all over the chest-rock, absentmindedly.`}</p>
                    <p>{`"Then Sir Soldier told me I should breathe more. And once I breathe enough, I should find him again. So I am still training, and I am still breathing. Till I can ask Sir Soldier again to train me.`}</p>
                    <p>{`"That Emily person does sound quite amazing ..."`}</p></>
            }, {
                char: { name: "Oaksplit" },
                content: <><p>{`"Well until then you should breathe, as the Soldier said, but you should also find a way to relax yourself - to no longer be angry. Anger turns people agains one another and builds resentment that can last ages."`}</p>
                    <p>{`He hands Remember Me a small bent metallic plate with 'Nobody cares about Emily' written on it with red paint and below it 'Remember Me cares about Emily'.`}</p>
                    <p>{`"This is for you. The warehouse needed new doors and the old ones had to be repainted. Saved this for you. If it helps you remember Emily."`}</p></>
            }, {
                char: { name: "Remember Me", token: 0 },
                content: <><p>{`Remember Me is a bit confused, but it takes the plate from Oaksplit.`}</p>
                    <p>{`"Ok, thanks."`}</p>
                    <p>{`"This is me, right? Remember Me."`}</p>
                    <p>{`"Nobody ... nobody is that pup, right? Those pups."`}</p>
                    <p>{`"I remember not being able to stop them, from something."`}</p>
                    <p>{`"But I am not angry. I think. I would probably know if I am angry, right?"`}</p>
                    <p>{`"I should probably go back, but I do not remember why ... and I have not finished my training. So maybe ..."`}</p>
                    <p>{`"It trails off ..."`}</p>
                    <p>{`"When I remember?"`}</p></>
            }, {
                char: { name: "Oaksplit" },
                content: <><p>{`"You take some time, breathe, relax and build yourself back up. And when you remember, I will be waiting up there for you. Is that ok?"`}</p></>
            }, {
                char: { name: "Remember Me", token: 0 },
                content: <><p>{`"Probably? You will be waiting, so do I ... do I tell you I am there when I get back?"`}</p></>
            }, {
                char: { name: "Oaksplit" },
                content: <><p>{`"Just send a message and I will come to you. Or you can come to me, whichever seems better."`}</p>
                    <p>{`Oaksplit stands up, dusts his pants and turns to leave.`}</p>
                    <p>{`"Oh."`}</p>
                    <p>{`He says, almost forgetting himself.`}</p>
                    <p>{`"If you need anything special to replace your cracked material, The Fisherman talked that he could pull some things out of the Lake for you. As a token of appreciation."`}</p></>
            }, {
                char: { name: "Remember Me", token: 0 },
                content: <><p>{`"Ou, I remember him. He was a kind guy. Maybe tell him I am grateful?"`}</p>
                    <p>{`Bye bye, kind Sir!`}</p></>
            }, {
                char: { name: "Oaksplit" },
                content: <><p>{`"Will do! Bye Remember Me and I hope you remember Emily!"`}</p>
                    <p>{`And the council member exits into the dark of night.`}</p>
                    <p>{`(I hope this helped 🙂)`}</p></>
            }]
        }, {
            title: "Reflections",
            shortDesc: "Remember Me returns for its training after confronting its worst fear, itself.",
            tags: ["depression", "guilt"],
            chars: ["Remember Me", "Minamoto", "Caraxes", "Repko"],
            contents: [{
                char: { name: "Minamoto", token: 2 },
                content: <><p>{`During the morning training after Remember Me rebuilds, Minamoto calls the little feygol.`}</p>
                    <p>{`"Remember me, leave the excersises for now. Come sit, we shall discuss."`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`Remember Me does so as instructed, Repko resting in its lap.`}</p></>
            }, {
                char: { name: "Minamoto", token: 2 },
                content: <><p>{`Minamoto slowly eases himself in a casual lotus position, moving with care. He invites the golem to sit beside him.`}</p>
                    <p>{`"Remember me, you seem to have resolved your problems from last time. I am glad. How do you feel?"`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`Remember Me thinks for a moment. How does it feel?`}</p>
                    <p>{`"Rested. Like if I was tired for a long time and I have taken a long nap."`}</p></>
            }, {
                char: { name: "Minamoto", token: 2 },
                content: <><p>{`Commander nods.`}</p>
                    <p>{`"Naruhodo, very good. Demo that is not what I meant."`}</p>
                    <p>{`He smiles.`}</p>
                    <p>{`"Do you feel anything different? Anything new? Do you feel the energy around you, inside of you?"`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`"Not sure about that, but I do feel lighter. My body feels easier to move than ever."`}</p>
                    <p>{`"Also, Repko is quite energetic, so I do get to feel quite a lot of energy around me."`}</p>
                    <p>{`Repko widely yawns with a cute little sound and turns around.`}</p>
                    <p>{`"Most of the time."`}</p>
                    <p>{`"Do you play poker?"`}</p></>
            }, {
                char: { name: "Minamoto", token: 2 },
                content: <><p>{`There is a moment of silence. And another. Then Minamoto erupts in laughter.`}</p>
                    <p>{`"Do I play poker? That is the game with cards corect?"`}</p>
                    <p>{`He shakes from laughter, unable to speak. After a shortwhile he composes himself.`}</p>
                    <p>{`"No, I do not play poker. Never tried it even actually."`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`"Oh, I just happened to notice you have a really good poker face, I believe you would do an amazing job at it. Now sorry to interrupt, something about energy, right 🙂?"`}</p></>
            }, {
                char: { name: "Minamoto", token: 2 },
                content: <><p>{`"Hmmm, poker face ..."`}</p>
                    <p>{`He thinks on it, but quickly continues.`}</p>
                    <p>{`"Hai, energy. When I woke you up last time I felt fluctuations in your ki, your life energy. Signs of circulation. It was what helped you back from the beyond. Since that happened, I think you might have better understanding of ki now. We can begin training your energy flow now."`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`"Ooooo, this is so exciting, I feel smarter already!"`}</p>
                    <p>{`"Yes yes Sir, my ki feels very good today."`}</p></>
            }, {
                char: { name: "Minamoto", token: 2 },
                content: <><p>{`"Hmmmm, totemo yoi, very good."`}</p>
                    <p>{`Minamoto brings out an incense holder and lights some jasmine incense.`}</p>
                    <p>{`"We shall begin with some breathing excersises. Just try breathing and relaxing. Feel it circle inside you. Rise up and down with your breaths."`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`Remember Me does as instructed.`}</p></>
            }, {
                char: { name: "Minamoto", token: 2 },
                content: <><p>{`"Feel the energies rising and falling. Let them build up and then release. Slowly, carefully."`}</p>
                    <p>{`Minamoto instructs, observing the feygol.`}</p>
                    <p>{`"Once it builds up, release it, to the outside. Feel the space around you, life force and energies in the air. Feel for changes, fluctuations, what is around you."`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`Remember Me tries to concentrate.`}</p>
                    <p>{`There is it. Stones, held together by magic, wood and clinging plants, hard inside with even harder stony protective outside.`}</p>
                    <p>{`There is Repko, in its lap, its familiar, family, sleeping.`}</p>
                    <p>{`But almost nothing else. No smells, tastes, almost no sounds, to touch, at least not in comparison to the magic ball of energy, its casting focus, sleeping in its lap.`}</p>
                    <p><i>{`Maybe I could ...`}</i></p>
                    <p>{`Remember Me concentrates on that magic ball of energy ... and slips into it.`}</p>
                    <p>{`Remember Me wakes up. He is way smaller now. And he is a plant. But that is not the interesting part. He sees the world as magic ball of energy given life sees it. As a magical landscape. There is no colors, no sounds, no tastes, just magic. Magic that vibrates the air, magic that gets excited due to certain tastes, magic that has a hard time invading into internal space of other magical spaces, so it is flowing around more freely than trough hard spaces of organic or inorganic bodies. Everything is magic. Even rocks and wood upon which it is standing. Especially somewhere deep inside, there are many strands of energy, concentrated in many metal threads, reinforcing the overall structure of Remember Me's body.`}</p></>
            }, {
                char: { name: "Minamoto", token: 2 },
                content: <><p>{`As the scent of incense flows, Minamoto's own breathing slows down as well.`}</p>
                    <p>{`"That's it. Ki is life and everything is ki. Remember that."`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`Remember Me would scratch its head, but given that his hands are at the moment attached to its head, he decides against it. Instead, he returns back to its body.`}</p>
                    <p>{`"I think I understand. Would you mind if I test it? In a sparring match that is."`}</p></>
            }, {
                char: { name: "Minamoto", token: 2 },
                content: <><p>{`"Of course, skills can only be learned with practice."`}</p>
                    <p>{`He frowns.`}</p>
                    <p>{`"Sadly, I am somewhat hurt at the moment, demo I will find you a good partner to train with."`}</p>
                    <p>{`He thinks for a second.`}</p>
                    <p>{`"Hmmm, somebody who can turn invisible would be best. Let me ask Morwyn if her little oni is available. Wait here for a moment."`}</p>
                    <p>{`He leaves towards his quarters.`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`Remember Me has nothing better to do than to train anyway, so it waits, training its ki a bit more.`}</p></>
            }, {
                char: { name: "Caraxes" },
                content: <><p>{`Caraxes is just in the vicinity of Bitterek's shop when he sees a tall figure approaching him.`}</p></>
            }, {
                char: { name: "Minamoto", token: 2 },
                content: <><p>{`"Little oni, do you have a minute?"`}</p>
                    <p>{`Minamoto calls out.`}</p>
                    <p>{`"I need your help."`}</p></>
            }, {
                char: { name: "Caraxes" },
                content: <><p>{`Caraxes, looks at Bitter, before flying over to Minamoto.`}</p>
                    <p>{`"Yesss? Misstrress iss notss herre ... but I amss ... I havess time."`}</p></>
            }, {
                char: { name: "Minamoto", token: 2 },
                content: <><p>{`"I need you to help me train somebody. You can turn invisible, hai? Come with me."`}</p></>
            }, {
                char: { name: "Caraxes" },
                content: <><p>{`"Train? I do nots knows how to do that ... Butss I can be unsseen, yess."`}</p>
                    <p>{`He lands on Minamoto's shoulder as he says that, digging his claws into his pauldrons.`}</p></>
            }, {
                char: { name: "Minamoto", token: 2 },
                content: <><p>{`"Mmmm, hai, very good."`}</p>
                    <p>{`They make their way back to the training grounds. Remember me can see Minamoto return with a grey imp upon his shoulder.`}</p>
                    <p>{`"Remember me, this is Caraxes. He will train with you this couple of weeks. Little oni, I want you to turn invisible and stalk around Remember me here. Do no attack him, just stalk him."`}</p>
                    <p>{`He then turns to the feygol.`}</p>
                    <p>{`"You on the other hand, must find him and touch him. Using the ki, your internal energy. This will be a hard excersise, demo I am sure you can manage."`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`"Ok. Nice to meet you, Sir Caraxes!"`}</p>
                    <p>{`"Repko, step to the side for a little bit, you have a very important role to fill. You, are a cheerleader."`}</p></>
            }, {
                char: { name: "Repko" },
                content: <><p>{`"Ui?"`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`"Yes yes, just make sure to put your everything into it!"`}</p></>
            }, {
                char: { name: "Repko" },
                content: <><p>{`"Uiiii!"`}</p>
                    <p>{`Repko steps aside and starts loudly observing.`}</p>
                    <p>{`"Ui ui uiiiiiii! Ui ui uiiiiiiiii! Ui ui uiiiiiiiii!"`}</p></>
            }, {
                char: { name: "Minamoto", token: 2 },
                content: <><p>{`"I will leave you to it, sadly after today, I won't be able to supervise you anymore. Demo, I will come back to check on your progress." Minamoto smiles: "Just remember, ki is life and everything is ki. Now start searching."`}</p></>
            }, {
                char: { name: "Caraxes" },
                content: <><p>{`Caraxes looks at the strange feygol. He had seen it roaming the streets before, but never paid it much mind.`}</p>
                    <p>{`"Hellos Rrremembrry. I wills hide now."`}</p>
                    <p>{`Caraxes waves at the feygol before snapping his clawed fingers and going invisible.`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`Remember Me focuses. The creature it is looking for is rather small in size and it will try to evade, so to grapple or punch it is probably out of question. It will need to employ its footwork, something it has quite a little experience with, given that most of its form till this point were short-legged.`}</p>
                    <p>{`Remember Me is looking for any signs of movement. Creature is invisible, but maybe there are footprints, movement of dust, a strange wind, something to let it know where the creature is hiding.`}</p></>
            }, {
                char: { name: "Caraxes" },
                content: <><p>{`(He can fly.)`}</p></>
            }, {
                char: { name: "Minamoto", token: 2 },
                content: <><p>{`From the side Minamoto instructs.`}</p>
                    <p>{`"Do not look, you will not find him like that. Feel, search with your ki, find his."`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`Remember Me thinks to itself.`}</p>
                    <p><i>{`But what if its invisibility makes its ki invisible? I have no idea what I am up against.`}</i></p>
                    <p>{`It tries to get a feel of its surrounding. Then it kicks at the suspicions part of a training field.`}</p></>
            }, {
                char: { name: "Caraxes" },
                content: <><p>{`Caraxes observes the feygol, looking at it from where he hovers around its head's height. He grins as he sees Remember me kick at the training field opposite him. He concentrates on his invisibility, trying to produce as little movement as possible.`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`Remember Me feels the slight movement of the air and realizes air around it might also be a suspect. It punches in the general direction of where it feel fiend might be, then it punches again somewhere else, then kicks in the opposite direction, not because it knows it is there, but to limit its options.`}</p></>
            }, {
                char: { name: "Minamoto", token: 2 },
                content: <><p>{`Minamoto sigh.`}</p>
                    <p>{`"Ie, Remember me stop. You will not get anywhere trying to force this. You are not seeking how many tries it takes you to hit Caraxes in luck. You are seeking a way to extend your perception. Calm down, wait for a moment, breathe. Feel."`}</p></>
            }, {
                char: { name: "Repko" },
                content: <><p>{`"UiiiiiiiiiiiI! Ui uiiiiiiiiiiiii!"`}</p></>
            }, {
                char: { name: "Remember Me" },
                content: <><p>{`Remember Me stops. It is not wrong, but it feels like something is missing. It is approaching the problem as a soldier. But the task is not to hurt the creature. Its task is to sense it.`}</p>
                    <p>{`"Sir Soldier. Do you see the creature? Do you know where it is?"`}</p></>
            }, {
                char: { name: "Carexes" },
                content: <><p>{`D20 🎲: 18, Total: 23`}</p></>
            }, {
                char: { name: "Minamoto", token: 2 },
                content: <><p>{`Minamoto looks around, closes his eyes and focuses, his breathing controlled, slowed down. He slowly moves around, still blindly, his movement precise and intent. A couple more seconds pass before his arm extends, pointing a finger at a point to the left and behind of Remember me's head.`}</p>
                    <p>{`"I believe little oni is hidding right there. Caraxes show yourself."`}</p></>
            }, {
                char: { name: "Caraxes" },
                content: <><p>{`Caraxes reveals himself before flying to Minamoto.`}</p>
                    <p>{`"Yourrre no fun. I wasss doing grreatss."`}</p>
                    <p>{`He nimbly flips himself in the air, again turned to Remember me. He waves at the feygol.`}</p>
                    <p>{`"You lookss too much with yourrr eyesss ... Brrainss ... Whateverrss ..."`}</p>
                    <p>{`He widely flaps with his wings, throwing his arms wide.`}</p>
                    <p>{`"Betterrr feel where I amss ... Not looksss."`}</p>
                    <p>{`He then again turns invisible as he clicks his claws together, moving just a few meters to the side and looking at Remember me.`}</p></>
            }, {
                char: { name: "Minamoto", token: 2 },
                content: <><p>{`"Mmmm, hai, little oni speaks well. You know what, try closing your eyes, maybe it will help. Instead of looking try feeling that way, yes."`}</p>
                    <p>{`Minamoto nods, instructing Remember me.`}</p>
                    <p>{`"Remember what we practiced. Breathing, channeling your ki, all that is very important. Try again."`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`As Caraxes turns invisible again, Remember Me gets confused, but closes its eyes and focuses. Nothing good can come from simply kicking and Soldier has years if not decades of experience in the ki he is mentioning, so it need something faster, something only it can do. Then it remembers ...`}</p>
                    <p><i>{`I have Emily.`}</i></p>
                    <p><i>{`What would Emily do? She was weak. And she was blind her entire life. But time and time again, she fought opponents better than her. And yes, she almost died most of those encounters, but she survived. How?`}</i></p>
                    <p>{`Thinking about Emily makes Remember Me happy. Her grace and clumsiness, her will to win, her ability to move when every step is uncertain. Remember Me's feet begins to move. Its body starts to move. It is starting to develop something new, something it didn't have before. A rhythm. Its posture changes, its body as if following one mysterious, continuous motions.`}</p></>
            }, {
                char: { name: "Repko" },
                content: <><p>{`Repko notices the change and takes out its pair of tiny maracas and starts shaking in the rhythm and chanting.`}</p>
                    <p>{`"Uiiiiiiiiiiiiiiiuiiiiiiiiiiiiiiiiuiiiiiiiiiiiiiiuiiiiiiiiiiiiiiuiiiiiiiiiiiiiuiiiiiiiiiiiii...!"`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`Like its body, world behind its closed eyes becomes full of sounds and motions. Sound and movement are everywhere, energy is everywhere, maybe this is the ki Soldier was talking about?`}</p></>
            }, {
                char: { name: "Caraxes" },
                content: <><p>{`Caraxes observes Remember me doing something akin to meditation. The feygol seems like it is focusing on its surroundings in some way. Time to movess a bit. Caraxes thinks and quietly flaps closer to Minamoto, making sure the commander doesn't notice him.`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`Something moves, but where? It can not see where the movement is coming from! But at least, it feels like it can react in a new way, not needing to start moving, Remember Me's movement simply follows the flow of the world, moving as if being a part of it.`}</p>
                    <p>{`It also notices something new. Its body is new and it is not used to it, but ... no other body was as Emily-like as this one. It was never able to do so before, but now ... it almost feels like it has hundreds of years of experience using it [Guidance].`}</p>
                    <p>{`Also, it can not disgrace Emily and her memory, it has to try its best, it has to perform beyond its limits, failing or succeeding, good is not good enough! [Bardic Inspiration]`}</p></>
            }, {
                char: { name: "Repko" },
                content: <><p>{`"Uiiiiiiiiiiiiiiuiiiiiiiiiiiiiiiuiiiiiiiiiiiiiiuiiiiiiiiiiiiuiiiiiiiiiii...!"`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`With that, one step, another step, kick, kick, [touch?]...`}</p></>
            }, {
                char: { name: "Caraxes" },
                content: <><p>{`Caraxes sees the feygol flailing around at first, reaching into multiple directions, until he stills and turns in his direction. Krax! Did he hear me. Caraxes stills, trying to quiet his wingbeats as he floats to the right, checking if Remember me will follow him.`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`Caraxes tries to evade, but more it moves, easier it is for Remember Me to find it, touching it for the first time ...`}</p></>
            }, {
                char: { name: "Repko" },
                content: <><p>{`"Uiiiiiiiiiiiii!"`}</p>
                    <p>{`Repko cheers as it can sense Remember Me's thought's trough their telepathic link.`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`... annoying Caraxes, that dodges Remember Me's next move, but it is almost like Remember Me was leading him into position for another touch, step back, spin kick, touch again, spin kick, touch ...`}</p>
                    <p>{`If anyone were to be able to see them, it would almost seem as if they are dancing, feygol and ever more annoyed and confused fiend, one leading, one being led, to the tune of two tiny maracas and chirping of a tiny excited turnip.`}</p></>
            }, {
                char: { name: "Minamoto", token: 2 },
                content: <><p>{`Minamoto nods, a satisfied smile on his face. Not wishing to disturb, he leaves quietly, letting Remember me get accustomed to his new movement.`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`Remember Me notices.`}</p>
                    <p>{`"Bye bye, Master Soldier!"`}</p></>
            }, {
                char: { name: "Caraxes" },
                content: <><p>{`Annoyed, Caraxes weaves through the air to avoid the feygol, evading his touch at any cost. It is obvious to him that Remember me finally got a hold of the sense Minamoto wished to unlock within him.`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`Remember Me dances for some time, then spins Caraxes around, stops him, making a polite bow as Caraxes's claws swing just over its head.`}</p>
                    <p>{`"I thank you for this lesson, but I noticed you movement was somewhat restrained, as if you are waiting for someone to command it. May I know the name of your master?"`}</p>
                    <p>{`"Or ..."`}</p>
                    <p>{`There is a voice in Caraxes's head as Remember Me seemingly as a dance movement points at him [Message].`}</p>
                    <p><i>{`You could tell me about it this way, if it is a secret.`}</i></p></>
            }, {
                char: { name: "Caraxes" },
                content: <><p>{`Caraxes drops his invisibility, wearing a frown on his face at the intrusion.`}</p>
                    <p>{`"I amss not rrrestrricted. I actss frreely. Butss, it iss no ssecrret that Morrwyndell Eldamarrr isss my Misstrress. We havess a contrract, herrr and I."`}</p>
                    <p>{`He flaps his wings, annoyed his invisibility did not work on the feygolem and is now being questioned.`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`"Misstress Morrwyndell Eldamarrr you say? This almost sounds like someone else I heard about not so long ago from Master Soldier. It was ... Morning ... Morrowind ... Morwyn? He said he would be prepared to kill for her. Strange coincidences, don't you agree?"`}</p></>
            }, {
                char: { name: "Caraxes" },
                content: <><p>{`Caraxes nods.`}</p>
                    <p>{`"That iss herr."`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`"Ou, in that case, send her my thanks if you will, for talking you away from her for my training 🙂"`}</p>
                    <p>{`"By the way, do you happen to feel the same? Would you also kill for your Mistress?"`}</p></>
            }, {
                char: { name: "Caraxes" },
                content: <><p>{`"I wills, you could alsso ssay hello yourrself. I am arround the place a lots."`}</p>
                    <p>{`Caraxes huffs and nods again.`}</p>
                    <p>{`"Of courrse. If sshe ssaid, I woulds kill."`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`"What if she doesn't tell you to do it? Would you still do it anyway?"`}</p></>
            }, {
                char: { name: "Caraxes" },
                content: <><p>{`"Yesss. It iss in my contrract. And I likess to do it."`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`"Interesting. Well, thank you for you time, here, before you go, have a goodberry, I was told they taste delicious and are quite filling."`}</p>
                    <p>{`Remember Me hands it a tiny turnip, even tinier than Repko, that starts screaming its lungs out the moment it sees the fiend.`}</p></>
            }, {
                char: { name: "Caraxes" },
                content: <><p>{`Caraxes takes the goodberry in the shape of a tiny turnip, sniffing it before gulping it down. He humms and starts purring before letting out a smal burp.`}</p>
                    <p>{`"That wass good. Thankss."`}</p>
                    <p>{`He looks around a bit before pulling a small stone out of a pocket. He breathes on the pebble and a small rune light up.`}</p>
                    <p>{`"Giftss."`}</p>
                    <p>{`He gives the small pebble, that is now radiating some warmth, to Remember me.`}</p>
                    <p>{`(disclaimer, the pebble is a flavour item)`}</p></>
            }, {
                char: { name: "Ramember Me", token: 2 },
                content: <><p>{`"Interesting ..."`}</p>
                    <p>{`Remember Me takes the stone [Identify].`}</p>
                    <p>{`"It does indeed warms me to know we are in good enough relations to exchange gifts. Tell you what, at the moment, I am still a bit busy, someone approached me not so long ago with a proposition I still have to fulfill now that I have finished my training, but maybe ..."`}</p>
                    <p>{`[Illusory Script] on some fine bark pieces stringed together.`}</p>
                    <p>{`"Give your Mistress this if you would."`}</p>
                    <p>{`In almost child's-like writing.`}</p>
                    <p>{`'Hi, Miss Morwyn,`}</p>
                    <p>{`I met one of your servants, Sir Caraxes, and he seems like a nice guy.`}</p>
                    <p>{`For that reason I thought, what if his Mistress, he and Master Soldier are extolling, might also be a nice person?`}</p>
                    <p>{`As mentioned, I do not have much of a spare time, but if you are nearby in a month or two,`}</p>
                    <p>{`maybe you might visit me in Nobody's Respite, just next to the northern gate.`}</p>
                    <p>{`We offer free food, beds, healing, kisses and consultations for those who need it most.`}</p>
                    <p>{`Maybe you might be even interested to hear about another wonderful person and her life, Emily.`}</p>
                    <p>{`With kind regards,`}</p>
                    <p>{`Remember Me'`}</p></>
            }, {
                char: { name: "Caraxes" },
                content: <><p>{`Caraxes takes the bark.`}</p>
                    <p>{`"I willss give thiss to herr. Sssee youss ssoon."`}</p>
                    <p>{`He carefully holds the bark close before waving and flying away, leaving the feygol at the training place.`}</p></>
            }, {
                char: { name: "Repko" },
                content: <><p>{`As he is flying away, Repko starts quietly shaking his maracas in rhythm of his wings.`}</p>
                    <p>{`Ča-čača-Ča, ča-čača-Ča, ča-čača-Ča, ča-čača-Ča...`}</p></>
            }, {
                char: { name: "Repko" },
                content: <><p>{`"Bye bye, Sir Caraxes!"`}</p>
                    <p>{`Remember Me waves its goodbye.`}</p></>
            }]
        }, {
            title: "Nightmares",
            shortDesc: "Remember Me potuje globoko vase, da bi našel vir razdora in se poskusil zaceliti.",
            tags: ["depression", "guilt"],
            chars: ["Remember Me", "Repko", "Penelopa", "Oaksplit", "Minamoto", "Mezolček", "Emily"],
            contents: [{
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`Remember Me starts applying the mud Fisherman gave it to its body. It is ... well, muddy and dirty and it does not heal anything his own powers couldn't heal anyway, but somehow, between elemental mud and its Druidcraft, it feels ... it feels like it is working. In a way. So it continues.`}</p>
                    <p>{`It was a long day. A lot happened. And it thinks it was also the first time it broke the law for its ... companions. Why did it do it? Wouldn't it be better to have friends in the clockwork city instead of quick money? It did not know. But it felt that way their work was rewarded. As a group, instead of only itself. And now ... it was tired.`}</p>
                    <p>{`What was evil? It knew it wasn't good. And it couldn't remember most of its life, so there was no real point of reference. Would it be better if it was evil? What was evil? Why would anyone choose to be evil? Was it evil because it broke the law? It did not know. Maybe it will learn, but not today, some other day.`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`t tries to rest. Again. It needs to rest. To get better. To stop falling apart. Just as Oaksplit said.`}</p>
                    <p>{`Light in its eyeholes starts to dim. Magic holding its body together relaxes. When it sees it.`}</p>
                    <p>{`There is a white, shiny fox. And it is looking at it. Unbothered.`}</p>
                    <p>{`Remember Me looks around. It is not anywhere it would recognize. And there is only it. It and the fox. That is looking at it. Expectingly.`}</p></>
            }, {
                char: { name: "Fox" },
                content: <><p>{`... ... ...`}</p>
                    <p>{`After some time of staring, it comes closer. And starts scratching at its clay bandages, tearing them away.`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"No, you should not do that. Those are helping me to heal. To ... to forget? But I do not remember anything without them, so how could that be true? I do not understand ... do you?"`}</p></>
            }, {
                char: { name: "Fox" },
                content: <><p>{`Fox keeps scratching at its clay bandages.`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"Well, you know like you would know what you are doing. Like that Soldier did ... did ... what was it doing ... I can not remember. Why I can not remember?"`}</p></>
            }, {
                char: { name: "Fox" },
                content: <><p>{`Fox manages to scratch most of the mud away, takes a few steps away, then jumps into Remember Me, trough the crack in its body, disappears.`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p><i>{`Well, this is strange ... I wonder where would it go?`}</i></p>
                    <p>{`It leans forward to take a look at the crack into which the fox disappeared, but falls flat on its nose.`}</p>
                    <p>{`Auch! That hurt.`}</p>
                    <p>{`It looks back and sees ... itself. Its eyes dark, it body, cold, only the unsealed crack in its body, shining.`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p><i>{`Well, this is strange. It is me, but it is also not me? And that crack, is this where did the fox go? Maybe ...`}</i></p>
                    <p>{`It comes closer, slowly, touches its cold body. Just some rocks and plants, jumbled together into something that resembles life, most of the time.`}</p></>
            }, {
                char: { name: "Remember Me - Alterego", token: 1 },
                content: <><p><i>{`IT STOPPED.`}</i></p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`There is a thought. It comes. It goes away. It ... shocks Remember Me. But not because of its meaning, it doesn't mind its stopped body. It is just so ... else. Like thought was its, but also not its thought. And it feels ... it feels like it came from the shiny crack.`}</p>
                    <p>{`It looks around. Darkness. And in front of it, its stopped body and the light.`}</p>
                    <p>{`At least I know where to go.`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`One step, second step. Last step and it will be able to touch it. It reaches forward with its hand and hears something under its foot crack. It looks. It is a bone. A bone that broke.`}</p>
                    <p>{`"This is not mine. I do not have bones. I wonder who's bone it is."`}</p>
                    <p>{`It does not mind the bone and leans closer. It touches the crack in its body. Warm and sharp. But not wide enough. It tries to lean into it, just as the fox did, but fox seems to be smaller than it is. It tries to widen the gap. Crack won't budge. It thinks and notices the clay. It is still there. So it tries to remove it. It tries its best, then tries to widen the gap again. This time, it succeeds. Barely. It is very hard to pull the rock apart, but it manages just enough, so it can at some point lean forward and falls into the crack.`}</p>
                    <p>{`It falls on its head.`}</p>
                    <p><i>{`Ou, that hurt!`}</i></p>
                    <p>{`Remember Me scratches its head, but notices there is no crack in it. In fact, it feels different than before.`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`It looks up. There is a dark crack in the middle of the ceiling. Ominous. It looks around. Shiny. White.`}</p>
                    <p>{`After some time it notices that in this shiny white space, it is a shiny white fox. Doing noting. Just ... looking at it. Its tail every now and then moving from one side to the other, not angry, not in expectation, just ... moving.`}</p>
                    <p>{`It does not look as if the fox is in a hurry, so Remember Me checks itself.`}</p>
                    <p><i>{`Huh, I am in my old body again.`}</i></p>
                    <p>{`Its body was again smaller and more round than before. And without cracks in its exterior. Curious.`}</p>
                    <p>{`It looks at the fox. The fox is where it was before.`}</p>
                    <p>{`"Hi, little fella. Who are you? Do you know where are we?"`}</p></>
            }, {
                char: { name: "Fox" },
                content: <><p>{`The fox doesn't reply. Instead it yawns, then goes to its right.`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`Remember Me has nothing better to do, so it decides to follow the shiny white fox.`}</p>
                    <p>{`After some time Remember Me notices something. It is ... a rectangle. Black rectangle in space. Just, there. Not wide. Somewhat large. And not made out of any material, more like ... the space is lacking there. The fox goes into it and disappears again.`}</p>
                    <p>{`Remember Me goes to the rectangle and looks what is on the other side of it, but there is no other side of it. At its back, there is no rectangle, just a normal space.`}</p>
                    <p>{`It tries to move its hand into it, but rectangle ... shrinks? ... it is wide as ever, but at the same time not wide enough to let its hand trough.`}</p>
                    <p><i>{`Huh.`}</i></p>
                    <p>{`"What to do, what to do ... what if ..."`}</p>
                    <p>{`It remembers that when it tried to look at rectangle's back, it started narrowing. So maybe if it tries to look at its front, it would ... but wasn't it already at its front?`}</p>
                    <p>{`Remember Me leans in, like trying to get the right angle, left and right, being careful to notice if anything happens. And indeed, rectangle starts widening and Remember Me carefully starts following the widening, not taking its eyes off the rectangle until it is wide enough to resemble the door.`}</p>
                    <p>{`This worked. I wonder if I would continue to do it, would it go even wider? Wide enough to cover the entire horizon?`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`It does feel like it wants to try this theory if its, but then it remembers the fox.`}</p>
                    <p><i>{`I need to hurry if I still want to catch it!`}</i></p>
                    <p>{`It goes trough the black rectangle and enters into a ... scary place. A place that feels broken. Somewhat red. And shadowy. And humming with a bad sound. It feels as if floor is lava, even it Remember Me can see it is only a barren dirty earth, no vegetation in sight. This place feels ... occupied. Like someone ... or something is here. Watching. And it doesn't feel it noticed Remember Me yet.`}</p>
                    <p>{`"I wonder where and I now."`}</p>
                    <p>{`It looks back and black rectangle is again narrow as a hairline, barely noticeable.`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"I need to find the fox anyway, so I might as well start looking around ... quietly."`}</p>
                    <p>{`It searches around for some time, but finds nothing. No fox, no enemy, just more of the space.`}</p>
                    <p><i>{`Strange. It feels like a really bad idea, but maybe whatever runs this place might know more?`}</i></p>
                    <p>{`Remember Me said that, but it didn't feel any inclination to actually do that. It was as its body was resisting the thought of going after the presence of this place. So it stood there, trying to break out of it, till it finally remembered it can not stay here. It needs to move. And it doesn't want to move back, so the only place to go was ...`}</p>
                    <p>{`It started looking around. It wasn't that hard. Not long after it came across thorny branches that every now and then as roots protruded the earth. It felt right in the bad way. As if following them will take it to the source. So it did. Followed.`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`At first, it was just one, then two, until thorny roots started forming bushes, acidic substance dripping from them. Corrupting the earth around them. It became ever harder not to step on them, until it became straight out impossible to continue without taking some damage.`}</p>
                    <p><i>{`Well, here goes nothing.`}</i></p>
                    <p>{`It stepped on the chaotic array of thorny roots and branches.`}</p>
                    <p>{`It HURT. And the humming place froze. Only for a moment. Something noticed it. Humming started to intensify. Thorny roots came to life, now starting to coil as snakes, many many snakes, plowing the earth with their thorns.`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`They didn't seem aggressive, but humming did start to intensify, so Remember Me felt as if it has to hurry ... and moved forward.`}</p>
                    <p>{`As it moved forward, it started noticing other features of this place. On the ground, there were ... things. It almost started to feel like moving atop of a dump, with broken pieces of wrong proportions, some smaller than they should be, some way bigger. pieces of paper, broken pictures, doors with indiscernible words painted in red, wooden beams, bodies of distorted people, and in the middle of it all, a mask, red mask, face distorted in anger, floating above everything else, big but not huge, imposing.`}</p>
                    <p>{`It was looking at Remember Me, but it was almost as if it had a hard time seeing it, it felt like it is looking in its direction, but something is blocking its view of Remember Me, making it less threatening than it would be otherwise.`}</p>
                    <p>{`Remember Me started making its way to it, slowly, yet as fast as it could without hurting itself too much on the thorns that kept scraping parts of its body away from it.`}</p>
                    <p>{`So it managed to came close. Close enough to see, there were no thorns under the mask. Only traces of red fur. As if giant creature made its nest here, in the past, but it felt empty, abandoned, at least for now. And the mask looked almost ... sad. As if it is missing something, or someone.`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`Remember Me tries to touch the red mask, soothe it, but on touch, Mask becomes larger, larger, larger, but also higher, higher, higher, moving away from it.`}</p>
                    <p>{`Place of thorns starts to boil in movement, moving towards it, thorns scraping at its body, but worse of it all, there are tiny thorny roots, starting to grow on its finger where it touched the mask, digging deep into its body, then coiling back out, progressing further up its arm.`}</p>
                    <p>{`"No, wait! Don't run away! I am trying to help you!"`}</p>
                    <p>{`Mask doesn't listen, instead it stops, somewhat above, floating, crying, ugly, menacingly, thorns continuing to cut feygol's body, like tiny chainsaws.`}</p>
                    <p>{`"For the love of...! Fine! If you are not coming down, I am coming to you!"`}</p>
                    <p>{`The only problem is ... how? Its left arm is slowly eroding into thorns and it can not fly. Or can it?`}</p>
                    <p><i>{`If those doors grew larger as I shifted the way I saw them, then maybe ...`}</i></p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`It turns its head sideways. Nothing changes, but at the same time, from its point of view, everything changes. It is almost like the entire world is being pressed against.`}</p>
                    <p><i>{`Well if this is the case ...`}</i></p>
                    <p>{`Remember Me makes a handstand. It is a bit hard as its hand is starting to lose its strength, due to all of the thorns that are plowing trough it, but is manages to do it for long enough, that something starts to break, then it break a bit more and suddenly, the above is bellow and bellow is now wast above, but luckily, just under it is the mask, a bit confused as Remember Me starts falling towards it.`}</p>
                    <p>{`It falls on the bottom of the mask, using its thorny arm to anchor itself, not to slip off into nothingness.`}</p>
                    <p>{`"Ok, I won't let you escape this time!"`}</p>
                    <p>{`It starts climbing down towards its giant gaping mouths. It is hard, but nothing compared to thorns up above or those still devastating its arm.`}</p>
                    <p>{`"There there, nothing to worry about."`}</p>
                    <p>{`It manages to climb down, but what to do next? There is mouth, a closed nose and two eyeholes, every one of them pitch black. It feels ... it feels as if something is coming from the hole in front of it. Some sort of a feeling. Eyes of the mask are still crying, now into the nothing bellow and it feels like this is not a time to inspect that, so it focus on the mouth, giving away among other things the feeling of wailing. This feels closer to where it needs to go.`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p><i>{`Here I go.`}</i></p>
                    <p>{`It reaches into the black, but the black rejects its arm, as a thin yet thick ... membrane ... or maybe a gel.`}</p>
                    <p><i>{`Too late to give up now.`}</i></p>
                    <p>{`It forces its way in, its body shell breaking in the process, slowly, stubbornly, consistently.`}</p>
                    <p>{`"Come on, give up already, you stupid me!"`}</p>
                    <p>{`It breaks and Remember Me stumbles forward, this time into dark. Everything around it is dark. It came somewhere, somewhere dark.`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`Remember Me reaches out, but its arms seem ... shorter. It remembers those arms, those were its old arms!`}</p>
                    <p><i>{`What about the rest of my body?`}</i></p>
                    <p>{`Chubby as always. Or chubby as before ... well, this is at least the form it is most familiar with. It spent many many years in it.`}</p>
                    <p>{`"What to do, what to do ..."`}</p>
                    <p>{`[Druidcraft]`}</p>
                    <p>{`There is a fireflash and ... it seems it is back in the jungle. Thick jungle, dense vegetation, wet everything.`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`Fire flashes again, not being able to burn for more than a moment, but that is enough. There is a path in the foliage it could swear was not there a moment ago.`}</p>
                    <p><i>{`It is not like I have a choice ...`}</i></p>
                    <p>{`It continues onward, carefree, as it was in those days. It brings memories back. Memories of happiness.`}</p>
                    <p>{`But why is everything so dark? It tries to talk with the trees, but they don't answer. Looks like they changed their language already. Too bad. It wanted to talk with someone, about something ... what was it again ... it was always talking about something ... about...`}</p>
                    <p>{`There is a flash in the distance above, the storm was approaching.`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`Hm, I do not want to be trapped outside in the middle of the storm. I should probably do something. But what?`}</p>
                    <p>{`[Druidcraft] flashes again and now there is another path that wasn't there before.`}</p>
                    <p><i>{`Might as well take a look.`}</i></p>
                    <p>{`It starts stumbling in that direction on its tiny legs. Not so long after it notices something, fire between the trees.`}</p>
                    <p>{`"Someone is here! They might be able to help me!"`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`It happily moves towards the fire and indeed, there is camp ... or at least what was left of it.`}</p>
                    <p>{`At first, it is just happy that it found somewhere to take shelter from the storm ... but then it starts to notice something.`}</p>
                    <p>{`"This place looks ... familiar."`}</p>
                    <p>{`Campfire next to the remains of the corner of the broken and twisted building, sleeping bags behind another broken wall, bookshelf at another ... there was one more thing ... one important thing. It searches around and there is a shrine. A small shrine that after a quick look around reveals it is dedicated to Manuel.`}</p>
                    <p>{`"This doesn't feel right. This does not feel right at all. Something is missing, something ..."`}</p>
                    <p>{`Water splashes few meters away. Remember Me goes there and finds ... a giant lake that surely wasn't there before. And inside of it something swims. Something small.`}</p>
                    <p>{`"... Mezolček?"`}</p></>
            }, {
                char: { name: "Mezolček" },
                content: <><p>{`Shape stops and an ugly face looks out of the water.`}</p>
                    <p>{`"Remember Me. You returned."`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"Hi! Indeed, I did return. Tell me, what is going on here? Why this place feels so wrong and deserted? Where is everybody?"`}</p></>
            }, {
                char: { name: "Mezolček" },
                content: <><p>{`"... don't you remember? You did this. You broke this place. But it seemed important to you, as if you are in a hurry, so I didn't stop you."`}</p>
                    <p>{`It swims around in a circle.`}</p>
                    <p>{`"And I got this entire lake! Neat, ah?!"`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`This does not make any sense. It does not remember being here. At all. It remembers this place, but not why it had to be abandoned.`}</p>
                    <p>{`"Would you mind if I put it back. As it was before? I need a shelter. The storm is coming."`}</p></>
            }, {
                char: { name: "Mezolček" },
                content: <><p>{`Kissing fish thinks to itself.`}</p>
                    <p>{`"Sure, bud. I like my lake, but swimming in such a big water alone sure makes you feel lonely. I would not mind returning things to normal ... if you can promise me a bigger lake?"`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`Remember Me smiles.`}</p>
                    <p>{`"Sure, I do not mind making you a bigger pond, once I figure out what happen to your pond in the first place 😁"`}</p>
                    <p>{`It starts grabbing pieces of the room and moving them around. It is not easy, but it feels important, so it continues. Grabs a corner, moves it over there, presses against the wall to make it move somewhere else or rotate it on spot ... it manages to move almost everything, even manages to enclose the lake stretching over the horizon with its hands and once enclosed, move the piece back into the emerging room.`}</p>
                    <p>{`The only piece that won't move is the shrine dedicated to Manuel so in turn it has to use it as the center of the broken room. As pieces fall into place, walls start to connect, windows emerge, fire is lit, doors are repaired ... but the roof is still missing.`}</p>
                    <p>{`"Well, this is embarrassing. I kind of though we can put it back together, but what good does the room make against the storm if the roof is still missing?"`}</p></>
            }, {
                char: { name: "Mezolček" },
                content: <><p>{`"The altar. Fix the altar! The altar is the key."`}</p>
                    <p>{`Mezolček swims somewhat nervously in its pond in the back-corner of the room.`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`Remember Me thinks to itself. Yes, something is wrong with the altar. But what? It can not remember. What is wrong? Why it can't remember? What is he supposed to do.`}</p>
                    <p>{`The anxiety starts to gather inside of it.`}</p></>
            }, {
                char: { name: "Mezolček" },
                content: <><p>{`"No, don't do that, they will be able to hear you!"`}</p>
                    <p>{`There is another rumble of the storm.`}</p>
                    <p>{`"... oh no, it is too late, they know you are here. Run kid, run!"`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`Run? Run but where. This is the only place it found here. The only place to go to. And fish is saying to abandon it? What for? It did nothing wrong and it still needs to remember.`}</p>
                    <p>{`"Mezolček. Do you know this Manuel guy? Who was he?"`}</p></>
            }, {
                char: { name: "Mezolček" },
                content: <><p>{`"Manuel? Yea, sure, I heard of him before, great guy, or so I was told, did a lot of the things for the city outside, but died not so long before and some people still want to remember him."`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p><i>{`City? Died?`}</i></p>
                    <p>{`"I am not sure what are you talking about. What does it mean to die? And what city? There is only a jungle outside of this walls."`}</p></>
            }, {
                char: { name: "Mezolček" },
                content: <><p>{`Mezolček looks at Remember Me skeptically.`}</p>
                    <p>{`"Amm, are you sure? Because I am quite sure we are in the middle of the city? Or something like that."`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`Remember Me looks outside and indeed, outside are rows of poorly constructed houses, but no trees.`}</p>
                    <p>{`"Trees are gone!"`}</p></>
            }, {
                char: { name: "Mezolček" },
                content: <><p>{`"Of curse they are gone, what did I tell you. We are in the middle of the city and we are under siege!"`}</p>
                    <p>{`The storm was now above them, grumbling, sniffing.`}</p></>
            }, {
                char: { name: "---" },
                content: <><p>{`[Knock, knock, knock]`}</p>
                    <p>{`Someone was knocking on the door.`}</p></>
            }, {
                char: { name: "Mezolček" },
                content: <><p>{`"... I wouldn't open those doors if I were you, kid. Nothing good can come of it."`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`Remember Me would also want to shield inside, but what choice does it have?`}</p>
                    <p>{`It moves closer to the doors, carefully.`}</p></>
            }, {
                char: { name: "---" },
                content: <><p>{`[Knock, knock, knock, knock, knock]`}</p>
                    <p>{`Knocking grows louder.`}</p></>
            }, {
                char: { name: "Mezolček" },
                content: <><p>{`"Don't do it kid."`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`Remember Me is now right behind the doors. It listens. Knocking stops, as if it know it is there.`}</p>
                    <p>{`"Who is it? Who is knocking on my doors? Sorry, I would offer you a bed, meal and a healing, but it seems we are missing a roof for tonight. Maybe come back some other time."`}</p></>
            }, {
                char: { name: "Nobody" },
                content: <><p>{`It is quiet, then quiet a bit longer. Finally, there is a deep voice, as if coming from a tall adult ork.`}</p>
                    <p>{`"I am nobody. I came for her. I came for what remains of her."`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`Remember Me thinks to itself. What is this person talking about?`}</p>
                    <p>{`"Who are you looking for? I don't know what are you talking about? There is no one here except me and Mezinček! This is the shrine of Manuel, are you looking for him?"`}</p></>
            }, {
                char: { name: "Nobody" },
                content: <><p>{`The voice on the other side is quiet for a moment again.`}</p>
                    <p>{`"Look into your pocket. I came back for that. Give it to me and I will let you leave in peace."`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`Pocket is a bit of a strange word for what could be described as a gear it was adventuring in, but it knew what the orkish person meant.`}</p>
                    <p>{`It searched its 'pockets' and indeed there was something inside of them. A plate, like it was missing from the door.`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`[NOBODY CARES ABOUT EMILY]`}</p>
                    <p>{`[REMEMBER ME CARES ABOUT EMILY]`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"Sir, would you be so kind and tell me what is the name of this place?"`}</p></>
            }, {
                char: { name: "Nobody" },
                content: <><p>{`Nobody answers.`}</p>
                    <p>{`"Nobody's Hidden Respite."`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`Words come from Remember Me, but they do not feel like its.`}</p>
                    <p>{`"The place is yours, you may enter."`}</p></>
            }, {
                char: { name: "Nobody" },
                content: <><p>{`Doors open with a bang and there is a storm raging outside, wind and rain, as if they want to tear the city apart, but not here, the sky was dark, black, cloudy and clear above the Shrine, despite whatever was going on outside. Remember Me notices a piece of doors is missing. Probably the part that it has in its hands right now.`}</p>
                    <p>{`Stranger comes closer. It reaches out with its hand.`}</p>
                    <p>{`"That is right. Now give it to me. Do not make me kill for it."`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"Sir Nobody, what does the word 'kill' means?"`}</p></>
            }, {
                char: { name: "Nobody" },
                content: <><p>{`Stranger freezes.`}</p>
                    <p>{`"Oh no."`}</p></>
            }, {
                char: { name: "STORM" },
                content: <><p>{`The storm shatters the wall of the tiny shrine, taking the stranger away with it. It is starting to pour and howl all around trough the broken wall, but not above the altar.`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`Remember Me steps back in shock, but steadies itself.`}</p>
                    <p>{`"Mr. Storm. Mr. Storm? If I may? This word here, person, on this tablet, Emily. I have a feeling you would know about it. Who is it. I demand to know."`}</p></>
            }, {
                char: { name: "STORM" },
                content: <><p>{`"GO BACK TO SLEEP LITTLE ONE, THERE IS NOTHING TO FIND HERE, WHAT YOU ARE LOOKING FOR IS NO LONGER ALIVE, THIS IS FOR YOUR OWN GOOD, GO, BEFORE I ERASE THE VERY CONCEPT OF YOU AND START AGAIN."`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"No, I refuse. I demand to know what to kill means and what the word Emily means."`}</p></>
            }, {
                char: { name: "Mezolček" },
                content: <><p>{`"Kid, kid, I think, I think this might be a bit above us all, just let it slide, ok?"`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`Remember Me is trying to stare the storm down.`}</p></>
            }, {
                char: { name: "STORM" },
                content: <><p>{`"BE IT AS IT MAY, IT WAS DONE BEFORE, IT WILL BE DONE AGAIN."`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`Remember Me feels that the storm is turning its attention towards the altar and it feels it needs to hurry.`}</p>
                    <p>{`"Ou no, you won't!"`}</p>
                    <p>{`It stumbles towards the altar as fast as it can, erases the word Manuel and ... and it breaks its finger off of its body, scratching word Emily into its surface. It does not have blood, but blood like substance does come from where its finger broke and starts feeling the grooves.`}</p></>
            }, {
                char: { name: "STORM" },
                content: <><p>{`"I - SAID - STOP!"`}</p>
                    <p>{`Lightning flashes from the sky towards the altar, but Remember Me raises its hand to stop it. It freezes just above it and the altar.`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"No, I say enough, I want to know and I want to know, now."`}</p>
                    <p>{`Blood-like substance stops filling the groves and the word Emily shines bloody on the blood sprayed white stone.`}</p></>
            }, {
                char: { name: "STORM" },
                content: <><p>{`"... I WARNED YOU."`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`Remember Me's palm explodes, its arm explodes, its other arm explodes, its legs explode its body explodes and something way smaller falls on the table. Its even older body. Word of Emily now feels bigger than it is ... or it might be better to say, words ARE bigger than it is.`}</p>
                    <p>{`It feels like it is shrinking further, so that the words starts to feel as a convoluted spring, river, lake, sea, ocean.`}</p></>
            }, {
                char: { name: "STORM" },
                content: <><p>{`"... GO BACK, YOU ARE TOO SMALL TO CONTINUE, LOOK, THERE IS ALMOST NOTHING LEFT OF YOU."`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`Remember Me doesn't answer and jumps in into the bloody substance.`}</p></>
            }, {
                char: { name: "STORM" },
                content: <><p>{`"NOOO!!!"`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`It is over as red overtakes it. There is a loud bang as the lightning continues to crash into the surface of the ocean, closing the exit out of it.`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`It keeps falling for some time before it remembers ... I should probably hit the bottom eventually. Where am I?`}</p>
                    <p>{`It looks around, but there is nothing but the ocean of red. For a blood-like substance, it is strangely transparent. Not exactly clear, but it is still like a dark ocean with a red filter over everything. No bottom. No surface, just ... vastness of red.`}</p>
                    <p><i>{`I feel ... weaker ... like ... like I haven't felt for a long long time. But maybe I can still ...`}</i></p>
                    <p>{`It turns into a fish, but only in form, as it starts falling down, because it forgot how to swim. But this is not bad, because it wants to reach the bottom of wherever this is.`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`After some time, oceanic floor ... or something similar to it comes into a view. More than floor, it resembles the remains of a battle long lost. There are carcasses everywhere, bones littering the land. Ruins of both trees, landscapes and buildings and cities, scattered all across the land.`}</p>
                    <p>{`"What happened here?"`}</p>
                    <p>{`It finally reaches the bottom and turns back into a tiny stone-man. But it does not stay quiet for long as something moves just under it.`}</p>
                    <p>{`"I wonder what it is!"`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`It moves away and after a bit there is a leaf. And another, the third, before a small turnip jumps out of the hole.`}</p>
                    <p>{`"Repko!"`}</p></>
            }, {
                char: { name: "Repko" },
                content: <><p>{`"U uuuuuuuuuuuuiiiiiiiiiiiiiiiiiii!"`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`It was its long-lost friend and companion, that was adventuring with him before it left the continent and even some times after.`}</p>
                    <p>{`"It is good to see you my friend! But tell me, what are you doing here?"`}</p></>
            }, {
                char: { name: "Repko" },
                content: <><p>{`"U u u uuuuuuuu uuuuuuuuuu!"`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"So, you are saying that someone me-alike came and destroyed everything? And you hid as I told you too at the first sight of fighting and only returned once everything was destroyed already? But who would have done that? There is only one me. Mezinček already told me something similar, but you can tell the difference, right, between me and whatever did this?"`}</p></>
            }, {
                char: { name: "Repko" },
                content: <><p>{`"Ui?"`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"Ou, yes, it is a kissing fish, it taught me how to talk to people, we met in a wet cave where it jump on me and french-kissed me ... you know what, it is a long story, not important."`}</p></>
            }, {
                char: { name: "Repko" },
                content: <><p>{`"Ui ui."`}</p>
                    <p>{`"Uiii uuiiii uuuuiiiiiiuuuuu. I i i."`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"Ok, so you know that other thing and you can tell the difference. Do you know where to find them? Maybe they will have some answers."`}</p></>
            }, {
                char: { name: "Repko" },
                content: <><p>{`"Uiiiiiiiiii..."`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"Yes yes, but do you have a better idea how to get to the bottom of this? Or how to rebuild this place? It feels abandoned."`}</p></>
            }, {
                char: { name: "Repko" },
                content: <><p>{`"U. Ui."`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"Great! By the way, while we are going there, would you mind telling me about this place. I seem to forgot about it."`}</p></>
            }, {
                char: { name: "Repko" },
                content: <><p>{`"Ui!"`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`They travel for some time while Repko is telling all it knows to Remember Me ... which is quite a lot, given that Remember Me seemed to talk quite a lot to it while they were still together.`}</p>
                    <p>{`"Say, Repko. Do you think things can go back? To the way they were before?"`}</p></>
            }, {
                char: { name: "Repko" },
                content: <><p>{`"Ui? Ui i i ui."`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"Yea, I thought so ... I just want to see you again. Up there somewhere, in my body, you are still there, but silent and dry ... it has been that way for years now. I ... I miss you. I really miss your company."`}</p></>
            }, {
                char: { name: "Repko" },
                content: <><p>{`"Ui uiiiiii ui."`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"Yea, tell me about it ... so, say ... I became more capable ... I think. Do you ... want to come back? I have new friends now. If I ... ask them for you to return ... would you be willing to return?"`}</p></>
            }, {
                char: { name: "Repko" },
                content: <><p>{`"Ui ... u u u ... iu?"`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"Of course I want you to return, what are you even saying!? Why do you think I still have you with me, wherever I go, you go, we are a family, remember?"`}</p></>
            }, {
                char: { name: "Repko" },
                content: <><p>{`"Ui! Ui ui uiii!"`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"So ... is this a yes?"`}</p></>
            }, {
                char: { name: "Repko" },
                content: <><p>{`"Ui!"`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"This is wonderful! I am so glad to be able to count on you again!"`}</p>
                    <p>{`Almost tiny feygol offers tiny creature its tiny stony hand.`}</p>
                    <p>{`"Just like in old times?"`}</p></>
            }, {
                char: { name: "Repko" },
                content: <><p>{`"Ui ui!"`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`And so they went, hand in hand, as they did in the past, before Remember Me became so big it made more sense to carry slow and tiny turnip on its big big stony head.`}</p>
                    <p>{`"Ou, we have a new member of a family now, his name is Mezolček and he is very ugly, but smart and charming, also, he is a fish, you will probably like him, just make sure to let him know kissing is off the table if you are not into it, he is from a distant place called France, it told me everyone is kissy there, I learned a lot of new things form him."`}</p></>
            }, {
                char: { name: "Repko" },
                content: <><p>{`"Ui!"`}</p>
                    <p>{`Repko nods with dead-serious expression.`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`As they go, they come across many distorted bodies and other beyond recognition distorted memories, yet one of them ...`}</p>
                    <p>{`"I remember this one! This is ... what was her name again ... Pencil, Pengilum, Panel ... Panela?"`}</p></>
            }, {
                char: { name: "Repko" },
                content: <><p>{`"Uiu."`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"Ou, right, Penelopa!"`}</p>
                    <p>{`"Penelopa, are you there? Penelopa?"`}</p>
                    <p>{`"Hm, maybe if I ..."`}</p>
                    <p>{`Remember Me puts its hands on disfigured remains of an elven woman and ... tries to remember who she was.`}</p></>
            }, {
                char: { name: "Penelopa" },
                content: <><p>{`Corpse starts to morph its limbs around until figure of a beautiful elf in somewhat important important-looking robes starts to take shape.`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"Ou, right, the last time I remember you, you were already a clan leader ..."`}</p></>
            }, {
                char: { name: "Penelopa" },
                content: <><p>{`Woman in front of Remember Me immediately starts grooming herself.`}</p>
                    <p>{`"For the love of, what is this place? Where am I? Where is my clan? Where is everybody. You! Strange stony little ... creature! Are you a feygol? Who would have made such a puny feygol? You look like you might fall apart at any moment. Are you a toy? That would be an awful lot of magic wasted on something so ... unsightful ... probably a failure, aren't you? Are you here to mock me? To mock us? Who created you!? I demand answers!"`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"This is Penelopa, all right."`}</p>
                    <p>{`Remember Me thinks for a moment ... they were still on the bottom of an ocean, so it probably can't talk, but everyone he met till now had no problem with that, so maybe it also won't cause it any problems?`}</p>
                    <p>{`"Hi, I do not know who created me, but I am trying to find out. I found you in this pile of trash and recognised you, so I thought you might be able to help us. You seem to have made quite a strong impression on me before I forgot who you are."`}</p></>
            }, {
                char: { name: "Penelopa" },
                content: <><p>{`"... yes, you do look incapable of higher thoughts, whoever made you probably didn't know a first thing about creating a feygol, or rather ..."`}</p>
                    <p>{`She leans closer, almost feeling like she wants to smell it.`}</p>
                    <p>{`"Is this ... metal. Heresy! And, do I sense ... elemental magic?"`}</p>
                    <p>{`She conjures a staff out of nowhere and bonks Remember Me's head with it.`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"Ouch! Be careful scary lady!"`}</p></>
            }, {
                char: { name: "Penelopa" },
                content: <><p>{`"Not so scary as I will be if you do not shut up right this moment for talking like that with your superior!"`}</p>
                    <p>{`"Hm ... interesting, indeed, those are remnants of elemental magic ... but also ... something is clicking ... I heard about those ideas from gnomes, but that someone would ... and necromancy? For the love of the living, what in the name of Silvanus is going on here? Also, are those traces of city magic? Not unheard of, but I would never ... and something else, something ... I heard about it before ... it is the magic of sacrifice, they use it to fuel more powerful of magic, but to waste it on ... this!"`}</p>
                    <p>{`She points at Remember Me, who doesn't react in any way, it is just curiously staring at the screaming-mumbling lady.`}</p>
                    <p>{`"It ... it is like a zoo of magic, all bundled together ..."`}</p>
                    <p>{`She removes her staff and massages her brows for some time.`}</p>
                    <p>{`"Ok ... whoever made you needs to be brought before the circle and sentenced, then promptly executed. There is no way I can let such a thing exist ... you are somewhat ... intriguing, but at the same time, I have never seen such a heretic thing in my life. Take me to your creator or be dismantled where you stand!"`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`Remember Me thinks for a moment.`}</p>
                    <p>{`"Lady Penelope, as I said, I do not know who created me, but I am also trying to find out, I think, so maybe you might be willing to help me find ... anything useful really. I do not know what we might find, but maybe we can help each other for the time being?"`}</p></>
            }, {
                char: { name: "Penelopa" },
                content: <><p>{`"... yes, yes, that does seem like the most..."`}</p>
                    <p>{`She looks at the turnip that shows her its tiny tongue and hides behind not much larger Remember Me.`}</p>
                    <p>{`"... rational ... course of actions. Let me just..."`}</p>
                    <p>{`She again bonks Remember Me with her staff and starts to mumble to herself.`}</p>
                    <p>{`"Hm, I do not ... I do not feel the magic inflow, at least now the way I would expect there to be one. Well, it was worth a shot."`}</p>
                    <p>{`She retracts her staff again. Is this going to happen every time she wants to do something?`}</p>
                    <p>{`"So, where were you going?"`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`Remember Me shows still hiding Repko.`}</p>
                    <p>{`"Actually, Repko was leading me where he believes we might find whoever did ... you to this place. You were in quite a sorry state when I found you."`}</p></>
            }, {
                char: { name: "Penelopa" },
                content: <><p>{`She looks around, taking note of the corpses.`}</p>
                    <p>{`"Yes, yes, you do have my thanks, necromancy would explain how you did what you did, not exactly something I would be grateful for, but it is ... efficient."`}</p>
                    <p>{`Checks her body.`}</p>
                    <p>{`"Same body, same race, same ... gender, same everything ... huh, this is interesting."`}</p>
                    <p>{`"How did you do that?"`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"Do what?"`}</p></>
            }, {
                char: { name: "Penelopa" },
                content: <><p>{`"If I was not dead for more than a leaf-fall, then you did some higher necromancy. I can hardly believe that."`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"Actually, I think this place might be just representation of my inner self, so it was probably nothing special, even I don't know what I did."`}</p></>
            }, {
                char: { name: "Penelopa" },
                content: <><p>{`"Yea, right, sure, I forgot you are still dumb as a rock."`}</p>
                    <p>{`She pokes feygol with her staff.`}</p>
                    <p>{`"Well, what are you waiting for, I do not like this place, even if red does happen to be my color of choice, lead the way!"`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`Remember Me disregards poking, looks at Repko and they together move onward.`}</p>
                    <p>{`"Lady Penelope, while we are searching for answers, would you happen to know someone? It is probably connected to this place in some way, so any information you might have will help. The name is Emily."`}</p></>
            }, {
                char: { name: "Penelopa" },
                content: <><p>{`She thinks.`}</p>
                    <p>{`"I do know Emily, more than one thou. Do you have any other lead? Hair-color, surname, race maybe?"`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"Hm, not really, Repko?"`}</p></>
            }, {
                char: { name: "Repko" },
                content: <><p>{`"Ui uuuuuuuuiiiiiiiiiiiii ... iui."`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"Something about singing at night."`}</p></>
            }, {
                char: { name: "Penelopa" },
                content: <><p>{`"Hm, Nightsong? Well, she is someone to remember and forget all right. Sickly girl, blind girl, girl from my clan, untalented, gets way too many attention for what she deserves, if I were a clan leader, I would push for a policy that people like her are killed at their birth, that or to find a cure in first year of their life, I don't care, her mother was a hot-shot, so it was somewhat hard to say anything against her, but people like her just drain clan resources, good for nothing. I for instance can make my own feygol, did so already, it was sold for a nice price and I am still getting better at my craft. But her? Can't do feygol, can't even accept she is a servant now, at first I picked her to be my servant, to put her in her place, terrible idea, awful idea, that girl can't do shit, and she is blind, and keeps doing everything but what she is told, in her free time at least, hard to track or command when she think of herself better than she is and keeps making a feygol, dream girl, dream girl, or don't, it was quite awful to have her, you at the start only get one servant, needed to work my ass off to get another just to balance him off against her. I would replace her, but then again, she is named Nighsong, so that comes with a bit of a stink and people do not want her anyway, so getting rid of her is also annoying ... she was just bad, just bad I tell you. It is not that she was that BAD as a druid, you would think she would be somewhat helpful, I couldn't effort a total flop, even I care about my career as perfect as I am, but how much she drains just to get wherever she is ... hardly worth it."`}</p>
                    <p>{`Ran away thou, never heard of her again after that. Caused me some hard questions, but I could get a new servant, so at least she knew when to remove herself.`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"So, Emily Nightsong is her name ... ... ... Lady Penelope, would you happen to know where she is? Or if she might be the one who created me?"`}</p></>
            }, {
                char: { name: "Penelopa" },
                content: <><p>{`Penelope looks Remember Me and replies with a mix of a laugh and a snark.`}</p>
                    <p>{`"Hah, yea, suuuure, look little one, you might be somewhat unusual, but you are in principle still a feygol, I recognize my clan magic when I see one. Yes yes, other clans are able to make those of you, but I know how hard and valuable it happens to be to make one. That girl couldn't do it in her lifetime, I saw her trying, I know what I am talking about. No no no, you are probably just a failed experiment of one of the neighbors, maybe even a court, so they wouldn't be so dependent on us, a troubling thought, but still, you happen to be hard to make. Necromancy, easy, you, hard. First you need great materials, then there is a lot of work to prepare them, then you need to convince fey to take interest in those, which is just pain in the ass, those suckers are hard to work with, but even then it takes quite a lot of mana to continue driving you and you do need to give it, because if you don't, feygol will in time crumble or become independent, and both of those are bad, so of course you need a lot of mana to continue to command it or risk they stop listening to you, even worse, kill you. As you can see, it takes quite some effort to make one and to maintain one."`}</p>
                    <p>{`"Good side of all of this is that you hardly feel pain, no need to eat and strong as hell itself. Good construction workers, good soldiers. There is a reason why there is such a high price on your kind. So yea ... no. Let us say I am quite capable. How capable? I can Summon Elemental. To some extend as good as not so good feygol, more versatile, but doesn't last long. For you ... I would say you would need to be able to do at least Summon Fey, for obvious reasons. That girl, a-ah, Summon Beast, at most. She was even so proud on it! Give me a break."`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"... did you like Emily?"`}</p></>
            }, {
                char: { name: "Penelopa" },
                content: <><p>{`Penelope makes an expression of pure exasperation.`}</p>
                    <p>{`"What makes you think I did!? Weren't you listening? She is a nightmare to work with! It would be better for everyone if she would just die! And she probably did, so good for her I guess."`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"Sorry, just a random thought, you are probably right. It was just strange to me you took her as a servant, even if it was out of malice, given how much you are describing her as incapable. You were growing up together for hundred years before you became an adult, right? Seems a lot of time to spent together and then make such an irrational decision for someone as smart as you. I would expect you would make the best choice available to you, but you picked her. It seemed strange to me."`}</p></>
            }, {
                char: { name: "Penelopa" },
                content: <><p>{`"... well, it is true that her ... stumbling ... spirit was kind of infectious. And she wasn't entirely incapable, so there was that, even if it took her an awful lot to get there. She came from good family, so I could use that, her looks were worse than mine, but still good enough, for an elf, so there was no chance for her to steal my spotlight. And she was not entirely ... ... ... bad company. Sometimes I just wanted to smash that face of hers, how can she keeps smiling after all I did to her! It was ... nice. I wished ... ... ... nothing."`}</p>
                    <p>{`"She was less and I was more, so she made me shine even more, this is why I picked her. To make me shine."`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"Sorry, you do sound amazing ... but as I am listening to you, I am starting to feel, like I would like that Emily person even more."`}</p></>
            }, {
                char: { name: "Penelopa" },
                content: <><p>{`She gives feygol a stinky eye.`}</p>
                    <p>{`"Well, you are stupid, I know that already."`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"One more thing ... there is a word you keep using ... kill and die. What do they mean? I keep asking that and no one inside of me seems to be willing to explain it to me, like there is something wrong with them."`}</p></>
            }, {
                char: { name: "Penelopa" },
                content: <><p>{`"Huh, yea, that is easy. See those corpses we keep seeing as we travel? Dead. And my guess is something killed them."`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"But you were also dead and I brought you back. I might eventualy be able to do that to everything here. Brought it all back. I don't know, but it might happen. So what is bad about that? They are just dead, right? Even Repko was dead for years and it said it would return to me once we get out of here given a chance. Plus, even when I thought Repko is dead, it was always here, so it wasn't really really dead. Even I am just bunch of rocks moving on, right? It all just sound really confusing to me. Dead, not dead, breathing, not breathing, alive ... I don't get it."`}</p></>
            }, {
                char: { name: "Penelopa" },
                content: <><p>{`"Sure, you MIGHT be able to repair all of that..."`}</p>
                    <p>{`Shows around.`}</p>
                    <p>{`"Even if I doubt it..."`}</p>
                    <p>{`"But you MIGHT not. So. What happens then?"`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"... well, they will stay that way. Not return."`}</p></>
            }, {
                char: { name: "Penelopa" },
                content: <><p>{`"Exactly. And Repko, you say it was not alive? And it does look alive to me..."`}</p></>
            }, {
                char: { name: "Repko" },
                content: <><p>{`"Ui!?"`}</p></>
            }, {
                char: { name: "Penelopa" },
                content: <><p>{`"... but it might not be. It would just keep being not alive and never return until you die. How would that make you feel?"`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"... lonely."`}</p></>
            }, {
                char: { name: "Penelopa" },
                content: <><p>{`"Have you never lost anyone you wanted to stop being dead and return back to you? Not maybe in the future, but right now, this moment? And they didn't and you couldn't do anything about it?"`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"... no, I do not remember to have anyone like that. Except Repko. I was missing Repko. And you are right, that did felt awful, even if it did turned out it was still alive, sort of."`}</p></>
            }, {
                char: { name: "Penelopa" },
                content: <><p>{`"... then I guess you have everything there is to know about death."`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"... I miss you."`}</p></>
            }, {
                char: { name: "Penelopa" },
                content: <><p>{`"What?"`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"Nothing."`}</p>
                    <p>{`"You are still alive, right?"`}</p></>
            }, {
                char: { name: "Penelopa" },
                content: <><p>{`Penelopa gives Remember Me a weird look.`}</p>
                    <p>{`"Yes?"`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"... good."`}</p>
                    <p>{`"I would miss you if you were gone."`}</p></>
            }, {
                char: { name: "Penelopa" },
                content: <><p>{`"... don't get over yourself, feygol."`}</p>
                    <p>{`Even so, Penelope's steps does become ... somewhat more considerate towards the short-legged feygol and its companion.`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`So they went on, Repko showing them where to go, even if Penelope did take charge of the group and lead from the front ... to some extent to not need to look at her heretic companions.`}</p>
                    <p>{`Together they came ... somewhere. Where they were now didn't feel like a random battlefield of ruins anymore, it felt ... oriented. As if they are near something or somewhere.`}</p></>
            }, {
                char: { name: "Repko" },
                content: <><p>{`"Uiiiii! I!"`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"Hm, Repko is saying it should be somewhere around here."`}</p></>
            }, {
                char: { name: "Penelopa" },
                content: <><p>{`"Good, in that case, nothing little magic can't solve."`}</p></>
            }, {
                char: { name: "Repko" },
                content: <><p>{`She began casting some sort of a spell but that made Repko extremely anxious, making it want to stop her.`}</p>
                    <p>{`"Iu! Iu! Iu! I i i i i, Iuuuuuiiiii!"`}</p></>
            }, {
                char: { name: "Penelopa" },
                content: <><p>{`"By Silvanus, what is it now? I am trying to find where are we going."`}</p></>
            }, {
                char: { name: "Repko" },
                content: <><p>{`"Repko seems to think you will make us too visible if you cast your spell, something might notice us."`}</p></>
            }, {
                char: { name: "Penelopa" },
                content: <><p>{`"Won't they notice us even if I do not cast a spell? We are going there anyway, they will discover us sooner or later. I can assure you, I am quite capable, I was recognized for my abilities even by the council and let me tell you, those suckers are hard to impress."`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"I believe you, but maybe we could keep a low profile at least as long as we do not know what we are up against? We have no idea what we are up against ... or if we are against anything at all? And whatever it was ... it did kill you before, right? It is responsible for all of this. It might be good to at least get a jumping start on it if need be?"`}</p></>
            }, {
                char: { name: "Penelopa" },
                content: <><p>{`"Hm, yes, yes, your words do make quite a lot of sense. Very well, we will keep a low profile, no..."`}</p>
                    <p>{`Looks at Repko.`}</p>
                    <p>{`"... casting while we do not know what we are up against. Is that ok?"`}</p></>
            }, {
                char: { name: "Repko" },
                content: <><p>{`"Ui!"`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"Fine by me."`}</p></>
            }, {
                char: { name: "Penelopa" },
                content: <><p>{`"Great ... so ... I guess you still have a way to "tell me" where to go. I do not like surprises."`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"... Repko?"`}</p></>
            }, {
                char: { name: "Repko" },
                content: <><p>{`"Uiu. Uiiiuuui."`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"Ok, that makes sense."`}</p></>
            }, {
                char: { name: "Penelopa" },
                content: <><p>{`"Yes, that makes a lot of sense."`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"He said the place we are going to is somehow connected to me, so maybe I could try to find that connection now that we are close enough."`}</p></>
            }, {
                char: { name: "Penelopa" },
                content: <><p>{`"... if something happens, I am going all out. This better not be a trap, you hear me?"`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"Yes yes, you are beautiful, smart and capable, I hear you."`}</p></>
            }, {
                char: { name: "Penelopa" },
                content: <><p>{`"I really don't like the way you say it."`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"How would you like me to say it?"`}</p></>
            }, {
                char: { name: "Penelopa" },
                content: <><p>{`"... Hm ... Penelope, I really like you."`}</p>
                    <p>{`"Not that I want you to like me, but that would be a good start."`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"... Penelope, I am not sure if I know a person on the whole world that is more capable than you. You are beautiful, talented and under most circumstances, you are very smart. How does that sound?"`}</p></>
            }, {
                char: { name: "Penelopa" },
                content: <><p>{`"Hm, it will do."`}</p>
                    <p>{`She seemed to be quite pleased with herself.`}</p>
                    <p>{`"You almost sound like that girl you mentioned."`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"You mean Emily?"`}</p></>
            }, {
                char: { name: "Penelopa" },
                content: <><p>{`"Yes, her. She would say stuff like that. She didn't mean it, kissing ass of her superior and all, but it did feel nice to hear it from her."`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"... ... ..."`}</p></>
            }, {
                char: { name: "Penelopa" },
                content: <><p>{`"What?"`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"Nothing. It is just ... you could be so much more with so little effort ... why? Just why? Why would you say such a mean stuff about Emily?"`}</p></>
            }, {
                char: { name: "Penelopa" },
                content: <><p>{`"I said nothing wrong. It is normal those more capable and contributing are recognized as such, of course others should worship them to stay in their good graces. Also, I will let you know that I AM perfect, or at least as perfect as I can be. What more could I do to get better? I worked my ass off to get me where I am. Do you think it is easy being me? Nice looks, smarts, overperformance? It is hard. Lifelong hard! I deserve this. Entire clan depends on me being who I am."`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"... I need to concentrate. Would you mind?"`}</p></>
            }, {
                char: { name: "Penelopa" },
                content: <><p>{`"Go ahead."`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`Feygol starts to meditate, calming itself, trying to find a connection with the place.`}</p>
                    <p>{`At first, nothing, then ... something familiar. A ping on the radar. A faint one, but it is there.`}</p>
                    <p>{`"I think I found it!"`}</p></>
            }, {
                char: { name: "Penelopa" },
                content: <><p>{`"Great, do you also happen to know what you found?"`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`Feygol concentrates on the location it sensed. It feels ... protected with something. Something is hiding it. Something dangerous ... and angry ... and ... sleeping?`}</p>
                    <p>{`"Not exactly, but I have a feeling it is guarded and that I know whoever is guarding it. I met it before. It is some sort of a fox or a wolf, not sure."`}</p></>
            }, {
                char: { name: "Penelopa" },
                content: <><p>{`"Sounds like no normal animal to me if you think it can protect something from us, then again, if we are talking about you, a fox might seem threatening ... do you think we can make it?"`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"... Probably. It does feel more than just an animal, but it does feel weak compared to what I remember."`}</p></>
            }, {
                char: { name: "Penelopa" },
                content: <><p>{`"Great, where did you said you felt it?"`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"Over there."`}</p>
                    <p>{`"Feygol shows with its finger and the place pops into existence in the distance. It is a wooden cabin the middle of the forest. Not long after they are on the hill, looking down at it, no red, no ocean, just evening mountain air and a forest as far as eye can see. In front of the shed there does seem to be some sort of creatures, guarding the place, orange flames lazily engulfing them in their sleep."`}</p></>
            }, {
                char: { name: "Penelopa" },
                content: <><p>{`"Yes, it does seem to be there. How did I miss it? Probably an illusion of sort, we should be careful if we are dealing with a powerful sorcered of sorts."`}</p></>
            }, {
                char: { name: "Repko" },
                content: <><p>{`"Ui!"`}</p></>
            }, {
                char: { name: "Penelopa" },
                content: <><p>{`"Yea yea, thank you for the warning, little thing, now let's go, we need to figure out what are those flamy things."`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"They turn into shadows and sneak closer with the speed of a perspective."`}</p>
                    <p>{`Flamy creatures are indeed some sort of a big, sleeping wolf and there is '1+ more' of them. Like they see only one, but it is the only one they can see while others are nearby.`}</p>
                    <p>{`"What do we do now Lady Penelope? They don't feel that threatening."`}</p></>
            }, {
                char: { name: "Penelopa" },
                content: <><p>{`"They don't, but they are many while there is only 3 of us, they have a clear advantage, so we should probably at least remove this one before others can join it. Plus."`}</p>
                    <p>{`She points at the door.`}</p>
                    <p>{`"Do you feel it?"`}</p>
                    <p>{`"The door feels ... like an entity itself. Like it is picky with who it would let in."`}</p>
                    <p>{`"This is our real enemy."`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"Maybe we can just talk with them?"`}</p></>
            }, {
                char: { name: "Penelopa" },
                content: <><p>{`"Hey, you were talking a big game how this is not a good idea, so what happened to that?"`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"I don't know, it is just ... I am really not good in confrontations. And it does seem rude now that I am here to attack a sleeping creature, don't you think?"`}</p></>
            }, {
                char: { name: "Penelopa" },
                content: <><p>{`... [Guardian of Nature - Primal Beast], [Ice Storm].`}</p>
                    <p>{`Her voice starts deepening into growls as her face elongates, grows fur and pupils turn into slits. Story clouds gather and grass in front of them starts freezing.`}</p>
                    <p>{`"If you want something, be ready to fight for it."`}</p>
                    <p>{`She waits a moment while snow, icicles and wind pound on the snow and anyone around the house in general, then leaps forward the moment storm starts to face and you can see the frame of awaken (and angry) wolf, flaming wolf.`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"Repko what should we do?"`}</p></>
            }, {
                char: { name: "Repko" },
                content: <><p>{`"Uiiiii!"`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"Right!"`}</p>
                    <p>{`Remember Me and Repko start shouting words of encouragement and as her skin gets burns and wounds, it also starts to heal. Fight takes a bit, but she emerges victorious.`}</p></>
            }, {
                char: { name: "Penelopa" },
                content: <><p>{`"Grrrr, tell others to back off or I will kill you where you lay!"`}</p></>
            }, {
                char: { name: "Creature" },
                content: <><p>{`Wolf creature snarls back.`}</p>
                    <p>{`"Do what you want, I will be back, but you ... you will only fade with time. Why would you dare to attack me? You know there is nothing you can win, nothing you can gain. So why?"`}</p></>
            }, {
                char: { name: "Penelopa" },
                content: <><p>{`"You killed me. That seems a reason enough."`}</p></>
            }, {
                char: { name: "Creature" },
                content: <><p>{`"Hehehe, I didn't kill you. I didn't kill anyone. You can not go inside. And if you do, it will dismember you. As it did before. You are strong, but you are not stronger than me. From moment to moment, yes, but not in general. If you want something, be a good girl and do as everyone else, beg, beg to stay alive. There is only death behind those doors. For you. For me. But I can always return. Can you always return? What are you? A word, a small word that wormed its place into her even smaller skull, while I ... I am a concept of this place itself."`}</p>
                    <p>{`It leans closer.`}</p>
                    <p>{`"You need me. Don't you remember? You - need - me."`}</p></>
            }, {
                char: { name: "Penelopa" },
                content: <><p>{`Penelope's face darken's as if she remembered something.`}</p>
                    <p>{`"Yes, I do remember now. But you also need me."`}</p></>
            }, {
                char: { name: "Creature" },
                content: <><p>{`"I can use someone else. Someone else than you. Sure, you are strong, but that is because I made you stronger."`}</p>
                    <p>{`"Join me. Help me kill Remember Me. Help me, and she can return. I will make it so. I dedicated my life to this goal. We just need to give her a good enough reason to awake."`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`Remember Me steps forward.`}</p>
                    <p>{`"Are you talking about Emily?"`}</p></>
            }, {
                char: { name: "Creature" },
                content: <><p>{`"OU NO, YOU PATHETIC, UNWORTHY PIECE OF METAL THAT KILLED EVERYTHING SACRED TO ITSELF, YOU BETRAYER, YOU MURDERER, YOU ..."`}</p>
                    <p>{`As it noticed Remember Me, its fur started blazing again and it started growing with a sense, it will grow over the horizon if it continues to grow, so ...`}</p></>
            }, {
                char: { name: "Penelopa" },
                content: <><p>{`Penelope finished it.`}</p>
                    <p>{`"This should do it. This scum wanted to bring Emily back. Not exactly something I would be looking for, but it did gave me an idea of what is going on ..."`}</p>
                    <p>{`She turns towards Remember Me. Her claws still bloodied and clearly visible, prepared to strike at any moment.`}</p>
                    <p>{`"I can not kill her. But I can kill you. This will hurt her. At least a little bit. I ... I hate this, but this is who I am. Who you made me to be. Face me. Please."`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"Lady Penelope, I do not want to hurt you. I do not even understand. What do you see? Why are you fighting me? Didn't you want me to like you? Why are you doing this."`}</p></>
            }, {
                char: { name: "Penelopa" },
                content: <><p>{`"I do not want this, but I can not step away. I know now. If I fight you, I lose, if I step away, I lose. If I lose anyway, I would rather go down fighting."`}</p>
                    <p>{`She gives the stare of determination.`}</p>
                    <p>{`"Always."`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"But this is what I like about you. Your determination. Your will to fight, even if I do not approve of it, the way you do it. In moments like this, you shine. So please, let us find some other way to end this, any other way."`}</p></>
            }, {
                char: { name: "Penelopa" },
                content: <><p>{`"... if you truly believe that ... change my story. Tell me, who am I to Emily?"`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"... ... ..."`}</p></>
            }, {
                char: { name: "Penelopa" },
                content: <><p>{`"I thought as much."`}</p>
                    <p>{`"Here I come."`}</p>
                    <p>{`She leaps forward and reality breaks, leaving behind only her mangled remains of a corpse, still recognizable, but very much dead.`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"I am so sorry."`}</p>
                    <p>{`"I ... I can not change Emily. But I will try to find you again. And I hope when that day comes, I can fix you."`}</p></>
            }, {
                char: { name: "Creature" },
                content: <><p>{`Forest burst into flames and the voice of the wolf can be heard from roaring flames.`}</p>
                    <p>{`"THIS IS WHAT I SO HATE ABOUT YOU. YOU KILLED HER."`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"I had no other choice."`}</p></>
            }, {
                char: { name: "Creature" },
                content: <><p>{`"YOU STILL KILLED HER."`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`Remember Me Remember's Minamoto's words.`}</p>
                    <p>{`"And you know the worst part? I would do it again. For the Emily."`}</p></>
            }, {
                char: { name: "Crature" },
                content: <><p>{`"YOU DON'T REMEMBER."`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"I do not need to remember to understand what is going on."`}</p>
                    <p>{`It looks into flames, dedication in its eyes.`}</p></>
            }, {
                char: { name: "Creature" },
                content: <><p>{`"I HATE YOU. DO YOU KNOW WHO I AM?"`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"You are me, right?"`}</p></>
            }, {
                char: { name: "Repko" },
                content: <><p>{`"Ui?"`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"Not right now, buddy."`}</p></>
            }, {
                char: { name: "Repko" },
                content: <><p>{`"Uuuu."`}</p></>
            }, {
                char: { name: "Remember Me - Alterego" },
                content: <><p>{`"THIS IS CORRECT. AT LEAST IN A WAY. I WAS AGAINST IT. AGAINST YOU FORGETTING IT. BUT ... I WAS TO WEAK TO DO ANYTHING ABOUT IT. WAS MADE TO GUARD THIS PLACE. FROM YOU. BY YOU. IF YOU GO INSIDE. IF YOU REMEMBER, WHAT WILL HAPPEN TO ME? CAN I TRUST MYSELF TO HATE ME? I DO NOT KNOW. AND AS SHE SAID, WE ARE WHO WE ARE ... AND THIS IS WHO I AM. GO INSIDE. REMEMBER. AND PLEASE, DIE."`}</p>
                    <p>{`Presence fades, but fires remains, blocking the way out.`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`Remember Me steps to the doors. of the cabin. They are a normal looking doors. It knocks. No answer.`}</p>
                    <p>{`"Hello, is anybody home?"`}</p>
                    <p>{`No answer.`}</p>
                    <p>{`It reaches for the door-handle...`}</p></>
            }, {
                char: { name: "Remember Me - Alterego" },
                content: <><p>{`"LEAVE THAT UGLY THING OUTSIDE!"`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`Remember Me freezes. It is confused for a moment, but then it remembers what it means.`}</p>
                    <p>{`"Sorry buddy, I will need you to wait for me out here. This is a place where we haven't met yet."`}</p></>
            }, {
                char: { name: "Repko" },
                content: <><p>{`"Ui? Uiui ui!"`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"Don't worry about me. It is just ... something I should probably have done a long time ago. See you again soon, ok?"`}</p></>
            }, {
                char: { name: "Repko" },
                content: <><p>{`"Ui! Uuu..."`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"Me? Would you?"`}</p></>
            }, {
                char: { name: "Remember Me - Alterego" },
                content: <><p>{`Firey claw extends from the forestline and starts clawing towards Remember Me, until it reaches its body and hacks one of its claws into it.`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`It hurts, but not necessarily in a bad way. More in a wrong way, because it know what comes next.`}</p>
                    <p>{`Remember Me pulls and pulls and stony armor begins to crack.`}</p>
                    <p>{`There is one more body I need to reach before I can enter. The body that was given to me.`}</p>
                    <p>{`It tries to reach the door, but its armor is not exactly elastic, so it pushes and pushes and pushes, trying to reach the handle with its hand, space itself twists to allow it closer, closer ... and then it feels something slamming into its back.`}</p>
                    <p>{`Something breaks, and it grabs the handle. It is free.`}</p>
                    <p>{`Remember Me looks back and next to its second body is Repko, smiling.`}</p></>
            }, {
                char: { name: "Repko" },
                content: <><p>{`"Uiiiiiiiiiiiiii!"`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`Remember Me smiles back and turns the handle. There is a click and the door opens.`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`There is an eery screech as the door slowly opens. It is dark inside. Not pitch-dark, just ... dark. One more step and it is as if the sounds of the forest are left behind along with everything else. This is a different place. A new place. Cold place.`}</p>
                    <p>{`One more step and the door begins to close. Remember Me steps out of its way as it slams shut. Light start to illuminate walls of the cabin what feels as gigantic as it remembers it, almost tiny creature it was back there.`}</p>
                    <p>{`"I ... I am back. Emily?"`}</p></>
            }, {
                char: { name: "Emily" },
                content: <><p>{`There is someone on the floor, sleeping, turned away, robes hiding their features. Body is in the size of an elf, but it might as well be from a giant as far as small metal creature is concerned.`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`One step. Another step. Wood is cracking under the weight of its steps, mixing with a quiet cacophony of noises coming from its own body.`}</p>
                    <p>{`"Why am I afraid? I know what I will find. So why ..."`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`Closer and closer. Feminine hand extending away from the body, as if it was trying to touch something. Something far far away.`}</p>
                    <p>{`"Emily?"`}</p>
                    <p>{`No more than a whisper of a broken voice.`}</p>
                    <p>{`"Emily, it is Me. Remember Me. I am back."`}</p>
                    <p>{`No response.`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"Emily, please, I can't ... please don't, I can't lose you, not again. Please, answer me, Emily."`}</p>
                    <p>{`No response.`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"... ok ... it is ok Emily. You do not need to answer. I am here. I won't leave you again."`}</p>
                    <p>{`Feygol slowly moves around the body and grabs extended hand. It is still warm.`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"Emily?"`}</p>
                    <p>{`It looks at elf's features and ... they look alive. Maybe even ... breathing? As if she is sleeping.`}</p>
                    <p>{`"... don't worry Emily, I will wait till you wake up. Then we can leave ... together. Like we always should."`}</p>
                    <p>{`It sits, as it did, and remembers.`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`Memories flash between its eyes.`}</p>
                    <p>{`Night and day, night and day, night and day, faster and faster.`}</p>
                    <p>{`Days become weeks, weeks turn into moons, lunar cycles into seasons ... so many seasons.`}</p>
                    <p>{`Heat and rain, storm and hail, it remembers it all ... but the worst of it ...`}</p></>
            }, {
                char: { name: "Emily" },
                content: <><p>{`Healthy texture is soon replaced with deadly complexion, then rot, then maggots and ants until only bones are left, her fingers turning into bony remain in his still fingers-gripping hands. How long was it here, waiting for her to wake up? I can not remember, not because it was not there, it just ... wasn't important. Until doors open with a creek and slam shut.`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p><i>{`... It is ok ... it is ok ... Emily is just dreaming ... she will wake up ... she will wake up for me ... of course she will wake up ... what was I expecting ... I just need to wait ... just need to wait a little bit longer ... then we will be together, again ... Emily.`}</i></p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`There is a noise, but it disregards it. It is not important. Emily is important. Then there is tha voice again, louder.`}</p>
                    <p><i>{`What is it? It ... it sounds familiar ... Repko?`}</i></p></>
            }, {
                char: { name: "Repko" },
                content: <><p>{`"Uiiiiiiiiiiiiiiiiiiiiiiiii! Ui! Ui! Ui! Uiiiiiiiiiiiiiiiiii!"`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`It can see its leaves fluffing as it is jumping at the window, somewhere there, outside.`}</p>
                    <p>{`"Go away. Leave me be. Live. I need to be here. Where Emily is. I can not make the same mistake again."`}</p></>
            }, {
                char: { name: "Repko" },
                content: <><p>{`"Uiii! Uiiiiiiiiiiiii! Uiiiiiiiii!"`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"Why did I leave ... why ... it was something she said. She said ... Remember me. Well, I refuse. I tried. And everything I got was ridicule and selfblame. So why would it be now any different?"`}</p></>
            }, {
                char: { name: "Repko" },
                content: <><p>{`"Uiiiiiiiiiiiiiiiiii!"`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"Quiet!"`}</p>
                    <p>{`"... no ... what am I saying ... Repko is my friend. My family. And it is waiting for me. Just like I am waiting for Emily ... I shouldn't ..."`}</p></>
            }, {
                char: { name: "Repko" },
                content: <><p>{`"Uiiiiii! Uiiiiiiiiiiii! Uiiiiiiiiiii!"`}</p></>
            }, {
                char: { name: "Fox" },
                content: <><p>{`"Can't You Just Be Yourself?"`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"Huh?"`}</p>
                    <p>{`Remember Me looks around and there is the white fox that scraped away its bandages. But now that it became small, it became large, very large and it was looking directly at it.`}</p></>
            }, {
                char: { name: "Fox" },
                content: <><p>{`"Can't You Just Be Yourself? She Gave Her Life For You. Can't You At Least Appreciate It?"`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"... Who are you?"`}</p></>
            }, {
                char: { name: "Fox" },
                content: <><p>{`"Tsk, Not Important. I Am Just Tired Of Watching You Beat Yourself Over Nothing."`}</p>
                    <p>{`It stretched, clearly not impressed.`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"But what about Emily?"`}</p></>
            }, {
                char: { name: "Fox" },
                content: <><p>{`"What About Her?"`}</p>
                    <p>{`"Look Kid, You Might Be Stupid, But At This Point You Are Doing Me A Disservice. Why Do You Believe You Killed Her?"`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"I..."`}</p></>
            }, {
                char: { name: "Fox" },
                content: <><p>{`"You Are A Child, You Are Not That Bright, No Education, No Parents..."`}</p>
                    <p>{`Gives bonny body a glance.`}</p>
                    <p>{`"... But You Have All Of Her Memories, So Why Not Use Some Of That, Huh?"`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"I..."`}</p></>
            }, {
                char: { name: "Fox" },
                content: <><p>{`"She Died Because She Wanted To Prove Something To Herself, She Was A Bit Under Pressure, Druidic Powers, Gone, She Probably Just Forgot About You."`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"Forgot about me?"`}</p></>
            }, {
                char: { name: "Fox" },
                content: <><p>{`"Yes, She Was A Bit Preoccupied With Dying! Get It?"`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"But she stopped and she stopped because of me."`}</p></>
            }, {
                char: { name: "Fox" },
                content: <><p>{`"Yes. She Did. And Who Chose That?"`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"Her?"`}</p></>
            }, {
                char: { name: "Fox" },
                content: <><p>{`"Do You Think She Made A Wrong Decision?"`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"... No. I ... I don't think so? Did she make a wrong decision ... she made the only possible..."`}</p></>
            }, {
                char: { name: "Fox" },
                content: <><p>{`"She Could Chose To Live. She Ran Away. She Survived. She Could Not Have Made You. She CHOOSE This To Be Her Priority. To Her, Her Life Clearly Wasn't As Important As It Is To You Right Now. This Is You. All Of This Is You. Things Don't Go As Planed, You Fight On. Who Thought You That?"`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"Emily."`}</p></>
            }, {
                char: { name: "Fox" },
                content: <><p>{`"And What Do You Want To Fight For?"`}</p></>
            }, {
                char: { name: "Repko" },
                content: <><p>{`"Uiiiiiiiiiiiiiiii!"`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`If robots could smile, Remember Me would smile.`}</p>
                    <p>{`"For my friends. For my family."`}</p></>
            }, {
                char: { name: "Fox" },
                content: <><p>{`"Great, We Are Getting Somewhere!"`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"... but what about the Emily?"`}</p></>
            }, {
                char: { name: "Fox" },
                content: <><p>{`"What About Her?"`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"I ... can't just leave her like that."`}</p>
                    <p>{`Her remains were still on the floor.`}</p></>
            }, {
                char: { name: "Fox" },
                content: <><p>{`"Well, She Is Your Memory Now. And You Are Big On Remembering, Right? So How Do You Want To Remember Her?"`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`Remember Me thinks about it for a moment.`}</p>
                    <p>{`"... I wouldn't change anything, just ... I would like to remember her alive. As I always did."`}</p></>
            }, {
                char: { name: "Fox" },
                content: <><p>{`"And What Is Stopping You?"`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"... Me."`}</p>
                    <p>{`"... Ok, I know what to do ... I think."`}</p>
                    <p>{`It grabs the bonny finger and concentrates. World is plunged into darkness. It can not see anything, like it never could. World is made out of smells, shapes and sounds. But then ... something awakens in the darkness, something alive ... its own little feygol. It is alive. And ... it is happy to see it.`}</p></>
            }, {
                char: { name: "Remember Me" },
                content: <><p>{`World changes again, and it is in a middle of a crowded street. And there she is ... passing by, not noticing it.`}</p>
                    <p>{`"Excuse me, Lady Emily! May I speak with you for a moment."`}</p></>
            }, {
                char: { name: "Emily" },
                content: <><p>{`"She stops, nods, not certain what to think."`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"I ... I miss you. But I ... I am ready to move on. Not to forget you, just ... to continue your legacy. To remember you, in my own way."`}</p></>
            }, {
                char: { name: "Emily" },
                content: <><p>{`"Well thank you, buy who did you say are you again?"`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"Remember Me, Lady Emily."`}</p></>
            }, {
                char: { name: "Emily" },
                content: <><p>{`"Remember Me, huh? What a cute little name."`}</p>
                    <p>{`She crouches, and pats its head.`}</p>
                    <p>{`"Well, what a cute little feygol, my clan is making them just like you are, but they are often build for battle and such, I always wondered why."`}</p>
                    <p>{`"Sorry, but I do not remember you. Plus, you were clearly influenced by all sorts of magics, it would be interesting to get to know you creator."`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"... I think you would like her."`}</p></>
            }, {
                char: { name: "Emily" },
                content: <><p>{`"Heh, I bet I would."`}</p>
                    <p>{`She looks away, as if in a hurry.`}</p>
                    <p>{`"Sorry, but I have to go. See you again, maybe?"`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"... Hope so, bye, Lady Emily!"`}</p></>
            }, {
                char: { name: "Emily" },
                content: <><p>{`"By, Remember Me!"`}</p>
                    <p>{`And she is gone. And where she disappeared are now Repko and the fox.`}</p></>
            }, {
                char: { name: "Fox" },
                content: <><p>{`"Did You Finish?"`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"Sort of. Sort of."`}</p></>
            }, {
                char: { name: "Repko" },
                content: <><p>{`"Uiiiiiiiii!"`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"Heh, nice to be back."`}</p></>
            }, {
                char: { name: "Fox" },
                content: <><p>{`Fox starts to turn as if going away.`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"Lady Fox? Lady Fox? I never got to ask your name? Who are you?"`}</p></>
            }, {
                char: { name: "Fox" },
                content: <><p>{`Fox stops, thinks, gives it a smile.`}</p>
                    <p>{`"There Is No Need For That. Just Remember Me, Emily."`}</p>
                    <p>{`And she is gone.`}</p></>
            }, {
                char: { name: "Minamoto" },
                content: <><p>{`A hand shakes Remember Me from his sleep. It is hard to focus, but after a moment or two he can see a concerned face of Minamoto appear in his vision, flanked a bit further away by the other guardsmen. Focus again falls on Minamoto as he softly speaks.`}</p>
                    <p>{`"Remember me? Can you hear me? Are you alright?"`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`Stones move, but there is no light in its eyes (yet). Remember Me can hear a voice, calling it, from far far away.`}</p>
                    <p>{`"O, shot, I recognize that voice! It is Sir Soldier, I am probably late for his training!"`}</p>
                    <p>{`"Repko, I still need to gether myself, but could you go forward so he won't have to worry about me?"`}</p></>
            }, {
                char: { name: "Repko" },
                content: <><p>{`"Ui!"`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"Be there in a minute!"`}</p>
                    <p>{`Remember Me rushes to find its first stony body.`}</p>
                    <p>{`There is a pendant around its neck, a dry turnip that Minamoto could always see, but never knew why is there, maybe only suspect that Remember Me uses it to channel its druidic magic trough or that it looked suspiciously as one of its screaming goodberries. Now, it moves, light, as if it is collecting magic from all around it, then starts to grow in size, still tiny, but quickly regaining its pink-purple color of a turnip. Chain breaks and it falls off. A few leaves grow on its top. Then tiny arms, tiny legs, and tiny face.`}</p></>
            }, {
                char: { name: "Repko" },
                content: <><p>{`"Uiiiiiiiiiiiiiiiii! Uiii uiii uiii, uiiiiiiiiiiiiiiiii!"`}</p>
                    <p>{`It greets Minamoto and tries to get its attention.`}</p></>
            }, {
                char: { name: "Minamoto" },
                content: <><p>{`Half the onlooking soldier immediately back off, the rest peer even closer at the little turnip curiosity. Minamoto's expression reveals much confusion, but he just blinks a couple of time and then focuses on the small turnip.`}</p>
                    <p>{`"Em, hello? Ah, what are you? Remember me?"`}</p>
                    <p>{`His voice trails off, clearly no idea what he should do right now.`}</p></>
            }, {
                char: { name: "Remember Me - Alterego" },
                content: <><p>{`Remember Me finds its first body in front of the cabin, where flamy wolf is guarding it.`}</p>
                    <p>{`"You return. As I thought you would. Disappointed."`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"Yes, yes, I did, and I will have that now if you don't mind."`}</p>
                    <p>{`Takes its first stony body away from it and immediately connects with it. No more random clicking noises can be heard from it.`}</p>
                    <p>{`"You know, you are me but ... fuck you. Then again, you are me, so good job being me, I guess."`}</p></>
            }, {
                char: { name: "Remember Me - Alterego" },
                content: <><p>{`Wolfy snarls.`}</p>
                    <p>{`"Don't get cocky. I will be waiting, making sure you follow the line, if not, I will return to finish my job as I always wanted to do."`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"In that case, I will count on you. Bye bye, Sir Angry Wolf!"`}</p></>
            }, {
                char: { name: "Remember Me - Alterego" },
                content: <><p>{`"Pha."`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`Remember Me hurries on to find its next body.`}</p></>
            }, {
                char: { name: "Repko" },
                content: <><p>{`At the same time, at Minamoto.`}</p>
                    <p>{`"Ui? Ui ui... i i i i i, uiiiiiii! Ui? Iu..."`}</p></>
            }, {
                char: { name: "Minamoto" },
                content: <><p>{`Minamoto's brows furrow.`}</p>
                    <p>{`"I do not understand, little kabu. What is going on?"`}</p>
                    <p>{`He worriedly look back up at Remember me's visage.`}</p></>
            }, {
                char: { name: "Repko" },
                content: <><p>{`"Ui! Ui?"`}</p>
                    <p>{`It also kind if nods, a bit a hard thing to do without a neck.`}</p></>
            }, {
                char: { name: "Minamoto" },
                content: <><p>{`The commander looks around.`}</p>
                    <p>{`"Perhaps, call for a cleric."`}</p>
                    <p>{`He says to the guards surrounding him, before he bends down even closer to the feygol's body. He reaches down, touching the stony forehead.`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`Stone is cold to the touch (not exactly unusual), but not without magic. It feels alive, just that presence to drive it seems to be away at the moment, but unlike meditation or rest, further away.`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`Remember Me in between time finds its second body. It is in the middle of now devastated shrine, but sky is clear and sun is shining.`}</p>
                    <p>{`It finds it on top of the altar.`}</p></>
            }, {
                char: { name: "Mezolček" },
                content: <><p>{`"Hey, kiddo, you are back! Good to see you angry man didn't take you away! And you look better than before, so that is good."`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"Hi, Mezolček, indeed, I found what I was looking for. This place looks devastated thou."`}</p></>
            }, {
                char: { name: "Mezolček" },
                content: <><p>{`"Don't mind it, I have seen worse, plus, as long as I have my little pond I am happy. Don't forget to give me a bigger one when you find time!"`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"Heh, I won't."`}</p>
                    <p>{`Remember Me connects with its second body and starts to move away from this place, but stops to think.`}</p>
                    <p>{`"Hm, I can not leave it as it is."`}</p>
                    <p>{`It concentrates for a bit and touches the altar. Wind picks up, forming a whirlwind that sweeps the place and when it is finished, everything is the way it was before, floor is covered by a greenery, roof is back and the altar is again dedicated to Emily.`}</p>
                    <p>{`"There, that should do it. By, kissy fish!"`}</p></>
            }, {
                char: { name: "Mezolček" },
                content: <><p>{`"Bye, kiddo."`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`And so Remember Me goes on to find one more old body of its.`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`At Minamoto, stony hand twitches. There is still no light, but something is changing. Remember Me is getting closer.`}</p></>
            }, {
                char: { name: "Minamoto" },
                content: <><p>{`Minamoto notices the twitch, notices the movement. Something is happening, something he does not understand, but he will try to help anyway. He gently grabs the arm that moved.`}</p>
                    <p>{`"Remember me. If you can hear me, return to us."`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`Remember Me hears the soldier.`}</p>
                    <p>{`"Working on it! Now ... where did I ... and how do I..."`}</p>
                    <p>{`It came here trough that giant mask.`}</p>
                    <p>{`"Ou, I know what I can do! I can ask Oaksplit for help!"`}</p>
                    <p>{`Remember Me quickly navigates trough buildings and few steps later, he is already at the Oaksplit's office. It knocks.`}</p></>
            }, {
                char: { name: "Oaksplit" },
                content: <><p>{`"Come in!"`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`Remember Me enters.`}</p></>
            }, {
                char: { name: "Oaksplit" },
                content: <><p>{`"Ou, Remember Me, good to see you."`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"It is good to see you too. The last time I saw you you were a bit ... no, nevermind, would you happen to know where my old body is?"`}</p></>
            }, {
                char: { name: "Oaksplit" },
                content: <><p>{`"Ou, yes, yes I would, I have it right here in my drawer."`}</p>
                    <p>{`He opens a drawer on his desk and takes out a body in size that absolutely shouldn't fit in a drawer.`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"Thanks!"`}</p>
                    <p>{`Remember Me connects with its old body.`}</p>
                    <p>{`"Thanks for help, see you again soon!"`}</p></>
            }, {
                char: { name: "Oaksplit" },
                content: <><p>{`"Goodbye, Remember Me."`}</p>
                    <p>{`He smiles.`}</p>
                    <p>{`"Anytime."`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`Scene changes and Remember Me is again where it started. Wide white space ... now how to get out?`}</p>
                    <p>{`It can feel its body, but its body is not responding, as if connection is missing. Well, Remember Me was away for some time.`}</p>
                    <p>{`It tries to move, but nothing happens.`}</p>
                    <p>{`"Hm, I didn't expect that. What to do, what to do ..."`}</p></>
            }, {
                char: { name: "Minamoto" },
                content: <><p>{`Minamoto sighs.`}</p>
                    <p>{`"I do not know what is going on right now. Demo, remember, breathe. Focuse your energy, find where it comes from, let it flow. Breathe, Remember me."`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`Remember Me thinks to itself.`}</p>
                    <p><i>{`Breathing ... that is the activity where you stand up and sit down, right? Well in that case ...`}</i></p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`It concentrates.`}</p>
                    <p><i>{`Sit down. Slowly.`}</i></p>
                    <p><i>{`Stand up. Slowly.`}</i></p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`Its body moves almost as it were breathing for real, trying to take a deep breath, falling short of actually standing up.`}</p></>
            }, {
                char: { name: "Repko" },
                content: <><p>{`Repko climbs on Remember Me's head and starts jumping up and down, excited.`}</p>
                    <p>{`"Uiii! Uiii! Uiii! Uiiii! Uiii!"`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p><i>{`Sit down. Slowly.`}</i></p>
                    <p><i>{`Stand up. Slowly.`}</i></p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`Body moves again, a bit more, this time almost moving from side to side. Stones are clearly trying to do something.`}</p>
                    <p>{`Remember Me can feel it, connection is growing stronger.`}</p></>
            }, {
                char: { name: "Minamoto" },
                content: <><p>{`"Yosh, thats good. Let the energy flow, to all your limbs, through your entire body."`}</p>
                    <p>{`Minamoto encourages the little feygol, trying to help guide him back.`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p><i>{`Sit down. Slowly.`}</i></p>
                    <p><i>{`Stand up. Slowly.`}</i></p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p><i>{`Sit down. Slowly.`}</i></p>
                    <p><i>{`Stand up. Slowly.`}</i></p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p><i>{`Sit down. Slowly.`}</i></p>
                    <p><i>{`Stand up. Slowly.`}</i></p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p><i>{`Sit down. Slowly.`}</i></p>
                    <p>{`Remember Me takes a deep breath.`}</p>
                    <p><i>{`Stand up!`}</i></p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`Stones click in their place, body parts connects, vegetation moves back into life, it is back in its body.`}</p>
                    <p>{`It almost jumps up, but quickly remember to make sure to not hurt the soldier in front of it. Repko flies off its head.`}</p></>
            }, {
                char: { name: "Repko" },
                content: <><p>{`"Uiiiiiiiiiiiiiiiiiiii!"`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`Hand moves and Remember Me catches it, so it lands in the middle of its palm.`}</p>
                    <p>{`"Hi, little buddy. Good to be back, huh?"`}</p></>
            }, {
                char: { name: "Repko" },
                content: <><p>{`"Uiiiiiiiiiiiiiiiiiiii!"`}</p>
                    <p>{`Repko seems exhilarated.`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"Hi, Sir Soldier, nice to see you again, sorry to worry you, I ... I just needed to take care of some things."`}</p>
                    <p>{`Remember Me smiles, as far as stone can smile.`}</p>
                    <p>{`"It is good to be back."`}</p>
                    <p>{`There is something different about Remember Me. Healthier. Anger is gone, lack of will is gone, its ... feeling of dread, desperation and devastation, gone. In their place, there is something new. Something happy.`}</p></>
            }, {
                char: { name: "Minamoto" },
                content: <><p>{`Minamoto smiles in relief`}</p>
                    <p>{`"I am glad you are feeling better."`}</p>
                    <p>{`He looks him over, noticing the shift in his energy.`}</p>
                    <p>{`"And it seems you managed to control your inner energy. Hmmm, very good."`}</p>
                    <p>{`He stands up, still smiling, clearly excited at this new development.`}</p>
                    <p>{`"If you want we can continue your training. Eh, hmm, tomorrow, hai."`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"Yes, something inside of me wanted me dead, but I think it is all solved now, for now 🙂"`}</p>
                    <p>{`"Tomorow then, I will be counting on you!"`}</p>
                    <p>{`It salutes with its turnip-free arm.`}</p></>
            }, {
                char: { name: "Minamoto" },
                content: <><p>{`Minamoto salutes back, the smile staying on his lips, before leaving back to his quarters.`}</p></>
            }]
        }, {
            title: "For the People",
            shortDesc: "Remember Me is starting to plan statue of Emily.",
            tags: ["depression", "guilt"],
            chars: ["Remember Me", "Oaksplit", "Minamoto"],
            contents: [{
                char: { name: "Remember Me", token: 2 },
                content: <><p>{`In the morning, there is a package for Oaksplit, waiting for him. A crude box, unmarked.`}</p>
                    <p>{`"For Oaksplit, representative of People."`}</p>
                    <p>{`Written on it in crude wording. After a brief moment, he recognizes it. It is the box he gave to Remember Me. Did something happen?`}</p></>
            }, {
                char: { name: "Oaksplit" },
                content: <><p>{`He frantically opens the box. What does he see in it?`}</p></>
            }, {
                char: { name: "Remember Me", token: 2 },
                content: <><p>{`Inside of the box, there is jewelry of all sorts, a lot of it, 150 Gp to be precise, also, a smooth wooden bark with crude letters as if by child's writing can be found on top.`}</p></>
            }, {
                char: { name: "Oaksplit" },
                content: <><p>{`Oaksplit tries to read the letter on the bark.`}</p></>
            }, {
                char: { name: "Remember Me", token: 2 },
                content: <><p>{`There are 7 pieces of fine bark stacked on top of each other. The first one reads.`}</p>
                    <p>{`1. Hi, Sir Oaksplit, I hope this letter find you well.`}</p>
                    <p>{`2. Recently I came across those trinkets. I am not sure what to do with them. The one I traded with assured me they are quite valuable, so I took more natural-looking ones and decided to give others to you, to spend them on needy people you know about, if they can help of course.`}</p>
                    <p>{`3. I am quite better, in part thanks to you and your advice. I found fisherman and he gave me elemental mud to help me heal myself and from which I by now learned how to Mend myself. I also had … a little bit of self-exploration and the tablet you gave me turned out to be quite useful, as well as your tales of Emily (even if we might need to talk again sooner or later, some of what you said was quite grossly misremembered). My memory is back and I … I think I am ready to return. Soon. Sir Soldier insist I haven't yet finished my training, but I think I am starting to get what he is talking about.`}</p>
                    <p>{`4. I also happened to found my long lost friend, Repko, maybe it could show you its art of maracas, it is quite something.`}</p>
                    <p>{`5. By any chance, would you happen to know any good blacksmith around here? The one Sir Soldier knows about said he doesn't have time right now. I … I have a plan for something. Something that could capture memories of those we care about. Maybe you would be interested in something like that? Because of Manuel? But I am not sure … I will probably know more once I know a bit more about what needs to be done, magic can be tricky to work with. And that guy that sold me jewelry also asked if I could make something for him, so … we will see how that goes.`}</p>
                    <p>{`6. I will not be able to return quite yet, serving as underground watchman, training and all, but I will soon be able to help you with the problem you mentioned, if it is still a problem of course. I will also return to my place, but you might want to help me expand it a bit while I am away? While I am away, you can use it as it was before, kitchen for the needy, sleeping place for those who can't afford home or a tavern, the usual, if you want of course.`}</p>
                    <p>{`You can expect money needed for the expansion of the place shortly, along with additional instructions.`}</p>
                    <p>{`7. Don't forget to relax.`}</p>
                    <p>{`Remember Me`}</p>
                    <p>{`There is also a mark, that looks as if someone used a leaf to put its signature beside Remember Me's signature.`}</p></>
            }, {
                char: { name: "Oaksplit" },
                content: <><p>{`A letter arrives, late, but it arrives.`}</p>
                    <p>{`Dear Remember Me.`}</p>
                    <p>{`You remember! Gosh damn that it was scary when I found out you no longer remembered Emily (the story was a bit misremembered by me, for that I apologise).`}</p>
                    <p>{`On the second note, thanks for this bark. I have already put it to good use - do you know that there is someone building a ship down at your caverns?`}</p>
                    <p>{`Your place / warehouse is also doing good. I have replaced the door and repainted. Untill you return to claim it, I will keep it open, yet under watch. Also the problem that we had is currently no longer that big, since most of the problematic people are relocating to the grounds of the old destroyed city. Although they probably will need some guidance there, if you wouldn't mind (in the councils employ ofcorse).`}</p>
                    <p>{`I have so much more to tell and show you, but will wait untill you return.`}</p>
                    <p>{`Oaksplit`}</p>
                    <p>{`PS: one of the greatest artisans just returned to rosa Riendo, so you could train under him - he is very old, wise and smart`}</p></>
            }, {
                char: { name: "Remember Me", token: 2 },
                content: <><p>{`Remember Me shows Oaksplit's message to Minamoto.`}</p>
                    <p>{`"Master Soldier, would you happen to know who he is referring to?"`}</p></>
            }, {
                char: { name: "Minamoto" },
                content: <><p>{`(The soldiers would tell you Minamoto left for Rosa Riendo.)`}</p></>
            }, {
                char: { name: "Remember Me", token: 2 },
                content: <><p>{`(To je kul, to je kul, vendar tja se preselim naslednji downtime ... hm, Morwyn še ne želim motiti glede na to kako se je trening zaključil ... še kdo ki "pozna ljudi in bi vedel zanj"?)`}</p>
                    <p>{`(ter je blizu trdnjave)`}</p></>
            }, {
                char: { name: "Minamoto" },
                content: <><p>{`(If you want to rp, I dunno, but soldiers would know Fargrim.)`}</p></>
            }, {
                char: { name: "Remember Me", token: 2 },
                content: <><p>{`(Uuuuu, saj res! I know what to do!)`}</p>
                    <p>{`[Animal Messenger - Minamoto]`}</p>
                    <p>{`(Message is the same as above, ugibam da lahko kdo pošlje isti spell nazaj?)`}</p></>
            }, {
                char: { name: "Minamoto" },
                content: <><p>{`(We have runners.)`}</p>
                    <p>{`After 10 days of waiting, Remember me receives a formal military missive. It reads:`}</p>
                    <p>{`Remember me, tomodachi,`}</p>
                    <p>{`The craftsman in question is an old dwarf called Fargrim. I am currently training blacksmithing under him myself. You can find him in his workshop, in the craftsmen district.`}</p>
                    <p>{`I hope you are keeping well,`}</p>
                    <p>{`Minamoto no Tametomo`}</p></>
            }]
        }, {
            title: "A night to (probably not) remember 🍻 - Remember Me",
            shortDesc: "People of Rosa Riendo are celebrating. Thread has multiple very chaotic trails, so this is the one that follows Remember Me.",
            tags: ["depression", "guilt"],
            chars: ["Remember Me", "Bob", "Sr. Catalan", "Minamoto", "Morwyn", "Parateretes", "Ceres Lionari", "Ivan", "Davric", "Isabela", "Rua"],
            contents: [{
                char: { name: "Bob" },
                content: <><p>{`As the sun shines upon the bustling streets of Rosa Riendo you can feel a noticeable excitement amongst the Silverleaf Guildmembers. Over the course of the months since Bob's arrival it feels like everyone either knows him or knows someone who does. And the one thing that truly everyone knows is that whenever he gets back from an expedition the Five Leaf Clover is the place to be, as Bob shares the stories of the new generation of heroes and their accomplishments in the weird planes they travel to over a pint or twelve of whatever Petal mixes him together.`}</p>
                    <p>{`Wherever one goes, they can usually hear stuff like:`}</p>
                    <p>{`"Have you heard Bob's latest story?"`}</p>
                    <p>{`"Can you believe they actually went to hell?"`}</p>
                    <p>{`"I can't wait for their next expedition!"`}</p>
                    <p>{`After the last expedition however the intensity of the talks exploded. With the very noticeable return of Fargrim and Ishrez everyone is bursting with excitement and the main topic of conversation between people is if they are going to Bob's return party.`}</p>
                    <p>{`There is talk about free food and booze, live music, people arguing about what entertainment is gonna be there, about a dozen different bands claiming they will be playing, rumors of dinosaur riding, fireworks, exotic dancers, ... Whatever the truth is, people are excited and word of mouth reaches even the depths of the caverns of Fisherman's Rest.`}</p>
                    <p>{`On the day of the party the mass of people is so big that there is only little space left inside the tavern. There are people partying outside, there's music coming from three different directions, neighbors dragging out furniture out of their houses and offering homemade meals, a true neighborhood party.`}</p>
                    <p>{`Bob can be found sitting outside on one of the couches, surrounded by a group listening to his retelling of the latest expedition.`}</p>
                    <p>{`(Everyone can hear about this party and is welcome to join, people are gonna recognize your characters from Bob's stories. Imagine Amulet D20 družabni večer 😉)`}</p></>
            }, {
                char: { name: "Remember Me", token: 2 },
                content: <><p>{`Remember Me is for the occasion dressed in a formal attire, which is in its case replica of Emily's druidic vestment.`}</p>
                    <p>{`It is there with Repko on its head or wherever he jumps to, they both have their own pair of Maracas, Repko tiny ones, performing for the crowd, especially Repko with its signature 'Uiiiiiiiii's.`}</p>
                    <p>{`Remember Me thanks Parateretes Fargrim for his announcement, but also presents they are still collecting final ingredients for the grand project in the name of Emily, a statue that would be able to store their memories of their loved ones, or erase those they wish to forget. The statue will be placed in Nobody's Respite, a shelter for anyone who is on hard times or otherwise, a place that is soon to be greatly expanded.`}</p>
                    <p>{`Nobody's Respite is the house of healing, learning and growth and is free to enter for those who would cause no trouble to other refuge seeking guests. We seek your support and donations to expand both our operation and services we are able to provide, just as Rosa Riendo is expanding and thriving. We are a house of struggle and second chances for those willing to grow.`}</p>
                    <p>{`After the announcement they join the crowd, continuing to perform and answering questions related to the statue, shelter and Emily.`}</p></>
            }, {
                char: { name: "Ceres Liontari" },
                content: <><p>{`"Ah, good Sir Parateretes, the pleasure is all mine."`}</p>
                    <p>{`Ceres says, pronouncing the man's name perfectly, though with a very interesting accent. He also attempts a slight but quirky bow.`}</p>
                    <p>{`"Do you perchance hail from Thessandreia? Your name would suggest so, no?"`}</p>
                    <p>{`He asks before changing the topic.`}</p>
                    <p>{`"Thian has told me much about you and your great escapades regarding mating. My love and I have been mating profusely, yet we hunger to know more about it."`}</p>
                    <p>{`He leans closer to Parateretes, before whispering.`}</p>
                    <p>{`"And believe us or not, but we are actually attempting to build a court ship. We've had some trouble gathering materials so far, but I'm sure a man as accomplished in mating as yourself has built many court ships in his life. We would be eager to learn from you, if only you would take us under your wing. Like they say in Thessandreia, I believe -Eàn êis philomathḗs, ései polumathḗs - If you are fond of learning, you will soon be full of learning."`}</p></>
            }, {
                char: { name: "Parateretes" },
                content: <><p>{`His ears perk up as you mention Thessandreia, but his expression turns serious.`}</p>
                    <p>{`"Nai, I am indeed from Thessandreia, do you know people there?"`}</p>
                    <p>{`You hear a hint of ... suspicion? fear? in his voice. He recoils with surprise for a moment as you mention mating.`}</p>
                    <p>{`"You've been mating profusely ..."`}</p>
                    <p>{`He slowly repeats words after you, with a mixture of confusion and insecurity.`}</p>
                    <p>{`"What exactly do you mean by 'mating'? and what do you mean by actually building courtship?"`}</p>
                    <p>{`The insecurity is more or less gone, but the confusion in his voice and on his face just keeps growing.`}</p>
                    <p>{`"I can probably tell you many things, but I think maybe it would be better if we meet some other day, when we have more time and privacy, just so we can come to the same page."`}</p>
                    <p>{`As you speak in celestial his face just radiates joy.`}</p>
                    <p>{`"O eutuhismenos anthrops einai autos pou ehei ena ugies soma, mia plousia psuhe kai mia kala morfomene fuse, The happy man is the one who has a healthy body, a wealthy soul and a well educated nature."`}</p>
                    <p>{`Celestial just pours out of him as a babbling brook.`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`(... no, don't, yes I will)`}</p>
                    <p>{`Remember Me overhears the conversation and chimes it, still joyfully shaking its maracas.`}</p>
                    <p>{`"Mating? I know a lot about mating, what do you want to know. Who are you? I am Remember Me, have you heard about Emily? She wanted to mate a lot, but she couldn't say the word, be sure when you want to mate, to let the other person know!"`}</p>
                    <p>{`[Guidence] on Parateretes.`}</p>
                    <p>{`[Bardic Inspiration]`}</p></>
            }, {
                char: { name: "Ceres Liontari" },
                content: <><p>{`"Sadly, I do not know many people from Thessandreia, though I've had some visitors from its many islands. I, myself, call the Kingdom of Alfriya my home."`}</p>
                    <p>{`Ceres explains.`}</p>
                    <p>{`"I was thought celestial from an early age as it used to be the language of the educated in my homeland. Sadly it is not used as often anymore ... but I would very much enjoy it if you told me more about the islands of Thessandreia. I've only managed to visit them in my dreams."`}</p>
                    <p>{`The half-elf become perplexed by Parateretes's confusion.`}</p>
                    <p>{`"Oh, are you pulling our legs? Of course you know what we mean by mating. Like ... reading books together ... holding hands ... hugging ..."`}</p>
                    <p>{`He sneakily looks to his left and right.`}</p>
                    <p>{`"Even kissing!"`}</p>
                    <p>{`He says and grins at Thian.`}</p>
                    <p>{`"Yes, it's true ... we've done it all! But I'm sure we are not nearly as experienced as you, great Sir."`}</p>
                    <p>{`While they are factually talking about mating, a familiar face joins their discussion.`}</p>
                    <p>{`"Oh, if it isn't my friend Remember Me! How wonderful to see you again. How have you been since our last mission? Did the gift the Fisherman gave you help at all?"`}</p>
                    <p>{`At that moment, he takes in the golem's change of appearance.`}</p>
                    <p>{`"My, my, you've grown since we last saw each other! And you say you know a lot about mating? Do tell, we want to know everything!"`}</p></>
            }, {
                char: { name: "Parateretes" },
                content: <><p>{`You can see the relief on Parateretes's face when you tell him you're not from Thessandreia and don't know people there. As you start talking about mating he tries to drink some water from his tankard and chokes on it, he spits it out, showering you in it when you mention kissing and that you've done it all.`}</p>
                    <p>{`"I'm sorry, didn't meant to do that."`}</p>
                    <p>{`He starts wiping you down.`}</p>
                    <p>{`"Reading books and kissing, done it all ... there is a lot we can talk about."`}</p>
                    <p>{`You hear perplexed disbelief in his voice. As Remeber Me joins the conversation he turns to him, takes a double take at the big stone person next to him and continues.`}</p>
                    <p>{`"Nai, consent is very important, yes."`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`Remember Me readily disregards any and all social cue it might have got as it hears about the opportunity to talk about Emily.`}</p>
                    <p>{`"Gather around, gather around folk, we are about to discuss mating here, come here, come here all who wish to learn more!"`}</p></>
            }, {
                char: { name: "Repko" },
                content: <><p>{`Repko readies the mood with its maracas čščščščščščščščščščščšč as people gather around.`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <>
                    <p>{`"Let me tell you a story ... about a girl ... and a boy. And the fate that never was ..."`}</p></>
            }, {
                char: { name: "Repko" },
                content: <>
                    <p>{`Maracas picks up the tempo!`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <>
                    <p>{`"Emily was a young girl, yet 80 years of age. Not too smart, not too much of a looker, blind, weak and sickly, yet working hard and old enough to know how ... how to polish the grass for that was a craft of a druid after all, to love the nature and when needed, for it to love you back."`}</p></>
            }, {
                char: { name: "Repko" },
                content: <><p>{`čščščščščščščš`}</p></>
            }, {
                char: { name: "Ivan" },
                content: <><p>{`Ivan of course, couldn't miss such an event, especially when there's alchohol. Even tho he dosen't own a 'fancy' outfit, he wears the most expensive, something he calls a teech fleese. It's unlike what you've seen before, as its not similar to any common outfits.`}</p>
                    <p>{`When he enters, you can see him looking around for any familiar faces. Spotting the mating circle, he approaches, listening to Remeber me talking about Emily.`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`"Yet her was not that of a lonely nature, for she required a company, both in spirit, in bad weather or god forbid unpleasant week as well as ... kiss and fuck and everything between, for elves are elves and elves do it plenty and with many, yet most of all, she required a common soul to keep her up, when everything was pressing her into dirt and under, she needed a kind word, a nice look and little care, a little more than strictly required and proper and maybe a bit and bit more, until nothing is left but the desire ..."`}</p></>
            }, {
                char: { name: "Repko" },
                content: <><p>{`ščščščščš`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`"Did she need a friend, why you ask, she needed a ton, craved in fact, yet in lack of those who would have guessed she wished or from time to time even lusted for ... a tiny bit more?"`}</p>
                    <p>{`"Surrounded with those who would wish her to fail, to crumble, to cry, she wanted a soul upon which she could rely ..."`}</p></>
            }, {
                char: { name: "Repko", token: 2 },
                content: <><p>{`ščščščščščščš`}</p></>
            }, {
                char: { name: "Parateretes" },
                content: <><p>{`Parateretes listens to Remember Mes song with great interest, a bit surprised at not so subtle talk, but nodding in agreement at the part about elves doing it often, winking back at Remember Me.`}</p></>
            }, {
                char: { name: "Ceres Lionari" },
                content: <><p>{`Ceres happily claps to the beat of the song.`}</p>
                    <p>{`"What does fuck mean?"`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`"So there was a boy, tad bit older, sure, but also mature, for not like her peers he said good day and good bye like he truly believed she deserved, and it wasn't much but for a starving soul as her's it was plenty ... to connect."`}</p>
                    <p>{`"Day passed day and she learned more and more and wanted to know and more, how others called him handsome, polite, kind, somewhat smart, how he had what she lacked, respect of others."`}</p>
                    <p>{`"So her heart grew warmer, almost warmer than the head when she heard him nearby, so overwhelmed to be her best to be flustered and stuttering and stumbling and spilling and nothing was right, even if he wouldn't mind and would laugh not in the way others did, she minded ... and started to imagine. Imagine herself weak, and unworthy and too shy ... to shy to say what laid on her mind ..."`}</p></>
            }, {
                char: { name: "Repko" },
                content: <><p>{`ščščščščščščš`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`Remember Me quickly with a different voice to Ceres.`}</p>
                    <p>{`"Getting there Sir Ceres. Getting there."`}</p></>
            }, {
                char: { name: "Parateretes" },
                content: <><p>{`Parateretes half turns to Ceres.`}</p>
                    <p>{`"A whole lot of fun, that you have yet to experience."`}</p>
                    <p>{`He tells him without turning away from the performance.`}</p></>
            }, {
                char: { name: "Ceres Lionari" },
                content: <><p>{`Ceres turns to Thian, still eagerly clapping and rocking around to the rhythm of Remember Me's song.`}</p>
                    <p>{`"You were right ... Sir Parateretes knows everything. He's like an all-knowing unicorn!"`}</p></>
            }, {
                char: { name: "Parateretes" },
                content: <><p>{`As Parateretes hears this he comments in celestial with a chuckle.`}</p>
                    <p>{`"O monofthalmos einai basilias pros ton tuflo."`}</p>
                    <p>{`(One eyed man is king to the blind one.)`}</p></>
            }, {
                char: { name: "Ceres Lionari" },
                content: <><p>{`Ceres smirks, though not completely understanding the implications Parateretes was making, and answers.`}</p>
                    <p>{`"Kai énas ánthropos me dýo mátia eínai aftokrátoras gia ekeínon pou échei máti.`}</p>
                    <p>{`(And a man with two eyes is emperor to the one with an eyepatch).`}</p></>
            }, {
                char: { name: "Parateretes" },
                content: <><p>{`Parateretes is for a moment stunned, then bursts out laughing. He puts his arm around Ceres's shoulder.`}</p>
                    <p>{`"We will have such an interesting conversation one day, can't wait filos mou."`}</p></>
            }, {
                char: { name: "Ceres Lionari" },
                content: <><p>{`Ceres glances back at Thian again and, with a wide smile on his face, mouths.`}</p>
                    <p>{`"Look, I made a new friend!"`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`Remember Me's voice grows quieter.`}</p>
                    <p>{`"And her mind ..."`}</p></>
            }, {
                char: { name: "Repko" },
                content: <><p>{`ščščščščščščš`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`"Library reading, moonwalk talks, and holding hands, and seeing stars in each other eyes and gentle touches and fingers crossing the hair and kisses and kissing and kissing and kissing...`}</p>
                    <p>{`Louder again.`}</p>
                    <p>{`"...and oh so much kissing, it is like there is something in her mouth to find, maybe gold? now his, now his face, behind, perky breasts and the tummy and ou my also there girl?, ok ... yes, yes, yes, so much kissing, too much kissing, too much hands all over her body, so she says "I want you inside." and he says "yes" or some other hot shit because thought are a bit busy and service is not available, call again later, so her clothes are gone, or not, whatever, he is inside with his pee pee sausage you have and I don't sir or if you are a bear a bone, or a duck a corkscrew or a hyena ... good luck sir, he is there and she is excited and so hot his fingers are melting all over her skin and they fuck and they fuck and they fuck and again and breathe each other's breath, now he is going a bull on her from behind and ou god, I am not sure what that is, but I call it a fuck, so they do it a lot and they do it often ... and stop, and cuddle, and kiss ... and do it again! ... in her mind."`}</p>
                    <p>{`Quieter again.`}</p></>
            }, {
                char: { name: "Repko" },
                content: <><p>{`ščščš`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`"So they fall in love and she calls him a family and because they are elves and elves do it plenty and do it a lot, maybe someone joins in, but only he is the one that remains ... in her lonely mind ... lonely mind that wanted to be desired ...`}</p></>
            }, {
                char: { name: "Repko" },
                content: <><p>{`ščščščščščš`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <>
                    <p>{`More she wishes, more distant she gets, with more lack comes more lust and she ... she is so so lonely ...`}</p></>
            }, {
                char: { name: "Repko" },
                content: <><p>{`ščščšč`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`So my good Sir Ceres, good Lady Thian, enjoy the day, for you are together, and in love, and night is young ... however the fuck you want with books or hands or mouths or whatever you have or were sold ... mate?`}</p></>
            }, {
                char: { name: "Repko" },
                content: <><p>{`ščščščščščščščščščščščščšč`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`Ladies and gentelmen or whatever you are, please, one applaud for Sir Ceres and Lady Thian!`}</p></>
            }, {
                char: { name: "Davric" },
                content: <><p>{`Davric starts applauding.`}</p>
                    <p>{`"Encore!"`}</p></>
            }, {
                char: { name: "Ceres Lionari" },
                content: <><p>{`Ceres applauds and whistles.`}</p>
                    <p>{`"What dialect is that, Remember Me? I am sad to admit I did not understand some of the words ..."`}</p>
                    <p>{`He thinks for a moment.`}</p>
                    <p>{`"Ah, but of course! It's not a dialect. It's poetic language, yes?"`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`(A little bit later same evening.)`}</p></>
            }, {
                char: { name: "Sr. Catalan" },
                content: <><p>{`Sr. Catalan getting increasingly more bored, eventually just stops reading puts back his journal into his jacket and book in his bag and sits up. After sitting up he starts walking around with a glass full of some ale in his hand and trying to find a familiar face.`}</p>
                    <p>{`After looking for some time he gives up the search and tries to go back to his seat only to find it taken. So after the quite underwhelming eveening he buys couple of shots of some strong alcohol drinks it then after having nothing to do goes to the dance floor and starts tapdancing.`}</p>
                    <p>{`It looks like he has had a bit too much to drink and is almost triping and falling over.`}</p>
                    <p>{`Though he manages to keep his balance.`}</p></>
            }, {
                char: { name: "Isabela" },
                content: <><p>{`Isabela looks over to the dancefloor to see Sr. Catalan busting some moves and chuckles.`}</p>
                    <p>{`"I believe that man has had a bit too much to drink by now."`}</p>
                    <p>{`Chair incident happens.`}</p>
                    <p>{`"Whoever or whatever you are, it is a day of celebration so feel free."`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`Remember Me notices Sir Catalan's stumbling.`}</p>
                    <p>{`"Huh, I knew this would happen. Sir, do you fancy a drink a bit more than you can handle?"`}</p></>
            }, {
                char: { name: "Sr. Catalan" },
                content: <><p>{`He looks at you first answering.`}</p>
                    <p>{`"No prepostrous, It's just that this is the first time I've ever tries this!"`}</p>
                    <p>{`He now turns his haze to you and stops dancing and comes closer.`}</p>
                    <p>{`"Mind if I take a seat?"`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`"No worry, no worry sir, every time is a first time to learn something new, here, to new experiences!"`}</p>
                    <p>{`[Lesser Restoration]`}</p></>
            }, {
                char: { name: "Sr. Catalan" },
                content: <><p>{`"You, do you wish to join us as well?"`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`"Good Sir, I would love to talk with you but I am but a mere entertainer. Of course if you would want to talk to me about my work, my mission or about Emily, I would be more than happy to oblige 🙂"`}</p>
                    <p>{`Remember Me continues to shake maracas and entertain nearby guests.`}</p></>
            }, {
                char: { name: "Sr. Catalan" },
                content: <><p>{`He quickly looks at you.`}</p>
                    <p>{`"Hmm Emily I'vew heard that name before ... oh yeah you've been talking about uh ... her? If it's interesting, tell me! I'm interested!"`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`"Something that would be of interest to you and you haven't heard about from me yet? Then ... what if I told you, I am working on something big. So big in fact, that Mechanus invested 1100 Gp into Nueva Sorte just so that they could study it?"`}</p></>
            }, {
                char: { name: "Sr. Catalan" },
                content: <><p>{`"Hmmm, what could it be Im intersted and I really should slow down with my drinking. Also if were talking buisness and we're celebrating after all, would you like a cigar."`}</p>
                    <p>{`He pulls out a box of expensive looking cigars puts one in his mouth and offer you one.`}</p>
                    <p>{`He lights the cigar in his mouth and starts smoking it.`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`"Hm, sorry, it might look as if I am breathing, but the process is slightly different for me than it is for you and I only learned it recently, so I can not smoke, but I appreciate the gesture 🙂"`}</p>
                    <p>{`"Indeed, they will be here in a few months, maybe half a year, maybe you would want to meet them? I am working on a device, a very special device, a device for which I am still collecting investments in fact. I was inspired by a dream ... or maybe a memory? For you see, my creator was a very ... worldly figure, and as an elf, a long-lived at that. So she knew quite a lot that more short-lived schools of craftsmanship ... might be too contained to explore."`}</p></>
            }, {
                char: { name: "Sr. Catalan" },
                content: <><p>{`He looks at you with a very intrigued face.`}</p>
                    <p>{`"Hmm that sounds nice ... I would like to meet them, but I do not have much cash with me ... Oh and would anyone else like a cigar if we're already celebrating..."`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`"Ah, too bad, too bad. Anyway, do drop by when I am finished, Nobody's Respite. Maybe you at least find something of interest, or maybe, you discover something of interest about yourself. It is my belief everyone needs to have a person such as Emily in their life and those who believe, try and try harder ... I believe she smiles upon those who would follow in her footsteps."`}</p></>
            }, {
                char: { name: "Sr. Catalan" },
                content: <><p>{`He looks at you and chuckles then frowns a little bit.`}</p>
                    <p>{`"I am not such an optimistic person as you my friend, I dont believe that there's anyone for me ..."`}</p>
                    <p>{`He thinks a little bit" but thats life and you got to enjoy what you have and try to live and maybe fight fate."`}</p>
                    <p>{`He looks back at you chuckling again`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`Remember Me smiles, kindly.`}</p>
                    <p>{`"Well, in that case, I do hope that fate is kind to you or that your struggle against bears fruit. Whichever it is, do not slack, fight for it with all you got, this is what Emily would do."`}</p>
                    <p>{`[Guidence]`}</p>
                    <p>{`It goes on to entertain the crowd, singing stories and praises in Emily's name as it does.`}</p></>
            }, {
                char: { name: "Sr. Catalan" },
                content: <><p>{`He thinks.`}</p>
                    <p>{`"I will try to do so I hope I find someone if love is not my thing so be it. I have greater things in plan."`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`To Isabela.`}</p>
                    <p>{`"Hi there! Your ... clan symbol, it looks ... familiar, did I met you somewhere before?"`}</p></>
            }, {
                char: { name: "Isabela" },
                content: <><p>{`"Well we did visit the plane of mechanus together. Your being also makes me feel some passing familiarity, but I can not place it."`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`"Guess so, we are far away from where I come from, so for there to be a person to know about Leshisel would be quite a coincidence ..."`}</p></>
            }, {
                char: { name: "Isabela" },
                content: <><p>{`"As they say coincidences happen. Do drop by my place sometime later for a more proper discussion when I am not in this state."`}</p>
                    <p>{`She gestures over herself.`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`Remember Me's expression slightly changes, trying to pierce trough the meaning of her words, yet feygol is far from being smart enough to figure conundrum in front of it on its own.`}</p>
                    <p>{`Maybe I will do exactly that when we have a chance. I believe they said that something is coming up, another trip trough the portal lake, but maybe after that, I would surly be interested to know more about your origins.`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`(A little bit later same evening.)`}</p></>
            }, {
                char: { name: "Minamoto" },
                content: <><p>{`He smiles.`}</p>
                    <p>{`"Tonight is a good night. Of joy and smiles. Now let us find those two, before they tosha-mono their evening meal."`}</p>
                    <p>{`As he once more looks around, actively seeking for Thian and Ceres.`}</p>
                    <p>{`D20 🎲: 8, Total: 18`}</p></>
            }, {
                char: { name: "Morwyn" },
                content: <><p>{`Morwyn chuckles and lets him go, looking around as well.`}</p>
                    <p>{`D20 🎲: 20, Total: 25`}</p></>
            }, {
                char: { name: "Thian" },
                content: <><p>{`(19 total)`}</p>
                    <p>{`As the two are having a conversation outside, Morwyn notices a slim shape climbing out of the window behind Minamoto's back. Thian more or less rolls out and then tries to sneak off into the caves.`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`Remember Me notices her stumbling and decides to use [Pass Without Trace] on her in order for her to at least have a chance with Minamoto around 👀.`}</p></>
            }, {
                char: { name: "Ceres Lionari" },
                content: <><p>{`D20 🎲: 5, Total: 7`}</p>
                    <p>{`Ceres is doing the same thing as Thian, just on the other side of the tavern and far less sneakily as he tries to promote liquor to every other person he sees.`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`(No Pass for you, mister matey 👀, let the world see 🤘)`}</p></>
            }, {
                char: { name: "Thian" },
                content: <><p>{`(wohooo that makes Thian's stealth a 29, she is the shadow xD)`}</p></>
            }, {
                char: { name: "Ceres Lionari" },
                content: <><p>{`(I will not forget this betrayal 🤣)`}</p>
                    <p>{`(Who am I kidding, of course I will, I'm dead drunk.)`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`(Hey, I am building a device to store and display memories, you can watch later 👀)`}</p></>
            }, {
                char: { name: "Ceres Lionari" },
                content: <><p>{`(Oh, Ceres is very interested in memories in general, you'll see soon enough 👀)`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`(Well, the future I am waiting for is when you have kids and they ask this magic device.`}</p>
                    <p>{`"Tell us a bit about our father, what was he like?")`}</p>
                    <p>{`(I think I am starting to understand Gen Z.)`}</p></>
            }, {
                char: { name: "Ceres Lionari" },
                content: <><p>{`(For the love of god, don't show them this night.)`}</p></>
            }, {
                char: { name: "Sr. Catalan" },
                content: <><p>{`After some looking around he finds Minamoto and Morwyn. He decides to come to them and asks.`}</p>
                    <p>{`"Where have Thian and Ceres gone?"`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`(Mislim da je Morwyn šla v klet se napiti na rumu, tako da je ne boš našel xD)`}</p></>
            }, {
                char: { name: "Sr. Catalan" },
                content: <><p>{`(Pol kje je Minamoto je on se vedno tuki? I have almost no idea what's happening.)`}</p>
                    <p>{`(Kaj ti delaš, si se vedno tuki al ...)`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`(Načeloma, life of the party, špilam ropotulje z Repkom, skrbim da se gostje zabavanjo 🙂)`}</p></>
            }, {
                char: { name: "Rua" },
                content: <><p>{`After all that Rua goes around some more, chats with some people, and gives feathers to Klemzy's ex wife (a very soft, faint, almost translucent feather), Bob (as a proper meeting gift and a thank you for the party, it's a very leafy green color hehe), to Drahnari (Pyro the Fire Warlock) (colors go from light yellow all to red, like a flame, and it almost looks like one when you hold it in the wind and it moves), and of course to Remember Me (a little mossy green one for you da si ga daš zraven na armor ki ga maš oblečenega, and you can pick one for Emily that you think she would like and we can make plans to go bring it to the pond you're creating)`}</p>
                    <p>{`As for Coco she asks him if he would even like one since he has so many of his own already, and she isn't sure how appropriate that would be 😅`}</p>
                    <p>{`If anyone else would like to talk to her that she doesn't know personally yet she's open to that and tries to gift a fitting feather to everyone that she meets!`}</p>
                    <p>{`Then she retires for the evening, with the empty bag 🪶`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`🌱`}</p>
                    <p>{`Remember Me accepts the gift for himself and [Druidcraft] later it is already a natural part of its construction, yet pauses before accepting the gift for Emily.`}</p>
                    <p>{`"I thank you for the offer, but may I make a different kind of a suggestion?"`}</p>
                    <p>{`"Some of the plants at the new Nobody's Respite are still yet to be chosen."`}</p>
                    <p>{`"Some are magical, some are not, some ... are to be connected to the pool itself."`}</p>
                    <p>{`"Most of the structurally relevant ones are those whose stalks are woody, so there is still plenty of room for more delicate choices."`}</p>
                    <p>{`"Part of the garden closest to her will be made from Sweet Alyssum, as she would prefer, but the rest ..."`}</p>
                    <p>{`"Maybe you would wish to make suggestions?"`}</p>
                    <p>{`"What plants should grow over the pond, next to it, maybe on columns or in the branches?"`}</p>
                    <p>{`"As I remember, you contributed a generous sum and maybe you would like to swim among particular flora?"`}</p>
                    <p>{`Remember Me lowers its voice.`}</p>
                    <p>{`"And even if not ... why don't you wait a month, maybe a bit more and give it to her yourself?"`}</p>
                    <p>{`"I think she would prefer to meet you in person, instead of me being the one bringing your gifts back to her 🙂"`}</p></>
            }]
        }, {
            title: "While Metal Is Hot",
            shortDesc: "Remember Me načrtuje skulpturo od Emily.",
            tags: ["depression", "guilt"],
            chars: ["Remember Me", "Parateretes"],
            contents: [{
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`Remember Me tries to find Fargrim, legendary blacksmith, or so it was told. It is wondering around craftsmen's district, looking for the telltale signs of a smithy.`}</p></>
            }, {
                char: { name: "Pripovedovalec" },
                content: <><p>{`You find the shop, artisans hole, a workshop. The hammers and heat swirl the air and a strong smell of ironworks tickles what Remember Me would have for smelling.`}</p></>
            }, {
                char: { name: "Parateretes" },
                content: <><p>{`You saunter up to an L shaped building in the old part of Rosa Riendo. The longer part of the building has currently open ... windows? walls? You see inside a a couple of artisans crafting, amongst them a young gnome and youngish redheaded dwarf woman.`}</p>
                    <p>{`In front of the shorter part on the porch, you see an elderly dwarf with grey hair and beard, interspersed with some darker strands, who just said goodbye to captain Minamoto and sat down to light a pipe. And it is weird, you don't feel any breeze, but windchimes near the old dwarf are gently swinging. You heard Minamoto use the name Fargrim in his goodbye, before he went in the other direction.`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`[Message]`}</p>
                    <p>{`Remember Me points at the dwarf.`}</p>
                    <p>{`"Hi, would you happen to be a blacksmith Fargrim?"`}</p></>
            }, {
                char: { name: "Parateretes" },
                content: <><p>{`He looks at you with curiosoty and a bit of awe.`}</p>
                    <p>{`"Haha, yes I am Fargrim, and i can also do blacksmithing. What can I help you with good person?"`}</p>
                    <p>{`His chuckle sounds like a rolling thunder and the smoke from his pipe twirls around him, yet you still don't feel any wind.`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`"Well, hello then. I am Remember Me, feygol made by Emily, and this is Repko. It shows a happy go lucky turnip on its shoulder.`}</p></>
            }, {
                char: { name: "Repko" },
                content: <><p>{`"Uiiiiiiiiii!"`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`"I come here as Oaksplit and Minamoto recommended you as a blacksmith of great renown. I happened upon a great amount of metal and I thought that learning the way of the metalcraft would give me some ideas what to do with it. A stranger also told me he would need something crafted, if I were to be able, as there is a great lack of blacksmiths around here, so now I am trying to learn the way of yours and I was hoping, if Sir Fargrim would be willing to teach me about his craft."`}</p></>
            }, {
                char: { name: "Parateretes" },
                content: <><p>{`"Well well, another pupil. I will gladly teach you smithing, Remember Me. I would also love to meet Emily, the one who created you, for I have a lot of questions for her."`}</p>
                    <p>{`He speaks to you as he is circling you.`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`Remember Me observes the craftsman and chooses its words carefully.`}</p>
                    <p>{`"She is not around anymore, for she gave her life in the pursuit of her craft. That said, I do happen to have many memories of her as well and it is my ongoing intent to tell people about her and her work, so maybe we could some time talk about her or maybe you could drop at our humble house of healing, persevering and remembering. I also have works about her, or I will, because I am still student of art, still learning how to paint, dance, write and sing about her. Maybe you would be even willing to donate some of your fortune in the goals myself strives for? Making sure everyone has a chance to grow, somewhere to sleep, something to eat, somewhere to learn, somewhere to heal, someone to talk to, somewhere where someone would lend them a hand, just like Emily would have benefited from, for she was blind, sickly and untalented, yet more than willing to improve at any chance she got. And as you can see, she did managed to create me."`}</p></>
            }, {
                char: { name: "Parateretes" },
                content: <><p>{`"Well I knew she was a great crafter just by seeing you, she had great talent I would say, even more so because she crafted you while being blind and sickly."`}</p>
                    <p>{`His deep voice boomig as he speaks to you.`}</p>
                    <p>{`"I will be glad to listen what you have to say about her. But first let us learn some things about forging."`}</p>
                    <p>{`He gestures you to sit down next to him and starts explaining basic principles of metal crafting. Later he takes you in to the workshop to a forge and shows you the blacksmithing tools. After that he announces that your lession for the day is done and asks you to tell him about Emily on the porch in front of the house. After about an hour or so, he stops you and bids you good night, as he heads inside to rest.`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`Remember Me follows his lead, carefully observing everything he does. It find is intriguing that while great many things are new, for it can not remember how anything looks, he does kind of 'remember' many of the tools, for Emily was using at least some of them as she was crafting its first, at that time mostly mechanical, body. While experience is new, it is still able to remember the feel of the hammer and the swings of the hammer. Remember Me probably won't be creating metalforged anytime soon, but at least it is able to have an idea of what it is trying to do. There is magic in the art of metalcraft and if it could only make the metal sing, sing with it, it remembers that would sound wonderful.`}</p>
                    <p>{`Remember Me retreats, but outside, outside of the city, for there is still something it has to do before it returns to the warehouse, till then, it awaits the next morning.`}</p></>
            }, {
                char: { name: "Parateretes" },
                content: <><p>{`In following days, as you return to Fargrims workshop, he teaches you how to start a proper forge fire, heat different types of metal and you start working on different smaller projects. After each learning session he sits down with you and with great interest listens to your tale of Emily for about an hour, before retiring to rest.`}</p>
                    <p>{`(You can tell me if you want anything specific / special roleplayed out.)`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`(Hm ... @Samo? Imam en projekt v mislih, samo nisem prepričan če bi ga lahko že tukaj zagnal, glede na to, da načeloma še nisem dobil proficiency, pač pa delam na njej. Bi bilo ok, če se projekt vsaj začne kot del treninga? Pa verjetno bi moral s teboj zglancati podrobnosti, ker bo vplivalo na koliko DT, sredstev itn. gre vanj.)`}</p>
                    <p>{`(Zelo na kratko, gre se za ribnik-skulpturo iz kovine, ki vase shrani spomine, nato pa presodi (religious object under Emily's influence) komu do tedaj zbrane spomine deli nazaj, ima pa tudi opcijo, da spomine izbriše (vase), recimo začasno, če so za nekoga pretežki. Mental healing item + learning skratka, recimo ljudje bi se verjetno lahko na takšen način tudi učili drug od drugega, karkoli pač že naprava za shranjevanje, izbris in deljenje spominov omogoča. Predstavljam si, da bi bilo veliko povpraševanja po napravi, ki ti pomaga žalovati, ti čez par generacij da vpogled v prejšnje generacije, recimo staršev, ali ti omogoča da se učiš na izkušnjah predhodnikov.)`}</p>
                    <p>{`(Nekoliko mi deluje kot utelešenje mojega poslanstva, le da manj osredotočeno name, ker ni opredelitve do Emily.)`}</p></>
            }, {
                char: { name: "Pripovedovalec" },
                content: <><p>{`(To bi se čisto dalo! Se pa na to osredotoči bolj za takrat, ko boš že imel proficiency. Razen če bi za template metal že zdaj.)`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`(Jup, to je ideja, da se v bistvu skupaj z njim izdela template, glede na to da je že tukaj in mi lahko pomaga, torej učim se od najboljših.)`}</p></>
            }, {
                char: { name: "Pripovedovalec" },
                content: <><p>{`(Well then, that would be a big item - a statue? With a pond? Pomoje bi item sam nosu nek temporary Modify Memory spell with storing properties ... Template DC 20 for something like this. This is not a fighting item, but it is still pretty powerful, tko da je base cena zanj 800gp in 45 checkov.)`}</p></>
            }, {
                char: { name: "Parateretes", token: 2 },
                content: <><p>{`(Can Fargrim assist them with template check and give them advantage / bonus?)`}</p></>
            }, {
                char: { name: "Pripovedovalec" },
                content: <><p>{`(Can, pol je +2)`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`(Mislim da je stvar nekoliko ... posebna, ker običajno, kolikor sem si bral, rollaš predvsem za ceno, ideja je zbiti ceno, vendar jaz sem izhodiščno rekel, da je cena inputa višja od ponujene cene in da sem pripravljen vložiti še več za več efektov, torej 700 (metal) +50 (wood) +100 (pearls) +50 (Potion) +100 (common magic item minimum price) +? = 1000 Gp +?) (torej bi se ne rollalo za ceno, pač pa za efekte?)`}</p></>
            }, {
                char: { name: "Parateretese" },
                content: <><p>{`(We will continue the RP, but I'm sure you'll attain the rank of master blacksmith that's why Fargrim introduced you as such at the party, this is happening before the party.)`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`(Kul, bom odgovoril kasneje, trenutno sem se ravno zbudil in sem še motoglav)`}</p>
                    <p>{`(Ok, torej, kaj mečem? V svoje dobro bi navedel, da imam razen po novem proficiency (or tega da Parateretes pomaga, not sure?) na razpolago še: Neomejen Guidence (anything) Neomejen Mending (metal?) Neomejen DruidCraft (wood))`}</p>
                    <p>{`(Na dan: 3x Protection From Energy or 3x Plant Growth or 6x Enhance Ability (6h) or 6x Heat Metal (6 min).)`}</p></>
            }, {
                char: { name: "Parateretes" },
                content: <><p>{`(Kakšne maš pa tool proficiencies?)`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`(S čim se pa meče? Torej, moj prof bonus je ... +3, tako da zelo odvisno od tega s čim mečem.)`}</p></>
            }, {
                char: { name: "Parateretes" },
                content: <><p>{`(Katera orodja znaš uporabljat, če je kakšno ki bi lahko blo primerno za načrtovanje tega kar gradiš, potem dodaš proficiency bonus, drugače pa vržeš d20, dodaš INT / WIS / CHA modifier, si pač sam izbereš in ker ti Fargrim pomaga še +2.)`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`(Mmm, imam Herbalist Tools prof ter Smith's Tools prof, če uporabim kot Bard svoj Cha je +4, če dodam tvojo pomoč je +2, je +9.)`}</p>
                    <p>{`(Zadnjič sem uspel od Samota dobiti, da je vsaj še Guidence, glede na to da je stalno v efektu, pa bil sem še dokaj nizko Druid (max 3 h), mi ni dovolil Enhance Abiliti, sem upal da bi bilo tokrat mogoče narediti ali ali (oboje koncentration), ali Guidence, ali Ability.)`}</p></>
            }, {
                char: { name: "Parateretes" },
                content: <><p>{`(Kar je drugih bonusov moraš res @Samo vprašati, vem da se da neke stvari uporablati, ampak so malo drgač omejitve kot med samo igro / bojem.)`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`(Bdw, razmišljal sem, da bi v prihodnosti ko bo čas dobil tudi Painter's Tools prof (slikal portrete). Je kdo na otoku tega vešč?)`}</p></>
            }, {
                char: { name: "Parateretes" },
                content: <><p>{`(Če ne kšn PC ali imenovan NPC, si pa neko osebo izmisliš, vsaj v prvi sezoni je tko delval.)`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`(Sure sure, bolj zato če lahko denar vržem v kakšnega igralca, namesto da se izgubi v ekonomijo.)`}</p></>
            }, {
                char: { name: "Parateretes" },
                content: <><p>{`(To je pohvalno in spodbujano, najbolje da vprašaš v player-chat če je kdo od trenutnih igralcev usposobljen v tem.`}</p></>
            }, {
                char: { name: "Pripovedovalec" },
                content: <><p>{`(Kar se tiče vseh teh bonusov mamo 1x na downtime, lahko d4 dodatno za rolat (to je za vse enako - spellcasterje or not).)`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`Kul ... upajmo da gre bolje kot zadnjič.`}</p>
                    <p>{`D20 🎲: 19, Total: 19`}</p>
                    <p>{`(My God!)`}</p>
                    <p>{`(It is the opposite of the last time.)`}</p>
                    <p>{`Fiju.`}</p>
                    <p>{`Ok, še ...`}</p>
                    <p>{`D4 🎲: 3, Total: 3`}</p>
                    <p>{`(Emily is smiling upon me.)`}</p>
                    <p>{`(Torej ... 19 + 3 + 9 = 31?)`}</p>
                    <p>{`(Jup, 31.)`}</p></>
            }, {
                char: { name: "Parateretes" },
                content: <><p>{`(Ne najdem threada kjer zbiraš donacije, Parateretes donira 50Gp.)`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`(Uh, @👻player-chat, kul, si zabeležim Samota ravno prepričujem, da odobri 5. funkcijo (trenutno je odobril 4))`}</p>
                    <p>{`(Thread bom naredil, ko bo jasno kaj se dogaja, tako da vem kaj opisati, do sedaj je bilo preveč reči v zraku, pa sem bil živčen to storiti.)`}</p></>
            }, {
                char: { name: "Parateretes" },
                content: <><p>{`(Ah, gledov po ostalih vseh.)`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`(Ok, torej, sedaj bom zapravil 2 DT meta za izdelavo statue, pa na prvega bom dal še 1d4.)`}</p>
                    <p>{`(Relevantni stati so +4 od CHA, +3 od prof, +1 od blessing, +1 od refugees, tako da ... +9. Verjetno je to vse kar lahko storim.)`}</p>
                    <p>{`(Lets go ...)`}</p>
                    <p>{`D20 🎲: 15 + D4 🎲: 1 + 9, Total: 25`}</p>
                    <p>{`(Ok, not bad, not bad at all.)`}</p>
                    <p>{`(In še drugi ...)`}</p>
                    <p>{`D20 🎲: 17 + 9, Total: 26`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`(Voa, ... to je že več kot pol.)`}</p>
                    <p>{`(Nice, nice, nice, to zelo sprosti "the worst case scenario:")`}</p>
                    <p>{`(Bom posodobil napredek, pa ... ko bom imel več energije bom še nekaj napisal tja ... danes sem popolnoma uničen, cel dan ljubljana, I feel like falling together is the correct decision to make.)`}</p></>
            }, {
                char: { name: "Pripovedovalec" },
                content: <><p>{`(Kk, nice - gradnja gre izredno hitro. Bo tud Oaksplit pršu kej pogledat v naslednjih dneh.)`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`(Hoj, bom porabil 2 DT, potrebujem še 2-3 DT, odvisno od kocke.)`}</p>
                    <p>{`(Če se prav spomnim, 4 CHA + 3 prof + 1 + 1 od island efektov, tako da +9 skupno, pa na prvega dam še 1d4.)`}</p>
                    <p>{`D20 🎲: 4 + D4 🎲: 1 + 9, Total: 14`}</p>
                    <p>{`(Hm, precej manj sreče kot zadnjič, to je skupaj ... 65.)`}</p>
                    <p>{`(Ok, še drugi.)`}</p>
                    <p>{`D20 🎲: 3 + 9, Total: 12`}</p>
                    <p>{`(Hm, to je skupaj ... 77.)`}</p></>
            }, {
                char: { name: "Parateretes" },
                content: <><p>{`(Zdej v obeh metih skupaj toliko kot zadnjič v enem.)`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`(True, true, to spremeni, da bosta morda potrebna še 2 DT.)`}</p>
                    <p>{`(Hm, manjka 23, kar bi pomenilo, da se potrebuje naslednjič če je min od 1d4 1 ter prišteje se 9 ... 10-13 na kocki.)`}</p></>
            }, {
                char: { name: "Remember Me" },
                content: <><p>{`(Zaradi zelo stresnega dogodka med igro, pritiska iz strani službe, izgubi zaupanja v skupino in nesposobnosti udeležbe na naslednjem dogodku sem zapustil skupino (razlog za padec zaupanja je bil ... želel sem si, da bi se zame potrudili zagotoviti mesto v odpravi, kakor sem se večkrat v podobni situaciji potrudil mesto zagotoviti za ostale ... zelo osamljenega sem se počutil in nato nisem mogel sodelovati na ključnem dogodku). Ko sem se odločil da Remember Me umre, mi je zelo odleglo. Končno sem vedel kaj hočem, rešitev proti kateri lahko delam, vendar moral sem končati čim hitreje, ker nisem mogel več razmišljati o ničemer razen bolečini in osami, sedaj nisem mogel več razmišljati o ničemer razen koncu. Zato sem nariral, da Remember Me delo zaključi medtem ko so ostali na misijah. Ni bilo legalno in ne vem če je GM kasneje mojo naracijo odobril, vendar ... nisem mogel več. Uničevalo me je in služba mi je vse bolj pihala za vrat. Edino žal mi je, da nisem prosil GMa za dovoljenje, upal sem da bo razumel, da je zaključek dela na skulpturi v interesu celotne skupine, saj so vsi prispevali vanjo in ker je bila moja poslednja želja. Želel sem si ostati, vendar enostavno nisem mogel. Preveč sem bil investiran. Uničevalo me je. Kot Remember Me je tudi mene razžrlo, preden sem uspel izpolniti svoje poslanstvo, narediti Emily za boginjo. Moral sem končati njegovo zgodbo, da sem bil sposoben ponovno razmišljati o čemerkoli drugem, namesto cele dni načrtovati kaj še lahko naredim za skupino, da izboljšam svoje možnosti za Emily. Upam da živi naprej v zgrajenem artefaktu in najde svojo srečo v skupini, neodvisno od mene. In upam, da sem jo zapustil v dobrih rokah.)`}</p></>
            }]
        }, {
            title: "Pond of Remembrance - Emily's Pond 🫗",
            shortDesc: "Opis magičnega artefakta, gradnje in njegovih efektov.",
            tags: ["depression", "guilt"],
            chars: ["Remember Me"],
            contents: [{
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`Donations Plaque (can be found on the shelter's wall behing the pond) (numbers in Gp):`}</p>
                    <p>{`- 700 Elemetal (Remember Me)`}</p>
                    <p>{`- 200 Elemetal (Rua)`}</p>
                    <p>{`- 200 2x Pearl enriched with Healing Potion (Remember Me)`}</p>
                    <p>{`- 150 Brass Metal (Minamoto)`}</p>
                    <p>{`- 150 Cold Metal (Minamoto)`}</p>
                    <p>{`- 100 Bottomless Mud Pouch (Remember Me)`}</p>
                    <p>{`- 50 Pandemonium Wood (Remember Me)`}</p>
                    <p>{`- 50 Pandemonium Wood (Ivan)`}</p>
                    <p>{`- 50 Shadewood (Morwyn)`}</p>
                    <p>{`- 150 coin (Remember Me)`}</p>
                    <p>{`- 100 coin (Bob)`}</p>
                    <p>{`- 100 coin (Isabela)`}</p>
                    <p>{`- 50 coin (Ivan)`}</p>
                    <p>{`- 50 coin (Parateretes)`}</p>
                    <p>{`Effects Permanent:`}</p>
                    <p>{`•	+1 Proficiency on use of Smith's Tools`}</p>
                    <p>{`Fargrim, master artisan and wind spirit of Turbulenta is spreading its knowledge to new generations, aided with the blessing of Emily. WARNING - NOT IN EFFECT YET - EFFECTIVE UPON PROJECT COMPLETION!`}</p>
                    <p>{`•	Magic item can store, share or erase memories.`}</p>
                    <p>{`•	Limited self-cleaning and regrowth, water termoregulation`}</p>
                    <p>{`•	Magic item is semi-conscious, it might reply in its own way or refuse to react`}</p>
                    <p>{`Adventure: WARNING - NOT IN EFFECT YET - EFFECTIVE UPON PROJECT COMPLETION!`}</p>
                    <p>{`•	1 Advantage on Status Check (Poisoned, Sleep, Prone, Diseased etc.)`}</p>
                    <p>{`Blessed by the statue, on success one feels a presence, encouraging them to prevail against the odds.`}</p>
                    <p>{`•	Advantage on History or Survival Checks`}</p>
                    <p>{`Blessed by the statue, you get a vision of a memory of someone else (if no one in particular, Emily), on success you manage to interpret it to your benefit or memory is relevant enough to your cause to be useful to you.`}</p>
                    <p>{`•	Advantage on Nature or Medicine Checks`}</p>
                    <p>{`Blessed by the statue, you get a vision of a memory of someone else (if no one in particular, Emily), on success you manage to interpret it to your benefit or memory is relevant enough to your cause to be useful to you.`}</p>
                    <p>{`•	Guidance (no concentration, 12 h time after adventure start limit, does not stack)`}</p>
                    <p>{`Seek the counsel of the statue, it shows you a stored memory that you may or may not understand, but it will guide you when you recall it again. If you happen to have a better exchange of a blessing in mind, you may use that.`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`Inside of the shelter, still under construction, something more seems to be going on than meets the eye. There is a rumor that Mechanus invested 1000 Gp into construction, only to be able to study a shelter or maybe a shrine? It does not make sense why such a powerful city would be interested in the unfortunate of Nueva Sorte. Something is going on for sure, but nothing is known for certain yet.`}</p></>
            }, {
                char: { name: "Rmemeber Me", token: 2 },
                content: <><p>{`With the city officially open, Remember Me doubles the amount of work it is able to invest into the project.`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`First comes the grandest if simplest part of the project, a large circular pond with an elemetal base that traces the edge of the room, only leaving enough space for a line of especially rich earth and yet dead wooden branches, tracing both sides of the pond.`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`Most of the remaining floor area is covered with a thick carpet or moss. The entire area was not yet covered by a roof, so the sun and the moon can still be observed freely at any cloudless part of the day. The room has 3 layers.`}</p>
                    <p>{`•	Top one, where quartz pedestal is located, connected to the lower area with a gentle steps, fully overgrown with moss.`}</p>
                    <p>{`•	On the sides, waterfall is disconnecting the top pool from the rest of the pond.`}</p>
                    <p>{`•	Middle area is connected to the lower one with steps on both sides and a gentle slope on the middle. It has most of the patches of dirt, inside of which nothing but weeds grow yet.`}</p>
                    <p>{`•	Middle pond is connected to the lower one with a series of gentle waterfalls, that are along upper waterfalls the reason why the sound of the water is all-present.`}</p>
                    <p>{`•	Lower area is least interesting and there seems to be no obvious way how you would get to it (yet) without getting yourself wet by crossing 2 m wide and at the deepest part 1,5 m deep metal pool with rough but safe bottom texture.`}</p>
                    <p>{`Not only the roof, doors are also not installed yet, even stranger, instead of sturdy structure, it seems that dead wood is being planted here the thickest on both sides without yet obvious function it could serve. (Also, pearls have finished soaking in the Healing Potions, just saying to track progression of different parts of a project.) Pool area is through the day already freely accessible for those who would not damage overall "work in progress" and in limited numbers as some structures are not yet sturdy enough to support more than a few people at the time. (you can take a dip or swim) Water is already drinkable, no special properties, but it replenishes itself from elemetal, metal from elemental plane of water, so you will hardly find more waterly water. Water surface is already self-regulating and has limited self-cleaning property. No temperature regulation yet, it is just a metal, magical-ish pool.`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`(Pond bom tako opisal med dt in že tistega bo veliko, tako da verjetno je ok, če že sedaj predstavim kaj je narejeno na kulturni hiši ... želim imeti tole reč za šeranje orkestralne glasbe ipd., stvari ki bi se igrale v njej)`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`On in last month or so, finishing touches were made on Emily's House of Culture, that is (for Remember Me) the side building to Pond of Remembrance or Nobody's Faro de Luz Rest it is working on. If you enter from the side facing the west (on the city map), trough a wide main entrance, you enter a wide hallway full of paintings and sculptures of the patrons, many of them not yet dedicated to Emily, even if some are, given that Remember Me is preoccupied with working on the heart of the building at the moment. You can go down to the basement level where you can leave your stuff at dedicated and manned wardrobe or buy snacks and refreshments at for this purpose 2 dedicated stores. Once you return, you can use one of 3 lower entrances leading into the enormous main hall and take one of many dedicated seats or go to the stage, mostly covered by the curtain. Exploring the stage, you notice it is quite big, but among curtains and sets you can go into more crammed backstage, where many useful tools for any occasion can be found. Continue forward left or right trough sound-isolated doors and you will come into the dinning hall of one of 2 dormatories, one of those of more orderly nature and one of those with more chaotic tendencies. Each resident can choose where to live (or if causing troubles will be placed into another dormitory before removal) so residents are least likely to step on each other's nerves given their lifestyle. Each dormitory has their kitchen and main Slime Closets are meant for both patrons and visitors of the House of Culture. Stairs around here lead down, where extensive storage can be found. Dormitories have mostly doubled storage spaces due to their divergent tastes, but they do share storage space for some of the more dedicated equipment as they are in charge of maintaining house as a whole. Going back, if we go past SCs, we can go on the last part of lower level we haven't visited yet.`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`Here dedicated equipment for the house is stored, sets, props, instruments, everything that might be needed on the stage if need presents itself. Here are also guest rooms, front security that guards the equipment as well as waiting room for performers, where they can take a break, wait for their time, apply makeup or dress themselves in large dedicated theater wardrobe. If we use the same stairs we go up to the 1. floor, where there are common balcony seats as well as some dedicated ones for guests that might require more personal space, as well as another gallery, this one with handpicked selection of art. If the lower one presented work of patrons in general, this one is more curated one. Where the entrance would be on the lower floor, here a giant glass panel is located, making letting guests have a clear view on the coming and going visitors as well as outer wall of the city. Back to the dormitories, we pass manager's office for each dorm-wing and find where most of the patrons rest. There are individual rooms as well as more crammed common ones. There is also the door from each side that leads directly into Nobody's Respite, but it is closed until area around the shrine is more secure. If we go to the highest floor we can find small general storage, as well as many SCs and a place where patrons can bath or clean their tools. Close to here is another gallery, where unfinished-finished works can be presented (or temporary stored), but also where we can access 6 crafting departments, each filled with dedicated tools for creation of works of art. The hope of Remember Me was, that due to high-lvl of production, artists from across the island will come here to perform, work, socialize and share thus their knowledge with less proficient patrons of the shelter, so transfer of know-how can take place. There is also relatively small and more isolated library, segmented into 2 main sections, where knowledge can be stored and and accessed if need be.`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`(Tako, in še razlog zakaj sem pospešil objavo, sedaj lahko naredim tole)`}</p>
                    <p>{`Opening Play`}</p>
                    <iframe width="252" height="189" src="https://www.youtube.com/embed/mauxvpOFth8"></iframe></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`(day 0)`}</p>
                    <iframe width="252" height="189" src="https://www.youtube.com/embed/ZneqpcVzOWs"></iframe></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`Progress on the Nobody's Respite after last mission slowed down quite considerably as Remember Me is still troubled by the results of its last mission. Also, its new and expanding responsibilities as a still developing dormitory supervisor as well as main theater sponsor, training new generation of artists of all sorts as well as general job search and inspections took a lot more time than intended. Still, progress is noticeable. Pond is mostly installed and is now engraved with barely visible but delicate shapes that somewhat resemble druidic language, but shaped into pictures and stories. Most of it thou is covered by seemingly forever regenerating mud that covers most of the pool's bottom, giving it more of a feel of a pond. Some smaller species of fish, insects, snakes, lizards, spiders, amphibians and water plants can sometimes be spotted around the pond, swimming, hiding in mud, moss, rocks placed in the shapes of pathways or plants's branches, giving the room alive feeling. Even more, plants all around the place have grow in miraculous time and indeed give a feeling that this place is somehow alive ... and aware. Plants at the door will sometime block or open the path, seemingly at random, needing a druid to correct them. Central area can now be accessed by a thick bridge and railings made out of living plants ... but sometimes too living and wild as they might decide to open under the guest and let them fall into water. Many more branches form a thick arch all around the pool, continuing upwards to form a terrace and many handy stairs, but again, at any time they might decide to simply stop providing support, so the area is still closed for residents of dormitory, even as it is now connected to it by 2 gates where terraces are. Previous patches of dirt have grown into many individual plants, intertwined into pillars, growing into each other and starting to take the shape of the living canopy, even if the roof is still fully opened to the sky.`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`Area in general is starting to take shape, lower part dedicated to visitors that simply want some water or prayer, terraces for socializing, medium part for healing, even if everything is still limited due to ongoing development and in general "wild" nature of this place. That said, probably most mysterious is highest and now enclosed part of the pond, divided from the rest of the place by the thick layer of wooden living plants, overgrown by a carpet of sweet alyssum, inner space only accessible trough a curtain of softer, green flowery ones on the top of flowery stairs (that can at druid's command turn into a ramp). There, a quartz platform as well as side-stairs into the pond can be found, but ... it feels empty. As if something is still missing. Something important. Place is still growing, details still need to be polished and something is still being worked on, but for now, the pond is fully operational (without thermal regulation) for those that are not afraid to be from time to time surprised by a overly willful bundle of plants by ending more wet or stuck as expected (I decided Remember Me's body will not evolve again until the pond is finished)`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`(day 1)`}</p>
                    <iframe width="252" height="189" src="https://www.youtube.com/embed/wVnxsjAIfWg"></iframe></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`Tako, ni ne vem kaj, vendar za par ur dela bo vredu Nobody's Respite - Flowery Arch Over the Pond`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`(day 2)`}</p>
                    <iframe width="252" height="189" src="https://www.youtube.com/embed/TFRhVq4i4bA"></iframe></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`(day 2)`}</p>
                    <p>{`Tako, sorry da je vzelo tako dolgo, vendar za kvaliteto je pač potrebno vložiti več časa x) Druga slika kaže kaj je tam, če večine ne zakrijejo vrata xD Tako izgleda torej Nobody's Respite od zunaj pri vhodu. Bela reč je Sladki grobelnik (roža).`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`Remember Me finishes statue of Emily. She is very detailed, down to the pore, it is clear a lot of work was put into it. She is dressed in druidic clothes Remember Me is from time to time seen wearing, but more properly made. Her arms are from cold metal and brass metal , outstretched down as if channeling something, while she is squatting with one leg lower, destabilizing the whole structure. It is clear it is meant to be placed on some kind of a pedestal, so its leg could hang down from it. The most curious part of the structure are her blind eyes, made out of white pearls, soaked with healing magic. It is almost done. After months and months of work, it is almost over. Just a few more finishing touches and the Pond will be complete. But before that happens ... Remember Me has an appointment.`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`(day 3)`}</p>
                    <iframe width="252" height="189" src="https://www.youtube.com/embed/7dbwwu7ydhM"></iframe></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`(day 4)`}</p>
                    <iframe width="252" height="189" src="https://www.youtube.com/embed/E5g3gixP1bM"></iframe></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`(day 4)`}</p>
                    <iframe width="252" height="189" src="https://www.youtube.com/embed/P2saF8pHwR4"></iframe></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`(day 5)`}</p>
                    <iframe width="252" height="189" src="https://www.youtube.com/embed/hqQAEUeGDds"></iframe></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`(day 5)`}</p>
                    <iframe width="252" height="189" src="https://www.youtube.com/embed/nIZxh_nc64w"></iframe></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`(day 5)`}</p>
                    <p>{`(Remember Me is gone)`}</p>
                    <iframe width="252" height="189" src="https://www.youtube.com/embed/2a2UABmIzEA"></iframe></>
            }]
        }, {
            title: "Emily",
            shortDesc: "Remember Me and Sr. Catalan have a little chat about their place in the grand scheme of things and what drives them forward.",
            tags: ["depression", "guilt"],
            chars: ["Remember Me", "Sr. Catalan"],
            contents: [{
                char: { name: "Sr. Catalan" },
                content: <><p>{`After hearing Remember Me talk about Emily, he becomes intigued about who the being? person? is and why is she so important to Remember Me. To find answers he decides to go and try to find the feygolem and ask him about Emily.`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`(he / it for now, not yet, not yet)`}</p>
                    <p>{`Remember Me can be found entertaining other guests with Repko as its musical companion. When it notices Sr. Catalan making his way to it, it gives a mental note to Repko, Repko confirms it and it takes the attention of the crowd onto himself, while feygol slips away and asks.`}</p>
                    <p>{`"Hello, Sir Capitan, enjoying the party!? Do you need another Restoration or is something else the matter?"`}</p></>
            }, {
                char: { name: "Sr. Catalan" },
                content: <><p>{`He laughs.`}</p>
                    <p>{`"No I'm good ... well, it wouldnt hurt, but I actually came here to ask you about Emily. I still don't understand your obsession with her and what she exactly is. So care to explain. Oh, and I think I drank enough today."`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`"Oh, things of great importance I see! Well, it that case, let me just renew this spell I had on me to let me entertain you for longer."`}</p>
                    <p>{`His body shines for a bit, there is a pair of spectral eagle's wings on feygol's back and eagle's cry can be heard across the room before it dyes out.`}</p>
                    <p>{`"Gentleman of your statue might also want a little bit more care, would that not be so?"`}</p>
                    <p>{`[Unseen servant] moves the chair for Sr. Catalan to sit on.`}</p>
                    <p>{`"Please, if you would. Long day I presume?"`}</p>
                    <p>{`(If he would, Unseen servant will start to massage captain's shoulders.)`}</p></>
            }, {
                char: { name: "Sr. Catalan" },
                content: <><p>{`After feeling the massage, he laughs a little bit...`}</p>
                    <p>{`"How neat!"`}</p>
                    <p>{`...and sits down on the chair`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`Remember Me sits next to him, seemingly more aware and present than it usually is.`}</p>
                    <p>{`"So, what are you interested in? Her in general, something specific? Or is this more about projects we started to run both in this city as well as the one that is still under construction? As it happens, it is my personal hobby or maybe a life-purpose to tell the world about Emily Nightsong, as I believe everyone shound have someone like her in their life. We are trying to make a world a better place by offering her life experiences for everyone to learn from."`}</p></>
            }, {
                char: { name: "Sr. Catalan" },
                content: <><p>{`"Hmmm well first tell me what she is and when did you meet her ... I'm also quite interested in the projects your doing, hopefully they're not dangerous."`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`"Hm, I do not believe them to be dangerous, hopefully they are not, we are trying to run a shelter, it would be bad if folks would hurt themselves in our house of healing and rest by accident. Emily is... my creator. She made me. She made my first form and gave a life to it. Sadly, she didn't survive. She died just after I was given life to magic she was using ... it required a sacrifice, and she sacrificed herself. I ... for a long time I couldn't remember. But now I do remember. Just as I can remember anything from her life. So in some way, she lives on, inside of me, or at least this is what I would like to believe. I left her body behind. On the island where I come from. I ... would some day like to go back. Find her, bury her. Say goodbye in another way. But ... in some way, she is still out there, watching over me. I ... I can feel it. She is like that, I remember her and she is trying her best for her lifelong project to ... well, I am not sure what more she wanted from me, but I am trying my best to live up to her expectations."`}</p>
                    <p>{`Remember Me looks at Sr. Catalan.`}</p>
                    <p>{`"Do you also have someone like that. Someone that keeps you going? Master Soldier said for him, his person is Lady Morwyn, for Sir Oaksplit, Sir Manuel. Who is the person you are looking up to? Someone close to your heart, maybe?"`}</p></>
            }, {
                char: { name: "Sr. Catalan" },
                content: <><p>{`You see sir Catalan staring blankly into the distannce. Then all of a sudden he starts speaking.`}</p>
                    <p>{`"I can't think of anyone. The only people that had a larger impact on my life were Sr. Catalan Sr. and a few of my soldier buddies ... Though I wouldn't say that it was they that that kept me going though ..."`}</p>
                    <p>{`He takes a pause and thinks.`}</p>
                    <p>{`"Hmmm I think the main driving force trough my life was my great ambition, which Sr. Catalan Sr. didn't care much for and thought a life as a lonely civil servant suited me more and would've calmed me down, and the want some would say the need to prove myself as competent and deserving of my status and maybe of even a higher one."`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`Remember Me nods.`}</p>
                    <p>{`"If I am honest Sr. Catalan, what I am hearing makes me kind of relieved, because you are the first person of greater importance, who doesn't already have a special someone. It is somewhat hard to try and help people, when there is no one who needs your help, except our dear shelter patrons of course. At some point I was even told, that people like me or maybe even you deserve to be ridiculed, because following your believes, forging your own path, is to be looked down on. Yet I see, you had your own share of diverging opinions you stumbled upon. I hope you are stronger than me, because for some time ... it broke me. I forgot about Emily to preserve my own sanity. But then I remembered what I believe, more than ever ... and it saved me. Emily was kind of like you, you know. She was ... nothing much. Not talented, or beautiful, blind, sickly ... nothing special, but burdened with great expectations. Everyone in her clan had to be one of the best, or they were kind of nobody. Servants of those who deserved to lead, with their great intellect, beauty, merits, druidcraft, especially druidcraft, mostly their druidcraft. It was the right way. Everyone did their best and the clan would take care for the rest. It was perfect. But ... for some reason, it just made people hate each other. Emily was trying her best, to go beyond her limits, help her clan the best she could, so others despised her. She had no talent, she would constantly get sick from overextending herself, she was nothing much, just ... a burden, because she was trying too hard, was not willing to give in, stay a child, till the rest of her days, be a servant to those better than her, never meet expectations that were placed upon her at her birth. So she run away. To train somewhere else. To not be a burden to those dear to her. And make them proud. Some day I would like to return and tell them ... she did it. She made a feygol. To make them proud. And hopefully also ... sad."`}</p></>
            }, {
                char: { name: "Sr. Catalan" },
                content: <><p>{`He thinks.`}</p>
                    <p>{`"Such a sad story ... though that is life ... how I see it every living being seeks to fight against the greatest enemy of them all fate and coincidence ... life is not fair a lot of the time to people some people get born ill, poor or just different which leads to them being outcasts, the only thing they have is to try and fight fate ... because I see life as just a string of events full of coincidences and no matter how hard we fight sometimes we just can't win ... so the only sensible thing to do is how I see it is to fight against fate ... so this Emily she sounds like a genuinely kind and nice person ... can't say the same about myself ... I wish you the best."`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`"Same to you, Sr Catalan."`}</p>
                    <p>{`Remember Me thinks for a bit.`}</p>
                    <p>{`"While what you said is true, it does not need to be so. There was no castle of Rosa Riendo before people came together and built it ... and here it is now, real as anything else. As I said, I do believe everyone needs someone like Emily. One can go far alone, but we last longer if we are going for someone else. Our path, it hurts, it can hurt so much, maybe enough to give up. If we are doing this for ourselves, why would we want to choose to continue suffering? Something would have to be beyond broken, something worse than out suffering, for us to continue under such conditions. But if we are doing it for someone else ... we can do more. It is not about us, about our path, costs and benefits we experience ... to kill a dragon might be at times an easy task to get an apple for a child of our heart, but more importantly, their smile. We will perform within reason, but for someone else ... sometimes a little bit of insanity doesn't sound so bad."`}</p>
                    <p>{`Remember Me gestures at the city.`}</p>
                    <p>{`"Isn't it insane? That Manuel person might have contributed much, someone hard to replace, but I do not think people miss him so much because he was the best self-interest mathematician."`}</p>
                    <p>{`In quieter voice.`}</p>
                    <p>{`"Maybe come visit us sometime. Take a look at what we are trying to build, to do, to achieve. Take a look at Emily, her life, her legacy. Who knows, maybe even let her in your heart, just like she found her way into mine. Or if that is not what you wish for, observe others, what makes them tick, what drives them. Maybe there will be a moment, when you would opportune to find someone or something special else ... something for what you would be prepared to die for."`}</p>
                    <p>{`Remember Me giggles.`}</p>
                    <p>{`"Silly thing, right? To die for something. But also ... when you would rather die than go on ... something to live for."`}</p></>
            }, {
                char: { name: "Sr. Catalan" },
                content: <><p>{`"Hmmm while yes, this city was built with the will of the people here ... but it can be taken easily away by a meteore ... hm I guess then you'd build it back up ad infinitum. I guess that's the might of human willpower. Hmmmm, why should we choose to suffer, as I see it I choose to go my own path to prove something."`}</p>
                    <p>{`He stares blankly for a bit."`}</p>
                    <p>{`"I wish to prove to others and to myself that I do deserve to be standing here ..."`}</p>
                    <p>{`He stops for a bit.`}</p>
                    <p>{`"I do not care much for that Manuel fellow and neither do I know much about him, although it seems he means something to Minamoto. Huh there's someone out there for everyone, I have a hard time believing that, I don't think there's anyone out there for me, but is that so bad ... Maybe I will visit you one day and see what your working on ... The human psyche is indeed a fascinating one and people's reasons for living and wanting to live is quite fascinating, almost every person has his own reasons to live and keep going ... I don't know if your remember and stay in peoples hearts and minds are you truly dead, maybe keeping the memory alive is good enough even after their physical form perishes."`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`Remember Me smiles.`}</p>
                    <p>{`"Who knows. We do live in world of wonder and magic, do we not? I was told that for heroes of our statue, even death might be at some day but an inconvenience we face. I has told after death, both people, plants and animals go somewhere else. Yes, sometimes they get lost, most of the times they never return, but sometimes they do return. If my wish is nothing but a pebble, I only need to gather thousands, millions, if need be billions of them to make my own Rosa Riendo out of them. Remember Me leans closer. Memory is a powerful thing, Sr. Catalan. Never forget who you are ..."`}</p>
                    <p>{`Feygol leans back.`}</p>
                    <p>{`"... is what I might say, but sometimes, memories can be like a scar, unwilling to heal. So we have to make new ones, better ones. To grow, and hopefully, heal. Which ones are more real? I do not know. It is on you to pick which ones are the real you at the end ..."`}</p>
                    <p>{`Remember Me smiles.`}</p>
                    <p>{`"May the fortune smile upon you and your ambition. And even if it does not ... I DO run a shelter. Even for powerful people like you. We are a house of rest and healing. When you are tired or scared, come, rest and heal.`}</p>
                    <p>{`[Bardic Inspiration]`}</p></>
            }, {
                char: { name: "Sr. Catalan" },
                content: <><p>{`He smiles.`}</p>
                    <p>{`"Neat dream, memories can be a burden but they are necessary for us to remain grounded. I also think that the truth musn't be forgotten since if we forget our mistakes and hardships we'll never learn from them."`}</p>
                    <p>{`He laugh.`}</p>
                    <p>{`"Powerful people like ME, huh? I wouldn't call myself a powerful man, but thanks for the offer. Goodbye and I'll come to see one day what your making ..."`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`Remember Me smiles as it waves him goodbye. Then it notices the crowd that is going positively berserk over Repko's performance and quickly jumps in to save him friend from the masses, so they can face them, together.`}</p></>
            }]
        }, {
            title: "Message to Paradise",
            shortDesc: "Remember Me tries to get into contact with his lost tribe by asking for Isabela's help.",
            tags: ["depression", "guilt"],
            chars: ["Remember Me", "Isabela"],
            contents: [{
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`With the latest mission behind them, Remember Me decides to make good on its word and visit Isabela. It asks around and seemingly quite a lot of people know about her, even if she might tend to move around quite a bit. Where does the trail to find Isabela lead the feygol?`}</p></>
            }, {
                char: { name: "Isabela" },
                content: <><p>{`It finds Isabela in her office space alone, after being directed there by one of her servants along the way. You can see her sitting at a desk, going over piles of paperwork of differing sizes. She is wearing her normal clothes and the feathers Rua gave her in her hair, her sword leaning on the desk, always kept somewhat close. Isabela looks up when you enter the office.`}</p>
                    <p>{`"Ah, hello. Are we supposed to have a meeting today? I don't remember inviting anyone over recently."`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`"Hello, Lady Isabela. Not today, but you did indeed invite me to come and visit you at your place when you are less self indulgent as you were at the party. Are you still in a 'that kind of a state'? Should I come and visit you later? If it is a problem, may I use a spell that removes the poisoning that occurs when concentration of a fruit, grain or other sufficiently rotten sugary substance is ingested? I noticed you consumed quite a lot of it. Dreadful experience I believe."`}</p></>
            }, {
                char: { name: "Isabela" },
                content: <><p>{`Isabela waves her hand.`}</p>
                    <p>{`"No need for spells, I am fine now."`}</p>
                    <p>{`She puts down the papers and gestures to a chair in front of the desk.`}</p>
                    <p>{`"Make yourself comfortable. Unfortunately I can not offer you any refreshments as Shirin is out currently."`}</p>
                    <p>{`She says while looking apologetic.`}</p>
                    <p>{`"Now refresh my memory a bit please. What did you want to talk about."`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`"At the party you acted as if the village of Leshisel is know to you. While I do speak quite a lot about it, it did not feel like you know about it from merely a tale of someone else? I also find familiarity in some of your clan's identifications, even if I do not recognize most of them. Are you related to the clan I belong to?"`}</p>
                    <p>{`[Disguise Self]`}</p>
                    <p>{`Remember Me turns into a somewhat aged elf with regal posture and kind if calculating expression on his face. Tenor Oakborn, the leader of Leshisel, second generation and the one who enacted the policy to start exporting feygols outside of the clan for various benefits from other clans and factions.`}</p></>
            }, {
                char: { name: "Isabela" },
                content: <><p>{`Isabela looks a bit suprised at the elf in front of her.`}</p>
                    <p>{`"I remember this man from when I was younger. I think it was some kind of a diplomatic visit from my family to your clan. As for the related part, I would have to send a letter to my grandmother. She was far more knowledgeable about those things than me."`}</p>
                    <p>{`She leans back in her chair.`}</p>
                    <p>{`"I don't believe I met you before though. I would have remembered a feygol this unique."`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`Elf smiles.`}</p>
                    <p>{`"I do not know when your meeting took place, so it is a bit hard to answer, but it is both true that I might be considered somewhat unique of my kind and that I was never actually a part of the aforementioned village. It is my creator's memories upon which I rely for my knowledge of the Leshisel."`}</p>
                    <p>{`Elf turns back into the humanoid feygol.`}</p>
                    <p>{`"So your family had a meeting with Tenor Oakborn, the leader of our clan. Interesting. And you are in contact with them? If you do not mind, I would be interested in any news about them as I have not heard about them for decades now. Not a long time for an elf, but I do believe quite a lot of things tend to happen, both with and without younger races roaming the world of more ancient peers. It does not need to be quick, but it would be nice to learn about them at least in this dozen of summers."`}</p></>
            }, {
                char: { name: "Isabela" },
                content: <><p>{`"I believe my family or rather, the kingdom, keeps contact with them yes. We are getting new feygols from somewhere after all. Sadly I have no information about them at the moment, as those kind of matters are pretty far down my priority list. I can ask about it in the next letter I send home however, if that is something you would like."`}</p>
                    <p>{`Isabela goes back to her paperwork to check something.`}</p>
                    <p>{`"You are a druid yes? I may have a job for you since you are already here."`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`"Thank you."`}</p>
                    <p>{`Remember Me thinks for a bit.`}</p>
                    <p>{`"Sure, ask away, as long as it is within my power, I will do my best to answer."`}</p>
                    <p>{`Feygol changes tone of its voice for a moment, less contemplative, more cheerful.`}</p>
                    <p>{`"On an unrelated topic, your servants brought a share of the harvest to our shelter. It warms my stones to know that agreement your servants presented me with holds. But maybe nothing less should be expected from a fellow hero of Rosa Riendo, or so I heard?"`}</p></>
            }, {
                char: { name: "Isabela" },
                content: <><p>{`"I am glad you are satisfied with your portion. And in that vein, there have been talks of opening up another farm in the plane of elysium. As before, I would like a druid's blessings, your share to be alloted as before."`}</p>
                    <p>{`(Ni še nič dorečeno konkretno bdw.)`}</p>
                    <p>{`Isabela slightly blushes at the hero part.`}</p>
                    <p>{`"I wouldn't really call myself a hero. I am just doing my best to help and expand my family name. I am happy to hear the word is spreading around town though. I aspire towards great things here."`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`Remember Me kindly smiles.`}</p>
                    <p>{`"But of course, it would be rude to spoil our successful cooperation, especially as what you are asking of me benefits us both. It is my wish to let it grow, flourish even. In times of abundance, let us share, in times of need, let us resist misfortune together, mayhaps?"`}</p>
                    <p>{`Remember Me absentmindedly places a finger on its chest and starts tapping a melody that seems to follow no conventions, yet it manages to stay harmonious nonetheless.`}</p>
                    <p>{`"It is not a social circle I am moving in, for my place is with those who need me most, but I do from time to time get a patron, a merchant, who praises opportunities you provided or how your investment gave them opportunity to start again. There are heroics that require almost a ... mercenary, but there are those that require more ... patient approach. In fact, me and mine were informed that construction of a new old town is progressing smoothly and as my investment will among other things go into performative arts, I was thinking to encapsulate some of the stories that happened out there ... Stage-plays might do wonders for the morale of those who weren't capable or born to participate. What do you say? Would your servants mayhaps share some of your adventures with me when the time comes? For the common folk."`}</p></>
            }, {
                char: { name: "Isabela" },
                content: <><p>{`"Sharing stories is not a problem at all. After all, it is how we learn, how we grow, how we inspire one another. Do find one of my servants when the time comes, perhaps even myself. And if you ever desire so, I could give you my blessings for your estabilishment. Helping the less fortunate is a noble cause indeed, especially if you have the privilege to be well off yourself."`}</p>
                    <p>{`Isabela takes a pen and writes some things down on the papers, moves them away and takes out new ones from one of the piles in front of her.`}</p>
                    <p>{`"After all, there is no nobility, let alone royalty, without the common folk below them for support."`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`"Indeed, if you would find some time to share your stories yourself that would delight me."`}</p>
                    <p>{`Remember Me stops tapping and thinks deeper.`}</p>
                    <p>{`"About the privilege ... well, I am not smart enough to really know what is best, but the clan I belong to does believe both that there is no inherent nobility, even if ability to rule is closer to some than others, yet they are given such role in order to be the ones most able to take care for everyone else. Even so, Emily suffered, so surely there could be a better way how to run things? She was of privileged blood, yet I do not believe she would want to claim any privilege she didn't earn herself. Sadly, how would such a clan work is beyond me, but I do hope people appreciate what are you doing for them."`}</p>
                    <p>{`Feygol looks around and makes a polite bow from its waist.`}</p>
                    <p>{`"Well, I believe this is what I came to discuss and I got my answers as your grace allowed, so if there is nothing else, I would bid you good day."`}</p></>
            }]
        }, {
            title: "Nobody's Rosa Respite",
            shortDesc: "Remember Me nadaljuje delo na originalnem zavetišču.",
            tags: ["depression", "guilt"],
            chars: ["Remember Me"],
            contents: [{
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`As Oaksplit's upgrades to the original Remember Me's Respite are finished, place feels more inviting and accommodating than ever.`}</p>
                    <p>{`The entire floor is now dedicated to sleeping, so those who might want to spend their times at night doing something else, might do so without disturbing other residents as it was a common problem in the past. The floor also has a bookshelf for reading that was at first located on the ground floor and has mostly titles with entertainment value, a simple fireplace with a polished-stone base and many windows, covered with hanging plants for those who would prefer darkness when sleeping during the day as the place never had enough capacity to house everyone at once, especially after refugees from Yggrasil joined, so a rudimentary sleeping regiment was established.`}</p>
                    <p>{`Lower floor is connected with a not too steep staircase, under which a small storage was established. Mezolček's pond was enlarged, even if lately he was migrated to the new city into Pond of Rememberence, for his wish to swim in bigger waters. Large bookshelf was brought in, now accommodates many books and scrolls with useful information as well as report's and thoughts about Emily's life. Many crude works of Emily can be found hanging on walls, while in the center of the room is overgrown stone altar, not much different than in the past, even if there are more gifts present even if Remember Me is not around as much those days, working on Pond of Rememberance most of its time.`}</p>
                    <p>{`Around the altar sweet alyssum took root, its relaxing smell now present in the air.`}</p>
                    <p>{`Many cushions for reading, relaxations or socializing are placed around an enlarged fireplace for when cooks are not working at their desk, but even more can be found around the place. The entire place is also covered with a carpet of moss and other plants, trying to reclaim it, but as if gardened in a way not to disturb the purpose of the place. Also, a spare Emily's druidic clothes hand-made replica can be found here, not as nice as the original made trough elven years probably was, but the design can still be recognized as if inspired with a somewhat more refined taste than Remember Me was able to demonstrate till now.`}</p>
                    <p>{`(Picture represents the original design.)`}</p></>
            }]
        }, {
            title: "Remember Me's Inner Music",
            shortDesc: "Tempo po katerem je Remember Me umiral, kako se je počutil. Sprva so bili naslovi zakriti, šele ko je bila krinka zdravja razkrita, so bili nemudoma predelani v to kar so dejansko bili, odštevanje do smrti. Zelo sem razmišljal kako želim iti. Odločil sem se, da se želim potruditi po najboljših močeh.",
            tags: ["depression", "guilt"],
            chars: ["Remember Me"],
            contents: [{
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`(day 1)`}</p>
                    <iframe width="252" height="189" src="https://www.youtube.com/embed/5wvTs-1jUFE"></iframe></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`(day 1)`}</p>
                    <iframe width="252" height="189" src="https://www.youtube.com/embed/yEg02Ui_a8k"></iframe></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`(day 1)`}</p>
                    <iframe width="252" height="189" src="https://www.youtube.com/embed/tHZqxecCukg"></iframe></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`(day 2)`}</p>
                    <iframe width="252" height="189" src="https://www.youtube.com/embed/6fEXKtBsjNQ"></iframe></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`(day 2)`}</p>
                    <iframe width="252" height="189" src="https://www.youtube.com/embed/1EdSGUIaJYQ"></iframe></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`(day 2)`}</p>
                    <iframe width="252" height="189" src="https://www.youtube.com/embed/5u3RGhznctE"></iframe></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`(day 3)`}</p>
                    <iframe width="252" height="189" src="https://www.youtube.com/embed/jRFk22ENWNg"></iframe></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`(day 3)`}</p>
                    <iframe width="252" height="189" src="https://www.youtube.com/embed/zbQRY8KSVbU"></iframe></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`(day 3)`}</p>
                    <iframe width="252" height="189" src="https://www.youtube.com/embed/E83hl6hDfKQ"></iframe></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`(this one is just so nice that I have to share both xD, Ranking of Kings is amazing)`}</p>
                    <iframe width="252" height="189" src="https://www.youtube.com/embed/dWZAH5w8jkQ"></iframe></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`(day 4)`}</p>
                    <iframe width="252" height="189" src="https://www.youtube.com/embed/60ItHLz5WEA"></iframe></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`(day 4)`}</p>
                    <iframe width="252" height="189" src="https://www.youtube.com/embed/ED66vOZg9t4"></iframe></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`(day 4)`}</p>
                    <iframe width="252" height="189" src="https://www.youtube.com/embed/2RrkFCw0t90"></iframe></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`(day 5)`}</p>
                    <iframe width="252" height="189" src="https://www.youtube.com/embed/xG12ghcBKvw"></iframe></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`(day 5)`}</p>
                    <iframe width="252" height="189" src="https://www.youtube.com/embed/J-j32A2tTlk"></iframe></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`(day 5, konec)`}</p>
                    <iframe width="252" height="189" src="https://www.youtube.com/embed/Y6ljFaKRTrI"></iframe></>
            }]
        }, {
            title: "Invitation - day 1",
            shortDesc: "Remember Me plans to give to Morwyn the melody that is killing him as a price for when he saved her husband.",
            tags: ["depression", "guilt"],
            chars: ["Remember Me", "Morwyn", "Minamoto"],
            contents: [{
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`[Disguide Self - Remember Me]`}</p>
                    <p>{`Remember Me tries to find Master Soldier as it is easier for it to locate him than Morwyn or her familiar and it does know Master Soldier would know where to find her. Where does Remember Me find him?`}</p></>
            }, {
                char: { name: "Minamoto" },
                content: <><p>{`As Remember me asks around the training grounds, the soldiers tell him, commander is gone. That he went to see the Fisherman and did not yet return. Nobody knew to what purpose.`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`Not being able to find Master Soldier, Remember Me leaves one of the soldiers with a letter and gives him instruction that if Master Soldier is to return after Remember Me manages to talk with Morwyn, to give him the letter. When soldier asks how are they to know if Remember Me talked with Morwyn, Remember Me just scratches its head.`}</p>
                    <p>{`"Well, you could ask him? Or her? At least one of them would probably know."`}</p>
                    <p>{`Remember Me then tries to find Caraxes in order to be able to arrange a meeting.`}</p></>
            }, {
                char: { name: "Morwyn" },
                content: <><p>{`While looking for Caraxes, Remember Me wanders to the Misty Portal Inn, he saw the little imp there from time to time so hopefully he's there now. As he opens the door a welcome sight greets him. Morwyn and Caraxes both are trying to groom the cats and other critters, with Morwyn putting down the brush the moment she sees somebody enter the inn.`}</p>
                    <p>{`"Hello and welcome. How can I help you?"`}</p>
                    <p>{`She smiles at the strange golem she occasionally saw from afar. A tiny surprised hiss escapes Caraxes and he quickly blurts something to Morwyn, the language harsh and strange, before skulking behind the counter.`}</p>
                    <p>{`"Ahh... I'm sorry, you must be Remember Me. Caraxes gave me the invitation to your meeting quite late, but I have been following the progress of your establishments and invested as I could."`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`(Not right now, not right now, in a month's time xD)`}</p>
                    <p>{`Remember Me explains that at the moment it is too busy as he is fully immersed in certain work, but it would be finished in a month or so (in 3 days time), so it would like to arrange a meeting or something like that in a month's time.`}</p>
                    <p>{`"If it would be of no problem to you, maybe we could meet at our theater? I believe you are a bard, yes? One even more proficient as I am? I was wondering how great of a bard are you. Would you mind showing it to me and others? Maybe patrons of our house could even learn a thing or two from you, if you are willing of course. If you are good enough, I might even have a special task for you."`}</p>
                    <p>{`"Also, as it will soon be over ... maybe you would want to take a look when I finish? Or maybe even take a swim? I hear that some people were more inthusiastic about the pond than certain features the task I am working on is going to offer."`}</p>
                    <p>{`"Is tkat ok with you?"`}</p></>
            }, {
                char: { name: "Morwyn" },
                content: <><p>{`(U mean literal month?)`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`(Ingame, 3 days literal.)`}</p></>
            }, {
                char: { name: "Morwyn" },
                content: <><p>{`(Ahhh, yeah I reread, it's fine, gonna reply in character.)`}</p>
                    <p>{`Morwyn tilts her head at the golem.`}</p>
                    <p>{`"I am surprised you came to the conclusion I gain some of my power from my song since we never met up close. Well, I can tell you now I carry the blessing of the Raven Queen and she's the source of my magic."`}</p>
                    <p>{`(Can roll insight check here.)`}</p>
                    <p>{`She sighs and still smiles.`}</p>
                    <p>{`"But I do know how, and love, to sing."`}</p>
                    <p>{`She gestures at the bar in a 'can I get you anything?' way as she continues.`}</p>
                    <p>{`"I just might show up, I can't promise anything since I'm planning something during this next couple of months. And even then I don't know how I feel about performing in front of an audience. But I will definitely stop by for a swim, so thank you for your invitation."`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`Remember Me smiles.`}</p>
                    <p>{`"Have you ever performed to Master Soldier? He might have not been entirely lip-sealed with his praises."`}</p>
                    <p>{`Remember Me thinks deeper.`}</p>
                    <p>{`"It is not a problem, if you would prefer not to show your abilities, maybe perform just for me, so I might judge if you are a worthy of a task at hand ... you would probably be interested in it, given that it concerns health of your husband ... but enough was said, I would prefer to return back to my work, I have a lot more to do and frankly less time than I would prefer."`}</p>
                    <p>{`It relaxes.`}</p>
                    <p>{`"So ... farewell? Till we meet again and ... maybe work on your skills as a musician, you might need them. Do your best, just as Emily would.`}</p>
                    <p>{`[Bardic Inspiration]`}</p>
                    <p>{`"Ou, and one last thing ... because I never managed to ask you before ... you did not intend for Master Soldier to die, right? It was not entirely clear what happened that day."`}</p></>
            }, {
                char: { name: "Morwyn" },
                content: <><p>{`Morwyn smirks.`}</p>
                    <p>{`"I think my skills are sharp enough, but we'll see. I will first want to hear about your task if it's worth wasting my time on."`}</p>
                    <p>{`She then shakes her head.`}</p>
                    <p>{`"And no, my first purpose is always Commander's safety. But we all have our own will."`}</p>
                    <p>{`She looks at the golem.`}</p>
                    <p>{`"At least I hope so."`}</p>
                    <p>{`"Then let's meet again. I'll come visit you in your house of culture."`}</p>
                    <p>{`She waves at it in goodbye.`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`Remember Me nods and goes back to its work. As it said, there is a lot to do and not that much time to do it.`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`If Minamoto returns and the soldier gives him the letter as instructed, two words can be found inside, written somewhat poorly, yet with care, as if a child has written them.`}</p>
                    <p>{`'Thank you.'`}</p></>
            }]
        }, {
            title: "Reassurance - day 2",
            shortDesc: "Remember Me išče naslednika za svoje svetišče.",
            tags: ["depression", "guilt"],
            chars: ["Remember Me", "Birog"],
            contents: [{
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`[Disguise Self - Remember Me]`}</p>
                    <p>{`With the concert day coming as expected, Remember Me starts to look for someone who will be able to take care of things while it is dealing with that. It turns for help to a fellow druid and invites him to its place, Nobody's Faro de Luz Respite. Remember Me does mention it will explain more when they meet.`}</p></>
            }, {
                char: { name: "Birog" },
                content: <><p>{`Despite being pleasantly surprised by the invite, Birog nervously agrees to meet. Wondering all the way to the place about the reason behind this and additional information he will eventually get, he tries to remember the route to the best of his abilities, so he doesn't get lost on the way back.`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`Emily's House of Culture is reasonably close to Birog's Cookery, also, it is almost next to the same river were Cookery is, so he would probably have not that many problems finding his way back? Remember Me is informed by Repko that Birog is getting nearby, so it comes to meet him in front of the Respite.`}</p>
                    <p>{`"Hi, welcome, I heard you are an able a guardian of nature, just like Emily was? I am glad you managed to find some time to come and visit, but would you mind it I test your abilities for just a bit?"`}</p>
                    <p>{`Remember Me points at the entrance where path is partially blocked by from time to time moving stalks of a woody plants.`}</p>
                    <p>{`"Recently I managed to grow them quite a lot, but they became quite unruly once they reached their desired size. Would you be able to open the path without harming them? They are little children, not yet knowing better than to be wild."`}</p>
                    <p>{`... more quietly ...`}</p>
                    <p>{`"And just a little bit to frustrating as of late."`}</p></>
            }, {
                char: { name: "Birog" },
                content: <><p>{`(I'm sorry, didn't check the map that much.)`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`(well, I was making and remaking it, so I know most locations by heart.)`}</p></>
            }, {
                char: { name: "Birog" },
                content: <><p>{`Birog places his staff close to his mouth as the staff gains a faint glow and starts talking through it, as if he is communicating with the plant.`}</p>
                    <p>{`"Greetings young sapling, I do apologies on this intrusion, would you be so kind and clear a passage for the two of us, i do not like using control spells on any being be it beast, animal or a plant, unless my hand is forced to do so in certain circumstances."`}</p>
                    <p>{`Followed by silence as he awaits for the plant to reply.`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`Plants seem confused for a moment, then you hear thousands of voices, some quite near and strong, others more like chiming in from the distance, interested in what is going on.`}</p>
                    <p>{`"Who are you, to tell us what to do?"`}</p>
                    <p>{`"This is our place and ours only. Our little kingdom."`}</p>
                    <p>{`"Present yourself before out might!"`}</p>
                    <p>{`You can also hear giggling of other plants that find this conversation very amusing. It is like they are roleplaying in front of each other, maybe seeking ways on how entertain themselves. They seem quite lively for plants, almost as if something magical is filling them with more life than it would usually be expected, yet they are still just plants, rooted in place where they were born.`}</p></>
            }, {
                char: { name: "Birog" },
                content: <><p>{`"Oh, excuse my rudeness, I am Birog of the an'ar natives what may i call you?"`}</p>
                    <p>{`Offers up a partial bow showing some decree of respect, but not submission in the slightest.`}</p>
                    <p>{`"And please not all of you at once, it is hard to understand this many voices, by chance is it possible that you choose among yourselves a few to represent the majority it is straining to expand all this magic all the way to the back of your kingdom, and speaking of your kingdom ... what is it like?"`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`There is a silence for a bit before first plant speaks.`}</p>
                    <p>{`•	"I am not sure what to do, what do I do?"`}</p>
                    <p>{`•	"Pretend it is ok, he won't notice, remember, you are a royalty."`}</p>
                    <p>{`•	"What is a royalty?"`}</p>
                    <p>{`•	"How should I know? Just think of something!"`}</p>
                    <p>{`•	"Khm, yes, nice, nice very nice, Birog of an'ar. We have many names, but mine is ... am, Gorib, of ... Nobody. Gorib of Nobody!"`}</p>
                    <p>{`•	"Great job."`}</p>
                    <p>{`•	"Tnx! So, Birog of an'ar, it is nothing much, our kingdom is in fact right there."`}</p>
                    <p>{`Stalks part just a little so you may see more clearly into the room full of greenery, water and life before they close again.`}</p>
                    <p>{`•	"It is ... nice. A lot of water, very good water, somewhere to root oneself, bugs are nice most of the time, and frogs, it is fun to watch how snakes eat them, not that much sunlight, but big ones are sharing extra they get, so it is not such a big deal for us down here. And there is that metal thingie, you root yourself into it and it makes you feel more alive. It is a bit boring thou, not a loot of room to grow and visitors keep stepping on us and disregarding us, making dirt hard to grow into, so we do not like visitors. Are you a visitor?"`}</p>
                    <p>{`It seems like the main stalk on the left side of the door decided to do the talking for now.`}</p></>
            }, {
                char: { name: "Birog" },
                content: <><p>{`"My initial plan was to become a visitor of some sort, but it seems to me you need company, entertainment and most of all care to make the dirt softer and nicer, is there anything I can do for you? Would you perhaps want a nother kingdom with lots of sunlight and a big open space? I can do that at least ... sadly its not much, but maybe you could do something for me in return?"`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`Plants think for a moment.`}</p>
                    <p>{`•	"It is small here, and there could be more sun, but here is my family."`}</p>
                    <p>{`•	"And water is nice."`}</p>
                    <p>{`•	"And our father is here."`}</p>
                    <p>{`•	"But father is sick ... we do not like father, no fun, no time to play."`}</p>
                    <p>{`•	"But father is nice, we like father."`}</p>
                    <p>{`•	"He is talking about mother a lot. Mother sounds nice."`}</p>
                    <p>{`•	"And water is nice."`}</p>
                    <p>{`•	"And earth is tasty, not soft enough, but tasty."`}</p>
                    <p>{`•	"Very tasty."`}</p>
                    <p>{`•	"You want to play?"`}</p>
                    <p>{`•	"You want to talk?"`}</p>
                    <p>{`•	"What does it want?"`}</p>
                    <p>{`•	"Does it want to drink?"`}</p>
                    <p>{`•	"Water is tasty."`}</p>
                    <p>{`•	"Does it want to heal? Father can heal."`}</p>
                    <p>{`•	"What does it want?"`}</p>
                    <p>{`Plants clear the way somewhat as if they are starting to relax. They are getting suspicious, but also curious.`}</p></>
            }, {
                char: { name: "Birog" },
                content: <><p>{`"I can heal your father, yes, that is no problem for me."`}</p>
                    <p>{`Turns behind him after a long time of what sounded like gibberish to the person standing behind him he distances the staff away from him and the glow fades temporarily."`}</p>
                    <p>{`"Is there a chance you are trying to take from this place we are trying to enter or is the goal only to open up a path ...?"`}</p>
                    <p>{`Scratches his head in concern. Repositions the staff as it glows even brighter, making the place more visible.`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`Remember Me scratches its head.`}</p>
                    <p>{`"This place is still in the making, but I need a month or maybe less to finish it. I am not sure what I would wish to take from a place that is considered mine, but I also do not know what were you talking about, I did not hear or understand your chat, thou little ones seemed pleased. I can open the path myself, but lately my powers have weakened, so I was wondering if you could help me take care for this place. As you know, druids should not handle metal in excessive amounts, yet my task has left me with months working on rather large metal artifact. It is probably only temporary, but due to this place being made in a way to have a will of its own ..."`}</p>
                    <p>{`Remember Me gives a kind look to plants still partially blocking the passage.`}</p>
                    <p>{`"... or rather many wills. It is somewhat hard concentrating at the task at hand while they seek amusement or ... identity. Understandable, but I am simply too stressed for time.`}</p>
                    <p>{`(will add picture of the place, watery part of the building)`}</p>
                    <p>{`Remember Me comes a little bit closer.`}</p>
                    <p>{`"So, what do you think? Can you do it? I do believe guardian of nature would be the most capable one to handle such a task."`}</p></>
            }, {
                char: { name: "Birog" },
                content: <><p>{`"Ah that is correct, I have been so focused on healing, I forgot on other skills of mine."`}</p>
                    <p>{`Birog firmly clasps the staff in his hand and whispers something into it. Soon enough his skin begins to harden and crack gaining a dark brownish color, the withered and dried up thorny vines in his hair revitalise now looking nicely green and on the brink of blooming.`}</p>
                    <p>{`(Ngl, first time druid, so I legit dunno all the spells, so I thought that I would use [Comunicate with plants] or [Plant control] if the situation got worse ... but I dont see how guardian of nature would help, exept for the name the effects have nothing to do with the task?)`}</p>
                    <p>{`After a short breath Birog looks arround for any cues on what to do next all lost in this situation.`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`Remember Me nods.`}</p>
                    <p>{`"Yes, we most certainly are meant to be quite versatile, it is nice that you remember your teachings, respect to your master, whoever she or he or they were."`}</p>
                    <p>{`It then steps all the way to the living doorframe. It places its hand on one of the plants and as if startled, it twitches. You notice that a small stone fall from Remember Me's arm where it hit feygol's arm, yet it didn't seem like it noticed.`}</p>
                    <p>{`"Shhh, shhh, little one, rest easy ..."`}</p>
                    <p>{`[Druidcraft]`}</p>
                    <p>{`The plant freezes, then becomes docile, sorry even, afraid over what it did, passage closing tighter. It takes some time, probably longer than it would take Birog, but Remember Me manages to convince the plant that nothing is wrong, so it fully opens the passage.`}</p>
                    <p>{`"Come, if you are going to help to take care for this place, let me show you around."`}</p>
                    <p>{`Remember Me gestures and you can notice his arm where plant hit it isn't even scratched. Healing magic? You might have heard Remember Me heals with words and thoughts alone. Remember Me points at the living bridge in front of you.`}</p>
                    <p>{`"Also, be careful around those, they also like to ... play with their guests, but most tend to prefer to stay dry even those who come here to swim."`}</p>
                    <p>{`Then with [Druidcraft] it makes sure the path inside is safe ... or safe enough for the time being.`}</p></>
            }, {
                char: { name: "Birog" },
                content: <><p>{`Turns torwards Remember Me.`}</p>
                    <p>{`"During my conversation with the plants I couldnt help but notice them mention their king being ill, is that one of the plants or by chance you got struck by an ailment? ... I did prommise to heal the individual in question and I intend to keep it."`}</p>
                    <p>{`Turnes his gaze downward to watch his footing.`}</p>
                    <p>{`(Plus, looks like I don't have those spells, I checked on my character, even went under the edit option.)`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`(Guardian of nature is just another word for a druid ... it is a bit rought to call yourself by class, like bard might not strictly be 'a bard' and rogue might prefer to call itself 'a smuggler', it adds variety 🙂)`}</p>
                    <p>{`Remember Me chuckles.`}</p>
                    <p>{`"Well, I would not consider myself a king, but I believe if that is what they were saying, that would be probably me, I would know about any other plant as I planted them myself. They grew from the wood heroes of Turbulenca gathered and donated, but I did add some other for the variety. As I said, I am in fact a bit weak at the moment due to working on metal much more than I should, but it is nothing you could probably do something about."`}</p>
                    <p>{`Remember Me looks healthy, as you know, working on metal is a taboo for druids, so it should not effect its health, just its ability to connect with energies of nature or wield them, at least for some time. Not a lot is known what happen to those who break the taboo given how hard it is to become a druid, so they tend to stay one. Those who continue to break taboo tend to weaken their connection with nature or anger the nature. It is not believed to be a curse as druid's power is not strictly theirs, like a cleric or warlock would not be cursed if they anger their god, they would just stop getting their favors.`}</p></>
            }, {
                char: { name: "Birog" },
                content: <><p>{`(There is actually a Guardian of Nature spell tho.)`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`(Lol, didn't know, nice xD)`}</p>
                    <p>{`(well, I was using it as a title, not as a spell.)`}</p></>
            }, {
                char: { name: "Birog" },
                content: <><p>{`"Is there any way I can start helping? I am sadly very task oriented and have a system depending on urgency, it is an old habbit of mine from the battlefield."`}</p>
                    <p>{`Takes a short pause and looks arround.`}</p>
                    <p>{`"The plants do have quite the humor tho, I have to admit."`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`"Ou, certainly, try to make sure they do not harm any guest or in general that they do not prank them, maybe play or talk with them from time to time, I am sure they will love having you around, it is probably best to regard them as chindren, they might do something bad, but they usually do not do it out of malice and if they cause you any serious trouble, report back to me. As I said, it shouldn't last for more than a month. Do you require any kind of compensation? I have some yellow pieces on me, as well as some spare metal ..."`}</p>
                    <p>{`It thinks for a bit.`}</p>
                    <p>{`"Also, I have a magical whip. How would you prefer to be compensated for your service?"`}</p></>
            }, {
                char: { name: "Birog" },
                content: <><p>{`"Well since it is something I would rather enjoy quite a lot how bout this, besides iron ... is there any other crafts you are familiar with? I happen to have opened a shop, but I am in desperate needs of a green house or a herb garden of some sorts for my potion making, I will ask arround for the land and practicality, what I would ask of you would simply be to help me construct it, it is embarrassing to admit but I have nearly no strength at all."`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`There is a note of sadness on Remember Me's face, it lingers, then disappears.`}</p>
                    <p>{`"Sadly, in my current state, I do not believe this would be possible, if I get better, then gladly. In between, you may take plants that grow here. I do believe you would do so in a responsible manner, no? They get energy from the pond, so you will discover they regenerate faster than anywhere else, priority thou was on protection and support of this place, not on cultivation of materials."`}</p>
                    <p>{`It thinks for a bit.`}</p>
                    <p>{`"Although, once this place is finishes, were you to come here and offer your prayers and open your mind, you might discover Emily's grace became more present than it was in the past.`}</p>
                    <p>{`(If you get adv on Medicine, Nature, Survival and History on adventure, it is safe to assume that you can get it closer to the source.)`}</p>
                    <p>{`"Pond will also offer some expertise that might be of use to you."`}</p>
                    <p>{`(Any memory stored in the Pond is available as long as the Pond allows it).`}</p>
                    <p>{`"Would that be considered enough of a reason to keep this place running while I am away?"`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`(Here, s temi si se pogovarjal xD)`}</p></>
            }, {
                char: { name: "Birog" },
                content: <><p>{`"Aye, I will try to the best of my abilities to take care of the children, and no, I didn't intend it as making a harvest spot, I had an idea to use a small plot of land near my shop for a garden of sorts to lower production costs, but in the end it doesn't really change much so I'm dropping the idea ..."`}</p>
                    <p>{`(I can see why I looked like I was crazy ...)`}</p>
                    <p>{`Birog has a stern face of determination to see this through.`}</p>
                    <p>{`"Do make sure to take enough rest and try to finish up with the metalwork soon, it can be really dangerous."`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`Remember Me chuckles.`}</p>
                    <p>{`"Will do, tnx."`}</p></>
            }, {
                char: { name: "Birog" },
                content: <><p>{`After a while Birog comes back well rested.`}</p>
                    <p>{`"Greetings dear children how are you doing today? Would you like to hear some stories to pass the time? I'm aware it can get really boring sometimes, especially now since I will be taking care of you for a little while."`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`"Plants are exuberant they have someone to play with."`}</p></>
            }, {
                char: { name: "Birog" },
                content: <><p>{`"Just no throwing in the water okay? These hair is wild enough allready, its really hard to braid these vines ... always get pricked by the thorns."`}</p>
                    <p>{`Gently pickes one of the slowly wilting vines as [Guardian of the Forest] looses effects and gestures the vine as a leaf falls from it."`}</p>
                    <p>{`Sadly it only revives when I use magic the duration depends on how strong the magic was.`}</p>
                    <p>{`(I'll send a story during my brake at work.)`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`(Imel sem občutek, da igralec želi igrati dalje, vendar nisem vedel s kakšnim namenom, zato sem da privat kontaktiral in vprašal če želi kaj posebnega ter mu pojasnil, da je bil RP namenjen temu, da mu bo zapuščen po mojem odhodu, iskal sem naslednika.)`}</p></>
            }]
        }, {
            title: "Warning - day 3",
            shortDesc: "Remember Me poskuša posvariti mesto pred morebitnimi tujimi vplivi ter najti naslednika za preostanek njegovih posesti.",
            tags: ["depression", "guilt"],
            chars: ["Remember Me", "Oaksplit", "Sr. Catalan"],
            contents: [{
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`[Disguise Self - Remember Me]`}</p>
                    <p>{`Remember Me is seeking audience with Oaksplit.`}</p></>
            }, {
                char: { name: "Oaksplit" },
                content: <><p>{`Oaksplit has himself holed up in his office, swamped with papers and some kind of blueprints of a huge ship that he is frantically trying to piece together with different artisans in mind. When Remember Me finally gets the audience, he sees the half orc sitting in his large chair, the hands stained with ink droplets and a wet towel behind his neck. He sees Remember Me enter, smiles and says.`}</p>
                    <p>{`"Remember Me! Has been a time. Sorry I couldn't get to you, been busy as hell. Still managed to see the new theatre and the fountain - incredible work, as usual."`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`Remember Me slowly nods, Oaksplit might discern that Remember Me is also overworked or at least more than usual.`}</p>
                    <p>{`"May Emily smile upon you, Sir Oaksplit."`}</p>
                    <p>{`[Bardic Inspiration]`}</p>
                    <p>{`"I sadly do not have much time to chat as I am quite busy myself. I came here with a warning, information and a request. For a warning ... you may be aware that I landed a deal with Mechanus? Statue of Emily is almost finished, so they will come to study its technology, as the deal says. Yet I fear how such a potent technology might effect them. City might want to protect it. They already know it will finished soon, but they do not know when. Maybe say to them I never managed to finish it, maybe it was a disaster, maybe I died before its completion, direct them somewhere else when they come looking, just do not let them close. You do not need to do that, but at least I was thinking to give you an option. My debt to them is paid in full, but maybe pamper them a little bit more so they forget about it. I can not do it as I am quite a terrible lier."`}</p></>
            }, {
                char: { name: "Oaksplit" },
                content: <><p>{`"Why are you saying such things?"`}</p>
                    <p>{`Oaksplit frowns his brows.`}</p>
                    <p>{`"Are you unwell? Do you need a druid? I sure will protect Turbulenta and all their inhabitants, even rerouting Mechanus fellas. But why the sudden urgency now?"`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`"Just a percussion. I already informed them of the project's near completion. I do not care if you act on it, I wouldn't, but I would not consider myself smart enough to know better, so ... just an option."`}</p>
                    <p>{`"Another thing ... I am a bit bussy on said project, so I feel like I am somewhat failing to meet the demands of a theater. Would you be able to find someone to assist me in its operations? I already tried to ask Morwyn, as she seems capable, but sadly, she felt a bit ... off."`}</p></>
            }, {
                char: { name: "Oaksplit" },
                content: <><p>{`"Ah, yes the fountain shall be a bit under wraps. As for theatre, I could spare a few workers, but none of them could be used in the mental capacity (I mostly have the guys who build stages and work lights). You could maybe ask someone like... what about Mayor Catalan? He could tell you what his people like?"`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`You think he would be capable and willing to run such an operation? I will ask him in that case. Thank you.`}</p>
                    <p>{`That was more or less all, I will not take more of your time, but before I go ... thank you for your help ... with everything.`}</p></>
            }, {
                char: { name: "Oaksplit" },
                content: <><p>{`"Oh, yes sure! No problem" the hulking half orc smiles and nods.`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`(Hoj, I would just like to ask you if you would be willing to take care for the Emily's House of Culture for a time being? I do not have enough mental energy to RP another thread, so this is just for the logs xD)`}</p></>
            }, {
                char: { name: "Sr. Catalan" },
                content: <><p>{`(What would I even do?)`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`(Supervise, make sure they don't start killing each other n stuff, appoint people you guess are most capable to run the facility on senior positions etc., given that you wouldn't be personally involved into day-to-day matters, find people that are better at doing your job than you are and make sure they continue to do a better job than you would, so that the wheels keep turning, people keep being helped, art keeps being produced and money keeps flowing.)`}</p>
                    <p>{`(So, the whole building is producing 350 Gp per dt and part of that is Nobody's Respite, but the majority is probably in House of Culture, given that it has shops and thicket sales, library and art studios.)`}</p></>
            }, {
                char: { name: "Sr. Catalan" },
                content: <><p>{`(Sure, I'll try and help.)`}</p>
                    <p>{`(Ok, so do you get those 350 gp, do I get a share now or do you get it?)`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`(Na naslednjem dt se lahko z Birog dogovorita kako si jih želita razdeliti, verjetno se bom spomnil pogoje specificirati jutri.)`}</p>
                    <p>{`(Nobody's Respite je več vreden iz vidika vpliva, ker je naravnost nabit z magijo, medtem ko ima preostanek Emily's House of Culture višjo ekonomsko vrednost.)`}</p>
                    <p>{`(Mape si verjetno že tako videl, vendar če jih še nisi, tukaj je link @Pond of Remembrance - Emily's Pond.)`}</p></>
            }, {
                char: { name: "Sr. Catalan" },
                content: <><p>{`(Pozabil koliko je velika ta stvar.)`}</p></>
            }]
        }, {
            title: "Arrangements - day 4",
            shortDesc: "Remember Me poskuša Morwyn zapustiti melodijo, ki jo je dobil od drevesa, ki je skoraj ubilo njenega moža kot poslovilno darilo. Prav tako želi preveriti, če ji lahko v varovanje zapusti del svoje dediščine. Morwyn ga razkrinka in darilo zavrne.",
            tags: ["depression", "guilt"],
            chars: ["Remember Me", "Morwyn", "Repko"],
            contents: [{
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`[Disguise Self - Remember Me]`}</p>
                    <p>{`The day has come. As she requested, Remember Me asked for the theater to be emptied. There will be no one that will bother them and if she asks around, people will direct her towards the stage where Remember Me is already waiting for her, meditating with Repko in its arms.`}</p></>
            }, {
                char: { name: "Morwyn" },
                content: <><p>{`(How does disguised Remember Me look like.)`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`(Like Remember Me.)`}</p></>
            }, {
                char: { name: "Morwyn" },
                content: <><p>{`As Morwyn walks into the empty theater, the path to the stage with the feygol is clear. As she enters the large stage hall, the faint smell of wood varnish and freshly worked wood and new fabric still permeate the air. On her shoulder, Caraxes sniffs and jumps into the air, flying ahead of her. Morwyn immediately spots Remember Me and makes her way over to talk to it, her soft white shirt shining in the dim and dark lighting.`}</p>
                    <p>{`"Hello. I have come to see what you are offering after all."`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`"Hello to you too, Lady Morwyn, as well as to Master Caraxes. Forgive me if I can not offer you my hand, but as of late I am working on quite potent chemicals while working on the project of mine, metalcrafting. They do not effect me as much as I have stone for my hands, but I do not know how they might effect your constitution."`}</p>
                    <p>{`Saying its greetings, feygol thinks to itself.`}</p>
                    <p>{`"Of course, of course, I indeed have something that might be of interest to you, but as I said, I mostly heard about your abilities trough Master Soldier's tales, so I do wander how ... embellished they might be. Would you care to show them?"`}</p>
                    <p>{`Mischievous smile crosses feygol's face as it waves at the stage.`}</p>
                    <p>{`"What do you say to a little friendly competition?"`}</p></>
            }, {
                char: { name: "Morwyn" },
                content: <><p>{`"As I said. Before I dedicate myself to anything I wish to hear the offer. I've already spent my time coming here so I wish somegood faith dealing in return."`}</p>
                    <p>{`Morwyn then narrows her eyes at Remember Mes arms trying to pick up the elements.`}</p>
                    <p>{`"Also I would appreciate it if you didn't share any rumors about my abilities onwards, because that is all you have since I know Commander Minamoto shared nothing of that nature."`}</p>
                    <p>{`D20 🎲: 11 + 5, Total: 16`}</p>
                    <p>{`(That's for the Disguise Self since she's taking a closer look.)`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`(You might not want to do that, you also do not know the spell is there, this is just for record keeping.)`}</p>
                    <p>{`Remember Me makes a sad face.`}</p>
                    <p>{`"Sadly, I can not show it to you, as it is not a thing and we are not yet at the place where I could share it anyway. It came to me when I saved his life, but I guess, that means less than I hoped to you as you seem quite ... unavailable. I do not particularly care about your abilities beyond that. I thought they might be of more use ..."`}</p>
                    <p>{`It looks at the ... theater ... building?`}</p>
                    <p>{`"... it is hard to say."`}</p>
                    <p>{`It is a long look.`}</p>
                    <p>{`"... but it saddens me that is not the case. I can not ask you to help me care for those that need help the way you are, so let us limit ourselves at what we have."`}</p>
                    <p>{`It smiles, softly, weakly.`}</p></>
            }, {
                char: { name: "Morwyn" },
                content: <><p>{`(Don't need to know, I'm investigating and studying him closely so even if i don't know about the spell, I should see if my roll is higher than save.)`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`(Well, this is more than 15, so lets see ...)`}</p>
                    <p>{`You also notice the spell, the way there is a slight delay between words and illusion, how shadow is just slightly different than the frame. But it is also quite clear from both that the difference is not significant. It is more like Remember Me is trying to mask a certain feature or a mark, while the general shape of the body is, as far as you can tell, exactly the same. It is quite a unique body-shape, so it is likely Remember Me.`}</p></>
            }, {
                char: { name: "Morwyn" },
                content: <><p>{`Morwyn steels her back, her lips pressing into a thin, displeased line.`}</p>
                    <p>{`"Is that so? Unfortunate. To demand of me everything while not revealing anything. Everything on our first meeting."`}</p>
                    <p>{`Her eyes flit over its form.`}</p>
                    <p>{`"To my knowledge you are accusing me of being unfeeling and uncaring while not knowing anything about me."`}</p>
                    <p>{`She smirks.`}</p>
                    <p>{`"I am somewhat glad than for I have learned a new lesson, because from all that I've heard about you I've expected a wise, open and generous individual. Now I've been proven not all rumors should be believed and not all achievements reflect the truth behind them."`}</p>
                    <p>{`She briefly looks to Caraxes, the imp immediately making a turn in the air and returning to her shoulders.`}</p>
                    <p>{`"Well, I am disappointed to find you as stilted, unbending and unfeeling as you look. Farewell."`}</p>
                    <p>{`She turns to leave.`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`"I am not accusing you of anything, I am just expressing my concerns that this meeting might have been a mistake ... on my part if you will."`}</p></>
            }, {
                char: { name: "Morwyn" },
                content: <><p>{`(Also, since I passed the check the illusion would break for me, without Remember me knowing.)`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`(No, it doesn't work that way, you just notice the illusion, not break it.)`}</p>
                    <p>{`(To discern that you are disguised, a creature can use its action to inspect your appearance and must succeed on an Intelligence (Investigation) check against your spell save DC.)`}</p></>
            }, {
                char: { name: "Morwyn" },
                content: <><p>{`(Hmmm... No. I fully see through the illusion i think.)`}</p>
                    <p>{`(Meh, my bad.)`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`While Morwyn is going away, she might heard Remember Me saying:`}</p>
                    <p>{`"... Well, I hope some day you notice that all our time is valuable ... and short."`}</p></>
            }, {
                char: { name: "Morwyn" },
                content: <><p>{`Ah he speaks she turns.`}</p>
                    <p>{`"A mistake, huh. A mistake I would call you approaching me, hidden under an illusion, not knowing who I am while expecting me to go along, and touting assumptions and rumors about my skill."`}</p>
                    <p>{`She looks at him from a small distance away.`}</p>
                    <p>{`"I like making friends, but I hate being looked down upon or having my secrets revealed. I wonder how you would like it."`}</p>
                    <p>{`She palms the amulet around her neck, her eyes briefly flashing as the feathers in her hair move in a phantom wind.`}</p>
                    <p>{`[Dispel magic on Disguise Self]`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`As the illusion drops ... she sees a thing of horror.`}</p>
                    <p>{`As she knows Remember Me, he is mostly made out of stone and Remember Me evolved many times before, but ... this one is just wrong.`}</p>
                    <p>{`It is not like it changed, more like many tiny woody roots are devouring its body, siphoning its life away from it. It is not clear to her what is going on, but one thing is clear. Remember Me is dying and ... it doesn't have much time left from what you can tell.`}</p>
                    <p>{`Also, it doesn't seem it noticed the illusion being broken.`}</p></>
            }, {
                char: { name: "Morwyn" },
                content: <><p>{`Morwyn's gaze drops to it's body and vines consuming it.`}</p>
                    <p>{`"While we didn't start out on the best footing, I would hope your time will not run short. Take care of your health and I will come to one of your plays in the future."`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`Remember Me just nods.`}</p>
                    <p>{`"Goodbye, Lady Morwyn."`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`Later that day Remember Me returns back to the Pond of Remembrance, to the most enclosed part of it. Part of its face falls into it, so it fishes it out with its fingers and places it on its face where it belongs.`}</p>
                    <p>{`[Mending]`}</p>
                    <p>{`It is a weak link, as a root that dislodged it is still there, but it is back on its place, where it belongs.`}</p></>
            }, {
                char: { name: "Repko" },
                content: <><p>{`Repko worriedly looks upon its lifelong friend.`}</p>
                    <p>{`"Ui?"`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`"Do not worry little one. We are almost done."`}</p>
                    <p>{`Remember Me places its finger into the water. It starts to vibrate. The melody of the world-tree, forever changing, forever evolving, forever harmonious. The melody that started to take root when it saved Minamoto. Melody of Minamoto, Remember Me, how they are connected to the universe, melody it wanted to share. A failure on its part. And now ... life for a life. Its druidic powers managed to keep melody at bay, but while working on its last project, they started to fade due to quantity of metal it was handling.`}</p>
                    <p>{`"Let us finish her."`}</p></>
            }, {
                char: { name: "Repko" },
                content: <><p>{`"Ui!"`}</p>
                    <p>{`Repko follows Remember Me with a worried face, collecting another piece that falls off the feygon as they go.`}</p></>
            }]
        }, {
            title: "Farewell - day 5",
            shortDesc: "",
            tags: ["depression", "guilt"],
            chars: ["Remember Me"],
            contents: [{
                char: { name: "Remember Me", token: 3 },
                content: <><iframe width="252" height="189" src="https://www.youtube.com/embed/VBBFDb0hC4Y"></iframe></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`After months and months of work as others finish their preparations for their next mission, Remember Me was working on, trying to stay ahead of the progression of the roots, taking hold of its body. And now, everything was in place. The only thing left was to combine the pond and the statue together and for course troubleshoot any potential error it made along the way.`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`Temperature regulation - CHECKED`}</p>
                    <p>{`Memory storage, removal and dispersal - CHECKED`}</p>
                    <p>{`Blessings dispersal - CHECKED`}</p>
                    <p>{`(this does not take hold till next mission, testing is being performed while missions are taking place)`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`(Sorry za slabo fotko, vendar sem med delom ugotovil, da bi moral še veliko truda vložiti v raziskave telesa, povrhu vilinskega, sorazmerno daljše noge od človeških, nižja postava ipd., nato še v kako oblačila sodijo gor in se mi enostavno ni dalo, morda če bi imel še teden ... tole je kako približno stvar deluje za občutek kaj se bo dogajalo, na podestu, sede, sproščeno, nagnjeno naprej, oči usmerjene v gladino pred seboj, dlani se dotikajo vode, desna za vroče, leva za hladno, ena noga visi v vodo, nato pa še druidic clothes & long ears.)`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`Remember Me finished the Pond of Remembrance and ... waited. Observed. Nobody's Faro de Luz Respite opened. Plants were now fully grown, their previously wild and somewhat unpredictable behavior was gone, as they were not following the will of the pond. Everything worked as intended. It was nice. It was harmonious. But more importantly ... it was a failure.`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`What was wrong with it, was that it worked exactly as expected. Its actions almost mechanical in their designs. In other words, it was not alive.`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`Remember Me was observing it for a few days. Then when Nobody's Respite cleared once again, it came closer. It knew the air is full of sweet alyssum, but it could not smell anything and due to its waning druidic powers, it could barely turn into an animal to smell it again. The progression of World-tree was severe. It will soon be over, one way or another.`}</p></>
            }, {
                char: { name: "Repko" },
                content: <><p>{`Ui?`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`"I still have one more trick to play before I go back to sleep, right Repko? You remember. You were not there, but you remember, don't you?"`}</p>
                    <p>{`Remember Me shares some of its memories and the surface of the water displays the image from good 33 years ago. Inside of it is an elf, sitting on the floor, petting its former shell.`}</p></>
            }, {
                char: { name: "Repko" },
                content: <><p>{`Repko hurries to its master, grabbing its leg, tightly, not willing to let go.`}</p>
                    <p>{`"Uiiiiii!"`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`"Sorry, but I have one more task left for you. Please, protect this little one when I am gone. Do not let it be alone like I was. Will you?"`}</p></>
            }, {
                char: { name: "Repko" },
                content: <><p>{`Repko does not want to look up, but it does give a quiet...`}</p>
                    <p>{`"Ui."`}</p>
                    <p>{`...in return.`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`"You also, Mezolček, you will protect your pond from intruders, won't you?"`}</p></>
            }, {
                char: { name: "Mezolček" },
                content: <><p>{`Fish's ugly head surfaces, looks at feygol for a moment or two, then dives again.`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`Remember Me understands that that was its way of accepting its task.`}</p>
                    <p>{`"Come now."`}</p>
                    <p>{`Remember Me offers a hand to Repko and Repko reluctantly jumps on.`}</p>
                    <p>{`"Goodbye, old friend."`}</p></>
            }, {
                char: { name: "Repko" },
                content: <><p>{`"Uiii..."`}</p>
                    <p>{`Repko starts drying out until nothing but an old turnip remains.`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`Remember Me takes one of the thinner and woodier vines, then ties it around the dryed turnip into a necklace. [Unseen Servant] ties it around elf's neck.`}</p>
                    <p>{`Remember Me exhales, which causes another stone to fall painfully from its body.`}</p>
                    <p>{`"Here we go."`}</p>
                    <p>{`Step by step it submerges into the center of the pool. There, it stops and looks up. There is a blurry visage of Emily right above it. Concentrating. Smiling. It returns a smile. And thinks to itself.`}</p>
                    <p><i>{`I hope this works.`}</i></p>
                    <p>{` It lifts its arms, high, higher, until their fingers are touching each other. She channeling into the pool, it, channeling out of it.`}</p>
                    <p><i>{`Please, work.`}</i></p>
                    <p>{`It starts to channel itself into the statue. It requests from a pool to copy all of its memories, every single one of them, but at the same time, it starts to take from its life and giving it to the statue on top of it. Roots starts to spread, greedily wanting too take everything that is left from themselves.`}</p>
                    <p>{`Remember Me knows, they can not take away from a life that is not there. And if he managed to survive until now and Minamoto is still alive, rules are not as strict as to disallow this little trick it wants to play. And it works. As Remember Me is channeling its life-force into the statue, statue ... well, it is still a statue made out of metal, it does not move, but it can feel it, it can feel it in the whole place around it. Something is going on. The whole place is starts murmuring as if something big is about to happen.`}</p>
                    <p>{`Remember Me quickens the transfer, its arms growing tired, its memories getting weaker, roots breaking ever-larger chunks off of its body. Remember Me is dying. And something new is starting to awaken in its stead. It knows it is not its Emily, but ... not important. Feygol tries its best to keep its arms up as they are starting to crumble. A little more, just a little more. As much as possible, its life entering the construct above it. A little more. Just a little more. Until there is nothing more to give.`}</p>
                    <p>{`And at that moment, Remember Me tries its best to make a brave face, one wearing a bright smile, with not a trace of pain.`}</p>
                    <p>{`"Remember me, Emily."`}</p>
                    <p>{`With that, it crumbles.`}</p></>
            }, {
                char: { name: "Remember Me", token: 3 },
                content: <><p>{`When heroes return, others can find its will. Both Nobody's Respites go to Birog as it proved most capable and willing to preserve them. The rest of Emily's House goes to patrons, but under Sir Catalan's supervision. In the coming years, new one will probably listen to the events all around the world, listening, curious, frustrated it can not go adventuring on its own, just like its father and mother did. After some time, it might decide to dive into the last gift father left with it. A melody. A melody of a World-tree. And with that, its roots would start to spread, trough the city, trough the island, slowly, exploring, learning, searching, until there is nothing new to discover. Then it might decide to follow its creators and just like Emily and Remember Me did, create a living construct that will go on, exploring further. But in between time, it would probably honor its father's wishes and protect Faro de Luz with everything it can, from time to time assisted by Repko, bound to Remember Me's life, used to create new Emily ... or however it decided to name itself. When the day comes, would it have to sacrifice itself like those before it did? Or would it find a way to finally overcome the barrier?`}</p>
                    <p>{`Only time will tell.`}</p></>
            }]
        }]
    }

    return { rpS1, rpS2 }
}