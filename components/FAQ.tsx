import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What is the CAT combat system?",
    answer:
      "CAT (Combat Autonomous Technology) is an advanced autonomous warfare system that integrates false targets, scout drones, and strike drones. It enhances battlefield dominance through deception, intelligence gathering, and precision strikes.",
    value: "item-1",
  },
  {
    question: "How do false targets work?",
    answer:
      "False targets use stealth and radar deception technologies, including Luneburg lenses and electronic warfare techniques, to mislead enemy detection systems and protect allied forces.",
    value: "item-2",
  },
  {
    question: "What role do scout drones play?",
    answer:
      "Scout drones provide real-time reconnaissance, analyzing enemy movements, identifying threats, and transmitting data for decision-making and tactical planning.",
    value: "item-3",
  },
  {
    question: "How does the system execute precision strikes?",
    answer:
      "Once intelligence is gathered, AI-powered analytics prioritize threats, and the strike drone is deployed to engage the target with high accuracy, either autonomously or under human supervision.",
    value: "item-4",
  },
  {
    question: "Is the CAT system fully autonomous?",
    answer:
      "CAT operates in both autonomous and operator-assisted modes, allowing flexibility based on mission requirements and situational needs.",
    value: "item-5",
  },
  {
    question: "Who can use the CAT system?",
    answer:
      "The CAT system is designed for military and defense applications, providing advanced solutions for battlefield operations, reconnaissance, and strategic defense initiatives.",
    value: "item-6",
  },
  {
    question: "Does Warp Technologies have its own R&D department?",
    answer:
      "Yes! Warp Technologies has a dedicated R&D division focused on developing cutting-edge defense solutions, including stealth materials, radar deception, and autonomous combat systems.",
    value: "item-7",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="container m-auto py-24 sm:py-32 px-6 md:px-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
        </span>
      </h2>

      <Accordion type="single" collapsible className="w-full AccordionRoot">
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Still have questions?{" "}
        <a
          rel="noreferrer noopener"
          href="#"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contact us
        </a>
      </h3>
    </section>
  );
};
