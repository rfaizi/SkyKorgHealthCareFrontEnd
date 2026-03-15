import Image from "next/image"
import Link from "next/link"

export default function ProviderSolutions() {
  return (
    <main>

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
            Healthcare Provider Solutions
          </h1>

          <div className="w-16 h-1 bg-orange-500 mt-4"></div>

          <p className="mt-6 max-w-3xl text-gray-200">
            SkyKorg HealthCare delivers advanced revenue cycle management
            solutions designed to help healthcare providers improve
            operational efficiency, reduce claim denials, and maximize
            reimbursements.
          </p>

        </div>

      </section>


      {/* INTRO */}
      <section className="py-8 bg-gray-50">

        <div className="max-w-7xl mx-auto px-6">

          <p className="text-gray-700 leading-relaxed mb-6">
            Healthcare providers today face growing administrative
            complexity and reimbursement challenges. SkyKorg HealthCare
            offers specialized provider solutions designed to optimize
            revenue cycle performance and streamline billing workflows.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Our experienced medical billing specialists support
            physicians, clinics, hospitals, and healthcare organizations
            with end-to-end billing services including prior
            authorization, coding, claim submission, and accounts
            receivable management.
          </p>

        </div>

      </section>


      {/* SERVICES */}
      <section className="py-8">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-semibold text-gray-900 mb-4">
            Services That We Provide
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">


            {/* CARD */}
            <div className="bg-white p-8 shadow-sm rounded-lg border hover:shadow-lg transition">

              <h3 className="text-xl font-semibold mb-3">
                Prior Authorization
              </h3>

              <p className="text-gray-600 mb-6">
                Our prior authorization experts ensure faster insurance
                approvals and reduce treatment delays for healthcare
                providers.
              </p>

              <Link
                href="/provider-solutions/prior-authorization-services"
                className="text-orange-500 font-semibold"
              >
                Read More →
              </Link>

            </div>


            <div className="bg-white p-8 shadow-sm rounded-lg border hover:shadow-lg transition">

              <h3 className="text-xl font-semibold mb-3">
                Medical Coding & Billing
              </h3>

              <p className="text-gray-600 mb-6">
                Certified coders ensure accurate ICD-10, CPT and HCPCS
                coding to improve claim acceptance rates.
              </p>

              <Link
                href="/provider-solutions/medical-billing-services"
                className="text-orange-500 font-semibold"
              >
                Read More →
              </Link>

            </div>


            <div className="bg-white p-8 shadow-sm rounded-lg border hover:shadow-lg transition">

              <h3 className="text-xl font-semibold mb-3">
                DME Billing Services
              </h3>

              <p className="text-gray-600 mb-6">
                Specialized billing solutions for Durable Medical
                Equipment providers ensuring compliance and faster
                reimbursements.
              </p>

              <Link
                href="/provider-solutions/dme-billing-services"
                className="text-orange-500 font-semibold"
              >
                Read More →
              </Link>

            </div>


            <div className="bg-white p-8 shadow-sm rounded-lg border hover:shadow-lg transition">

              <h3 className="text-xl font-semibold mb-3">
                Accounts Receivable Management
              </h3>

              <p className="text-gray-600 mb-6">
                Proactive AR follow-ups and denial resolution strategies
                help healthcare providers improve cash flow.
              </p>

              <Link
                href="/provider-solutions/accounts-receivable-management"
                className="text-orange-500 font-semibold"
              >
                Read More →
              </Link>

            </div>


            <div className="bg-white p-8 shadow-sm rounded-lg border hover:shadow-lg transition">

              <h3 className="text-xl font-semibold mb-3">
                Patient Collection Services
              </h3>

              <p className="text-gray-600 mb-6">
                Improve revenue recovery with ethical patient collection
                services designed for healthcare providers.
              </p>

              <Link
                href="/provider-solutions/patient-collection-services"
                className="text-orange-500 font-semibold"
              >
                Read More →
              </Link>

            </div>


            <div className="bg-white p-8 shadow-sm rounded-lg border hover:shadow-lg transition">

              <h3 className="text-xl font-semibold mb-3">
                Medical Transcription
              </h3>

              <p className="text-gray-600 mb-6">
                Accurate and secure medical transcription services help
                physicians streamline documentation workflows.
              </p>

              <Link
                href="/provider-solutions/medical-transcription-services"
                className="text-orange-500 font-semibold"
              >
                Read More →
              </Link>

            </div>


          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="bg-orange-500 py-8 text-white">

        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">

          <h3 className="text-lg font-semibold">
            Are you looking for streamlined medical billing assistance?
          </h3>

          <Link
            href="/contact"
            className="bg-black px-6 py-3 rounded mt-4 md:mt-0"
          >
            Request a Demo
          </Link>

        </div>

      </section>

    </main>
  )
}