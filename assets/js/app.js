document.addEventListener("DOMContentLoaded", function () {
    let toggleBtn = document.querySelector(".header .header_inner .toggle")

    toggleBtn.addEventListener("click", function () {
        toggleBtn.classList.toggle("active")
        document.querySelector(".header .header_inner nav").classList.toggle("active")
    })
    document.querySelector(".header .header_inner nav ul").addEventListener("click", function () {
        toggleBtn.classList.remove("active")
        document.querySelector(".header .header_inner nav").classList.remove("active")
    })

    heroCardSort()

    function heroCardSort() {
        // ? ეს არის პირველი ქარდის ფუნქცია და აქედან მოდის იმ ქარდების მონაცემები
        // ? მარტო შესაცვლელი გაქვს ტექსტები და აიქონები, მაქსიმუმ 6 ქარდი უნდა იყოს.
        // ? აიქონები ნახე ამ საიტზე > https://remixicon.com/
        // ? და თუ სხვა საიტს გამოიყენებ მაშინ svg კოდით წამოიღე აიქონი

        let herocardInner = document.querySelector(".hero_card_sec_inner .cards_cont .cards_inner")

        let cardArr = [{
                icon: 'icon',
                name: 'card name1',
                cartInfo: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore porro eos quos, doloremque tempore ipsam adipisci ratione veritatis minima debitis sint hic similique ut reiciendis.'
            },
            {
                icon: 'icon',
                name: 'card name2',
                cartInfo: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore porro eos quos, doloremque tempore ipsam adipisci ratione veritatis minima debitis sint hic similique ut reiciendis.'
            },
            {
                icon: 'icon',
                name: 'card name3',
                cartInfo: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore porro eos quos, doloremque tempore ipsam adipisci ratione veritatis minima debitis sint hic similique ut reiciendis.'
            },
            {
                icon: 'icon',
                name: 'card name3',
                cartInfo: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore porro eos quos, doloremque tempore ipsam adipisci ratione veritatis minima debitis sint hic similique ut reiciendis.'
            },
            {
                icon: 'icon',
                name: 'card name3',
                cartInfo: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore porro eos quos, doloremque tempore ipsam adipisci ratione veritatis minima debitis sint hic similique ut reiciendis.'
            },
            {
                icon: 'icon',
                name: 'card name3',
                cartInfo: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore porro eos quos, doloremque tempore ipsam adipisci ratione veritatis minima debitis sint hic similique ut reiciendis.'
            },
            {
                icon: 'icon',
                name: 'card name3',
                cartInfo: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore porro eos quos, doloremque tempore ipsam adipisci ratione veritatis minima debitis sint hic similique ut reiciendis.'
            }
        ]

        cardArr.splice(6, cardArr.length)

        herocardInner.innerHTML = ""

        for (const i in cardArr) {
            herocardInner.innerHTML += `<div class="cards_inner_card_box">
                                            <div class="card_icon">${cardArr[i].icon}</div>
                                            <h2 class="card_title font">${cardArr[i].name}</h2>
                                            <p class="card_info font">${cardArr[i].cartInfo}</p>
                                        </div>`;
        }
    }

    heroSlider()

    function heroSlider() {

        let heroSliderArr = [{
                iconInfo: '1',
                title: 'Front - End',
                info: 'Front-end develops website interfaces using HTML, CSS, and JavaScript for responsiveness',
                imgSrc: 'assets/img/frontend.png',
                active: 'checked'
            },
            {
                iconInfo: '2',
                title: 'Back - End',
                info: 'Back-end manages server-side logic, and databases, using languages like Node.js',
                imgSrc: 'assets/img/backend.png',
            },
            {
                iconInfo: '3',
                title: 'Full Stack',
                info: 'Full-stack develops both front-end and back-end components for comprehensive applications.',
                imgSrc: 'assets/img/fullstack.png',
            },
            {
                iconInfo: '4',
                title: 'Game Development',
                info: 'Game developers design and code interactive gaming experiences, combining creativity and programming.',
                imgSrc: 'assets/img/gamedev.png',
            }
        ]

        let heroSlider = document.querySelector(".hero_slider_cont")

        heroSliderArr.splice(4, heroSliderArr.length)

        heroSlider.innerHTML = ""

        for (const i in heroSliderArr) {
            heroSlider.innerHTML += `<input type="radio" name="slide" id="c${i}" ${heroSliderArr[i].active}>
                                     <label for="c${i}" class="card">
                                         <img src="${heroSliderArr[i].imgSrc}" loading="lazy" alt="slider photos">
                                         <div class="row">
                                             <div class="icon font">${heroSliderArr[i].iconInfo}</div>
                                             <div class="description font">
                                                 <h4>${heroSliderArr[i].title}</h4>
                                                 <p>${heroSliderArr[i].info}</p>
                                             </div>
                                         </div>
                                     </label>`
        }
    }

    coursesCard()

    function coursesCard() {
        let coursesArr = [{
                icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"/></svg>',
                title: 'Free',
                info: '2 Base Leason About Html Css For Free',
                footerText: 'TWO LESSON: FREE'
            },
            {
                icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3 .1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2 .1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"/></svg>',
                title: 'Booster',
                info: 'If You Boost Our Discord Server You Will Grant Acces To Courses',
                footerText: 'Each Lesson: Boost'
            },
            {
                icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"/></svg>',
                title: 'Invite',
                info: 'Invite 15members in our discord will give you 1 free course',
                footerText: 'Each Lesson: 15Invite'
            },
            {
                icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM180.9 444.9c-33.7 0-53.2-17.4-63.2-38.5L152 385.7c6.6 11.7 12.6 21.6 27.1 21.6c13.8 0 22.6-5.4 22.6-26.5V237.7h42.1V381.4c0 43.6-25.6 63.5-62.9 63.5zm85.8-43L301 382.1c9 14.7 20.8 25.6 41.5 25.6c17.4 0 28.6-8.7 28.6-20.8c0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5c0-31.6 24.1-55.6 61.6-55.6c26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18c-12.3 0-20.1 7.8-20.1 18c0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2c0 37.8-29.8 58.6-69.7 58.6c-39.1 0-64.4-18.6-76.7-43z"/></svg>',
                title: 'Premium',
                info: 'Each Lesson Price is 10$ and you can learn and become developer with us.',
                footerText: 'Each Lesson: 10$'
            }
        ]

        let coursescardinner = document.querySelector(".courses_cards_inner")

        coursescardinner.innerHTML = ""

        coursesArr.splice(4, coursesArr.length)

        for (let i in coursesArr) {
            coursescardinner.innerHTML += `<div class="card-wrap">
                                              <div class="card-header">${coursesArr[i].icon}</div>
                                              <div class="card-content">
                                                  <h1 class="card-title">${coursesArr[i].title}</h1>
                                                  <p class="card-text">${coursesArr[i].info}</p>
                                                  <h5 class="card-title">${coursesArr[i].footerText}</h5>
                                                  <button class="card-btn font">Join Now!</button>
                                              </div>
                                          </div>`;
        }


    }


})