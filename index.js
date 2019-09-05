
const express = require('express');
var path = require('path');
const app = express();
const port = process.env.PORT || 3000;

const pets = [
    {
        id: '0',name: 'Unicorn',
        photoUrl: 'https://vignette.wikia.nocookie.net/harrypotter/images/e/e4/Unicorn_FBCFTWW.png/revision/latest/scale-to-width-down/220?cb=20161130204538',
        textFromWiki: `The Unicorn is a white horse with a horn sticking out of its head. 
        An iconic creature of magic, the existence of unicorns is one of the worst-kept secrets of the wizarding world, as unicorns are inextricably associated with magic in the Muggle world. 
        These majestic equines possess potent magical properties, with their tail hairs being designed by Garrick Ollivander as one of the "Supreme Cores," which is a distinction shared by only two other beasts.
        
        Unicorn foals are born pure gold in colour. They remain so until they are about two years old, at which time they turn silver in colour. At around four years old their horn grows in. They are fully grown at about seven years old, at which at this age they turn a shade of pure white that is so bright that it makes freshly fallen snow look grey in comparison. Their hooves are golden (remaining so from their gold stage, the first two years of their life), and their blood is silver-blue and shines under the moonlight. It is not mentioned how long a Unicorn can live for.
        Unicorns inhabit the forests of Europe, including the Forbidden Forest by Hogwarts School of Witchcraft and Wizardry.
        Unicorns prefer a woman's touch, but the young ones are more trusting and do not mind men as much. Unicorns are also so fleet of the hoof that they can rarely be caught by humans. They are also fast enough to outrun werewolves with absurd ease. Wandmakers such as the Ollivander family also pluck hairs from the tails of the creatures to use in wands as cores. Not aggressive without cause, but should be treated with great respect.
        Unicorns are capable of moving faster than Werewolves. During the detention in the Forbidden Forest in 1992, Harry asked if a werewolf could be killing the unicorns and Rubeus Hagrid replied that they are not fast enough to catch Unicorns.
        `,
    },
    {id: '1',name: 'Raven', photoUrl: 'https://vignette.wikia.nocookie.net/harrypotter/images/3/37/CuriousRaven.png/revision/latest?cb=20130615201202', textFromWiki: 'Raven', },
    {id: '2',name: 'Three headed dog', photoUrl: 'https://vignette.wikia.nocookie.net/harrypotter/images/a/a3/Fluffy_HPCB.png/revision/latest?cb=20170204211603', textFromWiki: 'Dog', },
    {id: '3',name: 'BakBic', photoUrl: 'https://vignette.wikia.nocookie.net/harrypotter/images/a/a6/Hippogrif_FBCFWW.png/revision/latest?cb=20161202001443', textFromWiki: 'Hippogrif', },
    {
        id: '4',name: 'Occamy', photoUrl: 'https://vignette.wikia.nocookie.net/harrypotter/images/2/29/Occamy_FBCases.png/revision/latest?cb=20161129174938',
        textFromWiki: `The Occamy is a winged, serpentine magical beast native to the Far East and India.
        
        Description
        
        It is a plumed, two-legged serpentine-bodied creature with wings that reached up to fifteen feet in height. The Occamy is extremely aggressive to anyone who approaches it, and lives off of insects, rats, birds, and occasionally monkeys. 
        It is extremely protective of its eggs, which are made of the most pure and soft silver. 
        It is found in the Far East and India.
        
        The Occamy is known to be choranaptyxic, meaning it grows or shrinks in order to fit available space.
        It is a known rare possible corporeal form of the Patronus Charm.
        
        History
        Newton Scamander had several Occamies in his suitcase during his visit to New York in 1926.
        At some point during his teaching career, the Care of Magical Creatures Professor Silvanus Kettleburn brought an Occamy to Hogwarts School of Witchcraft and Wizardry.
        It was once Gilderoy Lockhart's ambition to create a line of haircare products, as he was very proud of his naturally bouncy and wavy hair. He wanted to mass produce the products with his secret ingredient: Occamy egg, as the main ingredient for Occamy egg yolk shampoo.[6] As Occamies are very territorial, it proved to be too dangerous and too expensive to supply. It is unknown if Lockhart, a long-term resident of St Mungo's, recalled this failed aspiration.
        
        Etymology
        The word "Occamy" is derived from the name of the English philosopher Occam, who invented the methodological principle "Occam's Razor", which asserts that when evaluating two competing explanations for a situation one should accept the one that requires least assumptions to be made (or, in other words, nothing should be presumed to exist that is not absolutely necessary for explanation).
        As such, the naming of this creature as an "Occamy" is a joke on the part of J. K. Rowling, since the existence of the Occamy itself (and just about every other creature described in Fantastic Beasts and Where to Find Them) has no reason to exist and came into being solely for the sake of fleshing out the aforementioned book.        
        "Occamy" is also phonetically similar to the Japanese word "ookami" (大神), which translates into "great god" or "wolf" (a wordplay used in the video game Okami, which starred a goddess in the form of a wolf). 
    `, },
    {id: '5',name: 'Hedwig', photoUrl: 'https://vignette.wikia.nocookie.net/pottermore/images/https://vignette.wikia.nocookie.net/harrypotter/images/1/1e/Hedwig_Snowy_Owl_PM.png/revision/latest/scale-to-width-down/350?cb=20161123234010/b8/Hedwig_b4c3m1_midground.png/revision/latest?cb=20150922095502', textFromWiki: 'Owl', },
];

app.use('/static', express.static(path.join(__dirname, 'public')));
app.use('/', express.static(path.join(__dirname, 'public')));
app.get('/pets/1', function (req, res) { res.sendFile('1.html', {root: 'public'}) });
app.get('/pets/2', function (req, res) { res.sendFile('2.html', {root: 'public'}) });
app.get('/pets/:petId', function (req, res) { res.redirect('/') });
app.post('/pets/', function (req, res) { res.json(pets)});
app.post('/pets/:petId', function (req, res) {
    res.json(pets.filter(pet => pet.id === req.params['petId']));
});

app.listen(port, () => console.log(`Pets app server listening on port ${port}!`));