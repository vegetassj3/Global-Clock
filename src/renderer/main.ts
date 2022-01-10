class DigitalClock{

    element: Element;

    constructor(element:Element){
        this.element=element;
        console.log(this.element);
    }

    getTimeParts():{hour:number ,minute:number ,seconds:number ,isAm:boolean}{
        const now=new Date();

        return { 
            hour: now.getHours() % 12|| 12 ,
            minute : now.getMinutes(), 
            seconds : now.getSeconds(), 
            isAm: now.getHours() < 12
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
        const minutesFormatted=parts.minute.toString().padStart(2,"0");
        const secondsFormatted=parts.seconds.toString().padStart(2,"0");
        const timeFormatted=`${parts.hour}:${minutesFormatted}:${secondsFormatted}`;
        const amPm = parts.isAm? "AM" : "PM";

        const clockTime=this.element.querySelector('.clock-time');
        if(clockTime!=null){
            clockTime.textContent=timeFormatted;
        }
        const clockAmPm=this.element.querySelector('.clock-ampm');
        if(clockAmPm!=null){
            clockAmPm.textContent=amPm;
        }
    }
}

const clockElement=document.querySelector(".clock");
if(clockElement!=null){
    const clockObject=new DigitalClock(clockElement);
    clockObject.start();
    
}
