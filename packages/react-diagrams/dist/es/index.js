"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
const react_diagrams_core_1 = require("@projectstorm/react-diagrams-core");
const react_diagrams_defaults_1 = require("@projectstorm/react-diagrams-defaults");
const react_diagrams_routing_1 = require("@projectstorm/react-diagrams-routing");
const react_canvas_core_1 = require("@projectstorm/react-canvas-core");
__export(require("@projectstorm/react-diagrams-core"));
__export(require("@projectstorm/react-diagrams-defaults"));
__export(require("@projectstorm/react-diagrams-routing"));
/**
 * Construct an engine with the defaults installed
 */
exports.default = (options = {}) => {
    const engine = new react_diagrams_core_1.DiagramEngine(options);
    // register model factories
    engine.getLayerFactories().registerFactory(new react_diagrams_core_1.NodeLayerFactory());
    engine.getLayerFactories().registerFactory(new react_diagrams_core_1.LinkLayerFactory());
    engine.getLayerFactories().registerFactory(new react_canvas_core_1.SelectionBoxLayerFactory());
    engine.getLabelFactories().registerFactory(new react_diagrams_defaults_1.DefaultLabelFactory());
    engine.getNodeFactories().registerFactory(new react_diagrams_defaults_1.DefaultNodeFactory()); // i cant figure out why
    engine.getLinkFactories().registerFactory(new react_diagrams_defaults_1.DefaultLinkFactory());
    engine.getLinkFactories().registerFactory(new react_diagrams_routing_1.PathFindingLinkFactory());
    engine.getPortFactories().registerFactory(new react_diagrams_defaults_1.DefaultPortFactory());
    // register the default interaction behaviours
    engine.getStateMachine().pushState(new react_diagrams_core_1.DefaultDiagramState());
    return engine;
};
//# sourceMappingURL=index.js.map