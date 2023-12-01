/**
 * (#)config.mjs    1.0.0   09/07/2023
 *
 * Copyright (c) Jonathan M. Parker
 * All Rights Reserved.
 * 
 * @author    Jonathan Parker
 * @version   1.0.0
 * @since     1.0.0
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
