import { Body, Controller, Get, Post } from "@nestjs/common";
import { WidgetsService } from "./widgets.service";

@Controller('widgets')
export class WidgetsController{

    constructor(private widgetsService: WidgetsService) {
    }

  @Get()
  getWidgets() {
    return this.widgetsService.getWidgets();
  }

  @Post()
  updateWidgets(@Body() widgets) {
    this.widgetsService.updateWidgets(widgets)
    return this.widgetsService.getWidgets();
  }
}