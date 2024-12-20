### Slider et Pagination avec SwiperJS

## Preview 

![slider preview](https://github.com/user-attachments/assets/94f726cf-2d6a-4688-8b85-983fbafba935)


## Source

[swiperjs](https://swiperjs.com/swiper-api) 

[youtube](https://www.youtube.com/watch?v=XxG7vqFecR8)

[image of thir card slider](https://drive.google.com/file/d/1_0OdxkhZXtX2TFsutfT8VlJGtBmoRdjL/view)

## Code

```html
// index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pagination</title>
    <link rel="stylesheet" href="dist/style.css">

    <!--CDN of SwiperJS CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"/>
</head>
<body>
    <div class="container swiper">

        <div class="swiper-button-prev"></div>
        <div class="slide-wrapper swiper">

            <div class="card-list swiper-wrapper">

                <div class="card-item swiper-slide">
                    <img src="./images/img-1.jpg" alt="" srcset="">
                    <h2 class="user-name">Jmaes Wilson</h2>
                    <p class="user-profession">Software Developper</p>
                    <button class="message-button">Message</button>
                </div>

                <div class="card-item swiper-slide">
                    <img src="./images/img-2.jpg" alt="" srcset="">
                    <h2 class="user-name">Sarah</h2>
                    <p class="user-profession">Software Developper</p>
                    <button class="message-button">Message</button>
                </div>

                <div class="card-item swiper-slide">
                    <img src="./images/img-3.jpg" alt="" srcset="">
                    <h2 class="user-name">Richard Wilson</h2>
                    <p class="user-profession">Software Developper</p>
                    <button class="message-button">Message</button>
                </div>

                <div class="card-item swiper-slide">
                    <img src="./images/img-4.jpg" alt="" srcset="">
                    <h2 class="user-name">Laura Thompson</h2>
                    <p class="user-profession">Software Developper</p>
                    <button class="message-button">Message</button>
                </div>

                <div class="card-item swiper-slide">
                    <img src="./images/img-5.jpg" alt="" srcset="">
                    <h2 class="user-name">Jmaes Wilson</h2>
                    <p class="user-profession">Software Developper</p>
                    <button class="message-button">Message</button>
                </div>

                <div class="card-item swiper-slide">
                    <img src="./images/img-6.jpg" alt="" srcset="">
                    <h2 class="user-name">Jmaes Wilson</h2>
                    <p class="user-profession">Software Developper</p>
                    <button class="message-button">Message</button>
                </div>

            </div>
            <div class="swiper-button-next"></div>

            <!-- If we need pagination -->
            <div class="swiper-pagination"></div>

        </div>
        
    </div>    

    <!-- CDN of SwiperJS JS -->
    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
    <!-- Custome swiper -->
    <script src="script/script.js"></script>
</body>
</html>
```


```scss
// style/style.scss
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

* {
    font-family: 'Montserrat',sans-serif;
    font-style: normal;
    font-optical-sizing: auto;
    color: white;
}

body {
    background: #242424;
    display: flex;
    align-items: center;
    min-height: 100vh;
    justify-content: center;
    .container{
        .slide-wrapper{
            width: 1250px; // 1250 = card-item * 3 + spacedbetween * 2
            // border: solid 1px red;
            .card-list{
                .card-item{
                    background-color: #ffffff33; 
                    max-width: 350px;
                    min-width: 350px;
                    height: 400px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    border-radius: 8px;
                    padding: 10px 0px;
                    // border: 1px solid rgba(255,255,255,0.5 );
                    img{
                        width: 150px;
                        height: 150px;
                        border-radius: 100%;
                        margin-bottom: 40px;
                        // border: 3px solid #fff;
                        padding: 4px;
                    }
                    .user-profession{
                        font-size: 1.15rem;
                        color: #E3E3E3;
                        font-weight: 500;
                        margin: 14px 0 40px;
                    }
                    .message-button{
                        font-size: 1.25rem;                        
                        padding: 10px 35px;
                        color: #030728;
                        border-radius: 6px;
                        font-weight: 500;
                        cursor: pointer;
                        // border: 1px solid transparent;
                        transition: 0.2s ease;
                        &:hover{
                            background: rgba(255,255,255,0.1);
                            // border: 1px solid #fff;
                            color: #fff;
                        }
                    }
                }
            }
        }
    }
}
@media (width <= 1300px ) {
    body{
        .slide-wrapper{
            width: 1100px !important;
            .card-list{
                .card-item{
                    max-width: 300px !important;
                    min-width: 300px !important;
                    padding: 10px 0px;
                }
        }   }
    }
}

@media (width <= 1140px ) {
    body{
        .slide-wrapper{
            width: 700px !important;
            .card-list{
                .card-item{
                    max-width: 300px !important;
                    min-width: 300px !important;
                    padding: 10px 0px;
                }
        }   }
    }
}

@media (width <= 735px ) {
    body{
        .slide-wrapper{
            width: 400px !important;
            .card-list{
                .card-item{
                    max-width: 400px !important;
                    min-width: 400px !important;
                    padding: 10px 0px;
                }
        }   }
    }
}
```

```javascript

// script/script.js
const swiper = new Swiper('.slide-wrapper', {

    // Default
    speed: 400,
    slidesPerView: 3,
    spaceBetween: 100,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },

    breakpoints: {
        // width >= 1140
        1140 :{
            slidesPerView: 3
        },
        // width >= 735
        735: {
            slidesPerView: 2
        },
        // width >= 0
        0 :{
            slidesPerView: 1,
        }

    }
  });
```

## Run this and lunch the index
```shell
sass style/style.scss dist/style.css
```








