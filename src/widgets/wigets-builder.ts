import { Widget, WidgetConfig } from "./interfaces/widget.interface"

export class WidgetsBuilder {
    
    private widget: Widget

    constructor() {
        this.widget = {} as Widget
    }

    withId(id: number) {
        this.widget.id = id;
        return this;
    }

    withName(name: string) {
        this.widget.name = name;
        return this;
    }

    withComponent(component: string) {
        this.widget.component = component;
        return this;
    }

    withConfig(config: WidgetConfig) {
        this.widget.config = config;
        return this;
    }

    build() {
        return this.widget as Widget
    }

    withDasboard(id: number) {
        this.widget.dashboardId = id;
        return this;
    }
}