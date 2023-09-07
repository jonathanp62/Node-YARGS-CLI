/**
 * (#)config.mjs    1.0.0   09/07/2023
 *
 * Copyright (c) Jonathan M. Parker
 * 324 Lantana Drive
 * Owings Mills, MD  21117 U.S.A
 * All Rights Reserved.
 */

/**
 * The configuration.
 *
 * @type {{commandLineHandling: string}}
 */
export const config = {
    commandLineHandling: 'complex',
    defaults: {
        distance: 50,
        ships: 5
    },
    people:
        [
            {
                name: 'Jonathan',
                age: 61
            },
            {
                name: 'Dena',
                age: 68
            },
            {
                name: 'Lauren',
                age: 34
            }
        ]
};
