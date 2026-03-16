import Image from "next/image";
import Link from "next/link";

export default function DMEBillingPage() {
  return (
    <main className="bg-gray-50">

      <section className="relative py-24 text-white">
      
              <div className="absolute inset-0">
                <Image
                  src="/assets/images/provider-solutions/dme-billing.jpg"
                  alt="Healthcare provider solutions"
                  fill
                  className="object-cover"
                />
              </div>
      
              <div className="absolute inset-0 bg-black/70"></div>
      
              <div className="relative max-w-7xl mx-auto px-6">
      
                <h1 className="text-4xl md:text-4xl font-bold">
                   DME Billing Services for Durable Medical Equipment Providers
                </h1>
      
                <div className="w-16 h-1 bg-orange-500 mt-4"></div>
      
                <p className="mt-6 max-w-3xl text-gray-200">
                 SkyKorg HealthCare provides specialized DME billing services designed
            to help Durable Medical Equipment suppliers streamline claims,
            improve reimbursements, and maintain regulatory compliance while
            reducing administrative workload.
                </p>
      
              </div>
      
            </section>

      

      {/* MAIN CONTENT */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12">

          {/* ARTICLE */}
          <article className="lg:col-span-2 space-y-10">

            {/* SECTION */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">
                What is DME Billing?
              </h2>

              <p className="text-gray-700 leading-relaxed">
                Durable Medical Equipment (DME) billing refers to the process of
                submitting claims and managing reimbursements for medical
                equipment such as wheelchairs, oxygen supplies, prosthetics,
                braces, and home medical devices. Proper coding, documentation,
                and insurance verification are critical to ensure compliance and
                accurate reimbursement.
              </p>
            </div>

            {/* SECTION */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">
                What is DME Coding?
              </h2>

              <p className="text-gray-700 leading-relaxed">
                DME coding involves assigning HCPCS codes to durable medical
                equipment claims. Correct coding ensures insurance payers can
                properly process claims and reimburse providers without delays
                or denials.
              </p>
            </div>

            {/* FEATURES */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">
                Key Benefits of Professional DME Billing Services
              </h2>

              <ul className="space-y-3 text-gray-700">
                <li>✔ Accurate HCPCS coding and claim submission</li>
                <li>✔ Faster insurance verification and prior authorization</li>
                <li>✔ Reduced claim denials and faster reimbursements</li>
                <li>✔ Improved compliance with payer requirements</li>
                <li>✔ Dedicated revenue cycle management specialists</li>
              </ul>
            </div>

            {/* ADVANTAGES */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">
                Why Choose SkyKorg HealthCare for DME Billing
              </h2>

              <p className="text-gray-700 leading-relaxed">
                Our experienced billing professionals understand the complexity
                of DME billing requirements and payer policies. We ensure
                accurate documentation, eligibility verification, and claim
                submission to maximize reimbursements for DME providers.
              </p>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">
                Frequently Asked Questions
              </h2>

              <div className="space-y-6">

                <div>
                  <h3 className="font-semibold">
                    Why outsource DME billing services?
                  </h3>
                  <p className="text-gray-600">
                    Outsourcing allows DME suppliers to reduce administrative
                    costs while improving billing accuracy and faster claim
                    processing.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold">
                    Do you support multiple insurance payers?
                  </h3>
                  <p className="text-gray-600">
                    Yes. Our team works with Medicare, Medicaid, and commercial
                    insurance payers across the United States.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold">
                    Can you reduce claim denials?
                  </h3>
                  <p className="text-gray-600">
                    Yes. Our denial management specialists analyze claim issues
                    and implement strategies to recover lost revenue.
                  </p>
                </div>

              </div>
            </div>

          </article>

          {/* SIDEBAR */}
          <aside className="space-y-8">

            {/* HELP CARD */}
            <div className="bg-orange-500 text-white p-6 rounded-lg shadow-lg">
              <h3 className="font-semibold mb-3">
                How Can We Help?
              </h3>

              <p className="text-sm mb-4">
                Speak with our experts to learn how SkyKorg HealthCare can
                optimize your DME billing and revenue cycle management.
              </p>

              <Link
                href="/contact"
                className="block bg-black text-white text-center py-2 rounded"
              >
                Schedule Consultation
              </Link>
            </div>

            {/* SPECIALTIES */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold mb-4">
                Related Services
              </h3>

              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/provider-solutions/medical-billing-services">
                    Medical Billing Services
                  </Link>
                </li>

                <li>
                  <Link href="/provider-solutions/prior-authorization-services">
                    Prior Authorization
                  </Link>
                </li>

                <li>
                  <Link href="/provider-solutions/accounts-receivable-management">
                    AR Management
                  </Link>
                </li>
              </ul>
            </div>

          </aside>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange-500 text-white py-14 text-center">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-2xl font-semibold mb-4">
            Ready to Improve Your DME Billing Process?
          </h2>

          <p className="mb-6">
            Partner with SkyKorg HealthCare to streamline billing operations
            and increase reimbursements.
          </p>

          <Link
            href="/contact"
            className="bg-black px-8 py-3 rounded"
          >
            Get Started Today
          </Link>

        </div>
      </section>

    </main>
  );
}