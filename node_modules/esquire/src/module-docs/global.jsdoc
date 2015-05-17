/**
 * A module exposing the _global_
 * [`window`](https://developer.mozilla.org/en-US/docs/Web/API/Window)
 * reference (in browsers) or whatever other object supposedly holds all
 * _global_ definitions.
 *
 * The primary intent of this module is to be used with
 * [web workers](https://developer.mozilla.org/en-US/docs/Web/Guide/Performance/Using_web_workers)
 * where some (most?) of the `window` objects and methods are exposed through
 * the `self` global reference, or with _Node.JS_ where `global` is used.
 *
 * @module {*} $global
 * @example -
 * Esquire.define("crypto", ['$global'], function($global) {
 *   var subtle = $global.crypto.subtle;
 *   //...
 * });
 */
