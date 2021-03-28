function toConsumableArray(a){
    if(Array.isArray(a)){
        for(let b = 0, createdArray = Array(a.length); b < a.length; b++){
            createdArray[b] = a[b];
        }
        return createdArray;
    }
    return Array.from(a);
}

let playing = !0, timer = function(){
    return setInterval(function(){
        let a = document.getElementById(`counter`), b = parseInt(a.innerText);
        a.innerText = b + 1;
    }, 1e3)
};

let interval = timer();
const minus = document.getElementById(`minus`);
const plus = document.getElementById(`plus`);
const heart = document.getElementById(`heart`);
const pause = document.getElementById(`pause`);
let commentForm = document.getElementsByTagName(`form`)[0];

minus.addEventListener(`click`, function(){
    let a = document.getElementById(`counter`);
    let b = parseInt(a.innerText);
    a.innerText = b - 1;
});

plus.addEventListener(`click`, function(){
    let a = document.getElementById(`counter`);
    let b = parseInt(a.innerText);
    a.innerText = b + 1;
});

heart.addEventListener("click",function(){
    let a = document.getElementById("counter");
    let b = parseInt(a.innerText);
    let c = document.querySelector(".likes");
    let d = void 0;
    if([].concat(toConsumableArray(c.children)).map(function(a){
        return parseInt(a.dataset.num);
    }).includes(b)){
        d = document.querySelector('[data-num="' + b + '"]');
        var e = parseInt(d.children[0].innerText);
        d.innerHTML = b + " has been liked <span>" + (e + 1) + "</span> times";
    } else {
        (d = document.createElement("li")).setAttribute("data-num",b);
        d.innerHTML = b + " has been liked <span>1</span> time";
        c.appendChild(d);
    }
});

pause.addEventListener("click",function(){
    playing?(playing = !1, clearInterval(interval), this.innerText = `resume`):(playing = !0, interval = timer(), this.innerText = `pause`); 
    [].concat(toConsumableArray(document.getElementsByTagName(`button`))).forEach(function(a){
        `pause` !== a.id && (a.disabled = !playing);
    })
});

commentForm.addEventListener("submit",function(a){
    a.preventDefault();
    let b = this.children[0]
    let c = b.value;
    b.value = ``;
    let d = document.querySelector(`.comments`);
    let e = document.createElement(`p`);
    e.innerText = c, d.appendChild(e);
});