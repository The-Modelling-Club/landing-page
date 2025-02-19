import Image from "next/image";
import ImageOne from "@/app/assets/images/green_hydrogen.jpeg";
import Executives from "./_components/executives";
import SlotCounter from "react-slot-counter";
export default function AboutPage() {
  return (
    <div>
      <section className="  grid md:grid-cols-2 gap-4 place-content-center p-6">
        <div className=" w-full  lg:w-4/5 h-[20rem] md:h-[30rem] rounded-xl  overflow-hidden mx-auto">
          <Image src={ImageOne} alt="about" width={2000} height={2000} className=" object-cover  object-top h-full w-full " />
        </div>
        <div className=" lg:p-6">
          <h3 className=" mb-4 text-3xl font-semibold text-primary-500">About Us</h3>
          <p className=" text-justify">
            Alpha Pro Janitorial Service is a residential and commercial cleaning service company located in Mississauga and Brampton, Ontario in Canada. Our
            current target market is residential homes and professional offices with cleanable office space in the Peel Region and some areas in Halton. 
          </p>
          <br />
          <p className=" text-justify">
            Client sustainability is our main focus. We seek to keep a long-term relationship with out clients. Our services are quality focused and we do our
            best to make our clients happy. We use remote workers who can quickly access the service location in a timely manner. Our prices are very reasonable
            and we make every effort to meet the needs of our clients.
          </p>
          <br />
          <p className=" text-justify">
            Alpha Pro Janitorial plans to offer diverse daily building cleaning services including some specialty services such laundry services. We believe
            this mix will balance our revenue/profits out over long term macro changes.
          </p>
        </div>
      </section>
      <div className=" p-6 flex flex-col lg:flex-row justify-evenly text-center bg-primary text-white ">
        <div>
          <h1 className=" text-[96px] text-secondary">
            <SlotCounter value="300" animateOnVisible={{ triggerOnce: false, rootMargin: "0px 0px -100px 0px" }} />+
          </h1>
          <p className=" ">Active Members</p>
        </div>
        <div>
          <h1 className=" text-[96px] text-secondary">
            <SlotCounter value="4" animateOnVisible={{ triggerOnce: false, rootMargin: "0px 0px -100px 0px" }} />+
          </h1>
          <p className="">Active Projects</p>
        </div>
        <div>
          <h1 className=" text-[96px] text-secondary">
            <SlotCounter value="250" animateOnVisible={{ triggerOnce: false, rootMargin: "0px 0px -100px 0px" }} />+
          </h1>
          <p className="">Students trained</p>
        </div>
      </div>
      <Executives />
      <section className="  grid lg:grid-cols-2 mb-10 gap-4 p-6">
        <article className="bg-gray-100 rounded-xl p-6 w-full h-full">
          <h3 className="text-primary mb-3 text-lg font-semibold">Our Vision</h3>
          <p className=" text-slate-900">Our vision is to become the janitorial service company of choice in our operating area.</p>
        </article>
        <article className=" bg-gray-100 rounded-xl p-6 w-full h-full">
          <h3 className=" text-primary mb-3 text-lg font-semibold">Our Mission</h3>
          <p className=" text-slate-900">
            Our Mission Our goal is to provide a clean and healthy environment for our customers with a focus on quality and a commitment to customer service.
          </p>
          <br />
          <p className=" text-slate-900">
            Safety is a priority for our customers and employees. In your facility we follow a detailed health and safety program. This insures quality service,
            happy employees and competitive prices.
          </p>
        </article>
      </section>
    </div>
  );
}
