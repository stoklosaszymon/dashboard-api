import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { WidgetsService } from "./widgets.service";
import { Tab, Widget } from "./interfaces/widget.interface";
import { get } from "http";

@Controller('widgets')
export class WidgetsController {

  constructor(private widgetsService: WidgetsService) {
  }

  @Get(':id')
  getWidgets(@Param('id') id: number) {
    return this.widgetsService.getWidgets();
  }

  @Get('www/tabs')
  getTabs() {
    return this.widgetsService.getTabs();
  }

  @Post('www/tab') 
  createTab(@Body() tab: Tab) {
    return this.widgetsService.createTab(tab.name)
  }

  @Post()
  updateWidgets(@Body() widgets: Widget[]) {
    this.widgetsService.updateWidgets(widgets)
    return this.widgetsService.getWidgets();
  }
}