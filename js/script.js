// Created by: BigPanda
// Created on: March 2024
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/Task-Website/sw.js", {
    scope: "/Task-Website/",
  })
}

//Function
