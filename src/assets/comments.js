const comments = [
    {
        name: 'Mike Shinoda',
        daysAgo: 4,
        comment: 'Fabolous book , took me on a time travel.'
    },
    {
        name: 'Elizabeth Gilbert',
        daysAgo: 10,
        comment: 'WRITING STYLE: 3.5/5 , SUBJECT: 4/5, CANDIDNESS: 4.5/5, RELEVANCE: 3.5/5, ENTERTAINMENT QUOTIENT: 3.5/5'
    },
    {
        name: 'John Smith',
        daysAgo: 37,
        comment: "Look, I'm not a happy crier. I might cry at songs about leaving and missing someone; I might cry at books where things don't work out; I might cry at movies where someone dies. I've just never really understood why people get all choked up over happy, inspirational things. But Michelle Obama's kindness and empathy changed that. This book had me in tears for all the right reasons."
    },
    {
        name: 'Waqas Travers',
        daysAgo: 100,
        comment: 'Having felt ashamed many times on my not having read this book, I quietly ordered the book (before I saw the movie) from amazon.in and sat down to read it. I don’t remember what I expected it to be – maybe more like a chick lit thing but it turned out quite different. '
    },
    {
        name: 'Alishba Blake',
        daysAgo: 29,
        comment: 'The author grew up in a survivalist family in Idaho, as the youngest child. She was not homeschooled—instead, she simply didn’t go to school at all, due to her father’s mistrust of public schools. In an effort to escape abuse, she decides to go to college, and by her force of will, does well enough on the ACT to get into Brigham Young University. This memoir is a story of her internal struggle—to believe her own version of her life and to have the strength to break away from her past.'
    },
    {
        name: 'Laila Hunter',
        daysAgo: 28,
        comment: 'This book takes a seeker on a journey to self-discovery; not only by providing helpful tools that encourage curiosity and introspection, but by also taking the reader’s hand and walking step-by-step through real life examples.'
    },
    {
        name: 'Coco Reeves',
        daysAgo: 27,
        comment: ' The author’s willingness to be candid and vulnerable throughout allows for a beautifully relatable transformation.'
    },
    {
        name: 'Elouise Peters',
        daysAgo: 26,
        comment: 'There are many lessons to be discovered here and I believe that everyone in business should read this book.'
    },
    {
        name: 'Priscilla Mullen',
        daysAgo: 25,
        comment: 'Jenny Lawson is the voice so many of us have been looking for years. In Furiously Happy, she is brutally and unflinchingly honest. You will cry with her, not only because the stories are heartbreaking, but because you see yourself or someone you love in her words. You will laugh with her to the point that you are cackling out loud and people think that you’re insane. But the most important message she teaches readers is that it’s okay to be broken. It’s okay to not be able to see the light at the end of the tunnel because everything will eventually be okay.'
    },
    {
        name: 'Russell Huffman',
        daysAgo: 24,
        comment: '.One of the core concepts in Atomic Habits is to focus on the small improvement. The impact a 1% improvement per day can make may appear negligible at first, but Clear makes a compelling argument that in the case of habits, thinking small produces the biggest results over time.'
    },
    {
        name: 'Jeremiah Mcgill',
        daysAgo: 23,
        comment: '“Habits are the compound interest of self-improvement,” explains Clear. Over the months and years, the accumulated effect of small habitual daily behaviors is staggering.'
    },
    {
        name: 'Matteo Donovan',
        daysAgo: 22,
        comment: ' The book is conversational, and includes many interesting stories, making it easy to read – and hard to put down (I read it cover to cover in one day). It’s possible this might become your most highlighted personal improvement book because every page is packed with memorable and quotable gems of advice. Highly recommended.'
    },
    {
        name: 'King Ryan',
        daysAgo: 21,
        comment: 'If you’re looking for a better understanding of how your mindset affects your opinions, self-worth, outlook on the world, personal limitations and the trajectory of your life, read Carol Decker’s Mindset now. There are many case studies in the book about celebrities, corporate leaders, and sports legends displaying the different mindsets, and these real-world examples make for a fascinating read. If you want to learn more about yourself and those around you, this book will be a great investment in your success.'
    },
    {
        name: 'Boris Salinas',
        daysAgo: 193,
        comment: ' This novel is a magical story that reveals the essence of life, love and loneliness. Due to the simplicity of the prose style, breezy and funny illustrations, vividness of imagination this simple yet insightful story is considered to be one of the greatest literary works of all times.'
    },
    {
        name: 'Aqib Norton',
        daysAgo: 180,
        comment: 'This book is a tale of a young prince who has left his tiny planet and wanted to find the answers for questions that disturbed him and at the same time it discloses the story of a man who has gained knowledge of life nature from a pure child whose voyages and virtuousness have inspired him and brought wisdom. The whole book is permeated with love, fulfillment of expectations and maintenance of those relationships.'
    },
    {
        name: 'Aqib Norton',
        daysAgo: 175,
        comment: 'One of the most striking features of the book is the uncompromising approach of its author. She constantly rejects all halftones and any attempts to evade from responsibility. Everything becomes very clear and straightforward: there is a way to creativity and if someone refuses to choose it, he betrays creativity and himself. This position requires taking a very big responsibility and only few people can bear it.'
    },
    {
        name: 'Boris Salinas',
        daysAgo: 16,
        comment: 'In the literature one of the bright examples of heroes that fulfill the heroic code principles is Achilles in the Iliad. He is there the hero who fights for pure heroics, which is why to the mind of a modern person he may seem to be selfish, cruel and hateful. Hector and Diomedes pose perfect contrasts to Achilles, and if we compare these characters, it will become evident who is a hero.'
    },
    {
        name: 'King Ryan',
        daysAgo: 15,
        comment: 'This book is a great value! If you can afford it and don’t have the hard cover books, I suggest you invest in them because they are so beautiful! I grabbed this because my husband wanted to re-read this and I have the hardcovers at my parents house (across the country) so I figure I can pass this along to a local school when I’m done!'
    },
    {
        name: 'Matteo Donovan',
        daysAgo: 14,
        comment: 'The suspense keeps the pages flying, but what sets this one apart is the palpable sense of onrushing doom.'
    },
    {
        name: 'Jeremiah Mcgill',
        daysAgo: 120,
        comment: 'Readers will be delighted. Most everyone can benefit from this book, especially those in the workplace. In addition, parents, educators, and students will find these insights valuable.'
    },
    {
        name: 'Russell Huffman',
        daysAgo: 11,
        comment: 'My boyfriend highly suggested we read this book together and discuss and I\'m glad he did! The author makes a lot of great points that can be applied to friendships, relationships, and business acquaintances. It starts out as a fun read because you\'ll spend a portion of the book saying, who am I? Then you\'ll pick our characteristics from a certain color that fit your personality & try to explain why you do the things you do.'
    },
    {
        name: 'Priscilla Mullen',
        daysAgo: 10,
        comment: 'This book is a great value! If you can afford it and don’t have the hard cover books, I suggest you invest in them because they are so beautiful! I grabbed this because my husband wanted to re-read this and I have the hardcovers at my parents house (across the country) so I figure I can pass this along to a local school when I’m done!'
    },
    {
        name: 'Elouise Peters',
        daysAgo: 9,
        comment: 'A powerful and compelling, beautifully written story of an American’s dream for a better America—with a clear account of how to get there.'
    },
    {
        name: 'Coco Reeves',
        daysAgo: 18,
        comment: 'Despite doing all the “right things,” many of us are struggling more than our parents or grandparents did to gain a foothold in the middle class. The digital gadgets in our pockets keep becoming more sophisticated, but our basic ability to distinguish truth from fiction is eroding. We can no longer assume that fundamental functions of American democracy, like the smooth counting of votes on Election Day or the ability of Congress to pass laws, will occur. Some of us have stopped believing in science, while others have simply come to doubt the possibility that brighter days lie ahead. The unprecedented disruption of the COVID-19 pandemic laid our anxieties bare. Unity and consensus seem like fading dreams.'
    },
    {
        name: 'John Smith',
        daysAgo: 70,
        comment: 'I think this book would help other children to learn that trying new things can be scary, but sometimes when we try, we can find things that make us happy too. And this book will help others know that mistakes are okay and part of learning.'
    },
    {
        name: 'Kaiya Peck',
        daysAgo: 4,
        comment: 'While I definitely recommend this book to other readers, I would recommend it to older teenagers, mainly because it will resonate better with them. The writing is tame enough that younger teens could also read it, but most of the characters are adults or on the verge of adulthood. Older readers would take the most from it since they can not only relate, but they may also better pick up on and appreciate Cassandra\'s sometimes subtle humor.'
    },
    {
        name: 'Mohammod Hamer',
        daysAgo: 1,
        comment: 'Highly recommended.'
    },
];

export default comments;