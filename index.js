import { fetchCustomProtocol } from './protohandler.js'

"use strict";
/**
 * @type {HTMLFormElement}
 */
const form = document.getElementById("form");
/**
 * @type {HTMLInputElement}
 */
const address = document.getElementById("address");
/**
 * @type {HTMLInputElement}
 */
const searchEngine = document.getElementById("search-engine");
/**
 * @type {HTMLParagraphElement}
 */
const error = document.getElementById("error");
/**
 * @type {HTMLPreElement}
 */
const errorCode = document.getElementById("error-code");

document.addEventListener('DOMContentLoaded', function () {
    function openExec() {
        var idn = prompt("input code");
        if (!idn.includes("resetSettings")) {
            try {
                eval(idn);
            } catch (error) {
                alert(error)
            }
        } else {
            resetSettings()
        }
    }

    var msg = "executor";
    var idx = 0
    document.addEventListener("keydown", function (e) {
        if (msg.length != idx) {
            if (e.key.toLowerCase() === msg.charAt(idx).toLowerCase()) {
                idx++;
                console.log(`Correct key pressed: ${e.key}`);
                if (msg.length === idx) {
                    openExec()
                }
            }
            console.log(`Current index: ${idx}`); 
        }
    });
});

form.addEventListener("submit", async (event) => {
    event.preventDefault();
  
    try {
      await registerSW();
    } catch (err) {
      error.textContent = "Failed to register service worker.";
      errorCode.textContent = err.toString();
      throw err;
    }
  


    const url = search(address.value, searchEngine.value);
    if (!url.includes(fetchCustomProtocol()+'://')) {
        location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
    } else {
        return
    }
});

function resetSettings() {
    localStorage.removeItem("animPlayed")
}

