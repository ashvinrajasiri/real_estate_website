"use client";
import React, { useState, useEffect } from "react";
import "../../../../app/style/index.css";
import Link from "next/link";

export default function Calculator() {
  const [homePrice, setHomePrice] = useState(500000);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [interestRate, setInterestRate] = useState(6.0);
  const [loanTerm, setLoanTerm] = useState(30);

  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [downPaymentAmount, setDownPaymentAmount] = useState(0);
  const [loanAmount, setLoanAmount] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);

  useEffect(() => {
    calculateMortgage();
  }, [homePrice, downPaymentPercent, interestRate, loanTerm]);

  const calculateMortgage = () => {
    const downPayment = (homePrice * downPaymentPercent) / 100;
    const principal = homePrice - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;

    if (monthlyRate === 0) {
      // If interest rate is 0, simple division
      const payment = principal / numberOfPayments;
      setMonthlyPayment(payment);
      setDownPaymentAmount(downPayment);
      setLoanAmount(principal);
      setTotalInterest(0);
    } else {
      // Standard mortgage formula: M = P[r(1+r)^n]/[(1+r)^n-1]
      const payment =
        principal *
        (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
        (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

      const totalPaid = payment * numberOfPayments;
      const interest = totalPaid - principal;

      setMonthlyPayment(payment);
      setDownPaymentAmount(downPayment);
      setLoanAmount(principal);
      setTotalInterest(interest);
    }
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-CA", {
      style: "currency",
      currency: "CAD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <section className="dark:bg-darkmode">
      <div
        className="container px-4 lg:max-w-screen-xl md:max-w-screen-md mx-auto flex flex-col lg:flex-row gap-16 justify-between items-center"
        data-aos="fade-left"
      >
        <div className="max-w-37.5 px-0 mb-8 md:mb-0" data-aos="fade-right">
          <h2
            className="text-4xl mb-4 font-bold text-midnight_text dark:text-white"
            data-aos="fade-left"
          >
            Mortgage Calculator
          </h2>
          <p className="text-xl text-gray mb-12" data-aos="fade-left">
            Estimate your monthly mortgage payments and understand what you can afford. Get a clear picture of your home buying budget.
          </p>
          <div className="relative-container">
            <div className="main-div mb-16 pt-8">
              <div className="space-y-6">
                <div
                  className="bg-primary/10 p-6 rounded-lg"
                  data-aos="fade-left"
                  data-aos-delay="100"
                >
                  <p className="text-2xl font-bold text-midnight_text dark:text-white mb-2">
                    {formatCurrency(monthlyPayment)}
                  </p>
                  <p className="text-gray text-base">Monthly Payment</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div
                    className="bg-gray/10 p-4 rounded-lg"
                    data-aos="fade-left"
                    data-aos-delay="200"
                  >
                    <p className="text-lg font-semibold text-midnight_text dark:text-white">
                      {formatCurrency(downPaymentAmount)}
                    </p>
                    <p className="text-gray text-sm">Down Payment</p>
                  </div>
                  <div
                    className="bg-gray/10 p-4 rounded-lg"
                    data-aos="fade-left"
                    data-aos-delay="300"
                  >
                    <p className="text-lg font-semibold text-midnight_text dark:text-white">
                      {formatCurrency(loanAmount)}
                    </p>
                    <p className="text-gray text-sm">Loan Amount</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="fade-up">
            <Link
              href="/contact"
              className="text-xl bg-primary py-3 px-8 text-white rounded-lg me-3 mb-2 border border-primary hover:bg-blue-700"
            >
              Get Pre-Qualified
            </Link>
            <Link
              href="/properties/properties-list"
              className="text-xl hover:bg-primary hover:text-white py-3 px-8 text-primary border border-primary rounded-lg me-3 mb-2"
            >
              View Homes
            </Link>
          </div>
        </div>
        <div className="lg:w-auto w-full" data-aos="fade-right">
          <div className="bg-primary rounded-t-lg p-8 w-full">
            <p className="text-3xl text-white mb-6 font-bold flex items-center justify-center">
              Mortgage Calculator
            </p>

            {/* Home Price Slider */}
            <div className="mb-6">
              <label className="text-white font-semibold mb-2 block">
                Home Price
              </label>
              <p className="text-white text-2xl font-bold mb-3">
                {formatCurrency(homePrice)}
              </p>
              <input
                type="range"
                min="100000"
                max="5000000"
                step="10000"
                value={homePrice}
                onChange={(e) => setHomePrice(Number(e.target.value))}
                className="w-full h-2 bg-blue-800 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-sm text-white mt-2">
                <p>$100K</p>
                <p>$5M</p>
              </div>
            </div>

            {/* Down Payment */}
            <div className="mb-6">
              <label className="text-white font-semibold mb-2 block">
                Down Payment: {downPaymentPercent}%
              </label>
              <input
                type="range"
                min="5"
                max="50"
                step="5"
                value={downPaymentPercent}
                onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                className="w-full h-2 bg-blue-800 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-sm text-white mt-2">
                <p>5%</p>
                <p>50%</p>
              </div>
            </div>

            {/* Interest Rate */}
            <div className="mb-6">
              <label className="text-white font-semibold mb-2 block">
                Interest Rate
              </label>
              <input
                type="number"
                min="0"
                max="15"
                step="0.1"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full px-4 py-2 rounded-lg text-midnight_text font-semibold focus:outline-none focus:ring-2 focus:ring-cyan"
              />
            </div>

            {/* Loan Term */}
            <div className="mb-6">
              <label className="text-white font-semibold mb-2 block">
                Loan Term (Years)
              </label>
              <select
                value={loanTerm}
                onChange={(e) => setLoanTerm(Number(e.target.value))}
                className="w-full px-4 py-2 rounded-lg text-midnight_text font-semibold focus:outline-none focus:ring-2 focus:ring-cyan"
              >
                <option value={15}>15 Years</option>
                <option value={20}>20 Years</option>
                <option value={25}>25 Years</option>
                <option value={30}>30 Years</option>
              </select>
            </div>

            {/* Total Interest */}
            <div className="bg-blue-800 p-4 rounded-lg">
              <p className="text-white text-sm opacity-70 mb-1">Total Interest Paid</p>
              <p className="text-white text-xl font-bold">{formatCurrency(totalInterest)}</p>
            </div>
          </div>
          <div className="p-4 bg-blue-700 text-white text-xl rounded-b-lg">
            <p className="text-center mb-1 opacity-70">Have Questions?</p>
            <Link
              href={"tel:4167042827"}
              className="text-center font-bold inline-block w-full"
            >
              <span className="opacity-70 !font-normal">Call us : </span>416-704-2827
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
