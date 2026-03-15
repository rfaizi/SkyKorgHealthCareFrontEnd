import Image from "next/image";
import Link from "next/link";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata = {
  title: "Medical Billing Services | SkyKorg Healthcare",
  description:
    "SkyKorg Healthcare provides end-to-end medical billing services including coding, claims management, denial resolution, and revenue cycle optimization."
};

export default function MedicalBillingPage() {
  return (
    <main className="bg-gray-50">

      {/* HERO */}
      <section className="relative py-24 text-white">

        <div className="absolute inset-0">
          <Image
            src="/assets/images/provider-solutions/provider-hero.jpg"
            alt="Medical Billing Services"
            fill
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative max-w-7xl mx-auto px-6">

          <h1 className="text-4xl md:text-4xl font-bold">
            Affordable Medical Billing Services for Healthcare Providers
          </h1>

          <div className="w-16 h-1 bg-orange-500 mt-4"></div>

          <p className="mt-6 max-w-3xl text-gray-200">
            SkyKorg Healthcare offers complete medical billing solutions
            designed to improve reimbursement rates, reduce claim denials,
            and optimize revenue cycle performance.
          </p>

        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12">

          {/* MAIN CONTENT */}
          <article className="lg:col-span-2 space-y-12">

            {/* Intro */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Professional Medical Billing Services
              </h2>

              <p className="text-gray-700 leading-relaxed">
                Medical billing services play a crucial role in ensuring
                healthcare providers receive timely reimbursements for the
                services they deliver. From patient registration and
                insurance verification to claims submission and payment
                posting, each step must be managed with precision.
              </p>

              <p className="text-gray-700 mt-4 leading-relaxed">
                SkyKorg Healthcare provides comprehensive medical billing
                support that helps healthcare practices streamline their
                billing operations, improve revenue cycle efficiency, and
                minimize administrative burdens.
              </p>
            </section>

            {/* What is Medical Billing */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                What is Medical Billing?
              </h2>

              <p className="text-gray-700 leading-relaxed">
                Medical billing is the process of translating healthcare
                services into standardized billing codes and submitting
                insurance claims to receive reimbursement from healthcare
                payers.
              </p>

              <p className="text-gray-700 mt-4 leading-relaxed">
                It involves multiple steps including coding services,
                preparing claims, submitting claims to insurance providers,
                tracking claim status, posting payments, and resolving claim
                denials when necessary.
              </p>
            </section>

            {/* Importance */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Why Medical Billing is Critical for Healthcare Revenue
              </h2>

              <p className="text-gray-700 leading-relaxed">
                Efficient medical billing processes directly impact the
                financial performance of healthcare providers. Errors in
                coding, documentation, or claims submission can lead to
                delayed reimbursements or claim denials.
              </p>

              <p className="text-gray-700 mt-4 leading-relaxed">
                By partnering with SkyKorg Healthcare, medical practices can
                significantly improve billing accuracy, accelerate claim
                approvals, and maintain a steady cash flow.
              </p>
            </section>

            {/* Why Choose */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Why Choose SkyKorg Healthcare
              </h2>

              <ul className="space-y-3 text-gray-700">
                <li>✔ Highly experienced billing specialists</li>
                <li>✔ Up to 80% operational cost reduction</li>
                <li>✔ Dedicated account managers</li>
                <li>✔ Advanced revenue cycle management</li>
                <li>✔ HIPAA compliant processes</li>
                <li>✔ Transparent reporting and analytics</li>
              </ul>
            </section>

            {/* Service List */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Our Complete Medical Billing Services
              </h2>

              <ul className="grid md:grid-cols-2 gap-3 text-gray-700">
                <li>✔ Patient registration</li>
                <li>✔ Insurance eligibility verification</li>
                <li>✔ Prior authorization</li>
                <li>✔ Medical coding</li>
                <li>✔ Claims submission</li>
                <li>✔ Payment posting</li>
                <li>✔ Accounts receivable management</li>
                <li>✔ Denial management</li>
              </ul>
            </section>

            {/* FAQ */}
            <section>
              <h2 className="text-2xl font-semibold mb-6">
                Medical Billing FAQs
              </h2>

              <div className="space-y-4">

                <details className="bg-white p-4 rounded shadow">
                  <summary className="cursor-pointer font-medium">
                    Why should I outsource medical billing?
                  </summary>
                  <p className="mt-2 text-gray-600">
                    Outsourcing medical billing helps healthcare providers
                    reduce administrative workload, improve billing accuracy,
                    and increase revenue collection efficiency.
                  </p>
                </details>

                <details className="bg-white p-4 rounded shadow">
                  <summary className="cursor-pointer font-medium">
                    What exactly do medical billers do?
                  </summary>
                  <p className="mt-2 text-gray-600">
                    Medical billers handle coding, claims submission,
                    insurance communication, payment posting, and denial
                    resolution.
                  </p>
                </details>

                <details className="bg-white p-4 rounded shadow">
                  <summary className="cursor-pointer font-medium">
                    What is the cost of medical billing services?
                  </summary>
                  <p className="mt-2 text-gray-600">
                    Costs depend on service scope and practice size. SkyKorg
                    Healthcare offers flexible and affordable pricing
                    tailored to healthcare providers.
                  </p>
                </details>

              </div>
            </section>

          </article>

          {/* SIDEBAR */}
          <aside className="space-y-8">

            {/* Advantage Box */}
            <div className="bg-orange-500 text-white p-6 rounded-lg shadow">

              <h3 className="font-semibold text-lg mb-3">
                SkyKorg Advantage
              </h3>

              <ul className="space-y-2 text-sm">
                <li>✔ Up to 80% cost reduction</li>
                <li>✔ 99.9% billing accuracy</li>
                <li>✔ Dedicated account managers</li>
                <li>✔ HIPAA compliant workflow</li>
                <li>✔ End-to-end RCM support</li>
              </ul>

            </div>

          </aside>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-orange-500 text-white py-14 text-center">

        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-2xl font-semibold mb-4">
            Improve Your Revenue Cycle with Expert Billing Support
          </h2>

          <p className="mb-6">
            SkyKorg Healthcare helps healthcare providers streamline
            billing processes, reduce claim denials, and maximize revenue.
          </p>

          <Link
            href="/contact"
            className="bg-black px-8 py-3 rounded"
          >
            Request a Demo
          </Link>

        </div>

      </section>

      <EnquiryForm />

    </main>
  );
}