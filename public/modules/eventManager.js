//turn eventID into event name
function eventName(eventID) {
        var events = {
            '0': 'Manchester United vs Paris Saint-Germain',
            '1': 'Connor Talkshow',
            '2': 'Jimmmy On Tour',
            '3': 'Markiplier Show',
            '4': 'RRQ VS GPX',
            '5': 'Warriors VS Lakers',
            '6': 'SUCRD',
            '7': 'Rick Concert',
            '8': 'Twitch Rivals: Valorant',
            '9': 'The Rock VS John Cena',
            '10': 'Winter Music Festival',
            '11': 'Sword Art Online Progressive',
            '12': '', //add more events here
            'none': 'ERROR: Event not found'
        };
        return (events[eventID] || events['none']);
    }
    
    //turn sessionID into event date and time
    function eventDate(sessionID) {
        var dates = {
            //Manchester United vs Paris Saint-Germain
            '0': '12 Nov 2025 | 9:00 PM - Finish',
            //Connor Talkshow
            '1': '10 Dec 2077 | 8:30 PM - 10:00 PM',
            //Jimmmy On Tour
            '2': '3 June 2023 | 7:30 PM - 9:00 PM',
            //Markiplier Show
            '3': '6 Sept 2069 | 7:00 PM - 8:30 PM',
            '4': '7 Sept 2069 | 7:00 PM - 8:30 PM',
            //RRQ VS GPX
            '5': '5 July 2028 | 8:00 PM - 12:00 PM',
            '6': '7 July 2028 | 8:00 PM - 12:00 PM',
            //Warriors VS Lakers
            '7': '10 Oct 2024 | 4:00 PM - 7:00 PM',
            //SUCRD
            '8': '11 Sept 2025 | 7:30 PM - 9:00 PM',
            //Rick Concert
            '9': '24 Dec 2030 | 8:00 PM - 9:00 PM',
            '10': '25 Dec 2030 | 8:00 PM - 9:00 PM',
            //Twitch Rivals: Valorant
            '11': '16 Feb 2023 | 1:00 PM - Finish',
            '12': '17 Feb 2023 | 1:00 PM - Finish',
            '13': '18 Feb 2023 | 1:00 PM - Finish',
            //The Rock VS John Cena
            '14': '21 Jan 2099 | 8:00 PM - 10:00 PM',
            //Winter Music Festival
            '15': '16 Dec 2023 | 7:30 PM - 9:00 PM',
            /* these dates have passed
            //Sword Art Online Progressive
            '16': '1 Jan 2022 | 10:50 AM - Finish',  
            '17': '1 Jan 2022 | 2:00 PM - Finish',
            */
            //add more dates here
            'none': 'ERROR: Date not found'
        };
        return (dates[sessionID] || dates['none']);
    }

    //price list
    function eventPrice(sessionID) {
        var prices = {
            //Manchester United vs Paris Saint-Germain
            '0': 816.44,
            //Connor Talkshow
            '1': 20.00,
            //Jimmmy On Tour
            '2': 25.00,
            //Markiplier Show
            '3': 69.69,
            '4': 69.69,
            //RRQ VS GPX
            '5': 5.00,
            '6': 5.00,
            //Warriors VS Lakers
            '7': 99.99,
            //SUCRD
            '8': 15.00,
            //Rick Concert
            '9': 25.00,
            '10': 25.00,
            //Twitch Rivals: Valorant
            '11': 129.00,
            '12': 129.00,
            '13': 129.00,
            //The Rock VS John Cena
            '14': 139.99,
            //Winter Music Festival
            '15': 30.00,
            /* these dates have passed
            //Sword Art Online Progressive
            '16': 3.59,  
            '17': 3.92,
            */
            //add more prices here
            'none': 'ERROR: Session not found'
        };
        return (prices[sessionID] || prices['none']);
    }

    //image path - currently unused
    function eventImage(eventID) {
        var imagepath = {
            '0': 'poster-bola.png',
            '1': 'poster-2.png',
            '2': 'Poster_Jimmy Yang Redo.png',
            '3': 'poster-1.png',
            '4': 'poster-mole.png',
            '5': 'Poster_NBA.png',
            '6': 'Poster_Radit.png',
            '7': 'poster-3.png',
            '8': 'poster-valorant.gif',
            '9': 'poster-wwe.gif',
            '10': 'Poster_Yoasobi.png',
            '11': 'poster-sao.png',
            '12': '', //add more images here
            'default': 'placeholder'
        };
        return (imagepath[eventID] || imagepath['default']);
    }
    
    module.exports = {
        eventName,
        eventDate,
        eventImage,
        eventPrice
    }