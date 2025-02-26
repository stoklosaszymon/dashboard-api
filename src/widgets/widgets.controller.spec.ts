import { Test } from "@nestjs/testing";
import { WidgetsController } from "./widgets.controller";
import { WidgetsService } from "./widgets.service";
import { WidgetsBuilder } from "./wigets-builder";
import { Widget } from "./interfaces/widget.interface";

describe('CatsController', () => {
    let widgetsController: WidgetsController;
    let widgetsService: WidgetsService;

    beforeEach(async () => {
        const moduleRef = await Test.createTestingModule({
            controllers: [WidgetsController],
            providers: [WidgetsService]
        }).compile()

        widgetsController = moduleRef.get(WidgetsController);
        widgetsService = moduleRef.get(WidgetsService);
    });

    describe('widget controller', () => {
        it('should return an array of widgets', async () => {
            let builder = new WidgetsBuilder();
            const result = [
                builder.withId(1)
                       .withName('test')
                       .withComponent('_test')
                       .withConfig({ width: '100px', height: '100px' })
                       .withDasboard(1)
                       .build()
            ];
            jest.spyOn(widgetsService, 'getWidgets').mockImplementation(() => result);

            expect(await widgetsController.getWidgets(1)).toBe(result);
        });

        it('should update widgets', async () => {
            const numOfwidgetsToInsert = 3;
            let builder = new WidgetsBuilder();
            const request: Widget[] = []
            for (let i = 0; i < numOfwidgetsToInsert; i++) {
                let widget = builder.withId(i)
                    .withName(`test${i}`)
                    .withComponent(`_test${i}`)
                    .withConfig({ width: `${i}00px`, height: `${i}00px` })
                    .build()
                request.push(widget);
            }

            jest.spyOn(widgetsService, 'getWidgets').mockImplementation(() => request)
            expect(await widgetsController.updateWidgets(request)).toBe(request);
        })
    });
});