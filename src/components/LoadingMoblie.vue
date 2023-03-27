<script setup>

import Typed from "typed.js";
import { onMounted } from "vue";
import anime from 'animejs/lib/anime.es.js';

import IconScroll from "./icons/iconScroll.vue";


let ary = ["DSteam.", "Design Something.", "Design Store.", "DeSign talents.", "Dancing Sometimes.", "Dringking Sometime.", 'Dying Sometimes.']
let Pre = ["DSt."]
let finalAry


let collap
let typed



const shuffle = (List) => {
    let array = JSON.parse(JSON.stringify(List));
    let res = [], random;
    while (array.length > 0) {
        random = Math.floor(Math.random() * array.length);
        res.push(array[random]);
        array.splice(random, 1);
    }
    let final = Pre.concat(res)
    return final;
}
// document.querySelector('.main').style.display = "flex"
const handleClick = () => {
    document.querySelector('.main').style.display = "flex"
    document.querySelector('.scroll-button').style.display = "none"
    document.querySelector('.type-position').style.opacity = 0

    collap.play()
    typed.stop()



}

onMounted(() => {
    document.querySelector('.main').style.display = "none"

    finalAry = shuffle(ary)

    typed = new Typed('.type-text-d', {
        strings: finalAry,
        typeSpeed: 30,
        smartBackspace: true,
        showCursor: false,
        cursorChar: '|',
        autoInsertCss: true,
        backDelay: 700,

        onStart: (self) => {
         
        },
        onStop: (self) => {
         
        },
        onBegin: (self) => {

        },
        onComplete: (self) => {
            finalAry = shuffle(ary)
            self.reset()
        }
    });


    collap = anime({
        targets: ".colorful-page",
        height: "6px",
        autoplay: false,

        duration: 500,
        easing: 'easeInOutQuad',
        begin: function (anim) {

        },
        complete: function (anim) {
            const bg = document.querySelector(".colorful-page")
            bg.style.position = 'fixed'
            bg.style.top = 0
            document.querySelector('.linearBar').classList.add('linearBarShow')

        }
    })

    typed.start()






})


</script>

<template>
    <div class="colorful-page text-white85  ">
        <div class="linearBar"> </div>

        <div class="type-position container text-6xl font-bold  md:text-7xl 2xl:text-8xl;">



            <div class="type-text-d">

            </div>





        </div>

        <div @click="handleClick"
            class="scroll-button text-base flex flex-col items-center justify-start text-4xl cursor-pointer text-white55   ">
            <div> discover something</div>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-xiala-"></use>
            </svg>



        </div>

    </div>
</template>


<style lang="scss" scoped>
.colorful-page {
    overflow: hidden;
    width: 100%;
    height: 100vh;
    position: relative;
    // transition: height ease-in-out 3s;
    background-color: #C33484;
    padding: 0 1rem;
    background-image:


        radial-gradient(closest-side, #FACD1A, rgba(246, 206, 6, 0.0)),
        radial-gradient(closest-side, #09EEF7, rgba(235, 105, 78, 0)),
        radial-gradient(closest-side, #1007EF, rgba(243, 11, 164, 0)),
        radial-gradient(closest-side, hsla(127, 100%, 50%, 0.6), hsla(127, 100%, 50%, 0)),

        radial-gradient(closest-side, hsla(20, 100%, 50%, 1), hsla(20, 100%, 50%, 0)),
        radial-gradient(closest-side, hsla(269, 100%, 50%, 1), hsla(269, 100%, 50%, 0));
    background-size:
        90vmax 90vmax,
        160vmax 160vmax,
        100vmax 100vmax,
        110vmax 110vmax,
        150vmax 150vmax,
        150vmax 150vmax;

    background-position:
        15vmax 10vmax,
        -80vmax -80vmax,
        20vmax -30vmax,
        5vmax 30vmax,
        10vmax 10vmax,
        -50vmax 20vmax;

    background-repeat: no-repeat;
    animation: 10s movement linear infinite reverse;

}

@keyframes movement {

    0%,
    100% {
        background-size:
            90vmax 90vmax,
            160vmax 160vmax,
            100vmax 100vmax,
            110vmax 110vmax,
            150vmax 150vmax,
            150vmax 150vmax;
        background-position:
            15vmax 10vmax,
            -80vmax -80vmax,
            20vmax -30vmax,
            5vmax 30vmax,
            10vmax 10vmax,
            -40vmax 10vmax;
    }






    25% {
        background-size:
            200vmax 200vmax,
            200vmax 2000vmax,
            150vmax 125vmax,
            110vmax 110vmax,
            150vmax 150vmax,
            175vmax 180vmax;
        background-position:
            15vmax 10vmax,
            -90vmax -90vmax,
            30vmax -36vmax,
            -30vmax -10vmax,
            10vmax 10vmax,
            20vmax 10vmax;
    }


    50% {
        background-size:
            100vmax 1000vmax,
            150vmax 150vmax,
            100vmax 100vmax,
            110vmax 110vmax,
            150vmax 150vmax,
            150vmax 150vmax;
        background-position:
            -10vmax 10vmax,
            -80vmax -80vmax,
            20vmax -30vmax,
            -30vmax -10vmax,
            10vmax 10vmax,
            20vmax 0vmax;
    }

}
.type-position {
    font-size: 60px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 0 auto;
    transition: opacity 2s ease-in-out;

}


.type-text-d {
    position: absolute;
    top: 35%;
    transform: translateY(-50%);
    height: 200px;

}

.type-text {
    position: relative;
    overflow: hidden;
}



.scroll-button {


    position: absolute;
    left: 50%;
    bottom: 5%;
    transform: translate(-50%, 0%);
    user-select: none;
    animation: breathe ease-in-out 2s infinite alternate;

    @keyframes breathe {

        0% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }

    }
}


.icon {
    font-size: 48px;
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}

.linearBar{
  background-color: black;
  width: 100%;
  height: 6px;
  position: absolute;
  bottom: 0;
  left: 0;

  background: linear-gradient(87deg, rgba(10,240,10,1) 3%, rgba(10,10,240,1) 22%, rgba(255,100,0,1) 38%, rgba(240,210,20,1) 55%, rgba(140,10,255,1) 74%, rgba(10,240,240,1) 96%);
  // background-repeat: repeat-x;
  z-index: 200;
  opacity: 0;
  transition: opacity ease-in-out 0.5s  ;
}


.linearBarShow{
  opacity: 1;
  
}
</style>