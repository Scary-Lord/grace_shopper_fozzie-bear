const {db,  Categories, Products, User}= require('./server/db');



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

const seed = async()=>{
    try{
      await db.sync({force: true})
       await Categories.bulkCreate(categoriesForPost)
       await Products.bulkCreate(productsForPost)
       await User.create({
        fName: 'First',
        lName: 'Last',
        username: 'user',
        password: 'password',
        email: 'mail@mail.com',
        address: '123 Street',
        city: 'City',
        state: 'State',
        zipcode: 12345
       })
       
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
  