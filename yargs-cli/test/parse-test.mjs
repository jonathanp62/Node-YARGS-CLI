/**
 * (#)parse-test.mjs    1.0.0   08/29/2023
 *
 * Copyright (c) Jonathan M. Parker
 * All Rights Reserved.
 * 
 * @author    Jonathan Parker
 * @version   1.0.0
 * @since     1.0.0
 */

import { parseString } from "../src/index.mjs";
import { test } from "node:test";

import assert from "assert/strict";

test('Test name before age', async (t) => {
    // This test passes because the Promise returned by the async
    // function is not rejected.

    let { name, age } = parseString("--name MyName --age 35")

    assert.strictEqual(name, "MyName");
    assert.strictEqual(age, 35);
});

test('Test age before name', async (t) => {
    // This test passes because the Promise returned by the async
    // function is not rejected.

    let { name, age } = parseString("--age 35 --name MyName")

    assert.strictEqual(name, "MyName");
    assert.strictEqual(age, 35);
});
