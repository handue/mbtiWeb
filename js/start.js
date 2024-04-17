const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const endPoint = qnaList.length;
let qIdx =0;
// 변수를 상수로 만들어주는거임(var과 다르게 상수로서 하나만 선언 가능, maim을 하나만 사용하려고 cont 씀), flutter에서 final 같은거. 
// querySelector 는 우리 문서에서 css 선택자에를 골라주는 기능. id값을 #main 로 했을 때 -> id값이 main에 대응하는 거를 가져옴. 근데 id가 main인 거는 main section 하나임.
// 따라서 const main 은 mainsection이 들어감.

function addAnswer(answerText, qIdx){
    var a = document.querySelector('.answerBox');
    // class id 가 answerBox인 div 태그가 a에 담김
    var answer = document.createElement('Button');
    answer.classList.add('answerList');
    answer.classList.add('my-3');
    answer.classList.add('mx-auto');
    answer.classList.add('py-3');
    // answer.classList.add('fadeIn');


    a.appendChild(answer);
    // answer라는 button 이 a에 소속될 수 있도록 만들음. -> 즉 a라는 <div></div> 내부에 answerrk 들어간거. <div>answer</div>느낌.
    answer.innerHTML = answerText;
    answer.addEventListener("click",function(){
        var children = document.querySelectorAll('.answerList');
        for(let i=0;i<children.length; i++){
            children[i].disabled = true;
            children[i].style.WebkitAnimation = "fadeOut 0.6s";
            children[i].style.animation ="fadeOut 0.6s";
        }
        setTimeout(()=>{
            for(let i=0;i<children.length; i++){
                children[i].style.display = 'none';
            }
            qIdx++;
            goNext(qIdx);
        },550);
    },false);
}
function goNext(qIdx){
    var q = document.querySelector('.qBox');
    q.innerHTML = qnaList[qIdx].q;
    
    for(let i in qnaList[qIdx].a){
        addAnswer(qnaList[qIdx].a[i].answer, qIdx);
    }
    var status = document.querySelector('.statusBar');
    status.style.width = (100/endPoint) * (qIdx+1) + '%';
}
function begin(){ 
    main.style.WebkitAnimation = "fadeOut 0.6s";
    main.style.animation ="fadeOut 0.6s";
    setTimeout(()=>{       
        qna.style.WebkitAnimation = "fadeIn 0.6s";
        qna.style.animation = "fadeIn 0.6s";
        //2초 후 이거 시작 
        setTimeout(()=>{
            main.style.display = "none";
            qna.style.display = "block";
            //2초+2초 후 이거 시작
        },200);
        // let qIdx =0;
        //let은 동적으로 변하는 변수를 선언할때 사용됨
        goNext(qIdx);
        //begin()이라는 함수가 끝나면 next 시작
    },200);
    // qna.style.WebkitAnimation = "fadeIn 0.6s";
    // qna.style.animation = "fadeOut 0.6s";
    // main.style.display = "none";
    // qna.style.display = "block"; //block 이 켜주는거임
}