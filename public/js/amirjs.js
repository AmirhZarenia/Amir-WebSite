// ارسال ایمیل 
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // جلوگیری از ارسال پیش‌فرض فرم

    const formData = new FormData(this);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        subject: formData.get('subject'),
        message: formData.get('message')
    };

    // ارسال داده‌ها به سرور
    fetch('https://zareniaapp.liara.run/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.text())
        .then(data => {
            alert(data); // نمایش پیام موفقیت یا خطا
        })
        .catch(error => {
            console.error('Error:', error);
            alert('خطا در ارسال پیام');
        });
});



// طراحی اون توپی که به دنبال موس میره
var circle = document.querySelector(".circle1");

document.addEventListener('mousemove', (e) => {
    circle.style.left = `${e.pageX}px`;
    circle.style.top = `${e.pageY}px`;

    if (e.target.nodeName === "A" || e.target.nodeName === "BUTTON" || e.target.nodeName === "I") {
        circle.style.borderWidth = "35px"
        circle.style.opacity = "0.5"
    } else {
        circle.style.borderWidth = "5px"
        circle.style.opacity = "1"
    }
});



const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
    toastTrigger.addEventListener('click', () => {
        toastBootstrap.show()
    })
}

// تغییر دکمه باز بسته شدن نویکیشن بار
document.querySelector(".nav-button").addEventListener("click", e => {
    document.querySelector(".nav-button").classList.toggle("change")
})



// کاسوم کردن نویشکشین بار که وقتی  اومدیم پایین بکگراندش تغییر کنه
let navbar = document.querySelector(".nav-custom");

window.addEventListener("scroll", (e) => {
    if (pageYOffset > 10) {
        navbar.style.backgroundColor = "#1E1345"
        navbar.style.zIndex = "1";
    } else if (pageYOffset == 0) {
        navbar.style.backgroundColor = ""
    }
});




window.onscroll = function () {
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollPosition >= 0 && scrollPosition < 500) {
        document.querySelector('.home1').style.color = '#00c0ff';
        document.querySelector('.home2').style.color = '#ffff';
        document.querySelector('.home3').style.color = '#ffff';
        document.querySelector('.home4').style.color = '#ffff';
        document.querySelector('.home5').style.color = '#ffff';
    }

    else if (scrollPosition >= 500 && scrollPosition < 1600) {
        document.querySelector('.home1').style.color = '#ffff';
        document.querySelector('.home2').style.color = '#00c0ff';
        document.querySelector('.home3').style.color = '#ffff';
        document.querySelector('.home4').style.color = '#ffff';
        document.querySelector('.home5').style.color = '#ffff';

    }

    else if (scrollPosition >= 1600 && scrollPosition < 2300) {
        document.querySelector('.home1').style.color = '#ffff';
        document.querySelector('.home2').style.color = '#ffff';
        document.querySelector('.home3').style.color = '#00c0ff';
        document.querySelector('.home4').style.color = '#ffff';
        document.querySelector('.home5').style.color = '#ffff';
    }

    else if (scrollPosition >= 2300 && scrollPosition < 4200) {
        document.querySelector('.home1').style.color = '#ffff';
        document.querySelector('.home2').style.color = '#ffff';
        document.querySelector('.home3').style.color = '#ffff';
        document.querySelector('.home4').style.color = '#00c0ff';
        document.querySelector('.home5').style.color = '#ffff';
    }

    else if (scrollPosition >= 4200 && scrollPosition < 5500) {
        document.querySelector('.home1').style.color = '#ffff';
        document.querySelector('.home2').style.color = '#ffff';
        document.querySelector('.home3').style.color = '#ffff';
        document.querySelector('.home4').style.color = '#ffff';
        document.querySelector('.home5').style.color = '#00c0ff';
    }
};



// هاور شدن عکس حودم
const img = document.querySelector('.img-amir');

img.addEventListener('mousemove', (e) => {
    const rect = img.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const tiltX = (x - rect.width / 2) / 10;
    const tiltY = (y - rect.height / 2) / 10;
    img.style.transform = `perspective(1000px) rotateX(${tiltY}deg) rotateY(${tiltX}deg)`;
});

img.addEventListener('mouseout', () => {
    img.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
});

const img1 = document.querySelector('.img-about-anim1');

img1.addEventListener('mousemove', (e) => {
    const rect = img1.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const tiltX = (x - rect.width / 2) / 10;
    const tiltY = (y - rect.height / 2) / 10;
    img1.style.transform = `perspective(1000px) rotateX(${tiltY}deg) rotateY(${tiltX}deg)`;
    img1.style.position = "absolute"
});

img1.addEventListener('mouseout', () => {
    img1.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    img1.style.position = "absolute"
});

const img2 = document.querySelector('.img-about-anim2');

img2.addEventListener('mousemove', (e) => {
    const rect = img2.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const tiltX = (x - rect.width / 2) / 10;
    const tiltY = (y - rect.height / 2) / 10;
    img2.style.transform = `perspective(1000px) rotateX(${tiltY}deg) rotateY(${tiltX}deg)`;
    img2.style.position = "static"
});

img2.addEventListener('mouseout', () => {
    img2.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    img2.style.position = "static"
});






// هاور شدن کارت های بخش بخش مهارت ها
const cards = document.querySelectorAll('.card-anim');

cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const tiltX = (x - rect.width / 2) / (rect.width / 10);
        const tiltY = (y - rect.height / 2) / (rect.height / 10);
        card.style.transform = `perspective(1000px) rotateX(${tiltY}deg) rotateY(${tiltX}deg)`;
    });

    card.addEventListener('mouseout', () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    });
});



// هاور افکت کارت های بخش خدمات
const cards1 = document.querySelectorAll('.card-anim1');

cards1.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        document.querySelector(".fa-laptop").style.transform = "translate(0px, 90px)";
        document.querySelector(".fa-laptop").style.color = "white";
        document.querySelector(".circle-card1").style.backgroundColor = "#00c0ff";
    });

    card.addEventListener('mouseout', () => {

        document.querySelector(".fa-laptop").style.transform = "translate(45px, 45px)";
        document.querySelector(".fa-laptop").style.color = "#00c0ff";
        document.querySelector(".circle-card1").style.backgroundColor = "#432D92";
    });
});

const cards2 = document.querySelectorAll('.card-anim2');

cards2.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        document.querySelector(".fa-gamepad").style.transform = "translate(0px, 90px)";
        document.querySelector(".fa-gamepad").style.color = "white";
        document.querySelector(".circle-card2").style.backgroundColor = "#00c0ff";
    });

    card.addEventListener('mouseout', () => {

        document.querySelector(".fa-gamepad").style.transform = "translate(45px, 45px)";
        document.querySelector(".fa-gamepad").style.color = "#00c0ff";
        document.querySelector(".circle-card2").style.backgroundColor = "#432D92";
    });
});

const cards3 = document.querySelectorAll('.card-anim3');

cards3.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        document.querySelector(".fa-globe").style.transform = "translate(0px, 90px)";
        document.querySelector(".fa-globe").style.color = "white";
        document.querySelector(".circle-card3").style.backgroundColor = "#00c0ff";
    });

    card.addEventListener('mouseout', () => {

        document.querySelector(".fa-globe").style.transform = "translate(45px, 45px)";
        document.querySelector(".fa-globe").style.color = "#00c0ff";
        document.querySelector(".circle-card3").style.backgroundColor = "#432D92";
    });
});

const cards4 = document.querySelectorAll('.card-anim4');

cards4.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        document.querySelector(".fa-file-code").style.transform = "translate(0px, 90px)";
        document.querySelector(".fa-file-code").style.color = "white";
        document.querySelector(".circle-card4").style.backgroundColor = "#00c0ff";
    });
    card.addEventListener('mouseout', () => {
        document.querySelector(".fa-file-code").style.transform = "translate(45px, 45px)";
        document.querySelector(".fa-file-code").style.color = "#00c0ff";
        document.querySelector(".circle-card4").style.backgroundColor = "#432D92";
    });
});

const cards5 = document.querySelectorAll('.card-anim5');

cards5.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        document.querySelector(".fa-user-headset").style.transform = "translate(0px, 86px)";
        document.querySelector(".fa-user-headset").style.color = "white";
        document.querySelector(".circle-card5").style.backgroundColor = "#00c0ff";
    });

    card.addEventListener('mouseout', () => {

        document.querySelector(".fa-user-headset").style.transform = "translate(45px, 45px)";
        document.querySelector(".fa-user-headset").style.color = "#00c0ff";
        document.querySelector(".circle-card5").style.backgroundColor = "#432D92";
    });
});

const cards6 = document.querySelectorAll('.card-anim6');

cards6.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        document.querySelector(".fa-wand-magic-sparkles").style.transform = "translate(0px, 90px)";
        document.querySelector(".fa-wand-magic-sparkles").style.color = "white";
        document.querySelector(".circle-card6").style.backgroundColor = "#00c0ff";
    });

    card.addEventListener('mouseout', () => {

        document.querySelector(".fa-wand-magic-sparkles").style.transform = "translate(45px, 45px)";
        document.querySelector(".fa-wand-magic-sparkles").style.color = "#00c0ff";
        document.querySelector(".circle-card6").style.backgroundColor = "#432D92";
    });
});









// انیمیشن اچ تی ام ال


const progressBars = document.querySelectorAll('.animate-progress955');

const progressBarss = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting)
            entry.target.classList.add('animate-progress95');
    });
});

progressBars.forEach((progressBar) => {
    progressBarss.observe(progressBar);
});

// انیمیشن سی اس اس


const progressBars1 = document.querySelectorAll('.animate-progress855');

const progressBars11 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting)
            entry.target.classList.add('animate-progress85');
    });
});

progressBars1.forEach((progressBar) => {
    progressBars11.observe(progressBar);
});

// انیمیشن جاوا اسکریپت

const progressBars2 = document.querySelectorAll('.animate-progress700');

const progressBars22 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting)
            entry.target.classList.add('animate-progress70');
    });
});

progressBars2.forEach((progressBar) => {
    progressBars22.observe(progressBar);
});

// انیمیشن بوتاسترپ

const progressBars3 = document.querySelectorAll('.animate-progress900');

const progressBars33 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting)
            entry.target.classList.add('animate-progress90');
    });
});

progressBars3.forEach((progressBar) => {
    progressBars33.observe(progressBar);
});


// انیمیشن ریکت

const progressBars4 = document.querySelectorAll('.animate-progress600');

const progressBars44 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting)
            entry.target.classList.add('animate-progress60');
    });
});

progressBars4.forEach((progressBar) => {
    progressBars44.observe(progressBar);
});

// انیمیشن Node Js

const progressBars5 = document.querySelectorAll('.animate-progress833');

const progressBars55 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting)
            entry.target.classList.add('animate-progress83');
    });
});

progressBars5.forEach((progressBar) => {
    progressBars55.observe(progressBar);
});







// انیمشن ظاهر شدن کارت های بخش خدمات
const card1 = document.querySelectorAll('.card-laptop-viwe1');

const card11 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting)
            entry.target.classList.add('card-laptop');
    });
});

card1.forEach((progressBar) => {
    card11.observe(progressBar);
});


const card2 = document.querySelectorAll('.card-laptop-viwe2');

const card22 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting)
            entry.target.classList.add('card-game');
    });
});

card2.forEach((progressBar) => {
    card22.observe(progressBar);
});


const card3 = document.querySelectorAll('.card-laptop-viwe3');

const card33 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting)
            entry.target.classList.add('card-web');
    });
});

card3.forEach((progressBar) => {
    card33.observe(progressBar);
});


const card4 = document.querySelectorAll('.card-laptop-viwe4');

const card44 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting)
            entry.target.classList.add('card-code');
    });
});

card4.forEach((progressBar) => {
    card44.observe(progressBar);
});


const card5 = document.querySelectorAll('.card-laptop-viwe5');

const card55 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting)
            entry.target.classList.add('card-users');
    });
});

card5.forEach((progressBar) => {
    card55.observe(progressBar);
});


const card6 = document.querySelectorAll('.card-laptop-viwe6');

const card66 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting)
            entry.target.classList.add('card-figma');
    });
});

card6.forEach((progressBar) => {
    card66.observe(progressBar);
});










// انیمیشن بخش ارتباط با من
const connect1 = document.querySelectorAll('.anim-connect1');

const connect11 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting)
            entry.target.classList.add('anim-connectme1');
    });
});

connect1.forEach((progressBar) => {
    connect11.observe(progressBar);
});


const connect2 = document.querySelectorAll('.anim-connect2');

const connect22 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting)
            entry.target.classList.add('anim-connectme2');
    });
});

connect2.forEach((progressBar) => {
    connect22.observe(progressBar);
});






// انیمشن بخش خبر نامه

const khabartext1 = document.querySelectorAll('.khabar-text11');

const khabartext11 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting)
            entry.target.classList.add('khabar-text1');
    });
});

khabartext1.forEach((progressBar) => {
    khabartext11.observe(progressBar);
});


const khabartext2 = document.querySelectorAll('.khabar-text22');

const khabartext22 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting)
            entry.target.classList.add('khabar-text2');
    });
});

khabartext2.forEach((progressBar) => {
    khabartext22.observe(progressBar);
});







const cardmaharat = document.querySelectorAll('.card-maharat-anim');

const cardmaharat1 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting)
            entry.target.classList.add('card-laptop');
    });
});

cardmaharat.forEach((progressBar) => {
    cardmaharat1.observe(progressBar);
});



const cardwork = document.querySelectorAll('.card-work-anim');

const cardwork1 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting)
            entry.target.classList.add('card-laptop');
    });
});

cardwork.forEach((progressBar) => {
    cardwork1.observe(progressBar);
});

const cardahdaf = document.querySelectorAll('.card-ahdaf-anim');

const cardahdaf1 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting)
            entry.target.classList.add('card-laptop');
    });
});

cardahdaf.forEach((progressBar) => {
    cardahdaf1.observe(progressBar);
});
