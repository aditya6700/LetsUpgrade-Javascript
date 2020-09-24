
let shopList = [
  {
    id: 1,
    name: "iPhone XR",
    brand: "Apple",
    size: "128GB",
    color: "Black",
    price: 53500,
    image: "./images/iPhoneXR.jpg",
    description:
"All-new Liquid Retina display--the most advanced LCD in the industry. Even faster Face ID. The samrtest, \
most powerful chip in a samrtphone",
  },
  {
    id: 2,
    name: "iPhone SE 2",
    brand: "Apple",
    size: "64GB",
    color: "Black",
    price: 37900,
    image: "./images/iPhoneSE2.webp",
    description: 
  "iPhone SE is the most powerful 11.94-cm (4.7) iPhone ever. It features the incredibly-fast A13 Bionic for \
  incredible performance in apps, games, and photography, Portrait mode for studio-quality portraits and six \
  lighting effects.",
  },

  {
    id: 3,
    name: "iPhone 11",
    brand: "Apple",
    size: "256GB",
    color: "White",
    price: 66990,
    image: "./images/iPhone11.jpg",
    description: "New dual-camera system. All-day battery. The toughest glass in a smrtphone. \
    And Apple's fastest chip ever",
  },

  {
    id: 4,
    name: "AirPods Pro",
    brand: "Apple",
    size: "M",
    color: "White",
    price: 21299,
    image: "./images/Airpodspro.jpg",
    description: "Active noise Cancellation with Transparency mode, sweat and water resistance and a customaisable fit.",
  },

  {
    id: 5,
    name: "Sennheiser Momentum True Wireless",
    brand: "Sennheiser",
    size: "M",
    color: "Black",
    price: 24900,
    image: "./images/momentum.jpg",
    description: "Bluetooth Earbuds with Active Noise Cancellation, Smart Pause,\
     Customizable Touch Control and 28-Hour Battery Life - Black ",
  },

  {
    id: 6,
    name: "Bose SoundSport Free",
    brand: "Bose",
    size: "M",
    color: "Midnight Blue/Citron ",
    price: 18990,
    image:"./images/bose.jpg",
    description: " Truly wireless sport headphones for total freedom of movement, \
    packed full of technology that makes music sound clear and powerful\
    Earbuds are sweat and weather resistant (with an IPX4 rating) and come with 3 different pairs of stay\
     hear + sport tips (in sizes S/M/L) that provide a comfortable and secure fit ",
  },
  {
    id: 7,
    name: "Mi TV 4X ",
    brand: "Mi",
    size: "50 inches",
    color: "black",
    price: 30999,
    image: "./images/mitv1.jpg",
    description: "The Mi TV 4X 50 features a 4K display. \
    Dolby Audio.Entertainment unlimited with upto 20+ content partners deeply integrated in Mi TV and 5000+ apps \
    and games available on Play Store. ",
  },
  {
    id: 8,
    name: "Smart LED TV 32LM563BPTC",
    brand: "LG ",
    size: "32 inches ",
    color: "Dark Iron Gray",
    price: 14990,
    image: "./images/lg1.jpg",
    description: "Enjoy movies, TV series, news, sports or any other entertainment on your favorite OTT apps \
    Key Features Include: Flat type display, Wide Viewing Angle, Active HDR, AI Launcher (with preview),\
     Home Dashboard, Magic Mobile Connection, Quad Core Processor, Cloud Photo & Video ",
  },
  {
    id: 9,
    name: "OnePlus TV 43Y1",
    brand: "OnePlus",
    size: "43 inches",
    color: "Black",
    image: "./images/oneplus1.jpg",
    price: 24999,
    description: "Treat your eyes to vivid imagery with a high colour range of 93% DCI-P3 \
     cinematic colour with the OnePlus TV 43Y1, get access to content online through Oxygeon Play, \
     enjoy thousands of movies, videos and music with all the popular content provider APP preinstalled. ",
  },
  {
    id: 10,
    name: "4K Ultra HD Smart IPS LED TV 65UM7290PTD",
    brand: "LG",
    size: "65 inches",
    color: "Ceramic Black",
    price: 82990,
    image: "./images/lg2.jpg",
    description: "4K IPS Display, Wide Viewing Angle, Apple Air Play2, DTS Virtual:X, 20W Sound, \
    4K Upscaler, Web OS, AI Launcher (with preview), Home Dashboard, Screen Share, Quad Core Processor, \
    Cloud Photo & Video & 2 Way Bluetooth Audio Playback. ",
  },
  {
    id: 11,
    name: "Mi TV 4A PRO",
    brand: "Mi",
    size: "32 inches",
    color: "Black",
    price: 12999,
    image: "./images/mi2.webp",
    description: "The Mi TV 4A pro features a HD-ready display. \
    Dolby Audio.Entertainment unlimited with upto 20+ content partners deeply integrated in Mi TV and 5000+ apps \
    and games available on Play Store. ",
  },
  {
    id: 12,
    name: "OnePlus TV 23Y1 2020 model",
    brand: "OnePlus",
    size: "32 inches",
    color: "Black",
    price: 14999,
    image: "./images/oneplus2.jpg",
    description: "Treat your eyes to vivid imagery with a high colour range of 93% DCI-P3 \
     cinematic colour with the OnePlus TV 23Y1, get access to content online through Oxygeon Play, \
     enjoy thousands of movies, videos and music with all the popular content provider APP preinstalled. ",
  },
];

 let cart=[];
 let count=0;
 const displayList = (subLst, cCheck) => {
    
    let products = "";
    
    subLst.forEach((value, index) => {
      let {id, name, brand, size, color, price, description, image} = value
       
          products += `<div class="col-md-4 col-10 mx-auto">
            <div className="card border-primary mb-5 " style="width: 28rem; height: auto;" >
                        <img class="card-img-top" src=${image} alt="Card image cap" />
                          <div class="card-body">
                            <h5 class="card-title">${name}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">${brand} </h6>
                            <p> <strong>Size</strong>: ${size} <br/>
                                <strong>color</strong>: ${color} <br/>
                                <strong>price</strong>: ${price} <br/>
                                <strong>Description</strong>: ${description}
                            </p>`;
                            (cCheck === undefined) ?
                              products +=`<button onclick="addCart(${id})" 
                                class="btn btn-outline-primary">add to cart</button>    
                               </div>
                              </div>
                            </div>` :
                            products +=`<button onclick="removeCart(${id})" 
                                class="btn btn-outline-primary">remove</button>
                                </div>
                                </div>
                                </div>`
    });   
    (cCheck === undefined) ?
      document.getElementById("bCard").innerHTML = products :
   
      document.getElementById("cart").innerHTML = products
   
      document.getElementById("cartimg").innerHTML = `<img src="./images/cart.png" alt="cart" class="src"> <span style="color:black;">${count} </span>`;
    
}
displayList(shopList);




//search 
const searchprod = (srch) => {

  let searchLst = shopList.filter(ele => {
      return (ele.name.toUpperCase().indexOf(srch.toUpperCase()) != -1) ||
              (ele.brand.toUpperCase().indexOf(srch.toUpperCase()) != -1) ||
              (ele.color.toUpperCase().indexOf(srch.toUpperCase()) != -1) ||
              (ele.description.toUpperCase().indexOf(srch.toUpperCase()) != -1);
  });
  displayList(searchLst);
}



//add to cart
const productid = (id) => shopList.find(ele => { return ele.id == id });
const cartCheck = (id) => cart.filter(ele => {return ele.id == id ? true : false });

const addCart = id  => {   
    
    let product = productid(id)
       
    if(cartCheck(id) == false){
        cart.push(product);
        count++;
    }
    else alert("product already in cart");
    displayList(cart, "cart");
}

//remove from cart
const removeCart = id => {
    let index = cart.findIndex(ele => {
        return ele.id == id;
    });
    cart.splice(index, 1);
    count--;
    displayList(cart, "cart");
}


//search products by minimum to maximum values
const filterpro = event => {

    event.preventDefault();
    let min = (document.getElementById("min").value != 0)? document.getElementById("min").value : 1000;
    let max = (document.getElementById("max").value != 0)? document.getElementById("max").value : 100000;
    let filterLst = shopList.filter(ele => {
        return (ele.price>=min && ele.price<=max);
    });
     
    displayList(filterLst);
    document.getElementById("min").value=""; document.getElementById("max").value=""
}
