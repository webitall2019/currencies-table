import { ReactElement } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useColumns, useRows } from "../../hooks/index";

export default function Table(): ReactElement {
  return (
    <div
      style={{ width: "100%", height: "100vh" }}
      className="table"
      data-testid="table"
    >
      <DataGrid
        rows={useRows()}
        columns={useColumns()}
        initialState={{
          sorting: {
            sortModel: [{ field: "curPrice", sort: "asc" }],
          },
        }}
      />
    </div>
  );
}
