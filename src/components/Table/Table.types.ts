export interface Column {
  header: string; // ❌ required
  accessor: string;
  render?: (value: any, row?: any) => React.ReactNode;
  fixed?: "left" | "right";
}

export interface TableProps {
  columns: Column[];
  data: Record<string, any>[];
}
