/*===== MENU SHOW Y HIDDEN =====*/
const navMenu = document.getElementById("nav-menu"),
  toggleMenu = document.getElementById("nav-toggle"),
  closeMenu = document.getElementById("nav-close");

// SHOW
toggleMenu.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});
// HIDDEN
closeMenu.addEventListener("click", () => {
  navMenu.classList.remove("show");
});

/*===== ACTIVE AND REMOVE MENU =====*/
/*===== BIẾN HỖ TRỢ =====*/
const navLink = document.querySelectorAll(".nav__link");
const sections = document.querySelectorAll("section[id]");

/*===== LINK ACTION (Khi click) =====*/
function linkAction() {
  // 1. Loại bỏ menu mobile khi click
  if (navMenu) {
    navMenu.classList.remove("left-0"); // Hoặc class "show" tùy bạn đặt
  }
  // Chú thích: Class 'active' sẽ được hàm scrollActive tự động xử lý khi trang cuộn
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*===== SCROLL ACTIVE (Khi cuộn) =====*/
window.addEventListener("scroll", scrollActive);

function scrollActive() {
  const scrollY = window.pageYOffset;

  // ĐỊNH NGHĨA SAI SỐ CUỐI TRANG
  const isAtBottom =
    window.innerHeight + scrollY >= document.body.offsetHeight - 58;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 58; // Khớp với chiều cao Header
    const sectionId = current.getAttribute("id");

    // Tìm link tương ứng
    const sectionClass = document.querySelector(
      `.nav__menu a[href*=${sectionId}]`,
    );

    if (sectionClass) {
      // Nếu cuộn trong khoảng section HOẶC nếu là section cuối khi đã chạm đáy
      const isLastSection =
        sectionId === sections[sections.length - 1].getAttribute("id");

      if (
        (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) ||
        (isAtBottom && isLastSection)
      ) {
        sectionClass.classList.add("active");
      } else {
        sectionClass.classList.remove("active");
      }
    }

    /*===== TỐI ƯU VIDEO =====*/
    if (sectionId === "works") {
      const videos = current.querySelectorAll(".video-bg"); // Chỉ tìm video trong section works
      videos.forEach((video) => {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          video.play().catch(() => {}); // Catch lỗi nếu trình duyệt chặn tự động play
        } else {
          video.pause();
        }
      });
    }
  });
}
//*** SEND BTN CONTACT ***//
function sendEmail() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "tranhanh28111995@gmail.com",
    Password: "4973889A8D3F20C3C9C4FB05BB14266088CB",
    To: document.getElementById("mymail").innerHTML,
    From: "tranhanh28111995@gmail.com",
    Subject: "Question for My Porfolio",
    Body:
      "From Porfolio " +
      "<br>" +
      "Name Guest :" +
      document.getElementById("name").value +
      "<br>" +
      "Email Guest :" +
      document.getElementById("email").value +
      "<br>" +
      "Content :" +
      document.getElementById("message").value,
  }).then((message) => alert("Your mail has been sent succesfully"));
}

//*** RESTART DROP WHEN SCROLL TO SECTION ***/
const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
};

function observerCallback(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // add animation for elements that are in view
      entry.target.classList.remove("nodrop");
    } else {
      // remove animation for elements that are not in view
      entry.target.classList.add("nodrop");
    }
  });
}

const observer = new IntersectionObserver(observerCallback, observerOptions);

const anmElms = document.querySelectorAll(".drop");
anmElms.forEach((el) => observer.observe(el));
