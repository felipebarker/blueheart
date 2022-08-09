import React, { Component } from "react";
import { Transition } from "@headlessui/react";
// import moment from 'moment';
import "./Timer.module.css";

class CountDown extends Component {
  constructor(props) {
    super(props);
    this.count = this.count.bind(this);
    this.state = {
      days: 0,
      minutes: 0,
      hours: 0,
      seconds: 0,
      time_up: ""
    };
    this.x = null;
    this.deadline = null;
  }
  count() {
    var now = new Date().getTime();
    var t = this.deadline - now;
    var dd = Math.floor(t / (1000 * 60 * 60 * 24));
    var hh = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var mm = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    var ss = Math.floor((t % (1000 * 60)) / 1000);

    var days = dd < 10 ? "0" + dd : dd;
    var hours = hh < 10 ? "0" + hh : hh;
    var minutes = mm < 10 ? "0" + mm : mm;
    var seconds = ss < 10 ? "0" + ss : ss;

    this.setState({ days, minutes, hours, seconds });

    if (t < 0) {
      clearInterval(this.x);
      this.setState({
        days: 0,
        minutes: 0,
        hours: 0,
        seconds: 0,
        time_up: "TIME IS UP"
      });
    }
  }
  componentDidMount() {
    this.deadline = new Date("Oct 08, 2022 21:00:00").getTime();

    this.x = setInterval(this.count, 1000);
  }

  render() {
    const { days, seconds, hours, minutes } = this.state;

    

    return (
      <div id="countdown" className="flex flex-row justify-center items-center">
          <div className="flex flex-col items-center justify-center text-3xl w-full mx-2">
            <p id="day" className="grid grid-flow-row grid-cols-2 items-center justify-center text-center">
              <span className="flex items-center justify-center py-4 px-4 bg-slate-100 rounded-xl mx-1 text-5xl text-gray-900">{String(days)?.slice(0,1)}</span>
              <span className="flex items-center justify-center py-4 px-4 bg-slate-100 rounded-xl mx-1 text-5xl text-gray-900">{String(days)?.slice(1,2)}</span>
            </p>
            <span className="flex items-center justify-center h-full text-sm">Dias</span>
          </div>
        
        <div className="flex justify-center items-center">
          <span className="flex py-4 px-0 rounded-xl mx-1 
          text-5xl text-gray-100 items-center justify-center -translate-y-4">:</span>
        </div>
        
        
          <div className="flex flex-col items-center justify-center text-3xl w-full mx-2">
            <p id="day" className="grid grid-flow-row grid-cols-2 items-center justify-center text-center">
              <span className="flex items-center justify-center py-4 px-4 bg-slate-100 rounded-xl mx-1 text-5xl text-gray-900">{String(hours)?.slice(0,1)}</span>
              <span className="flex items-center justify-center py-4 px-4 bg-slate-100 rounded-xl mx-1 text-5xl text-gray-900">{String(hours)?.slice(1,2)}</span>
            </p>
            <span className="flex items-center justify-center h-full text-sm">Horas</span>
          </div>
        
        <div className="flex justify-center items-center">
          <span className="flex py-4 px-0 rounded-xl mx-1 
          text-5xl text-gray-100 items-center justify-center -translate-y-4">:</span>
        </div>
        
        
          <div className="flex flex-col items-center justify-center text-3xl w-full mx-2">
            <p id="day" className="grid grid-flow-row grid-cols-2 items-center justify-center text-center">
              <span className="flex items-center justify-center py-4 px-4 bg-slate-100 rounded-xl mx-1 text-5xl text-gray-900">{String(minutes)?.slice(0,1)}</span>
              <span className="flex items-center justify-center py-4 px-4 bg-slate-100 rounded-xl mx-1 text-5xl text-gray-900">{String(minutes)?.slice(1,2)}</span>
            </p>
            <span className="flex items-center justify-center h-full text-sm">Minutos</span>
          </div>
        
        <div className="flex justify-center items-center">
          <span className="flex py-4 px-0 rounded-xl mx-1 
          text-5xl text-gray-100 items-center justify-center -translate-y-4">:</span>
        </div>

        
          <div className="flex flex-col items-center justify-center text-3xl w-full mx-2">
            <p id="day" className="grid grid-flow-row grid-cols-2 items-center justify-center text-center">
              <span className="flex items-center justify-center py-4 px-4 bg-slate-100 rounded-xl mx-1 text-5xl text-gray-900">{String(seconds > 0 ? seconds : '00').slice(0,1)}</span>
              <span className="flex items-center justify-center py-4 px-4 bg-slate-100 rounded-xl mx-1 text-5xl text-gray-900">{String(seconds ?? '00').slice(1,2)}</span>
            </p>
            <span className="flex items-center justify-center h-full text-sm">Segundos</span>
          </div>
        
      </div>
    );
  }
}

export default CountDown;
