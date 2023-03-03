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

    const rand = (pos) => { //select random id
        r = Math.floor(Math.random() * 12)
        if (r == pos || r == 0 )
        {
            return r + 1
        }
        return r
    }
    return {
        rand
    }
})(View)


const Controller = ((view, model) => {

        const {domSelector,render} = view
        const {rand} = model
        let score = 0

        domSelector.cir.addEventListener('click',(event)=>{ //function to make image dissappear on click
            const id = event.target.id
            if(document.getElementById(id).style.visibility == "visible"){ //check if clicked on visible image
                score = score + 1
                domSelector.scoreb.innerHTML = score
                document.getElementById(id).style.visibility = "hidden"
                const re = rand(id)
                render(re)
            }

        })

        const setTimer = () =>{ //to set timer and display time left
            timer = 30
            return x = setInterval(() => {
                if(timer > 0){
                    domSelector.timel.innerHTML = timer
                    timer = timer - 1
                }
                else{
                    clearInterval(x)
                    alert("Time is over!");
                }
            },1000)
            return x
        }

        const bootstrap = () => {//bootstrap to start game
            domSelector.startg.addEventListener('click', () => {
                domSelector.timel.innerHTML = 30
                domSelector.scoreb.innerHTML = 0
                for(let i=1;i<13; i++){
                    document.getElementById(i.toString()).style.visibility = "hidden"
                }
                const one = rand(0)
                const two = rand(one)
                const three = rand(two)
                render(one)
                render(two)
                render(three)
                setTimer()
            })
        }
        return {bootstrap}
    

    })(View, Model)
    
Controller.bootstrap()










    /*
    const setTimer = () =>{
        timer = 3
        return x = setInterval(() => {
            console.log(timer)
            if(timer > 0){
                timer = timer - 1
            }
            else{
                clearInterval(x)
            }
        },1000)
        return x
    }

    */

    /*
    domSelector.startg.addEventListener('click', () => {

        // domSelector.inputForm.value
        const newList = [...state.dataList, { title: domSelector.inputForm.value }]
        state.dataList = newList
        // console.log(domSelector.inputForm.value)
    })*/

    /*const setTimer = () =>{
            return setInterval(() => {
                if(timer > 0){
                    timer--
                }
                else{
                    clearInterval(x)
                }
            },1000)
        }*/

    //const objs = [{id:1,status:0},{id:2,status:0},{id:3,status:0},{id:4,status:0},{id:5,status:0},{id:6,status:0},{id:7,status:0},
       // {id:8,status:0},{id:9,status:0},{id:10,status:0},{id:11,status:0},{id:12,status:0}]

    /*const rand = () => {
            let arr = []
            max = 3
            while(max!=0){
                arr.push(Math.floor(Math.random() * 12) + 1)
                max = max - 1
            }
            console.log(arr)
    }*/


    