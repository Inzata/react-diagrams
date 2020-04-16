"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Toolkit_1 = require("../Toolkit");
/**
 * Base observer pattern class for working with listeners
 */
class BaseObserver {
    constructor() {
        this.listeners = {};
    }
    fireEventInternal(fire, k, event) {
        this.iterateListeners(listener => {
            // returning false here will instruct itteration to stop
            if (!fire && !event.firing) {
                return false;
            }
            // fire selected listener
            if (listener[k]) {
                listener[k](event);
            }
        });
    }
    fireEvent(event, k) {
        event = Object.assign({ firing: true, stopPropagation: () => {
                event.firing = false;
            } }, event);
        // fire pre
        this.fireEventInternal(true, 'eventWillFire', Object.assign({}, event, { function: k }));
        // fire main event
        this.fireEventInternal(false, k, event);
        // fire post
        this.fireEventInternal(true, 'eventDidFire', Object.assign({}, event, { function: k }));
    }
    iterateListeners(cb) {
        for (let id in this.listeners) {
            const res = cb(this.listeners[id]);
            // cancel itteration on false
            if (res === false) {
                return;
            }
        }
    }
    getListenerHandle(listener) {
        for (let id in this.listeners) {
            if (this.listeners[id] === listener) {
                return {
                    id: id,
                    listner: listener,
                    deregister: () => {
                        delete this.listeners[id];
                    }
                };
            }
        }
    }
    registerListener(listener) {
        const id = Toolkit_1.Toolkit.UID();
        this.listeners[id] = listener;
        return {
            id: id,
            listner: listener,
            deregister: () => {
                delete this.listeners[id];
            }
        };
    }
    deregisterListener(listener) {
        if (typeof listener === 'object') {
            listener.deregister();
            return true;
        }
        const handle = this.getListenerHandle(listener);
        if (handle) {
            handle.deregister();
            return true;
        }
        return false;
    }
}
exports.BaseObserver = BaseObserver;
//# sourceMappingURL=BaseObserver.js.map