export interface WidgetProps {
  id: string;
  opacity: number;
  visible: boolean;
  updateOpacity: (widgetId: string, newOpacity: number) => void;
  toggleVisibility: (widgetId: string) => void;
}

export interface WidgetOptions {
  opacity: number;
  visible: boolean;
  color: string;
}

export interface Widget {
  id: string;
  name: string;
  component: React.ReactNode;
  content: any;
  options: WidgetOptions;
  icon: React.ReactNode;
}

export interface WidgetConfig {
  id: string;
  component: React.ReactElement;
  opacity: number;
  visible: boolean;
}

export interface WidgetComponentProps {
  name: string;
  children: React.ReactNode;
  opacity: number;
  widgetId: string;
  color: string;
}
