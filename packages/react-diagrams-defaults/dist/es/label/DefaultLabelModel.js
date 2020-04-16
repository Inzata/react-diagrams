"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_diagrams_core_1 = require("@projectstorm/react-diagrams-core");
class DefaultLabelModel extends react_diagrams_core_1.LabelModel {
    constructor(options = {}) {
        super(Object.assign({}, options, { offsetY: options.offsetY == null ? -23 : options.offsetY, type: 'default' }));
    }
    setLabel(label) {
        this.options.label = label;
    }
    deserialize(event) {
        super.deserialize(event);
        this.options.label = event.data.label;
    }
    serialize() {
        return Object.assign({}, super.serialize(), { label: this.options.label });
    }
}
exports.DefaultLabelModel = DefaultLabelModel;
//# sourceMappingURL=DefaultLabelModel.js.map