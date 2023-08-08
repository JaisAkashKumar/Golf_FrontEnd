var cursor=document.querySelector("#cursor");
var blur=document.querySelector("#cursor-blur");
document.addEventListener("mousemove",(dets)=>{
    cursor.style.left=dets.x+"px"
    cursor.style.top=dets.y+"px"
    blur.style.left=dets.x-150+"px"
    blur.style.top=dets.y-150+"px"
})

gsap.from(".nav",{
    backgroundColor:"#000",
    duration:0.5,
    height:"90px",
    scrollTrigger:{
        trigger:".nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top-11%",
        scrub:1
    }
})
// nav=document.querySelector(".nav");
// nav.addEventListener("mouseover",()=>{
//   // nav.style.color="none";
// })
gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -25%",
        end:"top -90%",
        scrub:2
    }
})

// var card=document.querySelector(".card");
// card.addEventListener("onmouseover",()=>{
//     background-image.style.scale:1.2;
// })

// Get all the card elements
const cards = document.querySelectorAll('.card');

// Add event listeners to each card for hover in and hover out
// cards.forEach(card => {
//   card.addEventListener('mouseenter', handleMouseEnter);
//   card.addEventListener('mouseleave', handleMouseLeave);
// });

// // Function to handle mouse enter event
// function handleMouseEnter(event) {
// //   const card = event.target;
//   // Zoom in the background image by increasing the background size
//   this.style.backgroundSize = '200%';
// }

// Function to handle mouse leave event
function handleMouseLeave(event) {
//   const card = event.target;
  // Reset the background size to its original value on hover out
  this.style.backgroundSize = 'cover';
}

const navh4=document.querySelectorAll(".nav h4");

navh4.forEach((elem)=>{
  elem.addEventListener("mouseenter",()=>{
    cursor.style.scale=4;
    cursor.style.border="1px solid white"
    cursor.style.backgroundColor="transparent";
    cursor.style.transition="0.5s"

  })
  elem.addEventListener("mouseleave",()=>{
    cursor.style.scale=1;
    cursor.style.border="0px solid #95c11e"
    cursor.style.backgroundColor="#95c11e";

  })
})

gsap.from("#about-us img, #about-us-in",{
      y:90,
      opacity:0,
      duration:1,
      stagger:0.4,
      scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 55%",
        scrub:2
      }
})

gsap.from(".card",{
  scale:0.8,
  // opacity:0,
  duration:1,
  stagger:0.4,
  scrollTrigger:{
    trigger:".card",
    scroller:"body",
    // markers:true,
    start:"top 70%",
    end:"top 65%",
    scrub:2
  }
})

gsap.from("#img31",{
  y:-50,
  x:-50,
  scrollTrigger:{
    trigger:"#img31",
    scroller:"body",
    start:"top 70%",
    end:"top 65%",
    scrub:2
  }
})

gsap.from("#img32",{
  y:  5,
  x:5,
  scrollTrigger:{
    trigger:"#img32",
    scroller:"body",
    start:"top 70%",
    end:"top 65%",
    scrub:1
  }
})