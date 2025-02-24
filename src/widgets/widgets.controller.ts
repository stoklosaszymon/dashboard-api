import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import { WidgetsService } from "./widgets.service";
import { Widget } from "./interfaces/widget.interface";

@Controller('widgets')
export class WidgetsController {

  constructor(private widgetsService: WidgetsService) {
  }

  @Get(':id')
  getWidgets(@Param('id') id: number) {
    return this.widgetsService.getWidgets();
  }

  @Post()
  updateWidgets(@Body() widgets: Widget[]) {
    this.widgetsService.updateWidgets(widgets)
    return this.widgetsService.getWidgets();
  }
}