import { Injectable } from "@nestjs/common";
import { Tab, Widget } from "./interfaces/widget.interface";
import { log } from "console";

@Injectable()
export class WidgetsService {

    private widgets: Widget[] = [];
    private tabs: Tab[] = [ {id: 1, name: 'New Tab'}]

    getWidgets(id: number): Widget[] {
        if (id != 0) {
            return this.widgets.filter(widget => widget.dashboardId == id);
        } else {
            return this.widgets
        }
    }

    getTabs() {
        return this.tabs;
    }

    createTab(tabName: string) {
        let tab = { id: this.tabs.length + 1, name: tabName } as Tab
        this.tabs.push(tab);
        return tab;
    }

    updateTab(newTab: Tab) {
        let index = this.tabs.findIndex(tab => tab.id === newTab.id);
        this.tabs[index].name = newTab.name
        return this.tabs[index];
    }

    updateWidgets(widgets: Widget[]): Widget[] {
        this.widgets = [ ...this.widgets.filter(widget => widget.dashboardId != widgets[0].dashboardId), ...widgets];
        return widgets
    }
}