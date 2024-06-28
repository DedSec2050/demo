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

const TableData = [
  {
    courseName: "Course 1",
    startDate: "20 July 2024",
    numberOfHours: "160(Cohort)",
    batchType: "Weekend",
    trainingMode: "Online",
    trainingSchedule: "Sat 8:30 AM - 12:30 PM IST",
    batchStatus: "Closed",
    enrollmentStatus: "Enroll Now",
  },
  {
    courseName: "Course 1",
    startDate: "20 July 2024",
    numberOfHours: "160(Cohort)",
    batchType: "Weekend",
    trainingMode: "Offline",
    trainingSchedule: "Sat 8:30 AM - 12:30 PM IST",
    batchStatus: "Open",
    enrollmentStatus: "Enroll Now",
  },
  {
    courseName: "Course 1",
    startDate: "20 July 2024",
    numberOfHours: "160(Cohort)",
    batchType: "Weekend",
    trainingMode: "Online",
    trainingSchedule: "Sat 8:30 AM - 12:30 PM IST",
    batchStatus: "Closed",
    enrollmentStatus: "Enroll Now",
  },
];

const Page5 = () => {
  return (
    <section className="mx-auto mt-8">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-clamptitle xxl:text-[2.5vw]">
          <span className="bg-gradient-to-r from-grn via-accent to-grn bg-clip-text text-transparent">
            <strong>Our Training Schedule</strong>
          </span>
        </h1>
        <div className="mt-8 w-[300px] overflow-x-scroll sm:w-[600px] md:w-[80vw] xxl:w-[90vw]">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-center text-accent md:text-[0.9vw] xxl:py-[40px] xxl:text-[1.3vw]">
                  Course Name
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
              {TableData.map((data, index) => {
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
                    <TableCell className="border-2 border-accent text-center font-medium md:text-[0.9vw] xxl:py-[40px] xxl:text-[1.3vw]">
                      {data.enrollmentStatus}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
};

export default Page5;
