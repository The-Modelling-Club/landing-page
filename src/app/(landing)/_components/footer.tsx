"use client";

import Link from "next/link";
import { GithubIcon, LinkedinIcon, InstagramIcon, YoutubeIcon } from "lucide-react";
import Image from "next/image";
// import Logo from "@/app/assets/logo.png";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react/dist/iconify.js";
import { FormEvent, useState } from "react";
import { toast } from "sonner";
import axios, { AxiosError } from "axios";
// import { Spinner } from "@/shared/spinner";

export default function Footer() {
  const date = new Date().getFullYear();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const payload = { email };
      const res = await axios.post("/api/waitlist", payload);
      toast.success(res.data.message);
      setEmail("");
    } catch (e: any) {
      if (e instanceof AxiosError) {
        return toast.error(e.response?.data.message);
      }
      toast.error(e.message || "Failed to subscribe.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <footer className=" text-sm border-t z-10 p-4 lg:p-12 pt-12 w-full bg-primary text-white mt-20 ">
      <div className="flex justify-between flex-col lg:flex-row">
        <div className="flex flex-col mx-auto lg:mx-0 w-fit">
          .logo
          {/* <Image src={Logo} alt="logo" width={300} height={300} className="object-cover mx-auto lg:mx-0 " /> */}
          <div className="max-w-sm mt-4 text-center lg:text-left mb-6">
            <p className=" ">Your go-to solution for residential, commercial and event cleaning services.</p>
          </div>
          <div className="text-center lg:text-left mb-4">
            <h4 className=" font-semibold mb-2">Locations</h4>
            <p>Mississauga, Brampton, Caledon, Oakville, Milton, and Halton Hills.</p>
          </div>
        </div>
        <section className=" flex flex-col   gap-6 lg:gap-16 lg:flex-row lg:pr-12">
          <div className="flex flex-col items-center lg:items-start w-full  ">
            <h1 className="font-semibold  text-xl">Quick Links</h1>
            <div className="flex flex-col text-center  md:text-left my-6 space-y-3">
              <Link href={"/"} className="hover:text-secondary hover:translate-x-2 transition-all duration-300 ">
                Home
              </Link>
              <Link href={"/team#executives"} className="hover:text-secondary hover:translate-x-2 transition-all duration-300">
                Meet the team
              </Link>
              <Link href={"/services"} className="hover:text-secondary hover:translate-x-2 transition-all duration-300">
                Articles
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center min-w-max lg:items-start">
            <h1 className="font-semibold text-xl">Projects</h1>
            <div className="flex flex-col items-center md:items-start md:text-left my-6 space-y-3">
              <Link href={"/projects#virtual-catalytic-reactor"} className="hover:text-secondary hover:translate-x-2 transition-all duration-300">
                Virtual Catalytic Reactor
              </Link>
              <Link href={"/projects#gas-turbine-simulator"} className="hover:text-secondary hover:translate-x-2 transition-all duration-300">
                Gas Turbine Simulator
              </Link>
              <Link href={"/projects#chemcost"} className="hover:text-secondary hover:translate-x-2 transition-all duration-300">
                ChemCost
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full mx-auto md:mx-0 max-w-[22rem] text-center md:text-left p-6 pt-0 rounded-xl h-fit bg-primary-500/20   ">
          <h4 className=" mb-4 font-semibold text-xl">Subscribe to our newsletter</h4>
          <p className=" mb-3">Subscibe to receive updates, news and tips in your inbox.</p>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className=" border rounded-full relative  py-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="johndoe@domain.com"
                className=" w-full bg-transparent border-none ring-0 py-0  "
              />
              <div className="h-full grid place-content-center absolute top-0 right-1 ">
                <Button
                  disabled={loading || !email}
                  className=" bg-slate-500  p-2 h-fit hover:bg-secondary disabled:cursor-not-allowed disabled:opacity-60 rounded-full"
                >
                  {loading ? "Loading..." : <Icon icon={"ph:telegram-logo-thin"} className=" size-4" />}
                  {/* {loading ? <Spinner size="1rem" color="#fff" /> : <Icon icon={"ph:telegram-logo-thin"} className=" size-4" />} */}
                </Button>
              </div>
            </div>
          </form>
        </section>
      </div>
      <section className=" flex flex-col text-stone-200 mt-6 lg:flex-row border-t border-t-stone-400  justify-between">
        <section className=" inline-flex flex-col lg:flex-row text-center items-center gap-4">
          <p className=" mx-auto text-[.8rem] mt-6">&copy; {date} The Modelling Club, KNUST | All rights reserved.</p>
        </section>

        {/* <section>
          <div className="flex justify-center py-6 gap-4">
            <Link href={"/"} className=" hover:text-secondary">
              Terms of Use
            </Link>
            <div>|</div>
            <Link href={"/"} className=" hover:text-secondary">
              Privacy Policy
            </Link>
          </div>
        </section> */}
        <section>
          <div className="flex justify-center py-6 gap-4">
            <a href="https://www.instagram.com/botr.app?igsh=bG92OWliMHFjYmF3" target="_blank" rel="noopener noreferrer">
              <InstagramIcon size={16} className="hover:text-secondary transition-all duration-300 cursor-pointer hover:-translate-y-1" />
            </a>
            <Link href="https://www.linkedin.com/company/built-on-the-rock-app?trk=ppro_cprof" target="_blank" rel="noopener noreferrer">
              <LinkedinIcon size={16} className="hover:text-secondary transition-all duration-300 cursor-pointer hover:-translate-y-1" />
            </Link>
            <a href="https://github.com/The-Modelling-Club/" target="_blank" rel="noopener noreferrer">
              <GithubIcon size={16} className="hover:text-secondary transition-all duration-300 cursor-pointer hover:-translate-y-1" />
            </a>
          </div>
        </section>
      </section>
    </footer>
  );
}
