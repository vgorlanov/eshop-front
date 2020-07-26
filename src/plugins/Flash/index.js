import FlashList from "./FlashList";

const FlashStore = {
    state: [],

    removeFlash(timestamp) {
        const indexToDelete = this.state.findIndex(n => n.timestamp === timestamp)
        if (indexToDelete !== -1) {
            this.state.splice(indexToDelete, 1);
        }
    },

    addAlert(alert) {
        alert.timestamp = new Date();
        alert.timestamp.setMilliseconds(
            alert.timestamp.getMilliseconds() + this.state.length
        );
        this.state.push(alert)
    },

    notify(alert) {
        if(Array.isArray(alert)) {
            alert.forEach(alertInstance => {
                this.addAlert(alertInstance)
            });
        } else {
            this.addAlert(alert)
        }
    },
}

const AlertPlugin = {
    install(Vue) {
        Vue.mixin({
            data: () => ({
                flashStore: FlashStore
            }),
            methods: {
                notify(notification) {
                    this.flashStore.notify(notification)
                }
            }
        });
        Object.defineProperty(Vue.prototype, "$flash", {
            get() {
                return this.$root.notify
            }
        });
        Object.defineProperty(Vue.prototype, "$flashStore", {
            get() {
                return this.$root.flashStore;
            }
        });
        Vue.component("Flash", FlashList)
    }
}

export default AlertPlugin;
