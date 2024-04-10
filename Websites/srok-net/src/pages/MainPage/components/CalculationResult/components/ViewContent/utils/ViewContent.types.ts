export interface ResultComponent {
  title: string;
  days?: number;
  date?: string;
  fromApilation?: {
    data: number | undefined;
    subtitle: string;
  };
}
