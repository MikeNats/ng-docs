/**
 * A set of dynamic modules exposing the _members_ of `$global`.
 *
 * This is mostly useful to resolve `window` members in a browser, when those
 * can be _prefixed_ by the various proprietary schemes.
 *
 * Both the `$global/any` (standard) and `$global.any` (alternative) naming
 * schemes are supported, with module names and dependencies being canonicalized
 * to their standard format.
 *
 * @module {*} module:$global/*
 * @example -
 * Esquire.define("crypto", ['$global/crypto.subtle'], function(subtle) {
 *   // "subtle" here can be one of
 *   // - "$global.crypto.subtle"
 *   // - "$global.msCrypto.subtle"
 *   // - "$global.crypto.webkitSubtle"
 *   // - ... or variations thereof
 * });
 */
