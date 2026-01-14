import { useState } from "react";
import { content } from "../data/content";
import Icon from "./Icon";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-light py-section">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-small uppercase tracking-[0.2em] text-muted">
            {content.faq.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-headline text-text">
            {content.faq.title}
          </h2>
        </div>
        <div className="mt-10 space-y-4">
          {content.faq.items.map((item, index) => {
            const isOpen = openIndex === index;
            const answerId = `faq-answer-${index}`;

            return (
              <div key={item.question} className="card">
                <h3>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 text-left"
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() =>
                      setOpenIndex(isOpen ? null : index)
                    }
                  >
                    <span className="text-title font-semibold text-text">
                      {item.question}
                    </span>
                    <Icon
                      name={isOpen ? "remove" : "add"}
                      className="text-xl text-muted"
                    />
                  </button>
                </h3>
                {isOpen ? (
                  <p
                    id={answerId}
                    className="mt-3 text-small text-muted"
                  >
                    {item.answer}
                  </p>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
