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
  } else {
    document.querySelector("header").classList.remove("active");
  }
});
