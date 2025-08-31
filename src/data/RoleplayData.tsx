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
                char: { name: "Minamoto", token: 0 },
                content: <><p>{`During the morning training after Remember Me rebuilds, Minamoto calls the little feygol.`}</p>
                    <p>{`"Remember me, leave the excersises for now. Come sit, we shall discuss."`}</p></>
            }, {
                char: { name: "Remember Me", token: 0 },
                content: <><p>{`Remember Me does so as instructed, Repko resting in its lap.`}</p></>
            }, {
                char: { name: "Minamoto", token: 0 },
                content: <><p>{`Minamoto slowly eases himself in a casual lotus position, moving with care. He invites the golem to sit beside him.`}</p>
                    <p>{`"Remember me, you seem to have resolved your problems from last time. I am glad. How do you feel?"`}</p></>
            }, {
                char: { name: "Remember Me", token: 0 },
                content: <><p>{`Remember Me thinks for a moment. How does it feel?`}</p>
                    <p>{`"Rested. Like if I was tired for a long time and I have taken a long nap."`}</p></>
            }, {
                char: { name: "Minamoto", token: 0 },
                content: <><p>{`Commander nods.`}</p>
                    <p>{`"Naruhodo, very good. Demo that is not what I meant."`}</p>
                    <p>{`He smiles.`}</p>
                    <p>{`"Do you feel anything different? Anything new? Do you feel the energy around you, inside of you?"`}</p></>
            }, {
                char: { name: "Remember Me", token: 0 },
                content: <><p>{`"Not sure about that, but I do feel lighter. My body feels easier to move than ever."`}</p>
                    <p>{`"Also, Repko is quite energetic, so I do get to feel quite a lot of energy around me."`}</p>
                    <p>{`Repko widely yawns with a cute little sound and turns around.`}</p>
                    <p>{`"Most of the time."`}</p>
                    <p>{`"Do you play poker?"`}</p></>
            }, {
                char: { name: "Minamoto", token: 0 },
                content: <><p>{`There is a moment of silence. And another. Then Minamoto erupts in laughter.`}</p>
                    <p>{`"Do I play poker? That is the game with cards corect?"`}</p>
                    <p>{`He shakes from laughter, unable to speak. After a shortwhile he composes himself.`}</p>
                    <p>{`"No, I do not play poker. Never tried it even actually."`}</p></>
            }, {
                char: { name: "Remember Me", token: 0 },
                content: <><p>{`"Oh, I just happened to notice you have a really good poker face, I believe you would do an amazing job at it. Now sorry to interrupt, something about energy, right 🙂?"`}</p></>
            }, {
                char: { name: "Minamoto", token: 0 },
                content: <><p>{`"Hmmm, poker face ..."`}</p>
                    <p>{`He thinks on it, but quickly continues.`}</p>
                    <p>{`"Hai, energy. When I woke you up last time I felt fluctuations in your ki, your life energy. Signs of circulation. It was what helped you back from the beyond. Since that happened, I think you might have better understanding of ki now. We can begin training your energy flow now."`}</p></>
            }, {
                char: { name: "Remember Me", token: 0 },
                content: <><p>{`"Ooooo, this is so exciting, I feel smarter already!"`}</p>
                    <p>{`"Yes yes Sir, my ki feels very good today."`}</p></>
            }, {
                char: { name: "Minamoto", token: 0 },
                content: <><p>{`"Hmmmm, totemo yoi, very good."`}</p>
                    <p>{`Minamoto brings out an incense holder and lights some jasmine incense.`}</p>
                    <p>{`"We shall begin with some breathing excersises. Just try breathing and relaxing. Feel it circle inside you. Rise up and down with your breaths."`}</p></>
            }, {
                char: { name: "Remember Me", token: 0 },
                content: <><p>{`Remember Me does as instructed.`}</p></>
            }, {
                char: { name: "Minamoto", token: 0 },
                content: <><p>{`"Feel the energies rising and falling. Let them build up and then release. Slowly, carefully."`}</p>
                    <p>{`Minamoto instructs, observing the feygol.`}</p>
                    <p>{`"Once it builds up, release it, to the outside. Feel the space around you, life force and energies in the air. Feel for changes, fluctuations, what is around you."`}</p></>
            }, {
                char: { name: "Remember Me", token: 0 },
                content: <><p>{`Remember Me tries to concentrate.`}</p>
                    <p>{`There is it. Stones, held together by magic, wood and clinging plants, hard inside with even harder stony protective outside.`}</p>
                    <p>{`There is Repko, in its lap, its familiar, family, sleeping.`}</p>
                    <p>{`But almost nothing else. No smells, tastes, almost no sounds, to touch, at least not in comparison to the magic ball of energy, its casting focus, sleeping in its lap.`}</p>
                    <p><i>{`Maybe I could ...`}</i></p>
                    <p>{`Remember Me concentrates on that magic ball of energy ... and slips into it.`}</p>
                    <p>{`Remember Me wakes up. He is way smaller now. And he is a plant. But that is not the interesting part. He sees the world as magic ball of energy given life sees it. As a magical landscape. There is no colors, no sounds, no tastes, just magic. Magic that vibrates the air, magic that gets excited due to certain tastes, magic that has a hard time invading into internal space of other magical spaces, so it is flowing around more freely than trough hard spaces of organic or inorganic bodies. Everything is magic. Even rocks and wood upon which it is standing. Especially somewhere deep inside, there are many strands of energy, concentrated in many metal threads, reinforcing the overall structure of Remember Me's body.`}</p></>
            }, {
                char: { name: "Minamoto", token: 0 },
                content: <><p>{`As the scent of incense flows, Minamoto's own breathing slows down as well.`}</p>
                    <p>{`"That's it. Ki is life and everything is ki. Remember that."`}</p></>
            }, {
                char: { name: "Remember Me", token: 0 },
                content: <><p>{`Remember Me would scratch its head, but given that his hands are at the moment attached to its head, he decides against it. Instead, he returns back to its body.`}</p>
                    <p>{`"I think I understand. Would you mind if I test it? In a sparring match that is."`}</p></>
            }, {
                char: { name: "Minamoto", token: 0 },
                content: <><p>{`"Of course, skills can only be learned with practice."`}</p>
                    <p>{`He frowns.`}</p>
                    <p>{`"Sadly, I am somewhat hurt at the moment, demo I will find you a good partner to train with."`}</p>
                    <p>{`He thinks for a second.`}</p>
                    <p>{`"Hmmm, somebody who can turn invisible would be best. Let me ask Morwyn if her little oni is available. Wait here for a moment."`}</p>
                    <p>{`He leaves towards his quarters.`}</p></>
            }, {
                char: { name: "Remember Me", token: 0 },
                content: <><p>{`Remember Me has nothing better to do than to train anyway, so it waits, training its ki a bit more.`}</p></>
            }, {
                char: { name: "Caraxes" },
                content: <><p>{`Caraxes is just in the vicinity of Bitterek's shop when he sees a tall figure approaching him.`}</p></>
            }, {
                char: { name: "Minamoto", token: 0 },
                content: <><p>{`"Little oni, do you have a minute?"`}</p>
                    <p>{`Minamoto calls out.`}</p>
                    <p>{`"I need your help."`}</p></>
            }, {
                char: { name: "Caraxes" },
                content: <><p>{`Caraxes, looks at Bitter, before flying over to Minamoto.`}</p>
                    <p>{`"Yesss? Misstrress iss notss herre ... but I amss ... I havess time."`}</p></>
            }, {
                char: { name: "Minamoto", token: 0 },
                content: <><p>{`"I need you to help me train somebody. You can turn invisible, hai? Come with me."`}</p></>
            }, {
                char: { name: "Caraxes" },
                content: <><p>{`"Train? I do nots knows how to do that ... Butss I can be unsseen, yess."`}</p>
                    <p>{`He lands on Minamoto's shoulder as he says that, digging his claws into his pauldrons.`}</p></>
            }, {
                char: { name: "Minamoto", token: 0 },
                content: <><p>{`"Mmmm, hai, very good."`}</p>
                    <p>{`They make their way back to the training grounds. Remember me can see Minamoto return with a grey imp upon his shoulder.`}</p>
                    <p>{`"Remember me, this is Caraxes. He will train with you this couple of weeks. Little oni, I want you to turn invisible and stalk around Remember me here. Do no attack him, just stalk him."`}</p>
                    <p>{`He then turns to the feygol.`}</p>
                    <p>{`"You on the other hand, must find him and touch him. Using the ki, your internal energy. This will be a hard excersise, demo I am sure you can manage."`}</p></>
            }, {
                char: { name: "Remember Me", token: 0 },
                content: <><p>{`"Ok. Nice to meet you, Sir Caraxes!"`}</p>
                    <p>{`"Repko, step to the side for a little bit, you have a very important role to fill. You, are a cheerleader."`}</p></>
            }, {
                char: { name: "Repko" },
                content: <><p>{`"Ui?"`}</p></>
            }, {
                char: { name: "Remember Me", token: 0 },
                content: <><p>{`"Yes yes, just make sure to put your everything into it!"`}</p></>
            }, {
                char: { name: "Repko" },
                content: <><p>{`"Uiiii!"`}</p>
                    <p>{`Repko steps aside and starts loudly observing.`}</p>
                    <p>{`"Ui ui uiiiiiii! Ui ui uiiiiiiiii! Ui ui uiiiiiiiii!"`}</p></>
            }, {
                char: { name: "Minamoto", token: 0 },
                content: <><p>{`"I will leave you to it, sadly after today, I won't be able to supervise you anymore. Demo, I will come back to check on your progress." Minamoto smiles: "Just remember, ki is life and everything is ki. Now start searching."`}</p></>
            }, {
                char: { name: "Caraxes" },
                content: <><p>{`Caraxes looks at the strange feygol. He had seen it roaming the streets before, but never paid it much mind.`}</p>
                    <p>{`"Hellos Rrremembrry. I wills hide now."`}</p>
                    <p>{`Caraxes waves at the feygol before snapping his clawed fingers and going invisible.`}</p></>
            }, {
                char: { name: "Remember Me", token: 0 },
                content: <><p>{`Remember Me focuses. The creature it is looking for is rather small in size and it will try to evade, so to grapple or punch it is probably out of question. It will need to employ its footwork, something it has quite a little experience with, given that most of its form till this point were short-legged.`}</p>
                    <p>{`Remember Me is looking for any signs of movement. Creature is invisible, but maybe there are footprints, movement of dust, a strange wind, something to let it know where the creature is hiding.`}</p></>
            }, {
                char: { name: "Caraxes" },
                content: <><p>{`(He can fly.)`}</p></>
            }, {
                char: { name: "Minamoto", token: 0 },
                content: <><p>{`From the side Minamoto instructs.`}</p>
                    <p>{`"Do not look, you will not find him like that. Feel, search with your ki, find his."`}</p></>
            }, {
                char: { name: "Remember Me", token: 0 },
                content: <><p>{`Remember Me thinks to itself.`}</p>
                    <p><i>{`But what if its invisibility makes its ki invisible? I have no idea what I am up against.`}</i></p>
                    <p>{`It tries to get a feel of its surrounding. Then it kicks at the suspicions part of a training field.`}</p></>
            }, {
                char: { name: "Caraxes" },
                content: <><p>{`Caraxes observes the feygol, looking at it from where he hovers around its head's height. He grins as he sees Remember me kick at the training field opposite him. He concentrates on his invisibility, trying to produce as little movement as possible.`}</p></>
            }, {
                char: { name: "Remember Me", token: 0 },
                content: <><p>{`Remember Me feels the slight movement of the air and realizes air around it might also be a suspect. It punches in the general direction of where it feel fiend might be, then it punches again somewhere else, then kicks in the opposite direction, not because it knows it is there, but to limit its options.`}</p></>
            }, {
                char: { name: "Minamoto", token: 0 },
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
                char: { name: "Minamoto", token: 0 },
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
                char: { name: "Minamoto", token: 0 },
                content: <><p>{`"Mmmm, hai, little oni speaks well. You know what, try closing your eyes, maybe it will help. Instead of looking try feeling that way, yes."`}</p>
                    <p>{`Minamoto nods, instructing Remember me.`}</p>
                    <p>{`"Remember what we practiced. Breathing, channeling your ki, all that is very important. Try again."`}</p></>
            }, {
                char: { name: "Remember Me", token: 0 },
                content: <><p>{`As Caraxes turns invisible again, Remember Me gets confused, but closes its eyes and focuses. Nothing good can come from simply kicking and Soldier has years if not decades of experience in the ki he is mentioning, so it need something faster, something only it can do. Then it remembers ...`}</p>
                    <p><i>{`I have Emily.`}</i></p>
                    <p><i>{`What would Emily do? She was weak. And she was blind her entire life. But time and time again, she fought opponents better than her. And yes, she almost died most of those encounters, but she survived. How?`}</i></p>
                    <p>{`Thinking about Emily makes Remember Me happy. Her grace and clumsiness, her will to win, her ability to move when every step is uncertain. Remember Me's feet begins to move. Its body starts to move. It is starting to develop something new, something it didn't have before. A rhythm. Its posture changes, its body as if following one mysterious, continuous motions.`}</p></>
            }, {
                char: { name: "Repko" },
                content: <><p>{`Repko notices the change and takes out its pair of tiny maracas and starts shaking in the rhythm and chanting.`}</p>
                    <p>{`"Uiiiiiiiiiiiiiiiuiiiiiiiiiiiiiiiiuiiiiiiiiiiiiiiuiiiiiiiiiiiiiiuiiiiiiiiiiiiiuiiiiiiiiiiiii...!"`}</p></>
            }, {
                char: { name: "Remember Me", token: 0 },
                content: <><p>{`Like its body, world behind its closed eyes becomes full of sounds and motions. Sound and movement are everywhere, energy is everywhere, maybe this is the ki Soldier was talking about?`}</p></>
            }, {
                char: { name: "Caraxes" },
                content: <><p>{`Caraxes observes Remember me doing something akin to meditation. The feygol seems like it is focusing on its surroundings in some way. Time to movess a bit. Caraxes thinks and quietly flaps closer to Minamoto, making sure the commander doesn't notice him.`}</p></>
            }, {
                char: { name: "Remember Me", token: 0 },
                content: <><p>{`Something moves, but where? It can not see where the movement is coming from! But at least, it feels like it can react in a new way, not needing to start moving, Remember Me's movement simply follows the flow of the world, moving as if being a part of it.`}</p>
                    <p>{`It also notices something new. Its body is new and it is not used to it, but ... no other body was as Emily-like as this one. It was never able to do so before, but now ... it almost feels like it has hundreds of years of experience using it [Guidance].`}</p>
                    <p>{`Also, it can not disgrace Emily and her memory, it has to try its best, it has to perform beyond its limits, failing or succeeding, good is not good enough! [Bardic Inspiration]`}</p></>
            }, {
                char: { name: "Repko" },
                content: <><p>{`"Uiiiiiiiiiiiiiiuiiiiiiiiiiiiiiiuiiiiiiiiiiiiiiuiiiiiiiiiiiiuiiiiiiiiiii...!"`}</p></>
            }, {
                char: { name: "Remember Me", token: 0 },
                content: <><p>{`With that, one step, another step, kick, kick, [touch?]...`}</p></>
            }, {
                char: { name: "Caraxes" },
                content: <><p>{`Caraxes sees the feygol flailing around at first, reaching into multiple directions, until he stills and turns in his direction. Krax! Did he hear me. Caraxes stills, trying to quiet his wingbeats as he floats to the right, checking if Remember me will follow him.`}</p></>
            }, {
                char: { name: "Remember Me", token: 0 },
                content: <><p>{`Caraxes tries to evade, but more it moves, easier it is for Remember Me to find it, touching it for the first time ...`}</p></>
            }, {
                char: { name: "Repko" },
                content: <><p>{`"Uiiiiiiiiiiiii!"`}</p>
                    <p>{`Repko cheers as it can sense Remember Me's thought's trough their telepathic link.`}</p></>
            }, {
                char: { name: "Remember Me", token: 0 },
                content: <><p>{`... annoying Caraxes, that dodges Remember Me's next move, but it is almost like Remember Me was leading him into position for another touch, step back, spin kick, touch again, spin kick, touch ...`}</p>
                    <p>{`If anyone were to be able to see them, it would almost seem as if they are dancing, feygol and ever more annoyed and confused fiend, one leading, one being led, to the tune of two tiny maracas and chirping of a tiny excited turnip.`}</p></>
            }, {
                char: { name: "Minamoto", token: 0 },
                content: <><p>{`Minamoto nods, a satisfied smile on his face. Not wishing to disturb, he leaves quietly, letting Remember me get accustomed to his new movement.`}</p></>
            }, {
                char: { name: "Remember Me", token: 0 },
                content: <><p>{`Remember Me notices.`}</p>
                    <p>{`"Bye bye, Master Soldier!"`}</p></>
            }, {
                char: { name: "Caraxes" },
                content: <><p>{`Annoyed, Caraxes weaves through the air to avoid the feygol, evading his touch at any cost. It is obvious to him that Remember me finally got a hold of the sense Minamoto wished to unlock within him.`}</p></>
            }, {
                char: { name: "Remember Me", token: 0 },
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
                char: { name: "Remember Me", token: 0 },
                content: <><p>{`"Misstress Morrwyndell Eldamarrr you say? This almost sounds like someone else I heard about not so long ago from Master Soldier. It was ... Morning ... Morrowind ... Morwyn? He said he would be prepared to kill for her. Strange coincidences, don't you agree?"`}</p></>
            }, {
                char: { name: "Caraxes" },
                content: <><p>{`Caraxes nods.`}</p>
                    <p>{`"That iss herr."`}</p></>
            }, {
                char: { name: "Remember Me", token: 0 },
                content: <><p>{`"Ou, in that case, send her my thanks if you will, for talking you away from her for my training 🙂"`}</p>
                    <p>{`"By the way, do you happen to feel the same? Would you also kill for your Mistress?"`}</p></>
            }, {
                char: { name: "Caraxes" },
                content: <><p>{`"I wills, you could alsso ssay hello yourrself. I am arround the place a lots."`}</p>
                    <p>{`Caraxes huffs and nods again.`}</p>
                    <p>{`"Of courrse. If sshe ssaid, I woulds kill."`}</p></>
            }, {
                char: { name: "Remember Me", token: 0 },
                content: <><p>{`"What if she doesn't tell you to do it? Would you still do it anyway?"`}</p></>
            }, {
                char: { name: "Caraxes" },
                content: <><p>{`"Yesss. It iss in my contrract. And I likess to do it."`}</p></>
            }, {
                char: { name: "Remember Me", token: 0 },
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
                char: { name: "Ramember Me", token: 0 },
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
            chars: ["Remember Me", "Repko"],
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