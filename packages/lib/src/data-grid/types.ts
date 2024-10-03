import { ReactNode } from "react";

export type GridColumn = {
  /**
   * Key that will be rendered from each row in rows.
   */
  key: string;
  /**
   * Label that will be used for the column header.
   */
  label: string;
  /**
   * Whether the column is resizable or not.
   */
  resizable?: boolean;
  /**
   * Whether the column is sortable or not.
   */
  sortable?: boolean;
  /**
   * Custom criteria for sorting the column.
   */
  sortFn?: (_a: any, _b: any) => number;
  /**
   * Whether the column is draggable or not.
   */
  draggable?: boolean;
  /**
   * Whether the column cells are editable or not.
   */
  textEditable?: boolean;
  /**
   * Value that will be rendered from the summaryRow.
   */
  summaryKey?: string;
  /**
   * Sets the alignment inside the cells.
   */
  alignment?: "left" | "right" | "center";
};

export type GridRow = {
  /**
   * List of rows that will be rendered in each cell based on the key in each column.
   */
  [key: string]: React.ReactNode | undefined;
};

export type HierarchyGridRow = GridRow & {
  childRows?: HierarchyGridRow[] | GridRow[];
};

export type ExpandableGridRow = GridRow & {
  expandedContent?: React.ReactNode;
  expandedContentHeight?: number;
};

export type ExpandableRows = {
  rows: ExpandableGridRow[];
  /**
   * Whether the rows can expand or not.
   */
  expandable: true;
  /**
   * This prop indicates the unique key that can be used to identify each row. This prop is mandatory if selectable is set to true, expandable is set to true or rows is of type HierarchyGridRow[].
   */
  uniqueRowId: string;
};

export type HierarchyRows = {
  rows: HierarchyGridRow[];
  /**
   * This prop indicates the unique key that can be used to identify each row. This prop is mandatory if selectable is set to true, expandable is set to true or rows is of type HierarchyGridRow[].
   */
  uniqueRowId: string;
  /**
   * Whether the rows can expand or not.
   */
  expandable?: false;
};

export type SelectableGridProps =
  | {
      /**
       * Whether the rows are selectable or not.
       */
      selectable: true;
      /**
       * Set of selected rows. This prop is mandatory if selectable is set to true. The uniqueRowId key will be used to identify the each row.
       */
      selectedRows: Set<string | number>;
      /**
       * Function called whenever the selected values changes. This prop is mandatory if selectable is set to true.The uniqueRowId key will be used to identify the rows.
       */
      onSelectRows: (selectedRows: Set<number | string>) => void;
      /**
       * This prop indicates the unique key that can be used to identify each row. This prop is mandatory if selectable is set to true, expandable is set to true or rows is of type HierarchyGridRow[].
       */
      uniqueRowId: string;
    }
  | {
      selectable?: false;
      selectedRows?: never;
      onSelectRows?: never;
      uniqueRowId?: string;
    };

type PaginatedProps = CommonProps & {
  hidePaginator?: false;
  /**
   * If true, a select component for navigation between pages will be displayed.
   */
  showGoToPage?: boolean;
  /**
   * Number of items per page.
   */
  itemsPerPage?: number;
  /**
   * An array of numbers representing the items per page options.
   */
  itemsPerPageOptions?: number[];
  /**
   * This function will be called when the user selects an item per page
   * option. The value selected will be passed as a parameter.
   */
  itemsPerPageFunction?: (value: number) => void;
};

type NonPaginatedProps = CommonProps & {
  /**
   * If true, paginator will not be displayed.
   */
  hidePaginator: true;
  /**
   * If true, a select component for navigation between pages will be displayed.
   */
  showGoToPage?: never;
  /**
   * Number of items per page.
   */
  itemsPerPage?: never;
  /**
   * An array of numbers representing the items per page options.
   */
  itemsPerPageOptions?: never;
  /**
   * This function will be called when the user selects an item per page
   * option. The value selected will be passed as a parameter.
   */
  itemsPerPageFunction?: never;
};

export type CommonProps = {
  columns: GridColumn[];
  /**
   * Extra row that will be always visible.
   */
  summaryRow?: GridRow;
  /**
   * Function called whenever a cell is edited.
   */
  onGridRowsChange?: (rows: GridRow[] | HierarchyGridRow[] | ExpandableGridRow[]) => void;
};

export type BasicGridProps = {
  rows: GridRow[];
  /**
   * Whether the rows can expand or not.
   */
  expandable?: false;
};

type Props = CommonProps &
  (PaginatedProps | NonPaginatedProps) &
  (
    | (BasicGridProps & SelectableGridProps)
    | (ExpandableRows & SelectableGridProps)
    | (HierarchyRows & SelectableGridProps)
  );

export default Props;
