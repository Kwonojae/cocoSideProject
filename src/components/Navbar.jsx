import React, { useState } from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { PiCakeLight, PiArmchairLight } from "react-icons/pi";
import { TfiFaceSmile } from "react-icons/tfi";
import { Link } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const dessertItems = [
  { label: "OveralRanking", path: "undevelop" },
  { label: "Cake", path: "undevelop" },
  { label: "Cookie", path: "undevelop" },
  { label: "Ice", path: "undevelop" },
  { label: "Bakery", path: "undevelop" },
];
const interiorItems = [
  { label: "OveralRanking", path: "undevelop" },
  { label: "Classic", path: "undevelop" },
  { label: "Modern", path: "undevelop" },
  { label: "Vintage", path: "undevelop" },
  { label: "Industry", path: "undevelop" },
];
const NAVBUTTON =
  "inline-flex w-full justify-center gap-x-1.5 rounded-md  px-3 py-2 text-md font-semibold text-gray-900 hover:underline hover:decoration-2 transition-all ";
const DROPDOWNITEM =
  "absolute -left-5 z-10 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none";
export default function Navbar() {
  return (
    <nav className="flex flex-grow-0 mb-2 w-11/12">
      <Link
        className="inline-flex items-center justify-center gap-x-1.5 rounded-md  pr-2 py-2 text-md font-semibold text-gray-900 hover:underline hover:decoration-2"
        to="introduction"
      >
        <TfiFaceSmile className="text-xl" />
        Introduction
      </Link>
      {/* Dessert */}
      <Menu as="div" className="relative inline-block text-center ">
        <div>
          <Menu.Button className={NAVBUTTON}>
            <PiCakeLight className="text-2xl" />
            Dessert
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className={DROPDOWNITEM}>
            <div className="py-1">
              {dessertItems.map((item, index) => (
                <Menu.Item key={index}>
                  {({ active }) => (
                    <Link
                      to={`/${item.path.toLowerCase()}`}
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      {item.label}
                    </Link>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
      {/* Interior */}
      <Menu as="div" className="relative inline-block text-center ">
        <div>
          <Menu.Button className={NAVBUTTON}>
            <PiArmchairLight className="text-2xl" />
            Interior
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className={DROPDOWNITEM}>
            <div className="py-1">
              {interiorItems.map((item, index) => (
                <Menu.Item key={index}>
                  {({ active }) => (
                    <Link
                      to={`/${item.path.toLowerCase()}`}
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      {item.label}
                    </Link>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </nav>
  );
}
