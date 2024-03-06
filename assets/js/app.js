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

        let cardArr = [
            {
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
                imgSrc: 'assets/img/frontend.png',
                active: 'checked'
            },
            {
                iconInfo: '2',
                title: 'Back - End',
                info: 'Back-end manages server-side logic, databases, using languages like Node.js',
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
        
        for (const i in heroSliderArr) {
            heroSlider.innerHTML +=`<input type="radio" name="slide" id="c${i}" ${heroSliderArr[i].active}>
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
    

})