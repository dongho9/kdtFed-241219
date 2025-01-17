//목표 : 사용자가 스크롤을 내렸을 때, header 배경컬러 //banner height를 변경 => 가상클래스 적용

// 1. 사용자가 지금 스크롤을 내렸어!!
// >스크롤은 브라우저가 가지고 있는 요소
// >브라우저야!! 지금 스크롤이 내려갔니?

// 2. header는 html안에서 header라는 속성을 가지고있는요소야

//3. 사용자가 스크롤을 내렸으니까 빨리 active클래스를 header에게 적용시켜

// let prevscroll = 0;
// window.addEventListener("scroll", () => {
//   scrolly = window.scrollY;
//   const header = document.querySelector("header");
//   // console.log(scrolly);
//   if (scrolly > prevscroll) {
//     header.classList.add("active");
//   } else {
//     header.classList.remove("active");
//   }

//   prevscroll = scrolly;
// });

// 스크롤이벤트
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    document.querySelector("header").classList.add("active");
<<<<<<< HEAD
  } else {
    document.querySelector("header").classList.remove("active");
=======
    document.querySelector(".gototop").classList.add("active");
  } else {
    document.querySelector("header").classList.remove("active");
    document.querySelector(".gototop").classList.remove("active");
>>>>>>> 58538c4 (250117-01)
  }
});

/*slick slider*/
$(document).ready(function () {
  $(".mySlider").slick({
    slidesToShow: 3, //3개씩 보임
    slidesToScroll: 3, //3개씩 스크롤
    infinite: false, //무한 슬라이드
    dots: true, //pagination
    speed: 300, // 속도
<<<<<<< HEAD
=======
    responsive: [
      //반응형
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          speed: 300,
          infinite: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 300,
          infinite: false,
        },
      },
    ],
  });
});

// JS에게 이벤트 대상이 누구인지 알려주기

// 이벤트 대상이 되어지는 요소(html에서 찾아온 태그 혹은 클래스 혹은 아이디 선택자)에게 어떤 이벤트를 부여할 것인가 결정

//이벤트 한 번 적용할 때, 두번 적용할 때 상이하게 작동하도록 제어

// trigger 이벤트
const trigger = document.querySelector(".trigger");
trigger.addEventListener("click", function () {
  this.classList.toggle("active");
  document.querySelector(".gnb").classList.toggle("active");
});

// 메뉴 이벤트
const menus = document.querySelectorAll(".gnb a, .gototop");

menus.forEach((menu) => {
  menu.addEventListener("click", function (event) {
    event.preventDefault(); //앵커 속성 무시
    const targetID = this.getAttribute("href");
    // 클릭한 요소의 href값을 가져온다 현재 id값을 줬다
    // console.log(targetID);

    const targetElement = document.querySelector(targetID);
    // targetID와 연결된 태그를 가져옴
    // console.log(targetElement);
    const targetPosition = targetElement.offsetTop;
    // 탑에서 떨어진 값을 가져옴
    // console.log(targetPosition);
    window.scrollTo({
      top: targetPosition,
      // 타겟 포지션값으로 이동
      behavior: "smooth",
    });
>>>>>>> 58538c4 (250117-01)
  });
});
