import Link from "next/link";
import EnquiryForm from "@/components/EnquiryForm";
import Image from "next/image";

export default function OrthoticsBillingPage() {
  return (
    <main className="bg-gray-50">

      {/* HERO */}
      <section className="relative py-24 text-white">

        <div className="absolute inset-0">
          <Image
            src="/assets/images/provider-solutions/provider-hero.jpg"
            alt="Healthcare provider solutions"
            fill
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative max-w-7xl mx-auto px-6">

          <h1 className="text-4xl md:text-4xl font-bold">
            Orthotics & Prosthetics Billing Services
          </h1>

          <div className="w-16 h-1 bg-orange-500 mt-4"></div>

          <p className="mt-6 max-w-3xl text-gray-200">
             SkyKorg HealthCare delivers specialized orthotics and prosthetics
            billing services designed to streamline revenue cycle management,
            improve reimbursement accuracy, and ensure compliance with payer
            guidelines.
          </p>

        </div>

      </section>

      

      {/* CONTENT */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12">

          {/* ARTICLE */}
          <article className="lg:col-span-2 space-y-12">

            {/* WHAT IS ORTHOTICS BILLING */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                What is Orthotics Billing?
              </h2>

              <p className="text-gray-700 leading-relaxed">
                Orthotics billing involves submitting insurance claims for
                orthopedic braces, supports, and corrective devices prescribed
                to improve patient mobility and posture. Proper coding,
                documentation, and payer compliance are essential for ensuring
                successful reimbursement.
              </p>
            </section>

            {/* WHAT IS PROSTHETICS BILLING */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                What is Prosthetics Billing?
              </h2>

              <p className="text-gray-700 leading-relaxed">
                Prosthetics billing focuses on claims related to artificial
                limbs and replacement body parts. These services require
                accurate HCPCS coding, detailed documentation, and payer
                verification to ensure correct reimbursements.
              </p>
            </section>

            {/* PROCESS */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Orthotics Billing Process
              </h2>

              <ul className="space-y-2 text-gray-700">
                <li>✔ Patient eligibility verification</li>
                <li>✔ Documentation and physician orders</li>
                <li>✔ HCPCS coding and charge entry</li>
                <li>✔ Claim submission and payer follow-ups</li>
                <li>✔ Payment posting and denial management</li>
              </ul>
            </section>

            {/* TIPS */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Tips to Improve Orthotics Billing Performance
              </h2>

              <ul className="space-y-2 text-gray-700">
                <li>✔ Maintain complete patient documentation</li>
                <li>✔ Ensure correct HCPCS coding</li>
                <li>✔ Verify insurance eligibility before treatment</li>
                <li>✔ Implement denial management strategies</li>
                <li>✔ Partner with experienced RCM specialists</li>
              </ul>
            </section>

            {/* WHY CHOOSE */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Why Choose SkyKorg HealthCare
              </h2>

              <p className="text-gray-700 leading-relaxed">
                Our orthotics and prosthetics billing experts understand payer
                guidelines, documentation requirements, and coding complexities.
                We help providers reduce claim denials, improve cash flow, and
                focus on delivering high-quality patient care.
              </p>
            </section>

            {/* SERVICES LIST */}
            <section>
              <h2 className="text-2xl font-semibold mb-6">
                Our Orthotics & Prosthetics Billing Services
              </h2>

              <div className="grid md:grid-cols-2 gap-4 text-gray-700">

                <ul className="space-y-2">
                  <li>✔ Patient eligibility verification</li>
                  <li>✔ Insurance verification</li>
                  <li>✔ Charge entry and coding</li>
                  <li>✔ Claims submission</li>
                </ul>

                <ul className="space-y-2">
                  <li>✔ Payment posting</li>
                  <li>✔ Denial management</li>
                  <li>✔ AR follow-ups</li>
                  <li>✔ Compliance monitoring</li>
                </ul>

              </div>
            </section>

            {/* FAQ */}
            <section>
              <h2 className="text-2xl font-semibold mb-6">
                FAQ's on Orthotics & Prosthetics Billing
              </h2>

              <div className="grid md:grid-cols-2 gap-6">

                <div>
                  <h3 className="font-semibold">
                    Why outsource orthotics billing?
                  </h3>
                  <p className="text-gray-600">
                    Outsourcing helps reduce administrative workload while
                    improving coding accuracy and reimbursement speed.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold">
                    Do you support multiple insurance payers?
                  </h3>
                  <p className="text-gray-600">
                    Yes. We support Medicare, Medicaid, and commercial payer
                    claims across the United States.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold">
                    What are your compliance standards?
                  </h3>
                  <p className="text-gray-600">
                    Our billing processes follow HIPAA regulations and payer
                    documentation guidelines.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold">
                    Do you work with EMR systems?
                  </h3>
                  <p className="text-gray-600">
                    Yes. Our team works with multiple EMR/EHR and billing
                    platforms used by orthotics providers.
                  </p>
                </div>

              </div>
            </section>

          </article>

          {/* SIDEBAR */}
          <aside className="space-y-8">

            {/* HELP CARD */}
            <div className="bg-orange-500 text-white p-6 rounded-lg shadow">
              <h3 className="font-semibold mb-3">
                How Can We Help?
              </h3>

              <p className="text-sm mb-4">
                Partner with SkyKorg HealthCare for professional orthotics and
                prosthetics billing services designed to maximize reimbursements.
              </p>

              <Link
                href="/contact"
                className="block bg-black text-white text-center py-2 rounded"
              >
                Schedule Consultation
              </Link>
            </div>

            {/* ADVANTAGES */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold mb-4">
                Our Advantages
              </h3>

              <ul className="space-y-2 text-sm text-gray-700">
                <li>✔ 99.9% Billing Accuracy</li>
                <li>✔ 80% Cost Reduction</li>
                <li>✔ Dedicated RCM Specialists</li>
                <li>✔ Nationwide Provider Support</li>
              </ul>
            </div>

          </aside>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange-500 text-white py-14 text-center">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-2xl font-semibold mb-4">
            Transform Your Orthotics Billing Process
          </h2>

          <p className="mb-6">
            Let SkyKorg HealthCare help you streamline claims, reduce denials,
            and improve revenue cycle efficiency.
          </p>

          <Link
            href="/contact"
            className="bg-black px-8 py-3 rounded"
          >
            Get Started
          </Link>

        </div>
      </section>

      {/* CONTACT FORM */}
      <EnquiryForm />

    </main>
  );
}