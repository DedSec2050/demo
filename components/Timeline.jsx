"use client";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { DiAngularSimple } from "react-icons/di";

import { eventsData } from "./data/Page6";

console.log(eventsData);
const Timeline = () => {
  return (
    <div>
      <VerticalTimeline animate={true}>
        {eventsData.map((data, index) => {
          return (
            <VerticalTimelineElement
              className="vertical-timeline-element--work min-w-[70%] lg:w-full"
              contentStyle={{ background: "#0E37A3", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  #0E37A3",
              }}
              iconStyle={{
                background: "#0E37A3",
                color: "#fff",
              }}
              icon={DiAngularSimple}
              visible={true}
              key={index}
            >
              <h3 className="vertical-timeline-element-title text-clamptextmd font-semibold text-accent">
                {data.heading}
              </h3>

              <p>{data.text}</p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
