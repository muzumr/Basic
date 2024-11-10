let users =[
    {
    profilePic:'https://images.unsplash.com/photo-1485875437342-9b39470b3d95?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFdPTUVOfGVufDB8fDB8fHww',
    displayPic:
    "https://images.unsplash.com/photo-1520512202623-51c5c53957df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fGhhcHB5JTIwd29tYW58ZW58MHx8MHx8fDA%3D",

   
    pendingMessage:33,
    location:"New York",
    name:'Alexa',
    age:20,
    interests:[{
        icon:`<i class="ri-netease-cloud-music-line"></i>`,
        interest:"Dance"
    }, {
        icon:`<i class="ri-quill-pen-fill"></i>`,
        interest:"writing"
    },{
        icon:`<i class="ri-money-dollar-circle-line"></i>`,
        interest:"lover"
    }],
    bio:"Whether you seek solace after a busy day or moments of self-care amidst the chaos, SereneShe empowers you to prioritize your mental and emotional health",
    isFriend:null
    },
    {
        profilePic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVyuFXODK2ZDYNf0ikcJXnmhEOf90n9HxjRA&s",
        displayPic:'https://images.unsplash.com/photo-1535295972055-1c762f4483e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGFwcHklMjB3b21hbnxlbnwwfHwwfHx8MA%3D%3D',
        pendingMessage:14,
        location:"london",
        name:'kendel',
        age:22,
        interests:[{
            icon:`<i class="ri-netease-cloud-music-line"></i>`,
            interest:"music"
        }, {
            icon:`<i class="ri-quill-pen-fill"></i>`,
            interest:"writing"
        },{
            icon:`<i class="ri-money-dollar-circle-line"></i>`,
            interest:"model"
        }],
        bio:" As a dedicated healthcare provider, I invite you to embark on a journey towards optimal well-being. With a blend of medical expertise and compassionate care",
        isFriend:null
        },
        {
            profilePic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2kyiuQFxDhz3tMMisWN6apEjQSFL85W2xfg&s",
            displayPic:'https://images.unsplash.com/photo-1546771139-8ecff7cdabc0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGhhcHB5JTIwd29tYW58ZW58MHx8MHx8fDA%3D',
            pendingMessage:24,
            location:"Russia",
            name:'kylie',
            age:24,
            interests:[{
                icon:`<i class="ri-netease-cloud-music-line"></i>`,
                interest:"pease"
            }, {
                icon:`<i class="ri-quill-pen-fill"></i>`,
                interest:"writing"
            },{
                icon:`<i class="ri-money-dollar-circle-line"></i>`,
                interest:"Army"
            }],
            bio:"here there its me here i am a model  looking for a a person who love me  and help me in this boring world ",
            isFriend:null
            },
            {
                profilePic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvDOBlt4gF4XXxytbmwV1_buSb1EFNLCbPkw&s",
                displayPic:'https://images.unsplash.com/photo-1481214110143-ed630356e1bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8V09NRU58ZW58MHx8MHx8fDA%3D',
                pendingMessage:55,
                location:"Tokyo",
                name:'bella',
                age:19,
                interests:[{
                    icon:`<i class="ri-netease-cloud-music-line"></i>`,
                    interest:"music"
                }, {
                    icon:`<i class="ri-quill-pen-fill"></i>`,
                    interest:"writing"
                },{
                    icon:`<i class="ri-money-dollar-circle-line"></i>`,
                    interest:"model"
                }],
                bio:"together  we journey through life sweet embrace of love we find pease and find a place to live forever forever ..",
                isFriend:null
                },
]
function select(elem){
    return document.querySelector(elem)
}
let curr = 0;  //curr mean current pic

let isAnimating = false;

function setData(index){
    select('.prflimg img').src = users[index].profilePic;
    select(".badge h5").textContent = users[index].pendingMessage;
    select('.location h3 ').textContent = users[index].location;
    select('.name h1:nth-child(1)').textContent = users[index].name;
    select('.name h1:nth-child(2)').textContent = users[index].age;
    
    let clutter ='';
    users[index].interests.forEach(function(interests){
        clutter+= `  <div class="tag flex items-center bg-white/30 px-3 py-1 rounded-full gap-3">
     ${interests.icon}
        <h3 class="text-sm tracking-tighter captilize">${interests.interest}</h3>
        </div>`
    })
    
    select(".tags").innerHTML=clutter;
    
    select(".bio p").textContent = users[curr].bio;
}

(function setInitial(){
    document.querySelector(".maincard img").src = users[curr].displayPic;
    document.querySelector(".incomingcard img").src = users[curr+1]?.displayPic;

    setData(curr);
curr= 2;
})();


function imageChange(){
    if (!isAnimating){
        isAnimating = true;

        let tl = gsap.timeline({

            onComplete : function(){
                isAnimating = false;
        let main = select(".maincard");
        
        let incoming = select(".incomingcard");
        incoming.classList.remove("z-[2]");
        incoming.classList.add("z-[3]");
        incoming.classList.remove("incomingcard");
        
        main.classList.remove("z-[3]");
        main.classList.add("z-[2]");
        
        gsap.set(main,{
            scale:1,
            opacity:1
        })
        if (curr=== users.length) curr = 0;
        select(".maincard img").src = users[curr].displayPic;
        curr++;
        main.classList.remove("maincard");
        incoming.classList.add("maincard");
        main.classList.add("incomingcard")
            }
        });
        
        
        
        
        
        tl.to(".maincard",{
            scale:1.1,
            opacity:0,
            ease:Circ,
            duration:.9
        },"a")
        
        .from(".incomingcard",{
            scale:.9,
            opacity:0,
            ease:Circ,
            duration:1.1
        },"a")
    }

}

let deny = select(".deny");
let accept = select(".accept");

deny.addEventListener("click", function(){
    imageChange();
    setData(curr-1);
    gsap.from(".details .element", {
        y: "100%",
        opacity: 0,
        stagger: 0.1,
        ease: Power4.easeInOut,
        duration: .6
    });
});


accept.addEventListener("click", function(){
    imageChange();
    setData(curr-1);
    gsap.from(".details .element", {
        y: "100%",
        opacity: 0,
        stagger: 0.1,
        ease: Power4.easeInOut,
        duration: .6
    });
});



(function containerCreater() {
    document.querySelectorAll(".element")
        .forEach(function (element) {
            let div = document.createElement("div");
            // Extracting the first class from element's classList
            let className = element.classList[0];
            div.classList.add(`${className}container`,"overflow-hidden");
            console.log("div");
            div.appendChild(element);
            select('.details').appendChild(div);
        });
})();


