type Spaces = "0rem" | "0.125rem" | "0.25rem" | "0.5rem" | "1rem" | "1.5rem" | "2rem" | "3rem" | "4rem" | "5rem";
type Gap = { rowGap?: Spaces; columnGap?: Spaces };
type GridCell = { start: number | string; end: number | string };

export type GridItemProps = {
  areaName?: string;
  column?: number | string | GridCell;
  row?: number | string | GridCell;
  placeSelf?:
    | {
        alignSelf?: "auto" | "start" | "end" | "center" | "stretch" | "baseline";
        justifySelf?: "auto" | "start" | "end" | "center" | "stretch" | "baseline";
      }
    | "auto"
    | "start"
    | "end"
    | "center"
    | "stretch"
    | "baseline";
  as?: keyof HTMLElementTagNameMap;
  children: React.ReactNode;
};

type Props = GridItemProps & {
  autoColumns?: string;
  autoRows?: string;
  autoFlow?: "row" | "column" | "row dense" | "column dense";
  gap?: Spaces | Gap;
  placeContent?:
    | {
        alignContent?:
          | "normal"
          | "start"
          | "end"
          | "center"
          | "stretch"
          | "space-between"
          | "space-around"
          | "space-evenly"
          | "baseline";
        justifyContent?:
          | "normal"
          | "start"
          | "end"
          | "center"
          | "stretch"
          | "space-between"
          | "space-around"
          | "space-evenly"
          | "baseline";
      }
    | "normal"
    | "start"
    | "end"
    | "center"
    | "stretch"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "baseline";
  placeItems?:
    | {
        alignItems?: "normal" | "start" | "end" | "center" | "stretch" | "baseline";
        justifyItems?: "normal" | "start" | "end" | "center" | "stretch" | "baseline";
      }
    | "normal"
    | "start"
    | "end"
    | "center"
    | "stretch"
    | "baseline";
  templateAreas?: string[];
  templateColumns?: string[];
  templateRows?: string[];
};

export default Props;
