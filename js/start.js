const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
// 변수를 상수로 만들어주는거임(var과 다르게 상수로서 하나만 선언 가능, maim을 하나만 사용하려고 cont 씀), flutter에서 final 같은거. 
// querySelector 는 우리 문서에서 css 선택자에를 골라주는 기능. id값을 #main 로 했을 때 -> id값이 main에 대응하는 거를 가져옴. 근데 id가 main인 거는 main section 하나임.
// 따라서 const main 은 mainsection이 들어감.

function begin(){ 
    main.style.WebkitAnimation = "fadeOut 0.6s";
    main.style.animation ="fadeOut 0.6s";
    setTimeout(()=>{       
        qna.style.WebkitAnimation = "fadeIn 0.6s";
        qna.style.animation = "fadeIn 0.6s";
        //2초 후 이거 시작 
        setTimeout(()=>{
            main.style.display ="none";
            qna.style.display ="block"
            //2초+2초 후 이거 시작
        },200);
    },200);
    // qna.style.WebkitAnimation = "fadeIn 0.6s";
    // qna.style.animation = "fadeOut 0.6s";
    // main.style.display = "none";
    // qna.style.display = "block"; //block 이 켜주는거임
}