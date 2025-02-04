"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import diabetes from "../../../../public/assets/images/Diabetes-Offer-1.png";
import big from "../../../../public/assets/images/Diabetes-big.png";
import jack from "../../../../public/assets/images/jack.jpg";
import fidelis from "../../../../public/assets/images/fidelis.jpg";
import sarah from "../../../../public/assets/images/sarah.jpg";
import stars from "../../../../public/assets/images/five-stars.svg";
import bottles from "../../../../public/assets/images/Diabetes-bottles.png";
import natural from "../../../../public/assets/images/Diabetes-natural.png";
import one from "../../../../public/assets/images/istockphoto-1.jpg";
import two from "../../../../public/assets/images/istockphoto-2.jpg";
import three from "../../../../public/assets/images/istockphoto-3.jpg";
import rita from "../../../../public/assets/images/rita.jpg";
import anita from "../../../../public/assets/images/anita.jpg";
import ikenna from "../../../../public/assets/images/ikenna.jpg";
import free from "../../../../public/assets/images/free-shipping.png";
import six from "../../../../public/assets/images/Diabetes-one.png";
import best from "../../../../public/assets/images/Diabetes-three.png";
import discount from "../../../../public/assets/images/Diabetes-six.png";
import guarantee from "../../../../public/assets/images/guarantee.png";
import woman from "../../../../public/assets/images/woman.png";
import man from "../../../../public/assets/images/man.png";
import hair from "../../../../public/assets/images/hair.png";
import Link from "next/link";
import styles from "../homepage/styles.module.scss";
import { FaCaretDown } from "react-icons/fa";

export default function LandingPage() {
  const [openId, setOpenId] = useState(null);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const accordionData = [
    {
      id: 1,
      content: "Is Madhuhara NAFDAC Approved?",
      answer:
        "Yes, Madhuhara is NAFDAC approved, meaning it has been thoroughly tested and certified as safe and effective for use.",
    },
    {
      id: 2,
      content: "Can it really reverse diabetes? ",
      answer:
        "Yes. It works by stabilizing blood sugar levels, repairing damaged cells, and supporting your body’s natural healing process.",
    },
    {
      id: 3,
      content: "Does it have any side effects?",
      answer:
        "No. It’s made from 100% natural ingredients with no harmful chemicals or side effects.",
    },
    {
      id: 4,
      content: "How long will it take to see results?",
      answer:
        "Results vary depending on the individual.",
        text:
        "But 75% of our customers notice improvements in their energy levels and sugar control within 2–4 weeks.",
        show:
        "We recommend using it for at least 2–3 months for BEST results",
    },
    {
      id: 5,
      content: "Can I stop taking my diabetes medications after using Madhuhara?",
      answer:
        "Always consult your doctor before stopping any prescribed medications.",
    },
    {
        id: 6,
        content: "I don't have all the money right now, can I order and pay on delivery?",
        answer:
          "Yes. You can order, now and pay on delivery, the day you will be ready",
      },
  ];

  const accordionRef = useRef(null);

  const scrollToAccordion = () => {
    accordionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.hero}>
        <div className={styles.hero_image}>
          <Image
            src={diabetes}
            width={200}
            height={100}
            alt="diabetest 1"
            className={styles.diabetes_img}
          />
        </div>
        <div className={styles.hero_text}>
          <h1>MADHUHARA</h1>
          <p>Effectively Balance Your Sugar Levels</p>
          <Link href={"/"}>
            <div className={styles.link_button}>
              <button>and Reverse Diabetes Naturally</button>
            </div>
          </Link>
        </div>
      </div>
      <section className={styles.hero_two_container}>
        <div className={styles.hero_two_contents}>
            <div className={styles.hero_two_button} onClick={scrollToAccordion}>
              <button>Click Here To Order Now</button>
            </div>
          <div className={styles.hero_two_text}>
            <h3>Can It Really Reverse My Diabetes?</h3>
          </div>
          <div className={styles.big_image}>
            <Image src={big} alt="big" width={200} height={100} className={styles.big_img} />
          </div>
        </div>
        <div className={styles.hero_two_contents_board}>
          <div className={styles.hero_two_contents_board_text}>
            <p>
              Yes, <span>Madhuhara</span> is designed to target the root cause
              of diabetes naturally.
            </p>
            <b>
              It uses <span>Powerful Natural Indian herbs</span> to…
            </b>
            <ul>
              <li>Effectively Reverse Diabetes</li>
              <li>Balance Sugar levels</li>
              <li>Repair damaged cells</li>
              <li>Support body&apos;s natural healing process.</li>
            </ul>
          </div>
        </div>
      </section>
      <div className={styles.customer_saying_conatiner}>
        <div className={styles.customer_saying_contents}>
          <h3>See What Our Customers Are Saying…</h3>
          <div className={styles.whatsapp_images}>
            <div className={styles.whatsapp_img}>
              <div className={styles.stars_box}>
                <div className={styles.stars_image}>
                  <Image
                    src={stars}
                    alt="star"
                    width={100}
                    height={100}
                    className={styles.stars_img}
                  />
                </div>
                <p>“I&apos;ve Noticed Great Improvement”</p>
              </div>
              <div className={styles.last_content}>
                <Image
                  src={jack}
                  alt="whatsapp"
                  width={200}
                  height={100}
                  className={styles.whatsapp}
                />
              </div>
            </div>
            <div className={styles.whatsapp_img}>
              <div className={styles.stars_box}>
                <div className={styles.stars_image}>
                  <Image
                    src={stars}
                    alt="star"
                    width={100}
                    height={100}
                    className={styles.stars_img}
                  />
                </div>
                <p>“My Sugar Levels Are Stable”</p>
              </div>
              <div className={styles.last_content}>
                <Image
                  src={fidelis}
                  alt="whatsapp"
                  width={200}
                  height={100}
                  className={styles.whatsapp}
                />
              </div>
            </div>
            <div className={styles.whatsapp_img}>
              <div className={styles.stars_box}>
                <div className={styles.stars_image}>
                  <Image
                    src={stars}
                    alt="star"
                    width={100}
                    height={100}
                    className={styles.stars_img}
                  />
                </div>
                <p>“I&apos;m feeling better overall”</p>
              </div>
              <div className={styles.last_content}>
                <Image
                  src={sarah}
                  alt="whatsapp"
                  width={200}
                  height={100}
                  className={styles.whatsapp}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className={styles.hero_two_container}>
        <div className={styles.hero_two_contents}>
            <div  onClick={scrollToAccordion} className={styles.hero_two_button}>
              <button>Click Here To Order Now</button>
            </div>
          <div className={styles.hero_two_text}>
            <h3>It&apos;s 100% Safe and NAFDAC APPROVED.</h3>
          </div>
          <div className={styles.big_image}>
            <Image
              src={bottles}
              alt="big"
              width={200}
              height={200}
              className={styles.big_img}
            />
          </div>
        </div>
      </section>
      <div className={styles.customer_saying_conatiner}>
        <div className={styles.customer_saying_contents}>
          <h3>More Results From Our Customers</h3>
          <div className={styles.whatsapp_images}>
            <div className={styles.whatsapp_img}>
              <div className={styles.stars_box}>
                <div className={styles.stars_image}>
                  <Image
                    src={stars}
                    alt="star"
                    width={100}
                    height={100}
                    className={styles.stars_img}
                  />
                </div>
                <p>“My sugar levels are under control”</p>
              </div>
              <div className={styles.last_content}>
                <Image
                  src={rita}
                  alt="whatsapp"
                  width={200}
                  height={100}
                  className={styles.whatsapp}
                />
              </div>
            </div>
            <div className={styles.whatsapp_img}>
              <div className={styles.stars_box}>
                <div className={styles.stars_image}>
                  <Image
                    src={stars}
                    alt="star"
                    width={100}
                    height={100}
                    className={styles.stars_img}
                  />
                </div>
                <p>“It&apos;s a gift to mankind”</p>
              </div>
              <div className={styles.last_content}>
                <Image
                  src={anita}
                  alt="whatsapp"
                  width={200}
                  height={100}
                  className={styles.whatsapp}
                />
              </div>
            </div>
            <div className={styles.whatsapp_img}>
              <div className={styles.stars_box}>
                <div className={styles.stars_image}>
                  <Image
                    src={stars}
                    alt="star"
                    width={100}
                    height={100}
                    className={styles.stars_img}
                  />
                </div>
                <p>“Very effective and no side effects”</p>
              </div>
              <div className={styles.last_content}>
                <Image
                  src={ikenna}
                  alt="whatsapp"
                  width={200}
                  height={100}
                  className={styles.whatsapp}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className={styles.howmuch_container}>
        <div className={styles.howmuch_contents}>
            <div  onClick={scrollToAccordion} className={styles.hero_two_button}>
              <button>Click Here To Order Now</button>
            </div>
          <div className={styles.hero_two_text}>
            <h3>How Much Does It Cost?</h3>
          </div>
          <div className={styles.big_image_wrapper}>
            <div className={styles.big_image}>
              <div className={styles.natural_image}>
                <Image
                  src={natural}
                  alt="big"
                  width={200}
                  height={100}
                  className={styles.big_img}
                />
              </div>
              <div className={styles.natural_text}>
                <p>Before I tell you the price, think about it…</p>
                <p>
                  Untreated diabetes can lead to problems like{" "}
                  <span>blindness, kidney failure, or even amputation.</span>
                </p>
                <p>
                  Why take that risk when <span>Madhuhara</span> can help
                  balance your blood sugar, protect your organs, and improve
                  your health naturally…
                </p>
                <p>
                  All for just <span>₦60,000?</span>
                </p>
                <p>
                  Your health is priceless. Don&apos;t wait until it&apos;s too
                  late.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.customer_saying_conatiner_two}>
        <div className={styles.customer_saying_contents}>
          <h3>More Results From Our Customers</h3>
          <div className={styles.whatsapp_images}>
            <div className={styles.whatsapp_img}>
              <div className={styles.stars_box}>
                <div className={styles.stars_image}>
                  <Image
                    src={stars}
                    alt="star"
                    width={100}
                    height={100}
                    className={styles.stars_img}
                  />
                </div>
                <p>“This product na Godsend”</p>
              </div>
              <div className={styles.last_content}>
                <Image
                  src={one}
                  alt="whatsapp"
                  width={200}
                  height={100}
                  className={styles.whatsapp}
                />
              </div>
              <div className={styles.customer_review}>
                <p>
                  “After 3 months of using Madhuhara,{" "}
                  <span>I no longer dey depend on my drugs.</span>
                </p>
                <p>
                  My blood sugar is now under control.{" "}
                  <span>This product na Godsend.”</span> — Mr. Emeka, Port
                  Harcourt
                </p>
              </div>
            </div>
            <div className={styles.whatsapp_img}>
              <div className={styles.stars_box}>
                <div className={styles.stars_image}>
                  <Image
                    src={stars}
                    alt="star"
                    width={100}
                    height={100}
                    className={styles.stars_img}
                  />
                </div>
                <p>“My blurry vision stopped after 4 weeks of use,“</p>
              </div>
              <div className={styles.last_content}>
                <Image
                  src={two}
                  alt="whatsapp"
                  width={200}
                  height={100}
                  className={styles.whatsapp}
                />
              </div>
              <div className={styles.customer_review}>
                <p>“I doubted it at first.</p>
                <p>
                  <span>
                    But as my blurry vision stopped after 4 weeks of use,
                  </span>{" "}
                  I know say this na the real deal.” — Yakubu, Jos
                </p>
              </div>
            </div>
            <div className={styles.whatsapp_img}>
              <div className={styles.stars_box}>
                <div className={styles.stars_image}>
                  <Image
                    src={stars}
                    alt="star"
                    width={100}
                    height={100}
                    className={styles.stars_img}
                  />
                </div>
                <p>“Madhuhara na life saver.”</p>
              </div>
              <div className={styles.last_content}>
                <Image
                  src={three}
                  alt="whatsapp"
                  width={200}
                  height={100}
                  className={styles.whatsapp}
                />
              </div>
              <div className={styles.customer_review}>
                <p>
                  <span>
                    “My last test show normal sugar levels for the first time in
                    5 years..
                  </span>
                </p>
                <p>
                  Before I was spending so much on drugs wey no even reduce my
                  sugar levels.
                </p>
                <p>
                  <span>Madhuhara na life saver.”</span> — Mrs. Juliet, Abuja
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.Delivery}>
        <h3>Get FREE Delivery When You Order Now</h3>
        <div className={styles.free_shipping_image}>
          <Image
            src={free}
            alt="free"
            width={100}
            height={100}
            className={styles.free_shipping}
          />
        </div>
      </div>
      <div
        
        className={styles.customer_saying_conatiner_three}
      >
        <div className={styles.customer_saying_contents}>
          <h3>Order 3 Bottles or 6 Bottles For BEST Results.</h3>
          <div className={styles.whatsapp_images}>
            <div className={styles.whatsapp_img}>
              <div className={styles.stars_box}>
                <p>
                  <span>1 Packs </span>
                </p>
              </div>
              <div ref={accordionRef} className={styles.last_content}>
                <Image
                  src={six}
                  alt="whatsapp"
                  width={200}
                  height={100}
                  className={styles.whatsapp}
                />
              </div>
              <div className={styles.customer_review}>
                <h2>Price N60,000</h2>
                <div className={styles.Delivery_box}>
                  <div className={styles.free_delivery}>
                    <p>FREE DELIVERY</p>
                  </div>
                  <div className={styles.free_delivery}>
                    <p>PAY ON DELIVERY</p>
                  </div>
                  <div className={styles.order_now}>
                    <Link
                      href={
                        "https://isdb.bpfree.xyz/joyfulwellness/madhu/order-page/index.html"
                      }
                    >
                      <button>
                        <div className={styles.order_now_div}>
                          <p>ORDER NOW</p>
                        </div>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.whatsapp_img}>
              <div className={styles.stars_box}>
                <p>
                  <span>3 Packs </span>
                </p>
                <p>Recommended For Best Results</p>
              </div>
              <div className={styles.last_content}>
                <Image
                  src={best}
                  alt="whatsapp"
                  width={200}
                  height={100}
                  className={styles.whatsapp}
                />
              </div>
              <div className={styles.customer_review}>
                <h2>Price N120,000</h2>
                <div className={styles.Delivery_box}>
                  <div className={styles.free_delivery}>
                    <p>FREE DELIVERY</p>
                  </div>
                  <div className={styles.free_delivery}>
                    <p>PAY ON DELIVERY</p>
                  </div>
                  <div className={styles.order_now}>
                    <Link
                      href={
                        "https://isdb.bpfree.xyz/joyfulwellness/madhu/order-page/index.html"
                      }
                    >
                      <button>
                        <div className={styles.order_now_div}>
                          <p>ORDER NOW</p>
                        </div>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.whatsapp_img}>
              <div className={styles.stars_box}>
                <p>
                  <span>6 Packs </span>
                </p>
                <p>BIG DISCOUNT</p>
              </div>
              <div className={styles.last_content}>
                <Image
                  src={discount}
                  alt="whatsapp"
                  width={200}
                  height={100}
                  className={styles.whatsapp}
                />
              </div>
              <div className={styles.customer_review}>
                <h2>Price N240,000</h2>
                <div className={styles.Delivery_box}>
                  <div className={styles.free_delivery}>
                    <p>FREE DELIVERY</p>
                  </div>
                  <div className={styles.free_delivery}>
                    <p>PAY ON DELIVERY</p>
                  </div>
                  <div className={styles.order_now}>
                    <Link
                      href={
                        "https://isdb.bpfree.xyz/joyfulwellness/madhu/order-page/index.html"
                      }
                    >
                      <button>
                        <div className={styles.order_now_div}>
                          <p>ORDER NOW</p>
                        </div>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.guarantee_wrapper}>
        <div className={styles.guarantee_image}>
          <Image
            src={guarantee}
            alt="guarantee"
            width={100}
            height={100}
            className={styles.guarantee_img}
          />
        </div>
        <div className={styles.guarantee_contents}>
          <div className={styles.guarantee_text}>
            <p>
              We&apos;re confident that <span>Madhuhara</span> will balance your
              sugar and help you take control of your diabetes naturally.
            </p>
            <p>
              That&apos;s why we offer a{" "}
              <span>100% Satisfaction Guarantee.</span>
            </p>
            <p>
              But if you&apos;re not completely satisfied, you will get your
              money back.
            </p>
            <p>No risks, no worries.</p>
          </div>
        </div>
      </div>
      <div className={styles.click_wrapper}>
        <div  onClick={scrollToAccordion} className={styles.click_button}>
            <button>Click Here To Order Now</button>
        </div>
        <div className={styles.click_image_box_contents}>
          <div className={styles.box_contents}>
            <div className={styles.click_image_box}>
              <Image
                src={woman}
                alt="box"
                width={100}
                height={100}
                className={styles.click_img}
              />
            </div>
            <div className={styles.click_image_box}>
              <Image
                src={man}
                alt="box"
                width={100}
                height={100}
                className={styles.click_img}
              />
            </div>
            <div className={styles.click_image_box}>
              <Image
                src={hair}
                alt="box"
                width={100}
                height={100}
                className={styles.click_img}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.Frequently}>
        <div className={styles.freq_text}>
          <h3>Frequently Asked Questions</h3>
        </div>
        <div className={styles.accordion_wrapper}>
          <div className={styles.accordion}>
            {accordionData.map(({ id, answer, content,text,show }) => (
              <div key={id} className={styles.accordion_item}>
                <button
                  className={styles.accordion_header}
                  onClick={() => toggleAccordion(id)}
                >
                  <FaCaretDown
                    className={`${styles.icon} ${
                      openId === id ? styles.rotate : ""
                    }`}
                  />
                  {content}
                </button>
                {openId === id && (
                  <div
                    className={`${styles.accordion_content} ${
                      openId === id ? styles.open : ""
                    }`}
                  >
                    <p>{answer}</p>
                    <p>{text}</p>
                    <p>{show}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.empty_div}></div>
      <div className={styles.footer}>
        <div className={styles.footer_last}>
          <p>Janis - Copyright</p>
          <p>Terms, Conditions & Privacy - Contact</p>
        </div>
        <p>
          All material herein is provided for information only and may not be
          construed as personal medical advice. This is an advert. No action
          should be taken based solely on the contents of this information;
          instead, readers should consult appropriate health professionals on
          any matter relating to their health and well-being. The publisher is
          not a licensed medical care provider. The information is provided with
          the understanding that the publisher is not engaged in the practice of
          medicine or any other health-care profession and does not enter into a
          health-care practitioner/patient relationship with its readers. The
          publisher is not responsible for errors or omissions. This is an
          advert and should be construed as such.
        </p>
      </div>
    </div>
  );
}
