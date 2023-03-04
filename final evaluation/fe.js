//MVC Pattern-

const View = (()=>{

    const domSelector = {
        cir : document.getElementById("circles"),
        startg : document.getElementById("startgame"),
        scoreb: document.getElementById("score"),
        timel: document.getElementById("timeleft")
    }

    const render = (ele) =>{ //render image
        const img = document.getElementById(ele.toString())
        img.style.visibility = 'visible'
    }

    const hide = (ele) =>{
        document.getElementById(ele).style.visibility = "hidden"
    }

    const renderTime = (timer) =>{
        domSelector.timel.innerHTML = timer
    }

    const renderScore = (score) =>{
        domSelector.scoreb.innerHTML = score
    }

    return {
        domSelector,
        render,
        hide,
        renderTime, renderScore
    }
})()


const Model = ((view) => {

    const {domSelector,render,hide,renderTime, renderScore} = view

    let objs = [{id:1,status:0},{id:2,status:0},{id:3,status:0},{id:4,status:0},{id:5,status:0},{id:6,status:0},{id:7,status:0},
        {id:8,status:0},{id:9,status:0},{id:10,status:0},{id:11,status:0},{id:12,status:0}]

    const rand = () => { //select random id
        r = Math.floor(Math.random() * (12 - 1 + 1) + 1);
        while(objs[r-1].status == 1)
        {
            r = Math.floor(Math.random() * (12 - 1 + 1) + 1);
        }
        objs[r-1].status = 1
        return r
    }

    return {
        rand,
        objs
    }
})(View)


const Controller = ((view, model) => {

        const {domSelector,render,hide,renderTime,renderScore} = view
        const {rand,objs} = model
        let score = 0
        let timer

        domSelector.cir.addEventListener('click',(event)=>{ //function to make image dissappear on click
            let id = event.target.id
            if(id != "" && objs[Number(id)-1].status == 1){ //check if clicked on visible image
                score = score + 1
                renderScore(score)
                hide(id)
                let re = rand()
                objs[Number(id)-1].status = 0
                render(re)
            }

        })

        const resetBoard = () => {
            for(let i=1;i<13; i++){
                hide(i.toString())
                objs[i-1].status = 0
            }
        }

        const setTimer = () =>{ //to set timer and display time left
            timer = 30
            return x = setInterval(() => {
                if(timer > -1){
                    renderTime(timer)
                    timer = timer - 1
                }
                else{
                    clearInterval(x)
                    timer = 30
                    alert("Time is over!");
                    resetBoard() //reset board
                }
            },1000)
            return x
        }

        const bootstrap = () => {//bootstrap to start game
            domSelector.startg.addEventListener('click', () => {
                if(timer != undefined && timer > -1){
                    clearInterval(x)
                }
                renderTime(30)
                renderScore(0)
                resetBoard() //reset board
                score = 0 //added score to zero
                const one = rand()
                const two = rand()
                const three = rand()
                render(one)
                render(two)
                render(three)
                setTimer()
            })
        }
        return {bootstrap}
    

    })(View, Model)
    
Controller.bootstrap()


