const visitorName = localStorage.getItem('visitorName')

const data = {
    highlights: {
        heading: 'Creative Highlights',
        headerText: 'I am grateful for all the creative wins and ideas birthed in 2022',
        content: [
            {
                image: 'creative_malaise.jpg',
                text: `It felt really good to birth the <a href='https://uzomaorji.com/visuals/creative-malaise' target='_blank' rel='noopener noreferrer'>Creative Malaise</a>, series after a long bout of <a href='https://mailchi.mp/e7e1c7c053b4/overcoming-creative-constipation' target='_blank' rel='noopener noreferrer'>creative constipation</a>`
            },
            {
                image: 'nomd2.jpg',
                text: `We hosted a series of Nigeria of my Dreams dream workshops with various communities; this year we’d love to collate these dreamings into immersive Nigerian dreamscape experiences. <a href='https://instagram.com/nigeriaofmydreams_' target='_blank' rel='noopener noreferrer'>Follow NOMD</a>`
            },
            {
                image: 'uzoma-studio.gif',
                text: `I was super intentional about growing uzoma.studio in line with our goal of becoming the go-to tech guys for artistic collaborations. <a href='https://uzoma.studio' target='_blank' rel='noopener noreferrer'>Check us out.</a>`
            },
            {
                image: 'pcf.jpg',
                text: `My work was profiled in the 2022 Prince Claus Fund <a href='https://indd.adobe.com/view/57b4c3bc-8623-4734-a135-634c46b28678' target='_blank' rel='noopener noreferrer'>annual report</a>. That was a nice honour :)`
            }
        ],
        questionPrompt: `How about you ${visitorName}? Are there any creative wins you'd like to share?`,
        finalChatResponse: `Thank you for sharing, may we see more wins this year 🙏🏾`,
    },
    connectionsExchanges: {
        heading: 'Connections and Exchanges',
        headerText: '2022 was full of opportunities to connect and expand creatively',
        content: [
            {
                image: 'format.jpg',
                text: `In April I got to spend 1 week in the UK for the Format/Here, There, Everywhere residency hosted by Derby QUAD. This was originally meant to be a 6-week residency in 2020 but ended up being 1 very necessary week of artistic exploration and inspiration. I wrote about the trip <a href='https://www.instagram.com/p/CctTJRLqS8D/' target='_blank' rel='noopener noreferrer'>here</a>. Thank you Niamh, Jodi, Anthony and team.`
            },
            {
                image: 'amc.jpg',
                text: `In July I led a workshop on “Centering Wisdom in the Age of Information Overload” as part of the AfroPresentism track of the 2022 Allied Media Conference; it was really cool to begin to practicalize a concept that started out very theory-based. Thank you Neema and Yaa.`
            },
            {
                image: 'mobile_lab.jpg',
                text: `In September I travelled to Ghana for the Prince Claus Fund mobile lab week and it left a big mark on how I see my role as an artist, as you’d be able to tell from the <a href='https://pav.uzomaorji.com' target='_blank' rel='noopener noreferrer'>web diary</a> I made after the trip. Thank you PCF team <3`
            },
            {
                image: 'slum_party.jpg',
                text: `In December I got the opportunity to be part of putting together Slum Party in Oworonshoki, Lagos. Still soaking it in, I left very inspired to make empowering community a priority. Thank you Valu and team.`
            },
            {
                image: 'imi.jpg',
                text: `2023 started off with Imi is Breath - a week of creative connection, play, breath and being in process. The perfect creative start to the year. Thank you Bk, Ola and HH team <3.`
            },
        ],
        questionPrompt: `Care to tell me about any new connections you made in 2022 ${visitorName}?`,
        finalChatResponse: `I appreciate you letting me know. More connections and opportunities for exchange coming your way this year.`
    },
    kerfuffles: {
        heading: 'Creative Not So Highlights',
        headerText: 'As is so often the case in the journey of an artist, not everything goes according to plan',
        content: [
            {
                image: 'baffs.jpg',
                text: `My idea for a digital thrift marketplace started off with promise at the beginning of 2022 but didn’t take off as I would have hoped for various reasons. 2023 we go again!`
            },
            {
                image: 'uzomas-garden.jpg',
                text: `I kept starting and stopping work on my new personal website/blog/digital rest space/online vibes station but I’m excited to finally bring it to life early this year`
            },
            {
                image: 'goi.jpg',
                text: `There were many ideas such as a digital island based off your taste in music and something called ‘Instagram for the Conscious Creative’ that didn’t quite take off but it be like that sometimes. How many ideas can we resurrect in 2023? Btw <a href="https://uzomaorji.com/tech/graveyard-of-ideas" target="_blank" rel="noopener noreferrer">the graveyard really exists</a>`
            },
        ],
        questionPrompt: `${visitorName} are there any missteps, failures or not so great moments you'd like to reflect on?`,
        finalChatResponse: `It's all part of the journey! May we learn and be wiser for our shortcomings`
    },
    vision: {
        heading: 'Vision 2023',
        headerText: "Here are some of the things I'm looking forward to accomplishing in 2023",
        content: [
            {
                image: 'dyk.jpg',
                text: `I’m looking forward to offering Do You Know Just Who You Are?, a multi-sensory art/self experience that explores self-reflection, healing and transcendence`
            },
            {
                image: 'ai.jpg',
                text: `I’m excited to continue developing Achebe's Internet, the concept of an internet powered by ancestral wisdom`
            },
            {
                image: 'nomd.jpg',
                text: `With the Nigeria of my Dreams project, we’re moving closer and closer to realising our vision of using art to create immersive, multi-sensory experiences of a collectively-dreamed Nigeria. <a href='https://instagram.com/nigeriaofmydreams_' target='_blank' rel='noopener noreferrer'>See what we're up to</a>.`
            },
            {
                image: 'uzoma_studio2.jpg',
                text: `I want us to collaborate with all the dope artists in the whole wide world and make interesting, engaging, exciting art-tech things. Seriously. <a href='mailto:chidumaga@gmail.com' target='_blank' rel='noopener noreferrer'>Let’s work.</a>`
            },
            {
                image: 'mog.jpg',
                text: `All in all I'm looking forward to learning more, sharing more with community, writing more, playing more, more speaking opportunities, figuring how to better serve community through my work and being in flow all year`
            },
        ],
        questionPrompt: `How about you ${visitorName}? What are your hopes for 2023?`,
        finalChatResponse: `Awesome! It's going to be a beautiful year.`
    },
}

const { highlights, connectionsExchanges, kerfuffles, vision } = data

const urlParams = {
    'highlights': highlights,
    'connections-exchanges': connectionsExchanges,
    'kerfuffles': kerfuffles,
    'vision': vision
}