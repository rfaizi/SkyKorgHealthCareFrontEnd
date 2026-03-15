import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#000e24] border-t border-gray-800">
      <div className="container-custom py-16 grid md:grid-cols-4 gap-10 text-gray-400">
        <div>
          <h3 className="text-white font-bold mb-4">SkyKorg Healthcare</h3>
          <p>SkyKorg HealthCare provides reliable medical billing and Revenue Cycle Management (RCM) services to help healthcare providers streamline operations, improve reimbursements, and focus on quality patient care.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-2">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            {/* <li><Link href="">Careers</Link></li>
            <li><Link href="">News</Link></li> */}
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Services</h4>
          <ul className="space-y-2">
            <li><Link href="/provider-solutions">Provider Solutions</Link></li>
            <li><Link href="/payer-solutions">Payer Solutions</Link></li>
            <li><Link href="/provider-solutions/dme-billing-services">DME Billing</Link></li>
            <li><Link href="/provider-solutions/prior-authorization-services">Prior Auth</Link></li>
            <li><Link href="/compliance">Compliance</Link></li>
            {/* <li><Link href="">Resources</Link></li> */}
            
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <p><Link href="mailto:info@skykorghealthcare.com">info@skykorghealthcare.com</Link></p>
        </div>
      </div>
      <div className="text-center py-6 text-gray-600 border-t border-gray-800">
        © 2026 SkyKorg Healthcare. All rights reserved.
      </div>
    </footer>
  );
}
