let images = document.querySelectorAll(".img-items");
let cpuImages = document.querySelectorAll(".img-cpu-choosed");
let imgContainer = document.querySelector(".img-container");
let userPoint = document.querySelector("#user-point") ;
let cpuPoint = document.querySelector("#cpu-point");
let userPointCounter = 0 , cpuPointCounter = 0 ;
let startButton = document.querySelector("#start-button") ;
let resetButton = document.querySelector("#reset-button") ;
let refreshButton = document.querySelector("#refresh-button");
let headerContent = document.querySelector(".items-box > h1");
let isPlaying = false ;
startButton.addEventListener('click',()=>
{
    isPlaying = true ;
    startButton.classList.add("hidden") ;
    resetButton.classList.remove("hidden") ;
    refreshButton.classList.remove("hidden") ;
})
resetButton.addEventListener('click', ()=>
{
    isPlaying = false ;
    startButton.classList.remove("hidden") ;
    resetButton.classList.add("hidden") ;
    userPoint.textContent = "0" ;
    cpuPoint.textContent = "0" ;
    headerContent.textContent ="Choose your waepen" ;
    userPointCounter = 0 , cpuPointCounter = 0 ;
    for(let i = 0 ; i <= 2 ;i++)
    {
        images[i].removeAttribute("hidden");
        cpuImages[i].setAttribute("hidden","");
    }   
    imgContainer.classList.remove('changingImgContainerStyle');
    for(let i = 0 ; i < 2 ;i++)
    {
        document.querySelectorAll(".msg")[i].classList.add("hidden") ;
    }
    refreshButton.classList.add("hidden") ;
}
)
for(let i = 0 ; i <= images.length - 1; i++)
{
    images[i].addEventListener('click', ()=>
    {
        if(isPlaying == true)
        {
        selecthidden(i);
        imgContainer.classList.add('changingImgContainerStyle');
        cpuChoose = Math.floor(Math.random() * (2 - 0 + 1)) + 0 ;
        cpuImages[cpuChoose].removeAttribute("hidden");
        selectweapen(i) ;
        gamelogic(i,cpuChoose) ;
        showingresult();
        isPlaying = false ;
        }
    })
}

function selectweapen(i)
{
    if(i==0)
    {
        headerContent.textContent = "you choosed Rock" ;
    }
    if(i==1)
    {
        headerContent.textContent = "you choosed Paper" ;
    }
    if(i==2)
    {
        headerContent.textContent = "you choosed Scissors" ;
    }
}
function refresh()
{
    console.log("a");
    for(let i = 0 ; i <= 2 ;i++)
    {
        images[i].removeAttribute("hidden");
        cpuImages[i].setAttribute("hidden","");
    }   
    imgContainer.classList.remove('changingImgContainerStyle');
    headerContent.textContent = "Choose your waepen"
    isPlaying = true ;
}

refreshButton.addEventListener('click',refresh);
document.addEventListener('keydown',(e)=>
    {
        if(e.key=='r')
        {
            refresh();
        }
    });

function selecthidden(i)
{
    for(let j =0 ; j <= images.length - 1; j++)
    {
        if(i != j)
        {
            images[j].setAttribute("hidden" , "");
        }
    }
}

function gamelogic(user , cpu)
{
    if(user != cpu)
    {
        if(user==0)
        {
            if(cpu==1)
            {
                cpuPointCounter++;
            }
            else
            {
                userPointCounter++;
            }
        }
        if(user==1)
        {
            if(cpu==0)
            {
                userPointCounter++;
            }
            else
            {
                cpuPointCounter++;
            }
        }
        if(user==2)
        {
            if(cpu==0)
            {
                cpuPointCounter++;
            }
            else
            {
                userPointCounter++;
            }
        }   

        if(userPointCounter >= 3)
        {
            document.querySelector("#user-won-msg").classList.remove("hidden") ;
            isPlaying = false ;
            refreshButton.classList.add("hidden") ;
        } 
        else if(cpuPointCounter >= 3)
        {
            document.querySelector("#cpu-won-msg").classList.remove("hidden") ;
            isPlaying = false ;
            refreshButton.classList.add("hidden") ;

        }        
    }
}

function showingresult()
{
    userPoint.textContent = userPointCounter ;
    cpuPoint.textContent = cpuPointCounter ;
}
