let wasm;
export function __wbg_set_wasm(val) {
    wasm = val;
}

/**
 * @param {number} x
 * @param {number} y
 * @returns {number}
 */
export function add(x, y) {
    const ret = wasm.add(x, y);
    return ret;
}

export function __wbindgen_init_externref_table() {
    const table = wasm.__wbindgen_export_0;
    const offset = table.grow(4);
    table.set(0, undefined);
    table.set(offset + 0, undefined);
    table.set(offset + 1, null);
    table.set(offset + 2, true);
    table.set(offset + 3, false);
    ;
};

