/**
 * (#)index.mjs 1.2.0   08/29/2023
 *
 * Copyright (c) Jonathan M. Parker
 * 324 Lantana Drive
 * Owings Mills, MD  21117 U.S.A
 * All Rights Reserved.
 */

import Yargs from "yargs";

export function parseString(str) {
    const args = Yargs(str).argv;

    let name = args.name;
    let age = args.age;

    return { name, age }
}

function parseAndLogString(str) {
    let { name, age } = parseString(str)

    console.log(name);
    console.log(age);
}

function handle() {
    parseAndLogString('--name Jonathan --age 61')
    parseAndLogString('--name Sophia --age 32')
}

handle()

