document.addEventListener("DOMContentLoaded", function () {
    let toggleBtn = document.querySelector(".header .header_inner .toggle")


    toggleBtn.addEventListener("click", function () {
        toggleBtn.classList.toggle("active")
        document.querySelector(".header .header_inner nav").classList.toggle("active")
    })



    heroCardSort()


    function heroCardSort() {
        // ? ეს არის პირველი ქარდის ფუნქცია და აქედან მოდის იმ ქარდების მონაცემები
        // ? მარტო შესაცვლელი გაქვს ტექსტები და აიქონები, მაქსიმუმ 6 ქარდი უნდა იყოს.
        // ? აიქონები ნახე ამ საიტზე > https://remixicon.com/
        // ? და თუ სხვა საიტს გამოიყენებ მაშინ svg კოდით წამოიღე აიქონი

        let herocardInner = document.querySelector(".hero_card_sec_inner .cards_cont .cards_inner")

        let cardArr = [
            {
                icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M21 3C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21ZM9 8C6.792 8 5 9.792 5 12C5 14.208 6.792 16 9 16C10.1 16 11.1 15.55 11.828 14.828L10.4144 13.4144C10.0525 13.7762 9.5525 14 9 14C7.895 14 7 13.105 7 12C7 10.895 7.895 10 9 10C9.55 10 10.0483 10.22 10.4153 10.5866L11.829 9.173C11.1049 8.44841 10.1045 8 9 8ZM16 8C13.792 8 12 9.792 12 12C12 14.208 13.792 16 16 16C17.104 16 18.104 15.552 18.828 14.828L17.4144 13.4144C17.0525 13.7762 16.5525 14 16 14C14.895 14 14 13.105 14 12C14 10.895 14.895 10 16 10C16.553 10 17.0534 10.2241 17.4153 10.5866L18.829 9.173C18.1049 8.44841 17.1045 8 16 8Z"></path></svg>',
                name: 'card name1',
                cartInfo: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore porro eos quos, doloremque tempore ipsam adipisci ratione veritatis minima debitis sint hic similique ut reiciendis.'
            },
            {
                icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M21 3C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21ZM9 8C6.792 8 5 9.792 5 12C5 14.208 6.792 16 9 16C10.1 16 11.1 15.55 11.828 14.828L10.4144 13.4144C10.0525 13.7762 9.5525 14 9 14C7.895 14 7 13.105 7 12C7 10.895 7.895 10 9 10C9.55 10 10.0483 10.22 10.4153 10.5866L11.829 9.173C11.1049 8.44841 10.1045 8 9 8ZM16 8C13.792 8 12 9.792 12 12C12 14.208 13.792 16 16 16C17.104 16 18.104 15.552 18.828 14.828L17.4144 13.4144C17.0525 13.7762 16.5525 14 16 14C14.895 14 14 13.105 14 12C14 10.895 14.895 10 16 10C16.553 10 17.0534 10.2241 17.4153 10.5866L18.829 9.173C18.1049 8.44841 17.1045 8 16 8Z"></path></svg>',
                name: 'card name2',
                cartInfo: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore porro eos quos, doloremque tempore ipsam adipisci ratione veritatis minima debitis sint hic similique ut reiciendis.'
            },
            {
                icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M21 3C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21ZM9 8C6.792 8 5 9.792 5 12C5 14.208 6.792 16 9 16C10.1 16 11.1 15.55 11.828 14.828L10.4144 13.4144C10.0525 13.7762 9.5525 14 9 14C7.895 14 7 13.105 7 12C7 10.895 7.895 10 9 10C9.55 10 10.0483 10.22 10.4153 10.5866L11.829 9.173C11.1049 8.44841 10.1045 8 9 8ZM16 8C13.792 8 12 9.792 12 12C12 14.208 13.792 16 16 16C17.104 16 18.104 15.552 18.828 14.828L17.4144 13.4144C17.0525 13.7762 16.5525 14 16 14C14.895 14 14 13.105 14 12C14 10.895 14.895 10 16 10C16.553 10 17.0534 10.2241 17.4153 10.5866L18.829 9.173C18.1049 8.44841 17.1045 8 16 8Z"></path></svg>',
                name: 'card name3',
                cartInfo: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore porro eos quos, doloremque tempore ipsam adipisci ratione veritatis minima debitis sint hic similique ut reiciendis.'
            },
            {
                icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M21 3C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21ZM9 8C6.792 8 5 9.792 5 12C5 14.208 6.792 16 9 16C10.1 16 11.1 15.55 11.828 14.828L10.4144 13.4144C10.0525 13.7762 9.5525 14 9 14C7.895 14 7 13.105 7 12C7 10.895 7.895 10 9 10C9.55 10 10.0483 10.22 10.4153 10.5866L11.829 9.173C11.1049 8.44841 10.1045 8 9 8ZM16 8C13.792 8 12 9.792 12 12C12 14.208 13.792 16 16 16C17.104 16 18.104 15.552 18.828 14.828L17.4144 13.4144C17.0525 13.7762 16.5525 14 16 14C14.895 14 14 13.105 14 12C14 10.895 14.895 10 16 10C16.553 10 17.0534 10.2241 17.4153 10.5866L18.829 9.173C18.1049 8.44841 17.1045 8 16 8Z"></path></svg>',
                name: 'card name3',
                cartInfo: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore porro eos quos, doloremque tempore ipsam adipisci ratione veritatis minima debitis sint hic similique ut reiciendis.'
            },
            {
                icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M21 3C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21ZM9 8C6.792 8 5 9.792 5 12C5 14.208 6.792 16 9 16C10.1 16 11.1 15.55 11.828 14.828L10.4144 13.4144C10.0525 13.7762 9.5525 14 9 14C7.895 14 7 13.105 7 12C7 10.895 7.895 10 9 10C9.55 10 10.0483 10.22 10.4153 10.5866L11.829 9.173C11.1049 8.44841 10.1045 8 9 8ZM16 8C13.792 8 12 9.792 12 12C12 14.208 13.792 16 16 16C17.104 16 18.104 15.552 18.828 14.828L17.4144 13.4144C17.0525 13.7762 16.5525 14 16 14C14.895 14 14 13.105 14 12C14 10.895 14.895 10 16 10C16.553 10 17.0534 10.2241 17.4153 10.5866L18.829 9.173C18.1049 8.44841 17.1045 8 16 8Z"></path></svg>',
                name: 'card name3',
                cartInfo: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore porro eos quos, doloremque tempore ipsam adipisci ratione veritatis minima debitis sint hic similique ut reiciendis.'
            },
            {
                icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M21 3C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21ZM9 8C6.792 8 5 9.792 5 12C5 14.208 6.792 16 9 16C10.1 16 11.1 15.55 11.828 14.828L10.4144 13.4144C10.0525 13.7762 9.5525 14 9 14C7.895 14 7 13.105 7 12C7 10.895 7.895 10 9 10C9.55 10 10.0483 10.22 10.4153 10.5866L11.829 9.173C11.1049 8.44841 10.1045 8 9 8ZM16 8C13.792 8 12 9.792 12 12C12 14.208 13.792 16 16 16C17.104 16 18.104 15.552 18.828 14.828L17.4144 13.4144C17.0525 13.7762 16.5525 14 16 14C14.895 14 14 13.105 14 12C14 10.895 14.895 10 16 10C16.553 10 17.0534 10.2241 17.4153 10.5866L18.829 9.173C18.1049 8.44841 17.1045 8 16 8Z"></path></svg>',
                name: 'card name3',
                cartInfo: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore porro eos quos, doloremque tempore ipsam adipisci ratione veritatis minima debitis sint hic similique ut reiciendis.'
            }
        ]

        herocardInner.innerHTML = ""

        for (const i in cardArr) {
            herocardInner.innerHTML +=
                `<div class="cards_inner_card_box">
                    <div class="card_icon">${cardArr[i].icon}</div>
                    <h2 class="card_title font">${cardArr[i].name}</h2>
                    <p class="card_info font">${cardArr[i].cartInfo}</p>
                </div>`;
        }
    }

    heroSlider()

    function heroSlider() {

        let heroSliderArr = [
            {
                iconInfo: '1',
                title: 'Front - End',
                info: 'Front-end develops website interfaces using HTML, CSS, JavaScript for responsiveness',
                imgSrc: 'https://thumbs.dreamstime.com/b/frontend-development-web-banner-concept-website-interface-frontend-development-web-banner-concept-website-interface-design-159250288.jpg',
                active: 'checked'
            },
            {
                iconInfo: '2',
                title: 'Back - End',
                info: 'Back-end manages server-side logic, databases, using languages like Node.js',
                imgSrc: 'https://img.freepik.com/free-vector/backend-technology-concept-with-glowing-lines-background_1017-28405.jpg',
            },
            {
                iconInfo: '3',
                title: 'Full Stack',
                info: 'Full-stack develops both front-end and back-end components for comprehensive applications.',
                imgSrc: 'https://www.spaceo.ca/wp-content/uploads/2021/08/Full-Stack-Developer-Tutorials.jpg',
            },
            {
                iconInfo: '4',
                title: 'Game Development',
                info: 'Game developers design and code interactive gaming experiences, combining creativity and programming.',
                imgSrc: 'https://t4.ftcdn.net/jpg/04/07/38/63/360_F_407386365_NOm1IO3RAszKDeJzeAnrqtkKVL5oEsYR.jpg',
            }
        ]
        
        let heroSlider = document.querySelector(".hero_slider_cont")
        for (const i in heroSliderArr) {
            console.log( heroSliderArr[i].active );

            heroSlider.innerHTML +=`<input type="radio" name="slide" id="c${i}" ${heroSliderArr[i].active}>
                                    <label for="c${i}" class="card">
                                        <img loading="lazy" src="${heroSliderArr[i].imgSrc}" alt="slider photos">
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
    

})