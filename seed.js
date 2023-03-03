const {db, User, Categories, Products}= require('./server/db');



// const cartForPost=[

// ]
 const categoriesForPost=[
    {
        id: 1,
        category: 'Samsung',
        
      },
       {
        id: 2,
        category: 'Gaming PC',
        
      },
       {
        id: 3,
        category: 'Apple',
        
      }, {
        id: 4,
        category: 'Ram',
        
      }, {
        id: 5,
        category: 'Laptops',
        
      }, {
        id: 6,
        category: 'Keyboard',
        
      }, {
        id: 7,
        category: 'Mouse',
        
      }, {
        id: 8,
        category: 'Monitors'
        
      },
]
 const productsForPost =
[{
        id: 1,
        name: 'Samsung Chromebook ',
        imageUrl: "http://dummyimage.com/196x100.png/dddddd/000000",
        quantity: 15,
        description: "Idiopathic aseptic necrosis of bone, other site",
        shippingInfo: 24.83,
        category: 1,
        price: 3635.37
      }, {
        id: 2,
        name: 'Samsung gaming Book 23S',
        imageUrl: "http://dummyimage.com/157x100.png/cc0000/ffffff",
        quantity: 67,
        description: "Open bite of right thumb with damage to nail, sequela",
        shippingInfo: 5.05,
        category: 1,
        price: 587.50
      }, {
        id: 3,
        name: 'Samsung 21" portable monitor',
        imageUrl: "http://dummyimage.com/199x100.png/cc0000/ffffff",
        quantity: 53,
        description: "Other drug induced movement disorders",
        shippingInfo: 8.15,
        category: 1,
        price: 2014.46
      }, {
        id: 4,
        name: 'Nividia 16gb Ram',
        imageUrl: "http://dummyimage.com/138x100.png/dddddd/000000",
        quantity: 35,
        description: "Poisoning by tricyclic antidepressants, undetermined, subs",
        shippingInfo: 15.61,
        category: 1,
        price: 3824.90
      }, {
        id: 5,
        name: 'Alienware Pro Keyboard',
        imageUrl: "http://dummyimage.com/162x100.png/dddddd/000000",
        quantity: 53,
        description: "Oth fx shaft of rad, l arm, 7thE",
        shippingInfo: 23.77,
        category: 1,
        price: 343.38
      }, {
        id: 6,
        name: 'Alienware Pro Gaming Mouse',
        imageUrl: "http://dummyimage.com/129x100.png/5fa2dd/ffffff",
        quantity: 40,
        description: "Disp fx of med condyle of r femr, 7thM",
        shippingInfo: 12.10,
        category: 2,
        price: 1268.53
      }, {
        id: 7,
        name: 'Sceptre 32" Gaming Monitor',
        imageUrl: "http://dummyimage.com/173x100.png/ff4444/ffffff",
        quantity: 37,
        description: "Erosion of other prosthetic materials to surrnd org/tiss",
        shippingInfo: 20.15,
        category: 2,
        price: 3674.30
      }, {
        id: 8,
        name: 'Apple LOTR special Spider Macbook Pro 2023',
        imageUrl: "http://dummyimage.com/137x100.png/cc0000/ffffff",
        quantity: 57,
        description: "Disp fx of post column of r acetab, subs for fx w delay heal",
        shippingInfo: "5.75",
        category: 2,
        price: "2807.26"
      }, {
        id: 9,
        name: 'something',
        imageUrl: "http://dummyimage.com/214x100.png/ff4444/ffffff",
        quantity: 27,
        description: "Injury of lateral plantar nerve, unspecified leg, sequela",
        shippingInfo: 3.56,
        category: 2,
        price: 3722.48
      }, {
        id: 10,
        name: 'something',
        imageUrl: "http://dummyimage.com/184x100.png/ff4444/ffffff",
        quantity: 16,
        description: "Blister (nonthermal) of oral cavity, subsequent encounter",
        shippingInfo: 21.47,
        category: 2,
        price: 1554.25
      }, {
        id: 11,
        name: 'something',
        imageUrl: "http://dummyimage.com/165x100.png/cc0000/ffffff",
        quantity: 6,
        description: "Corrosion of third degree of abdominal wall, init encntr",
        shippingInfo: 10.94,
        category: 3,
        price: 2684.36
      }, {
        id: 12,
        name: 'something',
        imageUrl: "http://dummyimage.com/189x100.png/5fa2dd/ffffff",
        quantity: 26,
        description: "Corrosion of second degree back of right hand, init encntr",
        shippingInfo: 14.65,
        category: 3,
        price: 776.22
      }, {
        id: 13,
        name: 'something',
        imageUrl: "http://dummyimage.com/147x100.png/dddddd/000000",
        quantity: 64,
        description: "Sprain of unspecified ligament of unspecified ankle, sequela",
        shippingInfo: 20.17,
        category: 3,
        price: 366.02
      }, {
        id: 14,
        name: 'something',
        imageUrl: "http://dummyimage.com/128x100.png/cc0000/ffffff",
        quantity: 15,
        description: "Insect bite (nonvenomous), left great toe, subs encntr",
        shippingInfo: 11.38,
        category: 3,
        price: 1200.38
      }, {
        id: 15,
        name: 'something',
        imageUrl: "http://dummyimage.com/124x100.png/5fa2dd/ffffff",
        quantity: 18,
        description: "Toxic effect of latex, intentional self-harm, init encntr",
        shippingInfo: 9.38,
        category: 3,
        price: 3145.62
      }, {
        id: 16,
        name: 'something',
        imageUrl: "http://dummyimage.com/209x100.png/cc0000/ffffff",
        quantity: 31,
        description: "Ptosis of breast",
        shippingInfo: 15.60,
        category: 4,
        price: 2346.26
      }, {
        id: 17,
        name: 'something',
        imageUrl: "http://dummyimage.com/119x100.png/5fa2dd/ffffff",
        quantity: 73,
        description: "Unsp fx r low leg, subs for opn fx type I/2 w routn heal",
        shippingInfo: 16.16,
        category: 4,
        price: 63.97
      }, {
        id: 18,
        name: 'something',
        imageUrl: "http://dummyimage.com/173x100.png/dddddd/000000",
        quantity: 69,
        description: "Displ trimalleol fx r low leg, subs for clos fx w nonunion",
        shippingInfo: 11.53,
        category: 4,
        price: 460.22
      }, {
        id: 19,
        name: 'something',
        imageUrl: "http://dummyimage.com/238x100.png/ff4444/ffffff",
        quantity: 5,
        description: "Stress fracture, unsp shoulder, subs for fx w malunion",
        shippingInfo: 5.17,
        category: 4,
        price: 2606.67
      }, {
        id: 20,
        name: 'something',
        imageUrl: "http://dummyimage.com/194x100.png/dddddd/000000",
        quantity: 90,
        description: "Food in trachea causing other injury",
        shippingInfo: 2.93,
        category: 8,
        price: 2517.79
      }, {
        id: 21,
        name: 'something',
        imageUrl: "http://dummyimage.com/160x100.png/dddddd/000000",
        quantity: 77,
        description: "Unsp traum nondisp spondylolysis of fifth cervcal vert, sqla",
        shippingInfo: 3.20,
        category: 5,
        price: 3371.62
      }, {
        id: 22,
        name: 'something',
        imageUrl: "http://dummyimage.com/118x100.png/5fa2dd/ffffff",
        quantity: 100,
        description: "Strain of musc/tend at lower leg level, left leg",
        shippingInfo: 10.69,
        category: 5,
        price: 534.56
      }, {
        id: 23,
        name: 'something',
        imageUrl: "http://dummyimage.com/168x100.png/dddddd/000000",
        quantity: 52,
        description: "Oth water transport accident w military wtrcrft, sequela",
        shippingInfo: 7.48,
        category: 5,
        price: 2056.22
      }, {
        id: 24,
        name: 'something',
        imageUrl: "http://dummyimage.com/240x100.png/5fa2dd/ffffff",
        quantity: 55,
        description: "Dislocation of unspecified interphalangeal joint of finger",
        shippingInfo: 18.11,
        category: 5,
        price: 3026.71
      }, {
        id: 25,
        name: 'Samsung Odisey 32in monitor',
        imageUrl: "http://dummyimage.com/218x100.png/cc0000/ffffff",
        quantity: 59,
        description: "Other nondisp fx of lower end of left humerus, sequela",
        shippingInfo: 6.05,
        category: 5,
        price: 659.91
      }, {
        id: 26,
        name: 'something',
        imageUrl: "http://dummyimage.com/203x100.png/cc0000/ffffff",
        quantity: 53,
        description: "Animal-rider injured in collision with animal-drawn vehicle",
        shippingInfo: 17.00,
        category: 5,
        price: 3545.79
      }, {
        id: 27,
        name: 'something',
        imageUrl: "http://dummyimage.com/121x100.png/dddddd/000000",
        quantity: 35,
        description: "Drown due to fall/jump fr crushed inflatbl crft, sequela",
        shippingInfo: 9.26,
        category: 5,
        price: 2288.39
      }, {
        id: 28,
        name: 'something',
        imageUrl: "http://dummyimage.com/200x100.png/ff4444/ffffff",
        quantity: 66,
        description: "Complete lesion at unsp level of thoracic spinal cord, init",
        shippingInfo: 17.03,
        category: 5,
        price: 3652.94
      }, {
        id: 29,
        name: 'something',
        imageUrl: "http://dummyimage.com/139x100.png/ff4444/ffffff",
        quantity: 56,
        description: "Laceration with foreign body of wrist",
        shippingInfo: 9.47,
        category: 5,
        price: 106.25
      }, {
        id: 30,
        name: 'something',
        imageUrl: "http://dummyimage.com/221x100.png/5fa2dd/ffffff",
        quantity: 15,
        description: "Age-related cataract, morgagnian type, bilateral",
        shippingInfo:18.60,
        category: 5,
        price: 3686.78
      }, {
        id: 31,
        name: 'something',
        imageUrl: "http://dummyimage.com/160x100.png/cc0000/ffffff",
        quantity: 77,
        description: "Sltr-haris Type I physl fx upr end humer, unsp arm, 7thK",
        shippingInfo: 17.58,
        category: 6,
        price: 2686.34
      }, {
        id: 32,
        name: 'something',
        imageUrl: "http://dummyimage.com/105x100.png/dddddd/000000",
        quantity: 97,
        description: "Unil post-trauma osteoarth of 1st carpometacarp jt, r hand",
        shippingInfo: 5.54,
        category: 6,
        price: 2778.13
      }, {
        id: 33,
        name: 'something',
        imageUrl: "http://dummyimage.com/162x100.png/dddddd/000000",
        quantity: 27,
        description: "Oth fracture of left acetabulum, subs for fx w nonunion",
        shippingInfo: 9.41,
        category: 6,
        price: 3679.06
      }, {
        id: 34,
        name: 'something',
        imageUrl: "http://dummyimage.com/196x100.png/dddddd/000000",
        quantity: 97,
        description: "Torus fx upper end of left fibula, subs for fx w nonunion",
        shippingInfo: 21.65,
        category: 6,
        price: 1597.42
      }, {
        id: 35,
        name: 'something',
        imageUrl: "http://dummyimage.com/146x100.png/ff4444/ffffff",
        quantity: 77,
        description: "Flexion deformity, finger joints",
        shippingInfo: 14.53,
        category: 7,
        price: 1036.77
      },
]
const userForPost=
[{
    id: 1,
    fName: "Rogers",
    lName: "Petru",
    email: "rpetru0@vkontakte.ru",
    username: "rpetru0",
    address: "97 Petterle Court",
    city: "Dallas",
    state: "Texas",
    zipcode: 75387
  }, {
    id: 2,
    fName: "Cyrillus",
    lName: "Whiteway",
    email: "cwhiteway1@bing.com",
    username: "cwhiteway1",
    address: "7 Rigney Terrace",
    city: "Daytona Beach",
    state: "Florida",
    zipcode: 32123
  }, {
    id: 3,
    fName: "Julianna",
    lName: "Losselyong",
    email: "jlosselyong2@liveinternet.ru",
    username: "jlosselyong2",
    address: "138 Fair Oaks Drive",
    city: "Las Vegas",
    state: "Nevada",
    zipcode: 99135
  }, {
    id: 4,
    fName: "Mike",
    lName: "Bastide",
    email: "mbastide3@addthis.com",
    username: "mbastide3",
    address: "4855 Summerview Court",
    city: "Wichita",
    state: "Kansas",
    zipcode: 67230
  }, {
    id: 5,
    fName: "Aylmar",
    lName: "Dimitresco",
    email: "adimitresco4@quantcast.com",
    username: "adimitresco4",
    address: "04469 Armistice Street",
    city: "Miami",
    state: "Florida",
    zipcode: 33147
  }, {
    id: 6,
    fName: "Dorian",
    lName: "Townson",
    email: "dtownson5@washingtonpost.com",
    username: "dtownson5",
    address: "5780 Corscot Street",
    city: "Oklahoma City",
    state: "Oklahoma",
    zipcode: 73197
  }, {
    id: 7,
    fName: "Darbee",
    lName: "Simpole",
    email: "dsimpole6@sitemeter.com",
    username: "dsimpole6",
    address: "12 Coleman Circle",
    city: "Suffolk",
    state: "Virginia",
    zipcode: 23436
  }, {
    id: 8,
    fName: "Ailyn",
    lName: "Oosthout de Vree",
    email: "aoosthoutdevree7@cornell.edu",
    username: "aoosthoutdevree7",
    address: "54593 Bonner Junction",
    city: "Sarasota",
    state: "Florida",
    zipcode: 34276
  }, {
    id: 9,
    fName: "Cacilie",
    lName: "Kristufek",
    email: "ckristufek8@soundcloud.com",
    username: "ckristufek8",
    address: "10 Hansons Court",
    city: "Kansas City",
    state: "Kansas",
    zipcode: 66105
  }, {
    id: 10,
    fName: "Arleta",
    lName: "Dufour",
    email: "adufour9@ezinearticles.com",
    username: "adufour9",
    address: "18 Russell Place",
    city: "Chicago",
    state: "Illinois",
    zipcode: 60636
  }, {
    id: 11,
    fName: "Alric",
    lName: "Spinke",
    email: "aspinkea@indiegogo.com",
    username: "aspinkea",
    address: "1 Canary Way",
    city: "Charleston",
    state: "South Carolina",
    zipcode: 29416
  }, {
    id: 12,
    fName: "Burty",
    lName: "McGrey",
    email: "bmcgreyb@storify.com",
    username: "bmcgreyb",
    address: "79920 Sundown Way",
    city: "Houston",
    state: "Texas",
    zipcode: 77218
  }, {
    id: 13,
    fName: "Yehudi",
    lName: "Tender",
    email: "ytenderc@webmd.com",
    username: "ytenderc",
    address: "61 Sommers Lane",
    city: "Seattle",
    state: "Washington",
    zipcode: 98133
  }, {
    id: 14,
    fName: "Murdoch",
    lName: "Coonan",
    email: "mcoonand@tinyurl.com",
    username: "mcoonand",
    address: "7 Amoth Alley",
    city: "Saginaw",
    state: "Michigan",
    zipcode: 48604
  }, {
    id: 15,
    fName: "Lefty",
    lName: "Russam",
    email: "lrussame@umich.edu",
    username: "lrussame",
    address: "0 Prentice Avenue",
    city: "Miami",
    state: "Florida",
    zipcode: 33134
  }, {
    id: 16,
    fName: "Yvette",
    lName: "Dunaway",
    email: "ydunawayf@businessinsider.com",
    username: "ydunawayf",
    address: "7575 Jana Way",
    city: "San Antonio",
    state: "Texas",
    zipcode: 78245
  }, {
    id: 17,
    fName: "Lambert",
    lName: "Mendenhall",
    email: "lmendenhallg@reference.com",
    username: "lmendenhallg",
    address: "7 Artisan Avenue",
    city: "Lakewood",
    state: "Washington",
    zipcode: 98498
  }, {
    id: 18,
    fName: "Sisely",
    lName: "Abyss",
    email: "sabyssh@shutterfly.com",
    username: "sabyssh",
    address: "261 Warner Lane",
    city: "Fresno",
    state: "California",
    zipcode: 93721
  }, {
    id: 19,
    fName: "Genia",
    lName: "Climo",
    email: "gclimoi@dedecms.com",
    username: "gclimoi",
    address: "59156 Anthes Crossing",
    city: "Miami",
    state: "Florida",
    zipcode: 33261
  }, {
    id: 20,
    fName: "Dale",
    lName: "Sacks",
    email: "dsacksj@mysql.com",
    username: "dsacksj",
    address: "12 Grasskamp Lane",
    city: "Los Angeles",
    state: "California",
    zipcode: 90010
  }, {
    id: 21,
    fName: "Livvie",
    lName: "Richfield",
    email: "lrichfieldk@domainmarket.com",
    username: "lrichfieldk",
    address: "546 Sommers Court",
    city: "New York City",
    state: "New York",
    zipcode: 10155
  }, {
    id: 22,
    fName: "Giavani",
    lName: "Bartelli",
    email: "gbartellil@free.fr",
    username: "gbartellil",
    address: "523 8th Crossing",
    city: "Salt Lake City",
    state: "Utah",
    zipcode: 84105
  }, {
    id: 23,
    fName: "Aveline",
    lName: "Poag",
    email: "apoagm@google.nl",
    username: "apoagm",
    address: "61818 Petterle Court",
    city: "Milwaukee",
    state: "Wisconsin",
    zipcode: 53210
  }, {
    id: 24,
    fName: "Gayle",
    lName: "Senechell",
    email: "gsenechelln@amazon.com",
    username: "gsenechelln",
    address: "9 Pennsylvania Street",
    city: "Eugene",
    state: "Oregon",
    zipcode: 97405
  }, {
    id: 25,
    fName: "Eddie",
    lName: "Braitling",
    email: "ebraitlingo@cocolog-nifty.com",
    username: "ebraitlingo",
    address: "3880 Springview Lane",
    city: "Des Moines",
    state: "Iowa",
    zipcode: 50335
  }, {
    id: 26,
    fName: "Mercedes",
    lName: "Loughton",
    email: "mloughtonp@multiply.com",
    username: "mloughtonp",
    address: "007 Truax Place",
    city: "Murfreesboro",
    state: "Tennessee",
    zipcode: 37131
  }, {
    id: 27,
    fName: "Piotr",
    lName: "Bushaway",
    email: "pbushawayq@dailymail.co.uk",
    username: "pbushawayq",
    address: "80 Gulseth Point",
    city: "Texarkana",
    state: "Texas",
    zipcode: 75507
  }, {
    id: 28,
    fName: "Myrilla",
    lName: "O' Reagan",
    email: "moreaganr@histats.com",
    username: "moreaganr",
    address: "0911 Center Parkway",
    city: "Fresno",
    state: "California",
    zipcode: 93773
  }, {
    id: 29,
    fName: "Ashley",
    lName: "Nickoll",
    email: "anickolls@npr.org",
    username: "anickolls",
    address: "92523 Artisan Street",
    city: "Tampa",
    state: "Florida",
    zipcode: 33605
  }, {
    id: 30,
    fName: "Tedd",
    lName: "Schimek",
    email: "tschimekt@webmd.com",
    username: "tschimekt",
    address: "4268 Barby Drive",
    city: "Wilmington",
    state: "Delaware",
    zipcode: 19810
  }, {
    id: 31,
    fName: "Orsa",
    lName: "Klus",
    email: "oklusu@google.pl",
    username: "oklusu",
    address: "1 Hollow Ridge Park",
    city: "Elizabeth",
    state: "New Jersey",
    zipcode: 07205
  }, {
    id: 32,
    fName: "Sabina",
    lName: "Serchwell",
    email: "sserchwellv@ca.gov",
    username: "sserchwellv",
    address: "8 3rd Place",
    city: "Des Moines",
    state: "Iowa",
    zipcode: 50310
  }, {
    id: 33,
    fName: "Rosamond",
    lName: "Goldsberry",
    email: "rgoldsberryw@opensource.org",
    username: "rgoldsberryw",
    address: "12 Arrowood Center",
    city: "Marietta",
    state: "Georgia",
    zipcode: 30061
  }, {
    id: 34,
    fName: "Pavia",
    lName: "Pischel",
    email: "ppischelx@illinois.edu",
    username: "ppischelx",
    address: "62 Fairview Hill",
    city: "Chicago",
    state: "Illinois",
    zipcode: 60691
  }, {
    id: 35,
    fName: "Alverta",
    lName: "Paolini",
    email: "apaoliniy@domainmarket.com",
    username: "apaoliniy",
    address: "5516 Fair Oaks Parkway",
    city: "Billings",
    state: "Montana",
    zipcode: 59112
  },
]
seed = async()=>{
    try{
      await db.sync({force: true})
       await Categories.bulkCreate(categoriesForPost)
       await Products.bulkCreate(productsForPost)
       await User.bulkCreate(userForPost)
       console.log('seeding successful')
    }
    catch(err){
      console.error(err);
      db.close()
    }
    }
     
  
  
  seed()
  .then(()=>{
      process.exit();
  
  });
  