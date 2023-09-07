/**
 * (#)index.mjs 1.0.0   08/29/2023
 *
 * Copyright (c) Jonathan M. Parker
 * 324 Lantana Drive
 * Owings Mills, MD  21117 U.S.A
 * All Rights Reserved.
 */

import { commandLineHandlers } from "./command-line-handlers.mjs";
import { config } from "../config.mjs";
import { hideBin } from "yargs/helpers";

import Yargs from "yargs";

/*
 * @todo
 * Create a config file and set commandLineHandling
 * with the result of the value in the configuration
 * A default positional should be defined to enable
 * the location of the configuration file.
 */

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

    return { name, age };
}

/**
 * Parse the string into
 * name and age values and
 * log them to the console.
 *
 * @param  {String} str The string
 */
function parseAndLogString(str) {
    let { name, age } = parseString(str);

    console.log(name);
    console.log(age);
}

/**
 * A simple handling of
 * the command line arguments.
 */
function simpleCommandLine() {
    const args = Yargs(hideBin(process.argv)).argv;

    let ships = args.ships;
    let distance = args.distance;

    if (ships !== undefined)
        console.log(`Ships   : ${ships}`);

    if (distance !== undefined)
        console.log(`Distance: ${distance}`);
}

/**
 * A complex handling of
 * the command line arguments.
 */
function complexCommandLine() {
    const args = Yargs(hideBin(process.argv))
        .command('sail [ships] [distance]', 'sail the seas', (yargs) => {
            return yargs
                .positional('ships', {
                    describe: 'how many ships',
                    default: config.defaults.ships
                })
                .positional('distance', {
                    describe: 'how far to travel',
                    default: config.defaults.distance
                })
                .option('verbose', {
                    alias: 'v',
                    type: 'boolean',
                    description: 'Run with verbose logging'
                })
        }, function (argv) {
            if (argv.verbose)
                console.info(`Verbose logging is enabled`);
        })
        .default('ships', config.defaults.ships)
        .default('distance', config.defaults.distance)
        .help()
        .argv;

    let ships = args.ships;
    let distance = args.distance;
    let verbose = args.verbose;

    console.log(`Ships   : ${ships}`);
    console.log(`Distance: ${distance}`);

    if (verbose)
        console.log('I am verbose');
}

/**
 * Set the command line handling option.
 *
 * @returns {number}
 */
function getCommandLineHandling() {
    if (config.commandLineHandling.toLowerCase() === 'complex')
        return commandLineHandlers.COMPLEX;
    else if (config.commandLineHandling.toLowerCase() === 'simple')
        return commandLineHandlers.SIMPLE;
    else
        return commandLineHandlers.UNDEFINED;
}

/**
 * The handle function.
 */
function handle() {
    for (const person of config.people) {
        parseAndLogString(`--name ${person.name} --age ${person.age}`);
    }

    // The functional equivalent
    
    config.people.forEach((person) => parseAndLogString(`--name ${person.name} --age ${person.age}`));

    switch(getCommandLineHandling()) {
        case commandLineHandlers.SIMPLE:
            simpleCommandLine();
            break;
        case commandLineHandlers.COMPLEX:
            complexCommandLine();
            break;
        case commandLineHandlers.UNDEFINED:
            console.log(`Unrecognized command line handler: ${config.commandLineHandling}`);
            break;
        default:
            throw new Error('Unexpected value returned from getCommandLineHandling()');
    }
}

handle();
