
// console.log("hello world");

/*var menuBtn = document.getElementById("menuBtn");
      var sideNav = document.getElementById("sideNav");
      var menu = document.getElementById("menu");
      sideNav.style.right == "-250px";
      menuBtn.onclick = function () {
        if (sideNav.style.right == "-250px") {
          sideNav.style.right = "0";
          menu.src = "images/close.png";
        } else {
          sideNav.style.right = "-250px";
          menu.src = "images/sidebar.png";
        }
      };*/

var navBar = document.querySelector(".navBar");
var svgIcon = document.querySelector(".svgIcon")
// console.log(svgIcon);
var menuBtn2 = document.querySelector(".menuBtn2");
var menuBtn = document.querySelector(".menuBtn");
// console.log(menuBtn.lastElementChild, " where is the source");
// console.log(menuBtn);

var toggle = false;


// menuBtn2.src = "images/close.png"
// console.log(menuBtn2.src)

// console.log(toggle, "as toggle");

menuBtn.addEventListener("click", () => {
  if (toggle) {

    toggle = false;

// console.log('testing');
    navBar.style.display = "none";
    svgIcon.style.display = "block";

    
    // menuBtn.lastElementChild.replaceWith(menuBtn.firstElementChild);
    // console.log("testing")
   
    
    
  } else{
    toggle = true;
    navBar.style.display = "block";
     menuBtn2.style.display = "block";


        
        
  }
  
  if (toggle) {

// console.log('testing');
    navBar.style.display = "block";
    svgIcon.style.display = "none";

    
    // menuBtn.lastElementChild.replaceWith(menuBtn.firstElementChild);
    // console.log("testing")
   
    
    
  } else{
    navBar.style.display = "none";
     menuBtn2.style.display = "none";


        
        
  }
  
  
  
  
});
// if (toggle) {
  //   toggle = true;
  
  //     menuBtn2.style.display = "none";
  //     // svg.style.display = "block";
  //   menuBtn.lastElementChild.replaceWith(menuBtn.firstElementChild);
  //   console.log(menuBtn.firstElementChild, " first-child" );
  
  // } else {
    //   toggle = true;
    
  //   svg.style.display = "none";
  //   // menuBtn2.style.display = "block";
  //   menuBtn.firstElementChild.replaceWith(menuBtn.lastElementChild);
  //       console.log(menuBtn.lastElementChild, " last-child" );
  
  
        
  //     }
  
  
  
var dropDown = document.querySelector(".mediaInfo");
var dropDownContent = document.querySelector(".innerLink");


dropDown.addEventListener("click", () => {
  if (toggle) {
    toggle = false
  } else{
    toggle = true
  }


  
  if (toggle) {

    dropDownContent.style.display = "none";
    // console.info('dis is none')

  } else {
    dropDownContent.style.display = "block";
    // console.info('re you working')
    
    
  }
});



// if (toggle) {

//   toggle = false;

  // navBar.style.display = "block";
  // menuBtn2.style.display = "none";


  
// menuBtn.firstElementChild.replaceWith(menuBtn.lastElementChild);
     
  
//     menuBtn.lastElementChild.replaceWith(menuBtn.firstElementChild);
//     console.log("testing")
 
  
  
// } else{
//   toggle = true;
//   // navBar.style.display = "none";
      // svg.style.display = "block";

  
//     menuBtn.lastElementChild.replaceWith(menuBtn.firstElementChild);
// menuBtn.firstElementChild.replaceWith(menuBtn.lastElementChild);
      
      
// }


// console.log(dropDown);