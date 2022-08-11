import React from "react";

export default function Footer() {
  return (
    <div>
      <hr class=" border-gray-200 sm:mx-auto dark:border-gray-700 " />
      <span class="p-6 block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2022 Data fetch from{" "}
        <a href="https://pokeapi.co/" class="hover:underline">
          Pokeapi
        </a>
      </span>
    </div>
  );
}
