import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";

import React from "react";

export default function cookiepolicy() {
  return (
    <section>
      <Banner />
      <Header />
      <div className="flex flex-col items-center justify-center pt-[30px]">
        <div className="px-[30px] sm:px-[50px] xl:px-[15vw] [&>div>h1]:py-2 [&>div>h1]:text-[1.7rem] [&>div>h1]:font-semibold [&>div>h1]:text-accent [&>div>p>a:hover]:text-accent-hover [&>div>p>a]:text-accent [&>div>p]:text-[1.2rem] [&>div>p]:text-slate-300 [&>div>ul>li]:text-slate-300">
          <div>
            <h2 className="text-center text-[1.9rem] font-bold text-accent">
              Cookie Policy
            </h2>
            <p>
              In this website, we believe in being transparent about how we
              collect and use data. This policy provides information about how
              and when we use cookies for these purposes. Capitalized terms used
              in this policy but not defined have the meaning set forth in our
              <Link href="/privacypolicy"> Privacy Policy</Link>, which also
              includes additional details about the collection and use of
              information in this website.
            </p>
          </div>
          <div>
            <h1>What is a cookie?</h1>
            <p>
              Cookies are small text files sent by us to your computer or mobile
              device. They are unique to your account or your browser. They
              records how you move your way around a website so that, when you
              revisit that website, it can present tailored options based on the
              information stored about your last visit. Cookies can also be used
              to analyse traffic and for advertising and marketing purposes.
              Session-based cookies last only while your browser is open and are
              automatically deleted when you close your browser. Persistent
              cookies last until you or your browser delete them or until they
              expire. Cookies are used by nearly all websites and do not harm
              your system. To find out more about cookies, visit{" "}
              <Link href="https://www.allaboutcookies.org/"> this site</Link>.
            </p>
          </div>
          <div>
            <h1>Does this website use cookies?</h1>
            <p>
              Yes. This website uses cookies and similar technologies like
              single-pixel gifs and web beacons. We use both session-based and
              persistent cookies. This website sets and accesses our own cookies
              on the domains operated by this website and its corporate
              affiliates (collectively, the "Sites"). In addition, we use third
              party cookies, like Google Analytics.
            </p>
          </div>
          <div>
            <h1>How is this website using cookies?</h1>
            <p>
              We use cookies to track your use of our website. This enables us
              to understand how you use the site and track any patterns with
              regards how you are using our website. Some cookies are associated
              with your account and personal information in order to remember
              that you are logged in and which workspaces you are logged into.
              Other cookies are not tied to your account but are unique and
              allow us to carry out analytics and customization, among other
              similar things. Cookies can be used to recognize you when you
              visit a Site or use our Services, remember your preferences, and
              give you a personalized experience that's consistent with your
              settings. This helps us to develop and improve our website as well
              as products and / or services in response to what you might need
              or want. Cookies also make your interactions faster and more
              secure.
            </p>
            <p>
              Categories of use: <br />
              <p className="pl-5">
                <strong>Session cookies </strong>: these are only stored on your
                computer during your web session and are automatically deleted
                when you close your browser - they usually store an anonymous
                session ID allowing you to browse a website without having to
                log in to each page but they do not collect any personal data
                from your computer; or
              </p>
              <p className="pl-5">
                <strong>Persistent cookies </strong>: a persistent cookie is
                stored as a file on your computer and it remains there when you
                close your web browser. The cookie can be read by the website
                that created it when you visit that website again. We may use
                persistent cookies for this website Analytics , Google
                Analytics, Mixpanel Analytics or Segment.io Analytics.
              </p>
              <p>
                Cookies can also be categorised as follows: <br />
                <p className="pl-5">
                  <strong>Strictly necessary cookies </strong>: These cookies
                  are essential to enable you to use the website effectively,
                  such as when buying a product and / or service, and therefore
                  cannot be turned off. Without these cookies, the services
                  available to you on our website cannot be provided. These
                  cookies do not gather information about you that could be used
                  for marketing or remembering where you have been on the
                  internet.
                </p>
                <p className="pl-5">
                  <strong>Performance & Analytical cookies </strong>: These
                  cookies enable us to monitor and improve the performance of
                  our website. For example, they allow us to count visits,
                  identify traffic sources and see which parts of the site are
                  most popular.
                </p>
                <p className="pl-5">
                  <strong>Functionality cookies </strong>: These cookies allow
                  our website to remember choices you make and provide enhanced
                  features. For instance, we may be able to provide you with
                  news or updates relevant to the services you use. They may
                  also be used to provide services you have requested such as
                  viewing a video or commenting on a blog. The information these
                  cookies collect is usually anonymised.
                </p>
              </p>
            </p>
          </div>
          <div>
            <h1>
              What can you do if you don't want cookies to be set or want them
              to be removed?
            </h1>
            <p>
              Some people prefer not to allow cookies, which is why most
              browsers give you the ability to manage cookies to suit you. In
              some browsers you can set up rules to manage cookies on a
              site-by-site basis, giving you more fine-grained control over your
              privacy. What this means is that you can disallow cookies from all
              sites except those that you trust.
            </p>
            <p>
              Browser manufacturers provide help pages relating to cookie
              management in their products. Please see below for more
              information.
            </p>
            <ul className="flex flex-col py-4 pl-5 [&>li>a:hover]:text-accent-hover [&>li>a]:text-accent">
              <li>
                <Link href="https://support.google.com/chrome/answer/95647?hl=en-GB">
                  Google Chrome
                </Link>
              </li>
              <li>
                <Link href="https://support.microsoft.com/en-us/topic/description-of-cookies-ad01aa7e-66c9-8ab2-7898-6652c100999d">
                  Internet Explorer
                </Link>
              </li>
              <li>
                <Link href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer">
                  Mozilla Firefox
                </Link>
              </li>
              <li>
                <Link href="https://support.apple.com/kb/PH5042?locale=en_US">
                  Safari (Desktop)
                </Link>
              </li>
              <li>
                <Link href="https://support.apple.com/en-us/105082">
                  Safari (Mobile)
                </Link>
              </li>
              <li>
                <Link href="https://support.google.com/nexus/answer/54068?visit_id=638559426890885098-360243776&hl=en&rd=1">
                  Android Browser
                </Link>
              </li>
              <li>
                <Link href="https://www.opera.com/help">Opera</Link>
              </li>
              <li>
                <Link href="www.opera.com/help/mobile/android#privacy">
                  Opera Mobile
                </Link>
              </li>
            </ul>
            if you limit the ability of websites and applications to set
            cookies, you may worsen your overall user experience and/or lose the
            ability to access the services, since it will no longer be
            personalized to you. It may also stop you from saving customized
            settings, like login information.
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
