import { FaGraduationCap } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
import { FaFlask } from "react-icons/fa";
import { FaVial } from "react-icons/fa";

export default function HealthcareSpecialties() {
  const services = [
    {
      icon: FaGraduationCap,
      title: "DME / HME",
      desc: "Our expert services empower leading DME providers with optimized billing, claims processing, and revenue cycle efficiency."
    },
    {
      icon: FaHeart,
      title: "Orthotics & Prosthetics (O&P)",
      desc: "Cost-effective billing and documentation support designed for orthotics and prosthetics providers."
    },
    {
      icon: FaTruck,
      title: "Skilled Nursing Facilities",
      desc: "Seamless coordination between clinical and administrative teams to deliver value-driven care."
    },
    {
      icon: FaBuilding,
      title: "Urgent Care",
      desc: "Streamline urgent care revenue cycle operations with faster claim processing and reimbursements."
    },
    {
      icon: FaFlask,
      title: "Radiology",
      desc: "Advanced radiology billing solutions designed to minimize denials and improve reimbursement cycles."
    },
    {
      icon: FaVial,
      title: "Genomics Laboratory",
      desc: "Accurate lab billing support with strong compliance standards and optimized claim workflows."
    }
  ];

  return (
    <section className="relative py-12">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage:
            "url('/assets/images/specialize-bg.jpg')",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Healthcare Specialties We Support
          </h2>

          <div className="w-16 h-1 bg-orange-500 mx-auto mt-5 rounded"></div>

          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            SkyKorg HealthCare delivers specialized Revenue Cycle Management
            solutions across multiple healthcare domains to maximize
            reimbursements and streamline operational workflows.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group bg-white border p-4 rounded-xl shadow-sm hover:shadow-xl transition duration-300 flex flex-col justify-center md:flex-row gap-5"
              >

                {/* Hex Icon */}
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 flex items-center justify-center rounded-full bg-orange-50 group-hover:bg-orange-500">
                    <Icon className="w-7 h-7 text-gray-700 text-orange-500 group-hover:text-white" />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}