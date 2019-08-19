#!/usr/bin/env node
"use strict";
/** **************************************************************************
 * Main script for TeqFW based application to perform any available command.
 *
 *  Usage: npm --experimental-modules ./bin/tequila.mjs
 * ************************************************************************ */
const VERSION = "0.1.0"; // SET CURRENT VERSION FOR YOUR APP HERE

/* Initialize global environment before importing the application. */
import {fileURLToPath} from "url";
import {dirname, join} from 'path';
// Import application sources and create app instance
import App from "teqfw-core-app";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PATH_ROOT = join(__dirname, "..");

/** @type {TeqFw_Core_App_Instance} */
const app = new App({
    root: PATH_ROOT,
    version: VERSION
});
// ... then run the application
app.start();