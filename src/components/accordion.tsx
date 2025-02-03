import { useState } from "react";
import { Icon } from "@iconify/react";
import { AnimatePresence, motion } from "framer-motion";

const Accordion = ({ question, answer }: { question: string; answer: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <li className="py-3">
      <div className="flex items-center justify-between gap-2 mb-3 cursor-pointer" onClick={() => setOpen(!open)}>
        <h4 className="flex-1 font-medium text-base md:text-lg select-none">{question}</h4>
        <button aria-label="toggle faq" className="btn btn-icon size-8" onClick={() => setOpen(!open)}>
          {open ? <Icon icon={"ic:round-remove"} width={18} /> : <Icon icon={"ic:round-add"} width={18} />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.p initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="text-gray-600">
            {answer}
          </motion.p>
        )}
      </AnimatePresence>
    </li>
  );
};

export default Accordion;
