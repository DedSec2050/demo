"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";
import { db } from "@/app/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "./ui/button";

async function fetchDataFromFirestore() {
  const querySnapshot = await getDocs(collection(db, "schedule"));
  // console.log(querySnapshot);
  const data = [];
  querySnapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });
  // console.log(data);
  return data;
}

const Page5 = () => {
  const [schData, setschData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const data = await fetchDataFromFirestore();
      // console.log(data[0]);
      setschData(data[0].scheduleData);
    }
    // console.log(testiData);
    fetchData();
  }, []);
  const scheduleDataList = schData;
  // console.log(scheduleDataList);

  return (
    <section>
      <div className="mx-auto mt-8 px-[30px] sm:px-[50px] xl:px-[10vw]">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-clamptitle xxl:text-[2.5vw]">
            <span className="bg-gradient-to-r from-grn via-accent to-grn bg-clip-text text-clampheader font-[700] text-transparent xxl:text-[2.5vw]">
              <strong>Our Training Schedule</strong>
            </span>
          </h2>
          <div className="mt-8 w-full overflow-x-scroll px-[7vw] sm:w-[600px] md:w-[80vw] xl:px-0 xxl:w-[90vw]">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-center text-accent md:text-[0.9vw] xxl:py-[40px] xxl:text-[1.3vw]">
                    Batch No
                  </TableHead>
                  <TableHead className="text-center text-accent md:text-[0.9vw] xxl:py-[40px] xxl:text-[1.3vw]">
                    Start Date
                  </TableHead>
                  <TableHead className="text-center text-accent md:text-[0.9vw] xxl:py-[40px] xxl:text-[1.3vw]">
                    Number of Hours
                  </TableHead>
                  <TableHead className="text-center text-accent md:text-[0.9vw] xxl:py-[40px] xxl:text-[1.3vw]">
                    Batch Type
                  </TableHead>
                  <TableHead className="text-center text-accent md:text-[0.9vw] xxl:py-[40px] xxl:text-[1.3vw]">
                    Training Mode
                  </TableHead>
                  <TableHead className="text-center text-accent md:text-[0.9vw] xxl:py-[40px] xxl:text-[1.3vw]">
                    Training Schedule
                  </TableHead>
                  <TableHead className="text-center text-accent md:text-[0.9vw] xxl:py-[40px] xxl:text-[1.3vw]">
                    Batch Status
                  </TableHead>
                  <TableHead className="text-center text-accent md:text-[0.9vw] xxl:py-[40px] xxl:text-[1.3vw]">
                    Enrolment Status
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {scheduleDataList.map((data, index) => {
                  return (
                    <TableRow key={index}>
                      <TableCell className="border-2 border-accent text-center font-medium md:text-[0.9vw] xxl:py-[40px] xxl:text-[1.3vw]">
                        {data.courseName}
                      </TableCell>
                      <TableCell className="border-2 border-accent text-center font-medium md:text-[0.9vw] xxl:py-[40px] xxl:text-[1.3vw]">
                        {data.startDate}
                      </TableCell>
                      <TableCell className="border-2 border-accent text-center font-medium md:text-[0.9vw] xxl:py-[40px] xxl:text-[1.3vw]">
                        {data.numberOfHours}
                      </TableCell>
                      <TableCell className="border-2 border-accent text-center font-medium md:text-[0.9vw] xxl:py-[40px] xxl:text-[1.3vw]">
                        {data.batchType}
                      </TableCell>
                      <TableCell className="border-2 border-accent text-center font-medium md:text-[0.9vw] xxl:py-[40px] xxl:text-[1.3vw]">
                        {data.trainingMode}
                      </TableCell>
                      <TableCell className="border-2 border-accent text-center font-medium md:text-[0.9vw] xxl:py-[40px] xxl:text-[1.3vw]">
                        {data.trainingSchedule}
                      </TableCell>
                      <TableCell
                        className={`${data.batchStatus == "Open" && "text-green-500"} ${data.batchStatus == "Closed" && "text-red-600"} border-2 border-accent text-center font-medium md:text-[0.9vw] xxl:py-[40px] xxl:text-[1.3vw]`}
                      >
                        {data.batchStatus}
                      </TableCell>
                      <TableCell
                        className={
                          "border-2 border-accent text-center font-medium md:text-[0.9vw] xxl:py-[40px] xxl:text-[1.3vw]"
                        }
                      >
                        <Link
                          className={`${data.batchStatus == "Closed" && "pointer-events-none"}`}
                          href={
                            "https://cybernous.newzenler.com/courses/cissp-success-toolkit/buy"
                          }
                        >
                          <Button
                            className={
                              "rounded-[30px] transition-all duration-500" +
                              `${data.batchStatus == "Closed" && " bg-gray-300 text-gray-500"}`
                            }
                            variant="outline"
                          >
                            {data.enrollmentStatus}
                          </Button>
                        </Link>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page5;
