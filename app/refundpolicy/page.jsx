import BackWrapper from "@/components/BackWrapper";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

export default function refundpolicy() {
  return (
    <section>
      <Banner />
      <BackWrapper />
      <Header />
      <div>
        <div className="flex flex-col items-center justify-center pt-[30px]">
          <div className="px-[30px] sm:px-[50px] xl:px-[15vw] [&>div>h1]:py-2 [&>div>h1]:text-[1.7rem] [&>div>h1]:font-semibold [&>div>h1]:text-accent [&>div>p>a:hover]:text-accent-hover [&>div>p>a]:text-accent [&>div>p]:text-[1.2rem] [&>div>p]:text-slate-300 [&>div>ul>li]:text-slate-300">
            <div>
              <h2 className="text-center text-[1.9rem] font-bold text-accent">
                Refund Policy
                <br />
                <span>Effective from 01 Dec 2020</span>
              </h2>
            </div>
            <div>
              <h1>Course Refund Policy</h1>
              <p>
                We stand behind all of our products and your satisfaction is
                very important to us. All purchases made from CYBERNOUS)
                (including all related website properties, sales over the phone,
                and live event on-site purchases) are covered by the following
                policies.
              </p>
            </div>
            <div>
              <h1>General Policy</h1>
              <p>
                Offers/Coupons cannot be used in conjunction with each other
                unless otherwise stated. Coupons are only valid during the
                advertised promotion period. Prices are subject to change
                without notice. Gift Cards are non-refundable.{" "}
              </p>
              <p>
                See below for specific products that qualify for a refund
                policy.
              </p>
              <p>
                If you have any problems accessing the digital content you have
                purchased please contact our Customer Support Department by
                emailing Pratima@cybernous.com so we can resolve the issue.
              </p>
              <p>
                Digital product purchases do not grant rights to the buyer to
                share, reproduce or resell the product in any way and is
                strictly prohibited unless given written consent from THE
                COMPANY.
              </p>
              <p>
                Payment Plan Policy If a product or service is purchased
                utilizing a monthly payment plan the customer is responsible for
                100% of agreed-upon payments equaling the original purchase
                price of the product.
              </p>
              <p>
                Failed payments may result in formal collection efforts. If any
                payments are not received, the entire purchase is void and the
                payments made up to that point are forfeited to THE COMPANY and
                will not be refunded.
              </p>
              <p>
                Any access to digital products, platforms, or services will be
                removed and the corresponding account will be deleted.
              </p>
            </div>
            <div>
              <h1>Training Access</h1>
              <p>
                You will receive access to THE COMPANY training platform for the
                amount of time that was stated on the product description you
                purchased. If you have any problems accessing the training
                platform and/or the digital content you have purchased, please
                contact our customer support department by emailing
                pratima@cybernous.com so we can resolve the issue.{" "}
              </p>
              <p>
                The purchase of THE COMPANY training product does not grant
                rights to the buyer to share, reproduce or resell the product in
                any way and is strictly prohibited unless given written consent
                from THE COMPANY.
              </p>
              <p>
                Upon a processed refund, all access to digital training
                products, materials, and services will be immediately removed.
                THE COMPANY also reserves the right to refuse any future
                purchases to prevent fraud or refund abuse practices.
              </p>
            </div>
            <div>
              <h1>Specific Product Refund Policies</h1>
              <p>
                Complete CISSP Training Refund Policy Money-Back Guarantee
                Refund Any student that enrolled in the Complete CISSP training
                program after Dec, 2020 is entitled to a refund of the purchase
                price for any reason{" "}
                <strong>within 15 days of their enrolment date</strong>. Please
                note, since the candidate will be shared with study material,
                CCCure Exam Engine and videos,{" "}
                <strong>
                  an amount of Rs. 5000 (Equivalent in USD) will be deducted
                  from the refund amount.
                </strong>
              </p>
              <p>
                To request a refund, simply send an email with the subject line
                that reads “CISSP Refund” to{" "}
                <strong>pratima@cybernous.com</strong> and provide the following
                information:
              </p>
              <ol className="list-decimal pl-5">
                <li>Your Full Name</li>
                <li>Purchase date of the CISSP training</li>
                <li>
                  A statement stating you have deleted and/or destroyed ALL
                  digital products downloaded for the CISSP training
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
