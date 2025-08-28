import React from "react";

const Cards = () => {
  const cards = [
    {
      id: 1,
      heading: "Accelerate long-term growth with 1IGS's",
      description:
        "We design strategies to cut costs, boost efficiency, and manage risks, offering solutions from logistics to procurement for sustainable success.",
      link: "Let's Co-Create >>",
    },
    {
      id: 2,
      heading: "Proactive, innovative, and results-focused",
      description:
        "We build impactful partnerships with global leaders. By teaming up, we fast-track success, spark innovation, and revolutionize global sourcing strategies.",
      link: "Call to explore global options >>",
    },
    {
      id: 3,
      heading: "Driving success through strategic partnerships",
      description:
        "We collaborate to accelerate innovation, drive results, and transform your business globally by aligning expertise to meet your unique sourcing needs.",
      link: "Partner for Success >>",
    },
  ];

  return (
    <div className="absolute w-full top-[75%] left-0 flex justify-center z-10 px-4 hidden sm:flex">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-white/10 h-55 p-6 backdrop-blur-md shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <h2 className="text-lg font-semibold mb-2 text-white">
              {card.heading}
            </h2>
            <p className="text-gray-200 text-sm mb-2">{card.description}</p>
            <a className="text-orange-400 hover:underline text-sm sm:text-base">
              {card.link}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
