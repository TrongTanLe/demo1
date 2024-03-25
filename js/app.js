/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  /******/ var __webpack_modules__ = [
    ,
    /* 0 */ /* 1 */
    /***/ (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
        /* harmony export */
      });
      const scrollAnimation = () => {
        const animItems = document.querySelectorAll(".animate");

        const animObserver = new IntersectionObserver(
          (entries, observer) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                const target = entry.target;
                target.classList.add("active");
                observer.unobserve(target);
              }
            });
          },
          {
            threshold: 0.3,
          }
        );

        animItems.forEach((animItem) => {
          animObserver.observe(animItem);
        });
      };

      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
        scrollAnimation;

      /***/
    },
    /* 2 */
    /***/ (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
        /* harmony export */
      });
      const appHeight = () => {
        const doc = document.documentElement;
        doc.style.setProperty("--app-height", `${window.innerHeight}px`);
      };

      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = appHeight;

      /***/
    },
    /******/
  ];
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /************************************************************************/
  var __webpack_exports__ = {};
  // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
  (() => {
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _modules_animations_scrollAnimation_js__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(1);
    /* harmony import */ var _modules_functions_appHeight_js__WEBPACK_IMPORTED_MODULE_1__ =
      __webpack_require__(2);

    (0,
    _modules_functions_appHeight_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
    (0,
    _modules_animations_scrollAnimation_js__WEBPACK_IMPORTED_MODULE_0__[
      "default"
    ])();

    const scrollToSection = (link, e) => {
      e.preventDefault();
      const target = link.getAttribute("href").replace("#", "");
      const section = document.querySelector(`.${target}`);
      const scrollValue =
        section.getBoundingClientRect().top +
        scrollY -
        document.querySelector(".header").offsetHeight;

      window.scrollTo({
        top: scrollValue,
        behavior: "smooth",
      });
    };

    /*
    const paralax = (item, x) => {
        const animObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = entry.target;
                    let translate = target.getBoundingClientRect().y / 10;
                    item.style.cssText = `transform:translate(${x},${translate}px);`;
                    observer.unobserve(target);
                }
            });
        }, {
            threshold: 0.3
        });
    
        animObserver.observe(item);
    } */

    let video_initial_launch = true;

    // function playVideo() {
    //   var video = document.getElementById("dogVideo");
    //   video.muted = false;
    //   if (video.paused && video_initial_launch) {
    //     video.play();
    //   }
    // }

    function togglePlayPause() {
      video_initial_launch = false;

      if (!video_initial_launch) {
        var video = document.getElementById("dogVideo");
        document.getElementById("dogVideo").muted = false;
        // Toggle play/pause
        if (video.paused) {
          video.play();
        } else {
          //video.loop = false;
          video.pause();
        }
      }
    }

    // Add click event listener to the TV element
    document
      .getElementById("tv_container")
      .addEventListener("click", togglePlayPause);

    document.addEventListener("click", playVideo);
    document.addEventListener("keydown", playVideo);
    document.addEventListener("touchstart", playVideo);

    const copy = (btn) => {
      const value = btn.previousElementSibling.innerHTML;
      navigator.clipboard.writeText(value);
    };

    document.addEventListener("scroll", (e) => {
      // paralax(document.querySelector('.tokenomics__image'), '0');
      //paralax(document.querySelector('.about__image img'), '0');
      playVideo();
    });

    window.addEventListener("resize", () => {
      (0,
      _modules_functions_appHeight_js__WEBPACK_IMPORTED_MODULE_1__[
        "default"
      ])();
    });

    document.addEventListener("click", (e) => {
      const menuLink = e.target.closest(".menu__link");
      if (menuLink) {
        scrollToSection(menuLink, e);
      }

      const copyBtn = e.target.closest(".info__copy");
      if (copyBtn) {
        copy(copyBtn);
      }
    });

    window.Jupiter.init({
      displayMode: "integrated",
      integratedTargetId: "integrated-terminal",
      //endpoint: "https://api.mainnet-beta.solana.com",
      //endpoint: "https://solitary-twilight-telescope.solana-mainnet.quiknode.pro/e082ac1a601385278bf034227cf27ec3d0fb5526/",
      endpoint:
        "https://mainnet.helius-rpc.com/?api-key=cc4cba07-9f22-4212-8d30-785632c152f4",
      strictTokenList: false,
      formProps: {
        fixedOutputMint: true,
        initialInputMint: "So11111111111111111111111111111111111111112",
        initialOutputMint: "AHW5N8iqZobTcBepkSJzZ61XtAuSzBDcpxtrLG6KUKPk",
      },
    });
  })();

  /******/
})();
