import Accordion from "@/components/accordion";

const faqs = [
  {
    question: "How can we increase the number of users on our The Modelling Club account? ",
    answer:
      "Prior to onboarding, you were only able to add up to 300 users with the Core Plan. This was to ensure you were set up structurally. Now that you have successfully onboarded, you can upgrade to any number you desire by selecting the relevant plan applicable to your needs from the Billing section.",
  },
  {
    question: "How do we update or modify our Mental Health Advocates (MHAs)? ",
    answer:
      "Churches can update their MHA team through the admin dashboard by adding or removing individuals as needed. New MHAs will need to complete the mandatory training to support your church effectively.",
  },
  {
    question: "What kind of support does The Modelling Club provide us now that we have signed up?",
    answer: "We offer ongoing support through our Church Success Managers, who are always available to assist with any questions or technical support.",
  },
  {
    question: "What happens if an MHA feels overwhelmed or unqualified to help a member?",
    answer:
      "The Modelling Club ensures MHAs receive adequate training to know when to escalate cases to professionals. Our platform also includes tools to help MHAs guide members towards professional mental health services when necessary. MHAs can also reach out to their assigned MHA to discuss any concerns they may have.",
  },
  {
    question: "How can I track the mental health progress of our congregation?",
    answer:
      "The The Modelling Club admin dashboard includes tools to help track the usage of the platform to seek mental health support through the number of sessions scheduled, prevalent areas of support and feedback from members about the mental health support they receive.",
  },
  {
    question: "Can we schedule additional training sessions after onboarding?",
    answer:
      "Yes, churches can request additional training for MHAs by getting in touch with your assigned Church Success Manager. We are available to provide ongoing support to strengthen your mental health system.",
  },
  {
    question: "How do we handle data privacy and confidentiality on the platform?",
    answer:
      "The Modelling Club complies with strict data privacy regulations to ensure that member information and mental health records are confidential and secure. We are GDPR and HIPPA compliant.",
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
