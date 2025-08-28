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
                char: { name: "Minamoto", token: 0 },
                content: <><p>{`Another afternoon of bashing and raging passes by. While the soldiers stationed at the base have gotten a bit used to it, Remember me's rampage still causes a bit of a disturbance in the training area. Enough for commander Minamoto to finally take notice and investigate. As the tall elven warrior enters the sandy area, he is a witness to yet another dummy smashed to splinters by the raging feygol. Seeing as this little creature might need some guidance he walks over.`}</p>
                    <p>{`"You posses a lot of strength Ishi no reikon. Demo, I sense much rage and wrath behind your blows. Bushido, a warrior's path is not just one of mindless violence. Tell what troubles you."`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`Remember Me stops, somewhat disturbed. It saw the man before, but where? Another soldier? Maybe a foreigner? It understood maybe half of what soldier was saying. Maybe if it ignores him, he will go away, like the rest of them? Honestly, it was kind of getting used to it. It slowly walked to another dummy, grabbed it, brought it back and fixed it on its place. There, perfect! It started growing thorns all over its arms again.`}</p></>
            }, {
                char: { name: "Minamoto", token: 0 },
                content: <><p>{`Minamoto sighs, but does not shy away. Seeing how Remember me steps towards another dummy, he just steps in front of it blocking the way.`}</p>
                    <p>{`"Enough, Ishi no reikon. No more mindless destruction on my training grounds. Tell me what is wrong so I can help. Or leave."`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`Remember Me stops. Soldier does not want to go away? Strange. It would even dare to step on its way. Stranger. But it liked his conviction. The one Oaksplit seems to lack. It thought to itself ... What is wrong with me? It scratched its head, looked away, and quietly mumbled.`}</p>
                    <p>{`"I don't know."`}</p></>
            }, {
                char: { name: "Minamoto", token: 0 },
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
                char: { name: "Minamoto", token: 0 },
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
                char: { name: "Minamoto", token: 0 },
                content: <><p>{`Minamoto looks over the little golem, standing and sitting, in a bit of a confusion.`}</p>
                    <p>{`"Hmmm, why are doing that?"`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"I am trying to breathe, Sir, I think it is working!"`}</p></>
            }, {
                char: { name: "Minamoto", token: 0 },
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
                char: { name: "Minamoto", token: 0 },
                content: <><p>{`They sit in quiet for a second, before Minamoto continues.`}</p>
                    <p>{`"Why do you want to kill, Remember me?"`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`Remember Me thinks to itself`}</p>
                    <p>{`"I don't. I don't even know what it means. But they do say problems go away when you do, so it is probably useful for getting rid of your problems."`}</p>
                    <p>{`"Do you kill often, Sir?"`}</p></>
            }, {
                char: { name: "Minamoto", token: 0 },
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
                char: { name: "Minamoto", token: 0 },
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
                char: { name: "Minamoto", token: 0 },
                content: <><p>{`Minamoto remains quiet, noticing the sudden change, interested, but does not press it.`}</p>
                    <p>{`"Emily Nightsong. Never heard of her before. Demo if you want to tell me about it, I would like to hear it."`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`There is almost a sigh of relief coming from feygol as it happily starts telling the story of Emily`}</p>
                    <p>{`"Gladly! Emily Nightsong was born blind, sickly and weak into a druid clan of Leshisel to the mother Natalija Nightsong. She was one of the top druids, so she expected a lot from her, but Emily wasn't exactly able to perform up to her expectations and her clan was very big on "everyone gets what is able to earn with its work", so /.../ but even so many other kids and clan servants hated her, so much attention was placed on her, even if she was failing at her best, while others were better from her /.../ especially Penelope, because she was better at druidcraft than her, so she /.../ and similarly less capable Turtil, who was envious of attention she was getting, or Orhida, who was mostly doing it for drama /.../ but she also had a friend, very capable girl Heliana, who sometimes defended her but she was older and very bussy with her studies, so /.../ and there was Timberly, who was always nice to her and Emily had a crush on him, but he was older and /.../ so she was most of the time left to herself. But she tried, even if she was blind she if need be went to the forest herself and often returned a few days later ... or was found, ragged and sickly, and then she went again, till she finished her task, for her family, that expected so much from her, she /.../ but many servants envied her, how she tried, how they had to worry about her getting sick, or hurt, how they had to take care of her, like she is better than them, because she doesn't give up /.../ everyone in clan had to make a feygol to grow up and become a proper adult or they had to serve, better druids they were, more valuable servant they were, but only a servant and not the adult, because feygols were valuable, they protected clan, the forest ... or were sold to the island court ... so it was very important for them to make them /.../ so she became mature, but not an adult, but she could if only she could make a feygol, any servant could at any time become an adult, valuable, so she kept trying and others hated her even more, she was not good at being a servant, but even worse when she was constantly trying and getting sick /…/ so she run away. Not to be a burden, to learn on her own, to learn from other people, people outside her clan, people outside her island, she explored, she learned, she traveled to elementals /…/ and she learned from gnome technicians on how to make /…/ or from wizards how to make a golem where she /…/ or from necromancers, that one was a scary one, because /…/ or when she was trying to learn from ghosts, it was really hard to get their attention, so she /…/ until she finally did it! Sort of. She made the first me. I can still remember me. Moving, speaking, even casting very simple spells, but something missing, so she started taking that something that was missing from her and giving it to me. And that is the last thing I remember from her, before I wake up and she goes to sleep, giving me final directions, to remember her, to remember Emily. I at first stayed with her, hoping she wakes up, but she didn't, so after some time I went on, to make sure people remember Emily. She is my mother, my creator, my model and my hero. And I want everyone to have someone like her. To remember someone like her. To keep them going. Like me. She keeps me going. And I remember her."`}</p>
                    <p>{`"I also have druidic clothes that are just like hers, they don't fit me, but I remember. I also have her favorite incense, and everything that I remember, I record in my book of Emily, so I never forget. And even if I am not together anymore, world can still remember Emily. This is why I tried to create a place up in the city where I could tell people about Emily. Place about her. It could still be there even if I am not, telling a story of Emily. That funny guy with a boomstick taught me that."`}</p></>
            }, {
                char: { name: "Minamoto", token: 0 },
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
                char: { name: "Minamoto", token: 0 },
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
                char: { name: "Minamoto", token: 0 },
                content: <><p>{`Minamoto laughs.`}</p>
                    <p>{`"Indeed we are different. But the same life energy flows through both of us. In Yamato we call it ki. When we fight, we release, channel, it flows in our bodies. When you fight you release you ki, without even knowing it. I will teach you how to channel it. How to properly focus."`}</p>
                    <p>{`Minamoto thinks a little.`}</p>
                    <p>{`"What did you feel, when you were striking those dummies earlier?"`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`Remember Me thinks. It wasn't really thinking much, it did  not need to, it was way too easy to smash them, but ...`}</p>
                    <p>{`"Anger? Frustration? Relief? Disappointment?"`}</p></>
            }, {
                char: { name: "Minamoto", token: 0 },
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
                char: { name: "Minamoto", token: 0 },
                content: <><p>{`"Very good, feel the energy build up. Then when you can take no more, release it. But slowly. Controlled."`}</p>
                    <p>{`Minamoto nods, instructing Remember me.`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"Without moving?"`}</p></>
            }, {
                char: { name: "Minamoto", token: 0 },
                content: <><p>{`"Correct, just the energy. No movement."`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`Remember Me gets back to its feeling. Ok ... how should it go about it? It carefully touches it.`}</p>
                    <p>{`Pain`}</p>
                    <p>{`Well, that is not good. Let's try breathing ... no, no movement. Hmmmm ... what about poking it. But with a really really long stick?`}</p>
                    <p>{`It imagines a very long stick and starts poking it. It does not seem amused. In fact, it starts growing, gnarling, growling, it is not happy, not happy at all.`}</p>
                    <p>{`"Ok, I think something is happening. What should I do now?"`}</p></>
            }, {
                char: { name: "Minamoto", token: 0 },
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
                char: { name: "Minamoto", token: 0 },
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
                char: { name: "Minamoto", token: 0 },
                content: <><p>{`Minamoto sees this, immediately kneeling down`}</p>
                    <p>{`"Remember me. Remember me! Are you alright?!"`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`Rocks move a bit, but no proper answer.`}</p></>
            }, {
                char: { name: "Minamoto", token: 0 },
                content: <><p>{`Minamoto calls out in a strong voice, commander's voice.`}</p>
                    <p>{`"CLERIC! I need a cleric here now! Or a medic. Move it men."`}</p>
                    <p>{`Suddenly the entire field is buzzing with activity, soldiers running for the cleric or a medic. Very quickly a person in white robes sits down besides the fallen feygol, looking him over.`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`Alive, but in not so good state. Probably had better days.`}</p></>
            }, {
                char: { name: "Minamoto", token: 0 },
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
                char: { name: "Minamoto", token: 0 },
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
                char: { name: "Minamoto", token: 0 },
                content: <><p>{`"You are very interesting, ishi no reikon. You know what. Practice the new breathing. Feel it. Try controling it, make it faster, slow it down. Then find me after, when you discover all the secrets. And we shall continue with your training. Is that alright?"`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"If you say so!"`}</p>
                    <p>{`It salutes as it saw soldiers doing.`}</p></>
            }, {
                char: { name: "Minamoto", token: 0 },
                content: <><p>{`Minamoto smiles, salutes back and returns back to his duties, his head still shaking from all the wonders he had seen and heard today.`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`Before he goes, question pops up in Remember Me's head.`}</p>
                    <p>{`"Sir Soldier? May I ask you something, before you go?"`}</p></>
            }, {
                char: { name: "Minamoto", token: 0 },
                content: <><p>{`Minamoto stops and turns, deep in though.`}</p>
                    <p>{`"Hmmm, hai, yes of course. What is it?"`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"I just remembered ... Morwyn, you mentioned. Would you ... stop things for her?"`}</p></>
            }, {
                char: { name: "Minamoto", token: 0 },
                content: <><p>{`"I would yes, without hesitation."`}</p>
                    <p>{`There is no doubt in his eyes, just conviction and absolution.`}</p></>
            }, {
                char: { name: "Remember Me", token: 1 },
                content: <><p>{`"Ok, thank you!"`}</p>
                    <p>{`It waves the soldier goodbye.`}</p></>
            }, {
                char: { name: "Minamoto", token: 0 },
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
            chars: ["Remember Me"],
            contents: [{
                char: { name: "Remember Me", token: 0 },
                content: <><p>{`"Hello. Hello? Sir? Yes, you, sir. I have a question. It this yours?"`}</p>
                    <p>{`Points at the Rosa Castle behind the soldier guarding the gate.`}</p></>
            }, {
                char: { name: "", token: 0 },
                content: <><p>{``}</p></>
            }, {
                char: { name: "", token: 0 },
                content: <><p>{``}</p></>
            }, {
                char: { name: "", token: 0 },
                content: <><p>{``}</p></>
            }, {
                char: { name: "", token: 0 },
                content: <><p>{``}</p></>
            }, {
                char: { name: "", token: 0 },
                content: <><p>{``}</p></>
            }, {
                char: { name: "", token: 0 },
                content: <><p>{``}</p></>
            }, {
                char: { name: "", token: 0 },
                content: <><p>{``}</p></>
            }, {
                char: { name: "", token: 0 },
                content: <><p>{``}</p></>
            }, {
                char: { name: "", token: 0 },
                content: <><p>{``}</p></>
            }, {
                char: { name: "", token: 0 },
                content: <><p>{``}</p></>
            }, {
                char: { name: "", token: 0 },
                content: <><p>{``}</p></>
            }, {
                char: { name: "", token: 0 },
                content: <><p>{``}</p></>
            }, {
                char: { name: "", token: 0 },
                content: <><p>{``}</p></>
            }, {
                char: { name: "", token: 0 },
                content: <><p>{``}</p></>
            }, {
                char: { name: "", token: 0 },
                content: <><p>{``}</p></>
            }]
        }, {
            title: "Title",
            shortDesc: "",
            tags: ["depression", "guilt"],
            chars: ["Remember Me"],
            contents: [{
                char: { name: "", token: 0 },
                content: <><p>{``}</p></>
            }]
        }, {
            title: "Title",
            shortDesc: "",
            tags: ["depression", "guilt"],
            chars: ["Remember Me"],
            contents: [{
                char: { name: "", token: 0 },
                content: <><p>{``}</p></>
            }]
        }, {
            title: "Title",
            shortDesc: "",
            tags: ["depression", "guilt"],
            chars: ["Remember Me"],
            contents: [{
                char: { name: "", token: 0 },
                content: <><p>{``}</p></>
            }]
        }]
    }

    return { rpS1, rpS2 }
}