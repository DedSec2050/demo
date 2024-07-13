"use client";
import Select from "react-select";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { X } from "lucide-react";

const data = [
  {
    domain: "Domain 1",
    code: "d1",
    topics: [
      {
        name: "topic 1 domain 1",
        code: "t1d1",
        url: "topic1 d1",
      },
      {
        name: "topic 2 domain 1",
        code: "t2d1",
        url: "topic2 d1",
      },
    ],
  },
  {
    domain: "Domain 2",
    code: "d2",
    topics: [
      {
        name: "topic 1 domain 2",
        code: "t1d2",
        url: "topic1d2",
      },
      {
        name: "topic 2 domain 2",
        code: "t2d2",
        url: "topic2d2",
      },
    ],
  },
];

const MultiSteps = () => {
  const [domain, setDomain] = useState(null);
  const [topic, setTopic] = useState(null);
  const [topicList, setTopicList] = useState([]);
  const [link, setLink] = useState("");

  const handleDomainChange = (obj) => {
    setDomain(obj);
    setTopicList(obj.topics);
    setTopic(null);
  };
  const handleTopicChange = (obj) => {
    setTopic(obj);
  };

  useEffect(() => {
    if (domain && topic) {
      setLink(`https://www.${topic.url}`);
    }
  }, [domain, topic]);
  return (
    <div className="mb-20 w-[250px] text-white md:w-[350px]">
      <b>Domain</b>
      <Select
        className="text-black"
        placeholder="Select Domain"
        value={domain}
        options={data}
        onChange={handleDomainChange}
        getOptionLabel={(x) => x.domain}
        getOptionValue={(x) => x.code}
      ></Select>
      <br />
      <b>Topic</b>
      <Select
        className="text-black"
        placeholder="Select Topic"
        value={topic}
        options={topicList}
        onChange={handleTopicChange}
        getOptionLabel={(x) => x.name}
        getOptionValue={(x) => x.code}
      ></Select>
      {console.log(domain && topic ? topic.code : "-")}
      <Button
        variant="outline"
        href={domain && topic ? topic.code : "-"}
        className="mt-8 rounded-md border-accent text-white"
      >
        Go
      </Button>
    </div>
  );
};

export default MultiSteps;
