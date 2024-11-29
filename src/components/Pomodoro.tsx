import React from "react";
import { Progress, ButtonGroup, Button, Heading } from 'rsuite';
import { Panel } from 'rsuite';
import { DatePicker } from 'rsuite';
import { FaClock } from 'react-icons/fa';
import { FaPlay } from "react-icons/fa";
import { FaStop } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { useEffect } from "react";

function Pomodoro() {

    const [active, setActive] = React.useState(false);
    const [pause, setPause] = React.useState(false);
    const [timeConst, setTimeConst] = React.useState(0);
    let [time, setTime] = React.useState(0);

    useEffect(() => {
        
        // Exit early if countdown is finished
        if (time <= 0) {
            return;
        };
        
        // Set up the timer
        const timer = setInterval(() => {
            
            setTime((prevSeconds:number) => prevSeconds - 1);
            
            if (pause === true) {

                setTime(time+0.0000000000001);
                
            };
            
        }, 1000);
        
        // Clean up the timer
        return () => clearInterval(timer);

    }, [time]);

    const startTimer = (inputTime:Date) => {
        setActive(true);
        setTimeConst(inputTime.getMinutes()*60);
        setTime(inputTime.getMinutes()*60);
    };

    const toggleTimer = () => {
        setPause(!pause);
    };

    const stopTimer = () => {
        setActive(false);
        setTimeConst(0);
        setTime(0);
        setPause(false);
    };
  
    const status = 100-((time/timeConst)*100) >= 100 ? 'success' : 'active';
    const color = 100-((time/timeConst)*100) >= 100 ? '#52c41a' : '#93BFCF';

    return (
        <Panel shaded className="flex items-center justify-center mt-5 text-center w-fit">

            <h1 className="text-4xl">Pomodoro</h1>

            <div className="w-64 h-64 m-5 text-6xl">
                <Progress.Circle showInfo={( status === 'success' ? true : false )} percent={100-((time/timeConst)*100)} strokeColor={color} status={status}/>
                <Heading hidden={status === 'success' ? true : false} className="mt-[-9.85rem]" level={1}>{time >= 600 ? '' : '0'}{Math.trunc((time/60))}:{time%60 >= 10 ? '' : '0'}{Math.trunc(time%60)}</Heading>
            </div>


            <DatePicker hidden={active} format="mm" caretAs={FaClock} onOk={(input) => startTimer(input)} appearance="subtle" />

            <ButtonGroup hidden={!active}>
                <Button onClick={toggleTimer}>
                    <span hidden={!pause}>
                        <FaPlay />    
                    </span>
                    <span hidden={pause}>
                        <FaPause />
                    </span>
                </Button>
                <Button onClick={stopTimer}>
                    <FaStop />
                </Button>
            </ButtonGroup>
        </Panel>
    );

};

export default Pomodoro;