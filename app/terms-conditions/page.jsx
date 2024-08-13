import React from "react";
import gify from "@/public/assets/ComingSoon/to-the-moon.gif";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import BackWrapper from "@/components/BackWrapper";
import Floater from "@/components/Floater";
import Banner from "@/components/Banner";
const page = () => {
  return (
    <section>
      <Banner />
      <Floater />
      <BackWrapper />
      <Header />
      <div className="flex flex-col items-center justify-center pt-[30px]">
        <div className="px-[30px] sm:px-[50px] xl:px-[15vw] [&>div>h2]:py-2 [&>div>h2]:text-[1.7rem] [&>div>h2]:font-semibold [&>div>h2]:text-accent [&>div>p>a:hover]:text-accent-hover [&>div>p>a]:text-accent [&>div>p]:text-[1.2rem] [&>div>p]:text-slate-300 [&>div>ul>li]:text-slate-300">
          <div>
            <h1 className="text-center text-clampheader font-[700] text-accent xxl:text-[2.5vw]">
              Terms and Conditions
            </h1>
          </div>
          <div>
            <h2>1. Terms of Agreement</h2>
            <p>
              By accessing this website hosted in Zenler.com, you are agreeing
              to be bound by these web site Terms and Conditions, all applicable
              laws and regulations, and agree that you are responsible for
              compliance with any applicable local laws. The materials contained
              in this web site are protected by applicable copyright and trade
              mark law.<br></br>
              These Terms of Use form a legally binding agreement between you,
              whether personally or on behalf of an entity ("you"), and
              Cybernous Infosec Consulting ("Company," "we," "us," or "our"),
              regarding your access to and use of the cybernousinfosec.com
              website, as well as any related media forms, channels, mobile
              websites, or mobile applications (collectively, the "Site"). We
              are registered in India with our registered office located at
              #167, 6th Main Vinayaka Nagar, Yelahanka, Bangalore 560063. By
              accessing the Site, you confirm that you have read, understood,
              and agreed to comply with all these Terms of Use. IF YOU DO NOT
              AGREE TO ALL THESE TERMS OF USE, YOU ARE EXPRESSLY PROHIBITED FROM
              USING THE SITE AND MUST IMMEDIATELY DISCONTINUE USE.<br></br>
              Additional terms and conditions or documents that may be added to
              the Site periodically are incorporated by reference. We retain the
              right to modify or update these Terms of Use at our discretion. We
              will notify you of any changes by updating the "Last updated" date
              of these Terms of Use, and you forfeit any right to receive
              specific notice of each modification. Please review the applicable
              Terms each time you use our Site to stay informed of which Terms
              apply. By continuing to use the Site after any revised Terms of
              Use are posted, you acknowledge and accept those changes.<br></br>
              The Site is not tailored to comply with industry-specific
              regulations , so if your interactions would be subjected to such
              laws, you may not use this Site. You may not use the Site in a way
              that would violate any of global or local regulation. The Site is
              intended for users who are at least 18 years old. Persons under
              the age of 18 are not permitted to use or register for the Site.
              <br></br>
            </p>
          </div>
          <div>
            <h2>2. Intellectual Property Rights</h2>
            <p>
              Permission is granted to use the materials on Companies web site
              for personal, non-commercial transitory viewing only. This is the
              grant of a license, not a transfer of title, and under this
              license you may not:
            </p>
            <p>
              <span className="text-white">a)</span> Unless stated otherwise,
              the Site is our exclusive property, and all source code,
              databases, functionalities, software, website designs, audio,
              video, text, photographs, and graphics on the Site (collectively
              referred to as the "Content"), along with the trademarks, service
              marks, and logos featured on the Site (the "Marks"), are either
              owned or controlled by us or are licensed to us. These elements
              are protected by copyright, trademark laws, and various other
              intellectual property rights and unfair competition laws of the
              United States, as well as international copyright laws and
              conventions. The Content and Marks are available on the Site "AS
              IS" solely for your informational and personal use. Except as
              explicitly stated in these Terms of Use, no part of the Site,
              including any Content or Marks, may be copied, reproduced,
              aggregated, republished, uploaded, posted, publicly displayed,
              encoded, translated, transmitted, distributed, sold, licensed, or
              otherwise exploited for any commercial purpose without our prior
              written consent.
            </p>
            <br />
            <p>
              <span className="text-white">b)</span> If you are eligible to use
              the Site, you are granted a limited license to access and use the
              Site, and to download or print a copy of any part of the Content
              to which you have lawfully gained access, strictly for your
              personal, non-commercial use. We retain all rights not explicitly
              granted to you regarding the Site, the Content, and the Marks.
            </p>
            <br />
            <p>
              <span className="text-white">c)</span> attempt to decompile or
              reverse engineer any software contained on Companies web site.
            </p>
            <br />
            <p>
              <span className="text-white">d)</span> remove any copyright or
              other proprietary notations from the materials.
            </p>
            <br />
            <p>
              <span className="text-white">e)</span> transfer the materials to
              another person or 'mirror' the materials on any other server.
            </p>
            <br />
            <p>
              This license shall automatically terminate if you violate any of
              these restrictions and may be terminated by Company at any time.
              Upon terminating your viewing of these materials or upon the
              termination of this license, you must destroy any
              copied/downloaded materials in your possession whether in
              electronic or printed format.
            </p>
          </div>
          <div>
            <h2>3. Lawful Representation of Registration and Usage</h2>
            <p>
              By accessing and utilizing this Site, you affirm and assure the
              following:
            </p>
            <br></br>
            <p>
              {" "}
              Registration with the Site may be required. You agree to maintain
              the confidentiality of your password and accept responsibility for
              all activities that occur under your account and password. We
              reserve the right, at our sole discretion, to remove, reclaim, or
              change any username you select if we determine that it is
              inappropriate, obscene, or otherwise objectionable. All
              registration information submitted by you shall be true, accurate,
              current, and complete in all respects;
            </p>
            <br />
            <p>
              You shall ensure the accuracy of such information and promptly
              update the registration details as necessary;
            </p>
            <br />
            <p>
              {" "}
              You possess the legal capacity to enter into agreements and you
              consent to adhere to these Terms of Use;
            </p>
            <br />
            <p> You are not a minor under the laws of your jurisdiction;</p>
            <br />
            <p>
              {" "}
              You shall not access the Site via automated or non-human means,
              including but not limited to bots, scripts, or other similar
              methods;
            </p>
            <br />
            <p>
              {" "}
              You shall refrain from using the Site for any unlawful or
              unauthorized purposes;
            </p>
            <br />
            <p>
              {" "}
              Your usage of the Site shall comply with all applicable laws and
              regulations.
            </p>
            <br />
            <p>
              In the event that any information provided by you is found to be
              untrue, inaccurate, not current, or incomplete, we reserve the
              right to suspend or terminate your account and prohibit any
              current or future access to the Site (or any part thereof).
            </p>
          </div>
          <div>
            <h2>4. Prohitbited activities</h2>
            <p>
              You are not permitted to access or use the Site for any purpose
              other than what has been made available by us. The Site must not
              be used for any commercial activities except those expressly
              endorsed or approved by us.<br></br>
              As a user of the Site, you agree to the following conditions:
            </p>
            <p>
              1. Do not systematically retrieve data or other content from the
              Site to create or compile, directly or indirectly, a collection,
              compilation, database, or directory without our written
              permission.
            </p>
            <p>
              2. Do not deceive, defraud, or mislead us or other users,
              especially in attempts to obtain sensitive account information
              such as passwords.
            </p>
            <p>
              3. Do not circumvent, disable, or interfere with security-related
              features of the Site, including those that prevent or restrict the
              use or copying of any content or enforce limitations on the use of
              the Site and its content.
            </p>
            <p>
              4. Do not disparage, tarnish, or harm us or the Site in any
              manner, as per our judgment.
            </p>
            <p>
              5. Do not use information obtained from the Site to harass, abuse,
              or harm another person.
            </p>
            <p>
              6. Do not misuse our support services or submit false reports of
              abuse or misconduct. Do not use the Site in a manner inconsistent
              with any applicable laws or regulations.
            </p>
            <p>
              7. Do not engage in unauthorized framing of or linking to the
              Site.
            </p>
            <p>
              8. Do not upload or transmit (or attempt to upload or transmit)
              viruses, Trojan horses, or other harmful material, including
              excessive use of capital letters and spamming, which interferes
              with any party’s use and enjoyment of the Site or alters the
              functioning of the Site.
            </p>
            <p>
              9. Do not engage in any automated use of the system, such as using
              scripts to send comments or messages, or using data mining,
              robots, or similar data gathering and extraction tools. Do not
              delete copyright or other proprietary rights notices from any
              content.
            </p>
            <p>
              10. Do not attempt to impersonate another user or person or use
              another user’s username.
            </p>
            <p>
              11. Do not upload or transmit (or attempt to upload or transmit)
              any material that acts as a passive or active information
              collection or transmission mechanism, including but not limited to
              clear graphics interchange formats (gifs), 1×1 pixels, web bugs,
              cookies, or similar devices (sometimes referred to as spyware or
              passive collection mechanisms).
            </p>
            <p>
              12. Do not interfere with, disrupt, or create an undue burden on
              the Site or the networks or services connected to the Site.
            </p>
            <p>
              13. Do not harass, annoy, intimidate, or threaten our employees or
              agents providing any part of the Site to you. Do not attempt to
              bypass any measures designed to prevent or restrict access to the
              Site or any portion of the Site.
            </p>
            <p>
              14. Do not copy or adapt the Site’s software, including but not
              limited to Flash, PHP, HTML, JavaScript, or other code.
            </p>
            <p>
              15. Except as permitted by applicable law, do not decipher,
              decompile, disassemble, or reverse engineer any software
              comprising or in any way making up a part of the Site.
            </p>
            <p>
              16. Except as may result from standard search engine or Internet
              browser usage, do not use, launch, develop, or distribute any
              automated system, including but not limited to any spider, robot,
              cheat utility, scraper, or offline reader that accesses the Site,
              or use or launch any unauthorized script or other software.
            </p>
            <p>
              17. Do not use a buying agent or purchasing agent to make
              purchases on the Site.
            </p>
            <p>
              18. Do not make any unauthorized use of the Site, including
              collecting usernames and/or email addresses of users by electronic
              or other means for the purpose of sending unsolicited emails or
              creating user accounts by automated means or under false
              pretenses.
            </p>
            <p>
              19. Do not use the Site as part of any effort to compete with us
              or otherwise use the Site and its content for any
              revenue-generating or commercial enterprise.
            </p>
            <p>
              20. Do not use the Site to advertise or offer to sell goods and
              services.
            </p>
            <p>21. Do not sell or otherwise transfer your profile.</p>
          </div>
          <div>
            <h2>Disclaimer</h2>
            <p>
              The materials on Companies web site are provided 'as is'. Company
              makes no warranties, expressed or implied, and hereby disclaims
              and negates all other warranties, including without limitation,
              implied warranties or conditions of merchantability, fitness for a
              particular purpose, or non-infringement of intellectual property
              or other violation of rights. Further, Company does not warrant or
              make any representations concerning the accuracy, likely results,
              or reliability of the use of the materials on its Internet web
              site or otherwise relating to such materials or on any sites
              linked to this site.
            </p>
          </div>
          <div>
            <h2>Limitations</h2>
            <p>
              In no event shall Company or its suppliers be liable for any
              damages (including, without limitation, damages for loss of data
              or profit, or due to business interruption,) arising out of the
              use or inability to use the materials on Companies Internet site,
              even if Company or a Company authorized representative has been
              notified orally or in writing of the possibility of such damage.
              Because some jurisdictions do not allow limitations on implied
              warranties, or limitations of liability for consequential or
              incidental damages, these limitations may not apply to you.
            </p>
            <p>
              Cybernous holds the Intellectual property rights for all the
              content hosted on Cybernous portal. Any misuse, subletting,
              sharing of paid material with others is strictly prohibited and
              Cybernous has the rights to terminate the subscription immediately
              in such cases Cybernous has the rights to change the program
              duration and schedule of live classes Cybernous reserves the
              rights to terminate a subscription in case of breach of terms and
              conditions All Paid members are eligible for free access to
              consecutive batch, however the membership is not transferable and
              only applicable for the subsequent batch. Existing candidates
              wishing to join the training batch apart of the subsequent batch
              must pay an amount of 10,000 INR to enroll in the next batch The
              payment for the services are not allowed in installments A well
              defined refund policy is available on the website under Refund
              Policy link for customer reference. The subscription to the course
              material is not transferrable
            </p>
          </div>
          <div>
            <h2>Terms of Joining a Cohort Batch</h2>
            <p>
              Cybernous Infosec consulting host combination of self-learning and
              Cohot-based courses. The access to the portal is provided for a
              period of 1 year from the date of successful enrolment and
              registration. Cybernous Infosec Consulting has all the rights to
              make changes to the program and the candidates must adhere to the
              below conditions.
            </p>
            <p>
              1. <strong>Attendance for Cohort Sessions:</strong> Upon joining
              to the cohort batches, the candidates are supposed to attain at
              least 80% attendance to the live classes
            </p>
            <p>
              2. <strong>Session Recordings:</strong> The live sessions are
              intended to be interactive. The provision of recordings from these
              sessions is not guaranteed and may be withheld at our discretion,
              as the course already contains sufficient content. Access to these
              recordings is considered a privilege and shall not be construed as
              a right. Candidates cannot claim entitlement to the recordings.
            </p>
            <p>
              3. <strong>Enrolment for the Next Batch:</strong> Cybernous
              infosec consulting makes reasonable effort to help candidates pass
              the Certification Exam. From time to time, we may allow candidates
              to rejoin our Next Batches for Free, in case they miss out the
              regular schedule of the cohort classes due to the health issues
              (ONLY). The grant of access for the next batch is purely based on
              the below criteria.
            </p>
            <p>
              4. <strong>Minimum attendance criteria:</strong> Candidate must
              have completed 40% of the Live classes (6 Classes) to be eligible
              for requesting for a rejoin in the next batch.
            </p>
            <p>
              5. <span>Request process:</span> Candidate must formally request
              to rejoin the next batch, before completion of the batch in which
              he/she has enrolled. The formal request can be sent to
              contact@cybernous.com.
            </p>
            <p>
              6. <strong>Not a privilege:</strong> The permission to join the
              next batch is a privilege and must not be treated as a right by
              the candidate. Cybernous Directors has the final authority to
              approve or disapprove the request for joining the next batch.
              During the validation, Cybernous staff is authorized to seek a
              medical proof from the candidate.
            </p>
            <br />
            <p>
              <strong>Re-enrolment Fee for old candidates:</strong> If the
              candidate does not fulfil the above criteria, they are termed as
              "old student". Any old candidate who wishes to re-enroll in the
              program can do so by paying a minimum Re-joining Fee. The
              rejoining fee is currently 10,000 INR or 120 USD (excluding
              taxes). This fee is subjected to be periodically reviewed and
              updated by Cybernous. Once re-enrolment is done, the candidate
              will have access to all the eligible services which are provided
              to new joiner. The re-enrollment access will remain valid only for
              6 months from the date of re-enrolment.{" "}
            </p>
          </div>
          <div>
            <h2>Revisions and Errata</h2>
            <p>
              The materials appearing on Companies web site could include
              technical, typographical, or photographic errors. Company does not
              warrant that any of the materials on its web site are accurate,
              complete, or current. Company may make changes to the materials
              contained on its web site at any time without notice. Company does
              not, however, make any commitment to update the materials.
            </p>
          </div>
          <div>
            <h2>Links</h2>
            <p>
              Company has not reviewed all of the sites linked to its Internet
              web site and is not responsible for the contents of any such
              linked site. The inclusion of any link does not imply endorsement
              by Company of the site. Use of any such linked web site is at the
              user's own risk.
            </p>
          </div>
          <div>
            <h2>Site Terms of Use Modifications</h2>
            <p>
              Company may revise these terms of use for its web site at any time
              without notice. By using this web site you are agreeing to be
              bound by the then current version of these Terms and Conditions of
              Use.
            </p>
          </div>
          <div>
            <h2>Governing Law</h2>
            <p>
              Any claim relating to Companies web site shall be governed by the
              laws of the State of New York without regard to its conflict of
              law provisions.
              <br /> As an Instructor, You represent, warrant, and covenant
              that: No Submitted Content shall infringe or misappropriate any
              intellectual property right of a third party. But, if instructor
              use HEVC compression, it's the instructor's responsibility to pay
              the royalties to the MPEG-LA, the owner of HEVC patents as
              appropriate.
            </p>
          </div>
          <div>
            <h2>Privacy Policy</h2>
            <p>
              Read more on Privacy policy{" "}
              <Link href="/privacypolicy">here.</Link>
            </p>
          </div>
          <div>
            <h2>Cookie Policy</h2>
            <p>
              Read more on Cookie policy <Link href="/cookiepolicy">here.</Link>
            </p>
            <p>
              Copyright @ Cybernous Infosec Consulting CISSP Success Toolkit.
              All rights reserved
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default page;
