export interface WidgetProps {
  id: string;
  opacity: number;
  visible: boolean;
  updateOpacity: (widgetId: string, newOpacity: number) => void;
  toggleVisibility: (widgetId: string) => void;
}

export interface Widget {
  id: string;
  component: React.ReactNode;
  opacity: number;
  visible: boolean;
  icon: React.ReactNode;
}

export interface WidgetConfig {
  id: string;
  component: React.ReactElement;
  opacity: number;
  visible: boolean;
}

export interface WidgetComponentProps {
  children: React.ReactNode;
  opacity: number;
  widgetId: string;
}
