import Accordion from "@/components/accordion";

const faqs = [
  {
    question: "How can I become a member of The Modeling Club?",
    answer:
      "To join The Modeling Club, simply fill out our membership form available on our website. We welcome students from all engineering disciplines who are interested in Computer-Aided Engineering and simulation. No prior experience is required - we'll teach you everything you need to know.",
  },
  {
    question: "What software and tools will I learn to use?",
    answer:
      "Our club provides training in industry-standard tools including MATLAB for mathematical modeling, Aspen Plus for chemical process simulation, AutoCad for computer-aided design, VBA in Excel for automation, and Ansys for Computational Fluid Dynamics (CFD).",
  },
  {
    question: "What kind of projects will I work on as a member?",
    answer:
      "You'll work on real engineering projects across all process engineering fields including wastewater treatment, green hydrogen production, Computational Fluid Dynamics (CFD), oil and gas exploration, bioenergy optimization. Our projects cover the full spectrum of chemical and process engineering applications.",
  },
  {
    question: "Do I need prior experience with modeling software?",
    answer:
      "No prior experience is required! We provide comprehensive training from the basics to advanced applications. Our experienced members and mentors will guide you through each step, making complex tools accessible to beginners.",
  },
  {
    question: "How will joining The Modeling Club help my career?",
    answer:
      "The Modeling Club provides practical experience with industry-standard tools that employers value. You'll build a portfolio of real projects, develop problem-solving skills, and network with professionals in the engineering field. Many of our alumni have secured internships and jobs in top engineering companies.",
  },

  {
    question: "How often does the club meet and what are the time commitments?",
    answer:
      "We occassionally hold in-person training sessions for hands-on software practice and project work, and online webinars for specialized topics and guest lectures. The time commitment is flexible - you can participate as much or as little as your schedule allows.",
  },
];

export default function FAQS() {
  return (
    <div className={"flex flex-col items-center bg-white p-6 md:pt-24"}>
      <h2 className={"mb-2 text-center text-2xl text-primary-900 md:text-3xl lg:text-4xl"}>Any questions? We&apos;re here for you.</h2>
      <p className={"mb-12 max-w-screen-sm text-center md:text-lg"}>
        We&apos;ve been doing this for sometime now so we&apos;ve pulled together some of the more questions we get asked.
      </p>
      <article className={"mb-6 w-full max-w-screen-sm"}>
        <p className={"mb-3 text-sm font-semibold uppercase text-gray-600"}>Questions and Answers</p>
        <ul className={"divide-y"}>
          {faqs.map((faq, i) => (
            <Accordion key={i} {...faq} />
          ))}
        </ul>
      </article>
    </div>
  );
}
