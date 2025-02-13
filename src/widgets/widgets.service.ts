import { Injectable } from "@nestjs/common";
import { Widget } from "./interfaces/widget.interface";

@Injectable()
export class WidgetsService {

    private widgets: Widget[] = [];

    getWidgets(): Widget[] {
        return this.widgets;
    }

    updateWidgets(widgets: Widget[]): Widget[] {
        this.widgets = widgets;
        return widgets
    }
}