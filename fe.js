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
    
    return {
        domSelector,
        render
    }
})()


const Model = ((view) => {

    const {render} = view
    const objs = [0,0,0,0,0,0,0,0,0,0,0,0] //Added array to store status of objects by index

    const rand = () => {  //select random id
        r = Math.floor(Math.random() * (12 - 1 + 1) + 1); //Added min range 
        while(objs[r-1] == 1)       //To make sure that there are exactly 3 moles at a time
        {
            r = Math.floor(Math.random() * (12 - 1 + 1) + 1);
        }
        objs[r-1] = 1
        return r
    }
    return {
        rand,
        objs
    }
})(View)


const Controller = ((view, model) => {

        const {domSelector,render} = view
        const {rand,objs} = model
        let score = 0

        domSelector.cir.addEventListener('mouseover',(event)=>{ //To make image dissappear on mouseover(previously kept click as event)
            let id = event.target.id
            if(objs[Number(id)-1] == 1){ //check if clicked on visible image
                score = score + 1
                domSelector.scoreb.innerHTML = score
                document.getElementById(id).style.visibility = "hidden"
                let re = rand()
                objs[Number(id)-1] = 0 //Changed status back to 0
                render(re)
            }

        })

        const resetBoard = () => {   
            for(let i=1;i<13; i++){
                document.getElementById(i.toString()).style.visibility = "hidden"
                objs[i-1] = 0
            }
        }

        const setTimer = () =>{ //to set timer and display time left
            timer = 30
            return x = setInterval(() => {
                if(timer > -1){
                    domSelector.timel.innerHTML = timer
                    timer = timer - 1
                }
                else{
                    clearInterval(x)
                    alert("Time is over!");
                    resetBoard() //reset board
                }
            },1000)
            return x
        }

        const bootstrap = () => {//bootstrap to start game
            domSelector.startg.addEventListener('click', () => {
                domSelector.timel.innerHTML = 30
                domSelector.scoreb.innerHTML = 0
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


