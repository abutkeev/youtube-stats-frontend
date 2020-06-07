import EventEmitter from 'events';
import * as Types from './eventTypes';

class eventEmitterHolder extends EventEmitter {
    static eventEmitter

    static getEventEmitter() {
        if (!this.eventEmitter) {
            this.eventEmitter = new this()
        }
        return this.eventEmitter
    }
}

export const EventTypes = Types
export default eventEmitterHolder.getEventEmitter()
