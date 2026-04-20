"use client";

import { API_URL, ApiEndPoint } from "@/services/ApiEndPoint";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import EnquiryFormSec from "./EnquiryForm";

export default function GetInTouch() {
  return (
    <section className="relative py-12 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/assets/images/contact-bg.jpg"
          alt="Healthcare background"
          fill
          className="object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left Content */}
          <div className="text-white">

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get in <span className="text-orange-500">Touch</span>
            </h2>

            <p className="text-gray-300 leading-relaxed mb-8">
              Let us know about your needs and discover how SkyKorg HealthCare
              can streamline your revenue cycle management operations with
              reliable outsourcing solutions.
            </p>

            <ul className="space-y-3 text-gray-300">
              <li>✔ Medical Billing & Coding</li>
              <li>✔ Prior Authorization Services</li>
              <li>✔ Accounts Receivable Management</li>
              <li>✔ Virtual Medical Assistance</li>
            </ul>

          </div>

          <EnquiryFormSec />

          

        </div>

      </div>

    </section>

  );
}