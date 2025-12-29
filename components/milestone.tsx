"use client"

export function CompanyMilestone() {
  const milestones = [
    {
      year: "1990",
      title: "Mashreq starts Business",
    },
    {
      year: "2014",
      title: "E-commerce Acquiring introduced and relationships signed up",
    },
    {
      year: "2015",
      title: "Integrated payment solutions launched",
    },
    {
      year: "2016",
      title: "Launched Integrated Hospitality payment solutions",
    },
    {
      year: "2017",
      title: "Mashreq launched Apple Pay and Samsung Pay",
    },
    {
      year: "2018",
      title: "Migrated to state of the art acquiring platform",
    },
    {
      year: "2019",
      title: "Launched DCC on ecommerce",
    },
    {
      year: "2020",
      title: "Launched Emirates Digital Wallet acceptance on Mashreq terminals",
    },
    {
      year: "2021",
      title: "Launched the portal for merchants",
    },
    {
      year: "2022",
      title: "Established NEO PAY as a fully owned subsidiary",
    },
    {
      year: "2024",
      title: "Mashreq sold a majority stake in NEO PAY",
    },
  ]

  return (
    <section className="w-full py-20 px-4 md:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center mb-16">
          <div className="mb-4">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 4L10 13V35L24 44L38 35V13L24 4Z" fill="#F97316" />
              <path d="M24 14L17 19V29L24 34L31 29V19L24 14Z" fill="white" />
            </svg>
          </div>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e3a5f] text-center"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Company milestone
          </h2>
        </div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Straight Vertical Line - positioned in center on desktop, left on mobile */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-[2px] top-0 bottom-0 w-1 bg-[#F97316]" />

          {/* Milestones */}
          <div className="space-y-12 md:space-y-16">
            {milestones.map((milestone, index) => {
              const isLeft = index % 2 === 0

              return (
                <div
                  key={milestone.year}
                  className={`relative flex items-center ${isLeft ? "md:flex-row" : "md:flex-row-reverse"} flex-row`}
                >
                  {/* Content - Mobile: always right, Desktop: alternating */}
                  <div
                    className={`flex-1 pl-16 md:pl-0 ${isLeft ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"}`}
                  >
                    <div
                      className={`bg-white p-5 rounded-xl shadow-lg border border-gray-100 inline-block max-w-md ${
                        isLeft ? "md:ml-auto" : "md:mr-auto"
                      }`}
                    >
                      <p
                        className="text-[#1e3a5f] text-base md:text-lg leading-relaxed font-medium"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {milestone.title}
                      </p>
                    </div>
                  </div>

                  {/* Year Circle - Center */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                    <div
                      className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-[#1e3a5f] flex items-center justify-center shadow-xl border-4 border-white"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      <span className="text-white font-bold text-sm md:text-xl">{milestone.year}</span>
                    </div>
                  </div>

                  {/* Empty space for the other side on desktop */}
                  <div className="hidden md:block flex-1" />
                </div>
              )
            })}
          </div>

          {/* End cap */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 -bottom-4">
            <div className="w-4 h-4 rounded-full bg-[#F97316]" />
          </div>
        </div>
      </div>
    </section>
  )
}
