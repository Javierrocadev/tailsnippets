import { useParams } from "@remix-run/react";
import React, { useState } from "react";
import { TbCopy, TbCode, TbArrowBigLeftLinesFilled } from "react-icons/tb";

const datos = [
  {
    id: "1",
    nombre: "Avatar Card",
    html: `
    <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white dark:bg-gray-800 dark:text-white">
    <img class="w-full" src="https://live.staticflickr.com/65535/53542155962_50c394b197_c.jpg" alt="Avatar" />
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">Usuario</div>
      <p class="text-gray-700 dark:text-gray-300 text-base">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
      </p>
    </div>
    <div class="px-6 pt-4 pb-2">
      <span class="inline-block bg-gray-200 dark:bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-white mr-2">#ux</span>
      <span class="inline-block bg-gray-200 dark:bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-white mr-2">#ui</span>
      <span class="inline-block bg-gray-200 dark:bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-white">#web</span>
    </div>
  </div>
  `,
  },
  {
    id: "2",
    nombre: "Componente 2",
    html: `
    <section class="flex items-center justify-center p-4">
  <div class="grid max-w-[80em] grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
    <div class="group duration-300 ml-auto mr-auto w-full rounded-xl border bg-blue-50 px-12 py-4 md:px-4">
      <img src="https://live.staticflickr.com/65535/53542155962_50c394b197_c.jpg" class="mb-6 inline-flex aspect-video w-full items-center justify-center rounded-xl bg-white object-cover text-center text-slate-500 shadow-lg group-hover:rotate-2 duration-300" />
      <h3 class="mb-2 text-3xl font-semibold leading-8">Website example</h3>
      <p class="mb-4 mt-4 text-lg font-light leading-relaxed text-slate-600">A comprehensive platform designed to inspire and facilitate travel enthusiasts.</p>
      <div class="block pb-6"><span class="mr-2 mt-2 inline-block rounded-full bg-white px-2 py-1 text-xs font-semibold text-slate-500 last:mr-0">React</span><span class="mr-2 mt-2 inline-block rounded-full bg-white px-2 py-1 text-xs font-semibold text-slate-500 last:mr-0">HTML</span><span class="mr-2 mt-2 inline-block rounded-full bg-white px-2 py-1 text-xs font-semibold text-slate-500 last:mr-0">Git</span><span class="mr-2 mt-2 inline-block rounded-full bg-white px-2 py-1 text-xs font-semibold text-slate-500 last:mr-0">UI</span><span class="mr-2 mt-2 inline-block rounded-full bg-white px-2 py-1 text-xs font-semibold text-slate-500 last:mr-0">Tailwind</span><span class="mr-2 mt-2 inline-block rounded-full bg-white px-2 py-1 text-xs font-semibold text-slate-500 last:mr-0">Login</span></div>
      <a class="group inline-flex items-center gap-2 font-bold text-slate-700 transition-all duration-300 ease-linear hover:text-blue-500" href="/learning-lab/tailwind-starter-kit/documentation/css/alerts"
        >Website <svg class="h-4 w-4 -rotate-45 duration-300 group-hover:rotate-0 group-hover:fill-blue-600" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m2.009 12.002c0-5.517 4.48-9.997 9.998-9.997s9.998 4.48 9.998 9.997c0 5.518-4.48 9.998-9.998 9.998s-9.998-4.48-9.998-9.998zm8.211-4.843c-.141-.108-.3-.157-.456-.157-.389 0-.755.306-.755.749v8.501c0 .445.367.75.755.75.157 0 .316-.05.457-.159 1.554-1.203 4.199-3.252 5.498-4.258.184-.142.29-.36.29-.592 0-.23-.107-.449-.291-.591z" fill-rule="nonzero" /></svg
      ></a>
    </div>
    <div class="group duration-300 ml-auto mr-auto w-full rounded-xl border bg-blue-50 px-12 py-4 md:px-4">
      <img src="https://live.staticflickr.com/65535/53542155962_50c394b197_c.jpg" class="mb-6 inline-flex aspect-video w-full items-center justify-center rounded-xl bg-white object-cover text-center text-slate-500 shadow-lg group-hover:rotate-2 duration-300" />
      <h3 class="mb-2 text-3xl font-semibold leading-8">Website example</h3>
      <p class="mb-4 mt-4 text-lg font-light leading-relaxed text-slate-600">A comprehensive platform designed to inspire and facilitate travel enthusiasts.</p>
      <div class="block pb-6"><span class="mr-2 mt-2 inline-block rounded-full bg-white px-2 py-1 text-xs font-semibold text-slate-500 last:mr-0">React</span><span class="mr-2 mt-2 inline-block rounded-full bg-white px-2 py-1 text-xs font-semibold text-slate-500 last:mr-0">HTML</span><span class="mr-2 mt-2 inline-block rounded-full bg-white px-2 py-1 text-xs font-semibold text-slate-500 last:mr-0">Git</span><span class="mr-2 mt-2 inline-block rounded-full bg-white px-2 py-1 text-xs font-semibold text-slate-500 last:mr-0">UI</span><span class="mr-2 mt-2 inline-block rounded-full bg-white px-2 py-1 text-xs font-semibold text-slate-500 last:mr-0">Tailwind</span><span class="mr-2 mt-2 inline-block rounded-full bg-white px-2 py-1 text-xs font-semibold text-slate-500 last:mr-0">Login</span></div>
      <a class="group inline-flex items-center gap-2 font-bold text-slate-700 transition-all duration-300 ease-linear hover:text-blue-500" href="/learning-lab/tailwind-starter-kit/documentation/css/alerts"
        >Website <svg class="h-4 w-4 -rotate-45 duration-300 group-hover:rotate-0 group-hover:fill-blue-600" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m2.009 12.002c0-5.517 4.48-9.997 9.998-9.997s9.998 4.48 9.998 9.997c0 5.518-4.48 9.998-9.998 9.998s-9.998-4.48-9.998-9.998zm8.211-4.843c-.141-.108-.3-.157-.456-.157-.389 0-.755.306-.755.749v8.501c0 .445.367.75.755.75.157 0 .316-.05.457-.159 1.554-1.203 4.199-3.252 5.498-4.258.184-.142.29-.36.29-.592 0-.23-.107-.449-.291-.591z" fill-rule="nonzero" /></svg
      ></a>
    </div>
    <div class="group duration-300 ml-auto mr-auto w-full rounded-xl border bg-blue-50 px-12 py-4 md:px-4">
      <img src="https://live.staticflickr.com/65535/53542155962_50c394b197_c.jpg" class="mb-6 inline-flex aspect-video w-full items-center justify-center rounded-xl bg-white object-cover text-center text-slate-500 shadow-lg group-hover:rotate-2 duration-300" />
      <h3 class="mb-2 text-3xl font-semibold leading-8">Website example</h3>
      <p class="mb-4 mt-4 text-lg font-light leading-relaxed text-slate-600">A comprehensive platform designed to inspire and facilitate travel enthusiasts.</p>
      <div class="block pb-6"><span class="mr-2 mt-2 inline-block rounded-full bg-white px-2 py-1 text-xs font-semibold text-slate-500 last:mr-0">React</span><span class="mr-2 mt-2 inline-block rounded-full bg-white px-2 py-1 text-xs font-semibold text-slate-500 last:mr-0">HTML</span><span class="mr-2 mt-2 inline-block rounded-full bg-white px-2 py-1 text-xs font-semibold text-slate-500 last:mr-0">Git</span><span class="mr-2 mt-2 inline-block rounded-full bg-white px-2 py-1 text-xs font-semibold text-slate-500 last:mr-0">UI</span><span class="mr-2 mt-2 inline-block rounded-full bg-white px-2 py-1 text-xs font-semibold text-slate-500 last:mr-0">Tailwind</span><span class="mr-2 mt-2 inline-block rounded-full bg-white px-2 py-1 text-xs font-semibold text-slate-500 last:mr-0">Login</span></div>
      <a class="group inline-flex items-center gap-2 font-bold text-slate-700 transition-all duration-300 ease-linear hover:text-blue-500" href="/learning-lab/tailwind-starter-kit/documentation/css/alerts"
        >Website <svg class="h-4 w-4 -rotate-45 duration-300 group-hover:rotate-0 group-hover:fill-blue-600" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m2.009 12.002c0-5.517 4.48-9.997 9.998-9.997s9.998 4.48 9.998 9.997c0 5.518-4.48 9.998-9.998 9.998s-9.998-4.48-9.998-9.998zm8.211-4.843c-.141-.108-.3-.157-.456-.157-.389 0-.755.306-.755.749v8.501c0 .445.367.75.755.75.157 0 .316-.05.457-.159 1.554-1.203 4.199-3.252 5.498-4.258.184-.142.29-.36.29-.592 0-.23-.107-.449-.291-.591z" fill-rule="nonzero" /></svg
      ></a>
    </div>
    <div class="group duration-300 ml-auto mr-auto w-full rounded-xl border bg-blue-50 px-12 py-4 md:px-4">
      <img src="https://live.staticflickr.com/65535/53542155962_50c394b197_c.jpg" class="mb-6 inline-flex aspect-video w-full items-center justify-center rounded-xl bg-white object-cover text-center text-slate-500 shadow-lg group-hover:rotate-2 duration-300" />
      <h3 class="mb-2 text-3xl font-semibold leading-8">Website example</h3>
      <p class="mb-4 mt-4 text-lg font-light leading-relaxed text-slate-600">A comprehensive platform designed to inspire and facilitate travel enthusiasts.</p>
      <div class="block pb-6"><span class="mr-2 mt-2 inline-block rounded-full bg-white px-2 py-1 text-xs font-semibold text-slate-500 last:mr-0">React</span><span class="mr-2 mt-2 inline-block rounded-full bg-white px-2 py-1 text-xs font-semibold text-slate-500 last:mr-0">HTML</span><span class="mr-2 mt-2 inline-block rounded-full bg-white px-2 py-1 text-xs font-semibold text-slate-500 last:mr-0">Git</span><span class="mr-2 mt-2 inline-block rounded-full bg-white px-2 py-1 text-xs font-semibold text-slate-500 last:mr-0">UI</span><span class="mr-2 mt-2 inline-block rounded-full bg-white px-2 py-1 text-xs font-semibold text-slate-500 last:mr-0">Tailwind</span><span class="mr-2 mt-2 inline-block rounded-full bg-white px-2 py-1 text-xs font-semibold text-slate-500 last:mr-0">Login</span></div>
      <a class="group inline-flex items-center gap-2 font-bold text-slate-700 transition-all duration-300 ease-linear hover:text-blue-500" href="/learning-lab/tailwind-starter-kit/documentation/css/alerts"
        >Website <svg class="h-4 w-4 -rotate-45 duration-300 group-hover:rotate-0 group-hover:fill-blue-600" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m2.009 12.002c0-5.517 4.48-9.997 9.998-9.997s9.998 4.48 9.998 9.997c0 5.518-4.48 9.998-9.998 9.998s-9.998-4.48-9.998-9.998zm8.211-4.843c-.141-.108-.3-.157-.456-.157-.389 0-.755.306-.755.749v8.501c0 .445.367.75.755.75.157 0 .316-.05.457-.159 1.554-1.203 4.199-3.252 5.498-4.258.184-.142.29-.36.29-.592 0-.23-.107-.449-.291-.591z" fill-rule="nonzero" /></svg
      ></a>
    </div>
    <div class="group duration-300 ml-auto mr-auto w-full rounded-xl border bg-blue-50 px-12 py-4 md:px-4">
      <img src="https://live.staticflickr.com/65535/53542155962_50c394b197_c.jpg" class="mb-6 inline-flex aspect-video w-full items-center justify-center rounded-xl bg-white object-cover text-center text-slate-500 shadow-lg group-hover:rotate-2 duration-300" />
      <h3 class="mb-2 text-3xl font-semibold leading-8">Website example</h3>
      <p class="mb-4 mt-4 text-lg font-light leading-relaxed text-slate-600">A comprehensive platform designed to inspire and facilitate travel enthusiasts.</p>
      <div class="block pb-6"><span class="mr-2 mt-2 inline-block rounded-full bg-white px-2 py-1 text-xs font-semibold text-slate-500 last:mr-0">React</span><span class="mr-2 mt-2 inline-block rounded-full bg-white px-2 py-1 text-xs font-semibold text-slate-500 last:mr-0">HTML</span><span class="mr-2 mt-2 inline-block rounded-full bg-white px-2 py-1 text-xs font-semibold text-slate-500 last:mr-0">Git</span><span class="mr-2 mt-2 inline-block rounded-full bg-white px-2 py-1 text-xs font-semibold text-slate-500 last:mr-0">UI</span><span class="mr-2 mt-2 inline-block rounded-full bg-white px-2 py-1 text-xs font-semibold text-slate-500 last:mr-0">Tailwind</span><span class="mr-2 mt-2 inline-block rounded-full bg-white px-2 py-1 text-xs font-semibold text-slate-500 last:mr-0">Login</span></div>
      <a class="group inline-flex items-center gap-2 font-bold text-slate-700 transition-all duration-300 ease-linear hover:text-blue-500" href="/learning-lab/tailwind-starter-kit/documentation/css/alerts"
        >Website <svg class="h-4 w-4 -rotate-45 duration-300 group-hover:rotate-0 group-hover:fill-blue-600" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m2.009 12.002c0-5.517 4.48-9.997 9.998-9.997s9.998 4.48 9.998 9.997c0 5.518-4.48 9.998-9.998 9.998s-9.998-4.48-9.998-9.998zm8.211-4.843c-.141-.108-.3-.157-.456-.157-.389 0-.755.306-.755.749v8.501c0 .445.367.75.755.75.157 0 .316-.05.457-.159 1.554-1.203 4.199-3.252 5.498-4.258.184-.142.29-.36.29-.592 0-.23-.107-.449-.291-.591z" fill-rule="nonzero" /></svg
      ></a>
    </div>
    <div class="group duration-300 ml-auto mr-auto w-full rounded-xl border bg-blue-50 px-12 py-4 md:px-4">
      <img src="https://live.staticflickr.com/65535/53542155962_50c394b197_c.jpg" class="mb-6 inline-flex aspect-video w-full items-center justify-center rounded-xl bg-white object-cover text-center text-slate-500 shadow-lg group-hover:rotate-2 duration-300" />
      <h3 class="mb-2 text-3xl font-semibold leading-8">Website example</h3>
      <p class="mb-4 mt-4 text-lg font-light leading-relaxed text-slate-600">A comprehensive platform designed to inspire and facilitate travel enthusiasts.</p>
      <div class="block pb-6"><span class="mr-2 mt-2 inline-block rounded-full bg-white px-2 py-1 text-xs font-semibold text-slate-500 last:mr-0">React</span><span class="mr-2 mt-2 inline-block rounded-full bg-white px-2 py-1 text-xs font-semibold text-slate-500 last:mr-0">HTML</span><span class="mr-2 mt-2 inline-block rounded-full bg-white px-2 py-1 text-xs font-semibold text-slate-500 last:mr-0">Git</span><span class="mr-2 mt-2 inline-block rounded-full bg-white px-2 py-1 text-xs font-semibold text-slate-500 last:mr-0">UI</span><span class="mr-2 mt-2 inline-block rounded-full bg-white px-2 py-1 text-xs font-semibold text-slate-500 last:mr-0">Tailwind</span><span class="mr-2 mt-2 inline-block rounded-full bg-white px-2 py-1 text-xs font-semibold text-slate-500 last:mr-0">Login</span></div>
      <a class="group inline-flex items-center gap-2 font-bold text-slate-700 transition-all duration-300 ease-linear hover:text-blue-500" href="/learning-lab/tailwind-starter-kit/documentation/css/alerts"
        >Website <svg class="h-4 w-4 -rotate-45 duration-300 group-hover:rotate-0 group-hover:fill-blue-600" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m2.009 12.002c0-5.517 4.48-9.997 9.998-9.997s9.998 4.48 9.998 9.997c0 5.518-4.48 9.998-9.998 9.998s-9.998-4.48-9.998-9.998zm8.211-4.843c-.141-.108-.3-.157-.456-.157-.389 0-.755.306-.755.749v8.501c0 .445.367.75.755.75.157 0 .316-.05.457-.159 1.554-1.203 4.199-3.252 5.498-4.258.184-.142.29-.36.29-.592 0-.23-.107-.449-.291-.591z" fill-rule="nonzero" /></svg
      ></a>
    </div>
  </div>
</section>
    `,
  },
  {
    id: "3",
    nombre: "Card skeleton",
    html: `  <div class="mx-auto flex w-96 flex-col justify-center bg-white dark:bg-slate-800 rounded-2xl shadow-xl">
    <img class="aspect-video w-96 rounded-t-2xl object-cover object-center" src="https://live.staticflickr.com/65535/53542155962_50c394b197_c.jpg" />
    <div class="p-4">
      <p class="text-blue-400 text-xs">Web developer</small>
      <h1 class="text-2xl font-medium text-slate-600 pb-1">Javier Roca</h1>
      <p class="text-sm tracking-tight font-light text-slate-400">Building the future one web at a time</p>
    </div>
  </div>`,
  },
  {
    id: "4",
    nombre: "Group card",
    html: `
    <section class="p-12">
    <div class="flex items-center justify-center">
      <div class="mx-auto max-w-6xl rounded-xl bg-blue-100/20 p-6 text-gray-500 dark:bg-slate-200">
        <div class="relative">
          <div class="relative z-10 grid grid-cols-6 gap-3 rounded">
            <div class="relative col-span-full flex justify-center overflow-hidden rounded-xl border border-blue-400 bg-white p-4 duration-300 hover:rotate-1 lg:col-span-2 dark:border-blue-50 dark:bg-slate-600">
              <div>
                <div class="flex items-center justify-center pt-6 lg:px-6">
                  <svg class="h-20 w-20 dark:fill-slate-200" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m2.699 20c-.411 0-.699-.312-.699-.662 0-.249.145-.516.497-.703 1.788-.947 3.858-4.226 3.858-6.248-3.016.092-4.326-2.582-4.326-4.258 0-2.006 1.738-4.129 4.308-4.129 3.241 0 4.83 2.547 4.83 5.307 0 5.981-6.834 10.693-8.468 10.693zm10.833 0c-.41 0-.699-.312-.699-.662 0-.249.145-.516.497-.703 1.788-.947 3.858-4.226 3.858-6.248-3.015.092-4.326-2.582-4.326-4.258 0-2.006 1.739-4.129 4.308-4.129 3.241 0 4.83 2.547 4.83 5.307 0 5.981-6.833 10.693-8.468 10.693z" fill-rule="nonzero" /></svg>
                </div>
                <div class="relative z-10 mt-6 space-y-2 text-center">
                  <h2 class="group-hover:text-secondary-950 text-lg font-medium text-gray-800 transition dark:text-white">This is a quote</h2>
                  <p class="text-gray-700 dark:text-gray-300">"Life is like a box of chocolates; you never know what you're gonna get." - Forrest Gump</p>
                </div>
              </div>
            </div>
            <div class="relative col-span-full overflow-hidden rounded-xl border border-blue-400 bg-white p-4 duration-300 hover:rotate-1 sm:col-span-3 lg:col-span-2 dark:border-blue-50 dark:bg-slate-600">
              <div>
                <div class="flex items-center justify-center pt-6 lg:px-6">
                  <svg class="h-20 w-20 dark:fill-slate-200" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m19.023 7c-.389 0-3.3 1-7.023 1-3.75 0-6.605-1-7.024-1-.538 0-.976.438-.976.976 0 .453.321.854.757.951 2.162.563 4.571.948 4.571 3.132 0 3.565-2.321 6.899-3.26 8.476-.086.149-.131.319-.131.489 0 .539.438.976.977.976.261 0 .508-.103.694-.29.769-.772 2.292-3.072 2.989-4.182.391-.622.791-1.18 1.409-1.181.603.001 1.005.559 1.397 1.181.697 1.11 2.219 3.41 2.988 4.182.185.187.432.29.695.29.538 0 .976-.437.976-.976 0-.17-.045-.339-.141-.505-.962-1.617-3.25-4.891-3.25-8.46 0-2.309 2.751-2.661 4.563-3.13.443-.099.766-.5.766-.953 0-.538-.439-.976-.977-.976zm-7-5c1.374 0 2.488 1.12 2.488 2.5s-1.114 2.5-2.488 2.5c-1.373 0-2.489-1.12-2.489-2.5s1.116-2.5 2.489-2.5z" fill-rule="nonzero" /></svg>
                </div>
                <div class="relative z-10 mt-6 space-y-2 text-center">
                  <h2 class="group-hover:text-secondary-950 text-lg font-medium text-gray-800 transition dark:text-white">This is a person</h2>
                  <p class="text-gray-700 dark:text-gray-300">The human embodiment of chaos theory, where every step is a dance with disaster and every word a comedy goldmine.</p>
                </div>
              </div>
            </div>
            <div class="relative col-span-full overflow-hidden rounded-xl border border-blue-400 bg-white p-4 duration-300 hover:rotate-1 sm:col-span-3 lg:col-span-2 dark:border-blue-50 dark:bg-slate-600">
              <div>
                <div class="flex items-center justify-center pt-6 lg:px-6">
                  <svg class="h-20 w-20 dark:fill-slate-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M1.004 5.998l10.996-5.998 10.99 6.06-10.985 5.86-11.001-5.922zm11.996 7.675v10.327l10-5.362v-10.326l-10 5.361zm-2 0l-10-5.411v10.376l10 5.362v-10.327z" /></svg>
                </div>
                <div class="relative z-10 mt-6 space-y-2 text-center">
                  <h2 class="group-hover:text-secondary-950 text-lg font-medium text-gray-800 transition dark:text-white">This is a box</h2>
                  <p class="text-gray-700 dark:text-gray-300">Introducing the marvelous "Box-o-Fun" – the ultimate treasure trove of surprises wrapped up in cardboard!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
 `,
  },
  {
    id: "5",
    nombre: "Skeleton card",
    html: `
    <div class="mx-auto px-5">
    <div class="max-w-xs cursor-pointer rounded-lg bg-white p-2 shadow duration-150 dark:bg-gray-800">
      <img class="mb-2 h-40 w-full rounded-lg bg-gray-300 object-cover object-center dark:bg-gray-500" src="https://live.staticflickr.com/65535/53542155962_50c394b197_c.jpg" alt="img" />
      <p class="text-xl text-gray-900 dark:text-gray-500">Javier Roca</p>
      <p class="text-xs italic text-gray-300 dark:text-gray-500">Web developer</p>
    </div>
  </div>
 `,
  },
  {
    id: "100",
    nombre: "Wave button",
    html: `
    <button class="relative border hover:border-sky-600 duration-500 group cursor-pointer text-sky-50  overflow-hidden h-14 w-56 rounded-md bg-sky-800 p-2 flex justify-center items-center font-extrabold">
    <div class="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-900 delay-150 group-hover:delay-75"></div>
    <div class="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-800 delay-150 group-hover:delay-100"></div>
    <div class="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-700 delay-150 group-hover:delay-150"></div>
    <div class="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-600 delay-150 group-hover:delay-200"></div>
    <div class="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-500 delay-150 group-hover:delay-300"></div>
    <p class="z-10">Discover More</p>
  </button>
  
  
 `,
  },
  {
    id: "101",
    nombre: "Blur button",
    html: `

    <button class="group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-rose-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-rose-300 relative bg-neutral-800 h-16 w-64 border text-left p-3 text-gray-50 text-base font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg">
    See more
  </button>  
 `,
  },
  {
    id: "99999",
    nombre: "Componente 3",
    html: `<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto"></div>`,
  },
];

function ComponentsComponentId() {
  const { componentId } = useParams();
  const [showCode, setShowCode] = useState(false);
  // Encontrar el componente según el ID
  const componente = datos.find((item) => item.id === componentId);

  // Verificar si se encontró el componente
  if (!componente) {
    return <div>No se encontró el componente con el ID {componentId}</div>;
  }

  const copyHTMLToClipboard = () => {
    const htmlToCopy = componente.html;
    navigator.clipboard
      .writeText(htmlToCopy)
      .then(() => {
        alert("HTML copiado al portapapeles");
      })
      .catch((error) => {
        console.error("Error al copiar HTML al portapapeles:", error);
        alert("Error al copiar HTML al portapapeles");
      });
  };

  const Splitter = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const firstHalfRef = React.useRef<HTMLDivElement>(null);
    const secondHalfRef = React.useRef<HTMLDivElement>(null);
    const resizerRef = React.useRef<HTMLDivElement>(null);

    const handleMouseDown = React.useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        const startPos = {
          x: e.clientX,
          y: e.clientY,
        };
        const currentLeftWidth =
          firstHalfRef.current!.getBoundingClientRect().width;

        const handleMouseMove = (e: MouseEvent) => {
          const dx = e.clientX - startPos.x;
          const dy = e.clientY - startPos.y;
          updateWidth(currentLeftWidth, dx);
          updateCursor();
        };

        const handleMouseUp = () => {
          document.removeEventListener("mousemove", handleMouseMove);
          document.removeEventListener("mouseup", handleMouseUp);
          resetCursor();
        };

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
      },
      []
    );

    const handleTouchStart = React.useCallback(
      (e: React.TouchEvent<HTMLDivElement>) => {
        const touch = e.touches[0];
        const startPos = {
          x: touch.clientX,
          y: touch.clientY,
        };
        const currentLeftWidth =
          firstHalfRef.current!.getBoundingClientRect().width;

        const handleTouchMove = (e: TouchEvent) => {
          const touch = e.touches[0];
          const dx = touch.clientX - startPos.x;
          const dy = touch.clientY - startPos.y;
          updateWidth(currentLeftWidth, dx);
          updateCursor();
        };

        const handleTouchEnd = () => {
          document.removeEventListener("touchmove", handleTouchMove);
          document.removeEventListener("touchend", handleTouchEnd);
          resetCursor();
        };

        document.addEventListener("touchmove", handleTouchMove);
        document.addEventListener("touchend", handleTouchEnd);
      },
      []
    );

    const updateWidth = (currentLeftWidth: number, dx: number) => {
      const container = containerRef.current!;
      const firstHalfEle = firstHalfRef.current!;

      if (!container || !firstHalfEle) {
        return;
      }

      const containerWidth = container.getBoundingClientRect().width;
      const delta = currentLeftWidth + dx;
      const newFirstHalfWidth = (delta * 100) / containerWidth;
      firstHalfEle.style.width = `${newFirstHalfWidth}%`;
    };

    const updateCursor = () => {
      const container = containerRef.current!;
      const firstHalfEle = firstHalfRef.current!;
      const resizerEle = resizerRef.current!;
      const secondHalfEle = secondHalfRef.current!;

      if (!container || !firstHalfEle || !resizerEle || !secondHalfEle) {
        return;
      }

      resizerEle.style.cursor = "ew-resize";
      document.body.style.cursor = "ew-resize";
      firstHalfEle.style.userSelect = "none";
      firstHalfEle.style.pointerEvents = "none";
      secondHalfEle.style.userSelect = "none";
      secondHalfEle.style.pointerEvents = "none";
    };

    const resetCursor = () => {
      const container = containerRef.current!;
      const firstHalfEle = firstHalfRef.current!;
      const resizerEle = resizerRef.current!;
      const secondHalfEle = secondHalfRef.current!;

      if (!container || !firstHalfEle || !resizerEle || !secondHalfEle) {
        return;
      }

      resizerEle.style.removeProperty("cursor");
      document.body.style.removeProperty("cursor");
      firstHalfEle.style.removeProperty("user-select");
      firstHalfEle.style.removeProperty("pointer-events");
      secondHalfEle.style.removeProperty("user-select");
      secondHalfEle.style.removeProperty("pointer-events");
    };

    return (
      // <div className="splitter" ref={containerRef}>
      //   <div className="splitter__first" ref={firstHalfRef}>
      //   {showCode ? (
      //     <p>
      //     <pre className=" bg-blue-500"><code  className="flex flex-wrap bg-red-500 shrink-1">
      //       {componente.html}

      //     </code></pre>
      //     {/* <p>hoam lasdlf asdof asdfja sdfa sdflasd fasldhfoentnoea f lalfa dfadpaosdnfalsd ofoosdf aetañelrt añsdlfnañsoldfj aerudlfhalksedjsrh aldf vadyfjpaoeurhfñadl odt ag </p> */}
      //     </p>
      //   ) : (
      //   <iframe

      //       title={`Componente ${componente.id}`}
      //       // className="bg-red-500"
      //       // srcDoc={componente.html}
      //       srcDoc={`<!DOCTYPE html>
      //       <html>
      //       <head>
      //         <meta charset="utf-8">
      //         <meta name="viewport" content="width-device-width, initial-scale=1.0">
      //         <script src="https://cdn.tailwindcss.com"></script>
      //         <script>
      //           tailwind.config = {
      //             darkMode: 'class',
      //           }

      //           function toggleMode() {
      //             const body = document.body;
      //             body.classList.toggle('light');
      //             body.classList.toggle('dark');

      //             // Obtiene el botón
      //             const button = document.getElementById('modeToggleButton');
      //             // Cambia el texto del botón según el modo actual
      //             if (body.classList.contains('light')) {
      //               button.textContent = 'Dark Mode';
      //             } else {
      //               button.textContent = 'Light Mode';
      //             }
      //           }
      //         </script>
      //       </head>
      //       <body class="light">
      //         <main class="bg-white h-full sm:h-screen flex justify-center items-start md:items-center dark:bg-slate-600">
      //           <!-- Aquí se incluirá el contenido del componente -->
      //           ${componente.html}
      //           <button id="modeToggleButton" onclick="toggleMode()" class="p-2 rounded absolute top-2 right-2 border border-[#71c4ef]">Dark Mode</button>
      //         </main>
      //       </body>
      //       </html>

      //       `}
      //       className="h-full w-full flex justify-center items-center  rounded-l-xl "
      //     />)}
      //   </div>
      //   <div
      //     className="splitter__resizer"
      //     ref={resizerRef}
      //     onMouseDown={handleMouseDown}
      //     onTouchStart={handleTouchStart}
      //   />
      //   <div className="splitter__second" ref={secondHalfRef}>
      //     flecha
      //   </div>
      // </div>

      <>
        {showCode ? (
          // h-full flex justify-center items-center bg-bg-200 dark:bg-primary-100 rounded-lg border border-accent-200 dark:border-text-200 p-4
          <pre className="bg-white  p-2 rounded-xl border border-accent-200 flex items-start overflow-scroll [width:_calc(100vw_-258px)!important;] [height:calc(100vh-170px)_!important]">
            {/* <code  className=" bg-red-500 ">
          {componente.html}
        </code> */}

            {componente.html}
          </pre>
        ) : (
          <div className="splitter" ref={containerRef}>
            <div className="splitter__first" ref={firstHalfRef}>
              <iframe
                title={`Componente ${componente.id}`}
                // className="bg-red-500"
                // srcDoc={componente.html}
                srcDoc={`<!DOCTYPE html>
            <html>
            <head>
              <meta charset="utf-8">
              <meta name="viewport" content="width-device-width, initial-scale=1.0">
              <script src="https://cdn.tailwindcss.com"></script>
              <script>
                tailwind.config = {
                  darkMode: 'class',
                  theme: {
                    extend: {
                      colors: {
                        primary: {
                          100: '#d4eaf7',
                          200: '#b6ccd8',
                          300: '#3b3c3d',
                        },
                        accent: {
                          100: '#71c4ef',
                          200: '#00668c',
                        },
                        text: {
                          100: '#1d1c1c',
                          200: '#313d44',
                        },
                        bg: {
                          100: '#fffefb',
                          200: '#f5f4f1',
                          300: '#cccbc8',
                        }
                      },
                    },
                  },
                }
            
                function toggleMode() {
                  const body = document.body;
                  body.classList.toggle('light');
                  body.classList.toggle('dark');
            
                  // Obtiene el botón
                  const button = document.getElementById('modeToggleButton');
                  // Cambia el texto del botón según el modo actual
                  if (body.classList.contains('light')) {
                    button.innerHTML = '<svg class="stroke-accent-200 group-hover:stroke-white dark:stroke-text-100 group-hover:dark:stroke-white"  stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path></svg>';
                  } else {
                    button.innerHTML = '<svg class="stroke-accent-200 group-hover:stroke-white dark:stroke-text-100 group-hover:dark:stroke-white"  stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M14.828 14.828a4 4 0 1 0 -5.656 -5.656a4 4 0 0 0 5.656 5.656z"></path><path d="M6.343 17.657l-1.414 1.414"></path><path d="M6.343 6.343l-1.414 -1.414"></path><path d="M17.657 6.343l1.414 -1.414"></path><path d="M17.657 17.657l1.414 1.414"></path><path d="M4 12h-2"></path><path d="M12 4v-2"></path><path d="M20 12h2"></path><path d="M12 20v2"></path></svg>';
                  }
                }
              </script>
            </head>
            <body class="light">
              <main class="bg-white h-full sm:h-screen flex justify-center items-start md:items-center dark:bg-slate-600">
                <!-- Aquí se incluirá el contenido del componente -->
                ${componente.html} 
           
                <!-- <div class="p-2 rounded absolute top-2 right-12 w-6 h-6 flex justify-center items-center">
                    <button id="modeToggleButton" onclick="toggleMode()" class="relative group duration-300 inline-block p-1 font-medium group rounded-full">
                    <span class="absolute rounded-full inset-0 w-full h-full transition duration-200 ease-out transform translate-x-0.5 translate-y-0.5 bg-accent-200 dark:bg-text-100 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                    <span class="absolute rounded-full inset-0 w-full h-full bg-white border-2 border-accent-200 dark:border-text-100 group-hover:dark:bg-text-100 "></span>
                    <div class="relative text-black group-hover:text-white flex justify-center items-center">
                     
                      <svg class="duration-300 flex-shrink-0 w-6 h-6 bg-white rounded-full  stroke-accent-200    group-hover:stroke-accent-200 group-hover:bg-white group-hover:dark:stroke-text-100" stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z">
                      </path>
                      </svg>
                    </div>
                  </button>
                </div> -->


              
                <!-- <button id="modeToggleButton" onclick="toggleMode()" class="p-2 rounded absolute top-2 right-2 border border-[#71c4ef] bg-[#f5f4f1]">
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z">
                </path>
                </svg>
                </button> -->

                <button id="modeToggleButton" onclick="toggleMode()" class="p-2 hover:bg-accent-200 hover:dark:bg-text-100 group z-20 rounded-full absolute top-2 right-2 border-2 border-accent-200 dark:border-text-100 duration-300 bg-bg-100 [box-shadow:1px_1px_0px_1px_#00668c] dark:[box-shadow:1px_1px_0px_1px_#1d1c1c] hover:dark:dark:[box-shadow:0px_0px_0px_0px_#1d1c1c] hover:[box-shadow:0px_0px_0px_0px_#00668c] ">
                <svg class="stroke-accent-200 group-hover:stroke-white dark:stroke-text-100 group-hover:dark:stroke-white" stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path></svg>
                </button> 

              </main>
            </body>
            </html>
            
            `}
                className="h-full w-full flex justify-center items-center  rounded-l-xl "
              />
            </div>
            <div
              className="splitter__resizer"
              ref={resizerRef}
              onMouseDown={handleMouseDown}
              onTouchStart={handleTouchStart}
            />
            <div className="splitter__second" ref={secondHalfRef}>
              <TbArrowBigLeftLinesFilled className=" text-accent-200 w-8 h-8  dark:bg-text-200 rounded-full p-1   mr-1 group-hover:bg-accent-100" />
            </div>
          </div>
        )}
      </>
    );
  };
  const toggleView = () => {
    setShowCode(!showCode);
  };
  return (
    <>
      <div className="border rounded-lg shrink-0 bg-bg-200 dark:bg-primary-100 border-accent-200 dark:border-text-200 h-52 md:h-24 p-2  col-span-5 flex md:flex-row flex-col items-center justify-between px-4">
        {/* Botones para cambiar el tamaño del contenedor */}

        <p className="font-bold p-2 md:hidden  lg:block block lg:text-2xl text-accent-200 dark:text-text-100">
          {componente.nombre}
        </p>
        <div className="flex flex-col md:flex-row gap-2 w-full md:w-fit">
          <button
            className="relative group duration-300 inline-block px-4 py-2 font-medium group rounded-full"
            onClick={copyHTMLToClipboard}
          >
            <span className="absolute rounded-full inset-0 w-full h-full transition duration-200 ease-out transform translate-x-0.5 translate-y-0.5 bg-accent-200 dark:bg-text-100 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute rounded-full inset-0 w-full h-full bg-white border-2 border-accent-200 dark:border-text-100 group-hover:dark:bg-text-100 group-hover:bg-accent-200"></span>
            <div className="relative text-black group-hover:text-white flex justify-center items-center">
              <TbCopy className="duration-300 flex-shrink-0 w-6 h-6 bg-accent-200 dark:bg-text-200  rounded-full p-1 stroke-bg-100  mr-1 group-hover:stroke-accent-200 group-hover:bg-white group-hover:dark:stroke-text-100 " />
              <p className="font-bold text-accent-200 group-hover:text-white dark:text-text-100">
                Copy
              </p>
            </div>
          </button>
          <button
            className="relative group duration-300 inline-block px-4 py-2 font-medium group rounded-full"
            onClick={toggleView}
          >
            <span className="absolute rounded-full inset-0 w-full h-full transition duration-200 ease-out transform translate-x-0.5 translate-y-0.5 bg-accent-200 dark:bg-text-100 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute rounded-full inset-0 w-full h-full bg-white border-2 border-accent-200 dark:border-text-100 group-hover:dark:bg-text-100 group-hover:bg-accent-200"></span>
            <div className="relative text-black group-hover:text-white flex justify-center items-center">
              <TbCode className="duration-300 flex-shrink-0 w-6 h-6 bg-accent-200 dark:bg-text-200  rounded-full p-1 stroke-bg-100  mr-1 group-hover:stroke-accent-200 group-hover:bg-white group-hover:dark:stroke-text-100 " />
              <p className="font-bold text-accent-200 group-hover:text-white dark:text-text-100">
                Show/Hide code
              </p>
            </div>
          </button>
          <a
            href="https://uiverse.io/profile/Javierrocadev"
            className="relative group duration-300  px-4 py-2 font-medium group rounded-full flex "
          >
            <span className="absolute rounded-full inset-0 w-full h-full transition duration-200 ease-out transform translate-x-0.5 translate-y-0.5 bg-accent-200 dark:bg-text-100 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute rounded-full inset-0 w-full h-full [background:_linear-gradient(144deg,#af40ff,#5b42f3_50%,#00ddeb);] border-2 border-accent-200 dark:border-text-100 group-hover:dark:bg-text-100 group-hover:bg-accent-200"></span>
            <div className="relative text-black group-hover:text-white flex justify-center items-center">
              <p className="font-bold text-white group-hover:text-white ">
                Need more?
              </p>
            </div>
          </a>
        </div>
      </div>
      <div className="h-full flex justify-center items-center bg-bg-200 dark:bg-primary-100 rounded-lg border border-accent-200 dark:border-text-200 p-4">
        {/* <div className="h-full flex items-start justify-start bg-bg-200 dark:bg-primary-100 rounded-lg border border-accent-200 dark:border-text-200 p-4"> */}
        {/* <div className="h-full  flex justify-center items-start overflow-scroll bg-bg-200 dark:bg-primary-100 rounded-lg border border-accent-200 dark:border-text-200 p-4"> */}
        {/* Mostrar el contenido del componente dentro del iframe */}
        <Splitter />
      </div>
    </>
  );
}

export default ComponentsComponentId;
