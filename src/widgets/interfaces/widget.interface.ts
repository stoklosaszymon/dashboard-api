export interface Widget {
    id: number,
    name: string,
    component: string,
    config: WidgetConfig
}

export interface WidgetConfig {
    width: string
    height: string
}
