import { Injectable } from "@nestjs/common";
import { Tab, Widget } from "./interfaces/widget.interface";

@Injectable()
export class WidgetsService {

    private widgets: Widget[] = [];
    private tabs: Tab[] = [ {id: 1, name: 'New Tab'}]

    getWidgets(): Widget[] {
        return this.widgets;
    }

    getTabs() {
        return this.tabs;
    }

    createTab(tabName: string) {
        let tab = { id: this.tabs.length + 1, name: tabName } as Tab
        this.tabs.push(tab);
        return tab;
    }

    updateWidgets(widgets: Widget[]): Widget[] {
        this.widgets = widgets;
        return widgets
    }
}