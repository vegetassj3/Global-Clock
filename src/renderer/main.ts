class DigitalClock{

    element: Element;
    zone:string;
    constructor(element:Element,zone:string){
        this.element=element;
        this.zone=zone;
    }

    getTimeParts():{time:string }{
        const now=new Date();
        return { 
            time:now.toLocaleString("en-US",{timeZone:this.zone,hour12:true,hour:"2-digit",minute:"2-digit"}),
        }
    }

    start(){
        this.update();

        setInterval(()=>{
            this.update();
        },500)
    }

    update(){
        const parts=this.getTimeParts();
        const timeFormatted=parts.time;
        const clockTime=this.element.querySelector('.clock-time');
        if(clockTime!=null){
            clockTime.textContent=timeFormatted;
        }
        
    }
}

const clockElement=document.querySelector(".clock");
if(clockElement!=null){
    const clockObject=new DigitalClock(clockElement,'Asia/Kolkata');
    clockObject.start();
    
}

const clockElementBe=document.querySelector(".clockBe");
if(clockElementBe!=null){
    const clockObject=new DigitalClock(clockElementBe,"Canada/Eastern");
    clockObject.start();
    
}
