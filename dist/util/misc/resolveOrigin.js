var originOffset = {
    left: -0.5,
    top: -0.5,
    center: 0,
    bottom: 0.5,
    right: 0.5,
};
/**
 * Resolves origin value relative to center
 * @private
 * @param {TOriginX | TOriginY} originValue originX / originY
 * @returns number
 */
export var resolveOrigin = function (originValue) {
    return typeof originValue === 'string'
        ? originOffset[originValue]
        : originValue - 0.5;
};
