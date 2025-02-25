export interface Widget {
    id: number,
    name: string,
    component: string,
    config: WidgetConfig
    dashboardId: number
}

export interface WidgetConfig {
    width: string
    height: string
}

export interface Tab {
    name: string
    id: number
}