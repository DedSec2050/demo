"use client";
import Select from "react-select";
import React, { useEffect, useState } from "react";

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
    <div style={{ width: 400, marginBottom: 20 }} className="text-white">
      <b>Domain</b>
      <Select
        placeholder="Select Domain"
        value={domain}
        options={data}
        onChange={handleDomainChange}
        getOptionLabel={(x) => x.domain}
        getOptionValue={(x) => x.code}
      ></Select>
      <br />
      <Select
        placeholder="Select Topic"
        value={topic}
        options={topicList}
        onChange={handleTopicChange}
        getOptionLabel={(x) => x.name}
        getOptionValue={(X) => X.code}
      ></Select>
    </div>
  );
};

export default MultiSteps;
