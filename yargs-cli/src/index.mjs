/**
 * (#)index.mjs 1.0.0   08/29/2023
 *
 * Copyright (c) Jonathan M. Parker
 * 324 Lantana Drive
 * Owings Mills, MD  21117 U.S.A
 * All Rights Reserved.
 */

import Yargs from "yargs";

/**
 * Parse the string into
 * name and age values.
 *
 * @param   {String} str The string
 * @returns { String, any } The name and age
 */
export function parseString(str) {
    const args = Yargs(str).argv;

    let name = args.name;
    let age = args.age;

    return { name, age }
}

/**
 * Parse the string into
 * name and age values and
 * log them to the console.
 *
 * @param  {String} str The string
 */
function parseAndLogString(str) {
    let { name, age } = parseString(str)

    console.log(name);
    console.log(age);
}

/**
 * The handle function.
 */
function handle() {
    parseAndLogString('--name Jonathan --age 61')
    parseAndLogString('--name Sophia --age 32')
}

handle()

