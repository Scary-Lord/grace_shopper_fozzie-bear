const {db}= require('./server/db');
const Cart = require('./server/db/cartModel');
const Categories = require('./server/db/categoryModel');
const Products= require('./server/db/productsModel');
const Users = require('./server/db/usersModel');



const cartForPost=[

]
const categoriesForPost=[
    {
        "id": 1,
        "category": null,
        "products": 33
      }, {
        "id": 2,
        "category": null,
        "products": 25
      }, {
        "id": 3,
        "category": null,
        "products": 34
      }, {
        "id": 4,
        "category": null,
        "products": 17
      }, {
        "id": 5,
        "category": null,
        "products": 20
      }, {
        "id": 6,
        "category": null,
        "products": 35
      }, {
        "id": 7,
        "category": null,
        "products": 31
      }, {
        "id": 8,
        "category": null,
        "products": 30
      }, {
        "id": 9,
        "category": null,
        "products": 16
      }, {
        "id": 10,
        "category": null,
        "products": 14
      }, {
        "id": 11,
        "category": null,
        "products": 26
      }, {
        "id": 12,
        "category": null,
        "products": 24
      }, {
        "id": 13,
        "category": null,
        "products": 26
      }, {
        "id": 14,
        "category": null,
        "products": 5
      }, {
        "id": 15,
        "category": null,
        "products": 12
      }, {
        "id": 16,
        "category": null,
        "products": 11
      }, {
        "id": 17,
        "category": null,
        "products": 32
      }, {
        "id": 18,
        "category": null,
        "products": 33
      }, {
        "id": 19,
        "category": null,
        "products": 30
      }, {
        "id": 20,
        "category": null,
        "products": 33
      }, {
        "id": 21,
        "category": null,
        "products": 14
      }, {
        "id": 22,
        "category": null,
        "products": 19
      }, {
        "id": 23,
        "category": null,
        "products": 35
      }, {
        "id": 24,
        "category": null,
        "products": 22
      }, {
        "id": 25,
        "category": null,
        "products": 28
      }, {
        "id": 26,
        "category": null,
        "products": 6
      }, {
        "id": 27,
        "category": null,
        "products": 9
      }, {
        "id": 28,
        "category": null,
        "products": 3
      }, {
        "id": 29,
        "category": null,
        "products": 30
      }, {
        "id": 30,
        "category": null,
        "products": 22
      }, {
        "id": 31,
        "category": null,
        "products": 8
      }, {
        "id": 32,
        "category": null,
        "products": 17
      }, {
        "id": 33,
        "category": null,
        "products": 23
      }, {
        "id": 34,
        "category": null,
        "products": 9
      }, {
        "id": 35,
        "category": null,
        "products": 25
      },
]
const productsForPost =
[{
        "id": 1,
        "name": null,
        "imageUrl": "http://dummyimage.com/196x100.png/dddddd/000000",
        "Quantity": 15,
        "description": "Idiopathic aseptic necrosis of bone, other site",
        "Shipping info": "$24.83",
        
        "price": "$3635.37"
      }, {
        "id": 2,
        "name": null,
        "imageUrl": "http://dummyimage.com/157x100.png/cc0000/ffffff",
        "Quantity": 67,
        "description": "Open bite of right thumb with damage to nail, sequela",
        "Shipping info": "$5.05",
        
        "price": "$587.50"
      }, {
        "id": 3,
        "name": null,
        "imageUrl": "http://dummyimage.com/199x100.png/cc0000/ffffff",
        "Quantity": 53,
        "description": "Other drug induced movement disorders",
        "Shipping info": "$8.15",
        
        "price": "$2014.46"
      }, {
        "id": 4,
        "name": null,
        "imageUrl": "http://dummyimage.com/138x100.png/dddddd/000000",
        "Quantity": 35,
        "description": "Poisoning by tricyclic antidepressants, undetermined, subs",
        "Shipping info": "$15.61",
        
        "price": "$3824.90"
      }, {
        "id": 5,
        "name": null,
        "imageUrl": "http://dummyimage.com/162x100.png/dddddd/000000",
        "Quantity": 53,
        "description": "Oth fx shaft of rad, l arm, 7thE",
        "Shipping info": "$23.77",
        
        "price": "$343.38"
      }, {
        "id": 6,
        "name": null,
        "imageUrl": "http://dummyimage.com/129x100.png/5fa2dd/ffffff",
        "Quantity": 40,
        "description": "Disp fx of med condyle of r femr, 7thM",
        "Shipping info": "$12.10",
        
        "price": "$1268.53"
      }, {
        "id": 7,
        "name": null,
        "imageUrl": "http://dummyimage.com/173x100.png/ff4444/ffffff",
        "Quantity": 37,
        "description": "Erosion of other prosthetic materials to surrnd org/tiss",
        "Shipping info": "$20.15",
       
        "price": "$3674.30"
      }, {
        "id": 8,
        "name": null,
        "imageUrl": "http://dummyimage.com/137x100.png/cc0000/ffffff",
        "Quantity": 57,
        "description": "Disp fx of post column of r acetab, subs for fx w delay heal",
        "Shipping info": "$5.75",
        
        "price": "$2807.26"
      }, {
        "id": 9,
        "name": null,
        "imageUrl": "http://dummyimage.com/214x100.png/ff4444/ffffff",
        "Quantity": 27,
        "description": "Injury of lateral plantar nerve, unspecified leg, sequela",
        "Shipping info": "$3.56",
        
        "price": "$3722.48"
      }, {
        "id": 10,
        "name": null,
        "imageUrl": "http://dummyimage.com/184x100.png/ff4444/ffffff",
        "Quantity": 16,
        "description": "Blister (nonthermal) of oral cavity, subsequent encounter",
        "Shipping info": "$21.47",
       
        "price": "$1554.25"
      }, {
        "id": 11,
        "name": null,
        "imageUrl": "http://dummyimage.com/165x100.png/cc0000/ffffff",
        "Quantity": 6,
        "description": "Corrosion of third degree of abdominal wall, init encntr",
        "Shipping info": "$10.94",
        
        "price": "$2684.36"
      }, {
        "id": 12,
        "name": null,
        "imageUrl": "http://dummyimage.com/189x100.png/5fa2dd/ffffff",
        "Quantity": 26,
        "description": "Corrosion of second degree back of right hand, init encntr",
        "Shipping info": "$14.65",
        
        "price": "$1776.22"
      }, {
        "id": 13,
        "name": null,
        "imageUrl": "http://dummyimage.com/147x100.png/dddddd/000000",
        "Quantity": 64,
        "description": "Sprain of unspecified ligament of unspecified ankle, sequela",
        "Shipping info": "$20.17",
        
        "price": "$366.02"
      }, {
        "id": 14,
        "name": null,
        "imageUrl": "http://dummyimage.com/128x100.png/cc0000/ffffff",
        "Quantity": 15,
        "description": "Insect bite (nonvenomous), left great toe, subs encntr",
        "Shipping info": "$11.38",
        
        "price": "$1200.38"
      }, {
        "id": 15,
        "name": null,
        "imageUrl": "http://dummyimage.com/124x100.png/5fa2dd/ffffff",
        "Quantity": 18,
        "description": "Toxic effect of latex, intentional self-harm, init encntr",
        "Shipping info": "$9.38",
       
        "price": "$3145.62"
      }, {
        "id": 16,
        "name": null,
        "imageUrl": "http://dummyimage.com/209x100.png/cc0000/ffffff",
        "Quantity": 31,
        "description": "Ptosis of breast",
        "Shipping info": "$15.60",
        
        "price": "$2346.26"
      }, {
        "id": 17,
        "name": null,
        "imageUrl": "http://dummyimage.com/119x100.png/5fa2dd/ffffff",
        "Quantity": 73,
        "description": "Unsp fx r low leg, subs for opn fx type I/2 w routn heal",
        "Shipping info": "$16.16",
        
        "price": "$63.97"
      }, {
        "id": 18,
        "name": null,
        "imageUrl": "http://dummyimage.com/173x100.png/dddddd/000000",
        "Quantity": 69,
        "description": "Displ trimalleol fx r low leg, subs for clos fx w nonunion",
        "Shipping info": "$11.53",
        
        "price": "$460.22"
      }, {
        "id": 19,
        "name": null,
        "imageUrl": "http://dummyimage.com/238x100.png/ff4444/ffffff",
        "Quantity": 5,
        "description": "Stress fracture, unsp shoulder, subs for fx w malunion",
        "Shipping info": "$5.17",
        
        "price": "$2606.67"
      }, {
        "id": 20,
        "name": null,
        "imageUrl": "http://dummyimage.com/194x100.png/dddddd/000000",
        "Quantity": 90,
        "description": "Food in trachea causing other injury",
        "Shipping info": "$2.93",
        
        "price": "$2517.79"
      }, {
        "id": 21,
        "name": null,
        "imageUrl": "http://dummyimage.com/160x100.png/dddddd/000000",
        "Quantity": 77,
        "description": "Unsp traum nondisp spondylolysis of fifth cervcal vert, sqla",
        "Shipping info": "$3.20",
        
        "price": "$3371.62"
      }, {
        "id": 22,
        "name": null,
        "imageUrl": "http://dummyimage.com/118x100.png/5fa2dd/ffffff",
        "Quantity": 100,
        "description": "Strain of musc/tend at lower leg level, left leg",
        "Shipping info": "$10.69",
        
        "price": "$534.56"
      }, {
        "id": 23,
        "name": null,
        "imageUrl": "http://dummyimage.com/168x100.png/dddddd/000000",
        "Quantity": 52,
        "description": "Oth water transport accident w military wtrcrft, sequela",
        "Shipping info": "$7.48",
        "category": null,
        "price": "$2056.22"
      }, {
        "id": 24,
        "name": null,
        "imageUrl": "http://dummyimage.com/240x100.png/5fa2dd/ffffff",
        "Quantity": 55,
        "description": "Dislocation of unspecified interphalangeal joint of finger",
        "Shipping info": "$18.11",
        "category": null,
        "price": "$3026.71"
      }, {
        "id": 25,
        "name": null,
        "imageUrl": "http://dummyimage.com/218x100.png/cc0000/ffffff",
        "Quantity": 59,
        "description": "Other nondisp fx of lower end of left humerus, sequela",
        "Shipping info": "$6.05",
        "category": null,
        "price": "$659.91"
      }, {
        "id": 26,
        "name": null,
        "imageUrl": "http://dummyimage.com/203x100.png/cc0000/ffffff",
        "Quantity": 53,
        "description": "Animal-rider injured in collision with animal-drawn vehicle",
        "Shipping info": "$17.00",
        "category": null,
        "price": "$3545.79"
      }, {
        "id": 27,
        "name": null,
        "imageUrl": "http://dummyimage.com/121x100.png/dddddd/000000",
        "Quantity": 35,
        "description": "Drown due to fall/jump fr crushed inflatbl crft, sequela",
        "Shipping info": "$9.26",
        "category": null,
        "price": "$2288.39"
      }, {
        "id": 28,
        "name": null,
        "imageUrl": "http://dummyimage.com/200x100.png/ff4444/ffffff",
        "Quantity": 66,
        "description": "Complete lesion at unsp level of thoracic spinal cord, init",
        "Shipping info": "$17.03",
        "category": null,
        "price": "$3652.94"
      }, {
        "id": 29,
        "name": null,
        "imageUrl": "http://dummyimage.com/139x100.png/ff4444/ffffff",
        "Quantity": 56,
        "description": "Laceration with foreign body of wrist",
        "Shipping info": "$9.47",
        "category": null,
        "price": "$106.25"
      }, {
        "id": 30,
        "name": null,
        "imageUrl": "http://dummyimage.com/221x100.png/5fa2dd/ffffff",
        "Quantity": 15,
        "description": "Age-related cataract, morgagnian type, bilateral",
        "Shipping info": "$18.60",
        "category": null,
        "price": "$3686.78"
      }, {
        "id": 31,
        "name": null,
        "imageUrl": "http://dummyimage.com/160x100.png/cc0000/ffffff",
        "Quantity": 77,
        "description": "Sltr-haris Type I physl fx upr end humer, unsp arm, 7thK",
        "Shipping info": "$17.58",
        "category": null,
        "price": "$2686.34"
      }, {
        "id": 32,
        "name": null,
        "imageUrl": "http://dummyimage.com/105x100.png/dddddd/000000",
        "Quantity": 97,
        "description": "Unil post-trauma osteoarth of 1st carpometacarp jt, r hand",
        "Shipping info": "$5.54",
        "category": null,
        "price": "$2778.13"
      }, {
        "id": 33,
        "name": null,
        "imageUrl": "http://dummyimage.com/162x100.png/dddddd/000000",
        "Quantity": 27,
        "description": "Oth fracture of left acetabulum, subs for fx w nonunion",
        "Shipping info": "$9.41",
        "category": null,
        "price": "$3679.06"
      }, {
        "id": 34,
        "name": null,
        "imageUrl": "http://dummyimage.com/196x100.png/dddddd/000000",
        "Quantity": 97,
        "description": "Torus fx upper end of left fibula, subs for fx w nonunion",
        "Shipping info": "$21.65",
        "category": null,
        "price": "$1597.42"
      }, {
        "id": 35,
        "name": null,
        "imageUrl": "http://dummyimage.com/146x100.png/ff4444/ffffff",
        "Quantity": 77,
        "description": "Flexion deformity, finger joints",
        "Shipping info": "$14.53",
        "category": null,
        "price": "$1036.77"
      },
]
const userForPost=
[{
    "id": 1,
    "fName": "Rogers",
    "lName": "Petru",
    "email": "rpetru0@vkontakte.ru",
    "username": "rpetru0",
    "address": "97 Petterle Court",
    "city": "Dallas",
    "State": "Texas",
    "zipcode": "75387"
  }, {
    "id": 2,
    "fName": "Cyrillus",
    "lName": "Whiteway",
    "email": "cwhiteway1@bing.com",
    "username": "cwhiteway1",
    "address": "7 Rigney Terrace",
    "city": "Daytona Beach",
    "State": "Florida",
    "zipcode": "32123"
  }, {
    "id": 3,
    "fName": "Julianna",
    "lName": "Losselyong",
    "email": "jlosselyong2@liveinternet.ru",
    "username": "jlosselyong2",
    "address": "138 Fair Oaks Drive",
    "city": "Las Vegas",
    "State": "Nevada",
    "zipcode": "89135"
  }, {
    "id": 4,
    "fName": "Mike",
    "lName": "Bastide",
    "email": "mbastide3@addthis.com",
    "username": "mbastide3",
    "address": "4855 Summerview Court",
    "city": "Wichita",
    "State": "Kansas",
    "zipcode": "67230"
  }, {
    "id": 5,
    "fName": "Aylmar",
    "lName": "Dimitresco",
    "email": "adimitresco4@quantcast.com",
    "username": "adimitresco4",
    "address": "04469 Armistice Street",
    "city": "Miami",
    "State": "Florida",
    "zipcode": "33147"
  }, {
    "id": 6,
    "fName": "Dorian",
    "lName": "Townson",
    "email": "dtownson5@washingtonpost.com",
    "username": "dtownson5",
    "address": "5780 Corscot Street",
    "city": "Oklahoma City",
    "State": "Oklahoma",
    "zipcode": "73197"
  }, {
    "id": 7,
    "fName": "Darbee",
    "lName": "Simpole",
    "email": "dsimpole6@sitemeter.com",
    "username": "dsimpole6",
    "address": "12 Coleman Circle",
    "city": "Suffolk",
    "State": "Virginia",
    "zipcode": "23436"
  }, {
    "id": 8,
    "fName": "Ailyn",
    "lName": "Oosthout de Vree",
    "email": "aoosthoutdevree7@cornell.edu",
    "username": "aoosthoutdevree7",
    "address": "54593 Bonner Junction",
    "city": "Sarasota",
    "State": "Florida",
    "zipcode": "34276"
  }, {
    "id": 9,
    "fName": "Cacilie",
    "lName": "Kristufek",
    "email": "ckristufek8@soundcloud.com",
    "username": "ckristufek8",
    "address": "10 Hansons Court",
    "city": "Kansas City",
    "State": "Kansas",
    "zipcode": "66105"
  }, {
    "id": 10,
    "fName": "Arleta",
    "lName": "Dufour",
    "email": "adufour9@ezinearticles.com",
    "username": "adufour9",
    "address": "18 Russell Place",
    "city": "Chicago",
    "State": "Illinois",
    "zipcode": "60636"
  }, {
    "id": 11,
    "fName": "Alric",
    "lName": "Spinke",
    "email": "aspinkea@indiegogo.com",
    "username": "aspinkea",
    "address": "1 Canary Way",
    "city": "Charleston",
    "State": "South Carolina",
    "zipcode": "29416"
  }, {
    "id": 12,
    "fName": "Burty",
    "lName": "McGrey",
    "email": "bmcgreyb@storify.com",
    "username": "bmcgreyb",
    "address": "79920 Sundown Way",
    "city": "Houston",
    "State": "Texas",
    "zipcode": "77218"
  }, {
    "id": 13,
    "fName": "Yehudi",
    "lName": "Tender",
    "email": "ytenderc@webmd.com",
    "username": "ytenderc",
    "address": "61 Sommers Lane",
    "city": "Seattle",
    "State": "Washington",
    "zipcode": "98133"
  }, {
    "id": 14,
    "fName": "Murdoch",
    "lName": "Coonan",
    "email": "mcoonand@tinyurl.com",
    "username": "mcoonand",
    "address": "7 Amoth Alley",
    "city": "Saginaw",
    "State": "Michigan",
    "zipcode": "48604"
  }, {
    "id": 15,
    "fName": "Lefty",
    "lName": "Russam",
    "email": "lrussame@umich.edu",
    "username": "lrussame",
    "address": "0 Prentice Avenue",
    "city": "Miami",
    "State": "Florida",
    "zipcode": "33134"
  }, {
    "id": 16,
    "fName": "Yvette",
    "lName": "Dunaway",
    "email": "ydunawayf@businessinsider.com",
    "username": "ydunawayf",
    "address": "7575 Jana Way",
    "city": "San Antonio",
    "State": "Texas",
    "zipcode": "78245"
  }, {
    "id": 17,
    "fName": "Lambert",
    "lName": "Mendenhall",
    "email": "lmendenhallg@reference.com",
    "username": "lmendenhallg",
    "address": "7 Artisan Avenue",
    "city": "Lakewood",
    "State": "Washington",
    "zipcode": "98498"
  }, {
    "id": 18,
    "fName": "Sisely",
    "lName": "Abyss",
    "email": "sabyssh@shutterfly.com",
    "username": "sabyssh",
    "address": "261 Warner Lane",
    "city": "Fresno",
    "State": "California",
    "zipcode": "93721"
  }, {
    "id": 19,
    "fName": "Genia",
    "lName": "Climo",
    "email": "gclimoi@dedecms.com",
    "username": "gclimoi",
    "address": "59156 Anthes Crossing",
    "city": "Miami",
    "State": "Florida",
    "zipcode": "33261"
  }, {
    "id": 20,
    "fName": "Dale",
    "lName": "Sacks",
    "email": "dsacksj@mysql.com",
    "username": "dsacksj",
    "address": "12 Grasskamp Lane",
    "city": "Los Angeles",
    "State": "California",
    "zipcode": "90010"
  }, {
    "id": 21,
    "fName": "Livvie",
    "lName": "Richfield",
    "email": "lrichfieldk@domainmarket.com",
    "username": "lrichfieldk",
    "address": "546 Sommers Court",
    "city": "New York City",
    "State": "New York",
    "zipcode": "10155"
  }, {
    "id": 22,
    "fName": "Giavani",
    "lName": "Bartelli",
    "email": "gbartellil@free.fr",
    "username": "gbartellil",
    "address": "523 8th Crossing",
    "city": "Salt Lake City",
    "State": "Utah",
    "zipcode": "84105"
  }, {
    "id": 23,
    "fName": "Aveline",
    "lName": "Poag",
    "email": "apoagm@google.nl",
    "username": "apoagm",
    "address": "61818 Petterle Court",
    "city": "Milwaukee",
    "State": "Wisconsin",
    "zipcode": "53210"
  }, {
    "id": 24,
    "fName": "Gayle",
    "lName": "Senechell",
    "email": "gsenechelln@amazon.com",
    "username": "gsenechelln",
    "address": "9 Pennsylvania Street",
    "city": "Eugene",
    "State": "Oregon",
    "zipcode": "97405"
  }, {
    "id": 25,
    "fName": "Eddie",
    "lName": "Braitling",
    "email": "ebraitlingo@cocolog-nifty.com",
    "username": "ebraitlingo",
    "address": "3880 Springview Lane",
    "city": "Des Moines",
    "State": "Iowa",
    "zipcode": "50335"
  }, {
    "id": 26,
    "fName": "Mercedes",
    "lName": "Loughton",
    "email": "mloughtonp@multiply.com",
    "username": "mloughtonp",
    "address": "007 Truax Place",
    "city": "Murfreesboro",
    "State": "Tennessee",
    "zipcode": "37131"
  }, {
    "id": 27,
    "fName": "Piotr",
    "lName": "Bushaway",
    "email": "pbushawayq@dailymail.co.uk",
    "username": "pbushawayq",
    "address": "80 Gulseth Point",
    "city": "Texarkana",
    "State": "Texas",
    "zipcode": "75507"
  }, {
    "id": 28,
    "fName": "Myrilla",
    "lName": "O' Reagan",
    "email": "moreaganr@histats.com",
    "username": "moreaganr",
    "address": "0911 Center Parkway",
    "city": "Fresno",
    "State": "California",
    "zipcode": "93773"
  }, {
    "id": 29,
    "fName": "Ashley",
    "lName": "Nickoll",
    "email": "anickolls@npr.org",
    "username": "anickolls",
    "address": "92523 Artisan Street",
    "city": "Tampa",
    "State": "Florida",
    "zipcode": "33605"
  }, {
    "id": 30,
    "fName": "Tedd",
    "lName": "Schimek",
    "email": "tschimekt@webmd.com",
    "username": "tschimekt",
    "address": "4268 Barby Drive",
    "city": "Wilmington",
    "State": "Delaware",
    "zipcode": "19810"
  }, {
    "id": 31,
    "fName": "Orsa",
    "lName": "Klus",
    "email": "oklusu@google.pl",
    "username": "oklusu",
    "address": "1 Hollow Ridge Park",
    "city": "Elizabeth",
    "State": "New Jersey",
    "zipcode": "07208"
  }, {
    "id": 32,
    "fName": "Sabina",
    "lName": "Serchwell",
    "email": "sserchwellv@ca.gov",
    "username": "sserchwellv",
    "address": "8 3rd Place",
    "city": "Des Moines",
    "State": "Iowa",
    "zipcode": "50310"
  }, {
    "id": 33,
    "fName": "Rosamond",
    "lName": "Goldsberry",
    "email": "rgoldsberryw@opensource.org",
    "username": "rgoldsberryw",
    "address": "12 Arrowood Center",
    "city": "Marietta",
    "State": "Georgia",
    "zipcode": "30061"
  }, {
    "id": 34,
    "fName": "Pavia",
    "lName": "Pischel",
    "email": "ppischelx@illinois.edu",
    "username": "ppischelx",
    "address": "62 Fairview Hill",
    "city": "Chicago",
    "State": "Illinois",
    "zipcode": "60691"
  }, {
    "id": 35,
    "fName": "Alverta",
    "lName": "Paolini",
    "email": "apaoliniy@domainmarket.com",
    "username": "apaoliniy",
    "address": "5516 Fair Oaks Parkway",
    "city": "Billings",
    "State": "Montana",
    "zipcode": "59112"
  },
]
const seed = async()=>{
    try{
      await db.sync({force: true})
      await Cart.bulkCreate(cartForPost)
       await Categories.bulkCreate(categoriesForPost)
       await Products.bulkCreate(productsForPost)
       await Users.bulkCreate(userForPost)
       console.log('seeding sucsesful')
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
  