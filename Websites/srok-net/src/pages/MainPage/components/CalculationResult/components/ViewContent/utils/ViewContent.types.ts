export interface ResultComponent {
  title: string;
  days?: number;
  date?: string | number;
  fromApilation?: {
    data: number | undefined;
    subtitle: string;
  };
}
